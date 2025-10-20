import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { Phone, Shield, Clock, MonitorSmartphone, MousePointerClick, MessageCircle } from "lucide-react";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";

const serviceImage = "/images/service-computer.jpg";

export const metadata: Metadata = {
  title: "Computerhulp op afstand | Snelle hulp via schermdeling",
  description:
    "Directe hulp op afstand via veilige schermdeling. Meestal binnen 10–30 minuten reactie. Transparante tarieven, geen verrassingen.",
  alternates: {
    canonical: "https://www.instantit.nl/hulp-op-afstand",
  },
};

export default function HulpOpAfstand() {
  const benefits = [
    { title: "Snel geholpen", desc: "Meestal binnen 10–30 minuten reactie en direct aan de slag" },
    { title: "Veilig", desc: "Versleutelde verbinding, jij geeft per stap toestemming" },
    { title: "Transparante prijs", desc: "We werken met vaste tarieven. Je ziet vooraf wat het kost." },
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
      <section
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Computerhulp op afstand
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
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

      <PlanAppointmentCta
        preselect={{
          channel: "remote",
        }}
      />

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Klaar om hulp te krijgen?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="xl"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/afspraak">
                Afspraak maken
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="tel:+31702119191">
                <Phone className="mr-2" />
                Bel nu
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
