import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/integrations/supabase/types";
import { sendContactNotifications } from "@/lib/notifications";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Naam is verplicht").max(200),
  contact: z.string().trim().min(3, "Contactgegeven is verplicht").max(200),
  message: z.string().trim().min(1, "Bericht is verplicht").max(4000),
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
  let parsed;

  try {
    const json = await request.json();
    parsed = contactSchema.parse(json);
  } catch (error) {
    const message =
      error instanceof z.ZodError ? error.issues[0]?.message ?? "Ongeldig verzoek" : "Ongeldige JSON payload";
    return NextResponse.json({ error: message }, { status: 400 });
  }

  const metadata = toMetadata(request);
  const { email, phone } = extractContactChannel(parsed.contact);
  let recordId: string | number | null = null;

  const supabaseConfig = getSupabaseConfig();

  if (supabaseConfig) {
    const supabase = createClient<Database>(supabaseConfig.url, supabaseConfig.serviceKey, {
      auth: { persistSession: false },
    });

    const payload: ContactMessageInsert = {
      name: parsed.name,
      contact: parsed.contact,
      email,
      phone,
      message: parsed.message,
      metadata,
    };

    const { data, error } = await supabase
      .from("contact_messages")
      .insert(payload)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Failed to store contact message in Supabase", error);
      return NextResponse.json({ error: "Opslaan van bericht is mislukt" }, { status: 500 });
    }

    recordId = data?.id ?? null;
  }

  try {
    await sendContactNotifications({
      name: parsed.name,
      contact: parsed.contact,
      message: parsed.message,
      recordId,
      metadata: metadata ?? undefined,
      customerEmail: email,
    });
  } catch (error) {
    console.error("Contact notification failed", error);
    return NextResponse.json({ error: "Notificatie versturen is mislukt" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
