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

export type SiteSettingsDocument = Pick<
  SitePricingConfig,
  "contact" | "ctas" | "floatingCallButton"
> & { pricingHero?: string | null };

export const PRICING_VARIANTS = {
  consumer: ["remote", "onsite", "emergency", "diagnosis"] as const,
  business: ["remote", "onsite", "emergency"] as const,
  security: ["incident"] as const,
  cyberApk: ["remote", "onsite", "businessRemote", "businessOnsite"] as const,
  extraServices: ["windowsMacReinstall", "fasterComputer", "antivirusSetup"] as const,
} as const;

export type PricingCategoryKey = keyof typeof PRICING_VARIANTS;
export type PricingVariantKey<K extends PricingCategoryKey> =
  (typeof PRICING_VARIANTS)[K][number];

type CategoryVariantMap = {
  [K in PricingCategoryKey]: {
    category: K;
    variant: PricingVariantKey<K>;
  };
}[PricingCategoryKey];

export type ServiceOfferingDocument = ServiceOffering & CategoryVariantMap;

export type PricingShape = {
  [K in PricingCategoryKey]: Record<PricingVariantKey<K>, ServiceOffering>;
};

export function createEmptyPricing(): PricingShape {
  const result: Partial<Record<PricingCategoryKey, Record<string, ServiceOffering>>> = {};

  (Object.keys(PRICING_VARIANTS) as PricingCategoryKey[]).forEach((category) => {
    result[category] = {};
  });

  return result as PricingShape;
}

export function mergeServicePricing(services: ServiceOfferingDocument[]): PricingShape {
  const pricing = createEmptyPricing();

  for (const service of services) {
    const { category, variant, ...data } = service;
    (pricing[category] as Record<string, ServiceOffering>)[variant] = data;
  }

  for (const category of Object.keys(PRICING_VARIANTS) as PricingCategoryKey[]) {
    for (const variant of PRICING_VARIANTS[category]) {
      const entry = pricing[category][variant];
      if (!entry) {
        throw new Error(`Missing service variant for ${category}.${variant}`);
      }
    }
  }

  return pricing;
}

export function createSitePricingConfig(
  settings: SiteSettingsDocument,
  services: ServiceOfferingDocument[],
): SitePricingConfig {
  return {
    contact: settings.contact,
    ctas: settings.ctas,
    floatingCallButton: settings.floatingCallButton ?? { hideOnRoutes: [] },
    pricing: mergeServicePricing(services),
  };
}
