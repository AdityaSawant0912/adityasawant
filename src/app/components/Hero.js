"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { profile } from "../data";

export default function Hero() {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.15 },
    },
  };
  const item = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      };
  const nameItem = reduced
    ? item
    : {
        hidden: { opacity: 0, y: 30, filter: "blur(14px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <motion.header
      className="hero"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="hero-top" variants={item}>
        <div className="avatar">
          <Image
            src={profile.headshot}
            alt="Aditya Sawant"
            width={280}
            height={280}
            quality={90}
            priority
          />
          <span className="avatar-ring" aria-hidden="true" />
        </div>
        <div className="status">
          <span className="dot" aria-hidden="true" />
          <span className="mono">Open to full-time SDE roles · {profile.location}</span>
        </div>
      </motion.div>

      <motion.h1 className="display hero-name" variants={nameItem}>
        {profile.name}
      </motion.h1>

      <motion.p className="hero-tagline" variants={item}>
        {profile.tagline}
      </motion.p>

      <motion.ul className="hero-roles" variants={item}>
        {profile.roles.map((r) => (
          <li key={r.org}>
            <span className="mono role-label">{r.label}</span>
            <span className="role-at">@</span>
            <a href={r.href} target="_blank" rel="noreferrer">
              {r.org}
            </a>
          </li>
        ))}
      </motion.ul>

      <motion.div className="hero-cta" variants={item}>
        <MagneticButton href={profile.resume} variant="solid">
          Résumé ↗
        </MagneticButton>
        <MagneticButton href={`mailto:${profile.email}`} variant="ghost">
          Get in touch
        </MagneticButton>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-cue mono"
        variants={item}
        aria-label="Scroll to content"
      >
        <span>scroll</span>
        <span className="scroll-line" aria-hidden="true" />
      </motion.a>
    </motion.header>
  );
}
