import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, CheckCircle2, AlertTriangle, Lock, MessageCircle, Eye, Bug, Flame, RotateCcw, Filter, RefreshCw, Network, Zap, Barcode, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";
import { ReviewSection } from "@/components/ReviewSection";

const serviceImage = "/images/service-antivirus.svg";

export const metadata: Metadata = {
  title: "Antivirus & Beveiliging Installatie | ESET & meer",
  description:
    "Niet zeker welke antivirus je nodig hebt? We installeren en configureren ESET of andere virusscanner. Je computer wordt beveiligd tegen malware.",
  alternates: {
    canonical: "https://www.instantit.nl/antivirus-setup",
  },
};

export default function AntivirusSetupPage() {
  const protection_elements = [
    "Real-time virusscanning",
    "Malware en ransomware bescherming",
    "Phishing filtration",
    "Firewall",
    "Quarantine & removal",
    "Automatische updates",
    "Network optioneel",
    "Minimal CPU impact",
  ];

  const antivirus_options = [
    {
      name: "ESET Internet Security",
      desc: "Licht, snel, betrouwbaar",
      price: "Jaarlicentie via partner",
      badge: "Partnership",
    },
    {
      name: "ESET NOD32",
      desc: "Geavanceerde bescherming",
      price: "Jaarlicentie beschikbaar",
      badge: "Partnership",
    },
    {
      name: "Windows Defender",
      desc: "Gratis, standaard Windows",
      price: "Gratis",
      badge: "Ingebouwd",
    },
    {
      name: "Kaspersky",
      desc: "Krachtig en geavanceerd",
      price: "Jaarlicentie beschikbaar",
      badge: "Optioneel",
    },
    {
      name: "Bitdefender",
      desc: "Licht en snel",
      price: "Jaarlicentie beschikbaar",
      badge: "Optioneel",
    },
    {
      name: "Norton",
      desc: "Volledig pakket",
      price: "Bundelopties beschikbaar",
      badge: "Optioneel",
    },
  ];

  const setup_steps = [
    { title: "Analyse", desc: "We checken wat je nodig hebt en wat al aanwezig is" },
    { title: "Keuze maken", desc: "We helpen de juiste antivirus te selecteren" },
    { title: "Installatie", desc: "Professioneel installeren en configureren" },
    { title: "Training", desc: "We leggen uit hoe je veilig online werkt" },
  ];

  const faqs = [
    {
      q: "Welke antivirus moet ik hebben?",
      a: "Dat hangt af van je gebruik. We adviseren ESET (partnership), maar ook gratis opties als Windows Defender kunnen volstaan.",
    },
    {
      q: "Is ESET beter dan Windows Defender?",
      a: "ESET is sterker en gedetailleerder. Windows Defender is gratis en goed genoeg voor basis bescherming.",
    },
    {
      q: "Hoe veel kost antivirus installatie?",
      a: "We hanteren vaste tarieven voor remote en aan huis. De licentie zelf stemmen we vooraf met je af op basis van het pakket dat je kiest.",
    },
    {
      q: "Kan ik meerdere antivirus programma's tegelijk gebruiken?",
      a: "Nee, dat is niet aan te raden. Ze conflicteren. Eén goed programma is beter.",
    },
    {
      q: "Hoe vaak update mijn antivirus?",
      a: "Automatisch, meestal dagelijks. Je hoeft niks te doen – we stellen het in.",
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
              Antivirus & Beveiliging
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Bescherm je computer tegen virussen, malware en hackers. We helpen je de juiste antivirus te kiezen en professioneel in te stellen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Antivirus%20installatie%20nodig"
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
        </div>
      </section>

      {/* Security Warning */}
      <section className="py-12 md:py-16 bg-destructive/10 border-l-4 border-destructive">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 max-w-3xl mx-auto">
            <Shield className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                Computer zonder bescherming? Risico op virussen
              </h2>
              <p className="text-foreground/80 mb-4">
                Elke dag worden miljoenen computers aangevallen door virussen en malware. Zonder goede bescherming ben je kwetsbaar voor:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>Diefstal van persoonlijke gegevens en wachtwoorden</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>Ransomware die je bestanden gijzelt</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>Langzame computer en systeemcrashes</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>Bankgegevens gestolen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Protection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat je nodig hebt</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {protection_elements.map((element, index) => {
              const icons = [Eye, Bug, Flame, RotateCcw, Filter, RefreshCw, Network, Zap];
              const IconComponent = icons[index % icons.length];
              return (
                <Card key={index}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <IconComponent className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{element}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why ESET */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-center">ESET - Onze Partner voor Beveiliging</h2>
            <div className="space-y-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="h-6 w-6 text-primary" />
                    <h3 className="font-heading font-semibold text-2xl">Waarom ESET?</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Licht en snel – je computer wordt niet traag</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Betrouwbare bescherming – wereldwijd gebruikt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Gemakkelijk te gebruiken – geen technische kennis nodig</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Goede prijs-kwaliteit verhouding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>We installeren en helpen je voortaan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Antivirus Options */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Keuze aan beveiligingsoplossingen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {antivirus_options.map((option, index) => {
              const icons = [Lock, Shield, Bug, Flame, Eye, Filter];
              const IconComponent = icons[index % icons.length];
              return (
                <Card key={index} className={option.badge === "Partnership" ? "border-2 border-primary" : "border-2"}>
                  <CardContent className="p-6">
                    {option.badge && (
                      <div className={`text-xs font-semibold px-2 py-1 rounded-full w-fit mb-3 ${
                        option.badge === "Partnership"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground"
                      }`}>
                        {option.badge}
                      </div>
                    )}
                    <IconComponent className="h-6 w-6 text-primary mb-3" />
                    <h3 className="font-heading font-semibold text-lg mb-2">{option.name}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{option.desc}</p>
                    <p className="text-2xl font-bold text-primary">{option.price}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Ons Installatie Proces</h2>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-visible">
            {setup_steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  index < setup_steps.length - 1
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

      <HomepageServicesClient />

      <ReviewSection servicePath="/antivirus-setup" title="Wat klanten zeggen" showLink={false} />

      {/* Safety Tips */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Tips voor Veilig Internet</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Sterke wachtwoorden
                </h3>
                <p className="text-foreground/70">
                  Maak je wachtwoorden lang en complex – minstens 12 karakters met hoofd- en kleine letters, cijfers en symbolen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Links niet vertrouwen
                </h3>
                <p className="text-foreground/70">
                  Klik niet op links in rare e-mails of berichtjes. Dubbelcheck URL's voordat je afschrift.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Updates regelmatig
                </h3>
                <p className="text-foreground/70">
                  Installeer updates voor Windows, browser en programma's. Ze bevatten veiligheidsfixes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Backup maken
                </h3>
                <p className="text-foreground/70">
                  Maak regelmatig backups van je bestanden. Extern schijf of cloud.
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

      <PlanAppointmentCta
        preselect={{
          category: "security",
          channel: "remote",
        }}
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Bescherm je computer vandaag nog</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Laat je computer professioneel beveiligen. ESET of jouw voorkeur – we regelen het.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Antivirus%20installatie"
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
