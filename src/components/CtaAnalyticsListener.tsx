"use client";

import { useEffect } from "react";

import { trackCtaEvent } from "@/lib/analytics";

function resolveCtaType(node: HTMLElement | null) {
  if (!node) return null;
  const datasetType = node.getAttribute("data-cta-type");
  if (datasetType === "phone" || datasetType === "whatsapp" || datasetType === "appointment") {
    return datasetType;
  }

  if (node instanceof HTMLAnchorElement) {
    const href = node.getAttribute("href") ?? node.href ?? "";
    if (!href) return null;
    const normalized = href.toLowerCase();
    if (normalized.startsWith("tel:")) return "phone";
    if (normalized.includes("wa.me") || normalized.includes("whatsapp")) return "whatsapp";
    if (normalized.includes("/afspraak")) return "appointment";
  }

  if (node instanceof HTMLButtonElement) {
    const href = node.getAttribute("data-href");
    if (href) {
      const normalized = href.toLowerCase();
      if (normalized.startsWith("tel:")) return "phone";
      if (normalized.includes("wa.me") || normalized.includes("whatsapp")) return "whatsapp";
      if (normalized.includes("/afspraak")) return "appointment";
    }
  }

  return null;
}

function extractHref(node: HTMLElement | null) {
  if (!node) return null;
  if (node instanceof HTMLAnchorElement) {
    return node.getAttribute("href") ?? node.href ?? null;
  }
  return node.getAttribute("data-href");
}

function extractLabel(node: HTMLElement | null) {
  if (!node) return null;
  return node.getAttribute("data-cta-label") ?? node.textContent?.trim() ?? null;
}

export function CtaAnalyticsListener() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const actionable = target.closest<HTMLElement>("a[href], button[data-cta-type], button[data-href]");
      if (!actionable) return;

      const type = resolveCtaType(actionable);
      if (!type) return;

      const href = extractHref(actionable);
      const label = extractLabel(actionable);
      trackCtaEvent({ type, href, label });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}

export default CtaAnalyticsListener;
