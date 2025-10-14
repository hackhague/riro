import { Link } from "react-router-dom";
import { Star, Clock, Shield, CheckCircle, MessageCircle, Phone, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import heroImage from "@/assets/hero-technician.jpg";
import serviceComputer from "@/assets/service-computer.jpg";
import serviceHack from "@/assets/service-hack.jpg";
import serviceWifi from "@/assets/service-wifi.jpg";

export default function Home() {
  const services = [
    {
      title: "Computerhulp",
      description: "Computer traag, virussen, softwareproblemen? Wij maken het weer snel.",
      image: serviceComputer,
      link: "/computerhulp",
    },
    {
      title: "Ik ben gehackt",
      description: "Remote triage binnen 15 min; on-site bij spoed. Containment & schoonmaak.",
      image: serviceHack,
      link: "/ik-ben-gehackt",
    },
    {
      title: "WiFi & Netwerk",
      description: "Betere dekking & stabiel internet thuis of op kantoor.",
      image: serviceWifi,
      link: "/wifi",
    },
  ];

  const usps = [
    {
      icon: Clock,
      title: "Razendsnel & lokaal",
      description: "Remote in 10–30 min, meestal binnen 2 uur aan de deur (Haaglanden).",
    },
    {
      icon: Shield,
      title: "Cyber-expertise",
      description: "Containment, herstel, Cyber APK en preventie.",
    },
    {
      icon: CheckCircle,
      title: "Transparant & nazorg",
      description: "Vaste caps. Niet opgelost? Gratis herbeoordeling binnen 7 dagen (max 30 min remote).",
    },
  ];

  const pricing = [
    { name: "Remote QuickFix", price: "€39 / 30 min", cap: "cap €99" },
    { name: "Aan huis", price: "€65 / uur", cap: "geen voorrijkosten Haaglanden" },
    { name: "Hacklijn remote", price: "€79 / 45 min", cap: "cap €149" },
    { name: "Spoed on-site", price: "€199", cap: "tot 2u" },
  ];

  const steps = [
    { number: "1", text: "Stuur een WhatsApp of bel" },
    { number: "2", text: "Gratis korte triage" },
    { number: "3", text: "Remote fix of op locatie binnen 24u" },
    { number: "4", text: "Nazorg binnen 7 dagen" },
  ];

  const reviews = [
    {
      problem: "PIN en kassa down op vrijdagavond",
      solution: "4G-failover + noodplan",
      result: "Binnen 1 uur weer online",
      location: "Scheveningen",
    },
    {
      problem: "Ransomware op laptop",
      solution: "Herstel + 2FA",
      result: "Alles veilig, rapport voor verzekering",
      location: "Ypenburg",
    },
    {
      problem: "WiFi dode zones",
      solution: "Mesh + router-hardening",
      result: "Volle snelheid op alle kamers",
      location: "Delft",
    },
  ];

  const serviceAreas = [
    { name: "Den Haag", link: "/computerhulp-den-haag" },
    { name: "Delft", link: "/computerhulp-delft" },
    { name: "Zoetermeer", link: "/computerhulp-zoetermeer" },
    { name: "Rijswijk", link: "/computerhulp-rijswijk" },
    { name: "Voorburg", link: "/computerhulp-voorburg" },
    { name: "Leiden", link: "/computerhulp-leiden" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Computerhulp in Den Haag | Digitale Eerste Hulp"
        description="Snelle computerhulp & cyberhulp in Den Haag e.o. Binnen 10–30 min reactie, meestal binnen 2 uur aan de deur. Vaste caps, geen verrassingen. WhatsApp of bel 070 211 9191."
        keywords="computerhulp den haag, cyberhulp, IT support, computer reparatie, virus verwijderen, wifi verbeteren"
        canonical="https://www.instantit.nl/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="InstantIT Computerhulp Den Haag"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-3 md:mb-4">
              Computerhulp & Cyberhulp in Den Haag
            </h1>
            <p className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8">
              Jouw Digitale Eerste Hulp – binnen 10–30 min reactie, meestal binnen 24 uur op locatie. Vaste prijzen,
              gratis nazorg.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
              <Button variant="whatsapp" size="default" asChild>
                <a
                  href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp ons nu
                </a>
              </Button>
              <Button variant="accent" size="default" asChild>
                <a href="tel:+31702119191">
                  <Phone className="h-4 w-4" />
                  Bel 070 211 9191
                </a>
              </Button>
            </div>

            <Button variant="outline" size="default" asChild className="mb-6">
              <Link to="/ik-ben-gehackt">
                <Zap className="h-4 w-4" />
                Spoedhulp 24/7
              </Link>
            </Button>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 items-center text-xs md:text-sm text-foreground/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Lokale hulp binnen 2u</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>24/7 spoedlijn</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>Vaste tarieven</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex flex-wrap gap-2 items-center mt-3 text-xs md:text-sm">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-semibold text-foreground/80">4.9/5</span>
              </div>
              <span className="text-foreground/70">1.100+ opdrachten</span>
            </div>
          </div>
        </div>
      </section>

      {/* USP Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {usps.map((usp, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <usp.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{usp.title}</h3>
                  <p className="text-foreground/70">{usp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Onze Diensten</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <Button variant="ghost" asChild className="group/btn">
                    <Link to={service.link}>
                      Lees verder
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Transparante Prijzen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {pricing.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-1">{item.price}</p>
                  <p className="text-sm text-foreground/60">{item.cap}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/tarieven">Bekijk alle tarieven</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Hoe het werkt</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-foreground">{step.number}</span>
                </div>
                <p className="font-medium">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews/Cases */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Wat klanten zeggen</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {reviews.map((review, index) => (
              <Card key={index}>
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
                  <p className="text-sm text-foreground/60">{review.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/reviews">Bekijk alle Google reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Ons Werkgebied</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {serviceAreas.map((area, index) => (
              <Link
                key={index}
                to={area.link}
                className="p-6 bg-background rounded-lg border-2 border-border hover:border-primary transition-colors text-center font-semibold text-lg"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button variant="ghost" asChild>
              <Link to="/werkgebied">Bekijk alle locaties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            Klaar om jouw IT-probleem op te lossen?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" asChild className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a
                href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp ons nu
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
