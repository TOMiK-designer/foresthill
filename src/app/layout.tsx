import type { Metadata } from "next";
import "../styles.css";
import { CookieBanner } from "@/components/next/CookieBanner";
import { PageTransitions } from "@/components/next/PageTransitions";
import { SiteFooter } from "@/components/next/SiteFooter";
import { SiteHeader } from "@/components/next/SiteHeader";

export const metadata: Metadata = {
  title: "Forest Hill Apartamenty — Karkonosze, Góry Izerskie, Bałtyk",
  description:
    "Luksusowe apartamenty Forest Hill w Sosnówce, Świeradowie-Zdroju i Mrzeżynie. Twój drugi dom na szlaku karkonoskich i nadmorskich wspomnień.",
  openGraph: {
    title: "Forest Hill Apartamenty",
    description: "Luksusowe apartamenty w Karkonoszach, Górach Izerskich i nad Bałtykiem.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <PageTransitions />
          <SiteHeader />
          <main className="page-content flex-1">{children}</main>
          <SiteFooter />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
