import type { Metadata } from "next";
import { MessageCircle, Phone, AlertTriangle, Shield, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";

export const metadata: Metadata = {
  title: "WhatsApp Fraude & Nep-berichten | Niet Erin Trappen",
  description:
    "Nep WhatsApp berichten van 'je kinderen'? Leer hoe je WhatsApp fraude herkent en je account beveiligd.",
  alternates: {
    canonical: "https://www.instantit.nl/whatsapp-fraude",
  },
};

export default function WhatsAppFraude() {
  const redFlags = [
    {
      title: "Vreemde nummers",
      description: "Nummer ziet er anders uit dan anders – mogelijk nieuw nummer of spoof",
    },
    {
      title: "Plotse urgentie",
      description: "'Snel even €750' – echte familie zou meer context geven",
    },
    {
      title: "Kan niet bellen",
      description: "'Geen beltegoed' of 'camera werkt niet' – klassieke smoesjes",
    },
    {
      title: "Ongebruikelijke verzoeken",
      description: "Geldvraag via WhatsApp is rood signaal – niemand doet dat normaal",
    },
  ];

  const stepsReceivedMessage = [
    {
      step: "1",
      title: "Bel de echte persoon",
      description: "Bel je dochter/zoon/vriend direct op hun normale nummer",
    },
    {
      step: "2",
      title: "Als je al betaald hebt",
      description: "Bel je bank direct – misschien kunnen ze de transactie blokkeren",
    },
    {
      step: "3",
      title: "Verwijder het bericht",
      description: "Markeer als spam en delete – geen verdere interactie",
    },
    {
      step: "4",
      title: "Scan op virussen",
      description: "Links in WhatsApp kunnen malware bevatten – scan je telefoon",
    },
  ];

  const stepsAccountMisused = [
    {
      step: "1",
      title: "Herinstalleer WhatsApp",
      description: "Verwijder de app en installeer opnieuw – dit reset je account",
    },
    {
      step: "2",
      title: "Stel 2FA in",
      description: "Zet twee-factor authenticatie aan – veel moeilijker voor hackers",
    },
    {
      step: "3",
      title: "Verander je telefoonnummer",
      description: "Als ernstig, overweeg een nieuw nummer als backup",
    },
    {
      step: "4",
      title: "Waarschuw contacten",
      description: "Stuur een bericht dat je account is gehackt",
    },
  ];

  const preventionSteps = [
    "Zet 2FA aan in WhatsApp-instellingen",
    "Gebruik een sterk, uniek telefoonnummer-wachtwoord (niet je geboortedatum)",
    "Vertrouw nooit op WhatsApp alleen – bel altijd eerst",
    "Scannen je apparaat maandelijks op malware",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              WhatsApp Fraude – Nep-Berichten
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              'Mama, ik heb €750 nodig!' – maar je zoon/dochter zit naast je? Dat is fraude. Leer hoe je het herkent.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="tel:+31702119191">
                  <Phone className="mr-2" />
                  Bel 070 211 9191
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/31702119191?text=WhatsApp%20fraude%20hulp" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Hoe herken je nep-berichten?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {redFlags.map((flag, i) => (
              <Card key={i} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{flag.title}</h3>
                  <p className="text-sm text-foreground/70">{flag.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Received Suspicious Message */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Je hebt een verdacht bericht ontvangen
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Je twijfelt of het echt is? Volg deze stappen voordat je geld stuurt.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stepsReceivedMessage.map((item, i) => (
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

      {/* Account Misused */}
      <section className="py-12 md:py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Je WhatsApp wordt misbruikt
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Vrienden zeggen dat ze valse berichten van jou krijgen? Je account is waarschijnlijk gehackt.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stepsAccountMisused.map((item, i) => (
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

      {/* Prevention */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Preventie voor toekomst
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {preventionSteps.map((step, i) => (
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
        description="Je telefoon is gehackt? We checken op malware en beveiligen je WhatsApp-account."
      />

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Slachtoffer van WhatsApp fraude?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We helpen je account terug te krijgen en je apparaat te beveiligen.
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
