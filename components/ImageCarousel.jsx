"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const DEFAULT_IMAGES = [
  "/images/RECURSOS_BALMORAL_013.png",
  "/images/RECURSOS_BALMORAL_019.png",
  "/images/RECURSOS_BALMORAL_015.png",
  "/images/RECURSOS_BALMORAL_014.png",
  "/images/RECURSOS_BALMORAL_024.png",
  "/images/RECURSOS_BALMORAL_022.png",
];

const AUTOPLAY_INTERVAL = 3200;

export default function ImageCarousel({
  images = DEFAULT_IMAGES,
  bg = "#CDCDCD",
  grayscale = false,
  imageClassName = "object-contain p-10",
}) {
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const autoplayRef = useRef(null);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const item = el.firstElementChild;
      if (!item) return;
      const step = item.getBoundingClientRect().width;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + step;
      el.scrollTo({
        left: next >= maxScroll - 1 ? 0 : next,
        behavior: "smooth",
      });
    }, AUTOPLAY_INTERVAL);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    stopAutoplay();
    drag.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
    el.classList.add("cursor-grabbing");
  };

  const onPointerMove = (e) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    el.scrollLeft = drag.current.scrollLeft - delta;
  };

  const endDrag = () => {
    const el = trackRef.current;
    drag.current.active = false;
    el?.classList.remove("cursor-grabbing");
    startAutoplay();
  };

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      className="carousel-scroll flex w-full cursor-grab touch-pan-x overflow-x-auto select-none"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative h-[50vw] max-h-[520px] min-h-[240px] w-[85vw] shrink-0 overflow-hidden sm:w-[45vw] md:w-[32vw]"
          style={{ backgroundColor: bg }}
        >
          <Image
            src={src}
            alt=""
            fill
            draggable={false}
            className={`pointer-events-none ${imageClassName}`}
            style={grayscale ? { filter: "grayscale(1) contrast(1.05)" } : undefined}
            sizes="45vw"
          />
        </div>
      ))}
    </div>
  );
}
