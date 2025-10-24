import type { Metadata } from "next";
import { Phone, Apple, MessageCircle, Zap, HardDrive, RefreshCw, Wifi, Cloud, Activity, Cpu, Battery, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";
import { ReviewSection } from "@/components/ReviewSection";

const serviceImage = "/images/service-mac.jpg";

export const metadata: Metadata = {
  title: "Mac Support | MacBook, iMac & Mac Mini Ondersteuning",
  description:
    "MacBook of iMac problemen? We helpen met updates, snelheid, storage, software issues. Snelle diagnose en oplossing.",
  alternates: {
    canonical: "https://www.instantit.nl/mac-support",
  },
};

export default function MacSupportPage() {
  const mac_problems = [
    "Mac werkt langzaam of vriest in",
    "Storage vol, veel schijfruimte gebruikt",
    "Update problemen of crashes",
    "WiFi of Bluetooth problemen",
    "AppleCare+ of warranty vragen",
    "Software incompatibiliteit",
    "Mail of iCloud synchronisatie",
    "Batterijduur verkort",
  ];

  const steps = [
    { title: "Mac diagnose", desc: "We controleren prestaties en zoeken naar problemen" },
    { title: "Analyse", desc: "We bepalen de oorzaak – hardware, software of instellingen" },
    { title: "Oplossing", desc: "Opruimen, updates, drivers of software vernieuwing" },
    { title: "Optimalisatie", desc: "Mac werkt weer snel en stabiel" },
  ];

  const faqs = [
    {
      q: "Waarom wordt mijn MacBook langzaam?",
      a: "Meestal te veel apps op achtergrond, volle schijf of verouderde macOS. We ruimen op, upgraden en optimaliseren.",
    },
    {
      q: "Kan ik mijn Mac upgraden naar de nieuwste macOS?",
      a: "Niet alle Macs kunnen dat. We controleren compatibiliteit en adviseren wat het beste is voor jouw model.",
    },
    {
      q: "Hoeveel kost Mac ondersteuning?",
      a: "We volgen onze vaste tarieven. Aan huis of remote stemmen we de investering vooraf met je af. Diagnose en nazorg zijn inbegrepen.",
    },
    {
      q: "Heb ik AppleCare+ nodig?",
      a: "Handig voor ongelukken, maar niet altijd nodig. We adviseren eerlijk of het nuttig is.",
    },
    {
      q: "Kunnen jullie bestanden back-uppen?",
      a: "Zeker! Time Machine setup, iCloud backup of externe harde schijf – we helpen je data veilig te stellen.",
    },
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
              Mac Support & Onderhoud
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              MacBook traag? Storage vol? iCloud sync problemen? We helpen je Mac weer top-prestatie te laten leveren – snel en betrouwbaar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/31853696124?text=Mac%20ondersteuning%20nodig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" />
                  WhatsApp nu
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+31853696124">
                  <Phone className="mr-2" />
                  Bel 070 211 9191
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Fix */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat we voor je doen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {mac_problems.map((problem, index) => {
              const icons = [Zap, HardDrive, RefreshCw, Wifi, Cloud, Activity, Cloud, Battery];
              const IconComponent = icons[index % icons.length];
              return (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <IconComponent className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{problem}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Ons Process</h2>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-visible">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  index < steps.length - 1
                    ? "md:after:content-[''] md:after:absolute md:after:top-8 md:after:left-1/2 md:after:ml-8 md:after:h-px md:after:w-[calc(100%+1.5rem)] md:after:bg-primary/20 md:before:content-[''] md:before:absolute md:before:top-[26px] md:before:right-[-10px] md:before:w-2 md:before:h-2 md:before:bg-primary/30 md:before:rounded-full"
                    : ""
                }`}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-foreground/70">{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mac Models We Support */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">We werken met alle Mac modellen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {["MacBook Air", "MacBook Pro", "iMac", "Mac Mini", "Mac Studio", "Mac Pro", "M1/M2/M3/Intel", "Alle generaties"].map((model, index) => {
              const icons = [Cpu, Zap, Activity, HardDrive, Shield, Wifi, Battery, Apple];
              const IconComponent = icons[index % icons.length];
              return (
                <Card key={model} className="border-2">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="font-semibold text-lg">{model}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <HomepageServicesClient />

      {/* Case Study */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Voorbeeld opdracht</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent uppercase">Probleem</span>
                <p className="text-lg mt-2">
                  "MacBook wordt steeds langzamer. Schijf ziet vol, alles duurt lang. Bijna 2 jaar oud."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase">Analyse</span>
                <p className="text-lg mt-2">
                  Cache opgehoopt, grote bestanden niet nodig, apps die niet werken. Schijf bijna vol. Software vernieuwd.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "MacBook voelt weer als nieuw! Supersnel. Dank je! Alle afspraken en kosten vooraf duidelijk afgestemd."
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Leiden</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <PartnersSection />

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Veelgestelde vragen</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-foreground/70">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ReviewSection servicePath="/mac-support" title="Wat klanten zeggen" showLink={false} />

      <PlanAppointmentCta
        preselect={{
          category: "hardware",
          channel: "remote",
        }}
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar voor Mac ondersteuning?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Mac%20hulp%20nodig"
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
              <a href="tel:+31853696124">
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
