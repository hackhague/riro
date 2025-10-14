import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, CheckCircle2, User as UserIcon, Info } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format, isBefore, startOfToday } from "date-fns";
import "react-day-picker/dist/style.css";
import { toast } from "@/hooks/use-toast";

// Supported services for booking
const SERVICES = [
  { id: "remote_quickfix", label: "Computerhulp op afstand" },
  { id: "onsite_standard", label: "Computerhulp aan huis" },
  { id: "onsite_business", label: "IT-support aan kantoor" },
  { id: "wifi_network", label: "WiFi & Netwerk optimalisatie" },
  { id: "hack_support", label: "Ik ben gehackt" },
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
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<Booking>({
    service: SERVICES[0].id,
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

  const isStep1Valid = !!booking.service;
  const isStep2Valid = !!booking.date && !!booking.timeSlot && !booking.timeSlot.includes("geen slots");
  const isStep3Valid =
    booking.firstName.trim() !== "" &&
    booking.lastName.trim() !== "" &&
    booking.phone.trim() !== "" &&
    booking.street.trim() !== "" &&
    booking.postalCode.trim() !== "" &&
    booking.city.trim() !== "";

  const selectedService = useMemo(() => SERVICES.find((s) => s.id === booking.service)?.label ?? "", [booking.service]);

  const handleSubmit = async () => {
    if (!isStep3Valid || !isStep2Valid) return;
    setLoading(true);
    try {
      const idFallback = (globalThis.crypto && (crypto as any).randomUUID) ? (crypto as any).randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const approvalToken = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

      let recordId: string | number = idFallback;

      const basePayload = {
        service: booking.service,
        service_label: selectedService,
        date_iso: booking.date ? booking.date.toISOString() : null,
        date_display: booking.date ? format(booking.date, "PPP") : null,
        time_slot: booking.timeSlot,
        first_name: booking.firstName,
        last_name: booking.lastName,
        email: booking.email,
        phone: booking.phone,
        street: booking.street,
        postal_code: booking.postalCode,
        city: booking.city,
        message: booking.message,
        status: "new",
        source: "website",
        approval_token: approvalToken,
        created_at: new Date().toISOString(),
      } as any;

      // Store in Supabase (table: appointments) if configured
      const hasSupabase = !!(import.meta as any).env?.VITE_SUPABASE_URL && !!(import.meta as any).env?.VITE_SUPABASE_PUBLISHABLE_KEY;
      if (hasSupabase) {
        const mod: any = await import("@/integrations/supabase/client");
        const sb: any = mod.supabase as any;
        const { data, error } = await sb.from("appointments").insert(basePayload).select("id").single();
        if (error) throw error;
        if (data?.id !== undefined) recordId = data.id;
      }

      // Build approval/cancel URLs for Zapier one-click actions
      const approveBase = (import.meta as any).env?.VITE_ZAPIER_APPROVE_WEBHOOK_URL;
      const cancelBase = (import.meta as any).env?.VITE_ZAPIER_CANCEL_WEBHOOK_URL;
      const approve_url = approveBase ? `${approveBase}?id=${encodeURIComponent(String(recordId))}&token=${encodeURIComponent(approvalToken)}` : undefined;
      const cancel_url = cancelBase ? `${cancelBase}?id=${encodeURIComponent(String(recordId))}&token=${encodeURIComponent(approvalToken)}` : undefined;

      const payload = { id: recordId, ...basePayload, approve_url, cancel_url };

      // Notify Zapier of new appointment
      const newWebhook = (import.meta as any).env?.VITE_ZAPIER_NEW_APPOINTMENT_WEBHOOK_URL || (import.meta as any).env?.VITE_ZAPIER_WEBHOOK_URL;
      if (newWebhook) {
        fetch(newWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {});
      }

      toast({ title: "Afspraak verstuurd", description: "We nemen snel contact op om te bevestigen." });
      setStep(0);
      setBooking({
        service: SERVICES[0].id,
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
                <li className={`px-4 py-4 flex items-center justify-between ${step === 1 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Datum & tijdslot</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">
                        {booking.date ? `${format(booking.date, "d MMM yyyy")} · ${booking.timeSlot || "—"}` : "Nog niet gekozen"}
                      </p>
                    </div>
                  </div>
                  {isStep2Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
                </li>
                <li className={`px-4 py-4 flex items-center justify-between ${step === 2 ? "bg-primary" : "bg-primary/90"}`}>
                  <div className="flex items-center gap-3">
                    <UserIcon className="h-5 w-5" />
                    <div>
                      <p className="text-sm opacity-80">Jouw informatie</p>
                      <p className="text-sm font-semibold truncate max-w-[160px]">
                        {booking.firstName && booking.lastName ? `${booking.firstName} ${booking.lastName}` : "Vul je gegevens in"}
                      </p>
                    </div>
                  </div>
                  {isStep3Valid && <CheckCircle2 className="h-5 w-5 opacity-80" />}
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
                    <Select value={booking.service} onValueChange={(v) => setBooking((b) => ({ ...b, service: v }))}>
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
                  <Button onClick={() => setStep(1)} disabled={!isStep1Valid}>
                    Volgende stap
                  </Button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Button variant="ghost" onClick={() => setStep(0)} className="px-2">←</Button>
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
                  <Button variant="outline" onClick={() => setStep(0)}>Vorige</Button>
                  <Button onClick={() => setStep(2)} disabled={!isStep2Valid}>Volgende stap</Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Button variant="ghost" onClick={() => setStep(1)} className="px-2">←</Button>
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
                  <Button variant="outline" onClick={() => setStep(1)}>Vorige</Button>
                  <Button onClick={handleSubmit} disabled={!isStep3Valid || loading}>
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
