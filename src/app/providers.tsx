"use client";

import type { ReactNode } from "react";

import { SitePricingProvider } from "@/contexts/site-pricing";
import type { SitePricingConfig } from "@/config/site-pricing";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import { CtaAnalyticsListener } from "@/components/CtaAnalyticsListener";

type ProvidersProps = {
  children: ReactNode;
  sitePricing: SitePricingConfig;
};

export function Providers({ children, sitePricing }: ProvidersProps) {
  return (
    <SitePricingProvider value={sitePricing}>
      <TooltipProvider delayDuration={150}>
        <CtaAnalyticsListener />
        {children}
      </TooltipProvider>
      <Toaster />
      <Sonner />
    </SitePricingProvider>
  );
}
