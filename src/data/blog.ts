export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  readTime: string;
  image: string;
}

export interface RotatingBlogSection {
  id: string;
  title: string;
  subtitle: string;
  posts: BlogPost[];
}

export const rotatingBlogSections: RotatingBlogSection[] = [
  {
    id: "cybersecurity-tips",
    title: "Cybersecurity tips & tricks",
    subtitle: "Bescherm je computer en gegevens tegen digitale bedreigingen",
    posts: [
      {
        id: "cyber-1",
        slug: "herken-phishing-email",
        title: "Hoe herken je een phishing e-mail?",
        description: "Leer de waarschuwingssignalen van phishing aanvallen herkennen en voorkomen.",
        image: "/images/services/antivirus.svg",
        category: "Beveiliging",
        readTime: "5 min",
        content: "Phishing e-mails zijn een van de meest gebruikte methodes voor cybercriminelen om toegang tot je gegevens te krijgen. Leer hoe je deze nep-e-mails herkent aan verdachte afzenders, urgentie-boodschappen, verzoeken om persoonlijke informatie, en onverwachte links. Met enkele eenvoudige stappen kun je jezelf en je gegevens beschermen.",
      },
      {
        id: "cyber-2",
        slug: "account-gehackt-wat-te-doen",
        title: "Je account is gehackt? Handel nu!",
        description: "Stappen om snel actie te ondernemen bij een gehackt e-mail of social media account.",
        image: "/images/services/email-problemen.svg",
        category: "Noodgevallen",
        readTime: "4 min",
        content: "Als je account is gehackt, is snelle actie essentieel. Stap 1: Wijzig je wachtwoord onmiddellijk. Stap 2: Controleer de beveiligingsinstellingen. Stap 3: Zet twee-factor authenticatie in. Stap 4: Controleer recente activiteiten. Stap 5: Meld het aan de dienstverlener. Wij kunnen je helpen met incident response.",
      },
      {
        id: "cyber-3",
        slug: "ransomware-bescherming",
        title: "Ransomware: hoe je je beschermt",
        description: "Praktische tips om je systeem veilig te houden tegen ransomware aanvallen.",
        image: "/images/services/computerhulp.svg",
        category: "Preventie",
        readTime: "6 min",
        content: "Ransomware is schadelijke software die je bestanden versleutelt en losgeld eist. Bescherm jezelf door regelmatig backups te maken, je systeem up-to-date te houden, voorzichtig te zijn met e-mailbijlagen, een goed antivirusprogramma te gebruiken, en niet op verdachte links te klikken.",
      },
    ],
  },
  {
    id: "wifi-optimalisatie",
    title: "WiFi & Internet tips",
    subtitle: "Verbeter je internetsnelheid en WiFi bereik met deze eenvoudige stappen",
    posts: [
      {
        id: "wifi-1",
        slug: "wifi-snelheid-verbeteren",
        title: "WiFi snelheid verbeteren in 5 stappen",
        description: "Eenvoudige tips om je WiFi sneller en stabieler te maken zonder nieuwe apparatuur.",
        image: "/images/services/wifi.svg",
        category: "Optimalisatie",
        readTime: "5 min",
        content: "Je WiFi is traag? Probeer deze 5 stappen: 1) Restart je router (unplugged voor 30 seconden). 2) Verplaats je router naar een centraal, hoger punt. 3) Verminder interferentie van microgolven en andere apparaten. 4) Wijzig je WiFi-kanaal naar een minder druk kanaal. 5) Update je routerfirmware. Veel van deze wijzigingen hebben onmiddellijk effect.",
      },
      {
        id: "wifi-2",
        slug: "router-plaatsing-tips",
        title: "Waar plaats je je router het beste?",
        description: "De juiste locatie van je router maakt het verschil in signaalsterkte.",
        image: "/images/services/tablet-smartphone.svg",
        category: "Setup",
        readTime: "4 min",
        content: "De plaatsing van je router is cruciaal voor goede WiFi-prestaties. Plaats je router centraal in je huis, op een hoger punt (bijvoorbeeld op een schap), weg van obstakels zoals muren en metalen objecten. Vermijd plaatsing in kasten, achter meubels, of naast andere elektronische apparaten. Een hoger en meer open locatie geeft beter bereik.",
      },
      {
        id: "wifi-3",
        slug: "traag-internet-oplossen",
        title: "Wat te doen bij traag internet?",
        description: "Stap voor stap je internetverbinding controleren en versnellen.",
        image: "/images/services/mac-support.svg",
        category: "Troubleshooting",
        readTime: "5 min",
        content: "Traag internet kan veel oorzaken hebben. Controleer eerst je internetsnelheid met een speedtest. Controleer het aantal verbonden apparaten. Scan op malware. Controleer of je ISP-kanaal niet overbelast is. Gebruik een kabelverbinding voor snellere resultaten. Als niets helpt, neem contact met ons op voor professionele diagnostiek.",
      },
    ],
  },
  {
    id: "computer-onderhoud",
    title: "Computer onderhoud & prestaties",
    subtitle: "Houd je computer snel en soepel draaiend met deze handige tips",
    posts: [
      {
        id: "comp-1",
        slug: "computer-traag-oorzaken",
        title: "Waarom is mijn computer zo traag?",
        description: "Ontdek de meest voorkomende oorzaken van traag werkende computers en hoe je dit oplos.",
        image: "/images/services/windows-support.svg",
        category: "Prestatie",
        readTime: "6 min",
        content: "Een trage computer kan gefrustreerd zijn. Veelvoorkomende oorzaken: te veel opstartprogramma's, schijfruimte vol, malware, te veel tabs open in browser, of verouderde hardware. Maak schijfruimte vrij, verwijder onnodige opstartprogramma's, voer een malwarescan uit, en restart regelmatig. Voor hulp kun je ons altijd bellen.",
      },
      {
        id: "comp-2",
        slug: "virus-malware-verschil",
        title: "Virussen en malware: wat is het verschil?",
        description: "Begrijp het verschil en bescherm je computer beter tegen alle bedreigingen.",
        image: "/images/services/antivirus.svg",
        category: "Beveiliging",
        readTime: "5 min",
        content: "Een virus voegt zichzelf in aan andere programma's en verspreidt zich. Malware is bredere term voor alle schadelijke software. Spyware volgt je activiteiten. Ransomware versleutelt je bestanden. Protect jezelf met goed antivirussoftware, regelmatige updates, voorzichtige browsing, en geen onverwachte downloads.",
      },
      {
        id: "comp-3",
        slug: "computer-onderhoud-tips",
        title: "Regelmatig onderhoud = beter prestaties",
        description: "Eenvoudige onderhoudstaken die je kunt doen om je computer fit te houden.",
        image: "/images/services/computerhulp.svg",
        category: "Preventie",
        readTime: "4 min",
        content: "Onderhoud je computer regelmatig voor optimale prestaties: 1) Verwijder tijdelijke bestanden. 2) Update je besturingssysteem en programma's. 3) Voer antivirusscan uit. 4) Schoon je schijf op. 5) Defragmenteer je schijf (HDD) of trim (SSD). 6) Controleer hardwartemperaturen. Deze eenvoudige stappen voorkomen veel problemen.",
      },
    ],
  },
];

export function getRotatingBlogSections(): RotatingBlogSection[] {
  return rotatingBlogSections;
}
