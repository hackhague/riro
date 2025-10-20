export type Audience = "consumer" | "business";

export interface RateOverage {
  amount: number;
  includesVat: boolean;
  per: string;
  notes?: string;
}

export interface RateDetail {
  amount: number;
  unit: string;
  includesVat: boolean;
  minimumMinutes?: number;
  cap?: number;
  overage?: RateOverage;
  notes?: string;
}

export interface ServicePricing {
  id: string;
  name: string;
  category: string;
  description?: string;
  consumer?: RateDetail;
  business?: RateDetail;
  tags?: string[];
}

export interface BundlePricing {
  id: string;
  name: string;
  amount: number;
  includesVat: boolean;
  description?: string;
}

export interface SpoedFee {
  id: string;
  audience: Audience;
  amount: number;
  includesVat: boolean;
  description: string;
  appliesTo?: string[];
}

export interface PricesConfig {
  currency: string;
  updatedAt: string;
  services: ServicePricing[];
  bundles: BundlePricing[];
  spoedFees: SpoedFee[];
}

export interface Holiday {
  date: string;
  name: string;
}

export interface SurchargeComponent {
  label: string;
  amount: number;
  applied: boolean;
  notes?: string;
}

export interface SurchargeContext {
  isWeekend: boolean;
  isHoliday: boolean;
  holidayDate?: string;
  spoedFee?: SpoedFee;
}

export interface SurchargeResult {
  total: number;
  components: SurchargeComponent[];
  context: SurchargeContext;
}

export interface SurchargeOptions {
  baseAmount: number;
  audience: Audience;
  spoedFeeId?: string;
  date?: Date;
  weekendMultiplier?: number;
  holidayMultiplier?: number;
}
