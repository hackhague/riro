export type DutchHoliday = {
  date: string;
  label: string;
};

// Reference list of NL public holidays for 2024-2026 that affect surcharge logic.
// Source: rijksoverheid.nl (statische dataset)
export const DUTCH_HOLIDAYS: DutchHoliday[] = [
  { date: "2024-01-01", label: "Nieuwjaarsdag" },
  { date: "2024-03-29", label: "Goede Vrijdag" },
  { date: "2024-03-31", label: "Eerste Paasdag" },
  { date: "2024-04-01", label: "Tweede Paasdag" },
  { date: "2024-04-27", label: "Koningsdag" },
  { date: "2024-05-05", label: "Bevrijdingsdag" },
  { date: "2024-05-09", label: "Hemelvaart" },
  { date: "2024-05-19", label: "Eerste Pinksterdag" },
  { date: "2024-05-20", label: "Tweede Pinksterdag" },
  { date: "2024-12-25", label: "Eerste Kerstdag" },
  { date: "2024-12-26", label: "Tweede Kerstdag" },
  { date: "2025-01-01", label: "Nieuwjaarsdag" },
  { date: "2025-04-18", label: "Goede Vrijdag" },
  { date: "2025-04-20", label: "Eerste Paasdag" },
  { date: "2025-04-21", label: "Tweede Paasdag" },
  { date: "2025-04-26", label: "Koningsdag" },
  { date: "2025-05-05", label: "Bevrijdingsdag" },
  { date: "2025-05-29", label: "Hemelvaart" },
  { date: "2025-06-08", label: "Eerste Pinksterdag" },
  { date: "2025-06-09", label: "Tweede Pinksterdag" },
  { date: "2025-12-25", label: "Eerste Kerstdag" },
  { date: "2025-12-26", label: "Tweede Kerstdag" },
  { date: "2026-01-01", label: "Nieuwjaarsdag" },
  { date: "2026-04-03", label: "Goede Vrijdag" },
  { date: "2026-04-05", label: "Eerste Paasdag" },
  { date: "2026-04-06", label: "Tweede Paasdag" },
  { date: "2026-04-27", label: "Koningsdag" },
  { date: "2026-05-05", label: "Bevrijdingsdag" },
  { date: "2026-05-14", label: "Hemelvaart" },
  { date: "2026-05-24", label: "Eerste Pinksterdag" },
  { date: "2026-05-25", label: "Tweede Pinksterdag" },
  { date: "2026-12-25", label: "Eerste Kerstdag" },
  { date: "2026-12-26", label: "Tweede Kerstdag" },
];

const HOLIDAY_SET = new Set(DUTCH_HOLIDAYS.map((holiday) => holiday.date));

export function isDutchHoliday(date: Date | null | undefined) {
  if (!date) return false;
  const iso = date.toISOString().slice(0, 10);
  return HOLIDAY_SET.has(iso);
}

export function getHolidayLabel(date: Date | null | undefined) {
  if (!date) return null;
  const iso = date.toISOString().slice(0, 10);
  const match = DUTCH_HOLIDAYS.find((holiday) => holiday.date === iso);
  return match?.label ?? null;
}
