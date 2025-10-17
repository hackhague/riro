import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";
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

function generateApprovalToken() {
  const cryptoApi = (globalThis as typeof globalThis & { crypto?: Crypto }).crypto;

  if (cryptoApi) {
    if (typeof cryptoApi.randomUUID === "function") {
      return cryptoApi.randomUUID();
    }

    if (typeof cryptoApi.getRandomValues === "function") {
      const bytes = new Uint8Array(16);
      cryptoApi.getRandomValues(bytes);
      return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    }
  }

  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
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

function sanitizeString(value: string | null | undefined) {
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (!consumeToken(ip)) {
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
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(rawBody);
  if (!parsed.success) {
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

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: "Supabase credentials are not configured" },
      { status: 500 }
    );
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  const approvalToken = generateApprovalToken();

  const sanitized = {
    service: sanitizeString(body.service),
    serviceLabel: sanitizeString(body.serviceLabel),
    dateISO: body.dateISO ?? null,
    dateDisplay: body.dateDisplay ?? null,
    timeSlot: sanitizeString(body.timeSlot),
    firstName: sanitizeString(body.firstName),
    lastName: sanitizeString(body.lastName),
    email: sanitizeString(body.email ?? "") || null,
    phone: sanitizeString(body.phone),
    street: sanitizeString(body.street),
    postalCode: sanitizeString(body.postalCode),
    city: sanitizeString(body.city),
    message: sanitizeString(body.message ?? ""),
    source: sanitizeString(body.source ?? "") || "website",
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

  const { data, error } = await supabase
    .from("appointments")
    .insert(insertPayload)
    .select("id")
    .single();

  if (error) {
    console.error("Failed to insert appointment", error);
    return NextResponse.json({ error: "Failed to store appointment" }, { status: 500 });
  }

  const recordId = data?.id ?? null;

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

  await sendAppointmentNotifications(notificationPayload);

  return NextResponse.json(
    {
      success: true,
      id: recordId,
      approveUrl,
      cancelUrl,
    },
    { status: 201 }
  );
}
