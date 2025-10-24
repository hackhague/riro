"use client";

import { useSitePricing } from "@/contexts/site-pricing";

export function usePrices() {
  return useSitePricing();
}
