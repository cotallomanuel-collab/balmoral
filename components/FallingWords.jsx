"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const WORDS = [
  "PR and Marketing",
  "Digital Strategy",
  "Project Funding",
  "Physical Distribution",
  "Global Strategy",
  "Personalized Label Management",
  "Channel Management",
  "Online Marketing",
];

export default function FallingWords({ triggerRef }) {
  const stageRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = triggerRef?.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerRef]);

  useEffect(() => {
    if (!started) return;
    const stage = stageRef.current;
    if (!stage) return;

    const {
      Engine,
      Runner,
      World,
      Bodies,
      Common,
      Mouse,
      MouseConstraint,
      Events,
    } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 1.1;

    const runner = Runner.create();
    Runner.run(runner, engine);

    let walls = [];
    const buildWalls = () => {
      walls.forEach((w) => World.remove(world, w));
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      const t = 200;
      walls = [
        Bodies.rectangle(w / 2, h + t / 2, w * 2, t, { isStatic: true }),
        Bodies.rectangle(-t / 2, h / 2, t, h * 2, { isStatic: true }),
        Bodies.rectangle(w + t / 2, h / 2, t, h * 2, { isStatic: true }),
      ];
      World.add(world, walls);
    };
    buildWalls();

    const items = [];

    WORDS.forEach((text, i) => {
      const el = document.createElement("span");
      el.className = "falling-word";
      el.textContent = text;
      stage.appendChild(el);

      const r = el.getBoundingClientRect();
      const startX = Common.random(
        r.width / 2 + 10,
        Math.max(stage.clientWidth - r.width / 2 - 10, r.width / 2 + 20)
      );
      const startY = -150 - i * 110;

      const body = Bodies.rectangle(startX, startY, r.width, r.height, {
        restitution: 0.35,
        friction: 0.5,
        frictionAir: 0.008,
        density: 0.0016,
        angle: Common.random(-0.15, 0.15),
      });
      World.add(world, body);
      items.push({ el, body, w: r.width, h: r.height });
    });

    const mouse = Mouse.create(stage);
    mouse.element.removeEventListener("wheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.18,
        damping: 0.1,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    Events.on(mouseConstraint, "startdrag", (e) => {
      const it = items.find((i) => i.body === e.body);
      if (it) it.el.classList.add("is-grabbing");
    });
    Events.on(mouseConstraint, "enddrag", (e) => {
      const it = items.find((i) => i.body === e.body);
      if (it) it.el.classList.remove("is-grabbing");
    });

    let frame;
    const sync = () => {
      for (const it of items) {
        const { x, y } = it.body.position;
        const a = it.body.angle;
        it.el.style.transform = `translate(${x - it.w / 2}px, ${
          y - it.h / 2
        }px) rotate(${a}rad)`;
      }
      frame = requestAnimationFrame(sync);
    };
    sync();

    const onResize = () => buildWalls();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      items.forEach((it) => it.el.remove());
    };
  }, [started]);

  return (
    <div
      ref={stageRef}
      className="falling-words-stage relative h-full w-full overflow-hidden"
    />
  );
}
