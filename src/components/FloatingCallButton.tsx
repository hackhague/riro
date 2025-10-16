import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCallButton() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || typeof document === "undefined") return null;

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
        <a href="tel:+31702119191" aria-label="Computerstoring? Bel 070 211 9191">
          <Phone className="mr-2" />
          <span className="inline md:hidden">Bel nu</span>
          <span className="hidden md:inline">Computerstoring? Bel 070 211 9191</span>
        </a>
      </Button>
    </div>,
    document.body,
  );
}
export default FloatingCallButton;
