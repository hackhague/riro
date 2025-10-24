import type { Metadata } from "next";
import "./globals.css";

import FloatingCallButton from "@/components/FloatingCallButton";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Providers } from "./providers";
import { getSitePricingConfig } from "@/server/sanity/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.instantit.nl"),
  title: {
    default: "instantIT",
    template: "%s | instantIT",
  },
  description:
    "Snelle computerhulp & cyberhulp in Den Haag en omgeving. Binnen 10–30 minuten reactie en meestal binnen 24 uur opgelost.",
  keywords: [
    "computerhulp den haag",
    "cyberhulp",
    "it support",
    "computer reparatie",
    "wifi verbeteren",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "instantIT",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const sitePricing = await getSitePricingConfig();

  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers sitePricing={sitePricing}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingCallButton />
        </Providers>
      </body>
    </html>
  );
}
