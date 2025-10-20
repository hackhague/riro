export type CtaType = "phone" | "whatsapp" | "appointment";

export type TrackCtaEventPayload = {
  type: CtaType;
  href?: string | null;
  label?: string | null;
  location?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

function safePushToDataLayer(event: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.dataLayer.push(event);
}

export function trackCtaEvent({ type, href, label, location }: TrackCtaEventPayload) {
  if (typeof window === "undefined") return;
  const timestamp = new Date().toISOString();
  const payload = {
    event: "cta_click",
    ctaType: type,
    href: href ?? null,
    label: label ?? null,
    location: location ?? window.location.pathname,
    timestamp,
  } satisfies Record<string, unknown>;

  try {
    safePushToDataLayer(payload);
    if (typeof window.gtag === "function") {
      window.gtag("event", "cta_click", {
        event_category: "CTA",
        event_label: label ?? href ?? type,
        cta_type: type,
        cta_location: location ?? window.location.pathname,
        timestamp,
      });
    }
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Failed to dispatch CTA analytics event", error);
    }
  }
}
