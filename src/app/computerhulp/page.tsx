import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, CheckCircle2, Clock, Euro, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";

const serviceImage = "/images/service-computer.jpg";

export const metadata: Metadata = {
  title: "Computerhulp in Den Haag & Regio",
  description:
    "Van trage computers tot virusverwijdering – wij lossen het snel en transparant op. Remote of aan huis.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp",
  },
};

export default function Computerhulp() {
  const serviceBlocks = [
    { title: "Printerhulp", href: "/printer", image: "/images/services/printerhulp.jpg" },
    { title: "E-mail Problemen", href: "/email", image: "/images/services/email-problemen.jpg" },
    { title: "Internet & WiFi", href: "/wifi", image: "/images/services/wifi.jpg" },
    { title: "Tablet & Smartphone", href: "/mobiel-tablet", image: "/images/services/tablet-smartphone.jpg" },
    { title: "Uitleg & Les", href: "/uitleg-les", image: "/images/services/uitleg-les.jpg" },
    { title: "Zakelijk IT Support", href: "/zakelijk", image: "/images/services/zakelijk.jpg" },
  ];

  const problems = [
    "Computer traag of crasht regelmatig",
    "Virussen, malware of ransomware",
    "Softwareproblemen en installaties",
    "Windows/Mac updates die mislukken",
    "Blauwe schermen (BSOD)",
    "Data backup en herstel",
    "Hardware diagnose en advies",
    "Printers en randapparatuur",
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
    { title: "Remote of on-site", desc: "Meestal remote opgelost; anders binnen 2u aan de deur" },
    { title: "Fix & uitleg", desc: "We lossen het op én leggen uit wat er aan de hand was" },
    { title: "Nazorg", desc: "Gratis herbeoordeling binnen 7 dagen (max 30 min)" },
  ];

  const faqs = [
    {
      q: "Hoe snel kunnen jullie helpen?",
      a: "Remote meestal binnen 10-30 min reactie. On-site in Haaglanden meestal binnen 2 uur.",
    },
    {
      q: "Wat als het niet lukt op afstand?",
      a: "Dan komen we langs. Remote tijd rekenen we af tegen on-site als we toch komen.",
    },
    {
      q: "Is remote veilig?",
      a: "Ja! We gebruiken versleutelde tools en vragen altijd toestemming voordat we iets doen.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Computerhulp in Den Haag & regio
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Van trage computers tot virusverwijdering – wij lossen het snel en transparant op. Remote of aan huis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" size="lg" asChild>
                  <a
                    href="https://wa.me/31702119191?text=Ik%20heb%20hulp%20nodig%20met%20computerproblemen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" />
                    App nu
                  </a>
                </Button>
                <Button variant="accent" size="lg" asChild>
                  <a href="tel:+31702119191">
                    <Phone className="mr-2" />
                    Bel 070 211 9191
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={serviceImage} alt="Computerhulp in Den Haag" className="w-full h-auto" />
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

      {/* ------------------- SERVICES (TEGELS) ------------------- */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Onze Diensten
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceBlocks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group relative block overflow-hidden rounded-xl"
                aria-label={`${item.title} – Meer info`}
              >
                <div className="aspect-[16/11] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 flex items-end">
                  <div className="w-full p-5 md:p-6">
                    <h3 className="font-heading text-white font-semibold text-xl md:text-2xl drop-shadow-sm">
                      {item.title}
                    </h3>

                    <span
                      className="mt-3 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm
                                 font-medium text-white backdrop-blur ring-1 ring-white/30 transition-colors group-hover:bg-white/15"
                    >
                      Meer info
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>

                <span className="absolute inset-0 rounded-xl ring-0 ring-primary/0 focus:outline-none focus:ring-4 group-focus:ring-primary/40" />
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <Button variant="outline" asChild>
              <Link href="/afspraak">Plan een afspraak</Link>
            </Button>
            <Button variant="accent" asChild>
              <a href="tel:+31702119191"><Phone className="mr-2" />Bel nu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat het kost</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-6 text-center">
                <Euro className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Computerhulp op afstand</h3>
                <p className="text-3xl font-bold text-primary mb-1">€1 per minuut</p>
                <p className="text-sm text-foreground/60 mb-4">Minimum afname 30 minuten. Maximum tarief €99  </p>
                <p className="text-xs text-foreground/70">Meestal dezelfde dag geholpen </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Computerhulp aan huis</h3>
                <p className="text-3xl font-bold text-primary mb-1">€69</p>
                <p className="text-sm text-foreground/60 mb-4">per uur (min. 1u)</p>
                <p className="text-xs text-foreground/70">Geen voorrijkosten in Haaglanden</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Nazorg</h3>
                <p className="text-3xl font-bold text-primary mb-1">Gratis</p>
                <p className="text-sm text-foreground/60 mb-4">binnen 5 dagen</p>
                <p className="text-xs text-foreground/70">Max 30 min remote herbeoordeling</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Voorbeeld opdracht</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent uppercase">Probleem</span>
                <p className="text-lg mt-2">
                  "Laptop van moeder crasht na Windows update. Moet morgen naar notaris voor belangrijke
                  handtekening."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                <p className="text-lg mt-2">
                  Remote diagnose in 15 min → driver conflict. Update teruggedraaid, systeem gestabiliseerd, preventief
                  backup gemaakt.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "Binnen 45 min weer online. Moeder kon documenten printen en naar notaris. Kosten: €39."
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Wateringse Veld, Den Haag</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Areas */}
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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Computer weer snel maken?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Ik%20heb%20hulp%20nodig%20met%20computerproblemen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                Start remote hulp
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
