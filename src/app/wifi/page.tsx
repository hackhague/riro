import type { Metadata } from "next";
import { MessageCircle, Phone, Wifi, CheckCircle2, Signal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import AppointmentWizard from "@/components/AppointmentWizard";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";

const serviceImage = "/images/service-wifi.jpg";

export const metadata: Metadata = {
  title: "WiFi & Internet verbeteren | Stabiel thuis en op kantoor",
  description:
    "WiFi traag of dode zones? We helpen je router beter in te stellen. Geen dode zones meer, sneller internet.",
  alternates: {
    canonical: "https://www.instantit.nl/wifi",
  },
};

export default function WiFiPage() {
  const problems = [
    "Trage WiFi of verbinding valt weg",
    "Dode zones in huis of kantoor",
    "Te veel apparaten, netwerk overbelast",
    "Router nog nooit geconfigureerd of ge-update",
    "Onveilige standaard wachtwoorden",
    "Uitbreiden naar tuin, schuur of bijgebouw",
  ];

  const steps = [
    { title: "WiFi survey", desc: "We meten dekking en signaalsterkte" },
    { title: "Advies & plan", desc: "Mesh, extenders of nieuwe router? We adviseren" },
    { title: "Installatie", desc: "Professionele setup en configuratie" },
    { title: "Hardening", desc: "Veilige instellingen + documentatie" },
  ];

  const faqs = [
    {
      q: "Moet ik nieuwe apparatuur kopen?",
      a: "Vaak niet! Soms helpt een betere configuratie al. We adviseren eerlijk.",
    },
    {
      q: "Werken jullie met alle merken?",
      a: "Ja – UniFi, TP-Link, Netgear, Google Nest, etc. We adviseren ook welk merk bij jou past.",
    },
    {
      q: "Wat is het verschil tussen mesh en extender?",
      a: "Mesh is één naadloos netwerk. Extenders zijn goedkoper maar je schakelt handmatig tussen netwerken.",
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
                WiFi & netwerk verbeteren
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Geen dode zones meer. Stabiel, snel en veilig internet in heel je huis of kantoor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" size="lg" asChild>
                  <a
                    href="https://wa.me/31702119191?text=WiFi%20traag%20in%20[ruimte]%20-%20provider%3A%20[...]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" />
                    App je situatie
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
              <img src={serviceImage} alt="WiFi optimalisatie in Den Haag" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat lossen we op?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <Wifi className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Onze aanpak</h2>
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

      {/* Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat het kost</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="border-2 border-primary">
              <CardContent className="p-6 text-center">
                <Signal className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">WiFi optimalisatie</h3>
                <p className="text-3xl font-bold text-primary mb-1">€149</p>
                <p className="text-sm text-foreground/60 mb-4">survey + plan + basic config</p>
                <p className="text-xs text-foreground/70">Excl. hardware (indien nodig)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Installatie mesh/router</h3>
                <p className="text-3xl font-bold text-primary mb-1">€65</p>
                <p className="text-sm text-foreground/60 mb-4">per uur</p>
                <p className="text-xs text-foreground/70">Bij aanschaf via ons vaak korting op hardware</p>
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
                  "Jaren oude router van provider. WiFi op zolder en in tuin valt constant weg. Kinderen kunnen niet
                  gamen, thuiswerken is een drama."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                <p className="text-lg mt-2">
                  WiFi survey gedaan. Advies: TP-Link Deco mesh (3 units). Geïnstalleerd, kanalen geoptimaliseerd,
                  gastnetwerk + ouderschapcontroles geconfigureerd.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "Volle snelheid op alle kamers, tuin en zolder. Geen uitval meer. Kosten: €149 survey/install + €179
                  hardware."
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Delft</p>
            </CardContent>
          </Card>
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

      <PartnersSection />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar voor stabiel WiFi?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=WiFi%20traag%20in%20[ruimte]%20-%20provider%3A%20[...]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp je situatie
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
