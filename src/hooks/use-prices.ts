"use client";

import { useMemo } from "react";

import { SITE_PRICING } from "@/config/site-pricing";

export function usePrices() {
  return useMemo(() => SITE_PRICING, []);
}
