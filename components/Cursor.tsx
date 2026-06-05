"use client";

import { useEffect, useRef } from "react";

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export default function Cursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const canvas = canvasRef.current;

    if (!dot || !ring || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas sizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Ring position (lagging)
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Hover effect
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hover]")
      ) {
        ring.classList.remove("w-9", "h-9");
        ring.classList.add("w-14", "h-14");
      } else {
        ring.classList.remove("w-14", "h-14");
        ring.classList.add("w-9", "h-9");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    // Spark settings
    const sparks: Spark[] = [];

    const SPARK_COUNT = 8;
    const SPARK_SIZE = 12;
    const SPARK_RADIUS = 30;
    const SPARK_DURATION = 500;

    const easeOut = (t: number) => t * (2 - t);

    const handleClick = (e: MouseEvent) => {
      const now = performance.now();

      for (let i = 0; i < SPARK_COUNT; i++) {
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          angle: (Math.PI * 2 * i) / SPARK_COUNT,
          startTime: now,
        });
      }
    };

    document.addEventListener("click", handleClick);

    // Animation loop
    let animationFrame: number;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = performance.now();

      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];

        const elapsed = now - spark.startTime;

        if (elapsed > SPARK_DURATION) {
          sparks.splice(i, 1);
          continue;
        }

        const progress = elapsed / SPARK_DURATION;
        const eased = easeOut(progress);

        const distance = eased * SPARK_RADIUS;
        const lineLength = SPARK_SIZE * (1 - eased);

        const x1 =
          spark.x + distance * Math.cos(spark.angle);

        const y1 =
          spark.y + distance * Math.sin(spark.angle);

        const x2 =
          spark.x +
          (distance + lineLength) *
            Math.cos(spark.angle);

        const y2 =
          spark.y +
          (distance + lineLength) *
            Math.sin(spark.angle);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );
      document.removeEventListener(
        "mouseover",
        handleMouseOver
      );
      document.removeEventListener(
        "click",
        handleClick
      );
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998]"
      />

      <div
        id="cursor-dot"
        className="
          pointer-events-none
          fixed
          z-[9999]
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          mix-blend-difference
        "
      />

      <div
        id="cursor-ring"
        className="
          pointer-events-none
          fixed
          z-[9999]
          h-9
          w-9
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-white
          mix-blend-difference
          transition-all
          duration-200
        "
      />
    </>
  );
}