import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Zap, Shield, Clock, AlertTriangle, ArrowUpRight, Lock, Eye, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { OtherServicesGrid } from "@/components/OtherServicesGrid";
import { faqPageJsonLd, localBusinessJsonLd, serviceOfferJsonLd } from "@/lib/seo";

const serviceImage = "/images/service-hack.jpg";

export const metadata: Metadata = {
  title: "Gehackt? Direct hulp in Den Haag | InstantIT",
  description:
    "Je bent gehackt? We helpen meestal binnen 60 minuten. Wachtwoorden resetten, virussen verwijderen, accounts herstellen.",
  alternates: {
    canonical: "https://www.instantit.nl/ik-ben-gehackt",
    languages: {
      "nl-NL": "https://www.instantit.nl/ik-ben-gehackt",
    },
  },
};

export default function IkBenGehackt(): JSX.Element {
  const helpServiceBlocks = [
    { title: "Phishing & Verdachte E-mails", href: "/phishing-hulp", image: "/images/services/phishing.jpg" },
    { title: "Instagram Account Gehackt", href: "/instagram-gehackt", image: "/images/services/instagram.jpg" },
    { title: "E-mail Account Gehackt", href: "/email-gehackt", image: "/images/services/email.jpg" },
    { title: "WhatsApp Fraude & Nep-berichten", href: "/whatsapp-fraude", image: "/images/services/whatsapp.jpg" },
    { title: "Ransomware & Versleutelde Bestanden", href: "/ransomware-hulp", image: "/images/services/ransomware.jpg" },
    { title: "Helpdesk Fraude & Nep-Technici", href: "/helpdesk-fraude", image: "/images/services/helpdesk.jpg" },
  ];

  const signs = [
    { icon: Lock, text: "Je kunt niet meer inloggen op je account" },
    { icon: AlertCircle, text: "Je ziet vreemde uitgaven of onbekende betalingen" },
    { icon: Lock, text: "Je bestanden zijn vergrendeld en je krijgt een boodschap over geld betalen" },
    { icon: AlertTriangle, text: "De computer geeft steeds waarschuwingen over virussen" },
    { icon: MessageCircle, text: "Vrienden zeggen dat ze rare berichten van jou krijgen" },
    { icon: Eye, text: "Je camera of microfoon doet dingen zonder dat je dat wilt" },
  ];

  const steps = [
    { title: "Stap 1 — Bellen", desc: "Je belt of appt ons. We beluisteren kort wat er is gebeurd." },
    { title: "Stap 2 — Veilig maken", desc: "We zetten je account op veilig en halen je apparaat van het internet als dat nodig is." },
    { title: "Stap 3 — Herstellen", desc: "We verwijderen de virus, herstellen je accounts en zetten extra beveiliging aan." },
    { title: "Stap 4 — Uitleg", desc: "We geven je een kort verslag en handige tips zodat het niet meer gebeurt." },
  ];

  // JSON-LD: FAQ + HowTo + Service offers (zoekmachines lezen dit)
  const faqLd = faqPageJsonLd([
    {
      question: "Moet ik hackers betalen?",
      answer: "Nee. Betaal nooit direct losgeld. Bel ons eerst; vaak is er een andere oplossing en betalen biedt geen garantie.",
    },
    {
      question: "Hoe snel helpen jullie?",
      answer:
        "We starten meestal binnen 60 minuten op afstand. Als we naar u toe moeten, plannen we binnen 24–48 uur of sneller als we een spoedslot hebben.",
    },
    {
      question: "Krijg ik een rapport voor verzekering?",
      answer: "Ja. We leveren een kort incidentoverzicht dat je kunt gebruiken voor je verzekering of aangifte.",
    },
  ]);

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

  const toSchemaPrice = (price: string) => {
    const normalized = price.replace(/[^0-9,]/g, "").replace(",", ".");
    return normalized.includes(".") ? normalized : `${normalized}.00`;
  };

  const businessProfileLd = localBusinessJsonLd({
    name: "InstantIT - Digitale Eerste Hulp",
    url: "https://www.instantit.nl",
    phone: "+31 70 211 9191",
    email: "hallo@instantit.nl",
    image: "https://www.instantit.nl/images/service-hack.jpg",
    logo: "https://www.instantit.nl/android-chrome-512x512.png",
    address: {
      streetAddress: "Laan van NOI 88",
      addressLocality: "Den Haag",
      postalCode: "2593 BP",
      addressCountry: "NL",
    },
    areaServed: "Haaglanden",
    sameAs: [
      "https://www.facebook.com/instantit.nl",
      "https://www.instagram.com/instantit.nl",
      "https://www.linkedin.com/company/instantit-nl",
      "https://maps.app.goo.gl/9eQ2TUtQfem57CCw8",
    ],
  });

  const serviceOfferLd = serviceOfferJsonLd({
    name: "Directe hulp bij gehackt",
    description: "Hulp bij gehackte accounts, ransomware en spoedbeveiliging.",
    serviceType: "Directe hulp bij gehackt",
    areaServed: "Haaglanden",
    offers: [
      {
        name: "Hack-incident remote",
        price: "149.00",
        priceCurrency: "EUR",
        description: "Account recovery, malware-check en rapportage op afstand.",
      },
      {
        name: "Hack-incident op locatie",
        price: "249.00",
        priceCurrency: "EUR",
        description: "Volledige herstelscan en verzekeringsrapport op locatie.",
      },
    ],
  });

  return (
    <div className="min-h-screen">
      {/* JSON-LD (niet zichtbaar voor bezoekers) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLd, howToLd, serviceOfferLd, businessProfileLd]) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-destructive/10 to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full mb-4">
                <Zap className="h-4 w-4" />
                <span className="font-semibold text-sm">Spoedlijn 24/7</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Gehackt? Direct hulp — Den Haag
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-6">
                We starten meestal binnen <strong>60 minuten</strong> op afstand. Wachtwoorden herstellen, accounts beveiligen, virussen verwijderen.
              </p>

              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2 text-foreground/80">
                  <Clock className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>Binnen 60 minuten starten op afstand, meestal dezelfde dag aan huis</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <Shield className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>Vaste tarieven, geen verrassingen. Incidentrapport voor verzekering.</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>Betaal nooit losgeld. Bel ons eerst — wij weten wat je moet doen.</span>
                </li>
              </ul>

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
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-destructive/20">
              <Image
                src={serviceImage}
                alt="Spoedhulp bij hack of cyberaanval"
                className="w-full h-auto"
                width={800}
                height={600}
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Signs */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Tekenen dat er iets mis is</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {signs.map((sign, i) => {
              const IconComponent = sign.icon;
              return (
                <Card key={i}>
                  <CardContent className="p-4 flex items-start gap-3">
                    <IconComponent className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{sign.text}</span>
                  </CardContent>
                </Card>
              );
            })}
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

      {/* Specific Help Services */}
      <OtherServicesGrid serviceBlocks={helpServiceBlocks} showCTA={true} />

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

      <PlanAppointmentCta
        preselect={{
          category: "security",
          channel: "remote",
          speed: "priority",
        }}
        description="Binnen 60 minuten starten we meestal op afstand. Vul je gegevens in en we bellen je direct terug."
      />

      {/* Urgent CTA */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Twijfel niet ��� bel of app direct</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Als je bent gehackt, telt elke minuut. Zeg nooit direct "ja" tegen losgeldvragen. Bel ons eerst.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl" asChild className="bg-background text-destructive hover:bg-background/90">
              <a
                href="https://wa.me/31702119191?text=Ik%20ben%20gehackt%3A%20[wat%20is%20er%20gebeurd]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp nu
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
