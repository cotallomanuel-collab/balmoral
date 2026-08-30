"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TransitionContext = createContext(null);

export function useTransitionNavigate() {
  return useContext(TransitionContext);
}

export default function TransitionProvider({ children }) {
  const contentRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const isAnimating = useRef(false);

  const navigate = (href) => {
    if (!href || href === pathname || isAnimating.current) return;
    isAnimating.current = true;
    gsap.to(contentRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.45,
      ease: "power3.in",
      onComplete: () => {
        router.push(href);
      },
    });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    // New page content has just mounted — rise it into place.
    gsap.fromTo(
      contentRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => {
          isAnimating.current = false;
        },
      }
    );
  }, [pathname]);

  return (
    <TransitionContext.Provider value={navigate}>
      <Header />
      <main ref={contentRef}>{children}</main>
      <Footer />
    </TransitionContext.Provider>
  );
}
