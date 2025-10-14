import type React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, Shield, CheckCircle, MessageCircle, Phone, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import AppointmentWizard from "@/components/AppointmentWizard";
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
      description: "We kijken direct met je mee; bij spoed komen we langs. Veilig herstel en opschonen.",
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
      description: "Op afstand in 10–30 min, meestal binnen 2 uur aan de deur (Haaglanden).",
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
    { number: "2", text: "Gratis korte intake" },
    { number: "3", text: "Op afstand oplossen of aan huis binnen 24u" },
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
{/* Hero Section - drop-in vervanging */}
<section className="relative flex items-center overflow-hidden">
  {/* Background Image + donkere overlay */}
  <div className="absolute inset-0 z-0">
    <img
      src={heroImage}
      alt="InstantIT monteur helpt klant met computerhulp aan huis in Den Haag"
      className="w-full h-full object-cover object-right"
      loading="eager"
      {...({ fetchpriority: "high" } as React.HTMLAttributes<HTMLImageElement>)}
    />
    {/* Donkere overlay: sterker contrast links zodat tekst altijd leesbaar blijft */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,6,23,0.88) 0%, rgba(2,6,23,0.72) 35%, rgba(2,6,23,0.4) 70%, rgba(2,6,23,0.12) 100%)"
      }}
      aria-hidden="true"
    />
  </div>

  {/* Content (ongewijzigde componenten: Buttons/Link etc blijven werken) */}
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-[680px] py-10 md:py-16">
      <h1 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-white mb-2 md:mb-3">
      Computerproblemen of gehackt? Wij lossen het snel voor je op — veilig en zonder verrassingen.

      </h1>

      <h2 className="font-heading font-semibold text-sm md:text-base lg:text-lg leading-snug text-white/95 mb-4 md:mb-5">
        24/7 inzetbaar in <strong>Den Haag</strong>, <strong>Rotterdam</strong>, <strong>Delft</strong>, <strong>Zoetermeer</strong> en Zuid-Holland
      </h2>

      {/* Compacte bullets ipv lange paragraaf */}
      <ul className="space-y-2 text-xs md:text-sm text-white/85 mb-4 md:mb-6">
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-accent">•</span>
          <span><strong>InstantIT</strong> — lokale IT-professional voor computerstoringen, cyberondersteuning en WiFi-verbetering.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-accent">•</span>
          <span><strong>Reactie</strong> 60 minuten— <strong>meestal binnen 24 uur op locatie</strong>.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-accent">•</span>
          <span>Vaste tarieven — geen verrassingen. Altijd gratis nazorg.</span>
        </li>
      </ul>

      {/* CTA Buttons — gebruik jouw Button component zoals eerder */}
      <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
        <Button variant="outline" size="default" asChild className="bg-white text-black border border-white shadow-none hover:shadow-none h-10 md:h-10 font-normal">
          <a
            href="https://wa.me/31702119191?text=Hallo%20InstantIT%2C%20ik%20heb%20hulp%20nodig%20met"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Chat via WhatsApp
          </a>
        </Button>

        <Button variant="accent" size="default" asChild>
          <a href="tel:+31702119191">
            <Phone className="h-4 w-4" />
            Computerstoring? Bel 070 211 9191
          </a>
        </Button>

        <Button variant="outline" size="default" asChild className="sm:ml-2">
          <Link to="/ik-ben-gehackt">
            <Zap className="h-4 w-4" />
            Spoedhulp 24/7
          </Link>
        </Button>
      </div>

      {/* Trust badges (compact) */}
      <div className="flex flex-wrap gap-3 items-center text-xs md:text-sm text-foreground/70">
        <div className="flex items-center gap-1.5">
          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-white">Lokale hulp binnen 24u</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-white">24/7 spoedlijn</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
          <span className="text-white">Vaste tarieven</span>
              </div>
              <div className="flex items-center gap-2 ml-1 w-full text-white">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-semibold">4.9/5</span>
                <span className="ml-1">• 1.100+ opdrachten</span>
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
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="outline" asChild>
              <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2"/>WhatsApp</a>
            </Button>
            <Button variant="accent" asChild>
              <a href="tel:+31702119191"><Phone className="mr-2"/>Bel nu</a>
            </Button>
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
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="outline" asChild>
            <a href="/afspraak">Plan een afspraak</a>
          </Button>
          <Button variant="accent" asChild>
            <a href="tel:+31702119191"><Phone className="mr-2"/>Bel nu</a>
          </Button>
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
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="outline" asChild>
            <a href="/afspraak">Plan een afspraak</a>
          </Button>
          <Button variant="accent" asChild>
            <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2"/>WhatsApp</a>
          </Button>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <AppointmentWizard />
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
