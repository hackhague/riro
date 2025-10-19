import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: "Tarieven",
  description:
    "Transparante prijzen voor remote support, hulp aan huis, hacklijn en zakelijke strippenkaarten.",
  alternates: {
    canonical: "https://www.instantit.nl/tarieven",
  },
};

export default function Tarieven() {
  const consumerPricing = [
    { name: "Computerhulp op afstand", price: "€35", unit: "eerste 30 min", extra: "+ €15/15 min daarna", desc: "Snelle remote hulp met lage instapkosten. Transparante per-minuut afrekening." },
    { name: "Computerhulp aan huis", price: "€59", unit: "eerste 45 min", extra: "+ €17,25/15 min daarna", desc: "Grondige diagnose en reparatie op jouw locatie in Haaglanden. Geen voorrijkosten." },
    { name: "IT Spoedhulp aan huis", price: "€89", unit: "eerste uur", extra: "+ €19,50/15 min daarna", desc: "Snel ter plaatse voor acute problemen. Geen afspraak nodig." },
    { name: "Hackservice & Cyberherstel", price: "Op aanvraag", unit: "24/7 beschikbaar", extra: "Afhankelijk van omvang incident", desc: "Gehackt? Virus, malware, ransomware? Wij helpen met spoedreparatie & beveiging." },
  ];

  const businessPricing = [
    { name: "IT-support aan kantoor", price: "€79", unit: "eerste uur (ex btw)", extra: "+ €20/15 min daarna", desc: "Professionele IT-ondersteuning op uw kantoor in Haaglanden. Geen voorrijkosten." },
    { name: "IT-support op afstand", price: "€35", unit: "eerste 30 min (ex btw)", extra: "+ €17,50/15 min daarna", desc: "Snelle remote support voor zakelijke systemen. Consistent tarief." },
    { name: "IT Spoedhulp kantoor", price: "€89", unit: "eerste uur", extra: "+ €19,50/15 min daarna", desc: "Snel ter plaatse voor bedrijfskritische problemen. Geen afspraak nodig." },
    { name: "Cybersecurity & Incident Response", price: "Op aanvraag", unit: "24/7 beschikbaar", extra: "Forensics en hardening included", desc: "Cyberincidenten, beveiligingscontroles en bedrijfsmatige beveiliging." },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Tarieven – vaste caps, geen verrassingen
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Transparante prijzen voor particulieren en bedrijven. Wat niet opgelost wordt binnen de cap? Gratis
              herbeoordeling binnen 7 dagen.
            </p>
          </div>
        </div>
      </section>

      {/* Consumer Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Particulieren</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {consumerPricing.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-0.5">{item.price}</p>
                  <p className="text-sm text-foreground/60 mb-1">{item.unit}</p>
                  {item.extra && <p className="text-sm font-semibold text-accent mb-4">{item.extra}</p>}
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="accent" asChild>
              <a href="/afspraak">Plan een afspraak</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+31702119191">Bel nu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Pricing */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Zakelijk (MKB)</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {businessPricing.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-0.5">{item.price}</p>
                  <p className="text-sm text-foreground/60 mb-1">{item.unit}</p>
                  {item.extra && <p className="text-sm font-semibold text-accent mb-4">{item.extra}</p>}
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="accent" asChild>
              <a href="/afspraak">Plan een afspraak</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+31702119191">Bel nu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Nazorg Disclaimer */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-2xl mb-4">Nazorg garantie</h3>
              <p className="text-foreground/80">
                Niet helemaal opgelost binnen de cap? Geen zorgen. Je krijgt een{" "}
                <strong>gratis herbeoordeling van hetzelfde issue binnen 7 dagen</strong> (max 30 min remote). Ons doel
                is dat het gewoon werkt – niet dat we eindeloos declareren.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <PartnersSection />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar om te starten?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Bel, app of mail – we geven altijd eerst een gratis korte triage zodat je weet waar je aan toe bent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20wil%20graag%20een%20offerte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
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
