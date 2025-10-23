import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Shield, Users, ThumbsUp, Clock } from "lucide-react";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "Over InstantIT",
  description:
    "Maak kennis met InstantIT: Digitale Eerste Hulp voor computerhulp, hacks en netwerkstoringen in Haaglanden.",
  alternates: {
    canonical: "https://www.instantit.nl/over-ons",
  },
};

export default function OverOns() {
  const values = [
    { title: "Betrouwbaar", desc: "Heldere prijzen, afspraak is afspraak.", icon: Shield },
    { title: "Persoonlijk", desc: "We leggen rustig uit en denken mee.", icon: Users },
    { title: "Snel", desc: "Vaak binnen 10–30 min reactie.", icon: Clock },
    { title: "Gewaardeerd", desc: "4.9/5 met 1.100+ opdrachten.", icon: ThumbsUp },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT team over ons"
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
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">Over ons</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              InstantIT is jouw Digitale Eerste Hulp. We helpen snel en veilig met computerproblemen, hacks en
              netwerkstoringen – bij particulieren en bedrijven.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="lg" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">
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

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waar we voor staan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <v.icon className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-foreground/70">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Kennismaken?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild>
              <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                WhatsApp ons
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
      </section>
    </div>
  );
}
