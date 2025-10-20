import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Cyber APK – Veiligheidscheck Computer & Netwerk",
  description:
    "Preventieve veiligheidscheck van je apparaten, router en accounts. Ontvang een duidelijk rapport met aanbevelingen.",
  alternates: {
    canonical: "https://www.instantit.nl/cyber-apk",
  },
};

export default function CyberAPK() {
  const checks = [
    "Router & WiFi configuratie (admin passwords, firmware)",
    "Apparaten scan (virussen, malware, onbekende software)",
    "Account veiligheid (wachtwoorden, 2FA status)",
    "Backup situatie (zijn je bestanden veilig?)",
    "Software updates (Windows, Mac, apps)",
    "Privacy instellingen (camera, mic, tracking)",
  ];

  const steps = [
    { title: "Intake", desc: "Wat gebruik je? Wat is je grootste zorg?" },
    { title: "Scan & check", desc: "60–90 min remote of on-site" },
    { title: "Adviesrapport", desc: "Puntsgewijze verbeteringen (geen jargon)" },
    { title: "Implementatie", desc: "Optioneel: wij voeren het uit (tegen uurtarief)" },
  ];

  const faqs = [
    {
      q: "Voor wie is een Cyber APK?",
      a: "Iedereen die nóóit een veiligheidscheck heeft gedaan, of recent een hack meemaakte en preventie wil.",
    },
    {
      q: "Krijg ik een rapport?",
      a: "Ja, een kort PDF met concrete actiepunten + prioriteit (hoog/midden/laag).",
    },
    {
      q: "Moet ik alles zelf doen?",
      a: "Nee, we kunnen het ook voor je uitvoeren. We stemmen vooraf af wat er nodig is en werken met onze vaste tarieven.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT Cyber APK veiligheidscheck"
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

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Cyber APK – veiligheidscheck thuis of op kantoor
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Preventieve check van je apparaten, netwerk en accounts. Weet waar je kwetsbaar bent voordat het misgaat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Ik%20wil%20een%20Cyber%20APK%20inplannen"
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

      {/* What We Check */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat checken we?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {checks.map((check, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{check}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Hoe het werkt</h2>
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

      <PlanAppointmentCta
        preselect={{
          category: "security",
          channel: "onsite",
          type: "zakelijk",
        }}
        description="Plan een Cyber APK in wanneer het jou uitkomt. We controleren kantoor- of winkelnetwerken op locatie."
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Preventief checken?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Ik%20wil%20een%20Cyber%20APK%20inplannen"
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
