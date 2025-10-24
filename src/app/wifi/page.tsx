import type { Metadata } from "next";
import { Phone, Wifi, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { OtherServicesGrid } from "@/components/OtherServicesGrid";
import { ReviewSection } from "@/components/ReviewSection";

const serviceImage = "/images/service-wifi.jpg";

export const metadata: Metadata = {
  title: "WiFi & Internet verbeteren | Stabiel thuis en op kantoor",
  description:
    "WiFi traag of dode zones? We helpen je router beter in te stellen. Geen dode zones meer, sneller internet.",
  alternates: {
    canonical: "https://www.instantit.nl/wifi",
  },
};

export default function WiFiPage() {
  const serviceBlocks = [
    { title: "Windows 10/11 Ondersteuning", href: "/windows-support", image: "/images/services/windows-support.svg" },
    { title: "Mac Support", href: "/mac-support", image: "/images/services/mac-support.svg" },
    { title: "Antivirus & Beveiliging", href: "/antivirus-setup", image: "/images/services/antivirus.svg" },
    { title: "Printerhulp", href: "/printer", image: "/images/services/printerhulp.svg" },
    { title: "E-mail Problemen", href: "/email", image: "/images/services/email-problemen.svg" },
    { title: "Smartphone & Tablet", href: "/mobiel-tablet", image: "/images/services/tablet-smartphone.svg" },
  ];

  const services = [
    "Nieuwe router installatie en setup",
    "WiFi installatie en verbetering",
    "Internet snelheid optimaliseren",
    "Router configuratie",
    "Veilig internetten instellen",
    "Smart TV aansluiten",
    "WiFi bereik uitbreiden",
    "Mesh netwerk instellingen",
  ];

  const problems = [
    "Internet valt steeds weg",
    "WiFi bereik is te klein (dode zones)",
    "Trage internetsnelheid",
    "Smart TV heeft geen internet",
    "WiFi wachtwoord vergeten",
    "Nieuwe router installeren",
  ];

  const steps = [
    { title: "Netwerk analyse", desc: "We testen je internetverbinding en WiFi signaal" },
    { title: "Optimalisatie", desc: "We optimaliseren instellingen voor beste prestaties" },
    { title: "Beveiliging", desc: "Veilige wachtwoorden en encryptie instellen" },
    { title: "Test alle apparaten", desc: "We zorgen dat alles goed verbonden is" },
  ];

  const faqs = [
    {
      q: "Waarom is mijn WiFi zo langzaam?",
      a: "Kan aan je router, signaal, of veel apparaten tegelijk. We testen alles en optimaliseren.",
    },
    {
      q: "Kan ik overal in huis WiFi krijgen?",
      a: "Meestal wel! Met mesh, extenders of betere routerplaatsing. We kijken wat het best past.",
    },
    {
      q: "Wat kost internet en WiFi hulp?",
      a: "We hanteren onze vaste tarieven. Voor WiFi-optimalisatie maken we een survey en plan en stemmen we de investering vooraf af. Hardware en installaties rekenen we op uurbasis, onderdelen apart.",
    },
    {
      q: "Kunnen jullie alle internetproviders helpen?",
      a: "Ja! KPN, Ziggo, T-Mobile, en alle andere. Router werkt met elke provider.",
    },
    {
      q: "Hoe beveilig ik mijn WiFi netwerk?",
      a: "Sterk wachtwoord (niet 'wachtwoord123'), WPA3 encryptie, admin panel beveiligen. Wij doen dit voor je.",
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
              Internet & WiFi verbeteren
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Een goede internetverbinding is belangrijk. Van router installatie tot netwerk optimalisatie – je internet gaat werken zoals het hoort.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" asChild>
                <a href="/afspraak-maken"><Calendar className="h-3.5 w-3.5 mr-1.5" />Afspraak maken</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+31853696124">
                  <Phone className="mr-2" />
                  Bel nu
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat we voor u doen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <Wifi className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Veel voorkomende problemen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <Wifi className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{problem}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Onze aanpak</h2>
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

      {/* Other Services */}
      <section>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <OtherServicesGrid serviceBlocks={serviceBlocks} showCTA={false} />
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Voorbeeld opdracht</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent uppercase">Probleem</span>
                <p className="text-lg mt-2">
                  "Ouwe router van provider. WiFi op zolder en in tuin werkt niet goed. Kinderen kunnen niet gamen, thuiswerken is moeilijk."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                <p className="text-lg mt-2">
                  We hebben eerst gekeken hoe sterk het signaal is in je huis. Daarna hebben we een betere router gekozen en die goed ingesteld.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "Nu heb je overal in huis goed internet. Ook op zolder en in de tuin. Geen vertraging meer en alle kosten vooraf afgestemd."
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Delft</p>
            </CardContent>
          </Card>
        </div>
      </section>

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

      <PartnersSection />

      <ReviewSection servicePath="/wifi" title="Wat klanten zeggen" showLink={false} />

      <PlanAppointmentCta
        preselect={{
          category: "network",
          channel: "onsite",
        }}
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar voor beter WiFi?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=WiFi%20probleem%3A%20[beschrijf%20je%20situatie]"
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
                Bel 085 369 6124
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
