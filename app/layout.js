import "./globals.css";
import {
  EB_Garamond,
  Cormorant_Garamond,
  Playfair_Display,
} from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import TransitionProvider from "@/components/transitions/TransitionProvider";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";

// Roman serif for editorial body copy set upright.
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-eb-garamond",
});

// Calligraphic italic with marked thick/thin contrast, for credit lines and
// standfirsts. Note its x-height is very small, so it needs a larger px size
// than the sans beside it to read at the same optical size.
const cormorantItalic = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "italic",
  variable: "--font-script-italic",
});

// Heavy display serif italic, for the oversized Studios statement.
const playfairItalic = Playfair_Display({
  subsets: ["latin"],
  weight: ["800", "900"],
  style: "italic",
  variable: "--font-display-serif",
});

const SITE_URL = "https://balmoral-rouge.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Balmoral | Independent Label Services",
    template: "%s | Balmoral",
  },
  description:
    "Balmoral is an independent label services company supporting artists and labels worldwide since 2006 — distribution, technology and studios, built in-house.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Balmoral",
    title: "Balmoral | Independent Label Services",
    description:
      "Balmoral is an independent label services company supporting artists and labels worldwide since 2006.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balmoral | Independent Label Services",
    description:
      "Balmoral is an independent label services company supporting artists and labels worldwide since 2006.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${ebGaramond.variable} ${cormorantItalic.variable} ${playfairItalic.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        <SmoothScroll>
          <TransitionProvider>{children}</TransitionProvider>
        </SmoothScroll>
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
