import { Phone, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileCTABar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
      <div className="grid grid-cols-3 gap-2 p-2">
        <Button variant="default" size="sm" asChild className="flex-col h-14 text-xs">
          <a
            href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5 mb-1" />
            <span>WhatsApp</span>
          </a>
        </Button>
        <Button variant="accent" size="sm" asChild className="flex-col h-14 text-xs">
          <a href="tel:+31702119191">
            <Phone className="h-5 w-5 mb-1" />
            <span>Bel nu</span>
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild className="flex-col h-14 text-xs">
          <a href="/ik-ben-gehackt">
            <Zap className="h-5 w-5 mb-1" />
            <span>Gehackt</span>
          </a>
        </Button>
      </div>
    </div>
  );
};
