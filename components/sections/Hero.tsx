"use client";
import { useEffect, useRef, useState } from "react";

const codeLines = [
  { indent: 0, parts: [{ cls: "kw", t: "const" }, { cls: "", t: " engineer = {" }] },
  { indent: 1, parts: [{ cls: "str", t: "  name" }, { cls: "", t: ': ' }, { cls: "str", t: '"Bavithran Sivanesan",' }] },
  { indent: 1, parts: [{ cls: "str", t: "  role" }, { cls: "", t: ': ' }, { cls: "str", t: '"Frontend Engineer",' }] },
  { indent: 1, parts: [{ cls: "str", t: "  stack" }, { cls: "", t: ": [" }, { cls: "str", t: '"React"' }, { cls: "", t: ", " }, { cls: "str", t: '"Next.js"' }, { cls: "", t: ", " }, { cls: "str", t: '"TypeScript"' }, { cls: "", t: "]," }] },
  { indent: 1, parts: [{ cls: "str", t: "  passion" }, { cls: "", t: ': ' }, { cls: "str", t: '"Pixel-perfect UI",' }] },
  { indent: 1, parts: [{ cls: "fn",  t: "  available" }, { cls: "", t: ": " }, { cls: "kw", t: "true" }] },
  { indent: 0, parts: [{ cls: "", t: "};" }] },
];

export default function Hero() {
  const headRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    // Stagger heading words
    const words = headRef.current?.querySelectorAll(".word");
    words?.forEach((w, i) => {
      (w as HTMLElement).style.animationDelay = `${0.1 + i * 0.12}s`;
    });

    // Type the code lines one by one
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= codeLines.length) clearInterval(iv);
    }, 280);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 px-6 pt-32 overflow-hidden">

      {/* Big lime glow */}
      <div className="glow w-[700px] h-[700px] top-[-200px] right-[-200px] opacity-20"
        style={{background:"radial-gradient(circle, #C8F135 0%, transparent 70%)"}} />
      <div className="glow w-[400px] h-[400px] bottom-0 left-[-100px] opacity-10"
        style={{background:"radial-gradient(circle, #C8F135 0%, transparent 70%)"}} />

      <div className="max-w-7xl mx-auto w-full">

        {/* Status */}
        <div className="anim-fadeIn mb-8 flex items-center gap-3" style={{animationDelay:".1s"}}>
          <span className="flex items-center gap-1.5 chip chip-lime">
            <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
            Available for hire
          </span>
          <span className="section-label">Frontend Engineer · Jaffna, Sri Lanka 🇱🇰</span>
        </div>

        {/* Kinetic Headline */}
        <div ref={headRef} className="mb-10 overflow-hidden" aria-label="Bavithran Sivanesan">
          {[
            { text: "Building", italic: false },
            { text: "interfaces", italic: true },
            { text: "people", italic: false },
            { text: "love.", italic: false },
          ].map((w, i) => (
            <span
              key={i}
              className={`word inline-block anim-fadeUp mr-4 md:mr-6 font-sans font-extrabold text-ink ${
                w.italic ? "italic" : ""
              }`}
              style={{
                fontSize: "clamp(3.5rem,10vw,9rem)",
                letterSpacing: "-0.045em",
                lineHeight: "0.95",
              }}
            >
              {w.text === "love." ? (
                <>love<span className="text-lime">.</span></>
              ) : (
                w.text
              )}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          {/* Left: description + CTAs */}
          <div className="anim-fadeUp" style={{animationDelay:".55s"}}>
            <p className="font-body text-xl text-muted leading-relaxed mb-8 max-w-lg">
              Detail-obsessed Software Engineering undergrad with hands-on experience in
              <strong className="text-ink font-semibold"> React.js</strong> and
              <strong className="text-ink font-semibold"> Next.js</strong> — translating
              Figma into pixel-perfect, ship-ready web applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="mag-btn">
                See my work
                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </a>
              <a href="mailto:sivanesanbavithran16@gmail.com" className="mag-btn-outline">
                Get in touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-6 mt-8">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/bavithran-sivanesan16" },
                { label: "GitHub",   href: "https://github.com/Bavi2002" },
                { label: "bavithran.dev", href: "https://bavithran.dev" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="hl font-body text-sm text-muted hover:text-ink transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: live code block */}
          <div className="anim-scaleIn" style={{animationDelay:".7s"}}>
            <div className="code-block">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500 opacity-60"/>
                <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-60"/>
                <span className="w-3 h-3 rounded-full bg-green-500 opacity-60"/>
                <span className="ml-3 font-mono text-xs text-white/20">engineer.ts</span>
              </div>
              {codeLines.map((line, li) => (
                <div
                  key={li}
                  className="transition-all duration-300"
                  style={{
                    opacity: li < visibleLines ? 1 : 0,
                    transform: li < visibleLines ? "translateY(0)" : "translateY(6px)",
                  }}
                >
                  <span className="ln">{li + 1}</span>
                  {line.parts.map((p, pi) => (
                    <span key={pi} className={p.cls}>{p.t}</span>
                  ))}
                  {li === visibleLines - 1 && li < codeLines.length - 1 && (
                    <span className="cursor" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fadeIn" style={{animationDelay:"1.2s"}}>
        <span className="section-label">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ink/30 to-transparent" />
      </div>
    </section>
  );
}
