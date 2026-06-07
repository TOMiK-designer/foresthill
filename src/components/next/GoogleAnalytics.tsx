"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "fh-cookie-consent";
const GA_MEASUREMENT_ID = "G-1TYJEF0PP4";
const GA_DISABLE_KEY = `ga-disable-${GA_MEASUREMENT_ID}`;

type CookieConsent = {
  analytics?: boolean;
};

function hasAnalyticsConsent() {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (!storedValue) return false;
    if (storedValue === "accepted") return true;
    if (storedValue === "rejected") return false;

    return Boolean((JSON.parse(storedValue) as CookieConsent).analytics);
  } catch {
    return false;
  }
}

function setGoogleAnalyticsDisabled(disabled: boolean) {
  (window as Window & Record<string, boolean>)[GA_DISABLE_KEY] = disabled;
}

export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const analyticsConsent = hasAnalyticsConsent();

    setGoogleAnalyticsDisabled(!analyticsConsent);
    setEnabled(analyticsConsent);

    function handleConsentChange() {
      const updatedAnalyticsConsent = hasAnalyticsConsent();

      setGoogleAnalyticsDisabled(!updatedAnalyticsConsent);
      setEnabled(updatedAnalyticsConsent);
    }

    window.addEventListener("fh-cookie-consent-change", handleConsentChange);

    return () => window.removeEventListener("fh-cookie-consent-change", handleConsentChange);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
