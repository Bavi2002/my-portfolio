"use client";
import { useEffect, useRef, useState } from "react";

const codeLines = [
  { indent: 0, parts: [{ cls: "kw", t: "const" }, { cls: "", t: " engineer = {" }] },

  { indent: 1, parts: [{ cls: "str", t: "  name" }, { cls: "", t: ': ' }, { cls: "str", t: '"Bavithran Sivanesan",' }] },

  { indent: 1, parts: [{ cls: "str", t: "  role" }, { cls: "", t: ': ' }, { cls: "str", t: '"Software Engineer · From Idea to Code",' }] },

  { indent: 1, parts: [{ cls: "str", t: "  mindset" }, { cls: "", t: ': ' }, { cls: "str", t: '"Think. Build. Debug. Ship.",' }] },

  { indent: 1, parts: [{ cls: "fn", t: "  available" }, { cls: "", t: ": " }, { cls: "kw", t: "true" }] },

  { indent: 0, parts: [{ cls: "", t: "};" }] },
];

export default function Hero() {
  const headRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const words = headRef.current?.querySelectorAll(".word");
    words?.forEach((w, i) => {
      (w as HTMLElement).style.animationDelay = `${0.1 + i * 0.12}s`;
    });

    let i = 0;
    const iv = setInterval(() => {
      i++;
      setVisibleLines(i);
      if (i >= codeLines.length) clearInterval(iv);
    }, 280);

    return () => clearInterval(iv);
  }, []);

  return (
    <section className="relative flex flex-col justify-end pb-16 px-6 pt-32 overflow-hidden">

      {/* glow */}
      <div
        className="glow w-[700px] h-[700px] top-[-200px] right-[-200px] opacity-20"
        style={{
          background: "radial-gradient(circle, #C8F135 0%, transparent 70%)",
        }}
      />
      <div
        className="glow w-[400px] h-[400px] bottom-0 left-[-100px] opacity-10"
        style={{
          background: "radial-gradient(circle, #C8F135 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full">

        {/* status */}
        <div className="anim-fadeIn mb-8 flex items-center gap-3">
          <span className="flex items-center gap-1.5 chip chip-lime">
            <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
            Available for hire
          </span>
          <span className="section-label">
            Software Engineer · Full-Stack Development · Sri Lanka 🇱🇰
          </span>
        </div>

        {/* headline */}
        <div
          ref={headRef}
          className="mb-10 overflow-hidden break-words"
          aria-label="Bavithran Sivanesan"
        >
          {[
            { text: "I Build", italic: false },
            { text: "what", italic: false },
            { text: "others", italic: false },
            { text: "IMAGINE...", italic: true },
          ].map((w, i) => (
            <span
              key={i}
              className={`word inline-block anim-fadeUp mr-3 md:mr-6 font-sans font-extrabold text-ink ${
                w.italic ? "italic" : ""
              }`}
              style={{
                fontSize: "clamp(2.8rem,10vw,9rem)", // FIXED FOR MOBILE
                letterSpacing: "-0.045em",
                lineHeight: "0.95",
                wordBreak: "break-word",
                overflowWrap: "break-word",
                maxWidth: "100%",
              }}
            >
              {w.text}
            </span>
          ))}
        </div>

        {/* bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

          {/* left */}
          <div className="anim-fadeUp">
            <p className="font-body text-xl text-muted leading-relaxed mb-8 max-w-lg">
              Building web apps and AI-powered tools that turn ideas into reality.
              Using <strong className="text-ink font-semibold">React.js</strong>,
              <strong className="text-ink font-semibold">Next.js</strong> and
              <strong className="text-ink font-semibold">Python</strong>.
              <br />
              Focused on clean, fast and reliable builds.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="mag-btn">
                See my work
                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>

              <a
                href="mailto:sivanesanbavithran16@gmail.com"
                className="mag-btn-outline"
              >
                Get in touch
              </a>
            </div>

            {/* social */}
            <div className="flex gap-6 mt-8">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/bavithran-sivanesan16" },
                { label: "GitHub", href: "https://github.com/Bavi2002" },
                { label: "bavithran.dev", href: "https://bavithran.dev" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hl font-body text-sm text-muted hover:text-ink transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* right code */}
          <div className="anim-scaleIn">
            <div className="code-block">

              {/* header */}
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-60" />
                <span className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
                <span className="ml-3 font-mono text-xs text-white/20">
                  engineer.ts
                </span>
              </div>

              {/* code */}
              {codeLines.map((line, li) => (
                <div
                  key={li}
                  className="transition-all duration-300"
                  style={{
                    opacity: li < visibleLines ? 1 : 0,
                    transform:
                      li < visibleLines ? "translateY(0)" : "translateY(6px)",
                  }}
                >
                  <span className="ln">{li + 1}</span>
                  {line.parts.map((p, pi) => (
                    <span key={pi} className={p.cls}>
                      {p.t}
                    </span>
                  ))}
                  {li === visibleLines - 1 &&
                    li < codeLines.length - 1 && <span className="cursor" />}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}