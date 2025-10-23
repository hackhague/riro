import { useMemo } from "react";

import pricesConfigData from "../config/prices.json";
import holidaysData from "../config/holidays.json";
import type {
  Audience,
  Holiday,
  PricesConfig,
  RateDetail,
  SurchargeOptions,
  SurchargeResult,
} from "../types/prices";

interface PriceUtils {
  currency: string;
  services: PricesConfig["services"];
  bundles: PricesConfig["bundles"];
  spoedFees: PricesConfig["spoedFees"];
  holidays: Holiday[];
  getService: (id: string) => PricesConfig["services"][number] | undefined;
  getRate: (serviceId: string, audience: Audience) => RateDetail | undefined;
  getSpoedFee: (spoedId: string) => PricesConfig["spoedFees"][number] | undefined;
  getAudienceLabel: (audience: Audience) => string;
  formatPrice: (amount: number, options?: { currency?: string }) => string;
  getDisplayPrice: (serviceId: string, audience: Audience) => string | undefined;
  isHoliday: (date: Date) => boolean;
  isWeekend: (date: Date) => boolean;
  calculateSurcharge: (options: SurchargeOptions) => SurchargeResult;
}

const pricesConfig = pricesConfigData as PricesConfig;
const holidayConfig = holidaysData as Holiday[];

const ISO_DATE_LENGTH = 10;

const toISODate = (date: Date): string => date.toISOString().slice(0, ISO_DATE_LENGTH);

const formatCurrency = (amount: number, currency: string) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);

export const createPriceUtils = (config: PricesConfig, holidayList: Holiday[]): PriceUtils => {
  const servicesById = new Map(config.services.map((service) => [service.id, service]));
  const spoedById = new Map(config.spoedFees.map((fee) => [fee.id, fee]));
  const holidaySet = new Set(holidayList.map((holiday) => holiday.date));

  const getService: PriceUtils["getService"] = (id) => servicesById.get(id);

  const getRate: PriceUtils["getRate"] = (serviceId, audience) => {
    const service = getService(serviceId);
    if (!service) {
      return undefined;
    }

    return service[audience];
  };

  const getSpoedFee: PriceUtils["getSpoedFee"] = (spoedId) => spoedById.get(spoedId);

  const getAudienceLabel: PriceUtils["getAudienceLabel"] = (audience) =>
    audience === "consumer" ? "incl. btw" : "excl. btw";

  const formatPrice: PriceUtils["formatPrice"] = (amount, options) =>
    formatCurrency(amount, options?.currency ?? config.currency);

  const getDisplayPrice: PriceUtils["getDisplayPrice"] = (serviceId, audience) => {
    const rate = getRate(serviceId, audience);
    if (!rate) {
      return undefined;
    }

    return `${formatPrice(rate.amount)} ${getAudienceLabel(audience)}`;
  };

  const isHoliday: PriceUtils["isHoliday"] = (date) => holidaySet.has(toISODate(date));

  const isWeekend: PriceUtils["isWeekend"] = (date) => {
    const day = date.getUTCDay();
    return day === 0 || day === 6;
  };

  const calculateSurcharge: PriceUtils["calculateSurcharge"] = ({
    baseAmount,
    audience,
    spoedFeeId,
    date,
    weekendMultiplier = 0,
    holidayMultiplier = 0,
  }) => {
    const components: SurchargeResult["components"] = [
      {
        label: "base",
        amount: baseAmount,
        applied: true,
      },
    ];

    let total = baseAmount;
    let appliedSpoed = undefined as ReturnType<typeof getSpoedFee>;

    if (spoedFeeId) {
      const fee = getSpoedFee(spoedFeeId);
      if (fee && fee.audience === audience) {
        total += fee.amount;
        components.push({
          label: "spoed",
          amount: fee.amount,
          applied: true,
          notes: fee.description,
        });
        appliedSpoed = fee;
      } else {
        components.push({
          label: "spoed",
          amount: 0,
          applied: false,
          notes: fee ? "Audience mismatch" : "Spoedfee niet gevonden",
        });
      }
    }

    const weekendApplied = Boolean(date && isWeekend(date));
    const holidayApplied = Boolean(date && isHoliday(date));

    if (weekendApplied) {
      const weekendAmount = weekendMultiplier ? baseAmount * weekendMultiplier : 0;
      total += weekendAmount;
      components.push({
        label: "weekend",
        amount: weekendAmount,
        applied: weekendMultiplier > 0,
        notes: weekendMultiplier > 0 ? `Weekend toeslag ${weekendMultiplier * 100}%` : "Nog geen weekendtoeslag ingesteld",
      });
    }

    if (holidayApplied) {
      const holidayAmount = holidayMultiplier ? baseAmount * holidayMultiplier : 0;
      total += holidayAmount;
      components.push({
        label: "holiday",
        amount: holidayAmount,
        applied: holidayMultiplier > 0,
        notes: holidayMultiplier > 0 ? `Feestdag toeslag ${holidayMultiplier * 100}%` : "Nog geen feestdagtoeslag ingesteld",
      });
    }

    const result: SurchargeResult = {
      total,
      components,
      context: {
        isWeekend: weekendApplied,
        isHoliday: holidayApplied,
        holidayDate: holidayApplied && date ? toISODate(date) : undefined,
        spoedFee: appliedSpoed,
      },
    };

    return result;
  };

  return {
    currency: config.currency,
    services: config.services,
    bundles: config.bundles,
    spoedFees: config.spoedFees,
    holidays: holidayList,
    getService,
    getRate,
    getSpoedFee,
    getAudienceLabel,
    formatPrice,
    getDisplayPrice,
    isHoliday,
    isWeekend,
    calculateSurcharge,
  };
};

export const usePrices = (): PriceUtils =>
  useMemo(() => createPriceUtils(pricesConfig, holidayConfig), []);

export default usePrices;
