import { MessageCircle, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ComputerhulpLeiden() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Computerhulp in Leiden – binnen 2 uur geholpen
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              InstantIT helpt particulieren en bedrijven in heel Leiden – van het Centrum tot Stevenshof en Merenwijk. 
              Remote binnen 10–30 minuten, on-site meestal binnen 2 uur. Vaste prijzen, geen verrassingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Hallo%2C%20ik%20ben%20in%20Leiden%20–%20kunnen%20jullie%20helpen%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" />
                  WhatsApp ons nu
                </a>
              </Button>
              <Button variant="accent" size="lg" asChild>
                <a href="tel:+31702119191">
                  <Phone className="mr-2" />
                  Bel 070 211 9191
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local & Fast */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-heading font-bold text-2xl mb-3">Lokaal & Snel in Leiden</h2>
                  <p className="text-foreground/80 mb-4">
                    Of je nu in het Centrum, Stevenshof of Merenwijk woont – wij zijn er snel. 
                    Remote support in 10–30 minuten, on-site meestal binnen 2 uur. 
                    Geen voorrijkosten binnen Haaglanden.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Remote support binnen 10–30 min</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">On-site meestal binnen 2 uur</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Vaste prijzen, transparant</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">24/7 spoedhulp voor hacks</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Example */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-8">Recent in Leiden opgelost</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="mb-4">
                <span className="text-xs font-semibold text-accent uppercase">Probleem</span>
                <p className="text-foreground/80 mt-1">
                  MacBook start niet meer op na update
                </p>
              </div>
              <div className="mb-4">
                <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                <p className="text-foreground/80 mt-1">
                  Recovery mode + OS herinstallatie met behoud van data
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="font-semibold mt-1">"Alles werkt weer, alle bestanden behouden"</p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Centrum, Leiden</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center mb-8">Veelgestelde vragen</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Wat kost computerhulp in Leiden?</h3>
                <p className="text-foreground/70">
                  Remote vanaf €39 (cap €99), on-site €65/uur. Geen voorrijkosten in Haaglanden.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Hoe snel zijn jullie ter plaatse in Leiden?</h3>
                <p className="text-foreground/70">
                  Meestal binnen 2 uur. Remote ondersteuning vaak al binnen 10–30 minuten.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Helpen jullie ook met Mac en Apple apparaten?</h3>
                <p className="text-foreground/70">
                  Ja, we helpen met Windows, Mac, Linux en alle gangbare apparaten.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">Hulp nodig in Leiden?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20ben%20in%20Leiden%20–%20kunnen%20jullie%20helpen%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp ons nu
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="tel:+31702119191">
                <Phone className="mr-2" />
                Bel 070 211 9191
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
