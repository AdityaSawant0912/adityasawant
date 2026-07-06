"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "about" },
  { id: "work", label: "work" },
  { id: "projects", label: "projects" },
  { id: "education", label: "edu" },
  { id: "talks", label: "talks" },
  { id: "contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav" aria-label="Section navigation">
      {LINKS.map((l) => (
        <a
          key={l.id}
          href={`#${l.id}`}
          className={active === l.id ? "active" : ""}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
