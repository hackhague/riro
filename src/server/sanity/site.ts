import "server-only";

import { cache } from "react";

import {
  createSitePricingConfig,
  type ServiceOfferingDocument,
  type SitePricingConfig,
  type SiteSettingsDocument,
} from "@/config/site-pricing";
import { sanityFetch } from "@/lib/sanity";

type SiteSettingsQueryResult = SiteSettingsDocument | null;

type ServiceQueryResult = Array<
  {
    serviceId: string;
    label: string;
    shortLabel: string;
    category: ServiceOfferingDocument["category"];
    variant: ServiceOfferingDocument["variant"];
    location: ServiceOfferingDocument["location"];
    tagline: string;
    summary: string;
    bookingSummary: string;
    price: ServiceOfferingDocument["price"] & { amount?: number | null };
  }
>;

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  contact,
  ctas,
  floatingCallButton,
}`;

const SERVICES_QUERY = `*[_type == "serviceOffering"] | order(order asc, label asc) {
  serviceId,
  label,
  shortLabel,
  category,
  variant,
  location,
  tagline,
  summary,
  bookingSummary,
  price,
}`;

const DEFAULT_REVALIDATE_SECONDS = 300;

export const getSiteSettings = cache(async (): Promise<SiteSettingsDocument> => {
  const settings = await sanityFetch<SiteSettingsQueryResult>({
    query: SITE_SETTINGS_QUERY,
    revalidate: DEFAULT_REVALIDATE_SECONDS,
    tags: ["sanity.siteSettings"],
  });

  if (!settings) {
    throw new Error("Sanity site settings document is missing");
  }

  return {
    ...settings,
    floatingCallButton: settings.floatingCallButton ?? { hideOnRoutes: [] },
  };
});

export const getServiceOfferings = cache(async (): Promise<ServiceOfferingDocument[]> => {
  const services = await sanityFetch<ServiceQueryResult>({
    query: SERVICES_QUERY,
    revalidate: DEFAULT_REVALIDATE_SECONDS,
    tags: ["sanity.services"],
  });

  return services.map((service) => ({
    id: service.serviceId,
    label: service.label,
    shortLabel: service.shortLabel,
    category: service.category,
    variant: service.variant,
    location: service.location,
    tagline: service.tagline,
    summary: service.summary,
    bookingSummary: service.bookingSummary,
    price: {
      ...service.price,
      amount: service.price.amount ?? null,
    },
  }));
});

export const getSitePricingConfig = cache(async (): Promise<SitePricingConfig> => {
  const [settings, services] = await Promise.all([getSiteSettings(), getServiceOfferings()]);
  return createSitePricingConfig(settings, services);
});
