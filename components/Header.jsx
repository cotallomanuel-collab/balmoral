"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Studios", href: "#studios" },
  { label: "Artists & Labels", href: "#artists" },
  { label: "What We Do", href: "#what-we-do" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/RECURSOS_BALMORAL_011.png"
            alt="Balmoral Label Services"
            width={220}
            height={90}
            priority
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold tracking-tight md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-60">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button className="rounded-full border border-black px-5 py-2 text-sm font-semibold transition-colors hover:bg-black hover:text-white">
            Join Us
          </button>
          <button className="hidden h-9 w-9 items-center justify-center rounded-full border border-black text-xs font-semibold md:flex">
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
