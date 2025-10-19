import { Resend } from "resend";

const ADMIN_NOTIFICATION_ENDPOINT =
  process.env.APPOINTMENT_ADMIN_NOTIFICATION_WEBHOOK_URL ??
  process.env.ZAPIER_ADMIN_NOTIFICATION_WEBHOOK_URL ??
  process.env.ZAPIER_NEW_APPOINTMENT_WEBHOOK_URL ??
  process.env.NEXT_PUBLIC_ZAPIER_NEW_APPOINTMENT_WEBHOOK_URL ??
  process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL ??
  process.env.VITE_ZAPIER_NEW_APPOINTMENT_WEBHOOK_URL ??
  process.env.VITE_ZAPIER_WEBHOOK_URL ??
  null;

const CUSTOMER_NOTIFICATION_ENDPOINT =
  process.env.APPOINTMENT_CUSTOMER_NOTIFICATION_WEBHOOK_URL ??
  process.env.ZAPIER_CUSTOMER_NOTIFICATION_WEBHOOK_URL ??
  process.env.NEXT_PUBLIC_ZAPIER_CUSTOMER_NOTIFICATION_WEBHOOK_URL ??
  process.env.VITE_ZAPIER_CUSTOMER_NOTIFICATION_WEBHOOK_URL ??
  null;

const ADMIN_EMAILS = process.env.APPOINTMENT_ADMIN_EMAILS;
const DEFAULT_FROM = process.env.APPOINTMENT_FROM_EMAIL ?? process.env.ZAPIER_FROM_EMAIL ?? process.env.RESEND_FROM_EMAIL ?? "Instant IT <support@instantit.nl>";

let cachedResend: Resend | null = null;

function getResendClient() {
  if (cachedResend) {
    return cachedResend;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }

  cachedResend = new Resend(apiKey);
  return cachedResend;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMultiline(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

type AppointmentNotificationPayload = {
  id: string | number | null;
  service: string;
  serviceLabel: string;
  dateISO: string | null;
  dateDisplay: string | null;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  message: string;
  approvalToken: string;
  approveUrl: string | null;
  cancelUrl: string | null;
  source: string;
};

type NotificationRequest = {
  target: "admin" | "customer";
  appointment: AppointmentNotificationPayload;
  to: string[];
  from?: string | null;
};

async function postNotification(endpoint: string, payload: NotificationRequest) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`Notification request failed (${response.status}): ${text}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}

export async function sendAppointmentNotifications(appointment: AppointmentNotificationPayload) {
  const tasks: Promise<void>[] = [];

  if (ADMIN_NOTIFICATION_ENDPOINT) {
    const adminRecipients = ADMIN_EMAILS
      ? ADMIN_EMAILS.split(",").map((email) => email.trim()).filter(Boolean)
      : [];

    tasks.push(
      postNotification(ADMIN_NOTIFICATION_ENDPOINT, {
        target: "admin",
        appointment,
        to: adminRecipients,
        from: DEFAULT_FROM,
      }).catch((error) => {
        console.error("Failed to send admin appointment notification", error);
      })
    );
  }

  if (CUSTOMER_NOTIFICATION_ENDPOINT && appointment.email) {
    tasks.push(
      postNotification(CUSTOMER_NOTIFICATION_ENDPOINT, {
        target: "customer",
        appointment,
        to: [appointment.email],
        from: DEFAULT_FROM,
      }).catch((error) => {
        console.error("Failed to send customer appointment notification", error);
      })
    );
  }

  if (!tasks.length) {
    return;
  }

  await Promise.all(tasks);
}

export type { AppointmentNotificationPayload };
