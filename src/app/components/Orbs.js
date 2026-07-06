"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import { useEffect } from "react";

const ORBS = [
  { size: 520, x: "8%", y: "6%", color: "oklch(0.62 0.19 275)", depth: 0.05, dur: 22 },
  { size: 620, x: "72%", y: "18%", color: "oklch(0.7 0.16 300)", depth: -0.07, dur: 28 },
  { size: 440, x: "58%", y: "64%", color: "oklch(0.74 0.16 30)", depth: 0.09, dur: 25 },
  { size: 380, x: "12%", y: "72%", color: "oklch(0.66 0.17 250)", depth: -0.05, dur: 30 },
];

export default function Orbs() {
  const reduced = useReducedMotion();

  // pointer -> springy motion values, shared across orbs
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 40, damping: 20, mass: 1.2 });
  const sy = useSpring(py, { stiffness: 40, damping: 20, mass: 1.2 });

  // scroll-driven hue rotation on the whole field
  const { scrollYProgress } = useScroll();
  const hue = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const filter = useTransform(hue, (h) => `hue-rotate(${h}deg)`);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e) => {
      px.set(e.clientX - window.innerWidth / 2);
      py.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [px, py, reduced]);

  return (
    <motion.div className="orbs" aria-hidden="true" style={{ filter: reduced ? "none" : filter }}>
      {ORBS.map((o, i) => (
        <Orb key={i} orb={o} sx={sx} sy={sy} reduced={reduced} />
      ))}
    </motion.div>
  );
}

function Orb({ orb, sx, sy, reduced }) {
  // pointer parallax: each orb shifts by depth * pointer offset
  const tx = useTransform(sx, (v) => v * orb.depth);
  const ty = useTransform(sy, (v) => v * orb.depth);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: orb.x,
        top: orb.y,
        x: reduced ? 0 : tx,
        y: reduced ? 0 : ty,
      }}
    >
      <motion.div
        className="orb"
        style={{
          width: orb.size,
          height: orb.size,
          background: `radial-gradient(circle at 50% 50%, ${orb.color} 0%, transparent 68%)`,
          opacity: 0.55,
        }}
        animate={
          reduced
            ? undefined
            : {
                x: [0, 40, -30, 0],
                y: [0, -35, 25, 0],
                scale: [1, 1.12, 0.95, 1],
              }
        }
        transition={{
          duration: orb.dur,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
