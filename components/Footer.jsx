"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-16 text-white md:px-10">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <nav className="flex flex-col gap-2 text-3xl font-semibold md:text-4xl">
            <Link href="#jobs" className="hover:opacity-70">
              Jobs
            </Link>
            <Link href="#brand-assets" className="hover:opacity-70">
              Brand Assets
            </Link>
            <Link href="#contact" className="hover:opacity-70">
              Contact
            </Link>
          </nav>

          <div className="flex items-start gap-6 text-sm font-semibold md:flex-col md:items-end">
            <div className="flex gap-4 md:flex-col md:items-end">
              <button className="hover:opacity-70">EN</button>
              <button className="opacity-60 hover:opacity-100">FR</button>
            </div>
            <button
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 hover:bg-white hover:text-black"
            >
              ↑
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 border-t border-white/15 pt-10 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/images/RECURSOS_BALMORAL_011.png"
              alt="Balmoral Label Services"
              width={140}
              height={60}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
            <p className="text-lg leading-tight font-semibold">
              Independence
              <br />
              is a strength
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/80">
            <Link href="#disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
            <Link href="#privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#statement" className="hover:text-white">
              Statement regarding AI
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-black"
            >
              f
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white"
            >
              ig
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
