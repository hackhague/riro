import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import FloatingCallButton from "@/components/FloatingCallButton";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Providers } from "./providers";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID ?? "G-QBY7X2FM5K";

  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        {measurementId ? (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {[
                "window.dataLayer = window.dataLayer || [];",
                "function gtag(){window.dataLayer.push(arguments);}",
                "window.gtag = gtag;",
                "gtag('js', new Date());",
                `gtag('config', '${measurementId}');`,
              ].join("\n")}
            </Script>
          </>
        ) : null}
        <Providers>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingCallButton />
        </Providers>
      </body>
    </html>
  );
}
