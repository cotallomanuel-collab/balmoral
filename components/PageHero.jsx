"use client";

import Copy from "./Copy";

export default function PageHero({
  eyebrow,
  title,
  paragraphs = [],
  bg = "#ffffff",
  color = "#000000",
}) {
  return (
    <section
      className="flex min-h-screen w-full flex-col justify-center px-4 pt-32 pb-24 md:px-6"
      style={{ backgroundColor: bg, color }}
    >
      <div className="mx-auto w-full max-w-[1900px]">
        {eyebrow && (
          <Copy>
            <p className="text-sm font-bold tracking-[0.3em] uppercase opacity-70">
              {eyebrow}
            </p>
          </Copy>
        )}

        <Copy delay={0.1}>
          <h1 className="mt-4 text-6xl leading-[1.02] font-black tracking-tight uppercase md:text-8xl">
            {title}
          </h1>
        </Copy>

        <div className="mt-10 flex max-w-3xl flex-col gap-6 text-lg leading-relaxed md:text-xl">
          {paragraphs.map((p, i) => (
            <Copy key={i} delay={0.15 + i * 0.05}>
              <p className="opacity-90">{p}</p>
            </Copy>
          ))}
        </div>
      </div>
    </section>
  );
}
