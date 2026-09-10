"use client";

import Image from "next/image";
import Copy from "@/components/Copy";

export default function About() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden bg-black text-white">
      <Image
        src="/images/about/about-bg.jpeg"
        alt=""
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "center 18%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/50" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1900px] flex-col items-center px-4 pt-24 pb-10 text-center md:px-6 md:pb-16">
        {/* Widths follow the magazine reference: the italic standfirst is
            narrower than the title, and the body is wider than it, overhanging
            the headline on both sides. All three stay centred on one axis. */}
        <div className="w-full">
          <Copy animateOnScroll={false}>
            <h1 className="text-[11.5vw] leading-[0.85] font-black tracking-[-0.06em] uppercase select-none md:text-[9vw]">
              Independence
            </h1>
          </Copy>

          <Copy delay={0.15} animateOnScroll={false}>
            <p
              style={{ fontFamily: "var(--font-script-italic)" }}
              className="mx-auto mt-1.5 w-[88%] text-[1.28rem] leading-[1.4] font-normal italic md:mt-2 md:w-[62%] md:text-[clamp(1.33rem,1.75vw,2.29rem)]"
            >
              Balmoral started as a handful of people who believed
              independent artists and labels deserved the same tools, reach
              and craft as the majors — without giving up ownership of their
              work.
            </p>
          </Copy>

          <Copy delay={0.3} animateOnScroll={false}>
            <p className="mx-auto mt-3.5 w-full text-[1.0625rem] leading-snug font-light md:mt-4 md:w-[82%] md:text-[clamp(1.1rem,1.45vw,1.9rem)]">
              Today we&apos;re a global label services company supporting
              artists and labels across every genre, working out of our own
              studios and remotely with partners on every continent. We&apos;re
              not a major, and we don&apos;t want to be one. High standards,
              agility and freedom of choice shape everything we do — that&apos;s
              what independence means to us.
            </p>
          </Copy>
        </div>
      </div>
    </section>
  );
}
