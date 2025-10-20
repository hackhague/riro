"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, CheckCircle2, User as UserIcon, HelpCircle, Radio } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format, startOfToday } from "date-fns";
import "react-day-picker/dist/style.css";
import { toast } from "@/hooks/use-toast";
import { usePrices } from "@/hooks/use-prices";

// Problem categories (shown first)
const PROBLEM_CATEGORIES = [
  { id: "hardware", title: "Computer/Laptop Problemen", description: "Trage computer, crash, Windows/Mac issues" },
  { id: "security", title: "Hack/Beveiliging", description: "Gehackt, virus, malware, account herstellen" },
  { id: "network", title: "Internet & WiFi", description: "WiFi traag/weg, netwerkproblemen" },
  { id: "hardware_other", title: "Printer/Apparaten", description: "Printer, scanner, apparaten instellen" },
  { id: "mobile", title: "Tablet & Smartphone", description: "iPad, Android telefoon hulp" },
  { id: "training", title: "Uitleg & Les", description: "Training, handleiding, leren hoe het werkt" },
  { id: "other", title: "Iets anders", description: "Niet zeker? Bel ons even" },
];

const SERVICE_TYPES = [
  { id: "consumer", label: "Voor thuis (particulier)" },
  { id: "business", label: "Zakelijk (bedrijf of kantoor)" },
];

// Default 2-uur (48-72 uur for standaard) tijdsloten
const DEFAULT_SLOTS = [
  "09:00 – 11:00",
  "11:00 – 13:00",
  "13:00 – 15:00",
  "15:00 – 17:00",
  "18:00 – 20:00",
];

function getTimeSlotsForDate(date: Date) {
  const now = new Date();
  if (date.toDateString() !== now.toDateString()) return DEFAULT_SLOTS;

  const slots: string[] = [];
  const hourNow = now.getHours();
  DEFAULT_SLOTS.forEach((slot) => {
    const hour = parseInt(slot.slice(0, 2), 10);
    if (hour > hourNow) slots.push(slot);
  });
  return slots.length ? slots : ["Op dit tijdstip vandaag geen slots meer"];
}

type Booking = {
  problemCategory: string;
  serviceType: string;
  deliveryMethod: string;
  date: Date | undefined;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  message: string;
};

export function AppointmentWizard({ compact = false }: { compact?: boolean }) {
  const priceConfig = usePrices();
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<Booking>({
    problemCategory: "",
    serviceType: "consumer",
    deliveryMethod: "",
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
  });

  // Validation for each step
  const isStep0Valid = !!booking.problemCategory;
  const isStep1Valid = !!booking.serviceType;
  const isStep2Valid = !!booking.deliveryMethod;
  const isStep3Valid = !!booking.date && !!booking.timeSlot && !booking.timeSlot.includes("geen slots");
  const isStep4Valid =
    booking.firstName.trim() !== "" &&
    booking.lastName.trim() !== "" &&
    booking.phone.trim() !== "" &&
    booking.street.trim() !== "" &&
    booking.postalCode.trim() !== "" &&
    booking.city.trim() !== "";

  const selectedProblem = useMemo(() => PROBLEM_CATEGORIES.find((c) => c.id === booking.problemCategory)?.title ?? "", [booking.problemCategory]);
  const selectedServiceType = useMemo(() => SERVICE_TYPES.find((s) => s.id === booking.serviceType)?.label ?? "", [booking.serviceType]);

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

  const handleSubmit = async () => {
    if (!isStep4Valid || !isStep3Valid) return;
    setLoading(true);
    try {
      const payload = {
        problemCategory: booking.problemCategory,
        serviceType: booking.serviceType,
        deliveryMethod: booking.deliveryMethod,
        dateISO: booking.date ? booking.date.toISOString() : null,
        dateDisplay: booking.date ? format(booking.date, "PPP") : null,
        timeSlot: booking.timeSlot,
        firstName: booking.firstName,
        lastName: booking.lastName,
        email: booking.email,
        phone: booking.phone,
        street: booking.street,
        postalCode: booking.postalCode,
        city: booking.city,
        message: booking.message,
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
        const description =
          result?.error || result?.message || "Probeer het later opnieuw.";
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
        deliveryMethod: "",
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
      });
    } catch (e: any) {
      toast({ title: "Versturen mislukt", description: e?.message ?? "Probeer het later opnieuw.", variant: "destructive" as any });
    } finally {
      setLoading(false);
    }
  };

  const today = startOfToday();
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
        {/* Left stepper */}
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
                    <Radio className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Type hulp</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">{selectedServiceType || "Kies type"}</p>
                    </div>
                  </div>
                  {isStep1Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className={`px-4 py-4 flex items-center justify-between ${step === 2 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Hoe hulp?</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">{selectedDeliveryMethod || "Kies methode"}</p>
                    </div>
                  </div>
                  {isStep2Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className={`px-4 py-4 flex items-center justify-between ${step === 3 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Datum & tijdslot</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">
                        {booking.date ? `${format(booking.date, "d MMM yyyy")} · ${booking.timeSlot || "—"}` : "Nog niet gekozen"}
                      </p>
                    </div>
                  </div>
                  {isStep3Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className={`px-4 py-4 flex items-center justify-between ${step === 4 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <UserIcon className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Uw gegevens</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">
                        {booking.firstName && booking.lastName ? `${booking.firstName} ${booking.lastName}` : "Vul uw gegevens in"}
                      </p>
                    </div>
                  </div>
                  {isStep4Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className="px-4 py-4 text-sm bg-primary/80 space-y-1">
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

        {/* Right panel */}
        <Card>
          <CardContent className="p-6 md:p-8">
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
                <div className="grid gap-3 max-w-lg">
                  {SERVICE_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setBooking((b) => ({ ...b, serviceType: type.id, deliveryMethod: "" }))}
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
                  <Button variant="outline" onClick={() => setStep(0)}>Vorige</Button>
                  <Button onClick={() => setStep(2)} disabled={!isStep1Valid}>Volgende stap</Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Button variant="ghost" onClick={() => setStep(1)} className="px-2">←</Button>
                  <h3 className="font-heading font-semibold text-xl">Hoe wilt u hulp ontvangen?</h3>
                </div>
                <div className="grid gap-3 max-w-lg">
                  {availableDeliveryMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setBooking((b) => ({ ...b, deliveryMethod: method.id }))}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        booking.deliveryMethod === method.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <p className="font-semibold text-foreground">{method.label}</p>
                      <p className="text-sm text-foreground/70 mt-1">{method.description}</p>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>Vorige</Button>
                  <Button onClick={() => setStep(3)} disabled={!isStep2Valid}>Volgende stap</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Button variant="ghost" onClick={() => setStep(2)} className="px-2">←</Button>
                  <h3 className="font-heading font-semibold text-xl">Datum & tijdslot</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <DayPicker
                      mode="single"
                      selected={booking.date}
                      onSelect={(d) => setBooking((b) => ({ ...b, date: d ?? undefined, timeSlot: "" }))}
                      disabled={{ before: today }}
                      weekStartsOn={1}
                      captionLayout="dropdown"
                      fromYear={new Date().getFullYear()}
                      toYear={new Date().getFullYear() + 1}
                      className="border rounded-md p-2"
                    />
                  </div>
                  <div>
                    <Label>Tijdslot</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {(booking.date ? getTimeSlotsForDate(booking.date) : DEFAULT_SLOTS).map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setBooking((b) => ({ ...b, timeSlot: slot }))}
                          className={`px-3 py-2 rounded-md border text-sm text-left ${
                            booking.timeSlot === slot ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                          } ${slot.includes("geen slots") ? "opacity-60 cursor-not-allowed" : ""}`}
                          disabled={slot.includes("geen slots")}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>Vorige</Button>
                  <Button onClick={() => setStep(4)} disabled={!isStep3Valid}>Volgende stap</Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Button variant="ghost" onClick={() => setStep(3)} className="px-2">←</Button>
                  <h3 className="font-heading font-semibold text-xl">Uw gegevens</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Voornaam</Label>
                    <Input id="firstName" value={booking.firstName} onChange={(e) => setBooking((b) => ({ ...b, firstName: e.target.value }))} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Achternaam</Label>
                    <Input id="lastName" value={booking.lastName} onChange={(e) => setBooking((b) => ({ ...b, lastName: e.target.value }))} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" value={booking.email} onChange={(e) => setBooking((b) => ({ ...b, email: e.target.value }))} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefoon</Label>
                    <Input id="phone" value={booking.phone} onChange={(e) => setBooking((b) => ({ ...b, phone: e.target.value }))} className="mt-2" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="street">Straat en huisnummer</Label>
                    <Input id="street" value={booking.street} onChange={(e) => setBooking((b) => ({ ...b, street: e.target.value }))} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="postal">Postcode</Label>
                    <Input id="postal" value={booking.postalCode} onChange={(e) => setBooking((b) => ({ ...b, postalCode: e.target.value }))} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="city">Stad</Label>
                    <Input id="city" value={booking.city} onChange={(e) => setBooking((b) => ({ ...b, city: e.target.value }))} className="mt-2" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="message">Omschrijf hier uw probleem of vraag:</Label>
                    <textarea id="message" className="w-full border rounded-md px-3 py-2 mt-2 min-h-[100px]" value={booking.message} onChange={(e) => setBooking((b) => ({ ...b, message: e.target.value }))} />
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(3)}>Vorige</Button>
                  <Button onClick={handleSubmit} disabled={!isStep4Valid || loading}>
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
