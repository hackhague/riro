import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import serviceImage from "@/assets/service-computer.jpg";
import { MessageCircle, Phone, Shield, Clock, MonitorSmartphone, MousePointerClick } from "lucide-react";

export default function HulpOpAfstand() {
  const benefits = [
    { title: "Snel geholpen", desc: "Vaak binnen 10–30 minuten reactie en direct aan de slag" },
    { title: "Veilig", desc: "Versleutelde verbinding, jij geeft per stap toestemming" },
    { title: "Transparant", desc: "Vaste tarieven en duidelijke uitleg bij elke stap" },
    { title: "Geen bezoek nodig", desc: "Ideaal voor snelle fixes en advies" },
  ];

  const canHelpWith = [
    "Trage computer of vastlopers",
    "E-mail en Office problemen",
    "Virus/malware check en schoonmaak",
    "Printer en randapparatuur",
    "Browser pop-ups en adware",
    "Back-up en cloud issues",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Hulp op afstand
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Directe remote support via schermdeling. Veilig, snel en zonder voorrijkosten.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="whatsapp" size="lg" asChild>
                  <a
                    href="https://wa.me/31702119191?text=Ik%20wil%20graag%20hulp%20op%20afstand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" />
                    Start remote hulp
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
              <img src={serviceImage} alt="Hulp op afstand via schermdeling" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarom remote?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {i === 0 && <Clock className="text-primary-foreground" />}
                    {i === 1 && <Shield className="text-primary-foreground" />}
                    {i === 2 && <MousePointerClick className="text-primary-foreground" />}
                    {i === 3 && <MonitorSmartphone className="text-primary-foreground" />}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-foreground/70">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What we can fix */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarmee kunnen we helpen?</h2>
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

      {/* Pricing callout */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Wat kost het?</h2>
            <p className="text-foreground/80 mb-6">Remote QuickFix: €39 per 30 min (cap €99). Vaak binnen 10–30 min reactie.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <a
                  href="https://wa.me/31702119191?text=Ik%20wil%20graag%20hulp%20op%20afstand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" />
                  WhatsApp ons nu
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+31702119191">
                  <Phone className="mr-2" />
                  Bel 070 211 9191
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
