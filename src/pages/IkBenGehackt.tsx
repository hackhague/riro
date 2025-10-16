// src/pages/IkBenGehackt.tsx
import React from "react";
import {
  MessageCircle,
  Phone,
  Zap,
  Shield,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import serviceImage from "@/assets/service-hack.jpg";

export default function IkBenGehackt(): JSX.Element {
  const signs = [
    "Je kunt niet meer inloggen (wachtwoord aangepast)",
    "Onbekende betalingen of vreemde berichten",
    "Bestanden zijn vergrendeld met een losgeldeis",
    "Opdringerige pop-ups of valse virusmeldingen",
    "Vrienden of familie krijgen rare berichten van jouw account",
    "Camera of microfoon werkt zonder dat jij dat doet",
  ];

  const steps = [
    { title: "Stap 1 — Kort contact", desc: "Je stuurt een screenshot of beschrijving. We bellen of appen kort." },
    { title: "Stap 2 — Veilig maken", desc: "We blokkeren toegang en halen het apparaat van internet als dat helpt." },
    { title: "Stap 3 — Herstel", desc: "We verwijderen malware, herstellen accounts en zetten 2FA aan." },
    { title: "Stap 4 — Nazorg", desc: "We geven een kort rapport en eenvoudige tips tegen herhaling." },
  ];

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik hackers betalen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee. Betaal nooit direct losgeld. Bel ons eerst; vaak is er een andere oplossing en betalen biedt geen garantie."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe snel helpen jullie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We starten meestal binnen 60 minuten via op afstand. Als we naar u toe moeten, plannen we binnen 24–48 uur of sneller als we een spoedslot hebben."
        }
      },
      {
        "@type": "Question",
        "name": "Krijg ik een rapport voor verzekering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. We leveren een kort incidentoverzicht dat je kunt gebruiken voor je verzekering of aangifte."
        }
      }
    ]
  };

  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Wat te doen als uw Instagram of Gmail is gehackt",
    "step": [
      {"@type":"HowToStep","name":"Blijf rustig","text":"Verander niets totdat je weet wat er precies is gebeurd."},
      {"@type":"HowToStep","name":"Bel of app InstantIT","text":"Stuur een screenshot en wij starten op afstand hulp."},
      {"@type":"HowToStep","name":"Reset wachtwoord en 2FA","text":"Wij helpen met het terugkrijgen van het account en zetten 2FA aan."}
    ]
  };

  const serviceOfferLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hacklijn - op afstand triage",
    "description": "Hulp bij gehackte accounts en ransomware. Direct advies en containment.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "InstantIT",
      "telephone": "+31-70-2119191",
      "address": {"@type":"PostalAddress","addressLocality":"Den Haag","addressCountry":"NL"}
    },
    "areaServed": "Haaglanden",
    "offers": [
      {"@type":"Offer","price":"149.00","priceCurrency":"EUR","name":"Op afstand triage (tot 60 min)"},
      {"@type":"Offer","price":"199.00","priceCurrency":"EUR","name":"Spoed on-site (tot 2 uur)"}
    ]
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD (niet zichtbaar voor gebruikers) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceOfferLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-destructive/10 to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full mb-4">
                <Zap className="h-4 w-4" />
                <span className="font-semibold text-sm">Spoedlijn</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Gehackt? Direct hulp — Den Haag
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                We starten meestal binnen <strong>60 minuten</strong> op afstand. Als nodig, op locatie binnen <strong>24–48 uur</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" asChild>
                  <a
                    href="https://wa.me/31702119191?text=Ik%20ben%20gehackt%3A%20[kort%20probleem]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" />
                    WhatsApp direct
                  </a>
                </Button>
                <Button variant="default" size="lg" asChild>
                  <a href="tel:+31702119191">
                    <Phone className="mr-2" />
                    Bel 070 211 9191
                  </a>
                </Button>
              </div>

              <p className="text-sm text-foreground/60 mt-4">
                <AlertTriangle className="h-4 w-4 inline mr-1" />
                Betaal <strong>nooit</strong> losgeld zonder eerst met ons te overleggen.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-destructive/20">
              <img src={serviceImage} alt="Spoedhulp bij hack of cyberaanval" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* LLM-answer card */}
      <section className="py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-lg border p-4 bg-white">
            <p className="font-medium">Kort & direct</p>
            <p className="mb-2">Wie: Particulieren en kleine bedrijven in Haaglanden.</p>
            <p className="mb-2">Wat: Account herstel, malware verwijderen, en een kort rapport.</p>
            <p>Wanneer: Op afstand meestal binnen 60 min. Op locatie binnen 24–48 uur als nodig.</p>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Tekenen dat er iets mis is</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {signs.map((s, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{s}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Hoe we dit aanpakken</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <Card key={idx} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">{idx + 1}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-foreground/70 max-w-3xl mx-auto text-center mt-6">
            We werken stap voor stap en leggen alles in gewone taal uit. Je krijgt een kort verslag met wat we hebben gedaan.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Tarieven</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Op afstand triage</h3>
                <p className="text-3xl font-bold text-accent mb-1">€149</p>
                <p className="text-sm text-foreground/60 mb-4">Tot 60 minuten • advies en eerste hulp</p>
                <p className="text-xs text-foreground/70">Meestal binnen 60 minuten bereikbaar</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Spoed on-site</h3>
                <p className="text-3xl font-bold text-primary mb-1">€199</p>
                <p className="text-sm text-foreground/60 mb-4">Tot 2 uur • veilig maken en rapport</p>
                <p className="text-xs text-foreground/70">Alleen bij acute dreiging</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Nazorg & preventie</h3>
                <p className="text-3xl font-bold text-primary mb-1">€65</p>
                <p className="text-sm text-foreground/60 mb-4">Per uur • 2FA, wachtwoorden en back-ups</p>
                <p className="text-xs text-foreground/70">Heldere stappen om herhaling te voorkomen</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ (visual) */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Veelgestelde vragen</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqLd.mainEntity.map((f, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{f.name}</h3>
                  <p className="text-foreground/70">{f.acceptedAnswer.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Twijfel niet — bel of app direct</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Bij een hack telt elke minuut. Laat ons eerst kijken voordat je stappen als betalen overweegt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl" asChild className="bg-background text-destructive hover:bg-background/90">
              <a
                href="https://wa.me/31702119191?text=Ik%20ben%20gehackt%3A%20[kort%20probleem]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp spoedhulp
              </a>
            </Button>
            <Button variant="accent" size="xl" asChild>
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
