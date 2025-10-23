"use client";

import { useEffect, useMemo, useState } from "react";
import { Calendar as CalendarIcon, CheckCircle2, HelpCircle, ShieldAlert, Timer, User as UserIcon, Building2 } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format, isWeekend, startOfToday } from "date-fns";
import "react-day-picker/dist/style.css";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { usePrices } from "@/hooks/use-prices";
import type { ServiceOffering } from "@/config/site-pricing";

const PROBLEM_CATEGORIES = [
  { id: "hardware", title: "Computer/Laptop Problemen", description: "Trage computer, crash, Windows/Mac issues" },
  { id: "security", title: "Hack/Beveiliging", description: "Gehackt, virus, malware, account herstellen" },
  { id: "network", title: "Internet & WiFi", description: "WiFi traag/weg, netwerkproblemen" },
  { id: "hardware_other", title: "Printer/Apparaten", description: "Printer, scanner, apparaten instellen" },
  { id: "mobile", title: "Tablet & Smartphone", description: "iPad, Android telefoon hulp" },
  { id: "training", title: "Uitleg & Les", description: "Training, handleiding, leren hoe het werkt" },
  { id: "other", title: "Iets anders", description: "Niet zeker? Bel ons even" },
] as const;

const PROBLEM_IDS = new Set(PROBLEM_CATEGORIES.map((category) => category.id));

const SERVICE_TYPES = [
  { id: "consumer", label: "Voor thuis (particulier)" },
  { id: "business", label: "Zakelijk (bedrijf of kantoor)" },
];

const SERVICE_CHANNELS = [
  { id: "remote", label: "Ondersteuning op afstand", description: "We helpen via TeamViewer of je scherm delen" },
  { id: "onsite", label: "Bezoek ter plaatse", description: "We komen langs om je probleem ter plaatse op te lossen" },
];

const URGENCY_OPTIONS = [
  { id: "standaard", label: "Standaard", description: "Binnen 2-3 werkdagen" },
  { id: "spoed", label: "Spoed", description: "Vandaag of morgen" },
];

const SPOED_SLOT_LABEL = "Spoedslot (ASAP)";

// Default 2-uur (48-72 uur for standaard) tijdsloten
const DEFAULT_SLOTS = [
  "09:00 – 11:00",
  "11:00 – 13:00",
  "13:00 – 15:00",
  "15:00 – 17:00",
  "18:00 – 20:00",
];

function parseSlotStartHour(slot: string): number | null {
  const match = slot.match(/^(\d+):/);
  return match ? parseInt(match[1], 10) : null;
}

function getTimeSlotsForDate(date: Date) {
  const now = new Date();
  if (date.toDateString() !== now.toDateString()) return DEFAULT_SLOTS;

  const slots: string[] = [];
  const hourNow = now.getHours();
  DEFAULT_SLOTS.forEach((slot) => {
    const hour = parseSlotStartHour(slot);
    if (hour !== null && hour > hourNow) {
      slots.push(slot);
    }
  });
  return slots.length ? slots : ["Op dit tijdstip vandaag geen slots meer"];
}

type ProblemCategory = (typeof PROBLEM_CATEGORIES)[number]["id"];
type ServiceType = (typeof SERVICE_TYPES)[number]["id"];
type ServiceChannel = (typeof SERVICE_CHANNELS)[number]["id"];
type Urgency = (typeof URGENCY_OPTIONS)[number]["id"];

type Booking = {
  problemCategory: ProblemCategory | "";
  serviceType: ServiceType;
  serviceChannel: ServiceChannel | "";
  urgency: Urgency | "";
  date: Date | string | undefined;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  message: string;
  deliveryMethod?: string;
  addCyberApk?: boolean;
  addWindowsMacReinstall?: boolean;
  addFasterComputerSsd?: boolean;
  addAntivirusSetup?: boolean;
  agreedToTerms?: boolean;
};

const currency = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
});

export function AppointmentWizard({ compact = false, initialState }: { compact?: boolean; initialState?: Partial<Booking> }) {
  const priceConfig = usePrices();
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<Booking>({
    problemCategory: initialState?.problemCategory || "",
    serviceType: initialState?.serviceType || "consumer",
    serviceChannel: initialState?.serviceChannel || "",
    urgency: initialState?.urgency || "",
    date: initialState?.date ? new Date(initialState.date) : undefined,
    timeSlot: initialState?.timeSlot || "",
    firstName: initialState?.firstName || "",
    lastName: initialState?.lastName || "",
    email: initialState?.email || "",
    phone: initialState?.phone || "",
    street: initialState?.street || "",
    postalCode: initialState?.postalCode || "",
    city: initialState?.city || "",
    message: initialState?.message || "",
    addCyberApk: false,
    addWindowsMacReinstall: false,
    addFasterComputerSsd: false,
    addAntivirusSetup: false,
    agreedToTerms: false,
  });

  useEffect(() => {
    if (booking.urgency === "spoed") {
      setBooking((prev) => {
        const nextDate = prev.date ?? startOfToday();
        if (prev.timeSlot === SPOED_SLOT_LABEL && prev.date?.toDateString() === nextDate.toDateString()) {
          return prev;
        }
        return { ...prev, date: nextDate, timeSlot: SPOED_SLOT_LABEL };
      });
    } else if (booking.timeSlot === SPOED_SLOT_LABEL) {
      setBooking((prev) => ({ ...prev, timeSlot: "" }));
    }
  }, [booking.urgency, booking.timeSlot]);

  const today = startOfToday();

  const isStep0Valid = booking.problemCategory !== "";
  const isStep1Valid = booking.serviceType !== "";
  const isStep2Valid = booking.serviceChannel !== "";
  const isStep3Valid = booking.urgency !== "";
  const requiresSchedule = booking.urgency !== "spoed";
  const hasSchedule = !!booking.date && !!booking.timeSlot && !booking.timeSlot.includes("geen slots");
  const isStep4Valid = requiresSchedule ? hasSchedule : true;
  const isStep5Valid =
    booking.firstName.trim() !== "" &&
    booking.lastName.trim() !== "" &&
    booking.phone.trim() !== "" &&
    booking.street.trim() !== "" &&
    booking.postalCode.trim() !== "" &&
    booking.city.trim() !== "" &&
    booking.agreedToTerms === true;

  const selectedProblem = useMemo(() => PROBLEM_CATEGORIES.find((c) => c.id === booking.problemCategory)?.title ?? "", [booking.problemCategory]);
  const selectedServiceType = useMemo(() => SERVICE_TYPES.find((s) => s.id === booking.serviceType)?.label ?? "", [booking.serviceType]);
  const selectedServiceChannel = useMemo(() => SERVICE_CHANNELS.find((c) => c.id === booking.serviceChannel)?.label ?? "", [booking.serviceChannel]);
  const selectedUrgency = useMemo(() => URGENCY_OPTIONS.find((o) => o.id === booking.urgency)?.label ?? "", [booking.urgency]);

  const deliveryOptions = useMemo(() => {
    const consumerPricing = priceConfig.pricing.consumer;
    const businessPricing = priceConfig.pricing.business;
    return {
      consumer: [
        {
          id: consumerPricing.remote.id,
          label: `${consumerPricing.remote.label} (${consumerPricing.remote.price.display})`,
          description: consumerPricing.remote.bookingSummary,
        },
        {
          id: consumerPricing.onsite.id,
          label: `${consumerPricing.onsite.label} (${consumerPricing.onsite.price.display})`,
          description: consumerPricing.onsite.bookingSummary,
        },
        {
          id: consumerPricing.emergency.id,
          label: `${consumerPricing.emergency.label} (${consumerPricing.emergency.price.display})`,
          description: consumerPricing.emergency.bookingSummary,
        },
      ],
      business: [
        {
          id: businessPricing.remote.id,
          label: `${businessPricing.remote.label} (${businessPricing.remote.price.display})`,
          description: businessPricing.remote.bookingSummary,
        },
        {
          id: businessPricing.onsite.id,
          label: `${businessPricing.onsite.label} (${businessPricing.onsite.price.display})`,
          description: businessPricing.onsite.bookingSummary,
        },
        {
          id: businessPricing.emergency.id,
          label: `${businessPricing.emergency.label} (${businessPricing.emergency.price.display})`,
          description: businessPricing.emergency.bookingSummary,
        },
      ],
    };
  }, [priceConfig]);

  const selectedDeliveryMethod = useMemo(() => {
    const methods = deliveryOptions[booking.serviceType as keyof typeof deliveryOptions] || [];
    return methods.find((m) => m.id === booking.deliveryMethod)?.label ?? "";
  }, [booking.serviceType, booking.deliveryMethod, deliveryOptions]);

  const pricingSummary = useMemo(() => {
    if (!booking.serviceChannel || !booking.urgency) {
      return { basePrice: 0, surcharges: [], cyberApkPrice: 0, total: 0 };
    }

    const pricing = priceConfig.pricing;
    let service: ServiceOffering | null = null;

    if (booking.serviceType === "consumer") {
      const consumerPricing = pricing.consumer;
      if (booking.urgency === "standaard" && booking.serviceChannel === "remote") {
        service = consumerPricing.remote;
      } else if (booking.urgency === "standaard" && booking.serviceChannel === "onsite") {
        service = consumerPricing.onsite;
      } else if (booking.urgency === "spoed") {
        service = consumerPricing.emergency;
      }
    } else if (booking.serviceType === "business") {
      const businessPricing = pricing.business;
      if (booking.urgency === "standaard" && booking.serviceChannel === "remote") {
        service = businessPricing.remote;
      } else if (booking.urgency === "standaard" && booking.serviceChannel === "onsite") {
        service = businessPricing.onsite;
      } else if (booking.urgency === "spoed") {
        service = businessPricing.emergency;
      }
    }

    const basePrice = service?.price.amount || 0;
    const surcharges: Array<{ id: string; label: string; amount: number }> = [];

    const isEveningSlot = booking.timeSlot && (
      booking.timeSlot.startsWith("18:") ||
      booking.timeSlot.startsWith("19:") ||
      booking.timeSlot.startsWith("20:")
    );

    if (isEveningSlot && booking.serviceChannel === "onsite" && basePrice > 0) {
      surcharges.push({
        id: "evening",
        label: "Avondtoeslag (na 18:00)",
        amount: Math.round(basePrice * 0.25),
      });
    }

    let cyberApkPrice = 0;
    if (booking.addCyberApk) {
      const cyberApkPricing = pricing.cyberApk;
      if (booking.serviceType === "consumer") {
        if (booking.serviceChannel === "remote" && cyberApkPricing.remote.price.amount) {
          cyberApkPrice = Math.round(cyberApkPricing.remote.price.amount * 0.5 * 100) / 100;
        } else if (booking.serviceChannel === "onsite" && cyberApkPricing.onsite.price.amount) {
          cyberApkPrice = Math.round(cyberApkPricing.onsite.price.amount * 0.5 * 100) / 100;
        }
      } else if (booking.serviceType === "business") {
        if (booking.serviceChannel === "remote" && cyberApkPricing.businessRemote.price.amount) {
          cyberApkPrice = Math.round(cyberApkPricing.businessRemote.price.amount * 0.5 * 100) / 100;
        } else if (booking.serviceChannel === "onsite" && cyberApkPricing.businessOnsite.price.amount) {
          cyberApkPrice = Math.round(cyberApkPricing.businessOnsite.price.amount * 0.5 * 100) / 100;
        }
      }
    }

    const extras: Array<{ id: string; label: string; amount: number }> = [];
    // Windows/Mac herinstallatie
    if (booking.addWindowsMacReinstall && pricing.extraServices.windowsMacReinstall.price.amount) {
      extras.push({ id: pricing.extraServices.windowsMacReinstall.id, label: pricing.extraServices.windowsMacReinstall.label, amount: pricing.extraServices.windowsMacReinstall.price.amount });
    }
    // SSD upgrade
    if (booking.addFasterComputerSsd && pricing.extraServices.fasterComputer.price.amount) {
      extras.push({ id: pricing.extraServices.fasterComputer.id, label: pricing.extraServices.fasterComputer.label, amount: pricing.extraServices.fasterComputer.price.amount });
    }
    // Antivirus setup
    if (booking.addAntivirusSetup && pricing.extraServices.antivirusSetup.price.amount) {
      extras.push({ id: pricing.extraServices.antivirusSetup.id, label: pricing.extraServices.antivirusSetup.label, amount: pricing.extraServices.antivirusSetup.price.amount });
    }

    const extrasTotal = extras.reduce((sum, e) => sum + (e.amount || 0), 0);

    const total = basePrice + surcharges.reduce((sum, s) => sum + s.amount, 0) + cyberApkPrice + extrasTotal;

    return { basePrice, surcharges, cyberApkPrice, extras, total };
  }, [booking.serviceChannel, booking.urgency, booking.serviceType, booking.timeSlot, booking.addCyberApk, booking.addWindowsMacReinstall, booking.addFasterComputerSsd, booking.addAntivirusSetup, priceConfig]);

  const handleSubmit = async () => {
    if (!isStep5Valid || !isStep4Valid) return;
    setLoading(true);
    try {
      const serviceLabelParts = [selectedServiceType, selectedServiceChannel, selectedUrgency].filter(Boolean);
      const summaryLines: string[] = [];
      if (pricingSummary.total > 0) {
        summaryLines.push(`Basisprijs: ${currency.format(pricingSummary.basePrice)}`);
        if (pricingSummary.surcharges.length) {
          pricingSummary.surcharges.forEach((item) => {
            summaryLines.push(`${item.label}: +${currency.format(item.amount)}`);
          });
        }
        if (pricingSummary.extras && pricingSummary.extras.length) {
          pricingSummary.extras.forEach((extra) => {
            summaryLines.push(`${extra.label}: +${currency.format(extra.amount)}`);
          });
        }
        if (booking.addCyberApk && pricingSummary.cyberApkPrice > 0) {
          summaryLines.push(`Cyber-APK upsell (50% korting): +${currency.format(pricingSummary.cyberApkPrice)}`);
        }
        summaryLines.push(`Totaal indicatie: ${currency.format(pricingSummary.total)}`);
      }

      const appendedMessage = summaryLines.length
        ? `${booking.message || ""}\n\n---\nPrijsindicatie\n${summaryLines.join("\n")}`.trim()
        : booking.message;

      const payload = {
        service: `${booking.serviceType}:${booking.serviceChannel}:${booking.urgency}`,
        serviceLabel: `${selectedProblem} · ${serviceLabelParts.join(" · ")}`.trim(),
        dateISO: booking.date ? booking.date.toISOString() : null,
        dateDisplay: booking.date ? format(booking.date, "PPP") : null,
        timeSlot: booking.timeSlot || (booking.urgency === "spoed" ? SPOED_SLOT_LABEL : ""),
        firstName: booking.firstName,
        lastName: booking.lastName,
        email: booking.email,
        phone: booking.phone,
        street: booking.street,
        postalCode: booking.postalCode,
        city: booking.city,
        message: appendedMessage,
        source: "website",
      };

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string; message?: string }
        | null;

      if (!response.ok || !result?.success) {
        const description = result?.error || result?.message || "Probeer het later opnieuw.";
        throw new Error(description);
      }

      toast({
        title: "Afspraak verstuurd",
        description: result.message || "We nemen snel contact op om te bevestigen.",
      });
      setStep(0);
      setBooking({
        problemCategory: "",
        serviceType: "consumer",
        serviceChannel: "",
        urgency: "",
        date: undefined,
        timeSlot: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        postalCode: "",
        city: "",
        message: "",
        addCyberApk: false,
    addWindowsMacReinstall: false,
    addFasterComputerSsd: false,
    addAntivirusSetup: false,
    agreedToTerms: false,
      });
    } catch (error: any) {
      toast({
        title: "Versturen mislukt",
        description: error?.message ?? "Probeer het later opnieuw.",
        variant: "destructive" as const,
      });
    } finally {
      setLoading(false);
    }
  };

  const availableDeliveryMethods = deliveryOptions[booking.serviceType as keyof typeof deliveryOptions] || [];
  const contactInfo = priceConfig.contact;

  return (
    <div className="w-full">
      {!compact && (
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Plan vandaag nog een afspraak</h2>
          <p className="text-foreground/80 mt-2">
            Vertel ons waarmee we u kunnen helpen, kies hoe u hulp wilt ontvangen en wij plannen de afspraak in. We bevestigen altijd per telefoon of e-mail.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-6 items-start">
        <Card className="md:sticky md:top-4">
          <CardContent className="p-0">
            <nav className="bg-primary/90 text-primary-foreground rounded-md md:rounded-none md:rounded-l-md overflow-hidden">
              <ul className="divide-y divide-white/10">
                <li className={`px-4 py-4 flex items-center justify-between ${step === 0 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Wat is het probleem?</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">{selectedProblem || "Kies een categorie"}</p>
                    </div>
                  </div>
                  {isStep0Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className={`px-4 py-4 flex items-center justify-between ${step === 1 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <Timer className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Voor wie?</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">{selectedServiceType || "Kies type"}</p>
                    </div>
                  </div>
                  {isStep1Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className={`px-4 py-4 flex items-center justify-between ${step === 2 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Hoe helpen we?</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">{selectedServiceChannel || "Kies hulpvorm"}</p>
                    </div>
                  </div>
                  {isStep2Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className={`px-4 py-4 flex items-center justify-between ${step === 3 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <Timer className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Welke urgentie?</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">{selectedUrgency || "Kies urgentie"}</p>
                    </div>
                  </div>
                  {isStep3Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className={`px-4 py-4 flex items-center justify-between ${step === 4 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Opties & planning</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">
                        {booking.urgency === "spoed"
                          ? "Spoedslot"
                          : booking.date
                          ? `${format(booking.date, "d MMM yyyy")} · ${booking.timeSlot || "—"}`
                          : "Nog niet gekozen"}
                      </p>
                    </div>
                  </div>
                  {isStep4Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className={`px-4 py-4 flex items-center justify-between ${step === 5 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <UserIcon className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Uw gegevens</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">
                        {booking.firstName && booking.lastName ? `${booking.firstName} ${booking.lastName}` : "Vul uw gegevens in"}
                      </p>
                    </div>
                  </div>
                  {isStep5Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className="px-4 py-4 text-sm bg-blue-100 text-blue-900 space-y-1">
                  <p className="opacity-100">Liever direct contact?</p>
                  <a className="block opacity-80 hover:opacity-100 transition-opacity" href={contactInfo.phoneHref}>
                    {contactInfo.phoneLabel}
                  </a>
                  <a
                    className="block opacity-80 hover:opacity-100 transition-opacity"
                    href={contactInfo.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contactInfo.whatsappCta}
                  </a>
                </li>
              </ul>
            </nav>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 md:p-8 space-y-6">
            {step === 0 && (
              <div>
                <h3 className="font-heading font-semibold text-xl mb-6">Wat is uw vraag?</h3>
                <div className="grid gap-3 max-w-lg">
                  {PROBLEM_CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setBooking((b) => ({ ...b, problemCategory: category.id }))}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        booking.problemCategory === category.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <p className="font-semibold text-foreground">{category.title}</p>
                      <p className="text-sm text-foreground/70 mt-1">{category.description}</p>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setStep(1)} disabled={!isStep0Valid}>
                    Volgende stap
                  </Button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Button variant="ghost" onClick={() => setStep(0)} className="px-2">←</Button>
                  <h3 className="font-heading font-semibold text-xl">Is dit voor thuis of voor uw bedrijf?</h3>
                </div>
                {booking.serviceType === "business" && (
                  <Alert className="mb-6 border-primary/40 bg-primary/5">
                    <Building2 className="h-5 w-5" />
                    <AlertTitle>Hoe kan InstantIT helpen?</AlertTitle>
                    <AlertDescription>
                      We bieden zakelijke IT-ondersteuning met vaste tarieven, geen verborgen kosten, en snelle respons. Kies hieronder of u hulp op afstand of ter plaatse nodig hebt.
                    </AlertDescription>
                  </Alert>
                )}
                <div className="grid gap-3 max-w-xl">
                  {SERVICE_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() =>
                        setBooking((b) => ({
                          ...b,
                          serviceType: type.id,
                          serviceChannel: "",
                          urgency: "",
                        }))
                      }
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        booking.serviceType === type.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <p className="font-semibold text-foreground">{type.label}</p>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(0)}>
                    Vorige
                  </Button>
                  <Button onClick={() => setStep(2)} disabled={!isStep1Valid}>
                    Volgende stap
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Button variant="ghost" onClick={() => setStep(1)} className="px-2">←</Button>
                  <h3 className="font-heading font-semibold text-xl">Hoe wilt u hulp ontvangen?</h3>
                </div>
                {booking.problemCategory === "security" && (
                  <Alert className="border-destructive/40 bg-destructive/10">
                    <ShieldAlert className="h-5 w-5" />
                    <AlertTitle>Spoed bij hack of beveiligingsincident?</AlertTitle>
                    <AlertDescription>
                      We streven ernaar om zo spoedig mogelijk te reageren. Is er fysieke toegang nodig? Kies dan voor een
                      aan huis/op locatie afspraak; we koppelen je apparaat veilig direct los van het netwerk.
                    </AlertDescription>
                  </Alert>
                )}
                <div className="grid gap-3 max-w-xl">
                  {SERVICE_CHANNELS.map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() =>
                        setBooking((b) => ({
                          ...b,
                          serviceChannel: channel.id,
                          urgency: "",
                        }))
                      }
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        booking.serviceChannel === channel.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <p className="font-semibold text-foreground">{channel.label}</p>
                      <p className="text-sm text-foreground/70 mt-1">{channel.description}</p>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Vorige
                  </Button>
                  <Button onClick={() => setStep(3)} disabled={!isStep2Valid}>
                    Volgende stap
                  </Button>
                </div>
              </div>
            )}


            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" onClick={() => setStep(2)} className="px-2">
                    ←
                  </Button>
                  <h3 className="font-heading font-semibold text-xl">Welke urgentie?</h3>
                </div>

                <div className="grid gap-3 max-w-xl">
                  {URGENCY_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      onClick={() =>
                        setBooking((b) => ({
                          ...b,
                          urgency: option.id,
                        }))
                      }
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        booking.urgency === option.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <p className="font-semibold text-foreground">{option.label}</p>
                      <p className="text-sm text-foreground/70 mt-1">{option.description}</p>
                      {booking.serviceChannel && booking.urgency === option.id && pricingSummary.total > 0 ? (
                        <p className="text-sm font-semibold text-primary mt-2">
                          Indicatie: {currency.format(pricingSummary.basePrice)}
                        </p>
                      ) : null}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Vorige
                  </Button>
                  <Button onClick={() => setStep(4)} disabled={!isStep3Valid}>
                    Volgende stap
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" onClick={() => setStep(3)} className="px-2">
                    ←
                  </Button>
                  <h3 className="font-heading font-semibold text-xl">Opties & planning</h3>
                </div>

                {requiresSchedule && (
                  <div>
                    <h4 className="font-semibold mb-4">Wanneer wilt u de afspraak?</h4>
                    <div className="border rounded-lg p-4 bg-secondary/30">
                      <DayPicker
                        mode="single"
                        selected={booking.date}
                        onSelect={(date) => setBooking((b) => ({ ...b, date, timeSlot: "" }))}
                        disabled={(date) => isWeekend(date) || date < today}
                        className="flex justify-center"
                      />
                    </div>
                    {booking.date && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold mb-2">Beschikbare tijdsloten</p>
                        <div className="grid grid-cols-2 gap-2">
                          {getTimeSlotsForDate(booking.date).map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setBooking((b) => ({ ...b, timeSlot: slot }))}
                              className={`p-2 rounded-md border text-sm transition-all ${
                                booking.timeSlot === slot
                                  ? "border-primary bg-primary/10"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-3">
                  <h4 className="font-semibold">Extra opties</h4>

                  {/* Cyber-APK - altijd voor hardware, security en rest */}
                  <div className="border-2 border-accent/50 rounded-lg p-4 bg-accent/5">
                    <div className="flex items-start gap-3">
                      <input
                        id="cyberApk"
                        type="checkbox"
                        checked={booking.addCyberApk}
                        onChange={(e) => setBooking((b) => ({ ...b, addCyberApk: e.target.checked }))}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <Label htmlFor="cyberApk" className="cursor-pointer">
                          <span className="font-semibold">Veiligheidscheck (Cyber-APK) erbij boeken?</span>
                        </Label>
                        <p className="text-sm text-foreground/70 mt-1">
                          Preventieve digitale veiligheidscheck met updates, backup en 2FA-setup.
                        </p>
                        <div className="text-sm mt-2 space-y-1">
                          <p className="font-semibold text-accent">
                            {booking.serviceType === "consumer" && (booking.serviceChannel === "remote" || booking.serviceChannel === "onsite") && (
                              <>Normaal <span className="line-through">€79</span>, nu <span className="font-bold">€39,50</span> bij meeboeken</>
                            )}
                            {booking.serviceType === "business" && booking.serviceChannel === "remote" && (
                              <>Normaal <span className="line-through">€299</span>, nu <span className="font-bold">€149,50</span> bij meeboeken (ex btw)</>
                            )}
                            {booking.serviceType === "business" && booking.serviceChannel === "onsite" && (
                              <>Normaal <span className="line-through">€449</span>, nu <span className="font-bold">€224,50</span> bij meeboeken (ex btw)</>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Windows/Mac herinstallatie - alleen voor Hardware */}
                  {booking.problemCategory === "hardware" && (
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <input
                          id="windowsMacReinstall"
                          type="checkbox"
                          checked={booking.addWindowsMacReinstall || false}
                          onChange={(e) => setBooking((b) => ({ ...b, addWindowsMacReinstall: e.target.checked }))}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="windowsMacReinstall" className="cursor-pointer">
                            <span className="font-semibold">Windows/Mac herinstallatie</span>
                          </Label>
                          <p className="text-sm text-foreground/70 mt-1">
                            Volledige besturingssysteem herinstallatie met back-up van gegevens.
                          </p>
                          <p className="text-sm font-semibold text-primary mt-2">
                            €99 (Windows) of €119 (Mac)
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SSD upgrade - alleen voor Hardware */}
                  {booking.problemCategory === "hardware" && (
                    <div className="border rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <input
                          id="fasterComputerSsd"
                          type="checkbox"
                          checked={booking.addFasterComputerSsd || false}
                          onChange={(e) => setBooking((b) => ({ ...b, addFasterComputerSsd: e.target.checked }))}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="fasterComputerSsd" className="cursor-pointer">
                            <span className="font-semibold">Computer sneller maken met nieuwe schijf</span>
                          </Label>
                          <p className="text-sm text-foreground/70 mt-1">
                            SSD upgrade met installatie en datamigratie. Inclusief back-up van gegevens.
                          </p>
                          <p className="text-sm font-semibold text-primary mt-2">
                            €119 arbeidskosten + SSD onderdeel (€80–150)
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Antivirus - altijd voor hardware, security en rest */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <input
                        id="antivirusSetup"
                        type="checkbox"
                        checked={booking.addAntivirusSetup || false}
                        onChange={(e) => setBooking((b) => ({ ...b, addAntivirusSetup: e.target.checked }))}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <Label htmlFor="antivirusSetup" className="cursor-pointer">
                          <span className="font-semibold">Antivirus + basisbeveiliging (2 apparaten)</span>
                        </Label>
                        <p className="text-sm text-foreground/70 mt-1">
                          Professionele antivirus installatie en basisbeveiliging setup.
                        </p>
                        <p className="text-sm font-semibold text-primary mt-2">
                          Kosten worden met u besproken
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-secondary/30">
                  <h4 className="font-heading font-semibold text-lg mb-3">Kostenindicatie</h4>
                  {pricingSummary.total > 0 ? (
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Basis</span>
                        <span>{currency.format(pricingSummary.basePrice)}</span>
                      </div>
                      {pricingSummary.surcharges.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <span>{item.label}</span>
                          <span>+{currency.format(item.amount)}</span>
                        </div>
                      ))}
                      {booking.addCyberApk && pricingSummary.cyberApkPrice > 0 && (
                        <div className="flex items-center justify-between">
                          <span>Cyber-APK (50% korting)</span>
                          <span>+{currency.format(pricingSummary.cyberApkPrice)}</span>
                        </div>
                      )}
                      {pricingSummary.extras && pricingSummary.extras.length > 0 && (
                        <>
                          {pricingSummary.extras.map((extra) => (
                            <div key={extra.id} className="flex items-center justify-between">
                              <span>{extra.label}</span>
                              <span>+{currency.format(extra.amount)}</span>
                            </div>
                          ))}
                        </>
                      )}
                      <div className="border-t border-border pt-2 flex items-center justify-between font-semibold text-base">
                        <span>Totaal indicatie</span>
                        <span>{currency.format(pricingSummary.total)}</span>
                      </div>
                      <p className="text-muted-foreground text-xs">
                        Definitieve prijzen stemmen we telefonisch af. Geen voorrijkosten binnen Haaglanden.
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Kies eerst een hulpvorm en snelheid om de prijsindicatie te zien.
                    </p>
                  )}
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(3)}>
                    Vorige
                  </Button>
                  <Button onClick={() => setStep(5)} disabled={!isStep4Valid}>
                    Volgende stap
                  </Button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Button variant="ghost" onClick={() => setStep(4)} className="px-2">←</Button>
                  <h3 className="font-heading font-semibold text-xl">Uw gegevens</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Voornaam</Label>
                    <Input
                      id="firstName"
                      value={booking.firstName}
                      onChange={(event) => setBooking((b) => ({ ...b, firstName: event.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Achternaam</Label>
                    <Input
                      id="lastName"
                      value={booking.lastName}
                      onChange={(event) => setBooking((b) => ({ ...b, lastName: event.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={booking.email}
                      onChange={(event) => setBooking((b) => ({ ...b, email: event.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefoon</Label>
                    <Input
                      id="phone"
                      value={booking.phone}
                      onChange={(event) => setBooking((b) => ({ ...b, phone: event.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="street">Straat en huisnummer</Label>
                    <Input
                      id="street"
                      value={booking.street}
                      onChange={(event) => setBooking((b) => ({ ...b, street: event.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postal">Postcode</Label>
                    <Input
                      id="postal"
                      value={booking.postalCode}
                      onChange={(event) => setBooking((b) => ({ ...b, postalCode: event.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Stad</Label>
                    <Input
                      id="city"
                      value={booking.city}
                      onChange={(event) => setBooking((b) => ({ ...b, city: event.target.value }))}
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="message">Omschrijf kort je vraag</Label>
                    <Textarea
                      id="message"
                      className="mt-2 min-h-[100px]"
                      value={booking.message}
                      onChange={(event) => setBooking((b) => ({ ...b, message: event.target.value }))}
                    />
                  </div>
                </div>

                <div className="border rounded-lg p-4 bg-secondary/30">
                  <h4 className="font-heading font-semibold text-lg mb-3">Kostenindicatie</h4>
                  {pricingSummary.total > 0 ? (
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Basis</span>
                        <span>{currency.format(pricingSummary.basePrice)}</span>
                      </div>
                      {pricingSummary.surcharges.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <span>{item.label}</span>
                          <span>+{currency.format(item.amount)}</span>
                        </div>
                      ))}
                      {booking.addCyberApk && pricingSummary.cyberApkPrice > 0 && (
                        <div className="flex items-center justify-between">
                          <span>Cyber-APK (50% korting)</span>
                          <span>+{currency.format(pricingSummary.cyberApkPrice)}</span>
                        </div>
                      )}
                      {pricingSummary.extras && pricingSummary.extras.length > 0 && (
                        <>
                          {pricingSummary.extras.map((extra) => (
                            <div key={extra.id} className="flex items-center justify-between">
                              <span>{extra.label}</span>
                              <span>+{currency.format(extra.amount)}</span>
                            </div>
                          ))}
                        </>
                      )}
                      <div className="border-t border-border pt-2 flex items-center justify-between font-semibold text-base">
                        <span>Totaal indicatie</span>
                        <span>{currency.format(pricingSummary.total)}</span>
                      </div>
                      <p className="text-muted-foreground text-xs">
                        Definitieve prijzen stemmen we telefonisch af. Geen voorrijkosten binnen Haaglanden.
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Kies eerst een hulpvorm en snelheid om de prijsindicatie te zien.
                    </p>
                  )}
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(4)}>
                    Vorige
                  </Button>
                  <Button onClick={handleSubmit} disabled={!isStep5Valid || !isStep4Valid || loading}>
                    {loading ? "Versturen..." : "Afspraak versturen"}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AppointmentWizard;
