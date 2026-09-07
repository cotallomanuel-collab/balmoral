"use client";

import Copy from "./Copy";
import TransitionLink from "./transitions/TransitionLink";

// The three cards anchor their content to the bottom and their titles have to
// line up, which only both hold if the paragraphs run to the same number of
// lines — so the copy is kept to a matching length.
// PLACEHOLDER: the closing sentence of Innovation and of Events was added to
// reach that length. Replace with real copy, but keep the lengths close.
const CARDS = [
  {
    title: "Studios",
    href: "/studios",
    color: "var(--purple)",
    text: "From 100 piece orchestras to solo artists and everything in between, we've got the spaces, team and technology to help release your creative vision and capture the best possible version of it. Record, mix and master at our house or remotely, from anywhere in the world.",
  },
  {
    title: "Innovation",
    href: "/innovation",
    color: "var(--pink)",
    text: "Learn about our ongoing work in the world of music innovation, from our startup incubator to our extensive range of audio products. Discover how we're blending the best of the past with the latest advancements in music technology, one release and one record at a time.",
  },
  {
    title: "Events",
    href: "/events",
    color: "var(--olive)",
    text: "From album launches to artist showcases, discover the events, sessions and experiences we host for our roster and partners. Join us for listening parties, workshops and the moments that bring our community together, wherever in the world you happen to be working.",
  },
];

export default function StudiosSection() {
  return (
    <section
      id="studios"
      className="w-full bg-white px-4 py-24 text-black md:px-6"
    >
      <div className="mx-auto w-full max-w-[1900px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start md:gap-16">
          <Copy>
            <h2 className="-mt-1 text-4xl leading-[1.1] font-black tracking-tight select-none sm:text-5xl md:-mt-3 md:text-7xl lg:-mt-5 lg:text-8xl">
              Allow us to re-introduce ourselves&hellip;
            </h2>
          </Copy>

          <div className="md:pt-2 lg:pt-3">
            <Copy delay={0.1}>
              <p className="text-base leading-snug font-normal text-neutral-700 md:text-2xl md:font-bold lg:text-3xl">
                Supporting artists and labels worldwide since 2006, Balmoral
                is a fully independent label services company. High
                standards, agility and freedom of choice shape our daily
                expression of independence and mark our strengths.
              </p>
            </Copy>
            <button className="mt-6 rounded-full border border-black px-6 py-3 text-sm font-semibold transition-colors hover:bg-black hover:text-white">
              Learn More
            </button>
          </div>
        </div>

        {/* Content is bottom-anchored, so the last line always sits p-6 from
            the card's edge. The titles then only line up if the three
            paragraphs run to the same number of lines, which is why the copy
            lengths are matched to within ~0.5% of rendered width. That is not
            a guarantee — line breaking depends on where individual words
            fall — so a title can still land a line off at odd widths. Subgrid
            would guarantee it, but it consumes the card's vertical padding and
            breaks the 3/4 ratio, which costs more than it buys. */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <Copy key={card.title} delay={0.1 * i}>
              <TransitionLink
                href={card.href}
                className="flex aspect-[3/4] flex-col justify-end rounded-2xl p-6 text-white transition-transform hover:scale-[0.98]"
                style={{ backgroundColor: card.color }}
              >
                <h3 className="text-2xl font-black tracking-tight uppercase md:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{card.text}</p>
              </TransitionLink>
            </Copy>
          ))}
        </div>
      </div>
    </section>
  );
}
