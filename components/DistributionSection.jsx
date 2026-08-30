"use client";

import { useRef } from "react";
import Copy from "./Copy";
import FallingWords from "./FallingWords";

export default function DistributionSection() {
  const sectionRef = useRef(null);

  return (
    <section
      id="what-we-do"
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-start overflow-hidden bg-[var(--pink)] py-16 text-[var(--purple)]"
    >
      <div className="mx-auto grid h-full w-full max-w-[1900px] grid-cols-1 items-start gap-6 px-4 pt-28 md:grid-cols-[minmax(0,42rem)_1fr] md:px-6 md:pt-32">
        <div>
          <Copy>
            <h2 className="text-6xl leading-[1.18] font-black tracking-tight select-none md:text-7xl lg:text-8xl">
              Distribution
              <br />
              and beyond
            </h2>
          </Copy>
          <button className="mt-8 rounded-full border border-[var(--purple)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--purple)] hover:text-[var(--pink)]">
            Learn More
          </button>
        </div>

        <div className="h-[75vh] w-full md:h-[78vh]">
          <FallingWords triggerRef={sectionRef} />
        </div>
      </div>
    </section>
  );
}
