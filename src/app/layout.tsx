import type { Metadata } from "next";
import "../styles.css";
import { CookieBanner } from "@/components/next/CookieBanner";
import { GoogleAnalytics } from "@/components/next/GoogleAnalytics";
import { NoWidows } from "@/components/next/NoWidows";
import { PageTransitions } from "@/components/next/PageTransitions";
import { ScrollToTopButton } from "@/components/next/ScrollToTopButton";
import { ScrollReveal } from "@/components/next/ScrollReveal";
import { SiteFooter } from "@/components/next/SiteFooter";
import { SiteHeader } from "@/components/next/SiteHeader";

const SITE_URL = "https://foresthillapartamenty.pl";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Forest Hill Apartamenty",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo-main.jpg`,
  image: `${SITE_URL}/assets/og-image.jpg`,
  description:
    "Apartamenty Forest Hill w Sosnówce (Karkonosze), Świeradowie-Zdroju (Góry Izerskie) i Mrzeżynie (Bałtyk).",
  email: "foresthillapartamenty@gmail.com",
  areaServed: ["Sosnówka", "Świeradów-Zdrój", "Mrzeżyno"],
  sameAs: [
    "https://www.facebook.com/share/1B31HGFq6V/",
    "https://www.instagram.com/forest.hill.apartamenty",
    "https://youtube.com/@foresthillapartamenty",
    "https://www.tiktok.com/@forest.hill.apart",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "./" },
  title: "Forest Hill Apartamenty — Karkonosze, Góry Izerskie, Bałtyk",
  description:
    "Luksusowe apartamenty Forest Hill w Sosnówce, Świeradowie-Zdroju i Mrzeżynie. Twój drugi dom na szlaku karkonoskich, izerskich i nadmorskich wspomnień.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Forest Hill Apartamenty",
    description: "Luksusowe apartamenty w Karkonoszach, Górach Izerskich i nad Bałtykiem.",
    type: "website",
    siteName: "Forest Hill Apartamenty",
    locale: "pl_PL",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forest Hill Apartamenty — Karkonosze, Góry Izerskie, Bałtyk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="min-h-screen flex flex-col bg-primary text-foreground">
          <PageTransitions />
          <SiteHeader />
          <main className="page-content flex-1 bg-background">{children}</main>
          <SiteFooter />
          <CookieBanner />
          <NoWidows />
          <ScrollReveal />
          <ScrollToTopButton />
          <GoogleAnalytics />
        </div>
      </body>
    </html>
  );
}
