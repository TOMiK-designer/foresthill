"use client";

import { SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "fh-cookie-consent";
const CONSENT_VERSION = 2;

type CookieConsent = {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  savedAt: string;
};

type OptionalConsent = Pick<CookieConsent, "analytics" | "marketing">;

const DEFAULT_OPTIONAL_CONSENT: OptionalConsent = {
  analytics: false,
  marketing: false,
};

function createConsent(optionalConsent: OptionalConsent): CookieConsent {
  return {
    version: CONSENT_VERSION,
    necessary: true,
    ...optionalConsent,
    savedAt: new Date().toISOString(),
  };
}

function readConsent(): CookieConsent | null {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) return null;

    if (storedValue === "accepted") {
      return createConsent({ analytics: true, marketing: true });
    }

    if (storedValue === "rejected") {
      return createConsent(DEFAULT_OPTIONAL_CONSENT);
    }

    const parsedValue = JSON.parse(storedValue) as Partial<CookieConsent>;

    if (parsedValue.version !== CONSENT_VERSION) return null;

    return createConsent({
      analytics: Boolean(parsedValue.analytics),
      marketing: Boolean(parsedValue.marketing),
    });
  } catch {
    return null;
  }
}

function saveConsent(optionalConsent: OptionalConsent) {
  const consent = createConsent(optionalConsent);

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("fh-cookie-consent-change", { detail: consent }));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hasDecision, setHasDecision] = useState(false);
  const [optionalConsent, setOptionalConsent] = useState<OptionalConsent>(DEFAULT_OPTIONAL_CONSENT);

  useEffect(() => {
    const storedConsent = readConsent();

    if (!storedConsent) {
      setVisible(true);
      return;
    }

    setHasDecision(true);
    setOptionalConsent({
      analytics: storedConsent.analytics,
      marketing: storedConsent.marketing,
    });
  }, []);

  function handleSave(value: OptionalConsent) {
    saveConsent(value);
    setOptionalConsent(value);
    setHasDecision(true);
    setVisible(false);
    setShowSettings(false);
  }

  return (
    <>
      {visible ? (
        <div className="fixed bottom-4 left-4 right-4 z-50 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xl">
          <div className="relative rounded-2xl bg-primary p-6 pr-10 text-primary-foreground shadow-2xl">
            <button
              type="button"
              onClick={() => handleSave(DEFAULT_OPTIONAL_CONSENT)}
              aria-label="Zamknij i pozostaw tylko niezbędne pliki cookies"
              className="absolute right-3 top-3 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="mb-2 font-serif text-xl">Ustawienia plików cookies</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Używamy niezbędnych plików cookies do prawidłowego działania strony. Analityczne i
              marketingowe pliki cookies włączymy tylko po Twojej zgodzie. Szczegóły znajdziesz w{" "}
              <Link href="/polityka-cookies" className="underline underline-offset-2">
                Polityce cookies
              </Link>
              .
            </p>

            {showSettings ? (
              <div className="mt-5 space-y-3">
                <CookieOption
                  title="Niezbędne"
                  description="Wymagane do działania strony i zapamiętania wyboru zgód."
                  checked
                  disabled
                />
                <CookieOption
                  title="Analityczne"
                  description="Pomagają mierzyć sposób korzystania ze strony, wyłącznie po zgodzie."
                  checked={optionalConsent.analytics}
                  onChange={(analytics) => setOptionalConsent((current) => ({ ...current, analytics }))}
                />
                <CookieOption
                  title="Marketingowe"
                  description="Służą do personalizacji treści reklamowych, wyłącznie po zgodzie."
                  checked={optionalConsent.marketing}
                  onChange={(marketing) => setOptionalConsent((current) => ({ ...current, marketing }))}
                />
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleSave({ analytics: true, marketing: true })}
                className="glass-button rounded-full px-5 py-2 text-sm font-medium text-primary"
              >
                Akceptuję wszystkie
              </button>
              <button
                type="button"
                onClick={() => handleSave(DEFAULT_OPTIONAL_CONSENT)}
                className="glass-button glass-button-dark rounded-full px-5 py-2 text-sm font-medium"
              >
                Odrzuć opcjonalne
              </button>
              {showSettings ? (
                <button
                  type="button"
                  onClick={() => handleSave(optionalConsent)}
                  className="glass-button glass-button-dark rounded-full px-5 py-2 text-sm font-medium"
                >
                  Zapisz wybór
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="glass-button glass-button-dark inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Dostosuj
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {hasDecision && !visible ? (
        <button
          type="button"
          onClick={() => {
            const storedConsent = readConsent();

            if (storedConsent) {
              setOptionalConsent({
                analytics: storedConsent.analytics,
                marketing: storedConsent.marketing,
              });
            }

            setShowSettings(true);
            setVisible(true);
          }}
          className="glass-button fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary shadow-lg sm:bottom-6 sm:left-6"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Cookies
        </button>
      ) : null}
    </>
  );
}

function CookieOption({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-1 h-4 w-4 accent-primary-foreground"
      />
      <span>
        <span className="block text-sm font-semibold">{title}</span>
        <span className="mt-1 block text-xs leading-relaxed opacity-80">{description}</span>
      </span>
    </label>
  );
}
