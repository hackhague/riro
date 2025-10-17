const webhookEnvOrder = [
  "CONTACT_NOTIFICATION_WEBHOOK_URL",
  "ZAPIER_CONTACT_WEBHOOK_URL",
  "ZAPIER_NEW_CONTACT_WEBHOOK_URL",
  "ZAPIER_WEBHOOK_URL",
  "NEXT_PUBLIC_ZAPIER_CONTACT_WEBHOOK_URL",
  "NEXT_PUBLIC_ZAPIER_NEW_CONTACT_WEBHOOK_URL",
  "NEXT_PUBLIC_ZAPIER_WEBHOOK_URL",
  "VITE_ZAPIER_CONTACT_WEBHOOK_URL",
  "VITE_ZAPIER_NEW_CONTACT_WEBHOOK_URL",
  "VITE_ZAPIER_WEBHOOK_URL",
] as const;

export type ContactNotificationPayload = {
  name: string;
  contact: string;
  email?: string | null;
  phone?: string | null;
  message: string;
  recordId?: string | number | null;
  metadata?: Record<string, unknown> | null;
};

const getWebhookUrl = (): string | null => {
  for (const key of webhookEnvOrder) {
    const value = process.env[key];
    if (value) {
      return value;
    }
  }
  return null;
};

export async function notifyContactSubmission(payload: ContactNotificationPayload) {
  const webhookUrl = getWebhookUrl();

  if (!webhookUrl) {
    return { delivered: false as const, skipped: true as const };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "contact_submission",
      timestamp: new Date().toISOString(),
      payload,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `Notification request failed with status ${response.status}${text ? `: ${text}` : ""}`,
    );
  }

  return { delivered: true as const, skipped: false as const };
}
