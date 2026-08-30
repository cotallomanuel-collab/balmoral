"use client";

import Copy from "./Copy";
import TransitionLink from "./transitions/TransitionLink";

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
    text: "Learn about our ongoing work in the world of music innovation, from our startup incubator to our extensive range of audio products. Discover how we're blending the best of the past with the latest advancements in music technology.",
  },
  {
    title: "Events",
    href: "/events",
    color: "var(--olive)",
    text: "From album launches to artist showcases, discover the events, sessions and experiences we host for our roster and partners. Join us for listening parties, workshops and the moments that bring our community together.",
  },
];

export default function StudiosSection() {
  return (
    <section
      id="studios"
      className="w-full bg-white px-4 py-24 text-black md:px-6"
    >
      <div className="mx-auto w-full max-w-[1900px]">
        <Copy>
          <h2 className="text-center text-5xl leading-[1.02] font-black tracking-tight uppercase select-none md:text-6xl lg:text-7xl">
            Allow us to re-introduce ourselves&hellip;
          </h2>
        </Copy>

        <Copy delay={0.1}>
          <div className="mx-auto mt-10 flex w-full flex-col gap-2 text-center text-xl leading-snug font-bold text-neutral-700 md:gap-6 md:text-2xl">
            <p>
              Balmoral is home to music making. We&apos;re an independent
              label services company built on trust, and a partner in sonic
              innovation, with the experience and craft to bring out the best
              music in any vision or idea.
            </p>
            <p>
              Once a small handful of people believing independent artists
              deserved the same tools as the majors, we&apos;re now a global
              community of artists, experts, inventors and engineers, whose
              technology and expertise can be accessed from anywhere in the
              world.
            </p>
            <p>
              Alongside our studios and writing spaces, we work to develop
              ground-breaking technology that continues to change the future
              of music making. And through our events, we&apos;re creating
              one-off experiences and empowering a new generation of talent.
            </p>
            <p>
              This home has helped soundtrack first releases, sold-out tours,
              heartbreaks and comebacks. Across genres, generations and
              continents, Balmoral helps music makers move the world.
            </p>
            <p className="font-semibold text-black">Come on in.</p>
          </div>
        </Copy>

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
