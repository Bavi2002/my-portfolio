"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".sr, .sr-left, .skill-bar-fill").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
