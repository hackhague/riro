import { Link } from "react-router-dom";
import { ArrowRight, Laptop, Shield, Wifi, CheckCircle2, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Diensten() {
  const consumerServices = [
    {
      icon: Laptop,
      title: "Computerhulp aan huis & remote",
      description: "Trage laptop? Printer doet raar? Wij lossen het op, thuis of op afstand.",
      link: "/computerhulp",
      features: [
        "Snel diagnose & oplossing",
        "Opschonen en versnellen",
        "Printer- en software-installatie",
        "Back-up advies en herstel"
      ],
    },
    {
      icon: Shield,
      title: "Ik ben gehackt",
      description: "Iemand in je account of computer? We helpen je veilig terug en voorkomen herhaling.",
      link: "/ik-ben-gehackt",
      features: [
        "Directe remote hulp (meestal binnen 60 min)",
        "Wachtwoord & 2-stapsverificatie (2FA)",
        "Account terughalen (Instagram, Gmail, Facebook)",
        "Kort herstelrapport voor verzekering"
      ],
    },
    {
      icon: Wifi,
      title: "WiFi & thuisnetwerk",
      description: "Slechte wifi? We maken je wifi stabiel en veilig in huis.",
      link: "/wifi",
      features: [
        "Dekking en snelheidstest",
        "Mesh-advies en installatie",
        "Gasten-wifi en kindersloten",
        "Veilige router-instellingen"
      ],
    },
    {
      icon: CheckCircle2,
      title: "Cyber-APK voor thuis",
      description: "Een slimme veiligheidscheck: direct zichtbaar wat je kunt verbeteren.",
      link: "/cyber-apk",
      features: [
        "Wachtwoord- en 2FA-check",
        "Antivirus & updates controleren",
        "Back-up status controleren",
        "Eenvoudig stappenplan & kort rapport"
      ],
    },
  ];

  const businessServices = [
    {
      icon: Briefcase,
      title: "Snel hulp bij kassa / PIN / internet",
      description: "Kassa of pin doet het niet? Wij zorgen dat u weer door kunt met verkopen.",
      link: "/zakelijk",
      features: [
        "Snelle remote-first triage",
        "Nood-4G of tijdelijke internetoplossing",
        "Herstel en short-term werkend maken",
        "Duidelijk rapport met vervolgstappen"
      ],
    },
    {
      icon: Shield,
      title: "Incident hulp voor uw praktijk of winkel",
      description: "Phishing, gehackte e-mail of vergrendelde systemen? Wij helpen direct en praktisch.",
      link: "/ik-ben-gehackt",
      features: [
        "Containment: toegang blokkeren waar nodig",
        "Account- en mailbox herstel",
        "Nazorg: 2FA en herstelplan voor medewerkers",
        "Rapport voor verzekeraar of administratie"
      ],
    },
    {
      icon: Wifi,
      title: "Netwerk & beveiliging voor kleine bedrijven",
      description: "Stabiele wifi en een veilig netwerk voor kassa’s, iPads en printers.",
      link: "/wifi",
      features: [
        "Netwerksegmentatie (zakelijk/gast)",
        "Wifi-dekking en stabiliteit",
        "Aanbeveling voor betaalbare hardware",
        "Backup-routines en controle"
      ],
    },
    {
      icon: CheckCircle2,
      title: "Cyber-APK voor bedrijven",
      description: "Eén korte check die u direct inzicht geeft in risico’s en praktische oplossingen.",
      link: "/cyber-apk",
      features: [
        "Quick-check (wachtwoorden, 2FA, back-up)",
        "Eenvoudig beveiligingsplan voor personeel",
        "Prioriteitenlijst met kosteninschatting",
        "Kort rapport om mee aan de slag te gaan"
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Onze diensten
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Van snelle hulp bij een hack tot eenvoudige controles om problemen te voorkomen.
              InstantIT helpt particulieren en kleine bedrijven in Den Haag en omgeving.
            </p>
          </div>
        </div>
      </section>

      {/* Particulier */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl">Voor particulieren</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mt-3">
              Hulp aan huis of op afstand. Duidelijke prijzen en eerlijk advies — zonder technische rompslomp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {consumerServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-2 hover:border-primary">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl">{service.title}</h3>
                      <p className="text-foreground/70 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button variant="default" asChild>
                      <Link to={service.link}>
                        Lees meer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="accent" asChild>
                      <a href="https://wa.me/31702119191?text=Hallo%2C%20ik%20wil%20hulp%20met%20%5Bservice%5D">
                        Afspraak maken
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Zakelijk */}
      <section className="py-10 md:py-14 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl">Voor kleine bedrijven</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mt-3">
              Praktische oplossingen voor winkels, praktijkjes en zzp'ers — snel weer aan het werk, met duidelijke stappen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-2 hover:border-primary">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl">{service.title}</h3>
                      <p className="text-foreground/70 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Button variant="default" asChild>
                      <Link to={service.link}>
                        Lees meer
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:+31702119191">
                        Bel direct
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-foreground/70">
              Heeft u een winkel, praktijk of kantoor en is het écht dringend? Vraag naar onze <strong>spoed on-site</strong> optie.
              Als we een spoedslot vrij hebben, kunnen we vaak binnen <strong>2 uur</strong> reageren.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Weet je niet zeker wat je nodig hebt?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Geen probleem. App of bel even — we helpen je meteen bepalen wat het snelst werkt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20wil%20advies%20over%20mijn%20computer"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ons
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+31702119191">Bel 070 211 9191</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
