import "./globals.css";
import { EB_Garamond } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import TransitionProvider from "@/components/transitions/TransitionProvider";

const ebGaramondItalic = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-eb-garamond-italic",
});

// Roman cut of the same serif, for editorial body copy set upright.
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-eb-garamond",
});

export const metadata = {
  title: "Balmoral | Label Services",
  description: "Balmoral Label Services — demo landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${ebGaramondItalic.variable} ${ebGaramond.variable}`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        <SmoothScroll>
          <TransitionProvider>{children}</TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
