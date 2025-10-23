import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, AlertTriangle, Shield, Clock, CheckCircle, Flag, CreditCard, Monitor, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { ReviewSection } from "@/components/ReviewSection";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Helpdesk Fraude Voorkomen | Niet Erin Trappen",
  description:
    "Nep Microsoft-medewerkers bellen? Leer hoe je helpdesk fraude herkent en wat je moet doen.",
  alternates: {
    canonical: "https://www.instantit.nl/helpdesk-fraude",
  },
};

export default function HelpdeskFraude() {
  const redFlags = [
    {
      icon: Flag,
      title: "Onverwachte bel",
      description: "Microsoft/Apple belt nooit zomaar – jij belt altijd hen",
    },
    {
      icon: CreditCard,
      title: "Betaling gevraagd",
      description: "Echte support betaal je nooit per telefoon – alleen later op factuur",
    },
    {
      icon: Monitor,
      title: "Op afstand controle",
      description: "Ze willen op afstand toegang tot je computer – groot gevaar",
    },
    {
      icon: AlertCircle,
      title: "Urgentie en angst",
      description: "'Je computer is gehackt' – panic sells, dus wees voorzichtig",
    },
  ];

  const stepsNoData = [
    {
      step: "1",
      title: "Hang op",
      description: "Beëindig het gesprek en verbreek elke op afstand verbinding",
    },
    {
      step: "2",
      title: "Blokkeer het nummer",
      description: "Voeg het telefoonnummer toe aan je blokkeringslijst",
    },
    {
      step: "3",
      title: "Scan je apparaat",
      description: "Voer een antivirusscan uit – ze kunnen nog spyware hebben geplaatst",
    },
    {
      step: "4",
      title: "Doe aangifte",
      description: "Rapporteer het bij de politie via politie.nl",
    },
  ];

  const stepsWithData = [
    {
      step: "1",
      title: "Beëindig contact",
      description: "Hang op en sluit elke op afstand verbinding onmiddellijk",
    },
    {
      step: "2",
      title: "Verander wachtwoorden",
      description: "Update alle belangrijke accounts – vooral e-mail en bankapp",
    },
    {
      step: "3",
      title: "Bel je bank",
      description: "Geef ze een heads-up; ze kunnen betalingen blokkeren",
    },
    {
      step: "4",
      title: "Scan en beveilig",
      description: "Voer een volledige malwarescan uit",
    },
  ];

  const additionalSteps = [
    "Wijzig alle wachtwoorden voor accounts die dezelfde code gebruikten",
    "Blokkeer het nummer en neem niet meer op",
    "Controleer je bankafschriften op onverwachte transacties",
    "Doe aangifte bij de politie voor een rapport",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT helpdesk fraude hulp"
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Helpdesk Fraude – Oplichting door valse support
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Oplichters bellen je voor als Microsoft/Apple support en claimen dat je computer gehackt is. Leer hoe je ze herkent en beschermt jezelf tegen deze fraude.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a href="tel:+31702119191">
                  <Phone className="mr-2" />
                  Bel 070 211 9191
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/31702119191?text=Helpdesk%20fraude%20gehad" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Waarschuwingssignalen
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {redFlags.map((flag, i) => {
              const IconComponent = flag.icon;
              return (
                <Card key={i} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{flag.title}</h3>
                    <p className="text-sm text-foreground/70">{flag.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* No Data */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Je hebt geen gegevens doorgegeven
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Je bent eruit gestapt zonder gevoelige informatie te delen – goed gedaan!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stepsNoData.map((item, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-center mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* With Data */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Je hebt gevoelige gegevens gegeven
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Niet meteen panikeren – snel handelen beperkt de schade. Dit zijn prioriteiten.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stepsWithData.map((item, i) => (
              <Card key={i} className="border-primary/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-center mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Na afloop
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {additionalSteps.map((step, i) => (
              <Card key={i}>
                <CardContent className="p-6 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{step}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ReviewSection servicePath="/helpdesk-fraude" title="Wat klanten zeggen" showLink={false} />

      <PlanAppointmentCta
        preselect={{
          category: "security",
          channel: "remote",
        }}
        description="Je computer werd gebruikt door oplichters? We checken op verborgen malware en beveiligen je systeem."
      />

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Slachtoffer van helpdesk fraude?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We scannen je apparaat op verborgen software en beveiligen je tegen verdere schade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="/afspraak">Afspraak maken</a>
            </Button>
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+31702119191">Bel direct</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
