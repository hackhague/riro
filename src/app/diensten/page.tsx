import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Laptop, Shield, Wifi, CheckCircle2, Briefcase, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRICE_TIERS } from "@/data/pricing";
import { localBusinessJsonLd, serviceOfferJsonLd } from "@/lib/seo";
import { ReviewSection } from "@/components/ReviewSection";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Diensten — Computerhulp & Cyberhulp in Den Haag",
  description:
    "Computerhulp aan huis & remote, hacklijn, WiFi-verbetering en Cyber-APK voor particulieren en kleine bedrijven in Haaglanden. Transparante prijzen.",
  alternates: {
    canonical: "https://www.instantit.nl/diensten",
    languages: {
      "nl-NL": "https://www.instantit.nl/diensten",
    },
  },
};

export default function Diensten() {
  // --- META (plek dit in je head via je bestaande setup)
  // title: "Diensten — Computerhulp & Cyberhulp in Den Haag | InstantIT"
  // description: "Computerhulp aan huis & remote, hacklijn, WiFi-verbetering en Cyber-APK voor particulieren en kleine bedrijven in Haaglanden. Transparante prijzen."
  // canonical: https://instantit.nl/diensten

  const consumerServices = [
    {
      icon: Laptop,
      title: "Computerhulp aan huis & remote",
      description: "Trage laptop? Printer doet raar? Wij lossen het op, thuis of op afstand.",
      link: "/computerhulp",
      features: [
        "Snelle diagnose en directe oplossing",
        "Opschonen en sneller maken",
        "Printer- en software-installatie",
        "Back-up advies en herstel",
      ],
    },
    {
      icon: Shield,
      title: "Ik ben gehackt",
      description: "Iemand in je account of computer? We helpen je veilig terug en voorkomen herhaling.",
      link: "/ik-ben-gehackt",
      features: [
        "Directe remote hulp (meestal binnen 60 min)",
        "Wachtwoord reset & 2FA instellen",
        "Account terughalen (Instagram, Gmail, Facebook)",
        "Kort herstelrapport voor verzekering",
      ],
    },
    {
      icon: Wifi,
      title: "WiFi & thuisnetwerk",
      description: "Slechte wifi? We maken je wifi stabiel en veilig in huis.",
      link: "/wifi",
      features: [
        "Dekking & snelheidstest",
        "Mesh-advies en installatie",
        "Gasten-wifi en kindersloten",
        "Veilige router-instellingen",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Cyber-APK voor thuis",
      description: "Een eenvoudige veiligheidscheck: direct inzicht en een kort rapport met acties.",
      link: "/cyber-apk",
      features: [
        "Wachtwoord- en 2FA-check",
        "Antivirus & updates controleren",
        "Back-up status controleren",
        "Eenvoudig stappenplan & kort rapport",
      ],
    },
  ];

  const businessServices = [
    {
      icon: Briefcase,
      title: "Snel hulp bij kassa / PIN / internet",
      description: "Kassa of pin werkt niet? Wij zorgen dat u weer kan verkopen.",
      link: "/zakelijk-spoed",
      features: [
        "Remote-first triage zodat u snel weer verder kan",
        "Nood-4G of tijdelijke internetoplossing",
        "Ter plaatse herstellen of tijdelijk werkend maken",
        "Kort rapport met vervolgstappen",
      ],
    },
    {
      icon: Shield,
      title: "Directe hulp bij gehackt voor praktijk of winkel",
      description: "Phishing, gehackte e-mail of vergrendelde systemen? We helpen direct en praktisch.",
      link: "/ik-ben-gehackt",
      features: [
        "Toegang blokkeren waar nodig",
        "E-mail en account herstel",
        "Nazorg: 2FA en instructie voor medewerkers",
        "Rapport voor verzekering of administratie",
      ],
    },
    {
      icon: Wifi,
      title: "Netwerk & beveiliging voor kleine bedrijven",
      description: "Stabiele wifi en een veilig netwerk voor kassa’s, tablets en printers.",
      link: "/wifi",
      features: [
        "Zakelijk/gast netwerk scheiden",
        "Wifi-dekking en stabiliteit",
        "Aanbeveling voor betaalbare hardware",
        "Back-up routines en controle",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Cyber-APK voor bedrijven",
      description: "Een korte scan die direct laat zien wat prioriteit heeft en wat praktisch te doen is.",
      link: "/cyber-apk",
      features: [
        "Quick-check: wachtwoorden, 2FA, back-up",
        "Praktische stappen voor medewerkers",
        "Prioriteitenlijst met kosteninschatting",
        "Kort rapport om mee aan de slag te gaan",
      ],
    },
  ];

  const toSchemaPrice = (price: string) => {
    const normalized = price.replace(/[^0-9,]/g, "").replace(",", ".");
    return normalized.includes(".") ? normalized : `${normalized}.00`;
  };

  const localBusinessLd = localBusinessJsonLd({
    name: "InstantIT - Digitale Eerste Hulp",
    url: "https://www.instantit.nl",
    phone: "+31 70 211 9191",
    email: "hallo@instantit.nl",
    image: "https://www.instantit.nl/images/service-computer.jpg",
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

  const serviceOffersLd = serviceOfferJsonLd({
    name: "IT- en cyberhulp diensten",
    description: "Computerhulp, directe hulp bij gehackt en WiFi-optimalisatie voor Haaglanden.",
    serviceType: "IT-support",
    areaServed: "Haaglanden",
    offers: [
      {
        name: PRICE_TIERS.remoteQuickFix.label,
        price: toSchemaPrice(PRICE_TIERS.remoteQuickFix.price),
        priceCurrency: "EUR",
        url: `https://www.instantit.nl${PRICE_TIERS.remoteQuickFix.href}`,
        description: PRICE_TIERS.remoteQuickFix.subline,
      },
      {
        name: PRICE_TIERS.homeVisit.label,
        price: toSchemaPrice(PRICE_TIERS.homeVisit.price),
        priceCurrency: "EUR",
        url: `https://www.instantit.nl${PRICE_TIERS.homeVisit.href}`,
        description: PRICE_TIERS.homeVisit.subline,
      },
      {
        name: PRICE_TIERS.emergencyHacked.label,
        price: toSchemaPrice(PRICE_TIERS.emergencyHacked.price),
        priceCurrency: "EUR",
        url: `https://www.instantit.nl${PRICE_TIERS.emergencyHacked.href}`,
        description: PRICE_TIERS.emergencyHacked.subline,
      },
    ],
  });

  return (
    <div className="min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessLd, serviceOffersLd]) }}
      />

      {/* Header */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT diensten"
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Onze diensten
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Van snelle hulp bij een hack tot eenvoudige controles om problemen te voorkomen.
              InstantIT helpt particulieren en kleine bedrijven in Den Haag en omgeving.
            </p>
          </div>
        </div>
      </section>

      {/* LLM-answer card (kort, feitelijk) */}
      <section className="py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-lg border p-4 bg-white">
            <p className="font-medium">Wie</p>
            <p className="mb-2">Particulieren en kleine bedrijven in Haaglanden.</p>
            <p className="font-medium">Wat</p>
            <p className="mb-2">Hulp bij hacks, trage computers, wifi en back-ups.</p>
            <p className="font-medium">Wanneer & prijs</p>
            <p>Remote meestal binnen 60 min (cap €149). On-site doorgaans binnen 24–48 uur (spoed mogelijk).</p>
          </div>
        </div>
      </section>

      {/* Particulier */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl">Voor particulieren</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mt-3">
              Hulp aan huis of op afstand. Duidelijke prijzen en eerlijk advies — zonder technische rompslomp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {consumerServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-2 hover:border-primary">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl">{service.title}</h3>
                      <p className="text-foreground/70 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button variant="default" asChild>
                      <Link href={service.link}>
                        Meer info
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:+31702119191">
                        Bel nu
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zakelijk */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl">Voor kleine bedrijven</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mt-3">
              Praktische oplossingen voor winkels, praktijkjes en zzp'ers — snel weer aan het werk, met duidelijke stappen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-2 hover:border-primary">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl">{service.title}</h3>
                      <p className="text-foreground/70 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button variant="default" asChild>
                      <Link href={service.link}>
                        Meer info
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:+31702119191">
                        Bel nu
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-foreground/70">
              Dringend nodig? Vraag naar onze <strong>spoed on-site</strong> optie. Als we een spoedslot vrij hebben, kunnen we vaak binnen <strong>2 uur</strong> reageren.
            </p>
          </div>
        </div>
      </section>

      <ReviewSection servicePath="/diensten" title="Wat klanten zeggen" showLink={true} />

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Weet je niet zeker wat je nodig hebt?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            App of bel even — we helpen je meteen bepalen wat het snelst werkt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20wil%20advies%20over%20mijn%20computer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp ons
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+31702119191">Bel 070 211 9191</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
