import type { Metadata } from "next";
import Link from "next/link";
import { Phone, AlertTriangle, CheckCircle2, Monitor, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import AppointmentWizard from "@/components/AppointmentWizard";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";

const serviceImage = "/images/service-windows.jpg";

export const metadata: Metadata = {
  title: "Windows 10/11 Ondersteuning | Upgrades & Probleemoplossing",
  description:
    "Problemen met Windows 10 of 11? Update-issues, snelheid, drivers? We helpen je computer stabiel en veilig te houden. Windows 11 upgrade service beschikbaar.",
  alternates: {
    canonical: "https://www.instantit.nl/windows-support",
  },
};

export default function WindowsSupportPage() {
  const windows10_11_problems = [
    "Geluidsproblemen na update",
    "Problemen met aanmelden",
    "Traag werkende computer",
    "WiFi verbindingsproblemen",
    "Printer werkt niet meer",
    "USB en Bluetooth aansluitingen",
    "Foutmeldingen en crashes",
    "Systeembronnen waarschuwingen",
  ];

  const windows11_upgrade_benefits = [
    "Veiligere en stabielere versie",
    "Beter presteert op moderne hardware",
    "Langdurige beveiligingsupdates",
    "Nieuwe features en tools",
    "Compatibiliteit met toekomstige software",
    "Professionele migratie van bestanden",
  ];

  const upgrade_steps = [
    { title: "Voorbereiding", desc: "We controleren compatibiliteit en maken volledige backup" },
    { title: "Upgrade uitvoeren", desc: "Professionele installatie van Windows 11" },
    { title: "Setup & drivers", desc: "Alle drivers en programma's correct instellen" },
    { title: "Nazorg", desc: "Gratis controle en ondersteuning na upgrade" },
  ];

  const faqs = [
    {
      q: "Waarom moet ik upgraden van Windows 10 naar 11?",
      a: "Windows 10 support eindigt op 14 oktober 2025. Na die datum krijg je geen beveiligingsupdates meer, wat je computer kwetsbaar maakt voor virussen.",
    },
    {
      q: "Wat kost Windows 11 upgrade?",
      a: "€149 inclusief volledige backup, data transfer en setup. Voor december 2025 : 20% korting!",
    },
    {
      q: "Gaan mijn bestanden verloren bij upgrade?",
      a: "Helemaal niet! We maken eerst een volledige backup en zorgen dat alles veilig overgaat naar Windows 11.",
    },
    {
      q: "Hoe lang duurt een Windows upgrade?",
      a: "Meestal 2-3 uur inclusief backup en setup. Je computer is dezelfde dag weer klaar voor gebruik.",
    },
    {
      q: "Mijn computer is oud, kan die Windows 11 aan?",
      a: "We controleren eerst je hardware. Veel oude computers kunnen Windows 11 draaien. We adviseren eerlijk wat het beste is.",
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
                Windows 10 & 11 Ondersteuning
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Update-problemen, langzame computer, hardware-issues? We diagnosticeren snel en fixen je Windows-problemen. Plus: Windows 11 upgrade service met 20% korting!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" asChild>
                  <a
                    href="https://wa.me/31702119191?text=Hulp%20met%20Windows%20probleem"
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
              <img src={serviceImage} alt="Windows ondersteuning" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Windows 10 End of Life Warning */}
      <section className="py-12 md:py-16 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-4">
              <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                Windows 10 Einde ondersteuning: 14 oktober 2025
              </h2>
                <p className="text-foreground/80 mb-6 text-lg">
                  Microsoft stopt binnenkort met beveiligingsupdates voor Windows 10. Na deze datum wordt je computer kwetsbaar voor virussen en cyberaanvallen.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Geen beveiligingsupdates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Kwetsbaar voor virussen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Beperkte compatibiliteit</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Nu upgraden = 20% korting!</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="default" size="lg" asChild className="bg-yellow-600 hover:bg-yellow-700">
                    <a href="https://wa.me/31702119191?text=Ik%20wil%20naar%20Windows%2011%20upgraden" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2" />
                      Windows 11 Upgrade Boeken (20% korting!)
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Windows Problems */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Veel voorkomende Windows problemen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {windows10_11_problems.map((problem, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <Monitor className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{problem}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Windows Update Issues */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8">Windows Updates: De waarheid</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-accent" />
                    Wat te doen bij problemen?
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    Updates terugdraaien is niet aan te raden. Updates zorgen voor betere stabiliteit, veiligheid en toekomstige compatibiliteit. Het probleem zit meestal in hardware-drivers of instellingen die niet goed werken met de update.
                  </p>
                  <p className="text-foreground/80">
                    Wij kijken naar het specifieke probleem, analyseren de oorzaak, en vinden de beste oplossing – of het nu gaat om driver-updates, hardwarevervangingen, of software-alternatieven.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Remote Diagnose & Oplossing
                  </h3>
                  <p className="text-foreground/80">
                    Via beveiligde remote verbinding analyseren we je computer en lossen we Windows-problemen snel op. Geen gedoe, geen grote uitgaven – direct resultaat.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Windows 11 Upgrade Service */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-6">Windows 11 Upgrade Service</h2>
          <p className="text-center text-lg text-foreground/80 mb-10 max-w-3xl mx-auto">
            Klaar voor Windows 11? Wij helpen je met een zorgeloze upgrade. Volledige backup, professionele installatie en alles opnieuw geconfigureerd.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div>
              <h3 className="font-heading font-semibold text-2xl mb-6">Voordelen Windows 11</h3>
              <div className="space-y-3">
                {windows11_upgrade_benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-3xl mb-2">Upgrade Service</h3>
                <p className="text-4xl font-bold text-primary mb-6">€119*</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Compatibiliteitscheck</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Volledige backup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Windows 11 installatie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Drivers & setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Gratis nazorg 30 dagen</span>
                  </li>
                </ul>
                <p className="text-xs text-foreground/60 mb-4">*Boek voor eind december 2025 en ontvang 20% korting!</p>
                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/31702119191?text=Windows%2011%20upgrade" target="_blank" rel="noopener noreferrer">
                    Nu upgraden
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upgrade Process */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Ons Upgrade Proces</h2>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-visible">
            {upgrade_steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  index < upgrade_steps.length - 1
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat we aanbieden</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Monitor className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Remote ondersteuning</h3>
                <p className="text-3xl font-bold text-primary mb-1">€39</p>
                <p className="text-sm text-foreground/60">30 minuten</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Monitor className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Aan huis diagnose</h3>
                <p className="text-3xl font-bold text-primary mb-1">€59</p>
                <p className="text-sm text-foreground/60">per uur</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Windows 11 Upgrade</h3>
                <p className="text-3xl font-bold text-primary mb-1">€119</p>
                <p className="text-sm text-foreground/60">Nu 20% korting!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <HomepageServicesClient />

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

      {/* Appointment Wizard */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <AppointmentWizard compact={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar voor stabiele & veilige Windows?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Of je nu een probleem hebt of wilt upgraden naar Windows 11 – wij helpen je snel en betrouwbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Windows%20hulp%20nodig"
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
