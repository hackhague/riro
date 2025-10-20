"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { usePrices } from "@/hooks/use-prices";

export function FloatingCallButton() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const priceConfig = usePrices();
  const { contact, floatingCallButton } = priceConfig;
  const hiddenRoutes = useMemo(() => new Set(floatingCallButton.hideOnRoutes), [floatingCallButton.hideOnRoutes]);

  useEffect(() => setMounted(true), []);
  if (!mounted || typeof document === "undefined") return null;
  if (hiddenRoutes.has(pathname)) return null;

  return createPortal(
    <div
      className="fixed bottom-4 right-4 md:right-6 z-[9999] pointer-events-auto left-auto top-auto"
      style={{
        bottom: "max(1rem, calc(env(safe-area-inset-bottom) + 1rem))",
        right: "max(1rem, calc(env(safe-area-inset-right) + 1rem))",
      }}
    >
      <Button
        asChild
        variant="accent"
        size="lg"
        className="rounded-full shadow-lg md:shadow-xl focus-visible:ring-4"
      >
        <a href={contact.phoneHref} aria-label={contact.phoneAriaLabel}>
          <Phone className="mr-2" />
          <span className="inline md:hidden">{contact.shortCallLabel}</span>
          <span className="hidden md:inline">Direct hulp? {contact.phoneLabel}</span>
        </a>
      </Button>
    </div>,
    document.body,
  );
}
export default FloatingCallButton;
