import { Facebook, Instagram, Star } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <Link href="/" className="mb-5 inline-flex" aria-label="Forest Hill Apartamenty">
            <img
              src="/assets/logo-footer-white.svg"
              alt="Forest Hill Apartamenty"
              className="h-16 w-auto"
            />
          </Link>
          <h3 className="font-serif text-2xl mb-3">Forest Hill Apartamenty</h3>
          <p className="text-sm leading-relaxed opacity-80">
            Twój drugi dom na szlaku karkonoskich i nadmorskich wspomnień.{" "}
            <FooterTextLink href="/sosnowka">Sosnówka</FooterTextLink>
            {" · "}
            <FooterTextLink href="/swieradow">Świeradów-Zdrój</FooterTextLink>
            {" · "}
            <FooterTextLink href="/mrzezyno">Mrzeżyno</FooterTextLink>.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Zostaw opinię</h4>
          <p className="text-sm opacity-80">
            Prosimy o zostawienie opinii po zakończeniu pobytu. To dla nas najpiękniejszy
            komplement.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Śledź nas</h4>
          <div className="flex gap-3">
            <SocialLink href="https://www.facebook.com/share/1B31HGFq6V/?mibextid=wwXIfr" label="Facebook">
              <Facebook className="h-5 w-5" />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/forest.hill.apartamenty?igsh=dzI5NHIyZTkycGh2&utm_source=qr"
              label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://www.google.com/search?q=Forest+Hill+Apartamenty" label="Opinie Google">
              <Star className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Forest Hill Apartamenty. Wszelkie prawa zastrzeżone.</span>
          <nav className="flex gap-5">
            <Link href="/polityka-prywatnosci" className="hover:underline">
              Polityka prywatności
            </Link>
            <Link href="/polityka-cookies" className="hover:underline">
              Polityka cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
    >
      {children}
    </a>
  );
}

function FooterTextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="underline-offset-4 transition-opacity hover:opacity-100 hover:underline">
      {children}
    </Link>
  );
}
