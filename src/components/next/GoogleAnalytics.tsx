import Script from "next/script";
import { GoogleAnalyticsConsentUpdater } from "@/components/next/GoogleAnalyticsConsentUpdater";

const GA_MEASUREMENT_ID = "G-1TYJEF0PP4";

export function GoogleAnalytics() {
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
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <GoogleAnalyticsConsentUpdater />
    </>
  );
}
