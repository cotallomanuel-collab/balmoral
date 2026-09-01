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

      <div className="relative z-10 mx-auto flex w-full max-w-[1900px] flex-col items-center px-4 pt-32 pb-20 text-center md:px-6 md:pb-28">
        <Copy>
          <h1 className="text-[13vw] leading-[0.85] font-black tracking-tight uppercase select-none md:text-[9vw]">
            Independence
          </h1>
        </Copy>

        <div className="mt-10 flex w-full flex-col items-center gap-5">
          <Copy delay={0.15}>
            <p
              style={{ fontFamily: "var(--font-eb-garamond-italic)" }}
              className="mx-auto w-[90%] max-w-full text-lg leading-snug font-normal md:w-[62%] md:text-xl lg:text-2xl"
            >
              Balmoral started as a handful of people who believed
              independent artists and labels deserved the same tools, reach
              and craft as the majors — without giving up ownership of their
              work.
            </p>
          </Copy>
          <Copy delay={0.3}>
            <p className="mx-auto w-[92%] max-w-full text-xl leading-snug font-bold opacity-90 md:w-[48%] md:text-3xl lg:text-4xl">
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
