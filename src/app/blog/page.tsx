import type { Metadata } from "next";
import { BlogSection } from "@/components/BlogSection";
import { BreadcrumbTrail } from "@/components/BreadcrumbTrail";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | InstantIT - Tips en Advies",
  description:
    "Lees onze blog over cybersecurity, WiFi optimalisatie en computer onderhoud. Praktische tips van IT-experts.",
  keywords: [
    "blog",
    "cybersecurity tips",
    "wifi optimalisatie",
    "computer onderhoud",
    "IT advies",
  ],
  alternates: {
    canonical: "https://www.instantit.nl/blog",
  },
};

export default function BlogPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            InstantIT Blog
          </h1>
          <p className="text-foreground/70 text-base md:text-lg mb-8">
            Praktische tips, advies en verdieping over cybersecurity, computeronderhoud en internetproblemen. Ontdek hoe je jezelf beter kunt beschermen.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat via WhatsApp
              </a>
            </Button>
            <Button asChild size="lg">
              <a href="tel:+31702119191">
                <Phone className="mr-2 h-4 w-4" />
                Bel 070 211 9191
              </a>
            </Button>
          </div>
        </div>
      </section>

      <BreadcrumbTrail items={breadcrumbItems} />

      {/* Blog Rotating Section */}
      <BlogSection />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Heb je meer hulp nodig?
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Ons team staat altijd klaar voor snelle ondersteuning. We helpen je graag met je computerprobleem of cyberveiligheid.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <a href="tel:+31702119191">
                <Phone className="mr-2 h-4 w-4" />
                Bel nu: 070 211 9191
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/31702119191" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp ons
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
