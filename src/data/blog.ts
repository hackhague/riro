export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  link: string;
  icon?: string;
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
        title: "Hoe herken je een phishing e-mail?",
        description: "Leer de waarschuwingssignalen van phishing aanvallen herkennen en voorkomen.",
        category: "Beveiliging",
        readTime: "5 min",
        link: "/phishing-hulp",
      },
      {
        id: "cyber-2",
        title: "Je account is gehackt? Handel nu!",
        description: "Stappen om snel actie te ondernemen bij een gehackt e-mail of social media account.",
        category: "Noodgevallen",
        readTime: "4 min",
        link: "/ik-ben-gehackt",
      },
      {
        id: "cyber-3",
        title: "Ransomware: hoe je je beschermt",
        description: "Praktische tips om je systeem veilig te houden tegen ransomware aanvallen.",
        category: "Preventie",
        readTime: "6 min",
        link: "/ransomware-hulp",
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
        title: "WiFi snelheid verbeteren in 5 stappen",
        description: "Eenvoudige tips om je WiFi sneller en stabieler te maken zonder nieuwe apparatuur.",
        category: "Optimalisatie",
        readTime: "5 min",
        link: "/wifi",
      },
      {
        id: "wifi-2",
        title: "Waar plaats je je router het beste?",
        description: "De juiste locatie van je router maakt het verschil in signaalsterkte.",
        category: "Setup",
        readTime: "4 min",
        link: "/wifi",
      },
      {
        id: "wifi-3",
        title: "Wat te doen bij traag internet?",
        description: "Stap voor stap je internetverbinding controleren en versnellen.",
        category: "Troubleshooting",
        readTime: "5 min",
        link: "/wifi",
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
        title: "Waarom is mijn computer zo traag?",
        description: "Ontdek de meest voorkomende oorzaken van traag werkende computers en hoe je dit oplos.",
        category: "Prestatie",
        readTime: "6 min",
        link: "/computerhulp",
      },
      {
        id: "comp-2",
        title: "Virussen en malware: wat is het verschil?",
        description: "Begrijp het verschil en bescherm je computer beter tegen alle bedreigingen.",
        category: "Beveiliging",
        readTime: "5 min",
        link: "/antivirus-setup",
      },
      {
        id: "comp-3",
        title: "Regelmatig onderhoud = beter prestaties",
        description: "Eenvoudige onderhoudstaken die je kunt doen om je computer fit te houden.",
        category: "Preventie",
        readTime: "4 min",
        link: "/computerhulp",
      },
    ],
  },
];

export function getRotatingBlogSections(): RotatingBlogSection[] {
  return rotatingBlogSections;
}
