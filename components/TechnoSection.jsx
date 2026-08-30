"use client";

import { useRef } from "react";
import FluidCursor from "./fluid/FluidCursor";
import BlockReveal from "./BlockReveal";
import useIsDesktop from "@/hooks/useIsDesktop";

const LINES = ["Our Technology", "Built In-House", "For You"];
const ALIGN = ["", "self-end", "self-center"];

export default function TechnoSection() {
  const sectionRef = useRef(null);
  const isDesktop = useIsDesktop();

  return (
    <section
      id="technology"
      className="flex w-full flex-col items-center bg-white py-16 text-black"
    >
      <div
        ref={sectionRef}
        className="relative mx-auto flex w-full max-w-[1900px] flex-col justify-center overflow-hidden py-8 pr-4 pl-2 md:pr-6 md:pl-3"
      >
        {isDesktop && <FluidCursor areaRef={sectionRef} />}

        <div className="pointer-events-none relative z-0 flex flex-col">
          {LINES.map((line, i) =>
            isDesktop ? (
              <h2
                key={line}
                className={`${ALIGN[i]} text-[13vw] leading-[0.9] font-black tracking-tight uppercase select-none md:text-[9vw]`}
              >
                {line}
              </h2>
            ) : (
              <BlockReveal key={line} delay={i * 0.1} blockColor="var(--pink)">
                <h2
                  className={`${ALIGN[i]} max-w-full text-[9vw] leading-[1.05] font-black tracking-tight break-words uppercase`}
                >
                  {line}
                </h2>
              </BlockReveal>
            )
          )}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button className="rounded-full border border-black px-6 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white">
          Learn More
        </button>
      </div>
    </section>
  );
}
