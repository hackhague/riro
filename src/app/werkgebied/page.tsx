import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { heroTechnicianImage, HERO_IMAGE_SIZES } from "@/lib/image-assets";

export const metadata: Metadata = {
  title: "Werkgebied Zuid-Holland",
  description:
    "InstantIT helpt particulieren en bedrijven in Haaglanden, Delft, Zoetermeer, Rijswijk, Voorburg en Leiden.",
  alternates: {
    canonical: "https://www.instantit.nl/werkgebied",
  },
};

export default function Werkgebied() {
  const locations = [
    {
      name: "Den Haag",
      link: "/computerhulp-den-haag",
      desc: "Haaglanden, Scheveningen, Loosduinen, Ypenburg",
    },
    {
      name: "Delft",
      link: "/computerhulp-delft",
      desc: "Centrum, TU-buurt, Tanthof",
    },
    {
      name: "Zoetermeer",
      link: "/computerhulp-zoetermeer",
      desc: "Meerzicht, Rokkeveen, Buytenwegh",
    },
    {
      name: "Rijswijk",
      link: "/computerhulp-rijswijk",
      desc: "Centrum, Sion, Steenvoorde",
    },
    {
      name: "Voorburg",
      link: "/computerhulp-voorburg",
      desc: "Leidschendam-Voorburg",
    },
    {
      name: "Leiden",
      link: "/computerhulp-leiden",
      desc: "Centrum, Stevenshof, Merenwijk",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroTechnicianImage}
            alt="InstantIT werkgebied"
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
              <MapPin className="h-10 w-10 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Ons Werkgebied
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              InstantIT helpt particulieren en bedrijven in heel Zuid-Holland. Remote zijn we overal beschikbaar –
              op locatie binnen 24-48 uur in Haaglanden.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Belangrijkste steden</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <Link key={index} href={location.link}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                    <div className="mb-3 p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-1">{location.name}</h3>
                    <p className="text-foreground/70 text-xs font-medium">Computerhulp</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">Ook elders in Zuid-Holland</h2>
            <p className="text-lg text-foreground/80 mb-6">
              Niet in bovenstaande lijst? We helpen ook graag in Rotterdam, Wassenaar, Voorschoten, en andere gemeenten
              in Zuid-Holland. Remote support is altijd mogelijk. Voor on-site bezoeken buiten Haaglanden kan een
              kleine toeslag gelden – dit bespreken we vooraf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a
                  href="https://wa.me/31853696124?text=Hallo%2C%20ik%20ben%20in%20[plaats]%20–%20kunnen%20jullie%20helpen%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vraag beschikbaarheid
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+31853696124">Bel 085 369 6124</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Responstijden</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Op afstand</h3>
                <p className="text-3xl font-bold text-primary mb-2">10–30 min</p>
                <p className="text-foreground/70">
                  Meestal binnen een half uur aan de slag – ongeacht waar je bent in Nederland.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Op locatie (Haaglanden)</h3>
                <p className="text-3xl font-bold text-primary mb-2">Op locatie binnen 24-48 uur</p>
                <p className="text-foreground/70">
                  In Haaglanden (Den Haag, Delft, Rijswijk, Voorburg, etc.) op locatie binnen 24-48 uur.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
