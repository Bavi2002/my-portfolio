"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById("cursor-dot")!;
    const ring = document.getElementById("cursor-ring")!;
    if (!dot || !ring) return;

    let rx = 0, ry = 0;

    const move = (e: MouseEvent) => {
      dot.style.left  = e.clientX + "px";
      dot.style.top   = e.clientY + "px";
      rx += (e.clientX - rx) * 0.14;
      ry += (e.clientY - ry) * 0.14;
    };

    let raf: number;
    const loop = () => {
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      raf = requestAnimationFrame(loop);
    };

    let mx = 0, my = 0;
    const track = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const lerpLoop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      requestAnimationFrame(lerpLoop);
    };

    const enter = () => ring.classList.add("big");
    const leave = () => ring.classList.remove("big");

    document.addEventListener("mousemove", (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
      mx = e.clientX; my = e.clientY;
    });

    document.querySelectorAll("a,button,[data-hover]").forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    lerpLoop();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}
