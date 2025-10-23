import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Smartphone, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PartnersSection from "@/components/PartnersSection";
import { PlanAppointmentCta } from "@/components/PlanAppointmentCta";
import { OtherServicesGrid } from "@/components/OtherServicesGrid";
import { ReviewSection } from "@/components/ReviewSection";

const serviceImage = "/images/service-mobile.jpg";

export const metadata: Metadata = {
  title: "Smartphone & Tablet hulp | iOS en Android",
  description:
    "Telefoon traag? Apps installeren? WhatsApp niet werkend? We helpen je je smartphone of tablet stap voor stap in te stellen.",
  alternates: {
    canonical: "https://www.instantit.nl/mobiel-tablet",
  },
};

export default function MobileTabletPage() {
  const serviceBlocks = [
    { title: "Windows 10/11 Ondersteuning", href: "/windows-support", image: "/images/services/windows-support.svg" },
    { title: "Mac Support", href: "/mac-support", image: "/images/services/mac-support.svg" },
    { title: "Antivirus & Beveiliging", href: "/antivirus-setup", image: "/images/services/antivirus.svg" },
    { title: "Printerhulp", href: "/printer", image: "/images/services/printerhulp.svg" },
    { title: "E-mail Problemen", href: "/email", image: "/images/services/email-problemen.svg" },
    { title: "Computerlessen", href: "/uitleg-les", image: "/images/services/uitleg-les.svg" },
  ];

  const problems = [
    "WhatsApp installeren en gebruiken",
    "Foto's van telefoon naar computer",
    "Apps downloaden en installeren",
    "E-mail op telefoon instellen",
    "Videobellen met familie",
    "Opslagruimte vol",
    "Telefoon werkt traag",
    "Data overzetten naar nieuwe telefoon",
  ];

  const steps = [
    { title: "Wensen bespreken", desc: "We kijken wat u met uw apparaat wilt doen" },
    { title: "Apps installeren", desc: "We instaleren alles wat u nodig heeft" },
    { title: "Persoonlijke uitleg", desc: "Stap voor stap op uw eigen tempo" },
    { title: "Oefenen samen", desc: "We oefenen tot u het zelfstandig kunt" },
  ];

  const topics = [
    "WhatsApp basis",
    "Foto's beheren",
    "Apps instaleren",
    "E-mail instellingen",
    "Videobellen",
    "Contacten beheren",
    "Veiligheid",
    "Backup maken",
  ];

  const faqs = [
    {
      q: "Mijn telefoon is heel langzaam geworden, wat kan ik doen?",
      a: "Vaak helpt opruimen al – apps die je niet gebruikt verwijderen, cache wissen. We checken wat traagheid veroorzaakt.",
    },
    {
      q: "Kunnen jullie data overzetten naar mijn nieuwe telefoon?",
      a: "Ja! Foto's, contacten, apps – alles overzetten zonder wat te verliezen.",
    },
    {
      q: "Hoe beveilig ik mijn smartphone tegen hackers?",
      a: "Goede wachtwoord, updates, voorzichtig met links. We leggen alles uit.",
    },
    {
      q: "Mijn tablet doet niets meer, is deze nog te redden?",
      a: "Meestal wel! Soft reset, software bijwerken – veel problemen zijn oplosbaar.",
    },
    {
      q: "Kunnen jullie apps installeren en uitleggen hoe ze werken?",
      a: "Ja! WhatsApp, FaceTime, Zoom – we installeren en geven rustige uitleg.",
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
              Smartphone & Tablet hulp
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Apps installeren, WhatsApp, foto's, e-mail – we helpen je je telefoon of tablet beter te benutten. Stap voor stap.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Hulp%20met%20smartphone%20of%20tablet"
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

      {/* What We Solve */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat lossen we op?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{problem}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
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

      {/* Topics We Cover */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Onderwerpen die we behandelen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {topics.map((topic) => (
              <Card key={topic} className="border-2">
                <CardContent className="p-6 text-center">
                  <Smartphone className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-lg">{topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">iOS en Android</h2>
          <p className="text-center text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
            We helpen met iPhone, iPad, Samsung, Google Pixel en alle andere toestellen. Stap voor stap uit leg.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Smartphone className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">iPhone & iPad</h3>
                <p className="text-foreground/70">
                  iOS instellingen, App Store, iCloud backup en meer
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <Smartphone className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-xl mb-2">Android telefoons</h3>
                <p className="text-foreground/70">
                  Samsung, Google Pixel, alle Android telefoons en tablets
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Voorbeeld opdracht</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <span className="text-xs font-semibold text-accent uppercase">Situatie</span>
                <p className="text-lg mt-2">
                  "Nieuwe iPhone gekregen. Alles lijkt ingewikkeld. Wil graag foto's delen en videobellen."
                </p>
              </div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-primary uppercase">Wat we deden</span>
                <p className="text-lg mt-2">
                  We installeerden WhatsApp, FaceTime en Foto's-app. Al je oude foto's van je oude telefoon overgezet. Alles stap voor stap uitgelegd.
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                <p className="text-lg font-semibold mt-2">
                  "Nu ben ik zelfstandig! Alle foto's erin. Kan videobellen met kleinkinderen. Investering vooraf afgestemd, geen verrassingen."
                </p>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Leiden</p>
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

      <ReviewSection servicePath="/mobiel-tablet" title="Wat klanten zeggen" showLink={false} />

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

      <PlanAppointmentCta
        preselect={{
          category: "mobile",
          channel: "remote",
        }}
      />

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Klaar om je apparaat beter te benutten?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Hulp%20met%20mijn%20telefoon"
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
