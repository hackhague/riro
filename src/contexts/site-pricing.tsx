"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";

import type { SitePricingConfig } from "@/config/site-pricing";

const SitePricingContext = createContext<SitePricingConfig | null>(null);

type SitePricingProviderProps = {
  value: SitePricingConfig;
  children: ReactNode;
};

export function SitePricingProvider({ value, children }: SitePricingProviderProps) {
  return <SitePricingContext.Provider value={value}>{children}</SitePricingContext.Provider>;
}

export function useSitePricing() {
  const context = useContext(SitePricingContext);
  if (!context) {
    throw new Error("useSitePricing must be used within a SitePricingProvider");
  }

  return context;
}
