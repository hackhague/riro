import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Calendar } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email?: string;
  when?: string;
  message: string;
};

export default function Afspraak() {
  const { register, handleSubmit, formState } = useForm<FormData>({
    defaultValues: { name: "", phone: "", email: "", when: "", message: "" },
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => {
    const lines = [
      `Naam: ${data.name}`,
      `Telefoon: ${data.phone}`,
      data.email ? `E-mail: ${data.email}` : null,
      data.when ? `Voorkeur: ${new Date(data.when).toLocaleString()}` : null,
      `Beschrijving: ${data.message}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/31702119191?text=${text}`, "_blank");
  };

  const disableSubmit = useMemo(() => !formState.isValid, [formState.isValid]);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-3">Plan een afspraak</h1>
            <p className="text-lg md:text-xl text-foreground/80">Liever niet bellen of appen? Vul je gegevens in en we reageren snel.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block text-sm font-medium mb-1">Naam</label>
                  <input className="w-full border rounded-md px-3 py-2" required {...register("name", { required: true })} />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Telefoon</label>
                    <input className="w-full border rounded-md px-3 py-2" required {...register("phone", { required: true })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">E-mail (optioneel)</label>
                    <input type="email" className="w-full border rounded-md px-3 py-2" {...register("email")} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Voorkeursdatum/tijd (optioneel)</label>
                  <input type="datetime-local" className="w-full border rounded-md px-3 py-2" {...register("when")} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Waarmee kunnen we helpen?</label>
                  <textarea className="w-full border rounded-md px-3 py-2 min-h-[120px]" required {...register("message", { required: true })} />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" variant="accent" disabled={disableSubmit}>
                    <Calendar className="mr-2" /> Verstuur via WhatsApp
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="tel:+31702119191"><Phone className="mr-2"/> Bel 070 211 9191</a>
                  </Button>
                </div>
              </form>
              <p className="text-xs text-foreground/60 mt-4">Wil je liever mailen? Stuur ons een bericht: <a className="underline" href="mailto:support@instantit.nl">support@instantit.nl</a></p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
