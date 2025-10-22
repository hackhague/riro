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

      {/* Pricing & Transparency */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Transparante Afrekening</h2>
            <Card className="border-accent/40 mb-8">
              <CardContent className="p-8">
                <p className="text-lg font-semibold text-primary mb-4">€35 eerste 30 minuten</p>
                <p className="text-foreground/80 mb-4">
                  De eerste 30 minuten helpdesk kost €35. Dit geeft ons tijd voor een grondige diagnose en je probleem op te lossen.
                </p>
                <p className="text-lg font-semibold text-primary mb-4 mt-6">Daarna €15 per 15 minuten</p>
                <p className="text-foreground/80">
                  Mocht het iets langer duren, rekenen we transparant af per 15-minuten blok. Je ziet altijd vooraf wat het gaat kosten en stemt in voordat we verder gaan.
                </p>
              </CardContent>
            </Card>

            <div className="bg-secondary rounded-lg p-6 mb-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Hoe werkt het stap voor stap?</h3>
              <ol className="space-y-3 list-decimal list-inside text-foreground/80">
                <li>Je belt of app't ons - we zijn meestal binnen 10-30 minuten bereikbaar</li>
                <li>Korte intake: wat is het probleem en hoe snel moet het opgelost zijn?</li>
                <li>We geven je een inschatting: "Dit gaat waarschijnlijk 30-45 minuten duren"</li>
                <li>Met jouw toestemming helpen we je via schermdeling (veilig en versleuteld)</li>
                <li>We leggen uit wat we doen en hoe we het probleem aanpakken</li>
                <li>Klaar? Korte factuur en klaar!</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Voordelen</h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Geen lange wachtlijsten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Je betaalt alleen voor wat je gebruikt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Voor eenvoudige problemen vaak al in 30 min klaar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Geen verrassingen - je weet vooraf wat het kost</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Wat gebeurt er na afloop?</h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Je krijgt een korte samenvatting via e-mail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>7 dagen gratis nazorg (max 30 min remote)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Vragen over wat we deden? We helpen je graag</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Hetzelfde probleem weer? Gratis herbeoordeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
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
