import { describe, expect, it } from "vitest";

import holidaysJson from "../../config/holidays.json";
import pricesJson from "../../config/prices.json";
import { createPriceUtils } from "../usePrices";
import type { Holiday, PricesConfig } from "../../types/prices";

describe("createPriceUtils", () => {
  const prices = pricesJson as PricesConfig;
  const holidays = holidaysJson as Holiday[];
  const utils = createPriceUtils(prices, holidays);

  it("formats prices with euro currency", () => {
    expect(utils.formatPrice(39)).toBe(`€\u00a039,00`);
  });

  it("returns audience labels", () => {
    expect(utils.getAudienceLabel("consumer")).toBe("incl. btw");
    expect(utils.getAudienceLabel("business")).toBe("excl. btw");
  });

  it("looks up service rates per audience", () => {
    expect(utils.getRate("remote_support", "consumer")?.amount).toBe(39);
    expect(utils.getRate("remote_support", "business")?.amount).toBe(35);
  });

  it("provides formatted price labels", () => {
    expect(utils.getDisplayPrice("remote_support", "consumer")).toBe(`€\u00a039,00 incl. btw`);
  });

  it("calculates surcharge including spoed fees", () => {
    const result = utils.calculateSurcharge({
      baseAmount: 59,
      audience: "consumer",
      spoedFeeId: "consumer_on_site_spoed",
    });

    expect(result.total).toBeCloseTo(89);
    expect(result.components).toContainEqual(
      expect.objectContaining({ label: "spoed", amount: 30, applied: true }),
    );
  });

  it("marks weekend surcharges even without configured multiplier", () => {
    const weekendDate = new Date("2025-01-04T10:00:00Z");

    const result = utils.calculateSurcharge({
      baseAmount: 59,
      audience: "consumer",
      date: weekendDate,
      weekendMultiplier: 0.2,
    });

    expect(result.context.isWeekend).toBe(true);
    expect(result.total).toBeCloseTo(59 + 59 * 0.2);
  });

  it("flags holiday context and applies multipliers", () => {
    const holiday = holidays[0];
    const holidayDate = new Date(`${holiday.date}T09:00:00Z`);

    const result = utils.calculateSurcharge({
      baseAmount: 59,
      audience: "consumer",
      date: holidayDate,
      holidayMultiplier: 0.5,
    });

    expect(result.context.isHoliday).toBe(true);
    expect(result.components).toContainEqual(
      expect.objectContaining({ label: "holiday", applied: true, amount: 29.5 }),
    );
  });
});

describe("pricing data integrity", () => {
  const prices = pricesJson as PricesConfig;
  const holidays = holidaysJson as Holiday[];

  it("uses unique service identifiers", () => {
    const ids = prices.services.map((service) => service.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("marks consumer prices as incl. btw", () => {
    expect(
      prices.services.every((service) => !service.consumer || service.consumer.includesVat === true),
    ).toBe(true);
  });

  it("marks business prices as excl. btw", () => {
    expect(
      prices.services.every((service) => !service.business || service.business.includesVat === false),
    ).toBe(true);
  });

  it("references valid services in spoed fees", () => {
    const serviceIds = new Set(prices.services.map((service) => service.id));
    const invalidReference = prices.spoedFees.flatMap((fee) => fee.appliesTo ?? []).find(
      (id) => !serviceIds.has(id),
    );

    expect(invalidReference).toBeUndefined();
  });

  it("uses ISO date format for holidays", () => {
    const isoRegex = /^\d{4}-\d{2}-\d{2}$/;
    expect(holidays.every((holiday) => isoRegex.test(holiday.date))).toBe(true);
  });

  it("provides valid date objects for holidays", () => {
    const invalid = holidays
      .map((holiday) => Number.isNaN(new Date(`${holiday.date}T00:00:00Z`).getTime()))
      .some(Boolean);

    expect(invalid).toBe(false);
  });
});
