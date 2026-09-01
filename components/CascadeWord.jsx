"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function CascadeWord({
  children,
  delay = 0,
  stagger = 0.02,
  duration = 0.6,
  className = "",
  onReady,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const split = SplitText.create(ref.current, {
        type: "chars",
        mask: "chars",
      });

      gsap.set(split.chars, { yPercent: 110 });

      const tween = gsap.to(split.chars, {
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

      onReady?.(split.chars);

      return () => split.revert();
    },
    { scope: ref, dependencies: [delay, stagger, duration] }
  );

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
