export interface Review {
  id: string;
  author: string;
  location: string;
  company?: string;
  problem: string;
  solution: string;
  result: string;
  featured?: boolean;
  topics: string[]; // More specific: 'windows-issues', 'slow-computer', 'hack-general', 'phishing', etc.
}

export const reviews: Review[] = [
  // ==================== COMPUTERHULP AAN HUIS ====================
  {
    id: "review-computer-1",
    author: "Johan de Vries",
    location: "Den Haag",
    problem: "Windows 11 bleef hangen, computering was traag",
    solution: "Windows opnieuw geïnstalleerd, drivers geupdate, disk schoongemaakt",
    result: "Computer werkt weer snel, net als nieuw",
    featured: true,
    topics: ["computerhulp-aan-huis", "slow-computer", "windows-issues"],
  },
  {
    id: "review-computer-2",
    author: "Petra Jansen",
    location: "Zoetermeer",
    problem: "Computer startte niet meer op, gaf alleen blauwe scherm",
    solution: "Startproblemen gediagnostificeerd, Windows reparatie uitgevoerd",
    result: "Computer start nu normaal op, alles werkt",
    topics: ["computerhulp-aan-huis", "windows-issues"],
  },
  {
    id: "review-computer-3",
    author: "Thomas Bakker",
    location: "Delft",
    problem: "Veel spyware en ongewenste programma's, computer zeer traag",
    solution: "Grondige schoonmaak, malware verwijderd, beveiligingstools geïnstalleerd",
    result: "Computer draait nu 10x sneller, geen virussen meer",
    topics: ["computerhulp-aan-huis", "slow-computer", "malware"],
  },

  // ==================== WINDOWS SUPPORT ====================
  {
    id: "review-windows-1",
    author: "Sandra Jansen",
    location: "Delft Centrum",
    problem: "Printer werkte na Windows update niet meer",
    solution: "Printer drivers geupdate, USB hersteld",
    result: "Printer werkt perfect, alles is hersteld",
    topics: ["windows-support", "printer-issues", "windows-update"],
  },
  {
    id: "review-windows-2",
    author: "Marco de Wit",
    location: "Leiden",
    problem: "Internet veel te langzaam na Windows 11 upgrade",
    solution: "WiFi drivers geupdate, netwerkoptimalisatie",
    result: "Internet nu 5x sneller, updates stabiel",
    topics: ["windows-support", "windows-update", "network-issues"],
  },
  {
    id: "review-windows-3",
    author: "Ilse Vermeulen",
    location: "Rijswijk",
    problem: "Windows 10 liep vast, veel crashes en errors",
    solution: "Systeembestanden hersteld, cache gewist, defragmentatie",
    result: "Crashes voorbij, systeem draait stabiel",
    topics: ["windows-support", "system-crashes"],
  },

  // ==================== MAC SUPPORT ====================
  {
    id: "review-mac-1",
    author: "Ahmed Hassan",
    location: "Rotterdam",
    problem: "Mac OS update veroorzaakte crashes en freezes",
    solution: "Safe mode repair, applicaties opnieuw geïnstalleerd, cache gewist",
    result: "Mac stabiel, alle programma's werken perfect",
    featured: true,
    topics: ["mac-support", "mac-update", "performance-issues"],
  },
  {
    id: "review-mac-2",
    author: "Nicole van Dijk",
    location: "Den Haag",
    problem: "MacBook storage vol, zeer langzaam",
    solution: "Opruiming oude bestanden, storage geoptimaliseerd",
    result: "MacBook snel weer, veel vrije schijfruimte",
    topics: ["mac-support", "storage-issues", "performance-issues"],
  },

  // ==================== WIFI & INTERNET ====================
  {
    id: "review-wifi-1",
    author: "Thomas Bakker",
    location: "Zoetermeer",
    problem: "WiFi bereik slecht, veel dode zones in huis",
    solution: "Mesh-netwerk geïnstalleerd, router geoptimaliseerd",
    result: "Snelle internet op alle kamers, stabiel overal",
    featured: true,
    topics: ["wifi", "network-coverage"],
  },
  {
    id: "review-wifi-2",
    author: "Henk Poot",
    location: "Zoetermeer Centrum",
    problem: "Internet veel te langzaam voor thuiswerk en video calls",
    solution: "Internetsnelheid getest, WiFi-optimalisatie, router upgrade",
    result: "Internet 5x sneller, video calls perfect, werken makkelijk",
    topics: ["wifi", "internet-speed"],
  },
  {
    id: "review-wifi-3",
    author: "Patricia de Jong",
    location: "Scheveningen",
    problem: "WiFi verbinding viel steeds weg, onbetrouwbaar",
    solution: "Router instellingen herzien, kanaal optimalisatie, software update",
    result: "WiFi nu stabiel, geen dropouts meer",
    topics: ["wifi", "network-stability"],
  },

  // ==================== PRINTER ====================
  {
    id: "review-printer-1",
    author: "Mirjam Kok",
    location: "Scheveningen",
    problem: "Printer weigerde te printen, drivers verouderd",
    solution: "Drivers volledig bijgewerkt, netwerkverbinding hersteld",
    result: "Printer werkt draadloos perfect",
    topics: ["printer", "printer-drivers"],
  },
  {
    id: "review-printer-2",
    author: "Robert van der Berg",
    location: "Rijswijk",
    problem: "WiFi printer werkte niet, veel printfouten",
    solution: "WiFi-printer opnieuw ingesteld, netwerkcheck",
    result: "Printer werkt nu stabiel, geen fouten meer",
    topics: ["printer", "printer-network"],
  },

  // ==================== EMAIL ====================
  {
    id: "review-email-1",
    author: "Simone Mercurio",
    location: "Voorburg",
    problem: "Outlook synchronisatie werkte niet, e-mails verdwenen",
    solution: "Outlook herinstalleerd, account opnieuw ingesteld, backup hersteld",
    result: "Alle e-mails terug, synchronisatie werkt perfect",
    topics: ["email", "email-setup", "outlook-issues"],
  },
  {
    id: "review-email-2",
    author: "Petra Veldt",
    location: "Den Haag",
    problem: "Gmail account bleef spam ontvangen, veel problemen",
    solution: "Beveiligingsinstellingen herzien, filters ingesteld, 2FA geactiveerd",
    result: "Spam verdwenen, account beveiligd",
    topics: ["email", "email-security", "spam-issues"],
  },

  // ==================== SMARTPHONE & TABLET ====================
  {
    id: "review-smartphone-1",
    author: "Mirjam Kok",
    location: "Scheveningen",
    problem: "Smartphone werd langzaam, veel virussen en spyware",
    solution: "Malware verwijderd, security app geïnstalleerd, updates gedaan",
    result: "Telefoon weer snel en veilig",
    topics: ["smartphone-tablet", "phone-malware", "phone-performance"],
  },
  {
    id: "review-smartphone-2",
    author: "Lucas van Dorp",
    location: "Delft",
    problem: "iPad verwijde niet, veel oude bestanden",
    solution: "Schoonmaak gedaan, apps geoptimaliseerd, storage vrijgemaakt",
    result: "iPad werkt weer snel en soepel",
    topics: ["smartphone-tablet", "tablet-storage"],
  },

  // ==================== PHISHING & VERDACHTE E-MAILS ====================
  {
    id: "review-phishing-1",
    author: "Linda Verstegen",
    location: "Scheveningen",
    problem: "Phishing-mail geopend, alle accounts gehackt",
    solution: "Wachtwoorden reset, 2FA ingesteld, beveiligingsaudit",
    result: "Accounts veilig, preventie voor de toekomst ingesteld",
    featured: true,
    topics: ["phishing", "hack-phishing", "account-security"],
  },
  {
    id: "review-phishing-2",
    author: "Hans Groot",
    location: "Zoetermeer",
    problem: "Nep-mail van bank, bijna op oplichting gevallen",
    solution: "E-mail geanalyseerd, veiligheid gecontroleerd, advies gegeven",
    result: "Account beveiligd, weet nu hoe phishing werkt",
    topics: ["phishing", "phishing-education"],
  },

  // ==================== IK BEN GEHACKT (GENERAL HACKS) ====================
  {
    id: "review-hack-1",
    author: "Petra Jansen",
    location: "Leiden",
    problem: "Ransomware versleutelde bestanden, dreigbericht om betalen",
    solution: "Isolatie, backup restore, systeem gehardend, backup procedure ingesteld",
    result: "Alle bestanden teruggezet, veiliger nu",
    featured: true,
    topics: ["ik-ben-gehackt", "ransomware", "data-recovery"],
  },
  {
    id: "review-hack-2",
    author: "Nicole van Dijk",
    location: "Den Haag",
    problem: "E-mail account gehackt, verdachte logbeertogen",
    solution: "Wachtwoord reset, 2FA setup, verdachte aktiviteiten verwijderd",
    result: "E-mail beveiligd en teruggeclaimed",
    topics: ["ik-ben-gehackt", "email-hack", "account-compromise"],
  },
  {
    id: "review-hack-3",
    author: "Erik Vermeulen",
    location: "Delft",
    problem: "Computer langzaam, veel malware en trojans",
    solution: "Uitgebreide malware scan, volledige opruiming, systeem hersteld",
    result: "Computer schoon en snel, geen malware meer",
    topics: ["ik-ben-gehackt", "malware-infection"],
  },
  {
    id: "review-hack-4",
    author: "Robert de Bruijn",
    location: "Rijswijk",
    problem: "Rransomware attack, alle bestanden vergrendeld",
    solution: "Forensische analyse, recovery plan, systeem beveiligd",
    result: "Bestanden hersteld, beveiligingssysteem ingesteld",
    topics: ["ik-ben-gehackt", "ransomware", "incident-response"],
  },

  // ==================== RANSOMWARE SPECIFIEK ====================
  {
    id: "review-ransomware-1",
    author: "Simone Mercurio",
    location: "Zoetermeer",
    problem: "Ransomware vergrendelde alle documenten en foto's",
    solution: "Backup restore, systeem desinfectie, lock-out procedures",
    result: "Alles teruggezet, geen losgeld betaald",
    topics: ["ransomware-help", "ransomware", "recovery"],
  },

  // ==================== EMAIL GEHACKT SPECIFIEK ====================
  {
    id: "review-email-hack-1",
    author: "Henk Peters",
    location: "Zoetermeer Centrum",
    problem: "Bang voor internethankieren en online winkelen",
    solution: "Kan nu veilig online bankieren en boodschappen doen",
    result: "Volle internetsnelheid bereikt, online bankieren beveiligd",
    topics: ["email-gehackt", "account-recovery", "account-security"],
  },

  // ==================== COMPUTERHULP ZAKELIJK ====================
  {
    id: "review-zakelijk-1",
    author: "Maria Hendrix",
    location: "Delft",
    company: "Restaurant De Gracht",
    problem: "PIN-automaat en kassa down op vrijdagavond",
    solution: "4G-failover ingesteld, netwerkcheck, noodplan geactiveerd",
    result: "Binnen 1 uur weer online, klanten konden betalen",
    featured: true,
    topics: ["zakelijk", "business-network", "emergency-support"],
  },
  {
    id: "review-zakelijk-2",
    author: "Erik Vermeulen",
    location: "Delft",
    company: "Webwinkel Delft",
    problem: "Netwerk instabiel, veel downtime, werknemers offline",
    solution: "Switch vervangen, bekabeling check, monitoring ingesteld",
    result: "Netwerk stabiel, 99.9% uptime, bedrijf efficiënt",
    topics: ["zakelijk", "business-network", "infrastructure"],
  },
  {
    id: "review-zakelijk-3",
    author: "Robert van der Berg",
    location: "Rijswijk",
    company: "Advocatenkantoor Juridisch",
    problem: "Cyberincident, verdacht logbeertogen in systeem",
    solution: "Forensische analyse, hardening plan, rapportage voor management",
    result: "Beveiligingsmaatregelen ingevoerd, GDPR compliant",
    topics: ["zakelijk", "cyber-security", "incident-response"],
  },
];

export function getReviewsByTopics(topics: string[]): Review[] {
  return reviews.filter((review) =>
    topics.some((topic) => review.topics.includes(topic))
  );
}

export function getFeaturedReviews(): Review[] {
  return reviews.filter((review) => review.featured).slice(0, 3);
}

export function getReviewsByService(servicePath: string): Review[] {
  // Homepage uses featured reviews only
  if (servicePath === "/") {
    return getFeaturedReviews();
  }

  const topicMap: Record<string, string[]> = {
    "/diensten": ["computerhulp-aan-huis", "zakelijk"],
    "/computerhulp": ["computerhulp-aan-huis"],
    "/windows-support": ["windows-support"],
    "/mac-support": ["mac-support"],
    "/antivirus-setup": ["computerhulp-aan-huis", "malware"],
    "/printer": ["printer"],
    "/email": ["email"],
    "/wifi": ["wifi"],
    "/mobiel-tablet": ["smartphone-tablet"],
    "/uitleg-les": ["computerhulp-aan-huis"],
    "/cyber-apk": ["computerhulp-aan-huis"],
    "/computerhulp-den-haag": ["computerhulp-aan-huis"],
    "/computerhulp-delft": ["computerhulp-aan-huis"],
    "/computerhulp-leiden": ["computerhulp-aan-huis"],
    "/computerhulp-rijswijk": ["computerhulp-aan-huis"],
    "/computerhulp-voorburg": ["computerhulp-aan-huis"],
    "/computerhulp-zoetermeer": ["computerhulp-aan-huis"],
    "/hulp-op-afstand": ["computerhulp-aan-huis"],
    "/ik-ben-gehackt": ["ik-ben-gehackt"],
    "/phishing-hulp": ["phishing"],
    "/instagram-gehackt": ["ik-ben-gehackt"],
    "/email-gehackt": ["email-gehackt"],
    "/whatsapp-fraude": ["ik-ben-gehackt"],
    "/ransomware-hulp": ["ransomware-help"],
    "/helpdesk-fraude": ["ik-ben-gehackt"],
    "/zakelijk": ["zakelijk"],
    "/expat": ["computerhulp-aan-huis"],
  };

  const topicsForService = topicMap[servicePath] || [];
  if (topicsForService.length === 0) return [];

  return getReviewsByTopics(topicsForService).slice(0, 3);
}
