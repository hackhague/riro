import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, Mail, Shield, AlertTriangle, CheckCircle, User, Link2, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Phishing & Nep E-mails Herkennen | Veilige Stappen",
  description:
    "Onzeker over een verdachte e-mail? Stap-voor-stap handleiding om phishing te herkennen en veilig af te handelen.",
  alternates: {
    canonical: "https://www.instantit.nl/phishing-hulp",
  },
};

export default function PhishingHulp() {
  const recognitionTips = [
    {
      title: "Controleer de afzender",
      description: "Verificeer dat het e-mailadres overeenkomt met officiële domeinen van het bedrijf",
    },
    {
      title: "Hover over links",
      description: "Beweging je muis over een link zonder te klikken – waar gaat het heen?",
    },
    {
      title: "Herken urgentietaal",
      description: "Berichten met 'onmiddellijk actie vereist' zijn vaak valse alarmen",
    },
    {
      title: "Controleer persoonlijke gegevens",
      description: "Echte bedrijven gebruiken je volledige naam, niet 'geachte klant'",
    },
  ];

  const stepsNoAction = [
    {
      step: "1",
      title: "Ga naar Fraudehelpdesk.nl",
      description: "Controleer hun huidige phishing-meldingen",
    },
    {
      step: "2",
      title: "Analyseer de headers",
      description: "Klik op het e-mailmenu en bekijk 'Show original' voor echte afzender",
    },
    {
      step: "3",
      title: "Bel het bedrijf",
      description: "Gebruik officiële contactgegevens van hun website, niet uit de e-mail",
    },
    {
      step: "4",
      title: "Verwijder veilig",
      description: "Markeer als spam en verwijder – problemen opgelost",
    },
  ];

  const stepsAfterClick = [
    {
      step: "1",
      title: "Controleer uw e-mail",
      description: "Kijk in je mailbox voor meldingen van wachtwoordverandering",
    },
    {
      step: "2",
      title: "Reset wachtwoorden",
      description: "Update het wachtwoord van de getroffen account onmiddellijk",
    },
    {
      step: "3",
      title: "Check alle accounts",
      description: "Hergebruik je dezelfde wachtwoord? Update alles",
    },
    {
      step: "4",
      title: "Scan je apparaat",
      description: "Voer een volledige antivirusscan uit",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT phishing hulp"
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

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Phishing & Verdachte E-mails
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Waarschuw jezelf tegen nep-e-mails. Leer hoe je ze herkent en veilig aanpakt zonder in de val te trappen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="tel:+31702119191">
                  <Phone className="mr-2" />
                  Bel 070 211 9191
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/31702119191?text=Phishing%20e-mail%20ontvangen" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Tips */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Hoe herken je phishing?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {recognitionTips.map((tip, i) => {
              const icons = [User, Link2, Clock, FileText];
              const IconComponent = icons[i % icons.length];
              return (
                <Card key={i} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{tip.title}</h3>
                    <p className="text-sm text-foreground/70">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* No Action Taken */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Je twijfelt over de e-mail
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Je hebt niet op links geklikt en geen gegevens ingevoerd? Prima, nu nog veilig verwijderen.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stepsNoAction.map((item, i) => (
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

      {/* After Click */}
      <section className="py-12 md:py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Je hebt op een link geklikt
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Geen paniek – snel handelen voorkomt erger. Voer deze stappen uit in deze volgorde.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stepsAfterClick.map((item, i) => (
              <Card key={i} className="border-destructive/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold text-destructive">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-center mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 text-center">{item.description}</p>
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
        description="Onzeker of je apparaat veilig is? We scannen het voor je en geven advies."
      />

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Hulp nodig bij phishing?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We helpen je apparaat te controleren en toekomstige aanvallen te voorkomen.
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
