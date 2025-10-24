import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid – InstantIT",
  description: "Privacybeleid InstantIT — versie 1.0 (24-10-2025).",
  alternates: {
    canonical: "https://www.instantit.nl/privacybeleid",
  },
};

export default function Privacybeleid() {
  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-6">
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Privacybeleid – InstantIT
        </h1>
        <p className="text-sm text-muted-foreground">
          Versie: 1.0 • Datum: 24-10-2025
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Verwerkingsverantwoordelijke: InstantIT • Gegevens: 85746916, privacy@instantit.nl
        </p>
      </header>

      <section className="prose prose-sm md:prose text-foreground max-w-none">
        <p>
          Dit privacybeleid legt uit welke persoonsgegevens wij verwerken, waarom en hoe lang,
          en welke rechten u heeft. We houden het praktisch en transparant, in lijn met de
          AVG (GDPR) en Nederlandse wetgeving.
        </p>

        <h2>1. Voor wie geldt dit beleid?</h2>
        <p>
          Voor (potentiële) particuliere klanten, zakelijke contactpersonen, leveranciers/partners
          en bezoekers van onze website en (remote) support-omgevingen.
        </p>

        <h2>2. Rollen: verantwoordelijke vs. verwerker</h2>
        <ul>
          <li>
            <strong>Verwerkingsverantwoordelijke</strong>: voor onze eigen administratie, planning,
            facturatie, communicatie, website en kwaliteitsbewaking.
          </li>
          <li>
            <strong>Verwerker</strong>: bij werkzaamheden <strong>uitsluitend op aanwijzing van de klant</strong>
            (bijv. mailboxmigratie, back-ups terugzetten, accountbeheer). Voor{" "}
            <strong>structurele</strong> verwerkingen sluiten we op verzoek een{" "}
            <strong>verwerkersovereenkomst (DPA)</strong>.
          </li>
        </ul>

        <h2>3. Welke gegevens verwerken we?</h2>
        <ul>
          <li>
            <strong>Identificatie &amp; contact</strong>: naam, adres, e-mail, telefoon, bedrijfsnaam,
            functie, KVK-/btw-gegevens.
          </li>
          <li>
            <strong>Afspraak &amp; support</strong>: afspraakdetails, locatie, toegangscodes (indien nodig),
            device-/systeeminformatie (OS-versie, serienummer, logs), <strong>remote sessie-ID</strong>,
            <strong> diagnostische screenshots</strong> (alleen indien nodig), handelingen/maatregelen, rapportages.
          </li>
          <li>
            <strong>Financieel</strong>: factuur- en betaalgegevens, IBAN (indien relevant), transactiegegevens.
          </li>
          <li>
            <strong>Website &amp; cookies</strong>: IP-adres, user agent, cookie- en consentstatus, analytische events
            (alleen met toestemming, tenzij strikt noodzakelijk).
          </li>
          <li>
            <strong>Correspondentie</strong>: e-mail/telefoon/WhatsApp/tickets en metagegevens (tijd, afzender, ontvanger).
          </li>
          <li>
            <strong>Beveiliging</strong>: firewall-/WAF-logs, fraudepreventie-, fout- en toegangslogs.
          </li>
        </ul>
        <p>
          Wij vragen <strong>geen</strong> bijzondere persoonsgegevens (zoals medische of religieuze gegevens)
          en verwerken geen gegevens van kinderen &lt; 16 jaar met opzet.
        </p>

        <h2>4. Doeleinden &amp; rechtsgronden</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Doel</th>
                <th>Rechtsgrond (AVG art. 6)</th>
                <th>Voorbeelden</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Offertes, planning en uitvoering diensten</td>
                <td><strong>b)</strong> Noodzakelijk voor overeenkomst</td>
                <td>Contact, adres, systeeminfo, remote-sessie</td>
              </tr>
              <tr>
                <td>Facturatie &amp; administratie</td>
                <td><strong>c)</strong> Wettelijke plicht</td>
                <td>Fiscale bewaarplicht (NL: 7 jaar)</td>
              </tr>
              <tr>
                <td>Support, diagnose, kwaliteitsbewaking</td>
                <td><strong>f)</strong> Gerechtvaardigd belang</td>
                <td>Tijdregistratie, handelingenlog, beperkte screenshots/logs</td>
              </tr>
              <tr>
                <td>Beveiliging &amp; misbruikpreventie</td>
                <td><strong>f)</strong> Gerechtvaardigd belang</td>
                <td>WAF/firewall-logs, rate limiting, fraudepreventie</td>
              </tr>
              <tr>
                <td>Klantcommunicatie over lopende diensten</td>
                <td><strong>b/f</strong></td>
                <td>Ticketupdates, storingsmeldingen</td>
              </tr>
              <tr>
                <td>Marketing aan bestaande klanten (B2C soft opt-in/B2B)</td>
                <td><strong>f</strong> of <strong>a) Toestemming</strong></td>
                <td>Nieuws/aanbiedingen; afmelden kan altijd</td>
              </tr>
              <tr>
                <td>Nieuwsbrief/opt-in marketing</td>
                <td><strong>a)</strong> Toestemming</td>
                <td>E-mailnieuwsbrief, acties</td>
              </tr>
              <tr>
                <td>Cookies/analytics (niet strikt noodzakelijk)</td>
                <td><strong>a)</strong> Toestemming</td>
                <td>Gebruikersstatistieken, verbeteringen</td>
              </tr>
              <tr>
                <td>Wettelijke verzoeken (bijv. politie, AP)</td>
                <td><strong>c)</strong> of <strong>f</strong></td>
                <td>Alleen waar verplicht of gerechtvaardigd</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Belangenafweging (art. 6(f))</strong>: we loggen zo <strong>minimaal</strong> mogelijk,
          beveiligen logs, beperken bewaartermijnen en bieden bezwaar/opt-out waar mogelijk.
        </p>

        <h2>5. Herkomst van gegevens</h2>
        <ul>
          <li>Rechtstreeks van u (contact, intake, support, remote sessie).</li>
          <li>Van uw apparatuur/softwaresystemen (diagnose).</li>
          <li>Van derden op uw verzoek (bijv. leverancier/verzekeraar) of waar wettelijk toegestaan.</li>
        </ul>

        <h2>6. Bewaartermijnen (standaard)</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Categorie</th>
                <th>Termijn</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Facturen en financiële administratie</td>
                <td><strong>7 jaar</strong> (wettelijk)</td>
              </tr>
              <tr>
                <td>Ticket-/werklogs (handelingen, tijd, status)</td>
                <td><strong>180 dagen</strong> na sluiting ticket</td>
              </tr>
              <tr>
                <td>Diagnostische screenshots</td>
                <td><strong>90 dagen</strong> na sluiting ticket</td>
              </tr>
              <tr>
                <td>Tijdelijke kopieën/back-ups t.b.v. migratie/herstel</td>
                <td><strong>max. 30 dagen</strong> (zie ook AV art. 20)</td>
              </tr>
              <tr>
                <td>Remote sessie-IDs &amp; connectielogs</td>
                <td><strong>180 dagen</strong></td>
              </tr>
              <tr>
                <td>CRM/relatiegegevens (niet-klanten)</td>
                <td><strong>24 maanden</strong> na laatste contact</td>
              </tr>
              <tr>
                <td>Cookie-/consentlog</td>
                <td><strong>24 maanden</strong> of zolang wettelijk vereist</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Kortere of langere termijnen zijn mogelijk waar wetgeving of een overeenkomst dat vereist.
          Na afloop verwijderen of anonimiseren we gegevens.
        </p>

        <h2>7. Delen van gegevens (ontvangers)</h2>
        <p>We delen gegevens alleen waar nodig met:</p>
        <ul>
          <li><strong>ICT-partners/verwerkers</strong>: hosting/CDN/WAF, e-mailbezorging, ticketing/CRM, betalingsverwerkers, remote-supportsoftware.</li>
          <li><strong>Bezorg- en leveranciersdiensten</strong>: onderdelen en logistiek.</li>
          <li><strong>Betaalpartijen</strong>: iDEAL/SEPA/kaart (transactiegegevens).</li>
          <li><strong>Professionele dienstverleners</strong>: boekhouder/jurist (waar nodig).</li>
          <li><strong>Autoriteiten</strong>: indien wettelijk verplicht (bijv. fiscale of opsporingsinstanties).</li>
        </ul>
        <p>
          We sluiten verwerkersovereenkomsten met partijen die voor ons verwerken. Zie{" "}
          <strong>Bijlage A (Verwerkers &amp; subverwerkers)</strong>.
        </p>

        <h2>8. Internationale doorgiften</h2>
        <p>
          Indien gegevens buiten de EER worden verwerkt, zorgen wij voor passende waarborgen
          (zoals <strong>EU-standaardcontractbepalingen (SCC’s)</strong>, aanvullende maatregelen of
          een adequaatheidsbesluit). Details staan in <strong>Bijlage A</strong>.
        </p>

        <h2>9. Beveiliging</h2>
        <ul>
          <li>TLS-versleuteling in transit, schijfencryptie op apparaten, beveiligde opslag.</li>
          <li>Toegangsbeheer op need-to-know, <strong>MFA</strong> waar mogelijk, logging van beheerhandelingen.</li>
          <li>Patchmanagement, antimalware, netwerksegmentatie/WAF, least privilege.</li>
          <li>Minimale screenshots en beperkte bewaar- en toegangstermijnen.</li>
          <li>Procedures voor incidentrespons en datalekmelding.</li>
        </ul>
        <p>Geen enkel systeem is 100% veilig; wij evalueren en verbeteren maatregelen continu.</p>

        <h2>10. Uw rechten</h2>
        <p>
          U heeft (waar van toepassing) het recht op <strong>inzage, rectificatie, verwijdering, beperking,
            overdraagbaarheid</strong> en <strong>bezwaar</strong> tegen verwerkingen op basis van gerechtvaardigd
          belang of direct marketing. Bij verwerking op basis van <strong>toestemming</strong> kunt u die
          toestemming altijd intrekken.
        </p>
        <p>
          <strong>Verzoek indienen</strong>: mail naar <strong>privacy@instantit.nl</strong> met voldoende
          identificatie. We reageren binnen <strong>1 maand</strong> (verlenging mogelijk bij complexiteit).
          <br />
          <strong>Klacht</strong>: u kunt een klacht indienen bij de <strong>Autoriteit Persoonsgegevens</strong>.
        </p>

        <h2>11. Cookies &amp; tracking (kort)</h2>
        <ul>
          <li><strong>Noodzakelijke cookies</strong>: voor basisfuncties (sessie, beveiliging, load balancing).</li>
          <li><strong>Voorkeuren/functioneel</strong>: onthouden keuzes (met beperkte impact).</li>
          <li><strong>Statistiek/analytics</strong>: alleen met toestemming; waar mogelijk privacyvriendelijk ingesteld.</li>
          <li><strong>Marketing</strong>: alleen met toestemming.</li>
        </ul>
        <p>
          U kunt voorkeuren beheren via onze <strong>cookiebanner</strong> en uw browserinstellingen. Zie{" "}
          <strong>Bijlage B (Cookieoverzicht)</strong> voor de actuele lijst.
        </p>

        <h2>12. Kinderen</h2>
        <p>
          We richten ons niet op kinderen onder 16 jaar. Indien we weten dat we zulke gegevens onterecht hebben,
          verwijderen we die.
        </p>

        <h2>13. Geautomatiseerde besluitvorming</h2>
        <p>
          We nemen <strong>geen</strong> besluiten uitsluitend gebaseerd op geautomatiseerde verwerking die
          rechtsgevolgen heeft voor betrokkene.
        </p>

        <h2>14. Datalekken</h2>
        <p>
          Bij een (vermoedelijk) datalek onderzoeken we onmiddellijk, nemen we mitigerende maatregelen en melden we – indien vereist –
          binnen <strong>72 uur</strong> aan de Autoriteit Persoonsgegevens en, waar nodig, aan betrokkenen.
        </p>

        <h2>15. Wijzigingen</h2>
        <p>
          We kunnen dit beleid wijzigen. De meest recente versie staat op de website, met versienummer en datum.
          Bij ingrijpende wijzigingen informeren we u actief waar mogelijk.
        </p>

        <h2>Contact</h2>
        <address>
          <p className="not-italic">
            <strong>InstantIT – Privacy</strong>
            <br />
            E-mail: <a href="mailto:privacy@instantit.nl">privacy@instantit.nl</a>
            <br />
            Adres: [Straat + nr], [Postcode + Plaats]
            <br />
            Tel: [nummer]
          </p>
        </address>

        <h2>Bijlage A – Verwerkers &amp; subverwerkers (overzicht)</h2>
        <p className="text-sm">
          <em>(Vul feitelijke leveranciers in; onderstaande rijen zijn voorbeelden / indicatief.)</em>
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Categorie</th>
                <th>Partij</th>
                <th>Doel</th>
                <th>Locatie/datacenters</th>
                <th>Doorgifte buiten EER</th>
                <th>Waarborg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hosting/CDN/WAF</td>
                <td>Cloudflare, Inc.</td>
                <td>CDN, WAF, performance</td>
                <td>EU + wereldwijd</td>
                <td>Mogelijk</td>
                <td>SCC’s + aanvullende maatregelen</td>
              </tr>
              <tr>
                <td>Transactionele e-mail</td>
                <td>Resend</td>
                <td>E-mailbezorging</td>
                <td>EU/US (afhankelijk van routing)</td>
                <td>Mogelijk</td>
                <td>SCC’s</td>
              </tr>
              <tr>
                <td>Remote support</td>
                <td>AnyDesk / TeamViewer</td>
                <td>Remote verbinding</td>
                <td>EU (DE) + wereldwijd</td>
                <td>Mogelijk</td>
                <td>SCC’s + end-to-end beveiliging</td>
              </tr>
              <tr>
                <td>Betalingen</td>
                <td>[Mollie/Stripe/SumUp]</td>
                <td>iDEAL/SEPA/kaart</td>
                <td>EU/US</td>
                <td>Mogelijk</td>
                <td>SCC’s/adequaat</td>
              </tr>
              <tr>
                <td>Ticketing/CRM</td>
                <td>[HubSpot/Zoho/Notion]</td>
                <td>Klantcontact, tickets</td>
                <td>EU/US</td>
                <td>Mogelijk</td>
                <td>SCC’s</td>
              </tr>
              <tr>
                <td>Analytics</td>
                <td>[Plausible/GA4]</td>
                <td>Statistiek</td>
                <td>EU/US</td>
                <td>Mogelijk</td>
                <td>Consent + SCC’s (indien van toepassing)</td>
              </tr>
              <tr>
                <td>Boekhouding</td>
                <td>[Boekhoudpakket]</td>
                <td>Financiële administratie</td>
                <td>EU</td>
                <td>Nee</td>
                <td>Verwerkersovereenkomst</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Bijlage B – Cookieoverzicht (voorbeeld)</h2>
        <p className="text-sm">
          <em>
            De feitelijke cookielijst wordt door de cookiebanner/DPMP bij installatie
            gegenereerd en actueel gehouden.
          </em>
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Naam</th>
                <th>Type</th>
                <th>Doel</th>
                <th>Bewaartermijn</th>
                <th>Aanbieder</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>__cf_bm</td>
                <td>Noodzakelijk</td>
                <td>Bot/traffic management (WAF)</td>
                <td>30 min</td>
                <td>Cloudflare</td>
              </tr>
              <tr>
                <td>instantit_session</td>
                <td>Noodzakelijk</td>
                <td>Sessiebeheer</td>
                <td>Sessie</td>
                <td>InstantIT</td>
              </tr>
              <tr>
                <td>cookie_consent</td>
                <td>Noodzakelijk</td>
                <td>Onthouden toestemmingen</td>
                <td>12 maanden</td>
                <td>InstantIT</td>
              </tr>
              <tr>
                <td>_analytics_id</td>
                <td>Statistiek</td>
                <td>Geanonimiseerde pageviews</td>
                <td>13 maanden</td>
                <td>[Plausible/GA4]</td>
              </tr>
              <tr>
                <td>_mkid</td>
                <td>Marketing</td>
                <td>Campagne-/referrermeting</td>
                <td>3 maanden</td>
                <td>[tool]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Samenvatting (TL;DR – niet-juridisch)</h2>
        <ul>
          <li>We verwerken zo min mogelijk en alleen wat nodig is voor afspraken, support en facturatie.</li>
          <li>Diagnoselogs/screenshots alleen indien nodig, met beperkte toegang en bewaartermijnen (90–180 dagen).</li>
          <li>Financiële gegevens: 7 jaar (wettelijk).</li>
          <li>U kunt uw rechten uitoefenen via <strong>privacy@instantit.nl</strong>.</li>
          <li>Cookies voor statistiek/marketing alleen met toestemming.</li>
          <li>Bij structurele verwerking op uw aanwijzing sluiten we een DPA.</li>
          <li>Internationale doorgiften worden afgedekt met SCC’s of gelijkwaardige waarborgen.</li>
        </ul>
      </section>
    </main>
  );
}
