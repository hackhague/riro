"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, CheckCircle2, User as UserIcon, Info } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format, startOfToday } from "date-fns";
import "react-day-picker/dist/style.css";
import { toast } from "@/hooks/use-toast";

// Supported services for booking
const SERVICES = [
  { id: "remote_quickfix", label: "Particulier - Computerhulp op afstand" },
  { id: "onsite_standard", label: "Particulier - Computerhulp aan huis" },
  { id: "onsite_business", label: "Zakelijk - IT-support op afstand" },
  { id: "onsite_business_remote", label: "Zakelijk - IT-support aan kantoor" },
];

// Service categories for "Computerhulp op afstand" and "Computerhulp aan huis"
const SERVICE_CATEGORIES = [
  { id: "printerhulp", title: "Printerhulp" },
  { id: "email", title: "E-mail Problemen" },
  { id: "hardware", title: "Windows/Mac Problemen" },
  { id: "wifi", title: "Internet & WiFi" },
  { id: "tablet", title: "Tablet & Smartphone" },
  { id: "uitleg", title: "Uitleg & Les" },
];

// Default 2-uur tijdsloten
const DEFAULT_SLOTS = [
  "09:00 – 11:00",
  "11:00 – 13:00",
  "13:00 – 15:00",
  "15:00 – 17:00",
  "18:00 – 20:00",
];

function getTimeSlotsForDate(date: Date) {
  // Disable same-day past ranges
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
  service: string;
  serviceCategory: string;
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
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<Booking>({
    service: SERVICES[0].id,
    serviceCategory: "",
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

  const needsCategoryStep = booking.service === "remote_quickfix" || booking.service === "onsite_standard";

  const isStep1Valid = !!booking.service;
  const isStep2Valid = !needsCategoryStep || !!booking.serviceCategory;
  const isStep3Valid = !!booking.date && !!booking.timeSlot && !booking.timeSlot.includes("geen slots");
  const isStep4Valid =
    booking.firstName.trim() !== "" &&
    booking.lastName.trim() !== "" &&
    booking.phone.trim() !== "" &&
    booking.street.trim() !== "" &&
    booking.postalCode.trim() !== "" &&
    booking.city.trim() !== "";

  const selectedService = useMemo(() => SERVICES.find((s) => s.id === booking.service)?.label ?? "", [booking.service]);
  const selectedCategory = useMemo(() => SERVICE_CATEGORIES.find((c) => c.id === booking.serviceCategory)?.title ?? "", [booking.serviceCategory]);

  const handleSubmit = async () => {
    if (!isStep4Valid || !isStep3Valid) return;
    setLoading(true);
    try {
      const payload = {
        service: booking.service,
        serviceLabel: selectedService || booking.service,
        serviceCategory: booking.serviceCategory || undefined,
        serviceCategoryLabel: selectedCategory || undefined,
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
      } as any;

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
        service: SERVICES[0].id,
        serviceCategory: "",
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

  return (
    <div className="w-full">
      {!compact && (
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Plan vandaag nog een afspraak!</h2>
          <p className="text-foreground/80 mt-2">
            Kies een dienst, selecteer een datum en tijdslot en vul je gegevens in. We bevestigen je afspraak per
            telefoon of e-mail.
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
                    <Info className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Dienst selectie</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">{selectedService || "Kies een dienst"}</p>
                    </div>
                  </div>
                  {isStep1Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                {needsCategoryStep && (
                  <li className={`px-4 py-4 flex items-center justify-between ${step === 1 ? "bg-primary" : "bg-primary/90"}`}>
                    <div className="flex items-center gap-3">
                      <Info className="h-5 w-5" />
                      <div>
                        <p className="text-sm opacity-80">Onderwerp</p>
                        <p className="text-sm font-semibold truncate max-w-[160px]">{selectedCategory || "Kies een onderwerp"}</p>
                      </div>
                    </div>
                    {isStep2Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                  </li>
                )}
                <li className={`px-4 py-4 flex items-center justify-between ${step === (needsCategoryStep ? 2 : 1) ? "bg-primary" : "bg-primary/90"}`}>
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
                <li className={`px-4 py-4 flex items-center justify-between ${step === (needsCategoryStep ? 3 : 2) ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <UserIcon className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Jouw informatie</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">
                        {booking.firstName && booking.lastName ? `${booking.firstName} ${booking.lastName}` : "Vul je gegevens in"}
                      </p>
                    </div>
                  </div>
                  {isStep4Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className="px-4 py-4 text-sm bg-primary/80">
                  <p className="opacity-100">Kom in contact:</p>
                  <p className="opacity-60">070 211 9191</p>
                  <p className="opacity-60">info@instantit.nl</p>
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
                <h3 className="font-heading font-semibold text-xl mb-4">Dienst selectie</h3>
                <div className="grid gap-4 max-w-lg">
                  <div>
                    <Label htmlFor="service">Dienst</Label>
                    <Select value={booking.service} onValueChange={(v) => setBooking((b) => ({ ...b, service: v, serviceCategory: "" }))}>
                      <SelectTrigger id="service" className="mt-2">
                        <SelectValue placeholder="Kies een dienst" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s.id} value={s.id}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button onClick={() => setStep(needsCategoryStep ? 1 : 2)} disabled={!isStep1Valid}>
                    Volgende stap
                  </Button>
                </div>
              </div>
            )}

            {needsCategoryStep && step === 1 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Button variant="ghost" onClick={() => setStep(0)} className="px-2">←</Button>
                  <h3 className="font-heading font-semibold text-xl">Wat voor hulp heeft u nodig?</h3>
                </div>
                <div className="grid gap-3 max-w-lg">
                  {SERVICE_CATEGORIES.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setBooking((b) => ({ ...b, serviceCategory: category.id }))}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        booking.serviceCategory === category.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <p className="font-semibold text-foreground">{category.title}</p>
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(0)}>Vorige</Button>
                  <Button onClick={() => setStep(2)} disabled={!isStep2Valid}>Volgende stap</Button>
                </div>
              </div>
            )}

            {step === (needsCategoryStep ? 2 : 1) && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Button variant="ghost" onClick={() => setStep(needsCategoryStep ? 1 : 0)} className="px-2">←</Button>
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
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(needsCategoryStep ? 1 : 0)}>Vorige</Button>
                  <Button onClick={() => setStep(needsCategoryStep ? 3 : 2)} disabled={!isStep3Valid}>Volgende stap</Button>
                </div>
              </div>
            )}

            {step === (needsCategoryStep ? 3 : 2) && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Button variant="ghost" onClick={() => setStep(needsCategoryStep ? 2 : 1)} className="px-2">←</Button>
                  <h3 className="font-heading font-semibold text-xl">Jouw informatie</h3>
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
                    <Label htmlFor="message">Omschrijf hier uw probleem:</Label>
                    <textarea id="message" className="w-full border rounded-md px-3 py-2 mt-2 min-h-[100px]" value={booking.message} onChange={(e) => setBooking((b) => ({ ...b, message: e.target.value }))} />
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(needsCategoryStep ? 2 : 1)}>Vorige</Button>
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
