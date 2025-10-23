import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, CheckCircle2, ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";
import { OtherServicesGrid } from "@/components/OtherServicesGrid";
import { ReviewSection } from "@/components/ReviewSection";
import { faqPageJsonLd, localBusinessJsonLd, serviceOfferJsonLd } from "@/lib/seo";

const serviceImage = "/images/service-computer.jpg";

export const metadata: Metadata = {
  title: "Computerhulp in Den Haag & Regio | Snel & Betrouwbaar",
  description:
    "Trage computer? Virus? We lossen het snel op – remote of aan huis. Transparante prijzen, geen verrassingen.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-aan-huis",
    languages: {
      "nl-NL": "https://www.instantit.nl/computerhulp-aan-huis",
    },
  },
};

interface ComputerhulpProps {
  city?: string;
}

type CityContent = {
  marketingName?: string;
  neighborhoods: string[];
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
    location: string;
  };
  faqExtra?: { q: string; a: string }[];
  hero: {
    headline: string;
    intro: string;
    highlights: string[];
    links: { label: string; href: string }[];
    imageAlt: string;
  };
};

// City-specific data with neighborhoods, hero copy and case studies
const cityData: Record<string, CityContent> = {
  "Den Haag": {
    marketingName: "Den Haag & regio",
    neighborhoods: ["Scheveningen", "Zeeheldenkwartier", "Statenkwartier", "Archipelbuurt", "Duinoord"],
    caseStudy: {
      problem: "Kantoorlaptop crasht na Windows update in Centrum",
      solution: "Op afstand diagnose, driver conflict gevonden en opgelost, systeem gestabiliseerd",
      result: "Werkdag voortgezet, alle data veilig, heldere tarieven",
      location: "Den Haag Centrum",
    },
    faqExtra: [
      {
        q: "Helpen jullie ook bedrijven in Den Haag?",
        a: "Ja! Veel kantoren in Den Haag gebruiken ons voor spoedservice en preventief onderhoud. Zakelijke contracten beschikbaar.",
      },
    ],
    hero: {
      headline: "Computerhulp Den Haag – direct opgelost in jouw wijk",
      intro:
        "Van Scheveningen tot Loosduinen: we lossen storingen, hacks en traag internet razendsnel op. Binnen Haaglanden rekenen we geen voorrijkosten en je ziet vooraf wat het kost.",
      highlights: [
        "Binnen 10–30 minuten reactie via WhatsApp of telefoon",
        "Aan huis in de hele regio Den Haag, zonder voorrijkosten",
        "Specialisten in directe hulp bij gehackt & preventieve Cyber-APK",
      ],
      links: [
        { label: "Bekijk tarieven", href: "/tarieven" },
        { label: "Directe hulp bij gehackt", href: "/ik-ben-gehackt" },
        { label: "Cyber-APK", href: "/cyber-apk" },
      ],

      imageAlt: "InstantIT computerhulp aan huis in Den Haag",
    },
  },
  "Delft": {
    neighborhoods: ["Binnenstad", "Wippolder", "Voorhof", "Tanthof", "Hof van Delft"],
    caseStudy: {
      problem: "Tech startup in Delft: alle computers ransomware geïnfecteerd",
      solution: "Quarantaine, malware verwijdering, backup terugzet, 2FA en firewall geconfigureerd",
      result: "Bedrijf veilig gesteld, geen gegevens verloren, rapport voor verzekering",
      location: "Delft Binnenstad",
    },
    faqExtra: [
      {
        q: "Zijn jullie bekend met Delft's tech- en universiteitsomgeving?",
        a: "Ja, veel studenten en ondernemers in Delft kiezen ons. We begrijpen de IT-behoeften van de tech community.",
      },
    ],
    hero: {
      headline: "Computerhulp Delft voor studenten, gezinnen & bedrijven",
      intro:
        "Snel hulp bij vastlopers, netwerkproblemen of cyberincidenten in alle Delftse wijken. Ideaal voor TU Delft-studenten, scale-ups en bewoners.",
      highlights: [
        "Op afstand fix meestal binnen 30 minuten",
        "Aan huis in Delft en omliggende dorpen",
        "Ervaring met campusnetwerken en startup-omgevingen",
      ],
      links: [
        { label: "Bekijk WiFi optimalisatie", href: "/wifi" },
        { label: "Mac & Windows support", href: "/diensten" },
        { label: "Hulp bij hacks", href: "/ik-ben-gehackt" },
      ],

      imageAlt: "InstantIT ondersteunt een ondernemer in Delft",
    },
  },
  "Leiden": {
    neighborhoods: ["Bos- en Gasthuisdistrict", "Morsdistrict", "Boerhaavedistrict", "Merenwijk", "Stevenshofdistrict"],
    caseStudy: {
      problem: "Huisarts aan Prins Clausplein: e-mailserver down",
      solution: "Op afstand stabilisatie, backup recovery, beveiligingsupdate, nazorg 2 weken",
      result: "Alle patiëntgegevens veilig, praktijk online in 2 uur",
      location: "Leiden Merenwijk",
    },
    faqExtra: [
      {
        q: "Hebben jullie ervaring met medische- of kantoorpraktijken?",
        a: "Zeker! We hebben veel huisartsen en kantoren geholpen. GDPR-compliant en discreet.",
      },
    ],
    hero: {
      headline: "Computerhulp Leiden – snel weer zorgeloos online",
      intro:
        "Van Merenwijk tot binnenstad: wij stabiliseren pc's, zorgen voor veilige backups en lossen e-mailstoringen direct op.",
      highlights: [
        "GDPR-proof ondersteuning voor praktijken & kantoren",
        "Op afstand triage binnen 30 minuten, aan huis dezelfde dag",
        "Ook beschikbaar voor Cyber-APK en directe hulp bij gehackt",
      ],
      links: [
        { label: "Zakelijke IT in Leiden", href: "/zakelijk" },
        { label: "Cyber-APK", href: "/cyber-apk" },
        { label: "Bekijk alle prijzen", href: "/tarieven" },
      ],

      imageAlt: "InstantIT helpt een huisartsenpraktijk in Leiden",
    },
  },
  "Rijswijk": {
    neighborhoods: ["Oud-Rijswijk", "Leeuwendaal", "Te Werve", "Rembrandtkwartier", "Ministerbuurt"],
    caseStudy: {
      problem: "Winkel in Oud-Rijswijk: PIN niet werkend op vrijdag",
      solution: "Op locatie diagnose, ethernet vervangen, netwerk opnieuw geconfigureerd, backup backup gemaakt",
      result: "PIN werkend in 1 uur, geen omzet verliest",
      location: "Rijswijk Oud-Rijswijk",
    },
    faqExtra: [
      {
        q: "Kunnen jullie ook snelle kassasysteem ondersteuning geven?",
        a: "Ja, we hebben veel winkels en restaurants geholpen met PIN-problemen en kassasystemen.",
      },
    ],
    hero: {
      headline: "Computerhulp Rijswijk – support voor winkels & gezinnen",
      intro:
        "Problemen met PIN, WiFi of kassasystemen? We lossen het op voor ondernemers en huishoudens in heel Rijswijk.",
      highlights: [
        "Snelle hulp voor retail en horeca",
        "Geen voorrijkosten binnen Rijswijk en Haaglanden",
        "Op afstand diagnose beschikbaar buiten openingstijden",
      ],
      links: [
        { label: "Plan directe hulp", href: "/afspraak-maken" },
        { label: "Bekijk zakelijke diensten", href: "/zakelijk" },
        { label: "Cyber-APK", href: "/cyber-apk" },
      ],

      imageAlt: "InstantIT monteurs herstellen kassasysteem in Rijswijk",
    },
  },
  "Voorburg": {
    neighborhoods: ["Voorburg West", "Voorburg Midden", "Bovenveen", "Essesteijn", "Voorburg Noord"],
    caseStudy: {
      problem: "Familie in Voorburg Midden: computer verergerd na update",
      solution: "Op locatie diagnose, systeem herstellen, beveiligingsupdate, training voor groepsbeleid",
      result: "Ouders weer zelfstandig, preventief advies gegeven",
      location: "Voorburg Midden",
    },
    faqExtra: [
      {
        q: "Zijn jullie ook geschikt voor huishoudens met oudere bewoners?",
        a: "Ja, veel families in Voorburg vertrouwen ons met hun oudercomputerhulp. We gaan rustig en geduldig te werk.",
      },
    ],
    hero: {
      headline: "Computerhulp Voorburg – geduldig en duidelijk",
      intro:
        "Rustige uitleg, hulp op afstand of aan huis in Voorburg en Leidschendam. Ideaal voor gezinnen en senioren.",
      highlights: [
        "Aan huis binnen 24–48 uur, vaak dezelfde dag",
        "Geduldige begeleiding bij updates en nieuwe apparaten",
        "Ook beschikbaar voor lessen en digitale veiligheid",
      ],
      links: [
        { label: "Plan computerles", href: "/uitleg-les" },
        { label: "Bekijk tarieven", href: "/tarieven" },
        { label: "Hulp bij hacks", href: "/ik-ben-gehackt" },
      ],

      imageAlt: "InstantIT geeft computerles in Voorburg",
    },
  },
  "Zoetermeer": {
    neighborhoods: ["Rokkeveen", "Oosterheem", "Seghwaert", "Meerzicht", "Buytenwegh-de Leyens"],
    caseStudy: {
      problem: "Bedrijf in Rokkeveen: WiFi down, medewerkers kunnen niet werken",
      solution: "Router reset, firmware update, WiFi hergebruikt, mesh-netwerk geadviseerd",
      result: "Stabiele WiFi hersteld, 2 uur downtime voorkomen",
      location: "Zoetermeer Rokkeveen",
    },
    faqExtra: [
      {
        q: "Helpen jullie bij netwerk-upgrades voor groeiende bedrijven?",
        a: "Zeker, we hebben veel snelgroeiende bedrijven in Zoetermeer ondersteund met netwerkupgrades.",
      },
    ],
    hero: {
      headline: "Computerhulp Zoetermeer – klaar voor groei",
      intro:
        "Voor scale-ups, winkels en huishoudens: wij optimaliseren netwerk, lossen storingen op en bieden directe hulp bij gehackt.",
      highlights: [
        "Mesh- en glasvezelnetwerken zonder downtime",
        "Op afstand diagnose en monitoring mogelijk",
        "Aan huis of kantoor binnen Haaglanden zonder voorrijkosten",
      ],
      links: [
        { label: "Internet & WiFi diensten", href: "/wifi" },
        { label: "Zakelijke pakketten", href: "/zakelijk" },
        { label: "Direct gehackt-hulp", href: "/ik-ben-gehackt" },
      ],

      imageAlt: "InstantIT optimaliseert netwerk bij bedrijf in Zoetermeer",
    },
  },
};

export default function Computerhulp({ city = "Den Haag" }: ComputerhulpProps) {
  const serviceBlocks = [
    { title: "Windows 10/11 Ondersteuning", href: "/windows-support", image: "/images/services/windows-support.svg" },
    { title: "Mac Support", href: "/mac-support", image: "/images/services/mac-support.svg" },
    { title: "Antivirus & Beveiliging", href: "/antivirus-setup", image: "/images/services/antivirus.svg" },
    { title: "Printerhulp", href: "/printer", image: "/images/services/printerhulp.svg" },
    { title: "E-mail Problemen", href: "/email", image: "/images/services/email-problemen.svg" },
    { title: "Internet & WiFi", href: "/wifi", image: "/images/services/wifi.svg" },
  ];

  // Get city-specific data
  const currentCityData = cityData[city] || cityData["Den Haag"];
  const neighborhoods = currentCityData.neighborhoods;
  const hero = currentCityData.hero;
  const marketingCity = currentCityData.marketingName ?? city;

  const problems = [
    "Computer werkt te langzaam of sluit zomaar af",
    "Virus of schadelijke software op je apparaat",
    "Programma's die niet willen installeren",
    "Updates die misgaan",
    "Computer geeft rare foutmeldingen",
    "Je bestanden back-uppen",
    "Apparaat reparatie en onderhoud",
    "Printers en apparaten instellen",
  ];

  const serviceAreas = [
    { name: "Den Haag", link: "/computerhulp-den-haag" },
    { name: "Delft", link: "/computerhulp-delft" },
    { name: "Zoetermeer", link: "/computerhulp-zoetermeer" },
    { name: "Rijswijk", link: "/computerhulp-rijswijk" },
    { name: "Voorburg", link: "/computerhulp-voorburg" },
    { name: "Leiden", link: "/computerhulp-leiden" },
  ];

  const steps = [
    { title: "Gratis intake", desc: "Korte triage via telefoon of WhatsApp" },
    { title: "Remote of on-site", desc: "Meestal remote opgelost; anders binnen 24-48 uur aan de deur" },
    { title: "Fix & uitleg", desc: "We lossen het op én leggen uit wat er aan de hand was" },
    { title: "Nazorg", desc: "Gratis herbeoordeling binnen 7 dagen (max 30 min)" },
  ];

  const faqs = [
    {
      q: "Hoe snel kunnen jullie in " + marketingCity + " helpen?",
      a:
        "Op afstand meestal binnen 10-30 min reactie. Op locatie in en rond " +
        marketingCity +
        " meestal binnen 24-48 uur.",
    },
    {
      q: "Wat als het niet lukt op afstand?",
      a:
        "Dan komen we langs in " +
        marketingCity +
        ". Op afstand tijd rekenen we af tegen op locatie als we toch komen.",
    },
    {
      q: "Is op afstand hulp veilig?",
      a: "Ja! We gebruiken versleutelde tools en vragen altijd toestemming voordat we iets doen.",
    },
    ...(currentCityData.faqExtra || []),
  ];

  const localBusinessSchema = localBusinessJsonLd({
    name: "instantIT",
    url: "https://www.instantit.nl",
    phone: "+31702119191",
    email: "hallo@instantit.nl",
    image: "https://www.instantit.nl/images/service-computer.jpg",
    logo: "https://www.instantit.nl/android-chrome-512x512.png",
    address: {
      streetAddress: "Laan van NOI 88",
      addressLocality: city,
      postalCode: "2593 BP",
      addressCountry: "NL",
    },
    areaServed: city,
    sameAs: [
      "https://www.instagram.com/instantit.nl",
      "https://www.facebook.com/instantit.nl",
      "https://www.linkedin.com/company/instantit-nl",
      "https://maps.app.goo.gl/9eQ2TUtQfem57CCw8",
    ],
  });

  const serviceSchema = serviceOfferJsonLd({
    name: `Computerhulp ${city}`,
    description: hero.intro,
    serviceType: "Computerhulp",
    areaServed: city,
    offers: [],
  });

  const faqSchema = faqPageJsonLd(
    faqs.map((faq) => ({
      question: faq.q,
      answer: faq.a,
    }))
  );

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, serviceSchema, faqSchema]),
        }}
      />
      {/* Hero */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">{hero.intro}</p>
            <ul className="space-y-2 mb-8">
              {hero.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Ik%20heb%20hulp%20nodig%20met%20mijn%20computer"
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
            <div className="mt-8 flex flex-wrap gap-3">
              {hero.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-white/80"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
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
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Hoe we werken</h2>
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

      <PartnersSection />

      <HomepageServicesClient />

      <ReviewSection servicePath="/computerhulp" title="Wat klanten zeggen" showLink={false} />

      <OtherServicesGrid serviceBlocks={serviceBlocks} showCTA={true} title="Wij kunnen helpen met" />

      {/* Neighborhoods */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            We zijn actief in heel {city}
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Met inbegrip van alle wijken en buurten. Of je in het centrum woont of in de buitenwijken, wij zijn snel ter plaatse.
          </p>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {neighborhoods.map((neighborhood) => (
              <div
                key={neighborhood}
                className="px-4 py-2 bg-secondary rounded-full border border-border hover:border-primary transition-colors"
              >
                <p className="font-semibold text-sm">{neighborhood}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Voorbeeld opdracht uit {city}</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent uppercase">Probleem</span>
                <p className="text-lg mt-2">
                  "{currentCityData.caseStudy.problem}"
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                <p className="text-lg mt-2">
                  {currentCityData.caseStudy.solution}
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "{currentCityData.caseStudy.result}"
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">{currentCityData.caseStudy.location}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Ons Werkgebied</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
            {serviceAreas.map((area, index) => (
              <Link key={index} href={area.link}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                    <div className="mb-3 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-1">{area.name}</h3>
                    <p className="text-foreground/70 text-xs font-medium">Computerhulp</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button variant="ghost" asChild>
              <Link href="/werkgebied">Bekijk alle locaties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
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

      <PlanAppointmentCta
        preselect={{
          category: "hardware",
          channel: "onsite",
        }}
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar om hulp te krijgen?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="xl"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/afspraak-maken"><Calendar className="h-3.5 w-3.5 mr-1.5" />
                Afspraak maken
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+31702119191">
                <Phone className="mr-2" />
                Bel nu
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
