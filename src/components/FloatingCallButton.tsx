import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingCallButton() {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50">
      <Button
        asChild
        variant="accent"
        size="lg"
        className="rounded-full shadow-lg focus-visible:ring-4"
      >
        <a href="tel:+31702119191" aria-label="Computerstoring? Bel 070 211 9191">
          <Phone className="mr-2" />
          Computerstoring? Bel 070 211 9191
        </a>
      </Button>
    </div>
  );
}
export default FloatingCallButton;
