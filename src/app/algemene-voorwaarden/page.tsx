import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden – InstantIT",
  description: "Algemene Voorwaarden InstantIT — versie 1.1 (20-10-2025).",
  alternates: {
    canonical: "https://www.instantit.nl/algemene-voorwaarden",
  },
};

export default function AlgemeneVoorwaarden() {
  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-6">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Algemene Voorwaarden – InstantIT
        </h1>
        <p className="text-sm text-muted-foreground">
          Versie: 1.1 • Datum: 20-10-2025
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Onderneming: InstantIT • Gegevens: 85746916, info@instantit.nl
        </p>
      </header>

      <section className="prose prose-sm md:prose base:text-foreground max-w-none">
        <h2>0. Begrippen &amp; rangorde</h2>
        <ul>
          <li>
            <strong>Schriftelijk</strong>: ook e-mail, sms, berichten via de
            afspraakwizard of vergelijkbare elektronische bevestiging.
          </li>
          <li>
            <strong>Remote support</strong>: o.a. AnyDesk/TeamViewer of
            vergelijkbare tooling.
          </li>
          <li>
            <strong>Startblok</strong>: het eerste vaste tijdsblok van een afspraak
            (remote of onsite).
          </li>
          <li>
            <strong>Klant</strong>: iedere (rechts)persoon die diensten/producten
            van InstantIT afneemt.
          </li>
        </ul>
        <p>
          <strong>Rangorde</strong>: Deze voorwaarden prevaleren boven
          inkoop-/leveringsvoorwaarden van de klant. Afwijkingen gelden
          uitsluitend indien <strong>schriftelijk</strong> door InstantIT
          bevestigd.
        </p>

        <h2>1. Toepassing</h2>
        <p>
          <strong>1.1</strong> Deze voorwaarden gelden voor alle offertes,
          afspraken, diensten en leveringen van InstantIT aan consumenten en
          zakelijke klanten.
        </p>
        <p>
          <strong>1.2</strong> Door het boeken van een afspraak, het aanvaarden
          van een offerte of het gebruik van onze diensten verklaart de klant
          deze voorwaarden te hebben gelezen en ermee in te stemmen.
        </p>
        <p>
          <strong>1.3</strong> Marketinguitingen (zoals “meestal binnen 60 min”,
          “direct geholpen”) zijn <strong>geen</strong> resultaat- of
          tijdgarantie.
        </p>

        <h2>2. Diensten &amp; werkwijze</h2>
        <p>
          <strong>2.1</strong> Werkvolgorde: eerst op afstand; indien nodig
          aan huis/op kantoor.
        </p>
        <p>
          <strong>2.2</strong> IT-dienstverlening is in beginsel een{" "}
          <strong>inspanningsverplichting</strong>, geen resultaatgarantie,
          tenzij uitdrukkelijk schriftelijk anders overeengekomen (bijv. pakket
          met vaste, omschreven scope).
        </p>
        <p>
          <strong>2.3</strong> Tijdvakken en starttijden zijn <strong>indicatief</strong>; er geldt geen SLA, tenzij schriftelijk overeengekomen.
        </p>
        <p>
          <strong>2.4</strong> <strong>Declarabele wachttijd</strong>: tijd tijdens
          updates, back-ups, herstarts, downloads, indexing, encryptie,
          (malware)scans of restores is declarabele werktijd.
        </p>
        <p>
          <strong>2.5</strong> InstantIT mag werkzaamheden weigeren of staken bij
          onveilige situaties, illegale software/activiteiten, agressie,
          discriminatie, het uitblijven van noodzakelijke medewerking of
          strijdige instructies. Tot dan gemaakte uren en kosten blijven
          verschuldigd.
        </p>
        <p>
          <strong>2.6</strong> Incident response (o.a. “Gehackt? Directe hulp”) is
          pragmatisch gericht op containment en herstel; <strong>geen</strong>{" "}
          garantie op volledig herstel, forensische bewijswaarde of terughalen
          van data/bedragen, tenzij vooraf schriftelijk anders overeengekomen
          (afwijkende scope/tarieven, keten van bewaring).
        </p>

        <h2>3. Prijzen, tarieven en kosten</h2>
        <p>
          <strong>3.1</strong> Consumententarieven zijn incl. btw; zakelijke
          tarieven excl. btw.
        </p>
        <p>
          <strong>3.2</strong> De op <code>/tarieven</code> genoemde prijzen gelden
          op het <strong>moment van boeken</strong>; prijzen kunnen wijzigen.
          Druk-/weergavefouten en door klant overgelegde screenshots/caches zijn
          niet bindend.
        </p>
        <p>
          <strong>3.3</strong> Tijdsgebaseerde hulp: startblok (remote 30 min /
          onsite 45 of 60 min), daarna afronding per <strong>begonnen</strong> 15
          minuten.
        </p>
        <p>
          <strong>3.4</strong> Spoedtarieven en avond/weekend/feestdagtoeslagen
          volgens /tarieven. Spoed is pas definitief na bevestiging door
          InstantIT.
        </p>
        <p>
          <strong>3.5</strong> Reisgebied: binnen Haaglanden geen voorrijkosten;
          daarbuiten kunnen kilometer- en reistijdkosten gelden conform
          /tarieven.
        </p>
        <p>
          <strong>3.6</strong> <strong>Parkeer-, tol- en eventuele EV-laadkosten</strong>{" "}
          zijn voor rekening van de klant en worden tegen kostprijs doorbelast
          (bon/overzicht beschikbaar).
        </p>
        <p>
          <strong>3.7</strong> Materiaal-/onderdeel- en softwarelicentiekosten
          worden separaat gefactureerd.
        </p>
        <p>
          <strong>3.8</strong> InstantIT registreert werktijd en werkzaamheden
          (o.a. via tooling/logs). Die registratie is leidend, tenzij de klant
          aantoont dat deze evident onjuist is.
        </p>

        <h2>4. Offertes, planning en toegang</h2>
        <p>
          <strong>4.1</strong> Offertes/indicaties zijn vrijblijvend, tenzij
          anders vermeld, en 14 dagen geldig.
        </p>
        <p>
          <strong>4.2</strong> Afspraken zijn indicatief binnen tijdvakken;
          verkeer, spoedwerk of overmacht kan verschuiving geven. InstantIT
          communiceert dit zo snel mogelijk.
        </p>
        <p>
          <strong>4.3</strong> De klant zorgt tijdig voor toegang (adres,
          parkeermogelijkheid, toegangscodes), aanwezigheid van een
          bevoegde/volwassen persoon en werkende internet/voeding. Wachttijd of
          uitloop door ontbreken hiervan is declarabel.
        </p>
        <p>
          <strong>4.4</strong> InstantIT kan derden/onderaannemers inschakelen;
          geheimhouding en zorgvuldigheid worden geborgd.
        </p>

        <h2>5. Annuleren, uitstellen en no-show</h2>
        <p>
          <strong>5.1</strong> Kosteloos annuleren/uitstellen kan tot{" "}
          <strong>24 uur</strong> vóór het tijdslot.
        </p>
        <p>
          <strong>5.2</strong> Bij annulering binnen 24 uur of no-show is het{" "}
          <strong>startblok</strong> verschuldigd; bij spoedafspraken het{" "}
          <strong>spoed-starttarief</strong>.
        </p>
        <p>
          <strong>5.3</strong> <strong>Remote no-show</strong>: geen respons binnen{" "}
          <strong>10 minuten</strong> na het afgesproken startmoment
          (aantoonbare bel-/sms-/toolingpogingen door InstantIT gelden als
          bewijs).
        </p>
        <p>
          <strong>5.4</strong> <strong>Onsite no-show</strong>: niet
          aanwezig/openen binnen <strong>15 minuten</strong> na
          aanbellen/bellen op het opgegeven adres (foto/logs gelden als bewijs).
        </p>
        <p>
          <strong>5.5</strong> Indien InstantIT &gt; <strong>60 minuten</strong>{" "}
          vertraagt, mag klant kosteloos omboeken. Er bestaat geen recht op
          (gevolg)schade of korting.
        </p>
        <p>
          <strong>5.6</strong> Als InstantIT door overmacht niet kan komen,
          wordt kosteloos omgeboekt of naar rato gecrediteerd; zie art. 15.
        </p>

        <h2>6. Betaling, eigendomsvoorbehoud, retentierecht &amp; chargebacks</h2>
        <p>
          <strong>6.1</strong> Consumenten betalen direct na uitvoering
          (pin/QR/betaalverzoek/contant), tenzij anders overeengekomen.
        </p>
        <p>
          <strong>6.2</strong> Zakelijke betaling: binnen <strong>7 dagen</strong>{" "}
          na factuurdatum, tenzij anders overeengekomen.
        </p>
        <p>
          <strong>6.3</strong> Bij te late betaling: wettelijke (handels)rente +
          redelijke incassokosten conform Wet Incassokosten.
        </p>
        <p>
          <strong>6.4</strong> InstantIT kan (aan)betaling vragen bij onderdelen
          of inkoop. <strong>Eigendomsvoorbehoud</strong>: geleverde goederen
          blijven eigendom van InstantIT totdat volledig is betaald.
        </p>
        <p>
          <strong>6.5</strong> <strong>Retentierecht</strong>: InstantIT mag
          goederen en (digitale) eigendommen van klant onder zich houden totdat
          volledig is betaald. Bij niet-afhalen binnen <strong>60 dagen</strong>{" "}
          na gereedmelding kan opslag worden berekend van <strong>€2,50 per
          dag</strong>. Na schriftelijke aanzegging (termijn <strong>14 dagen</strong>)
          mag InstantIT goederen verantwoord laten vervreemden of verkopen ter
          beperking van schade; een eventueel overschot wordt verrekend.
        </p>
        <p>
          <strong>6.6</strong> <strong>Chargeback/stornering</strong>: onterechte
          stornering brengt alle externe kosten plus <strong>€25
          administratiekosten</strong> met zich mee, naast rente en
          incassokosten.
        </p>

        <h2>7. No-cure-no-pay (NCNP) &amp; nazorg</h2>
        <p>
          <strong>7.1</strong> NCNP geldt uitsluitend wanneer een <strong>puur
          technisch probleem</strong> niet is verholpen en er geen sprake is van
          advies, training, onderzoek/diagnose, cyber-/incidentdiensten,
          dataherstel-inspanningen, pakketwerk of beperkingen van de klant.
        </p>
        <p>
          <strong>7.2</strong> NCNP is <strong>niet</strong> van toepassing bij
          ontbrekende toegang/wachtwoorden/licenties, defecte of{" "}
          <strong>EOL</strong>-hardware/OS, instabiele internet/voeding, het
          afwijzen van voorgestelde maatregelen (bijv. herinstallatie/hardwarevervanging),
          en bij illegale software/activiteiten.
        </p>
        <p>
          <strong>7.3</strong> Tijd besteed aan onderzoek/diagnose is betaald,
          tenzij vooraf schriftelijk anders bevestigd.
        </p>
        <p>
          <strong>7.4</strong> <strong>Nazorg</strong>: uitsluitend <strong>hetzelfde
          probleem op hetzelfde apparaat</strong> binnen <strong>7 kalenderdagen</strong>.
          Uitgesloten: nieuwe oorzaken, updates/upgrades, configuratie- of
          netwerkwijzigingen, nieuwe malware, gebruikersfouten, andere
          apparaten/accounts. Log/rapport van InstantIT is leidend voor
          causaliteit.
        </p>

        <h2>8. Verplichtingen klant</h2>
        <p>
          <strong>8.1</strong> Klant waarborgt geldige licenties, legale
          software, deugdelijke hardware en <strong>actuele back-ups</strong>{" "}
          vóór aanvang van werkzaamheden, tenzij uitdrukkelijk door InstantIT
          geregeld.
        </p>
        <p>
          <strong>8.2</strong> Indien geen (recente) back-up beschikbaar is,
          aanvaardt klant expliciet het risico op (gedeeltelijk) dataverlies.
        </p>
        <p>
          <strong>8.3</strong> Klant verleent tijdig alle toestemmingen en
          informatie (o.a. inloggegevens/adminrechten) die redelijkerwijs
          nodig zijn. Tijdverlies hierdoor is declarabel.
        </p>
        <p>
          <strong>8.4</strong> Bij remote hulp geeft klant toestemming voor
          scherm-/systeemtoegang via onze tools; klant kan vertrouwelijke
          informatie sluiten of tijdelijk verplaatsen.
        </p>
        <p>
          <strong>8.5</strong> Klant is zelf verantwoordelijk voor meldingen aan
          bank/politie/AP/verzekeraar bij incidenten, tenzij schriftelijk anders
          overeengekomen.
        </p>

        <h2>9. Data, privacy en geheimhouding</h2>
        <p>
          <strong>9.1</strong> InstantIT behandelt gegevens vertrouwelijk en
          conform het Privacybeleid.
        </p>
        <p>
          <strong>9.2</strong> Rolafbakening: InstantIT is zelfstandig{" "}
          <strong>verwerkingsverantwoordelijke</strong> voor eigen
          administratie; bij werkzaamheden <strong>uitsluitend op aanwijzing</strong>{" "}
          van de klant kan InstantIT als <strong>verwerker</strong> optreden. Bij{" "}
          <strong>structurele</strong> verwerkingen wordt op verzoek een
          verwerkersovereenkomst gesloten.
        </p>
        <p>
          <strong>9.3</strong> InstantIT gebruikt minimale logs/screen­shots
          uitsluitend t.b.v. intake/diagnose/uitvoering/nazorg en bewijs van
          werkzaamheden, met passende beveiliging en beperkte bewaartermijnen.
        </p>
        <p>
          <strong>9.4</strong> InstantIT is geen DPO en niet verantwoordelijk
          voor wettelijke verplichtingen van de klant (zoals meldplichten).
        </p>
        <p>
          <strong>9.5</strong> Wachtwoorden worden niet langer bewaard dan
          noodzakelijk; wijzig deze na afloop.
        </p>

        <h2>10. Beveiliging, virussen en incidenten</h2>
        <p>
          <strong>10.1</strong> Beveiligingsmaatregelen (antivirus, updates,
          hardening) verlagen risico maar sluiten malware/hack niet uit.
        </p>
        <p>
          <strong>10.2</strong> Bij incidenten kan InstantIT maatregelen nemen
          (isoleren, blokkeren, herinstalleren) om schade te beperken; dit kan
          tijdelijk functieverlies geven.
        </p>
        <p>
          <strong>10.3</strong> Dataherstel en account recovery zijn{" "}
          <strong>best-effort</strong>; er is geen garantie op volledig herstel
          of continuïteit van (social-)accounts.
        </p>

        <h2>11. Hardware, onderdelen en retour</h2>
        <p>
          <strong>11.1</strong> Onderdelen/hardware worden besteld namens en
          voor rekening van de klant. InstantIT is niet aansprakelijk voor
          leveranciersvertraging.
        </p>
        <p>
          <strong>11.2</strong> Levertermijnen zijn indicatief; bij vertraging
          bestaat geen recht op (gevolg)schade.
        </p>
        <p>
          <strong>11.3</strong> <strong>Retour</strong>: alleen ongebruikt en in
          onbeschadigde, <strong>gesloten</strong> verpakking binnen{" "}
          <strong>14 dagen</strong>, en uitsluitend indien de leverancier dit
          accepteert. Software/licenties, maatwerk en geopende/ingebouwde
          componenten zijn uitgesloten. (Re)stocking- en verzendkosten zijn voor
          de klant.
        </p>
        <p>
          <strong>11.4</strong> Fabrieksgarantie loopt via fabrikant/leverancier;
          InstantIT helpt waar redelijk met de afhandeling.
        </p>

        <h2>12. Aansprakelijkheid</h2>
        <p>
          <strong>12.1</strong> InstantIT is slechts aansprakelijk voor{" "}
          <strong>directe schade</strong> die het rechtstreekse gevolg is van
          een toerekenbare tekortkoming.
        </p>
        <p>
          <strong>12.2</strong> Aansprakelijkheid voor <strong>indirecte
          schade</strong> (o.a. gevolgschade, gederfde winst/omzet, verlies van
          data, bedrijfsschade) is uitgesloten.
        </p>
        <p>
          <strong>12.3</strong> <strong>Maximale aansprakelijkheid</strong>:
          tot het factuurbedrag van de betreffende opdracht (of, bij
          doorlopende diensten, de facturen van de laatste 3 maanden), met een
          absoluut maximum van <strong>€2.500</strong> (consument) en{" "}
          <strong>€10.000</strong> (zakelijk).
        </p>
        <p>
          <strong>12.4</strong> Deze beperkingen gelden niet bij opzet of
          bewuste roekeloosheid van de directie van InstantIT, of waar
          uitsluiting wettelijk niet is toegestaan (o.a. schade aan
          leven/gezondheid).
        </p>

        <h2>13. Herroepingsrecht (consumenten)</h2>
        <p>
          <strong>13.1</strong> Bij online/telefonische boeking van diensten heeft
          de consument <strong>14 dagen</strong> herroepingsrecht.
        </p>
        <p>
          <strong>13.2</strong> Bij een uitdrukkelijk verzoek tot <strong>directe
          uitvoering</strong> (bijv. spoed of remote) stemt de consument in
          met onmiddellijke start. Na <strong>volledige</strong> levering
          vervalt het herroepingsrecht; bij <strong>gedeeltelijke</strong>{" "}
          levering is een evenredige vergoeding verschuldigd.
        </p>
        <p>
          <strong>13.3</strong> Producten/onderdelen op maat of verzegelde
          software/licenties waarvan de verzegeling is verbroken zijn
          uitgesloten van herroeping.
        </p>
        <p>
          <strong>13.4</strong> Een modelformulier voor herroeping is beschikbaar
          via de bevestigingsmail/[link].
        </p>

        <h2>14. Intellectueel eigendom</h2>
        <p>
          <strong>14.1</strong> Alle door InstantIT geleverde documentatie,
          scripts, configuraties, templates en adviezen blijven, waar relevant,
          intellectueel eigendom van InstantIT.
        </p>
        <p>
          <strong>14.2</strong> Klant krijgt een niet-exclusieve,
          niet-overdraagbare gebruikslicentie voor het beoogde doel en na
          volledige betaling. Doorlevering of openbaarmaking is niet toegestaan
          zonder schriftelijke toestemming.
        </p>

        <h2>15. Overmacht</h2>
        <p>
          <strong>15.1</strong> Onder overmacht vallen o.a. storingen bij
          toeleveranciers, stroom-/netwerkstoringen, epidemieën, extreme
          weersomstandigheden, stakingen, files/ongelukken, software-bugs van
          derden, ziekte of uitval van personeel/onderaannemers.
        </p>
        <p>
          <strong>15.2</strong> Bij overmacht worden verplichtingen opgeschort;
          er wordt in overleg opnieuw ingepland of naar rato gecrediteerd.
        </p>

        <h2>16. Klachten</h2>
        <p>
          <strong>16.1</strong> Klachten binnen <strong>7 kalenderdagen</strong> na
          (deel)levering schriftelijk via [support-e-mail], inclusief
          order-/factuurnummer en onderbouwing (bijv. log-/fotonummer).
        </p>
        <p>
          <strong>16.2</strong> We reageren binnen <strong>5 werkdagen</strong>. Een
          klacht schort de betalingsverplichting niet op.
        </p>

        <h2>17. Slotbepalingen</h2>
        <p>
          <strong>17.1</strong> Nietigheid of vernietiging van een bepaling laat
          overige bepalingen in stand; de betreffende bepaling wordt vervangen
          door een rechtsgeldige bepaling met zoveel mogelijk dezelfde strekking.
        </p>
        <p>
          <strong>17.2</strong> Op alle rechtsverhoudingen is{" "}
          <strong>Nederlands recht</strong> van toepassing.
        </p>
        <p>
          <strong>17.3</strong> Voor consumenten geldt de wettelijk bevoegde
          rechter; voor zakelijke klanten is de <strong>rechtbank Den Haag</strong>{" "}
          bevoegd.
        </p>
        <p>
          <strong>17.4</strong> InstantIT mag deze voorwaarden wijzigen; de meest
          recente versie staat op de website. Bij lopende opdrachten geldt de
          versie die gold op het moment van boeken, tenzij schriftelijk anders
          overeengekomen.
        </p>

        <h2>18. Gedragscode &amp; weigering</h2>
        <p>
          InstantIT mag werkzaamheden weigeren of staken bij agressie,
          discriminatie, onveilige werkomstandigheden, illegale activiteiten of
          strijdige instructies. Declarabele tijd en kosten tot dat moment
          blijven verschuldigd.
        </p>

        <h2>19. Niet-werving (B2B – optioneel)</h2>
        <p>
          De zakelijke klant zal gedurende en <strong>12 maanden</strong> na de
          laatste opdracht geen medewerkers of onderaannemers van InstantIT in
          dienst nemen of direct/indirect inhuren zonder schriftelijke
          toestemming. Bij overtreding is een direct opeisbare boete van{" "}
          <strong>€5.000</strong> verschuldigd, onverminderd het recht op volledige
          schadevergoeding.
        </p>

        <h2>20. Data-overdracht &amp; bewaartermijnen</h2>
        <p>
          <strong>20.1</strong> Tijdelijke kopieën/data die noodzakelijk zijn voor
          migratie, herstel of nazorg worden uiterlijk <strong>30 dagen</strong>{" "}
          na afronding verwijderd, tenzij wet of overeenkomst anders vereist.
        </p>
        <p>
          <strong>20.2</strong> Wachtwoorden worden niet langer dan noodzakelijk
          bewaard.
        </p>
        <p>
          <strong>20.3</strong> Logbestanden t.b.v. bewijs en kwaliteit worden
          beperkt en beveiligd bewaard conform het Privacybeleid.
        </p>

        <h2>21. Publiciteit en referenties</h2>
        <p>
          Gebruik van naam, logo of case study van de klant door InstantIT
          gebeurt uitsluitend na <strong>voorafgaande schriftelijke
          toestemming</strong> van de klant.
        </p>
