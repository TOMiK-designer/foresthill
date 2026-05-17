import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

const STORAGE_KEY = "fh-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const handleDecision = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-md z-50">
      <div className="relative bg-primary text-primary-foreground rounded-xl shadow-2xl p-6 pr-10">
        <button
          onClick={() => handleDecision("rejected")}
          aria-label="Zamknij"
          className="absolute top-3 right-3 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="h-4 w-4" />
        </button>
        <h3 className="font-serif text-xl mb-2">Pliki cookies</h3>
        <p className="text-sm opacity-90 leading-relaxed">
          Używamy plików cookies, aby zapewnić prawidłowe działanie strony oraz poprawić
          jakość świadczonych usług. Szczegóły znajdziesz w{" "}
          <Link
            to="/polityka-cookies"
            className="underline underline-offset-2 hover:opacity-100"
          >
            Polityce cookies
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => handleDecision("accepted")}
            className="bg-cream text-primary px-5 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors"
          >
            Akceptuję
          </button>
          <button
            onClick={() => handleDecision("rejected")}
            className="px-5 py-2 rounded-full text-sm font-medium border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
          >
            Tylko niezbędne
          </button>
        </div>
      </div>
    </div>
  );
}
