"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "fh-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function handleDecision(value: "accepted" | "rejected") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md">
      <div className="relative rounded-xl bg-primary p-6 pr-10 text-primary-foreground shadow-2xl">
        <button
          type="button"
          onClick={() => handleDecision("rejected")}
          aria-label="Zamknij"
          className="absolute right-3 top-3 opacity-70 transition-opacity hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
        <h3 className="font-serif text-xl mb-2">Pliki cookies</h3>
        <p className="text-sm leading-relaxed opacity-90">
          Używamy plików cookies, aby zapewnić prawidłowe działanie strony oraz poprawić jakość
          świadczonych usług. Szczegóły znajdziesz w{" "}
          <Link href="/polityka-cookies" className="underline underline-offset-2">
            Polityce cookies
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleDecision("accepted")}
            className="glass-button rounded-full px-5 py-2 text-sm font-medium text-primary"
          >
            Akceptuję
          </button>
          <button
            type="button"
            onClick={() => handleDecision("rejected")}
            className="glass-button glass-button-dark rounded-full px-5 py-2 text-sm font-medium"
          >
            Tylko niezbędne
          </button>
        </div>
      </div>
    </div>
  );
}
