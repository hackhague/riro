import type { Metadata } from "next";
import { MessageCircle, Phone, AlertTriangle, Lock, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";

export const metadata: Metadata = {
  title: "Ransomware Infectie? Wat Je Nu Moet Doen",
  description:
    "Je bestanden zijn vergrendeld en je krijgt een boodschap over betaling? Dit is ransomware. Hier is je stappenplan.",
  alternates: {
    canonical: "https://www.instantit.nl/ransomware-hulp",
  },
};

export default function RansomwareHulp() {
  const warningsSigns = [
    {
      title: "Versleutelde bestanden",
      description: "Je bestanden hebben rare extensies (.locked, .encrypted) of werken niet meer",
    },
    {
      title: "Geldeis-scherm",
      description: "Een popupvenster vraagt bitcoins en beweert dat je computer is geblokkeerd",
    },
    {
      title: "Computer traag",
      description: "Alles loopt traag terwijl ransomware je bestanden versleutelt",
    },
    {
      title: "Waarschuwing op bureaublad",
      description: "Groot rood scherm met 'uw bestanden zijn versleuteld' bericht",
    },
  ];

  const immediateSteps = [
    {
      step: "1",
      title: "Isoleer je computer",
      description: "Ontkoppel van internet – Ethernet-kabel eruit of WiFi uit",
    },
    {
      step: "2",
      title: "Betaal NIET",
      description: "Ransomware-makers geven je bestanden niet terug – betalen helpt niet",
    },
    {
      step: "3",
      title: "Sluit alles af",
      description: "Zet je computer uit – geen reparatie- of herstartattenmpten",
    },
    {
      step: "4",
      title: "Bel professionals",
      description: "Neem contact op voor specialistische hulp – dit is ernstig",
    },
  ];

  const recoverySteps = [
    "Scan de computer met specialistische forensische tools",
    "Bepaal welk ransomware type het is – soms bestaan decryptie-tools",
    "Herstel bestanden uit backups (als je die hebt)",
    "Harden het systeem – patch alle gaten waardoorheen het binnenkwam",
  ];

  const preventionSteps = [
    "Zet regelmatige backups op met speciale software",
    "Houd Windows, antivirus en programma's up-to-date",
    "Klik niet op verdachte e-mailbijlagen of links",
    "Herken phishing-pogingen die ransomware installeren",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Ransomware – Je Bestanden Zijn Vergrendeld
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Dit is ernstig, maar panikeren helpt niet. Hier is wat je nu moet doen (spoiler: niet betalen).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="tel:+31702119191">
                  <Phone className="mr-2" />
                  Bel 070 211 9191
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/31702119191?text=Ransomware%20gehad%20hulp" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Is het ransomware?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {warningsSigns.map((sign, i) => (
              <Card key={i} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{sign.title}</h3>
                  <p className="text-sm text-foreground/70">{sign.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Onmiddellijke acties
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Nu telt elke seconde. Dit zijn de eerste dingen die je moet doen.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {immediateSteps.map((item, i) => (
              <Card key={i} className="border-destructive/30">
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

      {/* Recovery */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Herstel van ransomware
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Dit zijn stappen die specialisten kunnen uitvoeren – niet zelf doen.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {recoverySteps.map((step, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{step}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Voorkomen in de toekomst
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
          channel: "onsite",
          speed: "priority",
        }}
        description="Je computer is geïnfecteerd? We gaan direct langs voor onderzoek en recovery."
      />

      {/* Final CTA */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            NIET betalen – Bel ons direct
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ransomware is specialistwork. We hebben tools en ervaring om je bestanden mischien terug te krijgen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive">
              <a href="/afspraak">Spoedafspraak</a>
            </Button>
            <Button variant="outline" size="xl" asChild className="bg-transparent border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive">
              <a href="tel:+31702119191">Bel direct 070 211 9191</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
