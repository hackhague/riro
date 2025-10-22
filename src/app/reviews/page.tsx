import type { Metadata } from "next";
import Image from "next/image";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { reviews, type Review } from "@/data/reviews";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Reviews & Resultaten",
  description:
    "Lees hoe InstantIT klanten in Haaglanden helpt met computerproblemen, hacks en wifi-issues.",
  alternates: {
    canonical: "https://www.instantit.nl/reviews",
  },
};

export default function Reviews() {

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT reviews en resultaten"
            fill
            priority
            sizes="100vw"
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
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="h-10 w-10 text-yellow-400 fill-current" />
              <Star className="h-10 w-10 text-yellow-400 fill-current" />
              <Star className="h-10 w-10 text-yellow-400 fill-current" />
              <Star className="h-10 w-10 text-yellow-400 fill-current" />
              <Star className="h-10 w-10 text-yellow-400 fill-current" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Wat klanten over ons zeggen
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Echte problemen, snelle oplossingen – bekijk hoe InstantIT particulieren en bedrijven in Zuid-Holland helpt.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
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
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent uppercase">Probleem</span>
                    <p className="text-foreground/80 mt-1">{review.problem}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase">Oplossing</span>
                    <p className="text-foreground/80 mt-1">{review.solution}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-foreground uppercase">Resultaat</span>
                    <p className="font-semibold mt-1">"{review.result}"</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <div>
                      <div className="font-medium text-foreground">
                        {review.author}
                      </div>
                      <div className="text-xs">
                        {review.company ? (
                          <>
                            {review.company}
                            <br />
                            {review.location}
                          </>
                        ) : (
                          review.location
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {review.topics.slice(0, 2).map((topic) => (
                        <span key={topic} className="text-xs bg-secondary px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
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
