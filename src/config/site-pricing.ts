export type PriceDetail = {
  amount: number | null;
  currency: "EUR";
  display: string;
  unit?: string;
  extra?: string;
  exVat?: boolean;
};

export type ServiceOffering = {
  id: string;
  label: string;
  shortLabel: string;
  location: "op afstand" | "aan huis" | "op kantoor" | "hybride";
  tagline: string;
  summary: string;
  bookingSummary: string;
  price: PriceDetail;
};

export type SitePricingConfig = {
  contact: {
    phoneNumber: string;
    phoneHref: string;
    phoneLabel: string;
    phoneAriaLabel: string;
    shortCallLabel: string;
    whatsappHref: string;
    whatsappLabel: string;
    whatsappCta: string;
  };
  ctas: {
    planAppointment: string;
    callNow: string;
    callWithNumber: string;
    whatsapp: string;
  };
  floatingCallButton: {
    hideOnRoutes: string[];
  };
  pricing: {
    consumer: {
      remote: ServiceOffering;
      onsite: ServiceOffering;
      emergency: ServiceOffering;
      diagnosis: ServiceOffering;
    };
    business: {
      remote: ServiceOffering;
      onsite: ServiceOffering;
      emergency: ServiceOffering;
    };
    security: {
      incident: ServiceOffering;
    };
  };
};

export const SITE_PRICING: SitePricingConfig = {
  contact: {
    phoneNumber: "070 211 9191",
    phoneHref: "tel:+31702119191",
    phoneLabel: "Bel 070 211 9191",
    phoneAriaLabel: "Direct hulp nodig? Bel 070 211 9191",
    shortCallLabel: "Bel nu",
    whatsappHref: "https://wa.me/31702119191",
    whatsappLabel: "WhatsApp",
    whatsappCta: "App direct via WhatsApp",
  },
  ctas: {
    planAppointment: "Plan een afspraak",
    callNow: "Bel nu",
    callWithNumber: "Bel 070 211 9191",
    whatsapp: "WhatsApp",
  },
  floatingCallButton: {
    hideOnRoutes: ["/afspraak"],
  },
  pricing: {
    consumer: {
      remote: {
        id: "consumer-remote",
        label: "Computerhulp op afstand",
        shortLabel: "Hulp op afstand",
        location: "op afstand",
        tagline: "Op afstand • reactie binnen 10–30 minuten",
        summary: "Snelle ondersteuning via een beveiligde schermdeling. Geen voorrijkosten, maximum tarief €99.",
        bookingSummary: "Remote via beveiligde schermdeling – voordelig en snel.",
        price: {
          amount: 35,
          currency: "EUR",
          display: "€35",
          unit: "Eerste 30 min",
          extra: "Daarna €15 per 15 min (cap €99)",
        },
      },
      onsite: {
        id: "consumer-onsite",
        label: "Computerhulp aan huis",
        shortLabel: "Hulp aan huis",
        location: "aan huis",
        tagline: "Aan huis • afspraak binnen 48–72 uur",
        summary: "Grondige diagnose en herstel op uw locatie in Haaglanden. Geen voorrijkosten.",
        bookingSummary: "Bij u aan huis – eerste 45 minuten inbegrepen.",
        price: {
          amount: 59,
          currency: "EUR",
          display: "€59",
          unit: "Eerste 45 min",
          extra: "Daarna €17,25 per 15 min",
        },
      },
      emergency: {
        id: "consumer-emergency",
        label: "Computer-spoedhulp aan huis",
        shortLabel: "Spoed aan huis",
        location: "aan huis",
        tagline: "Aan huis • spoed binnen 24–48 uur",
        summary: "Prioritaire inzet voor urgente storingen. Wij bellen direct voor triage.",
        bookingSummary: "Spoed op locatie – eerste uur inclusief, daarna tarief per kwartier.",
        price: {
          amount: 89,
          currency: "EUR",
          display: "€89",
          unit: "Eerste uur",
          extra: "Daarna €19,50 per 15 min",
        },
      },
      diagnosis: {
        id: "consumer-diagnosis",
        label: "Diagnose bij geen oplossing",
        shortLabel: "Diagnose",
        location: "hybride",
        tagline: "Alleen bij niet-opgeloste storingen",
        summary: "Alleen te betalen wanneer een probleem niet binnen de afgesproken cap is opgelost.",
        bookingSummary: "Niet opgelost? U betaalt enkel €19 voor diagnose.",
        price: {
          amount: 19,
          currency: "EUR",
          display: "€19",
          unit: "Alleen bij geen oplossing",
        },
      },
    },
    business: {
      remote: {
        id: "business-remote",
        label: "IT-support op afstand",
        shortLabel: "Zakelijk op afstand",
        location: "op afstand",
        tagline: "Op afstand • SLA-respons binnen 10–30 minuten",
        summary: "Versleutelde remote sessies voor werkplekken en servers. Excl. btw.",
        bookingSummary: "Remote ondersteuning (ex btw) – snelle triage via beveiligde verbinding.",
        price: {
          amount: 35,
          currency: "EUR",
          display: "€35",
          unit: "Eerste 30 min",
          extra: "Daarna €17,50 per 15 min (ex btw)",
          exVat: true,
        },
      },
      onsite: {
        id: "business-onsite",
        label: "IT-support op kantoor",
        shortLabel: "Hulp op kantoor",
        location: "op kantoor",
        tagline: "Op kantoor • afspraak binnen 48–72 uur",
        summary: "Professionele ondersteuning op locatie, inclusief documentatie en nazorg.",
        bookingSummary: "Op kantoor – eerste uur inbegrepen, exclusief btw.",
        price: {
          amount: 79,
          currency: "EUR",
          display: "€79",
          unit: "Eerste uur",
          extra: "Daarna €20 per 15 min (ex btw)",
          exVat: true,
        },
      },
      emergency: {
        id: "business-emergency",
        label: "IT-spoedhulp op kantoor",
        shortLabel: "Spoed op kantoor",
        location: "op kantoor",
        tagline: "Op kantoor • spoed binnen 24–48 uur",
        summary: "Bedrijfskritische storingen met prioriteit. Direct telefonisch contact.",
        bookingSummary: "Spoed op kantoor – eerste uur inbegrepen, exclusief btw.",
        price: {
          amount: 89,
          currency: "EUR",
          display: "€89",
          unit: "Eerste uur",
          extra: "Daarna €19,50 per 15 min",
          exVat: true,
        },
      },
    },
    security: {
      incident: {
        id: "security-incident",
        label: "Cyberhulp & incident response",
        shortLabel: "Cyberhulp",
        location: "hybride",
        tagline: "24/7 beschikbaar • remote en op locatie",
        summary: "Forensics, hardening en herstel bij hacks of datalekken. Tarief op aanvraag.",
        bookingSummary: "Bel voor maatwerk – tarief afhankelijk van impact en inzet.",
        price: {
          amount: null,
          currency: "EUR",
          display: "Op aanvraag",
          unit: "24/7 beschikbaar",
        },
      },
    },
  },
};

export type PricingLookup = typeof SITE_PRICING;
