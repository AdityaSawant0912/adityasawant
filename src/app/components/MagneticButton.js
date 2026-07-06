"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Link that leans toward the cursor within its bounds, then springs back.
 * Renders a plain anchor under reduced motion.
 */
export default function MagneticButton({
  children,
  href,
  variant = "solid",
  className = "",
  ...rest
}) {
  const reduced = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15 });
  const sy = useSpring(y, { stiffness: 220, damping: 15 });

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const relX = e.clientX - (r.left + r.width / 2);
    const relY = e.clientY - (r.top + r.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.85rem 1.5rem",
    borderRadius: "99px",
    fontFamily: "var(--font-mono), monospace",
    fontSize: "0.82rem",
    letterSpacing: "0.02em",
    whiteSpace: "nowrap",
    cursor: "pointer",
    willChange: "transform",
  };
  const solid = {
    background: "var(--ink)",
    color: "oklch(0.15 0.02 265)",
    fontWeight: 600,
  };
  const ghost = {
    background: "oklch(1 0 0 / 0.03)",
    color: "var(--ink)",
    border: "1px solid var(--line-strong)",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ ...base, ...(variant === "solid" ? solid : ghost), x: sx, y: sy }}
      whileHover={reduced ? undefined : { scale: 1.04 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
