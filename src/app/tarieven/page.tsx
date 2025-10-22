import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Tarieven",
  description:
    "Transparante prijzen voor remote support, hulp aan huis, hacklijn en zakelijke strippenkaarten.",
  alternates: {
    canonical: "https://www.instantit.nl/tarieven",
    languages: {
      "nl-NL": "https://www.instantit.nl/tarieven",
    },
  },
};

export default function Tarieven() {
  const consumerPricing = [
    { name: "Computerhulp op afstand", price: "€35", unit: "Eerste 30 min", extra: "Daarna €15 per 15 min", desc: "Snelle remote hulp met lage instapkosten. Transparante per-minuut afrekening." },
    { name: "Computerhulp aan huis", price: "€59", unit: "Eerste 45 min", extra: "Daarna €17,25 per 15 min", desc: "Grondige diagnose en reparatie op jouw locatie in Haaglanden. Geen voorrijkosten." },
    { name: "IT Spoedhulp aan huis", price: "€89", unit: "Eerste uur", extra: "Daarna €19,50 per 15 min", desc: "Snel ter plaatse voor acute problemen. Geen afspraak nodig." },
    {
      name: "Directe hulp bij gehackt",
      price: "Vanaf €149",
      unit: "Remote of op locatie",
      desc: "Gehackt of ransomware? Remote triage binnen 60 min, op locatie herstel binnen 24–48 uur.",
    },
  ];

  const businessPricing = [
    { name: "IT-support aan kantoor", price: "€79", unit: "Eerste uur (ex btw)", extra: "Daarna €20 per 15 min", desc: "Professionele IT-ondersteuning op uw kantoor in Haaglanden. Geen voorrijkosten." },
    { name: "IT-support op afstand", price: "€35", unit: "Eerste 30 min (ex btw)", extra: "Daarna €17,50 per 15 min", desc: "Snelle remote support voor zakelijke systemen. Consistent tarief." },
    { name: "IT Spoedhulp kantoor", price: "€89", unit: "Eerste uur", extra: "Daarna €19,50 per 15 min", desc: "Snel ter plaatse voor bedrijfskritische problemen. Geen afspraak nodig." },
    {
      name: "Directe hulp bij gehackt (zakelijk)",
      price: "Vanaf €599",
      unit: "24/7 beschikbaar",
      extra: "Spoed op locatie of First Response",
      desc: "Spoedhulp bij hacks, forensics en herstelrapportage voor bedrijven.",
    },
  ];

  const cyberApkPricing = [
    {
      name: "Veiligheidscheck (Cyber-APK) op afstand - thuis of op kantoor",
      price: "€79",
      originalPrice: "€79",
      upsellPrice: "€39,50",
      unit: "Vaste prijs",
      desc: "Preventieve digitale veiligheidscheck met updates, backup en 2FA-setup.",
      upsellDesc: "50% korting bij meeboeken met andere dienst",
    },
    {
      name: "Veiligheidscheck (Cyber-APK) aan huis of op kantoor",
      price: "€99",
      originalPrice: "€99",
      upsellPrice: "€49,50",
      unit: "Vaste prijs",
      desc: "Netwerk, wifi en endpoint-check op locatie inclusief rapport.",
      upsellDesc: "50% korting bij meeboeken met andere dienst",
    },
  ];

  const cyberApkBusinessPricing = [
    {
      name: "Veiligheidscheck (Cyber-APK) remote - zakelijk (thuis of kantoor)",
      price: "€299",
      originalPrice: "€299",
      upsellPrice: "€149,50",
      unit: "Vaste prijs (ex btw)",
      desc: "Preventieve digitale veiligheidscheck met updates, backup en 2FA-setup.",
      upsellDesc: "50% korting bij meeboeken met andere dienst",
      exVat: true,
    },
    {
      name: "Veiligheidscheck (Cyber-APK) ter plaatse - zakelijk",
      price: "€449",
      originalPrice: "€449",
      upsellPrice: "€224,50",
      unit: "Vaste prijs (ex btw)",
      desc: "Netwerk, wifi en endpoint-check op locatie inclusief rapport.",
      upsellDesc: "50% korting bij meeboeken met andere dienst",
      exVat: true,
    },
  ];

  const extraServices = [
    {
      name: "Windows/Mac herinstallatie",
      price: "€99",
      altPrice: "€119 (Mac)",
      unit: "Vaste prijs",
      desc: "Volledige besturingssysteem herinstallatie met back-up van gegevens en updates.",
    },
    {
      name: "Computer sneller maken met nieuwe schijf",
      price: "€119",
      extra: "+ SSD €80–150",
      unit: "Arbeidskosten",
      desc: "SSD upgrade met installatie en datamigratie. Snelheidstoename tot 3x.",
    },
    {
      name: "Antivirus + basisbeveiliging (2 apparaten)",
      price: "€79",
      extra: "+€15 per extra apparaat",
      unit: "Vaste prijs",
      desc: "Professionele antivirus installatie en basisbeveiliging setup.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT tarieven voor computerhulp"
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
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Tarieven – vaste caps, geen verrassingen
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Transparante prijzen voor particulieren en bedrijven. Wat niet opgelost wordt binnen de cap? Gratis
              herbeoordeling binnen 7 dagen.
            </p>
          </div>
        </div>
      </section>

      {/* Consumer Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Particulieren</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {consumerPricing.map((item, index) => {
              const serviceLinks = [
                "/hulp-op-afstand",
                "/computerhulp",
                "/computerhulp",
                "/ik-ben-gehackt"
              ];
              const serviceLink = serviceLinks[index];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-heading text-lg">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-3xl font-bold text-primary mb-0.5">{item.price}</p>
                    <p className="text-sm text-foreground/60 mb-1">{item.unit}</p>
                    {item.extra && <p className="text-sm font-semibold text-accent mb-4">{item.extra}</p>}
                    <p className="text-sm text-foreground/70 mb-4 flex-1">{item.desc}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={serviceLink}>Meer info</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="accent" asChild>
              <a href="/afspraak">Plan een afspraak</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+31702119191">Bel nu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Pricing */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Zakelijk (MKB)</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {businessPricing.map((item, index) => {
              const serviceLinks = [
                "/computerhulp",
                "/hulp-op-afstand",
                "/computerhulp",
                "/ik-ben-gehackt"
              ];
              const serviceLink = serviceLinks[index];
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-heading text-lg">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-3xl font-bold text-primary mb-0.5">{item.price}</p>
                    <p className="text-sm text-foreground/60 mb-1">{item.unit}</p>
                    {item.extra && <p className="text-sm font-semibold text-accent mb-4">{item.extra}</p>}
                    <p className="text-sm text-foreground/70 mb-4 flex-1">{item.desc}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={serviceLink}>Meer info</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="accent" asChild>
              <a href="/afspraak">Plan een afspraak</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+31702119191">Bel nu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cyber-APK Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-2">Veiligheidscheck (Cyber-APK)</h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Preventieve digitale veiligheidscheck. 50% korting beschikbaar bij meeboeken met uw afspraak.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            {cyberApkPricing.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-accent/40">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <p className="text-3xl font-bold text-primary">{item.price}</p>
                      <p className="text-sm text-foreground/50 line-through">{item.originalPrice}</p>
                    </div>
                    <p className="text-sm font-semibold text-accent">Bij meeboeken: {item.upsellPrice}</p>
                  </div>
                  <p className="text-sm text-foreground/60">{item.unit}</p>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                  <p className="text-xs text-accent italic">{item.upsellDesc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-secondary rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <h3 className="font-heading font-semibold text-lg mb-3">Zakelijk (Cyber-APK)</h3>
            <div className="grid md:grid-cols-1 gap-4">
              {cyberApkBusinessPricing.map((item, index) => (
                <div key={index} className="border border-border rounded p-4">
                  <p className="font-semibold mb-2">{item.name}</p>
                  <div className="flex items-baseline gap-3 mb-2">
                    <p className="text-2xl font-bold text-primary">{item.price}</p>
                    <p className="text-sm text-foreground/50 line-through">{item.originalPrice}</p>
                  </div>
                  <p className="text-sm font-semibold text-accent">Bij meeboeken: {item.upsellPrice}</p>
                  <p className="text-xs text-foreground/60 mt-2">{item.unit}</p>
                  <p className="text-sm text-foreground/70 mt-2">{item.desc}</p>
                  <p className="text-xs text-accent italic mt-2">{item.upsellDesc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <Button variant="accent" asChild>
              <a href="/afspraak">Plan een afspraak</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+31702119191">Bel nu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-2">Extra diensten</h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Aanvullende services die u kunt boeken naast uw reguliere afspraak.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {extraServices.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-3xl font-bold text-primary mb-0.5">{item.price}</p>
                    {item.altPrice && <p className="text-sm font-semibold text-foreground/70">{item.altPrice}</p>}
                  </div>
                  <p className="text-sm text-foreground/60">{item.unit}</p>
                  {item.extra && <p className="text-sm font-semibold text-accent">{item.extra}</p>}
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <Button variant="accent" asChild>
              <a href="/afspraak">Plan een afspraak</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+31702119191">Bel nu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Nazorg Disclaimer */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="font-heading font-semibold text-2xl mb-4">Nazorg garantie</h3>
              <p className="text-foreground/80">
                Niet helemaal opgelost binnen de cap? Geen zorgen. Je krijgt een{" "}
                <strong>gratis herbeoordeling van hetzelfde issue binnen 7 dagen</strong> (max 30 min remote). Ons doel
                is dat het gewoon werkt – niet dat we eindeloos declareren.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <PartnersSection />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar om te starten?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Bel, app of mail – we geven altijd eerst een gratis korte triage zodat je weet waar je aan toe bent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20wil%20graag%20een%20offerte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp
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
