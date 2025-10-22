import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, Globe, CheckCircle, Clock, Shield, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReviewSection } from "@/components/ReviewSection";

const heroImage = "/images/hero-technician.jpg";

export const metadata: Metadata = {
  title: "IT Support for Expats",
  description:
    "English-speaking IT support in The Hague region. Fast remote help and on-site service for expats.",
  alternates: {
    canonical: "https://www.instantit.nl/expat",
  },
};

export default function Expat() {
  const services = [
    {
      icon: Globe,
      title: "Full English Support",
      description: "We speak fluent English and understand the challenges expats face with Dutch IT services.",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Remote within 10-30 minutes, on-site within 24-48 hours in The Hague area.",
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "VOG-certified technicians, fully insured, and GDPR compliant.",
    },
  ];

  const commonIssues = [
    {
      problem: "Need to set up internet and WiFi in new apartment",
      solution: "Router installation, network optimization, and guest WiFi setup",
      result: "Fast, stable internet throughout your home",
    },
    {
      problem: "Computer virus or hacked account",
      solution: "Malware removal, password reset, 2FA setup, security audit",
      result: "Clean system and improved security",
    },
    {
      problem: "Work from home setup",
      solution: "VPN configuration, monitor setup, printer installation, video conferencing",
      result: "Professional home office ready to go",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden min-h-[400px] md:min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="InstantIT expat IT support"
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center gap-2 justify-center text-white/90 mb-4">
              <Globe className="h-6 w-6" />
              <span className="font-semibold text-lg">English IT Support</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              IT Support for Expats in The Hague
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Fast, professional IT help in English. From WiFi setup to virus removal and home office configuration –
              we understand your needs and speak your language.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="accent" size="lg" asChild>
                <a
                  href="https://wa.me/31702119191?text=Hi%2C%20I%20need%20IT%20support%20in%20English"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" />
                  WhatsApp now
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+31702119191">
                  <Phone className="mr-2" />
                  Call 070 211 9191
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Why expats choose InstantIT
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
            How we help expats
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            These are the most common IT challenges we solve for internationals living in The Hague area
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {commonIssues.map((issue, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-accent uppercase">Challenge</span>
                    <p className="text-foreground/80 mt-1">{issue.problem}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase">Solution</span>
                    <p className="text-foreground/80 mt-1">{issue.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-foreground uppercase">Result</span>
                    <p className="font-semibold mt-1">"{issue.result}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
            Our services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Home & Personal</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>WiFi setup & optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Computer/laptop repair & tune-up</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Virus removal & security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Data backup & recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Smart home device setup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Work From Home</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>VPN & secure connection setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Multiple monitor configuration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Video conferencing setup (Zoom, Teams, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Printer & scanner installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cloud storage setup (OneDrive, Google Drive, Dropbox)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Security & Hacks</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency hack support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ransomware recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Account security & 2FA setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Password manager setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Security audit (Cyber APK)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Moving to The Netherlands</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complete home network setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dutch internet provider support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Device compatibility check (voltage, plugs, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>International device setup help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>DigiD & government portal assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 justify-center text-primary mb-6">
              <MapPin className="h-6 w-6" />
              <h2 className="font-heading font-bold text-3xl md:text-4xl">Service area</h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-center text-foreground/80 mb-6">
                  We primarily serve The Hague region (Den Haag, Scheveningen, Wassenaar, Voorburg, Rijswijk, Delft,
                  Zoetermeer, Leiden) with no travel fees. Remote support available throughout The Netherlands.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold mb-1">Op afstand Ondersteuning</p>
                    <p className="text-sm text-foreground/70">Usually 10-30 minutes</p>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold mb-1">Op locatie Bezoek</p>
                    <p className="text-sm text-foreground/70">Within 24-48 hours (Haaglanden)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ReviewSection servicePath="/expat" title="What expats say" showLink={false} />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Ready to solve your IT problem?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us in English via WhatsApp or phone. We're here to help you get back online quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Hi%2C%20I%20need%20IT%20support%20in%20English"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp us now
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
                Call 070 211 9191
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
