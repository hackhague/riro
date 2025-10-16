import { MessageCircle, Phone, Zap, Shield, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import serviceImage from "@/assets/service-hack.jpg";

export default function IkBenGehackt() {
  const signs = [
    "Je kunt niet meer inloggen (wachtwoord aangepast)",
    "Onbekende betalingen of vreemde berichten",
    "Bestanden zijn vergrendeld en je ziet een losgeldeis",
    "Opdringerige pop-ups of valse virusmeldingen",
    "Vrienden/familie krijgen rare berichten van jouw account",
    "Je camera of microfoon werkt zonder dat jij dat doet",
  ];

  const steps = [
    { title: "Stap 1 — Kort contact", desc: "We bellen of appen kort: wat is er gebeurd en welke apparaten zijn geraakt?" },
    { title: "Stap 2 — Veilig maken", desc: "We blokkeren toegang waar mogelijk en halen het apparaat van internet." },
    { title: "Stap 3 — Terugzetten", desc: "We halen malware weg, herstellen accounts en zetten veilige wachtwoorden en 2FA." },
    { title: "Stap 4 — Voorkomen", desc: "We leggen uit wat je anders kunt doen en zetten extra beveiliging klaar." },
  ];

  const faqs = [
    {
      q: "Moet ik hackers betalen?",
      a: "Nee — betaal nooit direct losgeld. Bel ons eerst; vaak zijn er andere opties en betalen biedt geen garantie.",
    },
    {
      q: "Hoe snel komen jullie helpen?",
      a: "We starten meestal binnen **60 minuten** via remote. Als nodig, komen we op locatie binnen **24–48 uur**. Spoedslots mogelijk als we vrij zijn.",
    },
    {
      q: "Krijg ik een rapport voor mijn verzekering?",
      a: "Ja. Na het incident ontvang je een kort overzicht met wat er is gebeurd en welke stappen we hebben genomen. Dat kun je gebruiken voor je verzekering of aangifte.",
    },
    {
      q: "Hoe betaal ik?",
      a: "Remote hulp gaat via een veilige betaallink (vooraf). Voor on-site kun je direct met pin betalen. Geen verrassingen achteraf.",
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
                <span className="font-semibold text-sm">Spoedhulp beschikbaar</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Gehackt? Direct hulp in Den Haag & omgeving
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8">
                We starten meestal binnen <strong>60 minuten</strong> via remote. Als het nodig is komen we op locatie binnen <strong>24–48 uur</strong>.
                Avonden en weekend zijn mogelijk — bel of app direct.
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
                Betaal <strong>nooit</strong> losgeld zonder eerst met ons te overleggen.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-destructive/20">
              <img src={serviceImage} alt="Spoedhulp bij hack of cyberaanval" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Signs You're Hacked */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Signalenen dat je hulp nodig hebt
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat we doen en hoe</h2>
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
          <p className="text-sm text-foreground/70 max-w-3xl mx-auto text-center mt-6">
            We werken stap voor stap en leggen alles in gewone taal uit. Je krijgt altijd een kort verslag met wat we hebben gedaan.
          </p>
        </div>
      </section>

      {/* Pricing - Emergency */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Tarieven voor spoedhulp</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-accent">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Remote triage</h3>
                <p className="text-3xl font-bold text-accent mb-1">€149</p>
                <p className="text-sm text-foreground/60 mb-4">Tot 60 minuten • direct advies & eerste hulp</p>
                <p className="text-xs text-foreground/70">Meestal binnen 60 minuten bereikbaar</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Spoed on-site</h3>
                <p className="text-3xl font-bold text-primary mb-1">€299</p>
                <p className="text-sm text-foreground/60 mb-4">Tot 2 uur • direct veilig maken</p>
                <p className="text-xs text-foreground/70">Komt alleen als het echt nodig is</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Nazorg & advies</h3>
                <p className="text-3xl font-bold text-primary mb-1">€65</p>
                <p className="text-sm text-foreground/60 mb-4">Per uur • instellingen & preventie</p>
                <p className="text-xs text-foreground/70">2FA, wachtwoordmanager en back-ups</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-foreground/70 text-center mt-6">
            Betaal veilig via pin of vooraf via een betaallink voor remote hulp. Geen verrassingen.
          </p>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Recente klus</h2>
          <Card className="max-w-3xl mx-auto border-2 border-destructive/20">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold text-destructive uppercase">Probleem</span>
                <p className="text-lg mt-2">
                  "Laptop vergrendeld met losgeldeis. Familie- en belastingbestanden ontoegankelijk. Paniek."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent uppercase">Oplossing</span>
                <p className="text-lg mt-2">
                  Remote gestart binnen 60 minuten. Laptop kort van internet gehaald, variant gecontroleerd en
                  bestanden hersteld met beschikbare tool. Accounts beveiligd, 2FA ingesteld en wachtwoorden vernieuwd.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "Data terug zonder losgeld. Nazorgsessie (Cyber-APK) gepland. Kosten: €149 remote + €65 nazorg."
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">We helpen direct — bel of app nu</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Bij een hack telt snelheid. Laat ons eerst kijken voordat je stappen als betalen overweegt.
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
