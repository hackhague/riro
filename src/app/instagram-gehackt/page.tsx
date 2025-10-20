import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, Smartphone, Shield, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Gehackt Instagram Account Terugkrijgen | Stappenplan",
  description:
    "Je Instagram account is gehackt? Leer hoe je weer toegang krijgt en je account beveiligd.",
  alternates: {
    canonical: "https://www.instantit.nl/instagram-gehackt",
  },
};

export default function InstagramGehackt() {
  const stepsWithAccess = [
    {
      step: "1",
      title: "Open Instagram",
      description: "Log in met je huidige wachtwoord als je nog toegang hebt",
    },
    {
      step: "2",
      title: "Verander wachtwoord",
      description: "Ga naar Instellingen → Beveiliging → Wachtwoord",
    },
    {
      step: "3",
      title: "Review apps",
      description: "Controleer verbonden apps in Beveiliging en verwijder onbekende",
    },
    {
      step: "4",
      title: "Activeer 2FA",
      description: "Zet twee-factor-authenticatie aan voor extra beveiliging",
    },
  ];

  const stepsNoAccess = [
    {
      step: "1",
      title: "Check je e-mail",
      description: "Kijk of Instagram een reset-link heeft gestuurd",
    },
    {
      step: "2",
      title: "Reset via 'Wachtwoord vergeten'",
      description: "Gebruik het aanmeldscherm om je account terug te krijgen",
    },
    {
      step: "3",
      title: "Volg Instagrams gids",
      description: "Als je niet in kan loggen, klik 'Meer hulp nodig' voor ID-verificatie",
    },
    {
      step: "4",
      title: "Voer verificatie uit",
      description: "Upload een selfie met ID als Instagram dat vraagt",
    },
  ];

  const securitySteps = [
    "Scan je telefoon op virussen",
    "Verander gerelateerde wachtwoorden (e-mail, linked accounts)",
    "Review je beveiligingsinstellingen voor onverwachte veranderingen",
    "Controleer wie toegang had tot je mailbox",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT gehackt Instagram account hulp"
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
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Instagram Account Gehackt?
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Stap-voor-stap handleiding om je account terug te krijgen en toekomstige inbraak te voorkomen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="tel:+31702119191">
                  <Phone className="mr-2" />
                  Bel 070 211 9191
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/31702119191?text=Instagram%20gehackt%20hulp" target="_blank" rel="noopener noreferrer">
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
            Gelukkig – snel handelen kan je account beveiligen en verdere schade voorkomen.
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
            Hacker heeft het wachtwoord gewijzigd? Volg deze stappen om je account terug te claimen.
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

      {/* After Recovery */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Na het terugkrijgen van je account
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Je account is hersteld? Dit zijn essentiële veiligheid stappen.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {securitySteps.map((step, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{step}</span>
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
        description="Onzeker of je telefoon veilig is? We controleren het en helpen verdere schade te voorkomen."
      />

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Kan je account niet herstellen?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We helpen je Instagram-account terug te krijgen en je apparaat te beveiligen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="/afspraak">Afspraak inplannen</a>
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
