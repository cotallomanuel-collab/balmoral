"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Copy from "./Copy";

const LOGOS = [
  "/images/RECURSOS_BALMORAL_015.png",
  "/images/RECURSOS_BALMORAL_014.png",
  "/images/RECURSOS_BALMORAL_024.png",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % LOGOS.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex min-h-screen w-full items-center pt-28">
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="relative aspect-square w-full max-w-[520px] justify-self-center md:justify-self-start">
          <AnimatePresence>
            <motion.div
              key={LOGOS[index]}
              className="absolute inset-0"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
            >
              <Image
                src={LOGOS[index]}
                alt="Balmoral logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-xl">
          <Copy delay={0.3}>
            <h1 className="text-4xl leading-[1.1] font-black tracking-tight md:text-5xl">
              INDEPENDENCE
              <br />
              IS A STRENGTH
            </h1>
          </Copy>

          <Copy delay={0.6} animateOnScroll={false}>
            <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
              Supporting artists and labels worldwide since 2006, Balmoral is
              a fully independent label services company. High standards,
              agility and freedom of choice shape our daily expression of
              independence and mark our strengths.
            </p>
          </Copy>

          <button className="mt-8 rounded-full border border-black px-6 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
