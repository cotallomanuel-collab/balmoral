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
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[var(--pink)] py-24 text-[var(--purple)]"
    >
      <div className="mx-auto grid h-full w-full max-w-[1800px] grid-cols-1 items-center gap-6 px-6 md:grid-cols-[minmax(0,30rem)_1fr] md:px-10">
        <div>
          <Copy>
            <h2 className="text-5xl leading-[1.1] font-black tracking-tight md:text-6xl">
              Distribution
              <br />
              and beyond
            </h2>
          </Copy>
          <button className="mt-8 rounded-full border border-[var(--purple)] px-6 py-3 text-sm font-semibold transition-colors hover:bg-[var(--purple)] hover:text-[var(--pink)]">
            Learn More
          </button>
        </div>

        <div className="h-[70vh] w-full md:h-[65vh]">
          <FallingWords triggerRef={sectionRef} />
        </div>
      </div>
    </section>
  );
}
