import type { Metadata } from "next";
import { MessageCircle, Phone, Shield, CheckCircle2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";

export const metadata: Metadata = {
  title: "Cyber APK – Veiligheidscheck",
  description:
    "Preventieve check van apparaten, netwerk en accounts. Ontvang een duidelijk rapport met actiepunten voor betere cybersecurity.",
  alternates: {
    canonical: "https://www.instantit.nl/cyber-apk",
  },
};

export default function CyberAPK() {
  const checks = [
    "Router & WiFi configuratie (admin passwords, firmware)",
    "Apparaten scan (virussen, malware, onbekende software)",
    "Account veiligheid (wachtwoorden, 2FA status)",
    "Backup situatie (zijn je bestanden veilig?)",
    "Software updates (Windows, Mac, apps)",
    "Privacy instellingen (camera, mic, tracking)",
  ];

  const steps = [
    { title: "Intake", desc: "Wat gebruik je? Wat is je grootste zorg?" },
    { title: "Scan & check", desc: "60–90 min remote of on-site" },
    { title: "Adviesrapport", desc: "Puntsgewijze verbeteringen (geen jargon)" },
    { title: "Implementatie", desc: "Optioneel: wij voeren het uit (tegen uurtarief)" },
  ];

  const faqs = [
    {
      q: "Voor wie is een Cyber APK?",
      a: "Iedereen die nóóit een veiligheidscheck heeft gedaan, of recent een hack meemaakte en preventie wil.",
    },
    {
      q: "Krijg ik een rapport?",
      a: "Ja, een kort PDF met concrete actiepunten + prioriteit (hoog/midden/laag).",
    },
    {
      q: "Moet ik alles zelf doen?",
      a: "Nee, we kunnen het ook voor je uitvoeren. Dat rekenen we apart af (€65/u).",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Cyber APK – veiligheidscheck thuis of op kantoor
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Preventieve check van je apparaten, netwerk en accounts. Weet waar je kwetsbaar bent voordat het misgaat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Ik%20wil%20een%20Cyber%20APK%20inplannen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" />
                  Plan een APK
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

      {/* What We Check */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat checken we?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {checks.map((check, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{check}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Hoe het werkt</h2>
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

      {/* Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Investering</h2>
          <Card className="max-w-md mx-auto border-2 border-primary">
            <CardContent className="p-8 text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-2xl mb-2">Cyber APK</h3>
              <p className="text-4xl font-bold text-primary mb-2">€129</p>
              <p className="text-foreground/60 mb-6">60–90 min + kort adviesrapport</p>
              <ul className="text-left space-y-2 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Volledige scan van apparaten & netwerk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Adviesrapport met prioriteiten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Gratis korte nazorg binnen 7 dagen</span>
                </li>
              </ul>
              <Button variant="default" size="lg" asChild className="w-full">
                <a
                  href="https://wa.me/31702119191?text=Ik%20wil%20een%20Cyber%20APK%20inplannen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plan nu
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why APK */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarom een Cyber APK?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Preventie</h3>
                <p className="text-foreground/70">
                  Voorkomen is beter (en goedkoper) dan genezen. Veel hacks zijn te voorkomen met simpele maatregelen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Gemoedsrust</h3>
                <p className="text-foreground/70">
                  Weet dat je router, wachtwoorden en backup op orde zijn. Slaap beter.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Verzekering</h3>
                <p className="text-foreground/70">
                  Sommige cyberverzekeringen geven korting als je aantoonbaar preventieve checks doet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Preventief checken?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <a
                href="https://wa.me/31702119191?text=Ik%20wil%20een%20Cyber%20APK%20inplannen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                Plan een APK
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
