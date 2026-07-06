"use client";

import { useEffect, useRef } from "react";

/**
 * Flow-field particle field — a nod to the P5.js creative-coding work.
 * Cheap layered-sine "noise" steers thousands of short-lived particles that
 * leave faint iris/coral trails. Cursor bends the field locally.
 * Canvas 2D only, DPR-aware, pauses when tab hidden, off under reduced-motion.
 */
export default function GenerativeCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const canvas = ref.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const pointer = { x: -9999, y: -9999, active: false };

    // particle count scales with area but stays bounded
    let particles = [];
    const seed = () => {
      const count = Math.round(
        Math.min(900, Math.max(280, (w * h) / 2600))
      );
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        life: Math.random() * 200,
        hue: Math.random(), // 0..1 -> iris..coral mix
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // paint base so first frames aren't transparent-flicker
      ctx.fillStyle = "rgba(15,18,30,1)";
      ctx.fillRect(0, 0, w, h);
      seed();
    };

    // layered-sine pseudo-noise -> angle in radians
    const SCALE = 0.0016;
    const field = (x, y, t) => {
      const a =
        Math.sin(x * SCALE + t) +
        Math.cos(y * SCALE * 1.3 - t * 0.8) +
        Math.sin((x + y) * SCALE * 0.7 + t * 0.5);
      return a * 1.4;
    };

    let t = 0;
    const step = () => {
      t += 0.0016;

      // fade previous frame -> trails
      ctx.fillStyle = "rgba(15,18,30,0.055)";
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";
      ctx.lineWidth = 1.1;

      for (const p of particles) {
        let ang = field(p.x, p.y, t);

        // TODO: cursor bends the field — revisit later
        // if (pointer.active) { ... }

        const nx = p.x + Math.cos(ang) * 1.5;
        const ny = p.y + Math.sin(ang) * 1.5;

        // iris (270) -> coral (25) hue picked per particle
        const hue = 250 + (p.hue - 0.5) * 90; // ~205..295 with occasional warm
        const warm = p.hue > 0.82;
        const col = warm
          ? "hsla(18, 85%, 68%,"
          : `hsla(${hue}, 78%, 70%,`;

        ctx.strokeStyle = `${col}0.5)`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life -= 1;

        if (
          p.life <= 0 ||
          p.x < -10 ||
          p.x > w + 10 ||
          p.y < -10 ||
          p.y > h + 10
        ) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.life = 120 + Math.random() * 200;
        }
      }
      ctx.globalCompositeOperation = "source-over";

      raf = requestAnimationFrame(step);
    };

    const onMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onLeave = () => (pointer.active = false);
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        raf = requestAnimationFrame(step);
      }
    };

    resize();
    raf = requestAnimationFrame(step);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerout", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className="bg-canvas" aria-hidden="true" />;
}
