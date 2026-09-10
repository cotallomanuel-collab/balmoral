"use client";

import { ReactLenis } from "lenis/react";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function SmoothScroll({ children }) {
  const isDesktop = useIsDesktop();

  // Lenis's virtual scroll only reliably tracks page height on desktop —
  // on mobile it can get stuck if content height changes after init
  // (images/fonts loading below the fold), so touch devices just use
  // native scroll, which is already smooth there anyway.
  //
  // Tried switching this to always mounting <ReactLenis> and toggling it
  // with lenis.stop()/start() instead, to avoid the one-time remount this
  // conditional causes when isDesktop resolves from null on mount. Verified
  // that's unsafe: Lenis's stop() calls event.preventDefault() on wheel/
  // touch input and returns (see onVirtualScroll in lenis's source) — it
  // doesn't hand scrolling back to the browser, it blocks it. That would
  // have reintroduced the "can't scroll on mobile" bug. Reverted.
  if (!isDesktop) {
    return children;
  }

  return <ReactLenis root>{children}</ReactLenis>;
}
