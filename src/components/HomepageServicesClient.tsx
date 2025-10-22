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
import { usePrices } from "@/hooks/use-prices";

type ServiceType = "particulier" | "zakelijk";

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  price: string;
  priceSubtitle: string;
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

interface HomepageServicesClientProps {
  defaultType?: ServiceType;
}

export function HomepageServicesClient({ defaultType = "particulier" }: HomepageServicesClientProps = {}) {
  const [serviceType, setServiceType] = useState<ServiceType>(defaultType);
  const priceConfig = usePrices();
  const consumerPricing = priceConfig.pricing.consumer;
  const businessPricing = priceConfig.pricing.business;
  const incidentPricing = priceConfig.pricing.security.incident;
  const contactInfo = priceConfig.contact;

  const formatSubtitle = (offering: typeof consumerPricing.remote) => offering.tagline;

  const formatPriceSubtitle = (offering: typeof consumerPricing.remote) => {
    const parts = [offering.price.unit, offering.price.extra].filter(Boolean);
    return parts.join(" • ");
  };

  const particulierServices: ServiceCard[] = [
    {
      id: consumerPricing.remote.id,
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: consumerPricing.remote.label,
      subtitle: formatSubtitle(consumerPricing.remote),
      price: consumerPricing.remote.price.display,
      priceSubtitle: formatPriceSubtitle(consumerPricing.remote),
      description: consumerPricing.remote.summary,
      features: [
        "Snelle respons, meestal direct",
        "Maximum van €99 en altijd vooraf duidelijk",
        "Live uitleg met beveiligde verbinding",
      ],
      links: [
        { label: "Meer info", href: "/hulp-op-afstand", variant: "default" },
        {
          label: "Start nu",
          href: `${priceConfig.contact.whatsappHref}?text=Ik%20heb%20nu%20hulp%20op%20afstand%20nodig`,
          variant: "outline",
          icon: <MessageCircle className="h-4 w-4" />,
        },
      ],
    },
    {
      id: consumerPricing.onsite.id,
      icon: <HomeIcon className="h-6 w-6 text-primary" />,
      title: consumerPricing.onsite.label,
      subtitle: formatSubtitle(consumerPricing.onsite),
      price: consumerPricing.onsite.price.display,
      priceSubtitle: formatPriceSubtitle(consumerPricing.onsite),
      description: consumerPricing.onsite.summary,
      features: [
        "Expertdiagnose op locatie",
        "Transparante opvolging en nazorg",
        consumerPricing.diagnosis.bookingSummary,
      ],
      links: [
        { label: "Meer info", href: "/computerhulp", variant: "default" },
        { label: priceConfig.ctas.planAppointment, href: "/afspraak", variant: "outline" },
      ],
    },
    {
      id: consumerPricing.emergency.id,
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: consumerPricing.emergency.label,
      subtitle: formatSubtitle(consumerPricing.emergency),
      price: consumerPricing.emergency.price.display,
      priceSubtitle: formatPriceSubtitle(consumerPricing.emergency),
      description: consumerPricing.emergency.summary,
      features: [
        "Prioriteit bij storingen",
        "Telefonische triage binnen minuten",
        "Nazorg van 7 dagen inbegrepen",
      ],
      links: [
        {
          label: contactInfo.phoneLabel,
          href: contactInfo.phoneHref,
          variant: "default",
          icon: <Phone className="h-4 w-4" />,
        },
        {
          label: priceConfig.contact.whatsappLabel,
          href: priceConfig.contact.whatsappHref,
          variant: "outline",
          icon: <MessageCircle className="h-4 w-4" />,
        },
      ],
      isPopular: true,
    },
    {
      id: incidentPricing.id,
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: incidentPricing.label,
      subtitle: incidentPricing.tagline,
      price: incidentPricing.price.display,
      priceSubtitle: incidentPricing.price.unit ?? "",
      description: incidentPricing.summary,
      features: [
        "24/7 bereikbare incidentlijn",
        "Forensics, herstel en hardening",
        "Rapportage voor verzekeraar of management",
      ],
      links: [
        { label: "Meer info", href: "/ik-ben-gehackt", variant: "default" },
        {
          label: contactInfo.phoneLabel,
          href: contactInfo.phoneHref,
          variant: "outline",
          icon: <Phone className="h-4 w-4" />,
        },
      ],
    },
  ];

  const zakelijkServices: ServiceCard[] = [
    {
      id: businessPricing.remote.id,
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: businessPricing.remote.label,
      subtitle: formatSubtitle(businessPricing.remote),
      price: businessPricing.remote.price.display,
      priceSubtitle: formatPriceSubtitle(businessPricing.remote),
      description: businessPricing.remote.summary,
      features: [
        "Snelle remote toegang met logging",
        "Rapportage per sessie",
        "Documentatie voor uw team",
      ],
      links: [
        { label: "Meer info", href: "/zakelijk", variant: "default" },
        {
          label: "Start nu",
          href: `${priceConfig.contact.whatsappHref}?text=Zakelijke%20remote%20support`,
          variant: "outline",
          icon: <MessageCircle className="h-4 w-4" />,
        },
      ],
    },
    {
      id: businessPricing.onsite.id,
      icon: <HomeIcon className="h-6 w-6 text-primary" />,
      title: businessPricing.onsite.label,
      subtitle: formatSubtitle(businessPricing.onsite),
      price: businessPricing.onsite.price.display,
      priceSubtitle: formatPriceSubtitle(businessPricing.onsite),
      description: businessPricing.onsite.summary,
      features: [
        "Documentatie en kennisoverdracht",
        "Vaste tarieven zonder voorrijkosten",
        "Service op locatie in Haaglanden",
      ],
      links: [
        { label: "Meer info", href: "/zakelijk", variant: "default" },
        { label: priceConfig.ctas.planAppointment, href: "/afspraak", variant: "outline" },
      ],
    },
    {
      id: businessPricing.emergency.id,
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: businessPricing.emergency.label,
      subtitle: formatSubtitle(businessPricing.emergency),
      price: businessPricing.emergency.price.display,
      priceSubtitle: formatPriceSubtitle(businessPricing.emergency),
      description: businessPricing.emergency.summary,
      features: [
        "Prioriteit voor bedrijfskritische storingen",
        "Telefonische triage zonder wachttijd",
        "Rapportage voor directie of verzekeraar",
      ],
      links: [
        {
          label: contactInfo.phoneLabel,
          href: contactInfo.phoneHref,
          variant: "default",
          icon: <Phone className="h-4 w-4" />,
        },
        {
          label: priceConfig.contact.whatsappLabel,
          href: `${priceConfig.contact.whatsappHref}?text=Zakelijke%20IT-spoed`,
          variant: "outline",
          icon: <MessageCircle className="h-4 w-4" />,
        },
      ],
      isPopular: true,
    },
    {
      id: incidentPricing.id,
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Directe hulp bij gehackt (zakelijk)",
      subtitle: "Spoed • 24/7 beschikbaar",
      price: "Neem contact op voor prijsopgave",
      priceSubtitle: "Afhankelijk van schadeomvang",
      description:
        "Cyberincidenten, beveiligingscontroles en bedrijfsmatige hardening voor uw systemen.",
      features: [
        "24/7 cybersteun",
        "Herstel bij hacks & forensics",
        "Beveiligingsaudit & rapportage",
      ],
      links: [
        { label: "Meer info", href: "/zakelijk", variant: "default" },
        {
          label: contactInfo.phoneLabel,
          href: contactInfo.phoneHref,
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
            Hoe kan InstantIT u helpen?
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
                <p className="text-3xl font-bold text-primary mb-1">
                  {service.price}
                </p>
                <p className="text-xs text-foreground/60 mb-3">
                  {service.priceSubtitle}
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
            <Link href="/afspraak">Afspraak maken</Link>
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
