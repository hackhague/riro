import type { Metadata } from "next";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Reviews & Resultaten",
  description:
    "Lees hoe InstantIT klanten in Haaglanden helpt met computerproblemen, hacks en wifi-issues.",
  alternates: {
    canonical: "https://www.instantit.nl/reviews",
  },
};

export default function Reviews() {
  const cases = [
    {
      problem: "PIN en kassa down op vrijdagavond",
      solution: "4G-failover + noodplan binnen 1 uur",
      result: "Binnen 1 uur weer online, weekend gered",
      location: "Scheveningen",
      industry: "Horeca",
    },
    {
      problem: "Ransomware op laptop, belangrijk dossier versleuteld",
      solution: "Containment + herstel + 2FA setup",
      result: "Alles veilig, rapport voor verzekering geleverd",
      location: "Ypenburg",
      industry: "ZZP",
    },
    {
      problem: "WiFi dode zones in studentenhuis",
      solution: "Mesh netwerk + router-hardening",
      result: "Volle snelheid op alle kamers, stabiel",
      location: "Delft",
      industry: "Particulier",
    },
    {
      problem: "Computer extreem traag, dagelijks crashes",
      solution: "SSD upgrade + clean Windows installatie",
      result: "Als een nieuwe laptop, alles werkt perfect",
      location: "Zoetermeer",
      industry: "Particulier",
    },
    {
      problem: "Phishing mail geopend, accounts gehackt",
      solution: "Wachtwoord reset + security audit + 2FA",
      result: "Accounts beveiligd, preventie ingesteld",
      location: "Den Haag",
      industry: "Particulier",
    },
    {
      problem: "Netwerk down, 10 werkplekken offline",
      solution: "Switch vervanging + bekabeling check",
      result: "Binnen 3 uur alles weer operationeel",
      location: "Rijswijk",
      industry: "MKB",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="h-10 w-10 text-accent fill-current" />
              <Star className="h-10 w-10 text-accent fill-current" />
              <Star className="h-10 w-10 text-accent fill-current" />
              <Star className="h-10 w-10 text-accent fill-current" />
              <Star className="h-10 w-10 text-accent fill-current" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Wat klanten over ons zeggen
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Echte problemen, snelle oplossingen – bekijk hoe InstantIT particulieren en bedrijven in Zuid-Holland helpt.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-accent fill-current" />
                <span className="font-semibold text-lg">4.9/5</span>
              </div>
              <span>|</span>
              <span>1.100+ opdrachten</span>
              <span>|</span>
              <span>VOG & verzekerd</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent uppercase">Probleem</span>
                    <p className="text-foreground/80 mt-1">{caseItem.problem}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                    <p className="text-foreground/80 mt-1">{caseItem.solution}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                    <p className="font-semibold mt-1">"{caseItem.result}"</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <span>{caseItem.location}</span>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">{caseItem.industry}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <a
                href="https://www.google.com/search?q=InstantIT+Den+Haag+reviews"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bekijk alle Google reviews
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">Heb je hulp gehad van InstantIT?</h2>
            <p className="text-lg text-foreground/80 mb-6">
              We waarderen jouw feedback enorm. Deel je ervaring en help anderen bij hun keuze voor IT-hulp.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schrijf een review
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
