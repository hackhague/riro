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
    cyberApk: {
      remote: ServiceOffering;
      onsite: ServiceOffering;
      businessRemote: ServiceOffering;
      businessOnsite: ServiceOffering;
    };
    extraServices: {
      windowsMacReinstall: ServiceOffering;
      fasterComputer: ServiceOffering;
      antivirusSetup: ServiceOffering;
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
        summary: "Snelle ondersteuning via een beveiligde schermdeling. Maximum tarief €129.",
        bookingSummary: "Op afstand via beveiligde schermdeling – voordelig en snel.",
        price: {
          amount: 35,
          currency: "EUR",
          display: "€35",
          unit: "Eerste 30 min",
          extra: "Daarna €15 per 15 min (max €129)",
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
          amount: 52,
          currency: "EUR",
          display: "€52",
          unit: "Eerste 45 min",
          extra: "Daarna €15,00 per 15 min",
        },
      },
      emergency: {
        id: "consumer-emergency",
        label: "Computer-spoedhulp aan huis",
        shortLabel: "Spoed aan huis",
        location: "aan huis",
        tagline: "Aan huis • spoed binnen 24 uur*",
        summary: "Prioritaire inzet voor urgente storingen. Wij bellen direct voor triage.",
        bookingSummary: "Spoed op locatie – eerste uur inclusief, daarna tarief per kwartier.",
        price: {
          amount: 89,
          currency: "EUR",
          display: "€89",
          unit: "Eerste uur",
          extra: "Daarna €20 per 15 min",
        },
      },
      diagnosis: {
        id: "consumer-diagnosis",
        label: "Diagnose bij geen oplossing",
        shortLabel: "Diagnose",
        location: "hybride",
        tagline: "Alleen bij niet-opgeloste storingen",
        summary: "Wanneer we een probleem niet kunnen oplossen binnen de afgesproken tijd, betaal je alleen €19 diagnosevergoeding.",
        bookingSummary: "Niet opgelost? Enkel diagnosevergoeding: €19.",
        price: {
          amount: 19,
          currency: "EUR",
          display: "€19",
          unit: "Diagnosevergoeding",
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
        summary: "Versleutelde op afstand sessies voor werkplekken en servers. Excl. btw.",
        bookingSummary: "Op afstand ondersteuning (ex btw) – snelle triage via beveiligde verbinding.",
        price: {
          amount: 37.5,
          currency: "EUR",
          display: "€37,50",
          unit: "Eerste 30 min",
          extra: "Daarna €18,75 per 15 min (ex btw)",
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
          amount: 129,
          currency: "EUR",
          display: "€129",
          unit: "Eerste uur",
          extra: "Daarna €25 per 15 min",
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
    cyberApk: {
      remote: {
        id: "consumer-cyber-apk-remote",
        label: "Veiligheidscheck (Cyber-APK) op afstand",
        shortLabel: "Cyber-APK op afstand",
        location: "op afstand",
        tagline: "Digitale veiligheidscheck op afstand",
        summary: "Preventieve veiligheidscheck met updates, backup en 2FA-setup. 50% korting bij boeking met andere dienst.",
        bookingSummary: "Digitale veiligheidscheck op afstand – Normaal €79, nu €39,50 bij meeboeken.",
        price: {
          amount: 79,
          currency: "EUR",
          display: "€79",
          unit: "Vaste prijs",
          extra: "50% korting bij meeboeken: €39,50",
        },
      },
      onsite: {
        id: "consumer-cyber-apk-onsite",
        label: "Veiligheidscheck (Cyber-APK) aan huis",
        shortLabel: "Cyber-APK thuis",
        location: "aan huis",
        tagline: "Veiligheidscheck aan huis met netwerk en wifi check",
        summary: "Netwerk, wifi en endpoint-check op locatie inclusief rapport. 50% korting bij boeking met andere dienst.",
        bookingSummary: "Veiligheidscheck aan huis – Normaal €79, nu €39,50 bij meeboeken.",
        price: {
          amount: 79,
          currency: "EUR",
          display: "€79",
          unit: "Vaste prijs",
          extra: "50% korting bij meeboeken: €39,50",
        },
      },
      businessRemote: {
        id: "business-cyber-apk-remote",
        label: "Veiligheidscheck (Cyber-APK) op afstand zakelijk",
        shortLabel: "Cyber-APK zakelijk op afstand",
        location: "op afstand",
        tagline: "Digitale veiligheidscheck op afstand voor bedrijven",
        summary: "Preventieve veiligheidscheck met updates, backup en 2FA-setup. 50% korting bij boeking met andere dienst (ex btw).",
        bookingSummary: "Digitale veiligheidscheck op afstand – Normaal €299 ex btw, nu €149,50 bij meeboeken.",
        price: {
          amount: 299,
          currency: "EUR",
          display: "€299",
          unit: "Vaste prijs",
          extra: "50% korting bij meeboeken: €149,50 (ex btw)",
          exVat: true,
        },
      },
      businessOnsite: {
        id: "business-cyber-apk-onsite",
        label: "Veiligheidscheck (Cyber-APK) op kantoor zakelijk",
        shortLabel: "Cyber-APK zakelijk kantoor",
        location: "op kantoor",
        tagline: "Veiligheidscheck op kantoor voor bedrijven",
        summary: "Netwerk, wifi en endpoint-check op locatie inclusief rapport (ex btw). 50% korting bij boeking met andere dienst.",
        bookingSummary: "Veiligheidscheck op kantoor – Normaal €449 ex btw, nu €224,50 bij meeboeken.",
        price: {
          amount: 449,
          currency: "EUR",
          display: "€449",
          unit: "Vaste prijs",
          extra: "50% korting bij meeboeken: €224,50 (ex btw)",
          exVat: true,
        },
      },
    },
    extraServices: {
      windowsMacReinstall: {
        id: "windows-mac-reinstall",
        label: "Windows/Mac herinstallatie",
        shortLabel: "OS herinstallatie",
        location: "aan huis",
        tagline: "Volledige besturingssysteem herinstallatie",
        summary: "Professionele herinstallatie van Windows of macOS met back-up van gegevens en updates.",
        bookingSummary: "Windows: €99 | Mac: €119 (indien eerder gebruikt).",
        price: {
          amount: 99,
          currency: "EUR",
          display: "€99",
          unit: "Windows of Mac",
          extra: "Mac €119 indien eerder gebruikt",
        },
      },
      fasterComputer: {
        id: "faster-computer",
        label: "Computer sneller maken met nieuwe schijf",
        shortLabel: "SSD upgrade",
        location: "aan huis",
        tagline: "Snelheidsupgrade met nieuwe schijf en onderdelen",
        summary: "Vervang oude mechanische schijf door snelle SSD. Inclusief installatie en datamigr atie.",
        bookingSummary: "Installatie v.a. €119 + onderdeel (SSD €80–150 afhankelijk van capaciteit).",
        price: {
          amount: 119,
          currency: "EUR",
          display: "€119",
          unit: "v.a. arbeidskosten",
          extra: "+ onderdeel v.a. €80",
        },
      },
      antivirusSetup: {
        id: "antivirus-setup",
        label: "Antivirus + basisbeveiliging (2 apparaten)",
        shortLabel: "Antivirus setup",
        location: "hybride",
        tagline: "Antivirus en basisbeveiliging setup",
        summary: "Professionele antivirus installatie en basisbeveiliging voor 2 apparaten. Extra apparaten +€15 per stuk.",
        bookingSummary: "€79 voor 2 apparaten | +€15 per extra apparaat.",
        price: {
          amount: 50,
          currency: "EUR",
          display: "€50",
          unit: "2 apparaten",
          extra: "+€15 per extra apparaat",
        },
      },
    },
  },
};

export type PricingLookup = typeof SITE_PRICING;
