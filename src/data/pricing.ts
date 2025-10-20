export type PriceTier = {
  id: string;
  label: string;
  price: string;
  subline: string;
  href: string;
};

export const PRICE_TIERS = {
  remoteQuickFix: {
    id: "remoteQuickFix",
    label: "Remote QuickFix",
    price: "€39",
    subline: "Eerste 30 min • daarna €15 per 15 min (cap €99)",
    href: "/hulp-op-afstand",
  },
  homeVisit: {
    id: "homeVisit",
    label: "Computerhulp aan huis",
    price: "€59",
    subline: "Eerste 45 min • daarna €17,25 per 15 min",
    href: "/tarieven#aan-huis",
  },
  emergencyHacked: {
    id: "emergencyHacked",
    label: "Directe hulp bij gehackt",
    price: "€89",
    subline: "Eerste uur op locatie • 24/7 beschikbaar",
    href: "/ik-ben-gehackt",
  },
  hackedRemote: {
    id: "hackedRemote",
    label: "Remote directe hulp bij gehackt",
    price: "€149",
    subline: "Tot 60 min remote triage",
    href: "/ik-ben-gehackt",
  },
  hackedOnsite: {
    id: "hackedOnsite",
    label: "Spoed op locatie (particulier)",
    price: "€199",
    subline: "Tot 2 uur on-site herstel",
    href: "/ik-ben-gehackt",
  },
  hackedBusiness: {
    id: "hackedBusiness",
    label: "Spoed op locatie (zakelijk)",
    price: "€249",
    subline: "Tot 2 uur voor bedrijven",
    href: "/ik-ben-gehackt",
  },
  hackedFirstResponse: {
    id: "hackedFirstResponse",
    label: "First Response pakket",
    price: "€499",
    subline: "Zakelijk forensics tot 4 uur",
    href: "/ik-ben-gehackt",
  },
} satisfies Record<string, PriceTier>;

export type PriceTierId = keyof typeof PRICE_TIERS;
