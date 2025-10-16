import { Link } from "react-router-dom";
import { ArrowRight, Laptop, Shield, Wifi, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Diensten() {
  const services = [
    {
      icon: Laptop,
      title: "Computerhulp",
      description: "Computer traag, virussen, softwareproblemen? Op afstand of aan huis.",
      link: "/computerhulp",
      features: ["Virusverwijdering", "Performance optimalisatie", "Software installatie", "Data backup"],
    },
    {
      icon: Shield,
      title: "Ik ben gehackt",
      description: "24/7 hacklijn voor spoedhulp. Containment, herstel & preventie.",
      link: "/ik-ben-gehackt",
      features: ["Op afstand triage binnen 15 min", "Containment & isolatie", "Forensisch onderzoek", "Preventie & hardening"],
    },
    {
      icon: Wifi,
      title: "WiFi & Netwerk",
      description: "Betere dekking, stabiel internet, veilige configuratie.",
      link: "/wifi",
      features: ["WiFi optimalisatie", "Mesh netwerken", "Router hardening", "Netwerk uitbreiding"],
    },
    {
      icon: CheckCircle2,
      title: "Cyber APK",
      description: "Preventieve veiligheidscheck voor thuis of kantoor.",
      link: "/cyber-apk",
      features: ["Veiligheidscan", "Router configuratie", "Software updates", "Adviesrapport"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Onze Diensten
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Van spoedhulp bij een hack tot preventieve checks – InstantIT helpt particulieren en bedrijven in
              Zuid-Holland met alle IT- en cyberproblemen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all border-2 hover:border-primary">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-heading font-bold text-2xl mb-3">{service.title}</h2>
                  <p className="text-foreground/70 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="default" asChild className="group/btn">
                    <Link to={service.link}>
                      Lees meer
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Niet zeker welke dienst je nodig hebt?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Geen probleem! Neem contact op en we helpen je om de beste oplossing te vinden voor jouw situatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
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
