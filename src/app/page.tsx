import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
  Home,
  Zap as Lightning,
  Laptop,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AppointmentWizard from "@/components/AppointmentWizard";
import PartnersSection from "@/components/PartnersSection";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Computerhulp in Den Haag | Digitale Eerste Hulp",
  description:
    "Snelle computerhulp & cyberhulp in Den Haag e.o. Binnen 10–30 min readfsdfsdfctie, meestal binnen 2 uur aan de deur. WhatsApp of bel 070 211 9191.",
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
  // ---------- SERVICE TEGELS (nieuwe blokken) ----------
  const serviceBlocks = [
    { title: "Computerhulp", href: "/computerhulp", image: "/images/services/computerhulp.jpg" },
    { title: "Printerhulp", href: "/printer", image: "/images/services/printerhulp.jpg" },
    { title: "E-mail Problemen", href: "/email", image: "/images/services/email-problemen.jpg" },
    { title: "Internet & WiFi", href: "/wifi", image: "/images/services/wifi.jpg" },
    { title: "Tablet & Smartphone", href: "/mobiel-tablet", image: "/images/services/tablet-smartphone.jpg" },
    { title: "Uitleg & Les", href: "/uitleg-les", image: "/images/services/uitleg-les.jpg" },
  ];

  const usps = [
    {
      icon: Clock,
      title: "Snel & lokaal",
      description: "Reactie binnen 10–30 min; op locatie meestal binnen 24 uur in Haaglanden.",
    },
    {
      icon: Shield,
      title: "Betrouwbare specialisten",
      description: "Gescreend en minimaal 5+ jaar ervaaaring van onze opgeleide IT-Specialisten.",
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
      description: "Direct inzetbaar in Den Haag, Delft, Zoetermeer, Rijswijk & omgeving.",
    },
  ];

  const pricing = [
    { name: "Computerhulp op afstand", price: "€39 / 30 min" },
    { name: "Computerhulp aan huis", price: "€65 / uur", cap: "Geen voorrijkosten in Haaglanden (min. 1 uur)" },
    { name: "Hacklijn op afstand", price: "€50 / 30 min" },
    { name: "Spoed op locatie", price: "Neem contact op" },
  ];

  const steps = [
    { number: "1", text: "Bel of WhatsApp - we reageren binnen 10-30 minuten" },
    { number: "2", text: "Korte intake - we vragen wat er aan de hand is." },
    { number: "3", text: "Oplossing & uitleg - op afstand of op locatie, we leggen uit wat we doen" },
    { number: "4", text: "Nazorg - 7 dagen gratis nazorg (30 min, op afstand)" },
  ];

  const reviews = [
    {
      problem: "PIN en kassa down op vrijdagavond",
      solution: "4G-failover + noodplan",
      result: "Binnen 1 uur weer online",
      location: "Scheveningen",
    },
    {
      problem: "Ransomware op laptop",
      solution: "Herstel + 2FA",
      result: "Alles veilig, rapport voor verzekering",
      location: "Ypenburg",
    },
    {
      problem: "WiFi dode zones",
      solution: "Mesh + router-hardening",
      result: "Volle snelheid op alle kamers",
      location: "Delft",
    },
  ];

  const serviceAreas = [
    { name: "Den Haag", link: "/computerhulp-den-haag" },
    { name: "Delft", link: "/computerhulp-delft" },
    { name: "Zoetermeer", link: "/computerhulp-zoetermeer" },
    { name: "Rijswijk", link: "/computerhulp-rijswijk" },
    { name: "Voorburg", link: "/computerhulp-voorburg" },
    { name: "Leiden", link: "/computerhulp-leiden" },
  ];

  return (
    <div className="min-h-screen">
      {/* ------------------- HERO ------------------- */}
      <section className="relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT monteur helpt klant met computerhulp aan huis in Den Haag"
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

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[600px] py-10 md:py-16">
            <h1 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-white mb-2 md:mb-3">
              Computerhulp nodig, of gehackt? Wij lossen het snel voor je op!
            </h1>

            <h2 className="font-heading font-semibold text-sm md:text-base lg:text-lg leading-snug text-white/95 mb-4 md:mb-5">
              24/7 computerhulp in <strong>Den Haag</strong>, <strong>Rotterdam</strong>, <strong>Delft</strong>, <strong>Zoetermeer</strong> en omgeving.
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

      {/* ------------------- MAIN SERVICES (4 BLOKKEN - 2x2 GRID) ------------------- */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Hoe kan InstantIT je helpen?
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Kies de oplossing die het beste bij jou past. Alle services zijn betrouwbaar, transparant, en met garantie.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Card 1: Computerhulp aan huis (Donkerblauw) */}
            <div className="group flex flex-col h-full rounded-2xl border-2 border-blue-900 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 h-20 flex items-center justify-center">
                <div className="text-5xl">🏠</div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                  Computerhulp aan huis
                </h3>
                <p className="text-xs text-foreground/60 mb-3">Met afspraak • Binnen 48–72 uur</p>
                <p className="text-blue-900 font-bold text-2xl mb-4">
                  €69/uur
                </p>
                <p className="text-foreground/70 text-sm mb-5">
                  Grondige diagnose en reparatie op jouw locatie. Geen voorrijkosten.
                </p>

                <ul className="space-y-2 mb-6 flex-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-900 flex-shrink-0 mt-0.5" />
                    <span>Expert diagnose & oplossing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-900 flex-shrink-0 mt-0.5" />
                    <span>Gratis 7 dagen nazorg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-900 flex-shrink-0 mt-0.5" />
                    <span>Live uitleg van wat we doen</span>
                  </li>
                </ul>

                <Button className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold h-11 rounded-lg mb-3" asChild>
                  <Link href="/computerhulp">Meer info</Link>
                </Button>

                <Button variant="outline" className="w-full border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold h-10" asChild>
                  <Link href="/afspraak">Maak afspraak</Link>
                </Button>
              </div>
            </div>

            {/* Card 2: IT Spoedhulp aan huis (Middenblauw - POPULAIR) */}
            <div className="group flex flex-col h-full rounded-2xl border-2 border-blue-500 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden ring-2 ring-blue-200">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-20 flex items-center justify-center relative">
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  POPULAIR
                </div>
                <div className="text-5xl">⚡</div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                  IT Spoedhulp aan huis
                </h3>
                <p className="text-xs text-foreground/60 mb-3">Spoed • Meestal binnen 24 uur</p>
                <p className="text-blue-600 font-bold text-2xl mb-4">
                  €85/uur
                </p>
                <p className="text-foreground/70 text-sm mb-5">
                  Snel ter plaatse voor acute problemen. Geen afspraak nodig – we bellen je terug.
                </p>

                <ul className="space-y-2 mb-6 flex-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Spoedeisend ter plaatse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Geen afspraak nodig</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Gratis 7 dagen nazorg</span>
                  </li>
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11 rounded-lg mb-3" asChild>
                  <a href="tel:+31702119191">Bel nu - 070 211 9191</a>
                </Button>

                <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold h-10" asChild>
                  <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Card 3: Computerhulp op afstand (Lichtblauw) */}
            <div className="group flex flex-col h-full rounded-2xl border-2 border-blue-300 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-100 to-blue-300 h-20 flex items-center justify-center">
                <div className="text-5xl">💻</div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                  Computerhulp op afstand
                </h3>
                <p className="text-xs text-foreground/60 mb-3">Remote • 10–30 minuten reactie</p>
                <p className="text-blue-600 font-bold text-2xl mb-4">
                  €39–€99
                </p>
                <p className="text-foreground/70 text-sm mb-5">
                  Snelle remote hulp. €1/minuut, max €99. Meestal direct beschikbaar.
                </p>

                <ul className="space-y-2 mb-6 flex-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Snelle respons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Veilige versleuteling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Live uitleg & support</span>
                  </li>
                </ul>

                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold h-11 rounded-lg mb-3" asChild>
                  <Link href="/hulp-op-afstand">Meer info</Link>
                </Button>

                <Button variant="outline" className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold h-10" asChild>
                  <a href="https://wa.me/31702119191?text=Ik%20heb%20nu%20hulp%20nodig%20op%20afstand" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start nu
                  </a>
                </Button>
              </div>
            </div>

            {/* Card 4: Hackservice (Rood) */}
            <div className="group flex flex-col h-full rounded-2xl border-2 border-red-500 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-red-500 to-red-700 h-20 flex items-center justify-center">
                <div className="text-5xl">🛡️</div>
              </div>

              <div className="flex-1 p-6 flex flex-col">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                  Hackservice
                </h3>
                <p className="text-xs text-foreground/60 mb-3">Spoed • 24/7 beschikbaar</p>
                <p className="text-red-600 font-bold text-2xl mb-4">
                  €50/30 min
                </p>
                <p className="text-foreground/70 text-sm mb-5">
                  Gehackt? Virus, ransomware? Wij helpen 24/7. Snel herstel en beveiging.
                </p>

                <ul className="space-y-2 mb-6 flex-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>24/7 cybersteun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Malware verwijdering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Rapport voor verzekering</span>
                  </li>
                </ul>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold h-11 rounded-lg mb-3" asChild>
                  <Link href="/ik-ben-gehackt">Meer info</Link>
                </Button>

                <Button variant="outline" className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold h-10" asChild>
                  <a href="tel:+31702119191">Bel SPOED</a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/60 mb-6">Weet je niet zeker welke service je nodig hebt?</p>
            <Button size="lg" variant="default" asChild>
              <Link href="/afspraak">Plan gratis intake gesprek</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------- PRICING ------------------- */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Transparante Prijzen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pricing.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-1">{item.price}</p>
                  <p className="text-sm text-foreground/60">{item.cap}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/tarieven">Bekijk alle tarieven</Link>
            </Button>
          </div>
        </div>
      </section>

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
            <Link href="/afspraak">Plan een afspraak</Link>
          </Button>
          <Button variant="accent" asChild>
            <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2" />WhatsApp</a>
          </Button>
        </div>
      </section>

      {/* ------------------- APPOINTMENT WIZARD ------------------- */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <AppointmentWizard />
        </div>
      </section>

      {/* ------------------- REVIEWS / CASES ------------------- */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat klanten zeggen</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent uppercase">Probleem</span>
                    <p className="text-foreground/80 mt-1">{review.problem}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                    <p className="text-foreground/80 mt-1">{review.solution}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                    <p className="font-semibold mt-1">"{review.result}"</p>
                  </div>
                  <p className="text-sm text-foreground/60">{review.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/reviews">Bekijk alle Google reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------- SERVICE AREAS ------------------- */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Ons Werkgebied</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <Link
                key={index}
                href={area.link}
                className="p-6 bg-background rounded-lg border-2 border-border hover:border-primary transition-colors text-center font-semibold text-lg"
              >
                {area.name}
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
          <div className="grid md:grid-cols-2 gap-8 items-start">
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
                      <p>We reageren meestal binnen 10–30 minuten via remote. Bij spoed kunnen we vaak dezelfde dag op locatie zijn.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="tel:+31702119191">Bel nu</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">WhatsApp direct</a>
                      </div>
                    </div>
                  </details>

                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Wat kost Computerhulp op Afstand?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>Een remote QuickFix begint bij €39 voor 30 minuten (incl. btw). Je ziet altijd de prijs voordat we starten.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/tarieven">Bekijk prijzen</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">Start remote hulp</a>
                      </div>
                    </div>
                  </details>

                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Is remote toegang veilig?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>Ja — we gebruiken versleutelde tools en vragen altijd jouw toestemming voordat we meekijken. We delen je gegevens niet met derden.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/hulp-op-afstand">Lees meer over veiligheid</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">Start remote</a>
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

      <PartnersSection />

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
