import { Link } from "react-router-dom";
import { Star, Clock, Shield, CheckCircle, MessageCircle, Phone, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    { number: "1", text: "App of bel" },
    { number: "2", text: "Gratis korte triage" },
    { number: "3", text: "Remote fix of on-site binnen 2u" },
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
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Video/Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt="Piet - Digitale IT-monteur van InstantIT"
                  className="w-full h-auto"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
              </div>
            </div>

            {/* Right: Content & CTAs */}
            <div className="order-1 md:order-2">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
                Computerhulp & Cyberhulp in Den Haag
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-6">
                Jouw Digitale Eerste Hulp – binnen 10–30 min reactie, meestal binnen 2 uur op locatie. Vaste prijzen,
                gratis nazorg.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button variant="whatsapp" size="lg" asChild className="flex-1 sm:flex-initial">
                  <a
                    href="https://wa.me/31702119191?text=Hallo%2C%20ik%20heb%20hulp%20nodig%20met"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" />
                    WhatsApp ons nu – snelste reactie
                  </a>
                </Button>
                <Button variant="accent" size="lg" asChild className="flex-1 sm:flex-initial">
                  <a href="tel:+31702119191">
                    <Phone className="mr-2" />
                    Bel 070 211 9191
                  </a>
                </Button>
              </div>

              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto mb-6">
                <Link to="/ik-ben-gehackt">
                  <Zap className="mr-2" />
                  Ik ben gehackt – Spoedhulp 24/7
                </Link>
              </Button>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Razendsnelle hulp, lokaal bij jou thuis of bedrijf</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Remote binnen enkele uren – ook spoedservice</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">24/7 spoedlijn voor hacks/ransomware</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Vaste tarieven, geen verrassingen</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">Niet opgelost? €19 diagnose, geen arbeidsloon</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">10+ jaar ervaring</span>
                </div>
              </div>

              {/* Micro-proof */}
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <div className="flex items-center gap-1 text-accent">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                </div>
                <span>|</span>
                <span>1.100+ opdrachten</span>
                <span>|</span>
                <span>VOG & verzekerd</span>
              </div>
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
            <Button variant="whatsapp" size="xl" asChild>
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
