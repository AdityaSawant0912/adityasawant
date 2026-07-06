"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal that enhances an already-present element.
 * Under reduced motion it renders plainly (no hidden state), so content is
 * never gated behind a transition that might not fire.
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 18,
  className,
  ...rest
}) {
  const reduced = useReducedMotion();
  const M = motion[as] || motion.div;

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </M>
  );
}
