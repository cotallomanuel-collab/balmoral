import "./globals.css";

export const metadata = {
  title: "Balmoral | Label Services",
  description: "Balmoral Label Services — demo landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
