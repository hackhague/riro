export const runtime = "edge";
import { NextResponse } from "next/server";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
import { stripHeaderBreaks } from "@/lib/notifications";
import { sendAppointmentNotifications } from "@/server/notifications";
import type { AppointmentNotificationPayload } from "@/server/notifications";

const TOKEN_BUCKET_CAPACITY = 5;
const TOKEN_BUCKET_REFILL_MS = 60_000;

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

const bookingSchema = z.object({
  service: z.string().min(1),
  serviceLabel: z.string().min(1),
  dateISO: z.string().nullable().optional(),
  dateDisplay: z.string().nullable().optional(),
  timeSlot: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().optional().nullable(),
  phone: z.string().min(1),
  street: z.string().min(1),
  postalCode: z.string().min(1),
  city: z.string().min(1),
  message: z.string().optional().nullable(),
  source: z.string().optional(),
});

function sanitizeString(
  value: string | null | undefined,
  options: { stripBreaks?: boolean } = {}
) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();

  if (options.stripBreaks) {
    return stripHeaderBreaks(trimmed);
  }

  return trimmed;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!consumeToken(ip)) {
    console.warn("Rate limit exceeded for IP", ip);
    return NextResponse.json(
      { error: "Too many requests" },
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
  } catch {
    console.warn("Invalid JSON payload received", { ip });
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(rawBody);
  if (!parsed.success) {
    console.warn("Validation failed for appointment payload", {
      ip,
      errors: parsed.error.flatten(),
    });
    return NextResponse.json(
      { error: "Invalid booking payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const body = parsed.data;

  const supabaseUrl =
    process.env.SUPABASE_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    process.env.VITE_SUPABASE_URL ??
    "";
  const supabaseKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.SUPABASE_SERVICE_KEY ??
    process.env.SUPABASE_SECRET_KEY ??
    process.env.SUPABASE_SERVICE_API_KEY ??
    "";

  let supabaseConfigured = true;
  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase credentials missing; continuing without persistence");
    supabaseConfigured = false;
  }

  const approvalToken = (globalThis.crypto as Crypto)?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2,10)}`;

  const sanitized = {
    service: sanitizeString(body.service, { stripBreaks: true }),
    serviceLabel: sanitizeString(body.serviceLabel, { stripBreaks: true }),
    dateISO: body.dateISO ? sanitizeString(body.dateISO, { stripBreaks: true }) : null,
    dateDisplay: body.dateDisplay
      ? sanitizeString(body.dateDisplay, { stripBreaks: true })
      : null,
    timeSlot: sanitizeString(body.timeSlot, { stripBreaks: true }),
    firstName: sanitizeString(body.firstName, { stripBreaks: true }),
    lastName: sanitizeString(body.lastName, { stripBreaks: true }),
    email: sanitizeString(body.email ?? "", { stripBreaks: true }) || null,
    phone: sanitizeString(body.phone, { stripBreaks: true }),
    street: sanitizeString(body.street, { stripBreaks: true }),
    postalCode: sanitizeString(body.postalCode, { stripBreaks: true }),
    city: sanitizeString(body.city, { stripBreaks: true }),
    message: sanitizeString(body.message ?? ""),
    source: sanitizeString(body.source ?? "", { stripBreaks: true }) || "website",
  };

  const insertPayload = {
    service: sanitized.service,
    service_label: sanitized.serviceLabel,
    date_iso: sanitized.dateISO,
    date_display: sanitized.dateDisplay,
    time_slot: sanitized.timeSlot,
    first_name: sanitized.firstName,
    last_name: sanitized.lastName,
    email: sanitized.email,
    phone: sanitized.phone,
    street: sanitized.street,
    postal_code: sanitized.postalCode,
    city: sanitized.city,
    message: sanitized.message,
    status: "new",
    source: sanitized.source,
    approval_token: approvalToken,
    created_at: new Date().toISOString(),
  } satisfies Record<string, unknown>;

  let recordId: string | number | null = null;

  if (supabaseConfigured) {
    try {
      const res = await fetch(`${supabaseUrl.replace(/\/$/, "")}/rest/v1/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=representation",
        },
        body: JSON.stringify(insertPayload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Failed to insert appointment", res.status, text);
        return NextResponse.json({ error: "Failed to store appointment" }, { status: 500 });
      }

      const data = await res.json().catch(() => null);
      // returned representation is an array of inserted rows
      recordId = (Array.isArray(data) ? data[0]?.id : data?.id) ?? null;
    } catch (error) {
      console.error("Failed to insert appointment", error);
      return NextResponse.json({ error: "Failed to store appointment" }, { status: 500 });
    }
  } else {
    // No persistence available; continue and still send notifications
    recordId = null;
  }

  const approvalBase =
    process.env.APPOINTMENT_APPROVAL_URL ??
    process.env.ZAPIER_APPROVE_WEBHOOK_URL ??
    process.env.NEXT_PUBLIC_ZAPIER_APPROVE_WEBHOOK_URL ??
    process.env.VITE_ZAPIER_APPROVE_WEBHOOK_URL ??
    null;
  const cancelBase =
    process.env.APPOINTMENT_CANCEL_URL ??
    process.env.ZAPIER_CANCEL_WEBHOOK_URL ??
    process.env.NEXT_PUBLIC_ZAPIER_CANCEL_WEBHOOK_URL ??
    process.env.VITE_ZAPIER_CANCEL_WEBHOOK_URL ??
    null;

  const approveUrl =
    approvalBase && recordId !== null
      ? `${approvalBase}?id=${encodeURIComponent(String(recordId))}&token=${encodeURIComponent(approvalToken)}`
      : null;
  const cancelUrl =
    cancelBase && recordId !== null
      ? `${cancelBase}?id=${encodeURIComponent(String(recordId))}&token=${encodeURIComponent(approvalToken)}`
      : null;

  const notificationPayload: AppointmentNotificationPayload = {
    id: recordId,
    service: sanitized.service,
    serviceLabel: sanitized.serviceLabel,
    dateISO: sanitized.dateISO,
    dateDisplay: sanitized.dateDisplay,
    timeSlot: sanitized.timeSlot,
    firstName: sanitized.firstName,
    lastName: sanitized.lastName,
    email: sanitized.email,
    phone: sanitized.phone,
    street: sanitized.street,
    postalCode: sanitized.postalCode,
    city: sanitized.city,
    message: sanitized.message,
    approvalToken,
    approveUrl,
    cancelUrl,
    source: sanitized.source,
  };

  try {
    await sendAppointmentNotifications(notificationPayload);
  } catch (error) {
    console.error("Failed to dispatch appointment notifications", error);
  }

  return NextResponse.json(
    {
      success: true,
      id: recordId,
      approveUrl,
      cancelUrl,
      message: "We nemen snel contact op om de afspraak te bevestigen.",
    },
    { status: 201 }
  );
}
