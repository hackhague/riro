import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";
import { heroTechnicianImage, HERO_IMAGE_SIZES } from "@/lib/image-assets";
import {
  Star,
  Clock,
  Shield,
  CheckCircle,
  MessageCircle,
  Phone,
  Zap,
  ArrowRight,
  ZapOff,
  Home as HomeIcon,
  Laptop,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import PartnersSection from "@/components/PartnersSection";
import { ReviewSection } from "@/components/ReviewSection";
import { BlogSection } from "@/components/BlogSection";
import { SITE_PRICING } from "@/config/site-pricing";

export const metadata: Metadata = {
  title: "Computerhulp in Den Haag | Digitale Eerste Hulp",
  description:
    "Snelle computerhulp & cyberhulp in Den Haag e.o. Binnen 10–30 min reactie, meestal binnen 2 uur aan de deur. We helpen ook op afstand door heel Nederland. WhatsApp of bel 070 211 9191.",
  keywords: [
    "computerhulp den haag",
    "cyberhulp",
    "it support",
    "computer reparatie",
    "wifi verbeteren",
  ],
  alternates: {
    canonical: "https://www.instantit.nl/",
  },
  openGraph: {
    url: "https://www.instantit.nl/",
    title: "Computerhulp in Den Haag | Digitale Eerste Hulp",
    description:
      "Snelle computerhulp & cyberhulp in Den Haag e.o. Binnen 10–30 min reactie, meestal binnen 2 uur aan de deur.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        width: 1200,
        height: 630,
        alt: "InstantIT computerhulp in Den Haag",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Computerhulp in Den Haag | Digitale Eerste Hulp",
    description:
      "Snelle computerhulp & cyberhulp in Den Haag e.o. Binnen 10–30 min reactie, meestal binnen 2 uur aan de deur.",
    images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"],
  },
};

export default function Home() {
  const { pricing } = SITE_PRICING;
  const consumerPricing = pricing.consumer;

  // ---------- SERVICE TEGELS (nieuwe blokken) ----------
  const serviceBlocks = [
    { title: "Computerhulp", href: "/computerhulp-aan-huis", image: "/images/services/computerhulp.svg" },
    { title: "Printerhulp", href: "/printer", image: "/images/services/printerhulp.svg" },
    { title: "E-mail Problemen", href: "/email", image: "/images/services/email-problemen.svg" },
    { title: "Internet & WiFi", href: "/wifi", image: "/images/services/wifi.svg" },
    { title: "Tablet & Smartphone", href: "/mobiel-tablet", image: "/images/services/tablet-smartphone.svg" },
    { title: "Uitleg & Les", href: "/uitleg-les", image: "/images/services/uitleg-les.svg" },
  ];

  const usps = [
    {
      icon: Clock,
      title: "Snel & lokaal",
      description: "Reactie binnen 10–30 min; op locatie binnen 24-48 uur in Haaglanden.",
    },
    {
      icon: Shield,
      title: "Betrouwbare specialisten",
      description: "Gescreend en minimaal 5+ jaar ervaring van onze opgeleide IT-Specialisten.",
    },
    {
      icon: Zap,
      title: "Cyber-expertise",
      description: "Herstel bij hacks, accountherstel en beveiligingsadvies.",
    },
    {
      icon: CheckCircle,
      title: "Transparante tarieven & nazorg",
      description: "Vaste tarieven, geen verrassingen. Gratis herbeoordeling binnen 7 dagen.",
    },
    {
      icon: Star,
      title: "Regionaal actief",
      description: "Op locatie inzetbaar in Den Haag, Delft, Zoetermeer, Rijswijk & omgeving; op afstand helpen we door heel Nederland.",
    },
  ];

  const steps = [
    { number: "1", text: "Bel of WhatsApp - we reageren binnen 10-30 minuten" },
    { number: "2", text: "Korte intake - we vragen wat er aan de hand is." },
    { number: "3", text: "Oplossing & uitleg - op afstand of op locatie, we leggen uit wat we doen" },
    { number: "4", text: "Nazorg - 7 dagen gratis nazorg (30 min, op afstand)" },
  ];


  const serviceAreas = [
    { name: "Den Haag", link: "/computerhulp-den-haag" },
    { name: "Delft", link: "/computerhulp-delft" },
    { name: "Zoetermeer", link: "/computerhulp-zoetermeer" },
    { name: "Rijswijk", link: "/computerhulp-rijswijk" },
    { name: "Voorburg", link: "/computerhulp-voorburg" },
    { name: "Leiden", link: "/computerhulp-leiden" },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.instantit.nl/#localbusiness",
      name: "InstantIT - Digitale Eerste Hulp",
      url: "https://www.instantit.nl/",
      image: `https://www.instantit.nl${heroImage}`,
      logo: "https://www.instantit.nl/android-chrome-512x512.png",
      telephone: "+31702119191",
      email: "info@instantit.nl",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Laan van NOI 88",
        addressLocality: "Den Haag",
        postalCode: "2593 BP",
        addressCountry: "NL",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Haaglanden" },
        ...serviceAreas.map((area) => ({ "@type": "City", name: area.name })),
        { "@type": "Country", name: "Nederland" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "https://schema.org/Monday",
            "https://schema.org/Tuesday",
            "https://schema.org/Wednesday",
            "https://schema.org/Thursday",
            "https://schema.org/Friday",
            "https://schema.org/Saturday",
            "https://schema.org/Sunday",
          ],
          opens: "08:00",
          closes: "22:00",
        },
      ],
      sameAs: [
        "https://www.instagram.com/instantit.nl",
        "https://www.facebook.com/instantit.nl",
        "https://www.linkedin.com/company/instantit-nl",
        "https://maps.app.goo.gl/9eQ2TUtQfem57CCw8",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+31702119191",
          email: "support@instantit.nl",
          availableLanguage: ["Dutch", "English"],
          areaServed: "NL",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.instantit.nl/#website",
      name: "InstantIT",
      url: "https://www.instantit.nl/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.instantit.nl/zoek?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* ------------------- HERO ------------------- */}
      <section className="relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroTechnicianImage}
            alt="InstantIT monteur helpt klant met computerhulp aan huis in Den Haag"
            fill
            priority
            placeholder="blur"
            sizes={HERO_IMAGE_SIZES}
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[600px] py-10 md:py-16">
            <h1 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-white mb-2 md:mb-3">
              Computerhulp nodig, of gehackt? Wij lossen het snel voor je op!
            </h1>

            <h2 className="font-heading font-semibold text-sm md:text-base lg:text-lg leading-snug text-white/95 mb-4 md:mb-5">
              Op afstand geholpen door heel Nederland — op locatie in <strong>Den Haag</strong>, <strong>Rotterdam</strong>, <strong>Delft</strong>, <strong>Zoetermeer</strong> en omgeving.
            </h2>

            <div className="hidden md:block">
              <ul className="space-y-2 text-xs md:text-sm text-white/85 mb-4 md:mb-6">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">•</span>
                  <span><strong>InstantIT</strong> — lokale IT-professional voor computerstoringen, hackondersteuning en WiFi-verbetering.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">•</span>
                  <span><strong>Binnen</strong> 10-30 minuten reactie — <strong>meestal dezelfde dag nog hulp op afstand of op locatie</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent">•</span>
                  <span>Vaste tarieven — geen verrassingen. Altijd gratis nazorg.</span>
                </li>
              </ul>
            </div>

            <div className="md:hidden">
              <details className="bg-black/60 rounded-lg p-3 text-white/90">
                <summary className="font-semibold">Waarom kiezen voor InstantIT?</summary>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>InstantIT — lokale IT-professional voor computerstoringen, hackondersteuning en WiFi-verbetering.</li>
                  <li><strong>Binnen</strong> 10–30 minuten reactie — meestal dezelfde dag op locatie.</li>
                  <li>Vaste tarieven — geen verrassingen. Altijd nazorg.</li>
                </ul>
              </details>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
              <Button variant="outline" size="default" asChild className="bg-white text-black border border-white shadow-none hover:shadow-none h-10 md:h-10 font-normal">
                <a
                  href="https://wa.me/31702119191?text=Hallo%20InstantIT%2C%20ik%20heb%20hulp%20nodig%20met"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat via WhatsApp
                </a>
              </Button>

              <Button variant="accent" size="default" asChild>
                <a href="tel:+31702119191">
                  <Phone className="h-4 w-4" />
                  Computerstoring? Bel 070 211 9191
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 items-center text-xs md:text-sm text-foreground/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white">Vaste tarieven</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white">VOG & Verzekerd</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white">10+ jaar ervaring</span>
              </div>
              <div className="flex items-center gap-2 ml-1 w-full text-white">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-semibold">4.9/5</span>
                <span className="ml-1">• 1.100+ opdrachten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- USPs ------------------- */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarom kiezen voor InstantIT?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {usps.map((usp, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <usp.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{usp.title}</h3>
                  <p className="text-foreground/70">{usp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="outline" asChild>
              <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2" />WhatsApp</a>
            </Button>
            <Button variant="accent" asChild>
              <a href="tel:+31702119191"><Phone className="mr-2" />Bel nu</a>
            </Button>
          </div>
        </div>
      </section>
      <PartnersSection />

      {/* ------------------- MAIN SERVICES (WITH TOGGLE) ------------------- */}
      <HomepageServicesClient />

      {/* ------------------- HOW IT WORKS ------------------- */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Hoe het werkt</h2>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${index < steps.length - 1 ? "md:after:content-[''] md:after:absolute md:after:top-10 md:after:left-1/2 md:after:ml-8 md:after:h-px md:after:w-[calc(100%+1.5rem)] md:after:bg-primary/20 md:before:content-[''] md:before:absolute md:before:top-[38px] md:before:right-[-10px] md:before:w-2 md:before:h-2 md:before:bg-primary/30 md:before:rounded-full" : ""}`}
              >
                <Card className="shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl md:text-2xl font-bold text-primary-foreground">{step.number}</span>
                    </div>
                    <h3 className="font-heading font-semibold">{step.text}</h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/afspraak-maken"><Calendar className="h-3.5 w-3.5 mr-1.5" />Afspraak maken</Link>
          </Button>
          <Button variant="accent" asChild>
            <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2" />WhatsApp</a>
          </Button>
        </div>
      </section>

      <PlanAppointmentCta />

      {/* ------------------- REVIEWS / CASES ------------------- */}
      <ReviewSection servicePath="/" title="Wat klanten zeggen" showLink={true} />

      {/* ------------------- SERVICE AREAS ------------------- */}
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

      {/* ------------------- FAQ ------------------- */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Veelgestelde vragen</h2>
              <p className="text-foreground/80">
                Hier beantwoorden we de meestgestelde vragen over <strong>computerhulp</strong>, <strong>virusverwijdering</strong>,
                <strong> WiFi-problemen</strong> en <strong>cyberhulp</strong>.
                Staat jouw vraag er niet tussen? Bel ons op{" "}
                <a className="font-semibold underline" href="tel:+31702119191">070 211 9191</a> of stuur een bericht via{" "}
                <a
                  className="font-semibold underline"
                  href="https://wa.me/31702119191"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
                — we reageren meestal binnen 10 – 30 minuten.
              </p>
            </div>

            <div>
              <div className="rounded-lg border bg-background">
                <div className="divide-y">
                  <details open>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Hoe snel helpen jullie bij spoed?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>We reageren meestal binnen 10–30 minuten op afstand. Bij spoed kunnen we vaak dezelfde dag op locatie zijn.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="tel:+31702119191">Bel nu</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">WhatsApp direct</a>
                      </div>
                    </div>
                  </details>

                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Wat kost computerhulp op afstand?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>
                        Computerhulp op afstand begint bij {consumerPricing.remote.price.display}
                        {consumerPricing.remote.price.unit
                          ? ` voor ${consumerPricing.remote.price.unit.toLowerCase()}`
                          : ""}
                        .{" "}
                        {consumerPricing.remote.price.extra
                          ? `${consumerPricing.remote.price.extra}. `
                          : ""}
                        Je ziet altijd de prijs voordat we starten.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/tarieven">Bekijk prijzen</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">Start hulp</a>
                      </div>
                    </div>
                  </details>

                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Is op afstand toegang veilig?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>Ja — we gebruiken versleutelde tools en vragen altijd jouw toestemming voordat we meekijken. We delen je gegevens niet met derden.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/hulp-op-afstand">Lees meer over veiligheid</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">Start op afstand</a>
                      </div>
                    </div>
                  </details>

                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Wat als jullie het niet kunnen oplossen?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>Dan geven we duidelijk advies zonder verborgen kosten. Indien nodig krijg je een gratis herbeoordeling binnen 7 dagen.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/contact">Vraag gratis herbeoordeling aan</a>
                      </div>
                    </div>
                  </details>

                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Hoe kan ik het snelst een afspraak maken?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>Het snelst is bellen of WhatsAppen — dat kost bijna geen tijd en we plannen meteen een korte intake. Je kunt ook via het afspraakformulier boeken.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="tel:+31702119191">Bel nu</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">WhatsApp nu</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/afspraak">Plan afspraak</a>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- BLOG SECTION ------------------- */}
      <BlogSection />
      {/* ------------------- FINAL CTA ------------------- */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Klaar om jouw IT-probleem op te lossen?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp ons nu
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
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
