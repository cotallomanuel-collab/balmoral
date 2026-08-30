import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import TransitionProvider from "@/components/transitions/TransitionProvider";

export const metadata = {
  title: "Balmoral | Label Services",
  description: "Balmoral Label Services — demo landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        <SmoothScroll>
          <TransitionProvider>{children}</TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
