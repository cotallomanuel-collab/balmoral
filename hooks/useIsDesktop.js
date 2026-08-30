"use client";

import { useEffect, useState } from "react";

export default function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpoint]);

  return isDesktop;
}
