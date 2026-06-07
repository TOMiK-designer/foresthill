"use client";

import { useEffect } from "react";

const STORAGE_KEY = "fh-cookie-consent";

type CookieConsent = {
  analytics?: boolean;
  marketing?: boolean;
};

function readStoredConsent(): CookieConsent {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue || storedValue === "rejected") return {};
    if (storedValue === "accepted") return { analytics: true, marketing: true };

    const parsedValue = JSON.parse(storedValue) as CookieConsent;

    return {
      analytics: Boolean(parsedValue.analytics),
      marketing: Boolean(parsedValue.marketing),
    };
  } catch {
    return {};
  }
}

function updateGoogleConsent(consent: CookieConsent) {
  window.gtag?.("consent", "update", {
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
  });
}

export function GoogleAnalyticsConsentUpdater() {
  useEffect(() => {
    updateGoogleConsent(readStoredConsent());

    function handleConsentChange() {
      updateGoogleConsent(readStoredConsent());
    }

    window.addEventListener("fh-cookie-consent-change", handleConsentChange);

    return () => window.removeEventListener("fh-cookie-consent-change", handleConsentChange);
  }, []);

  return null;
}

declare global {
  interface Window {
    gtag?: (
      command: "consent" | "config" | "js",
      target: string | Date,
      config?: Record<string, string>,
    ) => void;
  }
}
