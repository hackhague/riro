import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, Mail, Shield, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Gehackt E-mailaccount – Terug Krijgen | Gids",
  description:
    "Je e-mailaccount is gehackt? Dit is het eerste wat je moet doen om je account en andere accounts te beveiligen.",
  alternates: {
    canonical: "https://www.instantit.nl/email-gehackt",
  },
};

export default function EmailGehackt() {
  const stepsWithAccess = [
    {
      step: "1",
      title: "Log in op je account",
      description: "Zolang je nog toegang hebt, act snel",
    },
    {
      step: "2",
      title: "Check herstelgegevens",
      description: "Ga naar instellingen – is je telefoonnummer/backup e-mail nog van jezelf?",
    },
    {
      step: "3",
      title: "Verander wachtwoord",
      description: "Stel een sterk, uniek wachtwoord in dat je nergens anders gebruikt",
    },
    {
      step: "4",
      title: "Zet 2FA aan",
      description: "Twee-factor verificatie blokkeert hackers uit, ook met het juiste wachtwoord",
    },
  ];

  const stepsNoAccess = [
    {
      step: "1",
      title: "Kies 'Wachtwoord vergeten'",
      description: "Probeer je account terug te krijgen via de reset-optie",
    },
    {
      step: "2",
      title: "Controleer backup e-mails",
      description: "Heb je een ander e-mailadres als backup? Controleer die inbox ook",
    },
    {
      step: "3",
      title: "Volg de provider's gids",
      description: "Gmail, Outlook, Yahoo – elk hebben hun eigen ID-verificatieproces",
    },
    {
      step: "4",
      title: "Upload ID als nodig",
      description: "Sommige providers vragen een foto van je paspoort voor verificatie",
    },
  ];

  const securityMeasures = [
    "Scan je computer/telefoon op virussen en malware",
    "Update alle wachtwoorden van gelinkte accounts (bank, social media, etc.)",
    "Stel 2FA in op alle belangrijke accounts",
    "Controleer je account instellingen op onverwachte veranderingen",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT gehackt e-mailaccount hulp"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(2,6,23,0.88) 0%, rgba(2,6,23,0.72) 35%, rgba(2,6,23,0.4) 70%, rgba(2,6,23,0.12) 100%)"
            }}
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              E-mailaccount Gehackt?
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Je e-mail is de sleutel tot al je andere accounts. Snel handelen is cruciaal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="tel:+31702119191">
                  <Phone className="mr-2" />
                  Bel 070 211 9191
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/31702119191?text=Email%20gehackt%20hulp" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* With Access */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Je hebt nog steeds toegang
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Goed nieuws – je kunt je account nog zelf beveiligen. Volg deze stappen in volgorde.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stepsWithAccess.map((item, i) => (
              <Card key={i} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-center mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Without Access */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Je hebt geen toegang meer
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Hacker heeft het wachtwoord veranderd? Dit is hoe je je account terugkrijgt.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stepsNoAccess.map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-center mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Zorg dat het niet meer gebeurt
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {securityMeasures.map((measure, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{measure}</span>
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
        description="Kan je account niet herstellen? We helpen je en scannen je apparaat op schade."
      />

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Hulp nodig met je e-mail?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We helpen je je account terug te krijgen en je systeem te beveiligen tegen verdere schade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="/afspraak">Afspraak maken</a>
            </Button>
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+31702119191">Bel direct</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
