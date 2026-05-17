import { Instagram, Facebook, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl mb-3">Forest Hill Apartamenty</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Twój drugi dom na szlaku karkonoskich i nadmorskich wspomnień.
            Sosnówka · Świeradów Zdrój · Mrzeżyno.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Zostaw opinię</h4>
          <p className="text-sm opacity-80 mb-3">
            Prosimy o zostawienie opinii po zakończeniu pobytu — to dla nas najpiękniejszy komplement.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Śledź nas</h4>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/share/1B31HGFq6V/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/forest.hill.apartamenty?igsh=dzI5NHIyZTkycGh2&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.google.com/search?q=Forest+Hill+Apartamenty"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Opinie Google"
              className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Star className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs opacity-70">
          <span>© {new Date().getFullYear()} Forest Hill Apartamenty. Wszelkie prawa zastrzeżone.</span>
          <nav className="flex gap-5">
            <Link to="/polityka-prywatnosci" className="hover:opacity-100 hover:underline">
              Polityka prywatności
            </Link>
            <Link to="/polityka-cookies" className="hover:opacity-100 hover:underline">
              Polityka cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
