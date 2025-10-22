export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  link: string;
}

export interface BlogSection {
  id: string;
  title: string;
  subtitle: string;
  backgroundColor?: string;
  textColor?: string;
  posts: BlogPost[];
}

export const blogSections: BlogSection[] = [
  {
    id: "cv-ketel",
    title: "Tips en adviezen voor uw cv-ketel",
    subtitle: "Hieronder treft u onze interessante en relevante blogs over cv-ketel toestanden, storingen en eventuele oplossingen.",
    backgroundColor: "bg-blue-600",
    textColor: "text-white",
    posts: [
      {
        id: "cv-1",
        title: "CV-ketel vervangen en wetgeving 2026",
        description: "Alles wat je moet weten over vervanging van je CV-ketel in 2026.",
        image: "/images/services/antivirus.svg",
        category: "Onderhoud",
        readTime: "5 min",
        link: "/blog/cv-ketel-vervangen-2026",
      },
      {
        id: "cv-2",
        title: "ATAG CV ketel storingen",
        description: "Veelgestelde problemen met ATAG CV kettels en hoe ze op te lossen.",
        image: "/images/services/computerhulp.svg",
        category: "Reparatie",
        readTime: "4 min",
        link: "/blog/atag-cv-ketel-storingen",
      },
      {
        id: "cv-3",
        title: "Wanneer CV ketel vervangen?",
        description: "Signalen dat het tijd is voor een nieuwe CV-ketel.",
        image: "/images/services/email-problemen.svg",
        category: "Advies",
        readTime: "6 min",
        link: "/blog/wanneer-cv-ketel-vervangen",
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity en veiligheid voor uw bedrijf",
    subtitle: "Bescherm uw bedrijf tegen digitale bedreigingen met onze praktische tips en advies.",
    backgroundColor: "bg-red-600",
    textColor: "text-white",
    posts: [
      {
        id: "cyber-1",
        title: "Hoe bescherm je tegen ransomware?",
        description: "Praktische stappen om je systeem veilig te houden tegen ransomware aanvallen.",
        image: "/images/services/wifi.svg",
        category: "Veiligheid",
        readTime: "7 min",
        link: "/ransomware-hulp",
      },
      {
        id: "cyber-2",
        title: "Herken phishing e-mails meteen",
        description: "Leer de waarschuwingssignalen van phishing aanvallen herkennen.",
        image: "/images/services/tablet-smartphone.svg",
        category: "Detectie",
        readTime: "4 min",
        link: "/phishing-hulp",
      },
      {
        id: "cyber-3",
        title: "Account gehackt? Doe dit direct",
        description: "Stappen om snel actie te ondernemen bij een gehackt account.",
        image: "/images/services/mac-support.svg",
        category: "Respons",
        readTime: "5 min",
        link: "/ik-ben-gehackt",
      },
    ],
  },
  {
    id: "internet-wifi",
    title: "Internet en WiFi optimalisatie",
    subtitle: "Verbeter je internetsnelheid en WiFi bereik met deze nuttige tips.",
    backgroundColor: "bg-purple-600",
    textColor: "text-white",
    posts: [
      {
        id: "wifi-1",
        title: "WiFi snelheid verbeteren in 5 stappen",
        description: "Eenvoudige tips om je WiFi sneller en stabieler te maken.",
        image: "/images/services/printerhulp.svg",
        category: "Optimalisatie",
        readTime: "6 min",
        link: "/wifi",
      },
      {
        id: "wifi-2",
        title: "Juiste routerplaatsing is essentieel",
        description: "Waar plaats je je router voor het beste bereik?",
        image: "/images/services/windows-support.svg",
        category: "Setup",
        readTime: "4 min",
        link: "/wifi",
      },
      {
        id: "wifi-3",
        title: "5G vs 2.4G WiFi: Wat is het verschil?",
        description: "Begrijp het verschil en kies de juiste band voor jou.",
        image: "/images/services/mac-support.svg",
        category: "Educatie",
        readTime: "5 min",
        link: "/wifi",
      },
    ],
  },
];

export function getBlogSections(): BlogSection[] {
  return blogSections;
}
