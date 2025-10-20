import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Printer, CheckCircle2, Zap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import AppointmentWizard from "@/components/AppointmentWizard";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";
import { OtherServicesGrid } from "@/components/OtherServicesGrid";

const serviceImage = "/images/service-printer.jpg";

export const metadata: Metadata = {
  title: "Printerhulp aan huis | HP, Canon, Epson & meer",
  description:
    "Printer werkt niet? Papiertoringen, cartridges, WiFi-printen? We helpen snel en professioneel aan huis.",
  alternates: {
    canonical: "https://www.instantit.nl/printer",
  },
};

export default function PrinterPage() {
  const serviceBlocks = [
    { title: "Windows 10/11 Ondersteuning", href: "/windows-support", image: "/images/services/windows-support.jpg" },
    { title: "Mac Support", href: "/mac-support", image: "/images/services/mac-support.jpg" },
    { title: "Antivirus & Beveiliging", href: "/antivirus-setup", image: "/images/services/antivirus.jpg" },
    { title: "E-mail Problemen", href: "/email", image: "/images/services/email-problemen.jpg" },
    { title: "Internet & WiFi", href: "/wifi", image: "/images/services/wifi.jpg" },
    { title: "Smartphone & Tablet", href: "/mobiel-tablet", image: "/images/services/tablet-smartphone.jpg" },
  ];

  const problems = [
    "Printer print niet meer",
    "Draadloos printen werkt niet",
    "Printer niet gevonden op computer",
    "Slechte printkwaliteit",
    "Papiertoringen in printer",
    "Scanner werkt niet",
    "Cartridges vervangen",
    "Wireless printing instellen",
  ];

  const steps = [
    { title: "Printer check", desc: "We controleren je printer en verbindingen" },
    { title: "Diagnose", desc: "We stellen het exacte probleem vast" },
    { title: "Installatie/Oplossing", desc: "We lossen het op en testen alles" },
    { title: "Gebruiksuitleg", desc: "We leggen uit hoe je optimaal werkt" },
  ];

  const faqs = [
    {
      q: "Wat doet u bij printerproblemen?",
      a: "Eerst controleren we wat er aan de hand is, dan lossen we het op. We testen altijd uitgebreid en leggen uit hoe je het zelf kunt voorkomen.",
    },
    {
      q: "Kunnen jullie alle merken helpen?",
      a: "Ja! HP, Canon, Epson, Brother – we hebben ervaring met alle populaire merken.",
    },
    {
      q: "Hoe veel kost printerhulp?",
      a: "Aan huis €59 per uur. Diagnose is €19 als we niet kunnen helpen. Cartridges en onderdelen apart.",
    },
    {
      q: "Kunnen jullie een nieuwe printer installeren?",
      a: "Absoluut! Van uitpakken tot netwerk verbinding – we maken het gebruiksklaar.",
    },
    {
      q: "Hoe vaak moet ik onderhoudsmaken?",
      a: "Basis reiniging 1x per kwartaal. Wij adviseren wat het beste voor jouw printer is.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Printerhulp aan huis
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Papiertoringen, cartridges, draadloos printen – je printer gaat weer werken. Snel, professioneel en zonder gedoe.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" asChild>
                  <a
                    href="https://wa.me/31702119191?text=Ik%20heb%20hulp%20nodig%20met%20mijn%20printer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" />
                    WhatsApp nu
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
              <img src={serviceImage} alt="Printerhulp aan huis" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Fix */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat lossen we op?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <Printer className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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

      {/* Brands We Support */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">We ondersteunen alle merken</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {["HP", "Canon", "Epson", "Brother", "Lexmark", "Ricoh", "Kyocera", "Xerox"].map((brand) => (
              <Card key={brand} className="border-2">
                <CardContent className="p-6 text-center">
                  <Printer className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-lg">{brand}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat het kost</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-6 text-center">
                <Printer className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Printerhulp aan huis</h3>
                <p className="text-3xl font-bold text-primary mb-1">€59</p>
                <p className="text-sm text-foreground/60 mb-4">per uur</p>
                <p className="text-xs text-foreground/70">Onderdelen en cartridges apart</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Diagnose onopgelost</h3>
                <p className="text-3xl font-bold text-primary mb-1">€19</p>
                <p className="text-sm text-foreground/60 mb-4">alleen diagnose</p>
                <p className="text-xs text-foreground/70">Verrekenbaar als u toch verder gaat</p>
              </CardContent>
            </Card>
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
                  "HP printer geeft fout – wil niet meer printen. WiFi-versie, eigenlijk nooit goed werkend."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                <p className="text-lg mt-2">
                  We hebben de printer gereset, drivers geupdate en het WiFi opnieuw ingesteld. Cartridge vervangen en een test afdruk gemaakt.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "Nu werkt alles. Printen via WiFi gaat vlekkeloos. Kosten: €59 (2 uur) + €22 cartridge."
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Voorburg</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <PartnersSection />

      {/* Other Services */}
      <section>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <OtherServicesGrid serviceBlocks={serviceBlocks} showCTA={false} />
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

      {/* Appointment Wizard */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <AppointmentWizard compact={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar voor printerhulp?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Printerhulp%20nodig"
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
