"use client";

import { useEffect, useRef } from "react";

export default function FluidCursor({ areaRef }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const area = areaRef?.current;
    const host = hostRef.current;
    if (!area || !host) return;

    let sim;
    let cancelled = false;

    (async () => {
      try {
        const [{ FluidSimulation }, THREE] = await Promise.all([
          import("./FluidSimulation.js"),
          import("three"),
        ]);
        if (cancelled) return;

        // Toned down, low curl for a rounder blob — hard edge kept so the
        // diff-blend reveal (letters turning white) stays fully opaque.
        sim = new FluidSimulation(
          host,
          {
            simResolution: 256,
            dyeResolution: 1024,
            curl: 20,
            pressureIterations: 40,
            velocityDissipation: 0.96,
            dyeDissipation: 0.96,
            splatRadius: 0.4,
            forceStrength: 9,
            pressureDecay: 0.8,
            threshold: 1.0,
            edgeSoftness: 0.0,
            inkColor: new THREE.Color(1, 1, 1),
          },
          area
        );
      } catch (err) {
        console.error("[FluidCursor] failed to start fluid simulation:", err);
      }
    })();

    return () => {
      cancelled = true;
      sim?.dispose();
    };
  }, [areaRef]);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-40 overflow-hidden mix-blend-difference"
    />
  );
}
