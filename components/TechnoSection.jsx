"use client";

import { useRef } from "react";
import FluidCursor from "./fluid/FluidCursor";
import BlockReveal from "./BlockReveal";
import ImageCarousel from "./ImageCarousel";
import WordReveal from "./WordReveal";
import useIsDesktop from "@/hooks/useIsDesktop";

const LINES = ["Our Technology", "Built In-House", "For You"];
const ALIGN = ["", "self-end", "self-center"];

// Editorial contrast, as in the magazine reference: heavy grotesque headline,
// roman serif lead paragraph, small regular grotesque underneath, with hairline
// rules between them. Both paragraphs and both rules share one column measure.
const COLUMN = "mx-auto w-full md:w-[82%]";
const RULE = "h-px w-full bg-black/25";
const SERIF = { fontFamily: "var(--font-eb-garamond)" };

const LEAD =
  "Our in-house team builds the tools our roster actually needs — from catalog management to release-day analytics, engineered by musicians, for musicians.";
const BODY =
  "From mastering pipelines to royalty dashboards and fan-data tooling, every product we ship starts with a real problem someone on our roster brought to us. Nothing is off-the-shelf — so the technology never gets in the way of the music, it disappears into the workflow.";

const CAROUSEL_IMAGES = Array.from(
  { length: 21 },
  (_, i) => `/images/about/carousel-${i + 1}.jpeg`
);

export default function TechnoSection() {
  const fluidAreaRef = useRef(null);
  const isDesktop = useIsDesktop();

  return (
    <section
      id="technology"
      className="flex w-full flex-col items-center text-black"
      style={{ backgroundColor: "#CDCDCD" }}
    >
      <div
        ref={fluidAreaRef}
        className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden"
      >
        {isDesktop && <FluidCursor areaRef={fluidAreaRef} />}

        <div className="relative z-0 mx-auto flex w-full max-w-[1900px] flex-col justify-center py-8 pr-4 pl-2 md:pr-6 md:pl-3">
          <div className="pointer-events-none flex flex-col">
            {LINES.map((line, i) =>
              isDesktop ? (
                <h2
                  key={line}
                  className={`${ALIGN[i]} text-[8vw] leading-[0.82] font-black tracking-tight uppercase select-none md:text-[6vw]`}
                >
                  {line}
                </h2>
              ) : (
                <BlockReveal
                  key={line}
                  delay={i * 0.1}
                  blockColor="var(--pink)"
                >
                  <h2
                    className={`${ALIGN[i]} max-w-full text-[8vw] leading-[0.95] font-black tracking-tight break-words uppercase`}
                  >
                    {line}
                  </h2>
                </BlockReveal>
              )
            )}
          </div>

          <div className={`techno-copy mt-5 md:mt-6 ${COLUMN}`}>
            <div className={RULE} />

            <div className="mt-4 md:mt-5">
              {isDesktop ? (
                <WordReveal
                  delay={0.1}
                  stagger={0.02}
                  style={SERIF}
                  className="pointer-events-none block text-center text-[clamp(1.15rem,2.05vw,2.5rem)] leading-[1.15] font-normal text-black"
                >
                  {LEAD}
                </WordReveal>
              ) : (
                <BlockReveal delay={0.1} blockColor="var(--pink)">
                  <p
                    style={SERIF}
                    className="pointer-events-none text-center text-[clamp(1.05rem,5.4vw,1.75rem)] leading-[1.15] font-normal text-black"
                  >
                    {LEAD}
                  </p>
                </BlockReveal>
              )}
            </div>

            <div className={`mt-4 md:mt-5 ${RULE}`} />

            <div className="mt-4 md:mt-5">
              {isDesktop ? (
                <WordReveal
                  delay={0.3}
                  stagger={0.015}
                  className="pointer-events-none block text-center text-[clamp(0.85rem,1.1vw,1.35rem)] leading-[1.35] font-normal text-black"
                >
                  {BODY}
                </WordReveal>
              ) : (
                <BlockReveal delay={0.2} blockColor="var(--pink)">
                  <p className="pointer-events-none text-center text-[clamp(0.8rem,3.4vw,1.05rem)] leading-[1.35] font-normal text-black">
                    {BODY}
                  </p>
                </BlockReveal>
              )}
            </div>
          </div>

          <div className="relative z-10 mt-6 flex justify-center">
            <button className="rounded-full border border-black px-6 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ImageCarousel images={CAROUSEL_IMAGES} bg="#CDCDCD" grayscale imageClassName="object-cover" />
      </div>
    </section>
  );
}
