import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceBlock {
  title: string;
  href: string;
  image: string;
}

interface OtherServicesGridProps {
  serviceBlocks: ServiceBlock[];
  showCTA?: boolean;
}

export function OtherServicesGrid({ serviceBlocks, showCTA = true }: OtherServicesGridProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
          Andere diensten
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {serviceBlocks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative block overflow-hidden rounded-lg"
              aria-label={`${item.title} – Meer info`}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-end">
                <div className="w-full p-4 md:p-5">
                  <h3 className="font-heading text-white font-semibold text-lg md:text-xl drop-shadow-sm">
                    {item.title}
                  </h3>

                  <span
                    className="mt-2 inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1.5 text-xs
                                 font-medium text-white backdrop-blur ring-1 ring-white/30 transition-colors group-hover:bg-white/15"
                  >
                    Meer info
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>

              <span className="absolute inset-0 rounded-lg ring-0 ring-primary/0 focus:outline-none focus:ring-4 group-focus:ring-primary/40" />
            </Link>
          ))}
        </div>

        {showCTA && (
          <div className="mt-8 flex justify-center gap-3">
            <Button variant="accent" asChild>
              <Link href="/afspraak">Plan een afspraak</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+31702119191">Bel nu</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
