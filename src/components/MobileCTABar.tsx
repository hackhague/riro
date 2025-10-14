import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Zap } from "lucide-react";

export const MobileCTABar = () => {
  return (
    <div
      className="md:hidden fixed inset-x-0 z-[100] bg-background border-t border-border shadow-lg"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)", paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3 gap-2 p-2">
        <Button variant="whatsapp" size="sm" asChild className="flex-col h-16 text-xs">
          <a
            href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5 mb-1" />
            <span>WhatsApp</span>
          </a>
        </Button>
        <Button variant="accent" size="sm" asChild className="flex-col h-16 text-xs">
          <a href="tel:+31702119191">
            <Phone className="h-5 w-5 mb-1" />
            <span>Bel nu</span>
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild className="flex-col h-16 text-xs">
          <a href="/ik-ben-gehackt">
            <Zap className="h-5 w-5 mb-1" />
            <span>Gehackt</span>
          </a>
        </Button>
      </div>
    </div>
  );
};
