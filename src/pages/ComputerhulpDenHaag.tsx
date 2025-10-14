import { MessageCircle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ComputerhulpDenHaag() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Den Haag</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Computerhulp in Den Haag – binnen 2 uur geholpen
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Snelle computerhulp in heel Den Haag: Centrum, Scheveningen, Loosduinen, Ypenburg, Bezuidenhout en alle andere wijken. Remote binnen 10-30 min, on-site meestal binnen 2 uur.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="default" size="lg" asChild>
                <a href="https://wa.me/31702119191?text=Computerhulp%20nodig%20in%20Den%20Haag" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />App nu</a>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <a href="tel:+31702119191"><Phone className="mr-2" />Bel 070 211 9191</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card><CardContent className="p-8">
            <h2 className="font-heading font-bold text-2xl mb-4">Lokaal & Snel</h2>
            <p className="text-foreground/80">InstantIT is gevestigd in Den Haag en helpt dagelijks inwoners en bedrijven met IT-problemen. Of je nu in het Centrum woont, aan de kust in Scheveningen, of in Ypenburg – we zijn snel ter plaatse.</p>
          </CardContent></Card>
        </div>
      </section>
    </div>
  );
}
