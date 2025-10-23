import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { Phone, MessageCircle, Clock, Shield, MonitorSmartphone, Calendar } from "lucide-react";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { HomepageServicesClient } from "@/components/HomepageServicesClient";
import { ReviewSection } from "@/components/ReviewSection";

const serviceImage = "/images/service-computer.jpg";

export const metadata: Metadata = {
  title: "Computerhulp op afstand | Hulp door heel Nederland",
  description:
    "Hulp op afstand door heel Nederland — snel geholpen via je scherm, zonder dat er iemand langs hoeft te komen. Transparante tarieven en duidelijke stappen.",
  alternates: {
    canonical: "https://www.instantit.nl/computerhulp-op-afstand",
  },
};

export default function HulpOpAfstand() {
  const benefits = [
    { title: "Snel geholpen", desc: "Meestal binnen 10–30 minuten een eerste reactie" },
    { title: "Veilig & controle", desc: "Je geeft altijd eerst toestemming voordat we meekijken" },
    { title: "Duidelijke prijs", desc: "Eerst 30 minuten voor een vaste prijs, daarna transparant per 15 min" },
    { title: "Door heel Nederland", desc: "We helpen op afstand waar je ook woont — geen reis nodig" },
  ];

  const canHelpWith = [
    "Computer die traag is of vastloopt",
    "E-mailproblemen en accountherstel",
    "Virus- en malwareonderzoek",
    "Printer- of netwerkinstellingen",
    "Backups maken en terugzetten",
  ];

  const steps = [
    { title: "Je belt of app't ons", desc: "We reageren meestal binnen 10-30 minuten" },
    { title: "Korte intake", desc: "We vragen wat er aan de hand is" },
    { title: "Toestemming & schermdeling", desc: "Met jouw toestemming kijken we mee via je scherm en lossen het op" },
    { title: "Afronding", desc: "Klaar? We sturen een korte samenvatting en de rekening" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${serviceImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Computerhulp op afstand
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Hulp via je scherm — snel en duidelijk. We helpen op afstand door heel Nederland; bezoek aan huis is alleen nodig als het echt moet.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Ik%20heb%20hulp%20nodig%20op%20afstand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" />
                  Start nu via WhatsApp
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

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarom hulp op afstand?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {i === 0 && <Clock className="text-primary-foreground" />}
                    {i === 1 && <Shield className="text-primary-foreground" />}
                    {i === 2 && <MonitorSmartphone className="text-primary-foreground" />}
                    {i === 3 && <Clock className="text-primary-foreground" />}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-foreground/70">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What we can help with */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarmee kunnen we je helpen?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {canHelpWith.map((item, idx) => (
              <Card key={idx}>
                <CardContent className="p-4 flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & How it works */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary rounded-lg p-6 mb-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Hoe werkt het stap voor stap?</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold">{step.title}</h4>
                        <p className="text-sm text-foreground/70">{step.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <a href="#" aria-disabled="true">Download hulpprogramma</a>
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Voordelen</h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Geen reistijd of afspraken aan huis nodig</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Je hebt de controle; wij werken alleen met jouw toestemming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Snel opgelost voor veel voorkomende problemen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Wat gebeurt er na afloop?</h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Je krijgt een korte samenvatting per e-mail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>7 dagen gratis nazorg (max 30 min op afstand)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>Vragen? We helpen je nog even na</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />

      <HomepageServicesClient />

      <ReviewSection servicePath="/hulp-op-afstand" title="Wat klanten zeggen" showLink={false} />

      <PlanAppointmentCta
        preselect={{
          channel: "remote",
        }}
      />

      {/* Final CTA */}
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
              <Link href="/afspraak"><Calendar className="h-3.5 w-3.5 mr-1.5" />Afspraak maken</Link>
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
