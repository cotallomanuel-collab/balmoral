"use client";

import Copy from "./Copy";

const SERVICES = [
  { label: "PR and Marketing", rotate: -3 },
  { label: "Digital Strategy", rotate: 2 },
  { label: "Project Funding", rotate: -2 },
  { label: "Physical Distribution", rotate: 3 },
  { label: "Global Strategy", rotate: -1 },
  { label: "Personalized Label Management", rotate: 1 },
  { label: "Channel Management", rotate: -2 },
  { label: "Online Marketing", rotate: 2 },
];

export default function DistributionSection() {
  return (
    <section
      id="what-we-do"
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

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 py-12 md:justify-end md:gap-x-10 md:gap-y-8 md:py-0">
          {SERVICES.map((service) => (
            <span
              key={service.label}
              className="inline-block overflow-visible text-2xl leading-none font-black tracking-tight uppercase select-none md:text-4xl lg:text-5xl"
            >
              <span
                className="inline-block"
                style={{ transform: `rotate(${service.rotate}deg)` }}
              >
                {service.label}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
