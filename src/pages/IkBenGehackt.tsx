{/* Tarieven – Ik ben gehackt */ }
<section className="py-12 md:py-16 bg-secondary">
  <div className="container mx-auto px-4">
    <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">Tarieven – ik ben gehackt</h2>

    <p className="text-center text-foreground/70 max-w-3xl mx-auto mb-8">
      We starten meestal <strong>binnen 60 minuten op afstand</strong>. Als het nodig is komen we
      <strong> binnen 24–48 uur</strong> langs. Heldere prijzen, geen verrassingen.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {/* Particulier – op afstand */}
      <Card className="border-2 border-accent">
        <CardContent className="p-6 text-center">
          <h3 className="font-heading font-semibold text-xl mb-2">Eerste hulp op afstand (particulier)</h3>
          <p className="text-3xl font-bold text-accent mb-1">€149</p>
          <p className="text-sm text-foreground/60 mb-4">Tot 60 min • vaak genoeg voor herstel</p>
          <p className="text-xs text-foreground/70">
            Wachtwoorden resetten, 2-stapsverificatie, vreemde e-mailregels uit, controle op malware.
          </p>
        </CardContent>
      </Card>

      {/* Particulier – aan huis */}
      <Card>
        <CardContent className="p-6 text-center">
          <h3 className="font-heading font-semibold text-xl mb-2">Spoed aan huis (particulier)</h3>
          <p className="text-3xl font-bold text-primary mb-1">€199</p>
          <p className="text-sm text-foreground/60 mb-4">Tot 2 uur • we maken je apparaat weer veilig</p>
          <p className="text-xs text-foreground/70">
            Als op afstand niet kan of er haast is. Avond/weekend mogelijk als er plek is.
          </p>
        </CardContent>
      </Card>

      {/* Zakelijk – op afstand */}
      <Card>
        <CardContent className="p-6 text-center">
          <h3 className="font-heading font-semibold text-xl mb-2">Eerste hulp op afstand (zakelijk)</h3>
          <p className="text-3xl font-bold text-primary mb-1">€159</p>
          <p className="text-sm text-foreground/60 mb-4">Tot 60 min • snel weer doorwerken</p>
          <p className="text-xs text-foreground/70">
            Accounts herstellen, mailbox opschonen, schakelen met bank/leverancier waar nodig.
          </p>
        </CardContent>
      </Card>

      {/* Zakelijk – op locatie */}
      <Card>
        <CardContent className="p-6 text-center">
          <h3 className="font-heading font-semibold text-xl mb-2">Spoed op locatie (zakelijk)</h3>
          <p className="text-3xl font-bold text-primary mb-1">€249</p>
          <p className="text-sm text-foreground/60 mb-4">Tot 2 uur • kassa/PIN/e-mail weer werkend</p>
          <p className="text-xs text-foreground/70">
            We zetten u weer werkend neer en maken een kort verslag met vervolgstappen.
          </p>
        </CardContent>
      </Card>

      {/* Zakelijk – First Response pakket */}
      <Card className="border-2 border-primary">
        <CardContent className="p-6 text-center">
          <h3 className="font-heading font-semibold text-xl mb-2">First Response pakket (zakelijk)</h3>
          <p className="text-3xl font-bold text-primary mb-1">€499</p>
          <p className="text-sm text-foreground/60 mb-4">Tot 4 uur • op afstand + op locatie</p>
          <p className="text-xs text-foreground/70">
            Voor zwaardere incidenten (bijv. ransomware of meerdere accounts). Veilig stellen, herstellen waar mogelijk,
            tijdelijke noodoplossing (bijv. 4G-internet), kort rapport voor verzekering.
          </p>
        </CardContent>
      </Card>

      {/* Nazorg */}
      <Card>
        <CardContent className="p-6 text-center">
          <h3 className="font-heading font-semibold text-xl mb-2">Nazorg & preventie</h3>
          <p className="text-3xl font-bold text-primary mb-1">€69</p>
          <p className="text-sm text-foreground/60 mb-4">Per uur • wachtwoordmanager, back-up, tips</p>
          <p className="text-xs text-foreground/70">Gratis herbeoordeling binnen 7 dagen (30 min op afstand).</p>
        </CardContent>
      </Card>
    </div>

    <p className="text-center text-foreground/60 text-sm mt-8">
      Op afstand: vooraf betalen via betaallink. Aan huis/zakelijk: pinnen mogelijk. Extra tijd altijd in overleg.
    </p>
  </div>
</section>
