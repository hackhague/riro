import { useEffect, useMemo, useState } from "react";

const PARTNERS = [
  { name: "Microsoft (365)" },
  { name: "Apple" },
  { name: "Dell" },
  { name: "HP" },
  { name: "Ubiquiti" },
  { name: "Esset" },
  { name: "BitDefender" },
  { name: "Synology" },
  { name: "Anydesk" },
  { name: "Ziggo" },
  { name: "KPN" },


];

function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
}

export default function PartnersSection() {
  const [page, setPage] = useState(0);
  const pages = useMemo(() => chunk(PARTNERS, 6), []);

  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pages.length);
    }, 10000);
    return () => clearInterval(id);
  }, [pages.length]);

  return (
    <section className="py-8 md:py-10 overflow-hidden">
      <div className="container mx-auto px-4 text-center overflow-hidden">
        <p className="text-sm text-muted-foreground mb-6">Wij werken samen met</p>
        <div className="relative h-12">
          {pages.map((items, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${idx === page ? "opacity-100" : "opacity-0"}`}
              aria-hidden={idx !== page}
            >
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 px-1">
                {items.map((p) => (
                  <span
                    key={p.name}
                    className="text-base md:text-xl font-semibold text-foreground/60 select-none"
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
