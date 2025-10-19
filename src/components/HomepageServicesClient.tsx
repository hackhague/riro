"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home as HomeIcon,
  Laptop,
  Zap,
  Shield,
  CheckCircle,
  MessageCircle,
  Phone,
} from "lucide-react";

type ServiceType = "particulier" | "zakelijk";

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  links: Array<{
    label: string;
    href: string;
    variant: "default" | "outline";
    icon?: React.ReactNode;
  }>;
  isPopular?: boolean;
}

export function HomepageServicesClient() {
  const [serviceType, setServiceType] = useState<ServiceType>("particulier");

  const particulierServices: ServiceCard[] = [
    {
      id: "hulp-aan-huis",
      icon: <HomeIcon className="h-6 w-6 text-primary" />,
      title: "Computerhulp aan huis",
      subtitle: "Met afspraak • 48–72 uur",
      price: "€69/uur",
      description:
        "Grondige diagnose en reparatie op jouw locatie in Haaglanden. Geen voorrijkosten.",
      features: [
        "Expert diagnose & oplossing",
        "Gratis 7 dagen nazorg",
        "Live uitleg & transparantie",
      ],
      links: [
        { label: "Meer info", href: "/computerhulp", variant: "default" },
        { label: "Maak afspraak", href: "/afspraak", variant: "outline" },
      ],
    },
    {
      id: "spoedhulp-aan-huis",
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "IT Spoedhulp aan huis",
      subtitle: "Spoed • Meestal binnen 24 uur",
      price: "€85/uur",
      description:
        "Snel ter plaatse voor acute problemen. Geen afspraak nodig – we bellen direct terug.",
      features: [
        "Spoedeisend ter plaatse",
        "Geen afspraak nodig",
        "Gratis 7 dagen nazorg",
      ],
      links: [
        {
          label: "Bel nu - 070 211 9191",
          href: "tel:+31702119191",
          variant: "default",
          icon: <Phone className="h-4 w-4" />,
        },
        {
          label: "WhatsApp",
          href: "https://wa.me/31702119191",
          variant: "outline",
          icon: <MessageCircle className="h-4 w-4" />,
        },
      ],
      isPopular: true,
    },
    {
      id: "hulp-op-afstand",
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "Computerhulp op afstand",
      subtitle: "Remote • 10–30 minuten reactie",
      price: "€39–€99",
      description:
        "Snelle remote hulp. €1/minuut, max €99. Veilige versleutelde verbinding.",
      features: [
        "Snelle respons (meestal direct)",
        "Veilige versleuteling",
        "Live uitleg & 7 dagen nazorg",
      ],
      links: [
        { label: "Meer info", href: "/hulp-op-afstand", variant: "default" },
        {
          label: "Start nu",
          href: "https://wa.me/31702119191?text=Ik%20heb%20nu%20hulp%20nodig%20op%20afstand",
          variant: "outline",
          icon: <MessageCircle className="h-4 w-4" />,
        },
      ],
    },
    {
      id: "hackservice",
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Hackservice & Cyberherstel",
      subtitle: "Spoed • 24/7 beschikbaar",
      price: "Neem contact op voor prijsopgave",
      description:
        "Gehackt? Virus, malware, ransomware? Wij helpen 24/7 met spoedreparatie & beveiging.",
      features: [
        "24/7 cybersteun",
        "Malware verwijdering & verharding",
        "Rapport voor verzekering",
      ],
      links: [
        { label: "Meer info", href: "/ik-ben-gehackt", variant: "default" },
        {
          label: "Bel SPOED",
          href: "tel:+31702119191",
          variant: "outline",
          icon: <Phone className="h-4 w-4" />,
        },
      ],
    },
  ];

  const zakelijkServices: ServiceCard[] = [
    {
      id: "it-support-kantoor",
      icon: <HomeIcon className="h-6 w-6 text-primary" />,
      title: "IT-support aan kantoor",
      subtitle: "Met afspraak • 48–72 uur",
      price: "€85/uur",
      description:
        "Professionele IT-ondersteuning op uw kantoorlocatie in Haaglanden. Geen voorrijkosten.",
      features: [
        "Expert diagnose & zakelijke oplossingen",
        "Gratis 7 dagen nazorg",
        "Volledige transparantie & documentatie",
      ],
      links: [
        { label: "Meer info", href: "/zakelijk", variant: "default" },
        { label: "Maak afspraak", href: "/afspraak", variant: "outline" },
      ],
    },
    {
      id: "spoedhulp-kantoor",
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "IT Spoedhulp kantoor",
      subtitle: "Spoed • Meestal binnen 2 uur",
      price: "€99/uur",
      description:
        "Snel ter plaatse voor bedrijfskritische problemen. Geen afspraak nodig – we bellen direct terug.",
      features: [
        "Spoedeisend ter plaatse",
        "Business-prioriteit",
        "Gratis 7 dagen nazorg",
      ],
      links: [
        {
          label: "Bel nu - 070 211 9191",
          href: "tel:+31702119191",
          variant: "default",
          icon: <Phone className="h-4 w-4" />,
        },
        {
          label: "WhatsApp",
          href: "https://wa.me/31702119191?text=Zakelijke%20IT-spoed",
          variant: "outline",
          icon: <MessageCircle className="h-4 w-4" />,
        },
      ],
      isPopular: true,
    },
    {
      id: "it-support-afstand",
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "IT-support op afstand",
      subtitle: "Remote • 10–30 minuten reactie",
      price: "€49–€149",
      description:
        "Snelle remote support voor zakelijke systemen. Veilige versleutelde verbinding.",
      features: [
        "Snelle respons (meestal direct)",
        "Veilige versleuteling",
        "Live ondersteuning & zakelijke nazorg",
      ],
      links: [
        { label: "Meer info", href: "/zakelijk", variant: "default" },
        {
          label: "Start nu",
          href: "https://wa.me/31702119191?text=Zakelijke%20IT-hulp%20nodig%20op%20afstand",
          variant: "outline",
          icon: <MessageCircle className="h-4 w-4" />,
        },
      ],
    },
    {
      id: "cybersecurity-zakelijk",
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Cybersecurity & Incident Response",
      subtitle: "Spoed • 24/7 beschikbaar",
      price: "Neem contact op voor prijsopgave",
      description:
        "Cyberincidenten, beveiligingscontroles en bedrijfsmatige hardening voor uw systemen.",
      features: [
        "24/7 cybersteun",
        "Incident response & forensics",
        "Beveiligingsaudit & rapportage",
      ],
      links: [
        { label: "Meer info", href: "/zakelijk", variant: "default" },
        {
          label: "Bel SPOED",
          href: "tel:+31702119191",
          variant: "outline",
          icon: <Phone className="h-4 w-4" />,
        },
      ],
    },
  ];

  const services = serviceType === "particulier" ? particulierServices : zakelijkServices;

  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Hoe kan InstantIT je helpen?
          </h2>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-3 mb-8">
            <Button
              variant={serviceType === "particulier" ? "default" : "outline"}
              onClick={() => setServiceType("particulier")}
              size="lg"
            >
              Voor particulieren
            </Button>
            <Button
              variant={serviceType === "zakelijk" ? "default" : "outline"}
              onClick={() => setServiceType("zakelijk")}
              size="lg"
            >
              Voor zakelijk
            </Button>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mb-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`border-2 hover:border-primary transition-colors flex flex-col ${service.isPopular
                  ? "border-primary ring-1 ring-primary/20"
                  : ""
                }`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Header with icon and popular badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {service.icon}
                  </div>
                  {service.isPopular && (
                    <div className="bg-accent text-accent-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                      POPULAIR
                    </div>
                  )}
                </div>

                {/* Title and metadata */}
                <h3 className="font-heading font-semibold text-xl mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {service.subtitle}
                </p>
                <p className="text-2xl font-bold text-primary mb-3">
                  {service.price}
                </p>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4 flex-1">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6 text-sm">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action buttons */}
                <div className="flex flex-col gap-2">
                  {service.links.map((link, index) => (
                    <Button
                      key={index}
                      variant={link.variant as "default" | "outline"}
                      asChild
                    >
                      {link.href.startsWith("http") || link.href.startsWith("tel:") || link.href.startsWith("mailto:") ? (
                        <a
                          href={link.href}
                          {...(link.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {link.icon && <span className="mr-2">{link.icon}</span>}
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href}>
                          {link.icon && <span className="mr-2">{link.icon}</span>}
                          {link.label}
                        </Link>
                      )}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA buttons */}
        <div className="flex justify-center gap-3">
          <Button variant="outline" asChild>
            <Link href="/afspraak">Plan een afspraak</Link>
          </Button>
          <Button variant="accent" asChild>
            <a href="tel:+31702119191">
              <Phone className="mr-2" />
              Bel nu
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}