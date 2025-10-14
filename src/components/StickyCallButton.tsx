import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function StickyCallButton() {
  return (
    <div className="fixed right-4 bottom-4 z-50">
      <Button
        variant="accent"
        size="sm"
        asChild
        className="rounded-full shadow-lg px-4 py-2 h-9 md:h-10 md:px-5"
        aria-label="Computerstoring? Bel 070 211 9191"
     >
        <a href="tel:+31702119191">
          <Phone className="h-3.5 w-3.5 mr-1.5" />
          Computerstoring? Bel 070 211 9191
        </a>
      </Button>
    </div>
  );
}
