"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/sosnowka", label: "Sosnówka" },
  { href: "/swieradow", label: "Świeradów-Zdrój" },
  { href: "/mrzezyno", label: "Mrzeżyno" },
];

const logosByPath: Record<string, string> = {
  "/sosnowka": "/assets/logo-header-sosnowka.svg",
  "/swieradow": "/assets/logo-header-swieradow.svg",
  "/mrzezyno": "/assets/logo-header-mrzezyno.svg",
};

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoSrc = logosByPath[pathname] ?? "/assets/logo-header.svg";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 12);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-border/60 backdrop-blur transition-colors duration-500 ${
        scrolled ? "bg-background/80" : "bg-background"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Forest Hill Apartamenty">
          <img
            src={logoSrc}
            alt="Forest Hill Apartamenty"
            className="h-12 w-auto max-w-[225px] object-contain sm:h-12 sm:max-w-[260px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
          {nav.map((item) => (
            <HeaderLink key={item.href} href={item.href} active={pathname === item.href}>
              {item.label}
            </HeaderLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="glass-button inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium uppercase tracking-[0.14em] text-primary md:hidden"
        >
          <span>Menu</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-20 z-40 border-b border-border/70 bg-background/98 px-4 pb-5 pt-3 shadow-2xl shadow-primary/10 backdrop-blur transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl border px-4 py-4 text-sm font-medium uppercase tracking-[0.16em] transition-colors ${
                pathname === item.href
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <button
        type="button"
        aria-label="Zamknij menu"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-20 z-30 bg-primary/20 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </header>
  );
}

function HeaderLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-md px-3 py-2 text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
        active ? "text-primary" : "text-foreground/70 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}
