import type { Metadata } from "next";
import { MessageCircle, Phone, Zap, Shield, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceImage = "/images/service-hack.jpg";

export const metadata: Metadata = {
  title: "Ik ben gehackt? Direct hulp",
  description:
    "Gehackt? We starten meestal binnen 60 minuten op afstand. Account herstel, ransomware check en rapport voor verzekering.",
  alternates: {
    canonical: "https://www.instantit.nl/ik-ben-gehackt",
  },
};

export default function IkBenGehackt(): JSX.Element {
  // --- META (zet in head)
  // title: "Ik ben gehackt? Direct hulp in Den Haag | InstantIT"
  // description: "Gehackt? We starten meestal binnen 60 min op afstand. Account herstel (Instagram/Gmail), ransomware check en rapport voor verzekering. Bel of app 070 211 9191."

  const signs = [
    "Je kunt niet meer inloggen op je account",
    "Je ziet vreemde uitgaven of onbekende betalingen",
    "Je bestanden zijn vergrendeld en je krijgt een boodschap over geld betalen",
    "De computer geeft steeds waarschuwingen over virussen",
    "Vrienden zeggen dat ze rare berichten van jou krijgen",
    "Je camera of microfoon doet dingen zonder dat je dat wilt",
  ];

  const steps = [
    { title: "Stap 1 — Bellen", desc: "Je belt of appt ons. We beluisteren kort wat er is gebeurd." },
    { title: "Stap 2 — Veilig maken", desc: "We zetten je account op veilig en halen je apparaat van het internet als dat nodig is." },
    { title: "Stap 3 — Herstellen", desc: "We verwijderen de virus, herstellen je accounts en zetten extra beveiliging aan." },
    { title: "Stap 4 — Uitleg", desc: "We geven je een kort verslag en handige tips zodat het niet meer gebeurt." },
  ];

  // JSON-LD: FAQ + HowTo + Service offers (zoekmachines lezen dit)
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
          "text": "We starten meestal binnen 60 minuten op afstand. Als we naar u toe moeten, plannen we binnen 24–48 uur of sneller als we een spoedslot hebben."
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
      { "@type": "HowToStep", "name": "Blijf rustig", "text": "Verander niets totdat je weet wat er precies is gebeurd." },
      { "@type": "HowToStep", "name": "Bel of app InstantIT", "text": "Stuur een screenshot en wij starten op afstand hulp." },
      { "@type": "HowToStep", "name": "Reset wachtwoord en 2FA", "text": "Wij helpen met het terugkrijgen van het account en zetten 2FA aan." }
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
      "address": { "@type": "PostalAddress", "addressLocality": "Den Haag", "addressCountry": "NL" }
    },
    "areaServed": "Haaglanden",
    "offers": [
      { "@type": "Offer", "price": "149.00", "priceCurrency": "EUR", "name": "Op afstand triage (tot 60 min)" },
      { "@type": "Offer", "price": "199.00", "priceCurrency": "EUR", "name": "Spoed on-site (tot 2 uur)" },
      { "@type": "Offer", "price": "249.00", "priceCurrency": "EUR", "name": "Spoed op locatie (zakelijk) - tot 2 uur" },
      { "@type": "Offer", "price": "499.00", "priceCurrency": "EUR", "name": "First Response pakket (zakelijk) - tot 4 uur" }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD (niet zichtbaar voor bezoekers) */}
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

      {/* LLM-answer card (zichtbaar en kort) */}
      <section className="py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-lg border p-4 bg-white">
            <p className="font-medium">Kort & direct</p>
            <p className="mb-2">Wie: Particulieren en kleine bedrijven in Haaglanden.</p>
            <p className="mb-2">Wat: Account herstel, malware verwijderen en een kort rapport.</p>
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

      {/* Pricing (aangepast, zonder vakjargon) */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Tarieven</h2>
          <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-8">
            We starten meestal <strong>binnen 60 minuten op afstand</strong>. Als het nodig is komen we <strong>binnen 24–48 uur</strong> langs.
            Duidelijke prijzen, geen verrassingen.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Particulier – op afstand */}
            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Eerste hulp op afstand (particulier)</h3>
                <p className="text-3xl font-bold text-accent mb-1">€149</p>
                <p className="text-sm text-foreground/60 mb-4">Tot 60 min • vaak genoeg voor herstel</p>
                <p className="text-xs text-foreground/70">
                  Wachtwoorden resetten, 2-stapsverificatie, vreemde e-mailregels uit, controle op malware.
                </p>
              </CardContent>
            </Card>

            {/* Particulier – aan huis */}
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Spoed aan huis (particulier)</h3>
                <p className="text-3xl font-bold text-primary mb-1">€199</p>
                <p className="text-sm text-foreground/60 mb-4">Tot 2 uur • we maken je apparaat weer veilig</p>
                <p className="text-xs text-foreground/70">Als op afstand niet kan of er haast is. Avond/weekend mogelijk als er plek is.</p>
              </CardContent>
            </Card>

            {/* Zakelijk – op afstand */}
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Eerste hulp op afstand (zakelijk)</h3>
                <p className="text-3xl font-bold text-accent mb-1">€159</p>
                <p className="text-sm text-foreground/60 mb-4">Tot 60 min • snel weer doorwerken</p>
                <p className="text-xs text-foreground/70">Accounts herstellen, mailbox opschonen, schakelen met bank/leverancier waar nodig.</p>
              </CardContent>
            </Card>

            {/* Zakelijk – op locatie */}
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Spoed op locatie (zakelijk)</h3>
                <p className="text-3xl font-bold text-primary mb-1">€249</p>
                <p className="text-sm text-foreground/60 mb-4">Tot 2 uur • kassa/PIN/e-mail weer werkend</p>
                <p className="text-xs text-foreground/70">We zetten u weer werkend neer en maken een kort verslag met vervolgstappen.</p>
              </CardContent>
            </Card>

            {/* First Response pakket */}
            <Card className="border-2 border-primary">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">First Response pakket (zakelijk)</h3>
                <p className="text-3xl font-bold text-primary mb-1">€499</p>
                <p className="text-sm text-foreground/60 mb-4">Tot 4 uur • op afstand + op locatie</p>
                <p className="text-xs text-foreground/70">Zwaardere incidenten: veilig stellen, tijdelijk werkend maken en kort rapport.</p>
              </CardContent>
            </Card>

            {/* Nazorg */}
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Nazorg & preventie</h3>
                <p className="text-3xl font-bold text-primary mb-1">€69</p>
                <p className="text-sm text-foreground/60 mb-4">Per uur • wachtwoordmanager, back-up, tips</p>
                <p className="text-xs text-foreground/70">Gratis herbeoordeling binnen 7 dagen (30 min op afstand).</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-foreground/60 text-sm mt-8">
            Op afstand: vooraf betalen via betaallink. Aan huis/zakelijk: pinnen mogelijk. Extra tijd altijd in overleg.
          </p>
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
