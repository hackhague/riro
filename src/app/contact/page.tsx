import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem direct contact op met InstantIT voor computerhulp, hacks of storingen in Haaglanden.",
  alternates: {
    canonical: "https://www.instantit.nl/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Contact
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Neem direct contact op voor snelle hulp bij computerproblemen, hacks of storingen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <Phone className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-2xl mb-2">Telefoon</h3>
                <p className="text-foreground/70 mb-4">Direct met een specialist</p>
                <Button variant="accent" size="lg" asChild className="w-full">
                  <a href="tel:+31702119191">070 211 9191</a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <MessageCircle className="h-10 w-10 text-whatsapp mb-4" />
                <h3 className="font-heading font-bold text-2xl mb-2">WhatsApp</h3>
                <p className="text-foreground/70 mb-4">Snelste reactie (vaak binnen 10 min)</p>
                <Button variant="whatsapp" size="lg" asChild className="w-full">
                  <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">
                    WhatsApp ons nu
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Mail className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-2xl mb-2">E-mail</h3>
                <p className="text-foreground/70 mb-4">Voor minder urgente vragen</p>
                <a href="mailto:support@instantit.nl" className="text-primary hover:underline text-lg">
                  support@instantit.nl
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-2xl mb-2">Adres</h3>
                <p className="text-foreground/70">
                  Laan van NOI 88<br />
                  2593 BP Den Haag
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-3xl mx-auto mt-8">
            <CardContent className="p-8">
              <Clock className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="font-heading font-bold text-2xl mb-4 text-center">Openingstijden</h3>
              <div className="text-center text-foreground/80">
                <p className="mb-2"><strong>Ma – Zo:</strong> 08:00 – 21:00</p>
                <p className="text-sm text-primary">24/7 spoedlijn voor hacks/ransomware</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-6">Stel je vraag</h2>
            <Card>
              <CardContent className="p-6 md:p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
