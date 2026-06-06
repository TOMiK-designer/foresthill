import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const TIKTOK_URL = "https://www.tiktok.com/@forest.hill.apart?_r=1&_t=ZN-96jzu4kbSSc";
const GOOGLE_REVIEW_URL = "https://share.google/bTWzGiwSGJcQv9Bhk";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground" data-no-scroll-reveal>
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
          <FooterColumnTitle>Zostaw opinię</FooterColumnTitle>
          <p className="mt-5 text-sm leading-relaxed opacity-80">
            Prosimy o zostawienie opinii po zakończeniu pobytu. To dla nas najpiękniejszy
            komplement.
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button glass-button-dark mt-5 inline-flex rounded-full px-5 py-3 text-sm font-medium"
          >
            Zostaw opinię w Google
          </a>
        </div>
        <div>
          <FooterColumnTitle>Śledź nas</FooterColumnTitle>
          <div className="mt-5 flex gap-3">
            <SocialLink href="https://www.facebook.com/share/1B31HGFq6V/?mibextid=wwXIfr" label="Facebook">
              <Facebook className="h-5 w-5" />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/forest.hill.apartamenty?igsh=dzI5NHIyZTkycGh2&utm_source=qr"
              label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="https://youtube.com/@foresthillapartamenty?si=w6bBFVbMfbTisF8-" label="YouTube">
              <Youtube className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={TIKTOK_URL} label="TikTok">
              <TikTokIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-xs text-primary-foreground/75 md:flex-row md:items-center md:justify-between">
          <span className="leading-relaxed">
            © {new Date().getFullYear()} Forest Hill Apartamenty. Wszelkie prawa zastrzeżone.
          </span>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 leading-relaxed">
            <Link href="/polityka-prywatnosci" className="underline-offset-4 hover:underline">
              Polityka prywatności
            </Link>
            <Link href="/polityka-cookies" className="underline-offset-4 hover:underline">
              Polityka cookies
            </Link>
            <a
              href="https://tomreklamy.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Power by TOM WEBSITE PRO
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h4 className="font-serif text-2xl leading-none md:text-3xl">{children}</h4>
      <span className="h-px min-w-12 flex-1 bg-primary-foreground/25" />
    </div>
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
      className="glass-button glass-button-dark inline-flex h-11 w-11 items-center justify-center rounded-full"
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

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.2 5.2a5.1 5.1 0 0 0 3.2 1.2v3.4a8.3 8.3 0 0 1-3.7-.9v5.9a5.8 5.8 0 1 1-5.8-5.8c.4 0 .8 0 1.2.1v3.5a2.4 2.4 0 1 0 1.2 2.1V2.8h3.4c.1 1 .3 1.8.5 2.4Z" />
    </svg>
  );
}
