import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-header.svg";

const nav = [
  { to: "/sosnowka", label: "Sosnówka" },
  { to: "/swieradow", label: "Świeradów Zdrój" },
  { to: "/mrzezyno", label: "Mrzeżyno" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Forest Hill Apartamenty" className="h-12 w-auto" />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
