import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { CookieBanner } from "./CookieBanner";
import { ScrollToTop } from "./ScrollToTop";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <CookieBanner />
      <ScrollToTop />
    </div>
  );
}
