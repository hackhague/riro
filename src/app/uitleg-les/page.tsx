import type { Metadata } from "next";
import Link from "next/link";
import { Phone, BookOpen, CheckCircle2, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { OtherServicesGrid } from "@/components/OtherServicesGrid";

const serviceImage = "/images/service-lessons.jpg";

export const metadata: Metadata = {
  title: "Computerlessen aan huis | 1-op-1 begeleiding",
  description:
    "Persoonlijke computerlessen op je eigen tempo. E-mail, internet, videobellen, online bankieren – alles stap voor stap uitgelegd.",
  alternates: {
    canonical: "https://www.instantit.nl/uitleg-les",
  },
};

export default function UitlegLesPage() {
  const serviceBlocks = [
    { title: "Windows 10/11 Ondersteuning", href: "/windows-support", image: "/images/services/windows-support.jpg" },
    { title: "Mac Support", href: "/mac-support", image: "/images/services/mac-support.jpg" },
    { title: "Antivirus & Beveiliging", href: "/antivirus-setup", image: "/images/services/antivirus.jpg" },
    { title: "Printerhulp", href: "/printer", image: "/images/services/printerhulp.jpg" },
    { title: "E-mail Problemen", href: "/email", image: "/images/services/email-problemen.jpg" },
    { title: "Smartphone & Tablet", href: "/mobiel-tablet", image: "/images/services/tablet-smartphone.jpg" },
  ];

  const lessons = [
    "Basis computergebruik leren",
    "E-mail leren gebruiken",
    "Videobellen met kleinkinderen",
    "Veilig internetbankieren",
    "Foto's organiseren en beheren",
    "Social media begrijpen",
    "Nieuwe apparaat leren gebruiken",
    "Veel oefenen tot je het zelf kunt",
  ];

  const steps = [
    { title: "Niveau bepalen", desc: "We kijken wat u al kunt en wat u wilt leren" },
    { title: "Lesplan op maat", desc: "We maken een persoonlijk lesplan voor u" },
    { title: "Rustige uitleg", desc: "Stap voor stap op uw eigen tempo" },
    { title: "Veel oefenen", desc: "We oefenen tot u het zelfstandig kunt" },
  ];

  const topics = [
    "Computer basics",
    "Internet navigeren",
    "E-mail instellen",
    "Videobellen",
    "Online bankieren",
    "Wachtwoordbeheer",
    "Foto's en bestanden",
    "Social media veilig",
  ];

  const faqs = [
    {
      q: "Wat leer ik tijdens een computerles aan huis?",
      a: "Wat jij wilt! Van basis computer aan tot videobellen, e-mail, online bankieren. Wij gaan naar jouw tempo.",
    },
    {
      q: "Hoeveel kost een computerles aan huis?",
      a: "We volgen onze vaste tarieven. Een sessie duurt meestal een uur; samen stemmen we af hoe vaak we langskomen.",
    },
    {
      q: "Ben ik niet te oud om nog te leren computeren?",
      a: "Helemaal niet! Veel van onze leerlingen zijn 70+. Het gaat erom dat je rustig leert, op je eigen tempo.",
    },
    {
      q: "Kan ik leren videobellen met familie?",
      a: "Ja! WhatsApp, FaceTime of Zoom – we leren je alles. Handig om kleinkinderen te zien.",
    },
    {
      q: "Krijg ik materiaal om thuis te oefenen?",
      a: "We geven je schriftelijke notities met stap-voor-stap instructies. Perfect om thuis te herhalen.",
    },
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
              Persoonlijke computerles aan huis
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Wilt u beter leren omgaan met uw computer? Onze geduldige specialisten geven rustige uitleg op uw eigen tempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Ik%20wil%20computerles%20volgen"
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

      {/* What We Teach */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat u leert</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {lessons.map((lesson, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{lesson}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Teach */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Onze manier van les geven</h2>
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

      {/* Topics */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Onderwerpen die we behandelen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {topics.map((topic) => (
              <Card key={topic} className="border-2">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-lg">{topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Een echte verhaal</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent uppercase">Situatie</span>
                <p className="text-lg mt-2">
                  "Mijn laptop werkt prima, maar ik snap het niet. Bang dat ik iets stuk maak. Wil graag videobellen met mijn dochter in Australië."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase">Aanpak</span>
                <p className="text-lg mt-2">
                  5 lessen gegeven. Week 1-2: laptop basics. Week 3-4: internet en videobellen. Week 5: oefenen totdat je het zelf durfde.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "Nu videobel ik elke week met mijn dochter! Ik hoef mijn kleindochter te zien groeien. Superblij! Alles vooraf afgesproken, zonder verrassingen."
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Voorburg</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <PartnersSection />

      {/* Other Services */}
      <section>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <OtherServicesGrid serviceBlocks={serviceBlocks} showCTA={false} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarom met ons</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Geen haast</h3>
                <p className="text-foreground/70">
                  Je bepaalt het tempo. Geen belachelijke vragen – alles mag en wordt stap voor stap uitgelegd.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Geduld</h3>
                <p className="text-foreground/70">
                  Onze leerkrachten zijn speciaal opgeleid en houdt ervan om rustig te leren met mensen.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Eigen apparaat</h3>
                <p className="text-foreground/70">
                  We werken met jouw eigen computer, tablet of telefoon. Zo leer je precies wat jij gebruikt.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Materiaal mee</h3>
                <p className="text-foreground/70">
                  Stap-voor-stap notities zodat je thuis kan oefenen. Altijd iets om naar terug te kijken.
                </p>
              </CardContent>
            </Card>
          </div>
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

      <PlanAppointmentCta
        preselect={{
          category: "training",
          channel: "remote",
        }}
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar om te leren?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Laten we je computer minder eng en meer leuk maken. Je bepaalt het tempo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Ik%20wil%20computerles"
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
