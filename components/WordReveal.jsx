"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function WordReveal({
  children,
  delay = 0,
  stagger = 0.03,
  duration = 0.7,
  className = "",
  innerRef,
  style,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const split = SplitText.create(ref.current, {
        type: "words",
        mask: "words",
      });

      gsap.set(split.words, { yPercent: 110 });

      const tween = gsap.to(split.words, {
        yPercent: 0,
        duration,
        stagger,
        ease: "power3.out",
        delay,
        paused: true,
      });

      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 90%",
        once: true,
        onEnter: () => tween.play(),
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [delay, stagger, duration] }
  );

  return (
    <span
      ref={(el) => {
        ref.current = el;
        if (typeof innerRef === "function") innerRef(el);
      }}
      className={className}
      style={style}
    >
      {children}
    </span>
  );
}
