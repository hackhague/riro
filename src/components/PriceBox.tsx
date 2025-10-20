import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRICE_TIERS, type PriceTierId } from "@/data/pricing";

interface PriceBoxProps {
  tierIds: PriceTierId[];
}

export function PriceBox({ tierIds }: PriceBoxProps) {
  const tiers = tierIds
    .map((id) => PRICE_TIERS[id])
    .filter((tier): tier is (typeof PRICE_TIERS)[keyof typeof PRICE_TIERS] => Boolean(tier));

  if (!tiers.length) {
    return null;
  }

  return (
    <Card className="border-primary/30 bg-background/90 shadow-lg shadow-primary/10 backdrop-blur">
      <CardContent className="p-6 space-y-5">
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground">Transparante tarieven</h3>
          <p className="text-sm text-foreground/60">Altijd vooraf duidelijk wat je betaalt.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-lg border border-primary/20 bg-secondary/40 p-4 text-sm text-foreground shadow-sm"
            >
              <p className="font-semibold text-primary uppercase tracking-wide text-xs mb-1">{tier.label}</p>
              <p className="text-2xl font-bold text-foreground mb-1">{tier.price}</p>
              <p className="text-foreground/70 text-xs leading-5 mb-3">{tier.subline}</p>
              <Link
                href={tier.href}
                className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary/80"
              >
                Meer info
              </Link>
            </div>
          ))}
        </div>
        <Button variant="ghost" asChild className="w-full sm:w-auto">
          <Link href="/tarieven">Bekijk alle tarieven</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
