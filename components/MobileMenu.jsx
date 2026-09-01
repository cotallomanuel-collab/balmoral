"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TransitionLink from "./transitions/TransitionLink";
import { navLinks as LINKS } from "@/lib/navLinks";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const footerRef = useRef([]);
  const tlRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.inOut" } });

    tl.to(panelRef.current, {
      width: "min(88vw, 360px)",
      height: 420,
      top: -6,
      right: -6,
      borderRadius: 24,
      duration: 0.6,
    });

    tl.add(() => navRef.current?.classList.add("mobile-nav--visible"), 0.15);

    tl.set(
      linksRef.current,
      {
        opacity: 0,
        rotateX: 90,
        y: 40,
        x: -12,
        transformPerspective: 300,
        transformOrigin: "bottom",
      },
      0
    );

    tl.to(
      linksRef.current,
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
        x: 0,
        duration: 0.55,
        ease: "back.out(1.4)",
        stagger: 0.08,
      },
      0.35
    );

    tl.set(footerRef.current, { opacity: 0, y: 16 }, 0);
    tl.to(
      footerRef.current,
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.06 },
      0.55
    );

    tl.eventCallback("onReverseComplete", () => {
      navRef.current?.classList.remove("mobile-nav--visible");
    });

    tlRef.current = tl;
  }, []);

  const toggle = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      tlRef.current?.timeScale(1).play();
    } else {
      tlRef.current?.timeScale(1.6).reverse();
    }
  };

  const closeMenu = () => {
    if (!isOpen) return;
    setIsOpen(false);
    tlRef.current?.timeScale(1.6).reverse();
  };

  return (
    <div className="relative md:hidden">
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="relative z-20 flex h-11 w-11 items-center justify-center rounded-full border border-black bg-white text-[11px] font-bold uppercase"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <div
        ref={panelRef}
        className={`absolute top-0 right-0 z-10 h-11 w-11 overflow-hidden bg-[var(--pink)] ${
          isOpen ? "" : "pointer-events-none"
        }`}
        style={{ borderRadius: 22 }}
      >
        <nav
          ref={navRef}
          className="mobile-nav flex h-full w-full flex-col justify-between px-8 pt-20 pb-10 opacity-0"
        >
          <div className="flex flex-col gap-2">
            {LINKS.map((link, i) => (
              <div key={link.href} className="overflow-hidden">
                <TransitionLink
                  href={link.href}
                  onClick={closeMenu}
                  ref={(el) => {
                    linksRef.current[i] = el;
                  }}
                  className="block text-3xl leading-tight font-black text-black"
                >
                  {link.label}
                </TransitionLink>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {["Facebook", "Instagram"].map((label, i) => (
              <a
                key={label}
                href="#"
                ref={(el) => {
                  footerRef.current[i] = el;
                }}
                className="text-sm font-semibold text-black/70"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
