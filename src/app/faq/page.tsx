import type { Metadata } from "next";
import Image from "next/image";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { heroTechnicianImage, HERO_IMAGE_SIZES } from "@/lib/image-assets";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op vragen over tarieven, responstijden en werkwijze van InstantIT.",
  alternates: {
    canonical: "https://www.instantit.nl/faq",
  },
};

export default function FAQ() {
  const faqs = [
    {
      question: "Wat kost computerhulp in Den Haag?",
      answer:
        "QuickFix op afstand vanaf €39 (cap €99), op locatie €65/uur (min. 1u). Geen voorrijkosten in Haaglanden. Voor spoedhulp bij hacks €79 op afstand (cap €149) of €199 op locatie (tot 2u).",
    },
    {
      question: "Hoe snel zijn jullie ter plaatse?",
      answer:
        "Op afstand ondersteuning meestal binnen 10–30 minuten. Op locatie in Haaglanden (Den Haag, Delft, Rijswijk, etc.) meestal binnen 2 uur. Voor spoedgevallen bij hacks nog sneller.",
    },
    {
      question: "Wat houdt nazorg in?",
      answer:
        "Gratis herbeoordeling van hetzelfde probleem binnen 7 dagen (max 30 min op afstand). Als het probleem terugkomt, kijken we opnieuw zonder extra kosten voor diagnose.",
    },
    {
      question: "Is op afstand ondersteuning veilig?",
      answer:
        "Ja, we gebruiken professionele, versleutelde verbindingen. Je moet altijd zelf toestemming geven voordat we toegang krijgen. Na afloop wordt de verbinding automatisch verbroken. VOG-gecertificeerd.",
    },
    {
      question: "Werken jullie ook 's avonds en in het weekend?",
      answer:
        "Ja, we zijn bereikbaar ma–zo van 08:00–21:00. Voor spoedhulp bij hacks hebben we een 24/7 hacklijn beschikbaar.",
    },
    {
      question: "Wat als het probleem niet wordt opgelost?",
      answer:
        "Je betaalt alleen €19 voor de diagnose, geen arbeidsloon. We zijn transparant over wat wel en niet kan, voordat je extra kosten maakt.",
    },
    {
      question: "Helpen jullie ook bedrijven?",
      answer:
        "Ja, we ondersteunen MKB, horeca, retail en ZZP. Van kassa- en PIN-problemen tot WiFi, netwerk en cybersecurity. Ook strippenkaarten beschikbaar voor regelmatige support.",
    },
    {
      question: "Wat is een Cyber APK?",
      answer:
        "Een uitgebreide veiligheidscheck van je computer of netwerk (60–90 min, €129). We controleren updates, antivirus, firewall, wachtwoorden, backup en geven een kort rapport met aanbevelingen.",
    },
    {
      question: "Komen jullie ook buiten Haaglanden?",
      answer:
        "Ja, we helpen in heel Zuid-Holland (Rotterdam, Wassenaar, Voorschoten, etc.). Remote altijd mogelijk. Voor on-site buiten Haaglanden kan een kleine toeslag gelden – dit bespreken we vooraf.",
    },
    {
      question: "Welke betaalmethoden accepteren jullie?",
      answer:
        "We accepteren contant, pin, iDEAL en bankoverschrijving. Betaling meestal na afloop van de werkzaamheden, tenzij anders afgesproken.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroTechnicianImage}
            alt="InstantIT veelgestelde vragen"
            fill
            priority
            placeholder="blur"
            sizes={HERO_IMAGE_SIZES}
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Veelgestelde vragen
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Heb je een vraag over onze diensten, tarieven of werkwijze? Hieronder vind je antwoorden op de meest gestelde vragen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">Staat je vraag er niet bij?</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Geen probleem! Neem contact met ons op via WhatsApp of telefoon. We helpen je graag verder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20een%20vraag%20over"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp ons
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
        </div>
      </section>
    </div>
  );
}
