{/* --- Tarieven: twee blokken (Particulier | Zakelijk) --- */}
<section className="py-12 md:py-16 bg-secondary">
  <div className="container mx-auto px-4">
    <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-6">Tarieven</h2>
    <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-10">
      We starten meestal <strong>binnen 60 minuten op afstand</strong>. Als het nodig is komen we binnen <strong>24–48 uur</strong> langs.
      Duidelijke prijzen, geen verrassingen.
    </p>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Particulier blok */}
      <div>
        <h3 className="font-heading font-semibold text-2xl mb-4">Voor particulieren</h3>
        <p className="text-foreground/70 mb-6">Heldere pakketten voor thuis: kies snel en we helpen direct.</p>

        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="border-2 border-accent">
            <CardContent className="p-6 text-center">
              <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-lg mb-2">Eerste hulp op afstand</h4>
              <p className="text-2xl font-bold text-accent mb-1">€149</p>
              <p className="text-sm text-foreground/60 mb-2">Tot 60 min — wachtwoord, 2FA, check op malware.</p>
              <p className="text-xs text-foreground/70">We proberen meestal direct te helpen, vaak is dit voldoende.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-lg mb-2">Spoed aan huis</h4>
              <p className="text-2xl font-bold text-primary mb-1">€199</p>
              <p className="text-sm text-foreground/60 mb-2">Tot 2 uur — als op afstand niet kan of als er haast is.</p>
              <p className="text-xs text-foreground/70">Avond/weekend mogelijk als er plek is.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-lg mb-2">Nazorg & preventie</h4>
              <p className="text-2xl font-bold text-primary mb-1">€69</p>
              <p className="text-sm text-foreground/60 mb-2">Per uur — wachtwoordmanager, back-up en tips.</p>
              <p className="text-xs text-foreground/70">Gratis 30 min herbeoordeling binnen 7 dagen voor hetzelfde incident.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Zakelijk blok */}
      <div>
        <h3 className="font-heading font-semibold text-2xl mb-4">Voor kleine bedrijven</h3>
        <p className="text-foreground/70 mb-6">Praktische, snelle hulp voor winkels, praktijkjes en zzp'ers — wij brengen u weer aan het werk.</p>

        <div className="grid sm:grid-cols-2 gap-6">
          <Card className="border-2 border-accent">
            <CardContent className="p-6 text-center">
              <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-lg mb-2">Eerste hulp op afstand (zakelijk)</h4>
              <p className="text-2xl font-bold text-accent mb-1">€159</p>
              <p className="text-sm text-foreground/60 mb-2">Tot 60 min — snel weer doorwerken, mailbox/accountherstel.</p>
              <p className="text-xs text-foreground/70">Wij schakelen indien nodig met leverancier of bank.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-lg mb-2">Spoed op locatie</h4>
              <p className="text-2xl font-bold text-primary mb-1">€249</p>
              <p className="text-sm text-foreground/60 mb-2">Tot 2 uur — kassa/PIN/internet weer werkend.</p>
              <p className="text-xs text-foreground/70">We leveren ook een kort actie- en verzekeringsrapport.</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary col-span-full sm:col-span-2">
            <CardContent className="p-6 text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-semibold text-lg mb-2">First Response pakket</h4>
              <p className="text-2xl font-bold text-primary mb-1">€499</p>
              <p className="text-sm text-foreground/60 mb-2">Tot 4 uur — op afstand + op locatie voor grotere incidenten.</p>
              <p className="text-xs text-foreground/70">Voor ransomware of meerdere getroffen systemen: veilig stellen, tijdelijk werkend maken en kort rapport.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    <p className="text-center text-foreground/60 text-sm mt-8">
      Op afstand: vooraf betalen via betaallink. Aan huis/zakelijk: pin mogelijk. Extra tijd en reistijd worden altijd vooraf besproken.
    </p>
  </div>
</section>
