"use client";

import { ReactLenis } from "lenis/react";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function SmoothScroll({ children }) {
  const isDesktop = useIsDesktop();

  // Lenis's virtual scroll only reliably tracks page height on desktop —
  // on mobile it can get stuck if content height changes after init
  // (images/fonts loading below the fold), so touch devices just use
  // native scroll, which is already smooth there anyway.
  if (!isDesktop) {
    return children;
  }

  return <ReactLenis root>{children}</ReactLenis>;
}
