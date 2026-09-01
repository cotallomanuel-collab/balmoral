import "./globals.css";
import { EB_Garamond } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import TransitionProvider from "@/components/transitions/TransitionProvider";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-eb-garamond-italic",
});

export const metadata = {
  title: "Balmoral | Label Services",
  description: "Balmoral Label Services — demo landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${ebGaramond.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        <SmoothScroll>
          <TransitionProvider>{children}</TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
