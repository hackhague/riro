import { MessageCircle, Phone, Zap, Shield, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SERVICE_HACK_ILLUSTRATION } from "@/lib/imagePlaceholders";

export default function IkBenGehackt() {
  const signs = [
    "Accounts waar je niet bij kan (wachtwoorden gewijzigd)",
    "Onbekende transacties of berichten",
    "Computer vergrendeld met losgeldeis",
    "Pop-ups over virussen (ook fake)",
    "Familie/vrienden ontvangen rare berichten van jou",
    "Webcam of microfoon lijken actief",
  ];

  const steps = [
    { title: "Triage", desc: "Remote binnen 15 min - wat is er aan de hand?" },
    { title: "Containment", desc: "Isoleren + damage control (account lockdown, disconnect)" },
    { title: "Herstel", desc: "Schoonmaken, wachtwoorden resetten, 2FA instellen" },
    { title: "Preventie", desc: "Hardening + advies om herhaling te voorkomen" },
  ];

  const faqs = [
    {
      q: "Moet ik betalen aan hackers?",
      a: "Nee, nooit! Ook al beloven ze dat ze de bestanden terugeven – vaak doen ze dat niet. Bel ons eerst.",
    },
    {
      q: "Hoe snel moeten jullie erbij zijn?",
      a: "Bij een actieve hack: direct. Remote triage binnen 15 min, on-site indien nodig binnen 2u (spoed).",
    },
    {
      q: "Kan ik een rapport krijgen voor verzekering?",
      a: "Ja, we leveren een incident summary voor je cyber-/inboedelverzekering (indien van toepassing).",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero - Urgent */}
      <section className="bg-gradient-to-b from-destructive/10 to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-destructive/20 text-destructive px-4 py-2 rounded-full mb-4">
                <Zap className="h-4 w-4" />
                <span className="font-semibold text-sm">24/7 Spoedhulp</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Gehackt? Direct hulp – 24/7 hacklijn
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                Remote triage binnen 15 minuten. Containment, herstel en preventie. Ook 's nachts en in het weekend.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="lg" asChild>
                  <a
                    href="https://wa.me/31702119191?text=Ik%20ben%20gehackt%3A%20[kort%20probleem]%20%2F%20[apparaat]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" />
                    WhatsApp direct
                  </a>
                </Button>
                <Button variant="default" size="lg" asChild>
                  <a href="tel:+31702119191">
                    <Phone className="mr-2" />
                    Bel 070 211 9191
                  </a>
                </Button>
              </div>
              <p className="text-sm text-foreground/60 mt-4">
                <AlertTriangle className="h-4 w-4 inline mr-1" />
                Betaal NOOIT losgeld zonder eerst met ons te overleggen
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-destructive/20">
              <img
                src={SERVICE_HACK_ILLUSTRATION}
                alt="Gestileerde illustratie voor directe hulp bij hacks"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signs You're Hacked */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Signalen dat je bent gehackt
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {signs.map((sign, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{sign}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Emergency */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Onze aanpak</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">{index + 1}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-foreground/70">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Emergency */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Spoed tarieven</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Hacklijn remote</h3>
                <p className="text-3xl font-bold text-accent mb-1">€79</p>
                <p className="text-sm text-foreground/60 mb-4">per 45 min • cap €149</p>
                <p className="text-xs text-foreground/70">24/7 beschikbaar</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Spoed on-site</h3>
                <p className="text-3xl font-bold text-primary mb-1">€199</p>
                <p className="text-sm text-foreground/60 mb-4">tot 2 uur</p>
                <p className="text-xs text-foreground/70">Bij acute dreiging (bijv. ransomware)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Follow-up</h3>
                <p className="text-3xl font-bold text-primary mb-1">€65</p>
                <p className="text-sm text-foreground/60 mb-4">per uur</p>
                <p className="text-xs text-foreground/70">Hardening & preventie na incident</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Recente case</h2>
          <Card className="max-w-3xl mx-auto border-2 border-destructive/20">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold text-destructive uppercase">Probleem</span>
                <p className="text-lg mt-2">
                  "Laptop vergrendeld met losgeldeis van €500 in Bitcoin. Alle bestanden ontoegankelijk. Paniek omdat
                  familiefoto's en belastinggegevens erop staan."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent uppercase">Oplossing</span>
                <p className="text-lg mt-2">
                  Remote triage binnen 12 min. Ransomware variant herkend (oude versie). Decryptor beschikbaar. Laptop
                  geïsoleerd, bestanden hersteld, 2FA ingesteld op alle accounts, passwordmanager opgezet.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "Alle data terug zonder losgeld. Follow-up preventie sessie (Cyber APK). Kosten: €149 remote + €65
                  follow-up."
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Ypenburg, Den Haag</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-secondary">
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

      {/* Urgent CTA */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Twijfel je? Bel direct!</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Bij een hack telt elke minuut. Wacht niet – laat ons eerst kijken voordat je losgeld betaalt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="xl"
              asChild
              className="bg-background text-destructive hover:bg-background/90"
            >
              <a
                href="https://wa.me/31702119191?text=Ik%20ben%20gehackt%3A%20[kort%20probleem]%20%2F%20[apparaat]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp spoedhulp
              </a>
            </Button>
            <Button
              variant="accent"
              size="xl"
              asChild
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
