import type { Metadata } from "next";
import { MessageCircle, Phone, Building2, Store, Coffee, CheckCircle, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AppointmentWizard from "@/components/AppointmentWizard";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";

export const metadata: Metadata = {
  title: "Zakelijke IT-support | MKB, Retail & Horeca",
  description:
    "IT-support voor winkels, restaurants en bedrijven. Spoedservice, strippenkaart en veiligheidscontroles. Snelle respons.",
  alternates: {
    canonical: "https://www.instantit.nl/zakelijk",
  },
};

export default function Zakelijk() {
  const industries = [
    {
      icon: Store,
      title: "Retail & Winkel",
      description: "Kassa, pin, WiFi, voorraadsystemen en digitale signage. Ook spoedservice bij storingen.",
    },
    {
      icon: Coffee,
      title: "Horeca & Catering",
      description: "Kassasystemen, bestellingen, WiFi voor gasten, netwerken en cybersecurity.",
    },
    {
      icon: Building2,
      title: "Kantoren & MKB",
      description: "Netwerk, telefonie, printer, VPN, backup en alles rondom veilig thuiswerken.",
    },
  ];

  const services = [
    {
      icon: Zap,
      title: "Spoedondersteuning",
      description: "PIN/kassa down? Internet weg? Vaak binnen 1-2 uur op locatie of direct remote.",
    },
    {
      icon: Shield,
      title: "Cyber APK & Beveiliging",
      description: "Preventieve check van je systemen, firewall, backup en wachtwoordbeleid.",
    },
    {
      icon: Clock,
      title: "Strippenkaart & Contract",
      description: "10 uur support vanaf €550 (i.p.v. €650) of maandabonnement voor regelmatige hulp.",
    },
  ];

  const caseStudies = [
    {
      problem: "Kassa en PIN down op vrijdagavond",
      solution: "4G-failover, netwerkcheck en noodplan",
      result: "Binnen 1 uur weer online, klanten konden betalen",
      location: "Restaurant Scheveningen",
    },
    {
      problem: "Cybersecurity audit nodig voor GDPR",
      solution: "Cyber APK + rapport met actiepunten",
      result: "Compliance geregeld, interne veiligheid omhoog",
      location: "Advocatenkantoor Den Haag",
    },
    {
      problem: "WiFi in winkel te traag voor PIN-verkeer",
      solution: "Mesh-upgrade + zakelijke router met QoS",
      result: "PIN en kassasysteem nu altijd stabiel",
      location: "Kledingwinkel Zoetermeer",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              IT-support voor MKB, Retail & Horeca
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Snel en betrouwbaar. Van PIN-storingen tot netwerkproblemen, Cyber APK en preventief onderhoud – wij zorgen
              dat je bedrijf draaiende blijft.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Zakelijke%20IT-hulp%20nodig"
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
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Voor welke sectoren werken we?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{industry.title}</h3>
                  <p className="text-foreground/70">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Business */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Zakelijke diensten
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Zakelijke tarieven</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-2xl mb-2">Losse opdrachten</h3>
                <p className="text-foreground/70 mb-4">Ideaal voor incidentele hulp</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Remote vanaf €39/30 min (cap €99)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>On-site €65/uur (geen voorrijkosten Haaglanden)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Spoed on-site €199 (max 2u)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                  POPULAIR
                </div>
                <h3 className="font-heading font-bold text-2xl mb-2">Strippenkaart</h3>
                <p className="text-foreground/70 mb-4">Korting + voorrang bij spoed</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>10 uur support: €550 (i.p.v. €650)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>20 uur support: €1.050 (i.p.v. €1.300)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Voorrang bij spoedhulp, 1 jaar geldig</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-foreground/70 mb-4">Maandcontract of custom afspraken? Vraag een offerte aan.</p>
            <Button variant="default" size="lg" asChild>
              <a
                href="https://wa.me/31702119191?text=Offerte%20voor%20zakelijk%20contract"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                Vraag offerte aan
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Klantcases</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent uppercase">Probleem</span>
                    <p className="text-foreground/80 mt-1">{caseStudy.problem}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                    <p className="text-foreground/80 mt-1">{caseStudy.solution}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                    <p className="font-semibold mt-1">"{caseStudy.result}"</p>
                  </div>
                  <p className="text-sm text-foreground/60">{caseStudy.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Waarom InstantIT voor jouw bedrijf?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Snelle responstijd</h3>
                <p className="text-foreground/70">
                  Remote vaak binnen 10-30 min, on-site meestal binnen 2 uur. Bij spoed nog sneller.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Transparante prijzen</h3>
                <p className="text-foreground/70">
                  Vaste tarieven met caps. Geen verborgen kosten. Niet opgelost? Alleen €19 diagnose.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">VOG & verzekerd</h3>
                <p className="text-foreground/70">
                  Onze technici zijn gescreend (VOG) en we zijn volledig verzekerd voor beroepsaansprakelijkheid.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Lokaal in Haaglanden</h3>
                <p className="text-foreground/70">
                  Gevestigd in Den Haag, kennen we de regio. Geen voorrijkosten binnen Haaglanden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <HomepageServicesClient />

      {/* Appointment Wizard */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <AppointmentWizard compact={false} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Klaar om jouw bedrijf te laten draaien zonder IT-zorgen?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Of het nu gaat om spoedhulp, preventief onderhoud of veiligheidscontrole – wij staan voor je klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Zakelijke%20IT-hulp%20nodig"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp nu
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
