"use client";

import Image from "next/image";
import { useState } from "react";
import Copy from "./Copy";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="artists"
      className="flex min-h-screen w-full items-center bg-white py-24 text-black"
    >
      <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <div className="relative mx-auto aspect-square w-full max-w-[460px]">
          <Image
            src="/images/RECURSOS_BALMORAL_022.png"
            alt="Balmoral mascot"
            fill
            className="object-contain"
          />
        </div>

        <div className="max-w-lg">
          <Copy>
            <h2 className="text-4xl leading-[1.1] font-black tracking-tight md:text-5xl">
              Join the flock
            </h2>
          </Copy>
          <Copy delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 md:text-lg">
              Subscribe to the Balmoral newsletter for label news, artist
              releases and behind-the-scenes stories, straight to your inbox.
            </p>
          </Copy>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-full border border-black px-5 py-3 text-sm outline-none placeholder:text-neutral-400"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="mt-3 text-sm font-semibold text-[var(--purple)]">
              Thanks — you&apos;re on the list.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
