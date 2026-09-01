"use client";

import Image from "next/image";
import TransitionLink from "./transitions/TransitionLink";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/lib/navLinks";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1900px] items-center justify-between gap-6 py-4 pr-4 pl-2 md:pr-6 md:pl-3">
        <TransitionLink href="/" className="shrink-0">
          <Image
            src="/images/RECURSOS_BALMORAL_011.png"
            alt="Balmoral Label Services"
            width={220}
            height={90}
            priority
            className="h-14 w-auto object-contain md:h-16"
          />
        </TransitionLink>

        <nav className="hidden items-center gap-10 text-base font-bold tracking-tight md:flex">
          {navLinks.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className="hover:opacity-60"
            >
              {link.label.toUpperCase()}
            </TransitionLink>
          ))}
        </nav>

        <div className="hidden items-center gap-16 md:flex">
          <button className="rounded-full border border-black px-6 py-2.5 text-sm font-semibold uppercase transition-colors hover:bg-black hover:text-white">
            Join Us
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-black text-xs font-semibold">
            EN
          </button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
