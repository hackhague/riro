export const runtime = "edge";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";
import { sendContactNotifications } from "@/lib/notifications";

const TOKEN_BUCKET_CAPACITY = 5;
const TOKEN_BUCKET_REFILL_MS = 60_000;
const MIN_SUBMISSION_DELAY_MS = 1_000;
const MAX_FUTURE_DRIFT_MS = 10_000;

const rateLimitBuckets = new Map<
  string,
  {
    tokens: number;
    lastRefill: number;
  }
>();

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function consumeToken(ip: string) {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip) ?? {
    tokens: TOKEN_BUCKET_CAPACITY,
    lastRefill: now,
  };

  if (now - bucket.lastRefill >= TOKEN_BUCKET_REFILL_MS) {
    bucket.tokens = TOKEN_BUCKET_CAPACITY;
    bucket.lastRefill = now;
  }

  if (bucket.tokens <= 0) {
    rateLimitBuckets.set(ip, bucket);
    return false;
  }

  bucket.tokens -= 1;
  rateLimitBuckets.set(ip, bucket);
  return true;
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht").max(200),
  contact: z.string().trim().min(3, "Contactgegeven is verplicht").max(200),
  message: z.string().trim().min(1, "Bericht is verplicht").max(4000),
  honeypot: z.string().optional(),
  timestamp: z.coerce.number().optional(),
});

type ContactMessageInsert = Database["public"]["Tables"]["contact_messages"]["Insert"];

type ContactChannel = {
  email: string | null;
  phone: string | null;
};

const extractContactChannel = (value: string): ContactChannel => {
  const trimmed = value.trim();

  if (trimmed.includes("@")) {
    return { email: trimmed.toLowerCase(), phone: null };
  }

  const normalizedPhone = trimmed.replace(/[^+\d]/g, "");
  return { email: null, phone: normalizedPhone || trimmed };
};

const toMetadata = (request: Request): Record<string, string> | null => {
  const metadataEntries = [
    ["userAgent", request.headers.get("user-agent")],
    ["referer", request.headers.get("referer") ?? request.headers.get("referrer")],
  ].filter(([, value]) => Boolean(value)) as Array<[string, string]>;

  if (metadataEntries.length === 0) {
    return null;
  }

  return Object.fromEntries(metadataEntries);
};

const getSupabaseConfig = () => {
  const url =
    process.env.SUPABASE_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    process.env.VITE_SUPABASE_URL ??
    null;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SERVICE_KEY ??
    process.env.PRIVATE_SUPABASE_SERVICE_ROLE_KEY ??
    process.env.PRIVATE_SUPABASE_SERVICE_KEY ??
    null;

  return url && serviceKey
    ? { url, serviceKey }
    : null;
};

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (!consumeToken(ip)) {
    console.warn("Contact form rate limit exceeded", { ip, path: request.url });
    return NextResponse.json(
      { error: "Te veel verzoeken. Probeer het later opnieuw." },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil(TOKEN_BUCKET_REFILL_MS / 1000).toString(),
        },
      }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch (error) {
    console.warn("Invalid JSON payload received for contact endpoint", { ip, error });
    return NextResponse.json({ error: "Ongeldige JSON payload" }, { status: 400 });
  }

  const parsedResult = contactSchema.safeParse(rawBody);

  if (!parsedResult.success) {
    console.warn("Contact payload validation failed", { ip, issues: parsedResult.error.flatten() });
    const message = parsedResult.error.issues[0]?.message ?? "Ongeldig verzoek";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const { honeypot, timestamp, ...contactData } = parsedResult.data;
  const honeypotValue = (honeypot ?? "").trim();

  if (honeypotValue) {
    console.warn("Contact honeypot field triggered", { ip });
    return NextResponse.json({ error: "Verdacht verzoek geblokkeerd" }, { status: 400 });
  }

  const submissionTimestamp =
    typeof timestamp === "number" && Number.isFinite(timestamp) ? timestamp : undefined;

  if (!submissionTimestamp) {
    console.warn("Contact submission missing timestamp", { ip, timestamp });
    return NextResponse.json({ error: "Verdacht verzoek geblokkeerd" }, { status: 400 });
  }

  const now = Date.now();
  const timeSinceRender = now - submissionTimestamp;

  if (submissionTimestamp - now > MAX_FUTURE_DRIFT_MS) {
    console.warn("Contact submission timestamp too far in the future", {
      ip,
      submissionTimestamp,
      now,
    });
    return NextResponse.json({ error: "Verdacht verzoek geblokkeerd" }, { status: 400 });
  }

  if (timeSinceRender < MIN_SUBMISSION_DELAY_MS) {
    console.warn("Contact submission failed timestamp check", { ip, timeSinceRender });
    return NextResponse.json({ error: "Verdacht verzoek geblokkeerd" }, { status: 400 });
  }

  const metadata = toMetadata(request);
  const { email, phone } = extractContactChannel(contactData.contact);
  let recordId: string | number | null = null;

  const supabaseConfig = getSupabaseConfig();

  if (supabaseConfig) {
    try {
      const res = await fetch(`${supabaseConfig.url.replace(/\/$/, "")}/rest/v1/contact_messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseConfig.serviceKey,
          Authorization: `Bearer ${supabaseConfig.serviceKey}`,
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          name: contactData.name,
          contact: contactData.contact,
          email,
          phone,
          message: contactData.message,
          metadata,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Failed to store contact message in Supabase", res.status, text);
        return NextResponse.json({ error: "Opslaan van bericht is mislukt" }, { status: 500 });
      }

      const data = await res.json().catch(() => null);
      recordId = (Array.isArray(data) ? data[0]?.id : data?.id) ?? null;
    } catch (error) {
      console.error("Failed to store contact message in Supabase", error);
      return NextResponse.json({ error: "Opslaan van bericht is mislukt" }, { status: 500 });
    }
  }

  try {
    await sendContactNotifications({
      name: contactData.name,
      contact: contactData.contact,
      message: contactData.message,
      recordId,
      metadata: metadata ?? undefined,
      customerEmail: email,
    });
  } catch (error) {
    console.warn("Contact notification failed, attempting webhook fallback", error);
    const webhook =
      process.env.CONTACT_NOTIFICATION_WEBHOOK_URL ||
      process.env.ZAPIER_CONTACT_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL ||
      process.env.VITE_ZAPIER_WEBHOOK_URL ||
      null;

    if (webhook) {
      try {
        await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "contact",
            payload: {
              name: contactData.name,
              contact: contactData.contact,
              message: contactData.message,
              recordId,
              metadata,
              email,
              phone,
            },
          }),
        });
      } catch (e) {
        console.error("Contact webhook fallback failed", e);
      }
    }
  }

  return NextResponse.json({ success: true });
}
