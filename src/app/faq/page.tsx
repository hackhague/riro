import type { Metadata } from "next";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        "Remote QuickFix vanaf €39 (cap €99), on-site €65/uur (min. 1u). Geen voorrijkosten in Haaglanden. Voor spoedhulp bij hacks €79 remote (cap €149) of €199 on-site (tot 2u).",
    },
    {
      question: "Hoe snel zijn jullie ter plaatse?",
      answer:
        "Remote ondersteuning meestal binnen 10–30 minuten. On-site in Haaglanden (Den Haag, Delft, Rijswijk, etc.) meestal binnen 2 uur. Voor spoedgevallen bij hacks nog sneller.",
    },
    {
      question: "Wat houdt nazorg in?",
      answer:
        "Gratis herbeoordeling van hetzelfde probleem binnen 7 dagen (max 30 min remote). Als het probleem terugkomt, kijken we opnieuw zonder extra kosten voor diagnose.",
    },
    {
      question: "Is remote support veilig?",
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
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Veelgestelde vragen
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
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
