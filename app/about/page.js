"use client";

import Image from "next/image";
import Copy from "@/components/Copy";

export default function AboutPage() {
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
        {/* Title, italic standfirst and body share one column, so the three
            read as a single block instead of three loose pieces. 74% is the
            width the title fills at 9vw, so the title sets the column and the
            other two match it. Both paragraphs scale with vw so the line count
            stays roughly constant instead of growing as the column narrows. */}
        <div className="mx-auto w-full md:w-[74%]">
          <Copy animateOnScroll={false}>
            <h1 className="text-[11.5vw] leading-[0.85] font-black tracking-tight uppercase select-none md:text-[9vw]">
              Independence
            </h1>
          </Copy>

          <Copy delay={0.15} animateOnScroll={false}>
            <p
              style={{ fontFamily: "var(--font-eb-garamond-italic)" }}
              className="mt-1.5 w-full text-xs leading-snug font-normal md:mt-2 md:text-[clamp(0.8rem,0.95vw,1.15rem)]"
            >
              Balmoral started as a handful of people who believed
              independent artists and labels deserved the same tools, reach
              and craft as the majors — without giving up ownership of their
              work.
            </p>
          </Copy>

          <Copy delay={0.3} animateOnScroll={false}>
            <p className="mt-3.5 w-full text-[0.9375rem] leading-snug font-bold opacity-90 md:mt-4 md:text-[clamp(1rem,1.25vw,1.6rem)]">
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
