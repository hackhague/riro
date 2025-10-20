import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, CheckCircle2, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import AppointmentWizard from "@/components/AppointmentWizard";
import { OtherServicesGrid } from "@/components/OtherServicesGrid";

const serviceImage = "/images/service-email.jpg";

export const metadata: Metadata = {
  title: "E-mail hulp | Outlook, Gmail, Hotmail instellen",
  description:
    "E-mail werkt niet? Problemen met Outlook, Gmail of Hotmail? We helpen je alles in te stellen en spam te bestrijden.",
  alternates: {
    canonical: "https://www.instantit.nl/email",
  },
};

export default function EmailPage() {
  const serviceBlocks = [
    { title: "Windows 10/11 Ondersteuning", href: "/windows-support", image: "/images/services/windows-support.jpg" },
    { title: "Mac Support", href: "/mac-support", image: "/images/services/mac-support.jpg" },
    { title: "Antivirus & Beveiliging", href: "/antivirus-setup", image: "/images/services/antivirus.jpg" },
    { title: "Printerhulp", href: "/printer", image: "/images/services/printerhulp.jpg" },
    { title: "Internet & WiFi", href: "/wifi", image: "/images/services/wifi.jpg" },
    { title: "Smartphone & Tablet", href: "/mobiel-tablet", image: "/images/services/tablet-smartphone.jpg" },
  ];

  const problems = [
    "E-mail wordt niet verzonden",
    "Berichten komen niet aan",
    "E-mail werkt niet op telefoon",
    "Kan niet inloggen op e-mail",
    "Teveel spam berichten",
    "E-mail account gehackt",
    "Oude e-mails weggegooid",
    "Synchronisatie problemen",
  ];

  const steps = [
    { title: "E-mail diagnose", desc: "We controleren je instellingen en problemen" },
    { title: "Account configuratie", desc: "We stellen alles correct in op je apparaten" },
    { title: "Veiligheid instellen", desc: "Bescherming tegen spam en phishing" },
    { title: "Test en uitleg", desc: "Alles werkt – uitleg hoe het goed te doen" },
  ];

  const faqs = [
    {
      q: "Ik kan geen e-mails meer ontvangen, wat nu?",
      a: "Eerst checken we je e-mail instellingen en de server. Daarna stellen we alles goed in zodat je weer e-mails ontvangt.",
    },
    {
      q: "Hoe stel ik mijn e-mail in op een nieuwe computer?",
      a: "We helpen je stap voor stap. Je hoeft alleen je e-mailadres en wachtwoord. Wij doen de rest.",
    },
    {
      q: "Kunnen jullie spam en phishing e-mails blokkeren?",
      a: "Ja! We stellen spam-filters in en leggen uit hoe je gevaarlijke e-mails herkent.",
    },
    {
      q: "Wat als ik mijn e-mail wachtwoord ben vergeten?",
      a: "We helpen je het wachtwoord terug te zetten via de e-mailprovider. Meestal lukt dat snel.",
    },
    {
      q: "Kunnen jullie mijn oude e-mails overzetten?",
      a: "Zeker! Van oude naar nieuwe provider of computer – we helpen je niets te verliezen.",
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
                E-mail problemen opgelost
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                E-mail werkt niet? Spam overload? We helpen je Outlook, Gmail en Hotmail correct in te stellen. Veilig en betrouwbaar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" asChild>
                  <a
                    href="https://wa.me/31702119191?text=Ik%20heb%20hulp%20nodig%20met%20e-mail"
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
              <img src={serviceImage} alt="E-mail hulp" className="w-full h-auto" />
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
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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

      {/* Supported Providers */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">We helpen met alle providers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {["Gmail", "Outlook/Hotmail", "Yahoo Mail", "ProtonMail", "KPN Mail", "Vodafone Mail", "Bedrijfs-e-mail", "Eigen domein"].map((provider) => (
              <Card key={provider} className="border-2">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-lg">{provider}</p>
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
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">E-mail hulp aan huis</h3>
                <p className="text-3xl font-bold text-primary mb-1">€59</p>
                <p className="text-sm text-foreground/60 mb-4">per uur</p>
                <p className="text-xs text-foreground/70">Alle apparaten ingesteld</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Remote oplossing</h3>
                <p className="text-3xl font-bold text-primary mb-1">€39</p>
                <p className="text-sm text-foreground/60 mb-4">30 minuten</p>
                <p className="text-xs text-foreground/70">Voor kleine problemen</p>
              </CardContent>
            </Card>
          </div>
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
                  "E-mail werkt niet meer op mijn computer. Krijg steeds foutmeldingen. Ook veel spam."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                <p className="text-lg mt-2">
                  We hebben de e-mail uit Outlook verwijderd en opnieuw ingesteld. Spam-filters aangezet en je wachtwoord gecontroleerd voor veiligheid.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "Nu krijg je alle e-mails. Spam is veel minder. Kosten: €59 (1 uur)."
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Delft</p>
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar om je e-mail werkend te krijgen?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=E-mail%20hulp%20nodig"
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
