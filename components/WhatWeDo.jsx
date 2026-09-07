"use client";

import Copy from "@/components/Copy";

// ─────────────────────────────────────────────────────────────────────────────
// PLACEHOLDER COPY — every string in this file is provisional. It was written
// to hold the layout and to sound like Balmoral, nothing more. No figures,
// dates, names or claims are asserted. Replace the strings, keep the styling.
// ─────────────────────────────────────────────────────────────────────────────
const EYEBROW = "What We Do";
const HEADLINE = ["Distribution", "and everything", "after it"];

const CREDIT =
  "Services, roughly in the order a record tends to need them. Provisional text.";

const LEAD_BEFORE =
  "Balmoral works the whole length of a release — from the day a master is delivered to the day it stops needing attention. ";
const LEAD_ACCENT = "You keep your masters, your rights and the final say.";
const LEAD_AFTER = " Everything else is ours to carry.";

const ASIDE =
  "We are not a major and we are not trying to become one. That is a structural choice, not a slogan: it is what lets us take on a first single and a forty-year catalogue in the same week, and give both the same room.";

const SERVICES = [
  {
    n: "01",
    name: "Digital Distribution",
    text: "Your catalogue delivered to every platform that matters, with the metadata cleaned before it leaves the building.",
  },
  {
    n: "02",
    name: "Physical",
    text: "Vinyl, CD and cassette — manufacturing, logistics and the shelves that still sell them.",
  },
  {
    n: "03",
    name: "Marketing & PR",
    text: "Campaigns built release by release, in the territories where the record is actually being played.",
  },
  {
    n: "04",
    name: "Sync",
    text: "Placing the catalogue in film, television, games and advertising, and handling the paperwork that follows.",
  },
  {
    n: "05",
    name: "Catalogue Management",
    text: "Rights, splits and royalties kept in order, so the money finds the people who made the record.",
  },
  {
    n: "06",
    name: "Label Services",
    text: "All of the above, run as one team, for labels who would rather not assemble it themselves.",
  },
];

const QUOTE =
  "A record does not finish when the mix does. Most of the work starts the day after.";
const ATTRIBUTION = "— Attribution to come";

const CLOSING_SERIF =
  "There is no single package here. Some artists want the whole apparatus; some want distribution and silence. Both are a service, and both are priced as one.";
const CLOSING_SANS =
  "Provisional closing note. If you want to talk through what a release actually needs, start with the contact page and we will work backwards from the record.";

const PAPER = "#F2F0EB";
const SERIF = { fontFamily: "var(--font-eb-garamond)" };
const SCRIPT = { fontFamily: "var(--font-script-italic)" };
const DISPLAY = { fontFamily: "var(--font-display-serif)" };
const SHELL = "mx-auto w-full max-w-[1700px]";
const RULE = "h-px w-full bg-black/25";

// Asymmetric step: each headline line starts further in than the last.
const STEP = ["", "md:ml-[10%]", "md:ml-[24%]"];

export default function WhatWeDo() {
  return (
    <div style={{ backgroundColor: PAPER }} className="w-full text-black">
      {/* ── 1. Opening. Anchored to the bottom, air above. ────────────────── */}
      <section className="flex min-h-screen w-full flex-col justify-end px-4 pt-32 pb-14 md:px-6 md:pb-20">
        <div className={SHELL}>
          <Copy animateOnScroll={false}>
            <p className="text-[0.68rem] font-bold tracking-[0.42em] uppercase opacity-60">
              {EYEBROW}
            </p>
          </Copy>

          <h1 className="mt-5 md:mt-7">
            {HEADLINE.map((line, i) => (
              <span key={line} className={`block ${STEP[i]}`}>
                <Copy delay={0.08 * i} animateOnScroll={false}>
                  <span className="block text-[13vw] leading-[0.84] font-black tracking-[-0.055em] uppercase select-none md:text-[9.5vw]">
                    {line}
                  </span>
                </Copy>
              </span>
            ))}
          </h1>

          <div className={`mt-8 md:mt-10 ${RULE}`} />

          <Copy delay={0.32} animateOnScroll={false}>
            <p
              style={SCRIPT}
              className="mt-4 max-w-[42ch] text-[clamp(0.95rem,1.2vw,1.5rem)] leading-[1.5] font-normal italic opacity-70"
            >
              {CREDIT}
            </p>
          </Copy>
        </div>
      </section>

      {/* ── 2. Lead, on purple so the pink accent carries. ────────────────── */}
      <section
        className="w-full px-4 py-20 text-white md:px-6 md:py-28"
        style={{ backgroundColor: "var(--purple)" }}
      >
        <div className={SHELL}>
          {/* Offset right, narrow measure — the asymmetry of the spread. */}
          <div className="md:ml-[32%] md:w-[60%]">
            <Copy>
              <p
                style={SERIF}
                className="text-[clamp(1.3rem,2.4vw,3rem)] leading-[1.35] font-normal"
              >
                {LEAD_BEFORE}
                <span style={{ color: "var(--pink)" }}>{LEAD_ACCENT}</span>
                {LEAD_AFTER}
              </p>
            </Copy>

            <div className="mt-8 h-px w-full bg-white/25 md:mt-10" />

            {/* Deliberately a much narrower measure than the serif above. */}
            <Copy delay={0.12}>
              <p className="mt-6 w-full text-[clamp(0.85rem,1.05vw,1.25rem)] leading-[1.6] font-light md:mt-7 md:w-[62%]">
                {ASIDE}
              </p>
            </Copy>
          </div>
        </div>
      </section>

      {/* ── 3. Services, as a numbered index with hairlines. ──────────────── */}
      <section className="w-full px-4 py-20 md:px-6 md:py-28">
        <div className={SHELL}>
          <Copy>
            <p className="text-[0.68rem] font-bold tracking-[0.42em] uppercase opacity-60">
              Index of services — provisional
            </p>
          </Copy>

          <div className="mt-8 md:mt-12">
            {SERVICES.map((s, i) => (
              <div key={s.n}>
                <div className={RULE} />
                {/* Copy goes on the leaf text nodes, never on this grid row:
                    SplitText rebuilds a container's contents into line divs,
                    which would collapse the columns. */}
                <div className="grid grid-cols-1 items-baseline gap-x-8 gap-y-3 py-6 md:grid-cols-[3.5rem_1fr_minmax(0,36%)] md:py-8">
                  <span
                    style={SCRIPT}
                    className="text-[clamp(1rem,1.5vw,1.9rem)] leading-none italic opacity-45"
                  >
                    {s.n}
                  </span>
                  <Copy delay={0.04 * i}>
                    <h2 className="text-[clamp(1.6rem,3.2vw,3.6rem)] leading-[1.02] font-black tracking-[-0.04em] uppercase">
                      {s.name}
                    </h2>
                  </Copy>
                  <Copy delay={0.04 * i + 0.06}>
                    <p
                      style={SERIF}
                      className="text-[clamp(1rem,1.2vw,1.45rem)] leading-[1.45] font-normal opacity-80"
                    >
                      {s.text}
                    </p>
                  </Copy>
                </div>
              </div>
            ))}
            <div className={RULE} />
          </div>
        </div>
      </section>

      {/* ── 4. Pull quote, filling the page. ─────────────────────────────── */}
      <section className="w-full px-4 py-24 md:px-6 md:py-36">
        <div className={SHELL}>
          <Copy>
            <blockquote
              style={DISPLAY}
              className="w-full text-[clamp(2.2rem,6.4vw,9rem)] leading-[1.02] font-black tracking-[-0.02em] italic"
            >
              &ldquo;{QUOTE}&rdquo;
            </blockquote>
          </Copy>
          <Copy delay={0.15}>
            <p
              style={SCRIPT}
              className="mt-6 text-right text-[clamp(0.95rem,1.2vw,1.5rem)] leading-[1.5] font-normal italic opacity-65 md:mt-8"
            >
              {ATTRIBUTION}
            </p>
          </Copy>
        </div>
      </section>

      {/* ── 5. Closing. Two different measures, opposite edges. ───────────── */}
      <section className="flex min-h-[70vh] w-full flex-col justify-end px-4 pt-24 pb-20 md:px-6 md:pb-28">
        <div className={SHELL}>
          <div className={RULE} />
          <div className="mt-8 flex flex-col gap-10 md:mt-10 md:flex-row md:items-start md:justify-between md:gap-20">
            <Copy>
              <p
                style={SERIF}
                className="w-full text-[clamp(1.15rem,1.9vw,2.4rem)] leading-[1.4] font-normal md:w-[52%]"
              >
                {CLOSING_SERIF}
              </p>
            </Copy>
            <Copy delay={0.12}>
              <p className="w-full text-[clamp(0.85rem,1vw,1.2rem)] leading-[1.6] font-light opacity-70 md:w-[26%] md:text-right">
                {CLOSING_SANS}
              </p>
            </Copy>
          </div>
        </div>
      </section>
    </div>
  );
}
