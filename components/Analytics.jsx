"use client";

import Script from "next/script";
import { useCookieConsent } from "@/components/CookieConsent";

// Set NEXT_PUBLIC_GA_MEASUREMENT_ID in the environment (e.g. Vercel project
// settings) to a GA4 "G-XXXXXXXXXX" id to turn this on. Until then it's a
// no-op, and even with an id set it won't load anything until the visitor
// accepts analytics cookies in the CookieConsent banner.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  const consent = useCookieConsent();

  if (!GA_ID || consent !== "granted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
