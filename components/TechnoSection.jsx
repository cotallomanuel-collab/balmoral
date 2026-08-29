"use client";

import { useRef } from "react";
import FluidCursor from "./fluid/FluidCursor";

export default function TechnoSection() {
  const sectionRef = useRef(null);

  return (
    <section
      id="studios"
      className="flex w-full flex-col items-center bg-white px-6 py-16 text-black md:px-10"
    >
      <div
        ref={sectionRef}
        className="relative flex w-full flex-col justify-center overflow-hidden py-8"
      >
        <FluidCursor areaRef={sectionRef} />

        <div className="pointer-events-none relative z-0 flex flex-col">
          <h2 className="text-[13vw] leading-[0.9] font-black tracking-tight uppercase md:text-[9vw]">
            Our Technology
          </h2>
          <h2 className="self-end text-[13vw] leading-[0.9] font-black tracking-tight uppercase md:text-[9vw]">
            Built In-House
          </h2>
          <h2 className="self-center text-[13vw] leading-[0.9] font-black tracking-tight uppercase md:text-[9vw]">
            For You
          </h2>
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
