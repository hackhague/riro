export interface Review {
  id: string;
  author: string;
  location: string;
  company?: string;
  problem: string;
  solution: string;
  result: string;
  featured?: boolean;
  tags: string[];
}

export const reviews: Review[] = [
  {
    id: "review-1",
    author: "Johan de Vries",
    location: "Den Haag",
    problem: "Windows 11 bleef hangen, computering was traag",
    solution: "Windows opnieuw geïnstalleerd, drivers geupdate, disk schoongemaakt",
    result: "Computer werkt weer snel, net als nieuw",
    featured: true,
    tags: ["aan huis", "windows", "particulier"],
  },
  {
    id: "review-2",
    author: "Maria Hendrix",
    location: "Delft",
    company: "Restaurant De Gracht",
    problem: "PIN-automaat en kassa down op vrijdagavond",
    solution: "4G-failover ingesteld, netwerkcheck uitgevoerd, noodplan",
    result: "Binnen 1 uur weer online, klanten konden betalen",
    featured: true,
    tags: ["aan huis", "spoedhulp", "zakelijk"],
  },
  {
    id: "review-3",
    author: "Linda Verstegen",
    location: "Scheveningen",
    problem: "Phishing-mail geopend, alle accounts gehackt",
    solution: "Wachtwoorden reset, 2FA ingesteld, beveiligingsaudit",
    result: "Accounts veilig, preventie voor de toekomst",
    featured: true,
    tags: ["phishing", "hack", "particulier", "aan huis"],
  },
  {
    id: "review-4",
    author: "Thomas Bakker",
    location: "Zoetermeer",
    problem: "WiFi bereik slecht, veel dode zones",
    solution: "Mesh-netwerk geïnstalleerd, router geoptimaliseerd",
    result: "Snelle internet op alle kamers, stabiel",
    tags: ["aan huis", "wifi", "particulier"],
  },
  {
    id: "review-5",
    author: "Ahmed Hassan",
    location: "Rotterdam",
    problem: "Mac OS update veroorzaakte crashes",
    solution: "Safe mode repair, applicaties opnieuw geïnstalleerd",
    result: "Mac stabiel, alle programma's werken",
    tags: ["aan huis", "mac", "particulier"],
  },
  {
    id: "review-6",
    author: "Petra Jansen",
    location: "Leiden",
    problem: "Ransomware versleutelde bestanden",
    solution: "Isolatie, backup restore, systeem gehardend",
    result: "Alle bestanden teruggezet, veiliger nu",
    tags: ["ransomware", "hack", "spoedhulp", "aan huis"],
  },
  {
    id: "review-7",
    author: "Robert van der Berg",
    location: "Rijswijk",
    company: "Advocatenkantoor Juridisch",
    problem: "Cyberincident, verdacht logfile-verkeer",
    solution: "Forensische analyse, hardening plan, rapportage",
    result: "Beveiligingsmaatregelen ingevoerd, GDPR compliant",
    tags: ["hack", "spoedhulp", "zakelijk"],
  },
  {
    id: "review-8",
    author: "Simone Mercurio",
    location: "Voorburg",
    problem: "Printer verbinding verbroken, geen WiFi contact",
    solution: "Printer drivers geupdate, WiFi-verbinding hersteld",
    result: "Printer werkt weer draadloos",
    tags: ["aan huis", "printer", "particulier"],
  },
  {
    id: "review-9",
    author: "Henk Poot",
    location: "Zoetermeer Centrum",
    problem: "Internet veel te langzaam voor thuiswerk",
    solution: "Internetsnelheid getest, WiFi-optimalisatie uitgevoerd",
    result: "Internet 5x sneller, video calls perfect",
    tags: ["op afstand", "wifi", "particulier"],
  },
  {
    id: "review-10",
    author: "Nicole van Dijk",
    location: "Den Haag",
    problem: "E-mail account gehackt, recovery nodig",
    solution: "Wachtwoord reset, 2FA setup, verdachte aktiviteiten verwijderd",
    result: "E-mail beveiligd en teruggeclaimed",
    tags: ["email", "hack", "spoedhulp", "particulier"],
  },
  {
    id: "review-11",
    author: "Erik Vermeulen",
    location: "Delft",
    company: "Webwinkel Delft",
    problem: "Netwerk instabiel, veel downtime",
    solution: "Switch vervangen, bekabeling check, monitoring ingesteld",
    result: "Netwerk stabiel, 99.9% uptime nu",
    tags: ["zakelijk", "aan huis", "spoedhulp"],
  },
  {
    id: "review-12",
    author: "Mirjam Kok",
    location: "Scheveningen",
    problem: "Smartphone werd langzaam, veel virussen",
    solution: "Malware verwijderd, security app geïnstalleerd, beveiligde opslag setup",
    result: "Telefoon weer snel en veilig",
    tags: ["aan huis", "smartphone", "particulier"],
  },
];

export function getReviewsByTags(tags: string[]): Review[] {
  return reviews.filter((review) =>
    tags.some((tag) => review.tags.includes(tag))
  );
}

export function getFeaturedReviews(): Review[] {
  return reviews.filter((review) => review.featured).slice(0, 3);
}

export function getReviewsByService(servicePath: string): Review[] {
  // Homepage uses featured reviews
  if (servicePath === "/") {
    return getFeaturedReviews();
  }

  const tagMap: Record<string, string[]> = {
    "/diensten": ["particulier", "zakelijk", "spoedhulp"],
    "/computerhulp": ["aan huis", "particulier"],
    "/windows-support": ["windows", "aan huis", "particulier"],
    "/mac-support": ["mac", "aan huis", "particulier"],
    "/antivirus-setup": ["aan huis", "particulier"],
    "/printer": ["printer", "aan huis", "particulier"],
    "/email": ["email", "aan huis", "particulier"],
    "/wifi": ["wifi", "aan huis", "particulier"],
    "/mobiel-tablet": ["smartphone", "aan huis", "particulier"],
    "/uitleg-les": ["aan huis", "particulier"],
    "/cyber-apk": ["aan huis", "particulier"],
    "/computerhulp-den-haag": ["aan huis", "particulier"],
    "/computerhulp-delft": ["aan huis", "particulier"],
    "/computerhulp-leiden": ["aan huis", "particulier"],
    "/computerhulp-rijswijk": ["aan huis", "particulier"],
    "/computerhulp-voorburg": ["aan huis", "particulier"],
    "/computerhulp-zoetermeer": ["aan huis", "particulier"],
    "/hulp-op-afstand": ["op afstand", "particulier"],
    "/ik-ben-gehackt": ["hack", "spoedhulp"],
    "/phishing-hulp": ["phishing", "hack", "spoedhulp"],
    "/instagram-gehackt": ["hack", "spoedhulp"],
    "/email-gehackt": ["email", "hack", "spoedhulp"],
    "/whatsapp-fraude": ["hack", "spoedhulp"],
    "/ransomware-hulp": ["ransomware", "hack", "spoedhulp"],
    "/helpdesk-fraude": ["hack", "spoedhulp"],
    "/zakelijk": ["zakelijk", "spoedhulp"],
    "/expat": ["aan huis", "particulier"],
  };

  const tagsForService = tagMap[servicePath] || [];
  if (tagsForService.length === 0) return [];

  return getReviewsByTags(tagsForService).slice(0, 3);
}
