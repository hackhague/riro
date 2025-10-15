import type React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, Shield, CheckCircle, MessageCircle, Phone, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import AppointmentWizard from "@/components/AppointmentWizard";
import PartnersSection from "@/components/PartnersSection";
import heroImage from "@/assets/hero-technician.jpg";
import serviceComputer from "@/assets/service-computer.jpg";
import serviceHack from "@/assets/service-hack.jpg";
import serviceWifi from "@/assets/service-wifi.jpg";

export default function Home() {
  const services = [
    {
      title: "Computerhulp aan huis",
      description:
        "Problemen met een desktop of laptop? Onze monteur komt bij u thuis of op kantoor, repareert hardware & software en legt alles duidelijk uit. Vaste tarieven, gratis nazorg.",
      image: serviceComputer,
      link: "/computerhulp",
    },
    {
      title: "Computerhulp op afstand",
      description:
        "Direct hulp via beveiligde schermdeling: snel computerhulp, updates, virusverwijdering en computer sneller maken.",
      image: serviceComputer,
      link: "/computerhulp-op-afstand",
    },
    {
      title: "Gehackt? Herstel & beveiliging",
      description:
        "Gehackt of ransomware-verdacht? We stoppen de aanval, herstellen toegang, verwijderen malware en zetten extra bescherming (bijv. 2FA) in.",
      image: serviceHack,
      link: "/ik-ben-gehackt",
    },
    {
      title: "WiFi & Netwerk optimalisatie",
      description:
        "Slechte wifi of dode zones? We ontwerpen en installeren mesh-oplossingen, optimaliseren je routerinstellingen en verbeteren netwerkbeveiliging voor thuis of kantoor.",
      image: serviceWifi,
      link: "/wifi",
    },
  ];

  const usps = [
    {
      icon: Clock,
      title: "Snel & lokaal",
      description: "Reactie binnen 10–30 min; op locatie meestal binnen 24 uur in Haaglanden.",
    },
    {
      icon: Shield,
      title: "Betrouwbare specialisten",
      description: "Gescreend en minimaal 5+ jaar ervaring van onze opgeleide IT-Specialisten.",
    },
    {
      icon: Zap,
      title: "Cyber-expertise",
      description: "Herstel bij hacks, accounntherstel en beveiligingsadvies.",
    },
    {
      icon: CheckCircle,
      title: "Transparante tarieven & nazorg",
      description: "Vaste tarieven, geen verrassingen. Gratis herbeoordeling binnen 7 dagen.",
    },
    {
      icon: Star,
      title: "Regionaal actief",
      description: "Direct inzetbaar in Den Haag, Delft, Zoetermeer, Rijswijk & omgeving.",
    },
  ];

  const pricing = [
    { name: "Computerhulp op afstand", price: "€39 / 30 min" },
    { name: "Aan huis", price: "€65 / uur", cap: "Geen voorrijkosten in Haaglanden (min. 1 uur)" },
    { name: "Hacklijn op afstand", price: "€50 / 30 min" },
    { name: "Spoed op locatie", price: "Neem contact op", },
  ];

  const steps = [
    { number: "1", text: "Bel of WhatsApp - we reageren binnen 10-30 minuten" },
    { number: "2", text: "Korte intake - we vragen wat er aan de hand is." },
    { number: "3", text: "Oplossing & uitleg - op afstand of op locatie, we leggen uit wat we doen" },
    { number: "4", text: "Nazorg - 7 dagen gratis nazorg (30 min, op afstand)" },
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
    <div className="max-w-[600px] py-10 md:py-16">
      <h1 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-white mb-2 md:mb-3">
      Computerhulp nodig, of gehackt? Wij lossen het snel voor je op!

      </h1>

      <h2 className="font-heading font-semibold text-sm md:text-base lg:text-lg leading-snug text-white/95 mb-4 md:mb-5">
        24/7 computerhulp in <strong>Den Haag</strong>, <strong>Rotterdam</strong>, <strong>Delft</strong>, <strong>Zoetermeer</strong> en omgeving.
      </h2>

      {/* Compacte bullets ipv lange paragraaf */}
      <ul className="space-y-2 text-xs md:text-sm text-white/85 mb-4 md:mb-6">
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-accent">•</span>
          <span><strong>InstantIT</strong> — lokale IT-professional voor computerstoringen, hackondersteuning en WiFi-verbetering.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-0.5 text-accent">•</span>
          <span><strong>Binnen</strong> 10-30 minuten reactie — <strong>meestal dezelfde dag nog op locatie</strong>.</span>
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

        {/*<Button
          asChild
          className="sm:ml-2 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold bg-white text-accent ring-2 ring-accent shadow-lg hover:shadow-xl hover:bg-white/95 focus-visible:ring-4"
        >
          <Link to="/ik-ben-gehackt">
            <Zap className="h-4 w-4" />
            Spoedhulp 24/7
          </Link>
        </Button>*/}
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
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white">VOG & Verzekerd</span>
              </div>
                            <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white">10+ jaar ervaring</span>
              </div>
                            <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-white">Geen voorrijkosten (Haaglanden)</span>
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
         <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Waarom kiezen voor InstantIT?</h2>
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
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${
                  index < steps.length - 1
                    ? "md:after:content-[''] md:after:absolute md:after:top-10 md:after:left-1/2 md:after:ml-8 md:after:h-px md:after:w-[calc(100%+1.5rem)] md:after:bg-primary/20 md:before:content-[''] md:before:absolute md:before:top-[38px] md:before:right-[-10px] md:before:w-2 md:before:h-2 md:before:bg-primary/30 md:before:rounded-full"
                    : ""
                }`}
              >
                <Card className="shadow-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl md:text-2xl font-bold text-primary-foreground">{step.number}</span>
                    </div>
                    <h3 className="font-heading font-semibold">{step.text}</h3>
                  </CardContent>
                </Card>
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
      <section className="py-12 md:py-16 bg-secondary">
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
      <section className="py-12 md:py-16">
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

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Veelgestelde vragen</h2>
              <p className="text-foreground/80">
                Hier vind je korte en duidelijke antwoorden op de meestgestelde vragen over computerhulp, virus- en
                malwareproblemen, netwerk- &amp; WiFi-storingen en cyberhulp. Staat jouw vraag er niet bij?
                Bel ons op <a className="font-semibold underline" href="tel:+31702119191">070 211 9191</a> of stuur een bericht
                via <a className="font-semibold underline" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">WhatsApp</a> — we helpen je direct.
              </p>
            </div>

            <div>
              <div className="rounded-lg border bg-background">
                <div className="divide-y">
                  {/* Q1 */}
                  <details open>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Hoe snel helpen jullie bij spoed?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>We reageren meestal binnen 10–30 minuten via remote. Bij spoed kunnen we vaak dezelfde dag op locatie zijn.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="tel:+31702119191">Bel nu</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">WhatsApp direct</a>
                      </div>
                    </div>
                  </details>

                  {/* Q2 */}
                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Wat kost Computerhulp op Afstand?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>Een remote QuickFix begint bij €39 voor 30 minuten (incl. btw). Je ziet altijd de prijs voordat we starten.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/tarieven">Bekijk prijzen</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">Start remote hulp</a>
                      </div>
                    </div>
                  </details>

                  {/* Q3 */}
                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Is remote toegang veilig?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>Ja — we gebruiken versleutelde tools en vragen altijd jouw toestemming voordat we meekijken. We delen je gegevens niet met derden.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/hulp-op-afstand">Lees meer over veiligheid</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">Start remote</a>
                      </div>
                    </div>
                  </details>

                  {/* Q4 */}
                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Wat als jullie het niet kunnen oplossen?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>Dan geven we duidelijk advies zonder verborgen kosten. Indien nodig krijg je een gratis herbeoordeling binnen 7 dagen.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/contact">Vraag gratis herbeoordeling aan</a>
                      </div>
                    </div>
                  </details>

                  {/* Q5 */}
                  <details>
                    <summary className="cursor-pointer list-none px-4 py-3 font-medium flex items-center justify-between">
                      <span>Hoe kan ik het snelst een afspraak maken?</span>
                      <svg className="h-4 w-4 ml-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-sm text-foreground/80 space-y-3">
                      <p>Het snelst is bellen of WhatsAppen — dat kost bijna geen tijd en we plannen meteen een korte intake. Je kunt ook via het afspraakformulier boeken.</p>
                      <div className="flex flex-wrap gap-2">
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/90" href="tel:+31702119191">Bel nu</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">WhatsApp nu</a>
                        <a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium border border-primary text-primary hover:bg-primary hover:text-primary-foreground" href="/afspraak">Plan afspraak</a>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersSection />

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
