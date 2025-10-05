type PlaceholderConfig = {
  title: string;
  subtitle: string;
  gradientStart: string;
  gradientEnd: string;
  accent: string;
  accentSoft?: string;
};

const createIllustration = ({
  title,
  subtitle,
  gradientStart,
  gradientEnd,
  accent,
  accentSoft,
}: PlaceholderConfig) => {
  const softAccent = accentSoft ?? `${accent}33`;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" role="img" aria-labelledby="title desc">
      <title>${title}</title>
      <desc>${subtitle}</desc>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${gradientStart}" />
          <stop offset="100%" stop-color="${gradientEnd}" />
        </linearGradient>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="${softAccent}" stroke-width="1" />
        </pattern>
      </defs>
      <rect width="640" height="480" fill="url(#gradient)" />
      <rect width="640" height="480" fill="url(#grid)" opacity="0.3" />
      <circle cx="520" cy="120" r="72" fill="${softAccent}" opacity="0.6" />
      <circle cx="140" cy="360" r="88" fill="${softAccent}" opacity="0.35" />
      <path d="M140 120h360" stroke="${accent}" stroke-width="4" stroke-linecap="round" />
      <path d="M140 160h280" stroke="${accent}" stroke-width="4" stroke-linecap="round" stroke-dasharray="12 10" />
      <text x="140" y="232" font-family="'DM Sans', 'Inter', system-ui" font-size="36" font-weight="700" fill="#f8fafc">${title}</text>
      <text x="140" y="276" font-family="'DM Sans', 'Inter', system-ui" font-size="22" fill="#e2e8f0">${subtitle}</text>
      <text x="140" y="320" font-family="'Inter', system-ui" font-size="16" letter-spacing="2" fill="${accent}" opacity="0.9">INSTANT LOCAL SUPPORT</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const HERO_TECHNICIAN_ILLUSTRATION = createIllustration({
  title: "Digitale Eerste Hulp",
  subtitle: "Razendsnel geholpen door InstantIT",
  gradientStart: "#0f172a",
  gradientEnd: "#1e3a8a",
  accent: "#38bdf8",
  accentSoft: "#38bdf84d",
});

export const SERVICE_COMPUTER_ILLUSTRATION = createIllustration({
  title: "Computerhulp",
  subtitle: "Opschonen, versnellen & herstellen",
  gradientStart: "#0f172a",
  gradientEnd: "#1f2937",
  accent: "#22c55e",
  accentSoft: "#22c55e33",
});

export const SERVICE_HACK_ILLUSTRATION = createIllustration({
  title: "Ik ben gehackt",
  subtitle: "Containment, herstel en hardening",
  gradientStart: "#111827",
  gradientEnd: "#312e81",
  accent: "#f97316",
  accentSoft: "#f9731633",
});

export const SERVICE_WIFI_ILLUSTRATION = createIllustration({
  title: "WiFi & Netwerk",
  subtitle: "Vol bereik in huis en kantoor",
  gradientStart: "#0f172a",
  gradientEnd: "#0e7490",
  accent: "#38bdf8",
  accentSoft: "#38bdf833",
});
