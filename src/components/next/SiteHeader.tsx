import Link from "next/link";

const nav = [
  { href: "/sosnowka", label: "Sosnówka" },
  { href: "/swieradow", label: "Świeradów-Zdrój" },
  { href: "/mrzezyno", label: "Mrzeżyno" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Forest Hill Apartamenty">
          <img src="/assets/logo-header.svg" alt="Forest Hill Apartamenty" className="h-12 w-auto" />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-primary sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
