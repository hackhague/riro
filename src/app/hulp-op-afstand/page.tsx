import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { MessageCircle, Phone, Shield, Clock, MonitorSmartphone, MousePointerClick } from "lucide-react";
import AppointmentWizard from "@/components/AppointmentWizard";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";

const serviceImage = "/images/service-computer.jpg";

export const metadata: Metadata = {
  title: "Computerhulp op afstand | Snelle hulp via schermdeling",
  description:
    "Directe hulp op afstand via veilige schermdeling. Meestal binnen 10–30 minuten reactie. €39–€99, geen voorrijkosten.",
  alternates: {
    canonical: "https://www.instantit.nl/hulp-op-afstand",
  },
};

export default function HulpOpAfstand() {
  const benefits = [
    { title: "Snel geholpen", desc: "Meestal binnen 10–30 minuten reactie en direct aan de slag" },
    { title: "Veilig", desc: "Versleutelde verbinding, jij geeft per stap toestemming" },
    { title: "Transparante prijs", desc: "€39–€99, geen verrassingen. Je ziet de prijs vooraf" },
    { title: "Geen bezoek nodig", desc: "Ideaal voor snelle fixes, advies en ondersteuning" },
  ];

  const canHelpWith = [
    "Computer die te langzaam werkt",
    "Ingesloten programma's resetten",
    "Virussen en kwaadaardige software opsporen",
    "Printer en randapparatuur instellen",
    "Pop-ups en nare advertenties verwijderen",
    "Backups maken en terugzetten",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Computerhulp op afstand
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                We helpen je via je scherm. Snel, veilig en zonder dat iemand langs hoeft te komen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" asChild>
                  <a
                    href="https://wa.me/31702119191?text=Ik%20heb%20hulp%20nodig%20op%20afstand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" />
                    Start nu via WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+31702119191">
                    <Phone className="mr-2" />
                    Bel 070 211 9191
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={serviceImage} alt="Computerhulp op afstand via schermdeling" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarom remote hulp?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {i === 0 && <Clock className="text-primary-foreground" />}
                    {i === 1 && <Shield className="text-primary-foreground" />}
                    {i === 2 && <MousePointerClick className="text-primary-foreground" />}
                    {i === 3 && <MonitorSmartphone className="text-primary-foreground" />}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-foreground/70">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What we can help with */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarmee kunnen we je helpen?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {canHelpWith.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="p-4 flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />

      <HomepageServicesClient />

      {/* Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Hoeveel kost het?</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <p className="text-4xl font-bold text-primary mb-2">€39–€99</p>
                <p className="text-lg text-foreground/80 mb-4">Meestal binnen 10–30 minuten reactie</p>
                <p className="text-foreground/70 mb-6">
                  Je betaalt <strong>€1 per minuut</strong>. Minimum 30 minuten (€39), maximum €99. Je ziet de prijs altijd vooraf voordat we starten.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm text-foreground/80 mb-6">
                  <p className="font-semibold mb-2">Wat inbegrepen:</p>
                  <ul className="space-y-1 text-left">
                    <li>✓ Veilige, versleutelde verbinding</li>
                    <li>✓ Uitleg wat we doen</li>
                    <li>✓ 7 dagen gratis nazorg (30 min op afstand)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="accent" size="lg" asChild>
                <Link href="/afspraak">Plan een afspraak</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+31702119191"><Phone className="mr-2" />Bel nu</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Wizard */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <AppointmentWizard compact={false} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Klaar om je probleem opgelost te krijgen?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Ik%20heb%20hulp%20op%20afstand%20nodig"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp nu
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
