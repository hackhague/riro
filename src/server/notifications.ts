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

function buildAdminAppointmentEmail(appointment: AppointmentNotificationPayload) {
  const subject = `Nieuwe afspraak: ${appointment.firstName} ${appointment.lastName}`;

  const text = [
    "Nieuwe afspraak ontvangen",
    "",
    `Klant: ${appointment.firstName} ${appointment.lastName}`,
    `E-mail: ${appointment.email || "Niet opgegeven"}`,
    `Telefoon: ${appointment.phone}`,
    "",
    `Adres: ${appointment.street}, ${appointment.postalCode} ${appointment.city}`,
    "",
    `Dienst: ${appointment.serviceLabel}`,
    `Datum: ${appointment.dateDisplay}`,
    `Tijd: ${appointment.timeSlot}`,
    "",
    `Bericht: ${appointment.message}`,
    "",
    `Goedkeuren: ${appointment.approveUrl || "Niet beschikbaar"}`,
    `Afwijzen: ${appointment.cancelUrl || "Niet beschikbaar"}`,
  ].join("\n");

  const html = `
    <h1>Nieuwe afspraak</h1>
    <h2>${escapeHtml(appointment.firstName)} ${escapeHtml(appointment.lastName)}</h2>

    <h3>Contactgegevens</h3>
    <p>
      <strong>E-mail:</strong> ${escapeHtml(appointment.email || "Niet opgegeven")}<br />
      <strong>Telefoon:</strong> ${escapeHtml(appointment.phone)}<br />
      <strong>Adres:</strong> ${escapeHtml(appointment.street)}, ${escapeHtml(appointment.postalCode)} ${escapeHtml(appointment.city)}
    </p>

    <h3>Afspraak details</h3>
    <p>
      <strong>Dienst:</strong> ${escapeHtml(appointment.serviceLabel)}<br />
      <strong>Datum:</strong> ${escapeHtml(appointment.dateDisplay || "Niet opgegeven")}<br />
      <strong>Tijd:</strong> ${escapeHtml(appointment.timeSlot)}
    </p>

    ${appointment.message ? `<h3>Bericht van klant</h3><p>${formatMultiline(appointment.message)}</p>` : ""}

    <h3>Acties</h3>
    ${appointment.approveUrl ? `<p><a href="${escapeHtml(appointment.approveUrl)}">Goedkeuren</a></p>` : ""}
    ${appointment.cancelUrl ? `<p><a href="${escapeHtml(appointment.cancelUrl)}">Afwijzen</a></p>` : ""}
  `;

  return { subject, text, html };
}

function buildCustomerAppointmentEmail(appointment: AppointmentNotificationPayload) {
  const subject = "Je afspraak is ontvangen";

  const text = [
    `Hoi ${appointment.firstName},`,
    "",
    "Bedankt voor het maken van een afspraak met Instant IT. We hebben je aanvraag ontvangen en zullen deze spoedig in behandeling nemen.",
    "",
    "Afspraak details:",
    `Dienst: ${appointment.serviceLabel}`,
    `Datum: ${appointment.dateDisplay}`,
    `Tijd: ${appointment.timeSlot}`,
    `Locatie: ${appointment.street}, ${appointment.postalCode} ${appointment.city}`,
    "",
    "We nemen in de regel binnen 24 uur contact met je op om de afspraak te bevestigen.",
    "",
    "Bij vragen kun je ons bereiken op 070 211 9191 of info@instantit.nl",
    "",
    "Met vriendelijke groet,",
    "Instant IT",
  ].join("\n");

  const html = `
    <p>Hoi ${escapeHtml(appointment.firstName)},</p>
    <p>Bedankt voor het maken van een afspraak met Instant IT. We hebben je aanvraag ontvangen en zullen deze spoedig in behandeling nemen.</p>

    <h2>Afspraak details</h2>
    <ul>
      <li><strong>Dienst:</strong> ${escapeHtml(appointment.serviceLabel)}</li>
      <li><strong>Datum:</strong> ${escapeHtml(appointment.dateDisplay || "Niet opgegeven")}</li>
      <li><strong>Tijd:</strong> ${escapeHtml(appointment.timeSlot)}</li>
      <li><strong>Locatie:</strong> ${escapeHtml(appointment.street)}, ${escapeHtml(appointment.postalCode)} ${escapeHtml(appointment.city)}</li>
    </ul>

    <p>We nemen in de regel binnen 24 uur contact met je op om de afspraak te bevestigen.</p>
    <p>Bij vragen kun je ons bereiken op <strong>070 211 9191</strong> of <strong>info@instantit.nl</strong></p>

    <p>Met vriendelijke groet,<br />Instant IT</p>
  `;

  return { subject, text, html };
}

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

  // Send admin notification via Resend email
  const resend = getResendClient();
  const adminRecipients = ADMIN_EMAILS
    ? ADMIN_EMAILS.split(",").map((email) => email.trim()).filter(Boolean)
    : [];

  if (resend && adminRecipients.length > 0) {
    const { subject, html, text } = buildAdminAppointmentEmail(appointment);

    for (const adminEmail of adminRecipients) {
      tasks.push(
        (async () => {
          try {
            const result = await resend.emails.send({
              from: DEFAULT_FROM,
              to: adminEmail,
              subject,
              html,
              text,
              replyTo: appointment.email || undefined,
            });

            if (result.error) {
              console.error("Failed to send admin appointment email", { error: result.error, email: adminEmail });
            }
          } catch (error) {
            console.error("Error sending admin appointment email", { error, email: adminEmail });
          }
        })()
      );
    }
  }

  // Send customer confirmation via Resend email
  if (resend && appointment.email) {
    const { subject, html, text } = buildCustomerAppointmentEmail(appointment);

    tasks.push(
      (async () => {
        try {
          const result = await resend.emails.send({
            from: DEFAULT_FROM,
            to: appointment.email,
            subject,
            html,
            text,
          });

          if (result.error) {
            console.error("Failed to send customer appointment confirmation email", result.error);
          }
        } catch (error) {
          console.error("Error sending customer appointment confirmation email", error);
        }
      })()
    );
  }

  // Also send via Zapier webhooks if configured
  if (ADMIN_NOTIFICATION_ENDPOINT) {
    const zapierAdminRecipients = adminRecipients.length > 0 ? adminRecipients : [];

    tasks.push(
      postNotification(ADMIN_NOTIFICATION_ENDPOINT, {
        target: "admin",
        appointment,
        to: zapierAdminRecipients,
        from: DEFAULT_FROM,
      }).catch((error) => {
        console.warn("Failed to send admin appointment notification via webhook", error);
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
        console.warn("Failed to send customer appointment notification via webhook", error);
      })
    );
  }

  if (!tasks.length) {
    return;
  }

  await Promise.all(tasks);
}

export type { AppointmentNotificationPayload };
