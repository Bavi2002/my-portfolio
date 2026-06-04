"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Work",       href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Desktop — floating pill */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-sans text-2xl font-extrabold text-ink tracking-tight" style={{letterSpacing:"-0.04em"}}>
            B<span className="text-lime">.</span>
          </a>

          {/* Center links pill */}
          <nav
            className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
              scrolled ? "nav-glass shadow-lg" : "bg-transparent"
            }`}
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 rounded-full font-body text-sm text-muted hover:text-ink hover:bg-warm transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <a
            href="mailto:sivanesanbavithran16@gmail.com"
            className="hidden md:flex mag-btn text-sm"
            style={{padding:"10px 22px"}}
          >
            Let&apos;s Talk
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 origin-center ${open?"rotate-45 translate-y-[7px]":""}`}/>
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${open?"opacity-0 scale-x-0":""}`}/>
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 origin-center ${open?"-rotate-45 -translate-y-[7px]":""}`}/>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-paper flex flex-col justify-center px-8 transition-all duration-500 ${open?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col gap-6">
          {links.map((l,i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-5xl font-bold text-ink hover:text-muted transition-colors"
              style={{letterSpacing:"-0.04em", animationDelay:`${i*0.06}s`}}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:sivanesanbavithran16@gmail.com"
          className="mag-btn mt-12 self-start"
          onClick={() => setOpen(false)}
        >
          Let&apos;s Talk
        </a>
      </div>
    </>
  );
}
