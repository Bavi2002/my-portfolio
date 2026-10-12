"use client";

import { useState } from "react";

export interface SaaSProduct {
  id: string;
  num: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  status: "Live" | "Building";
  statusBadge: string;
  simpleDescription: string;
  whatItDoes: string;
  whoItIsFor: string;
  keyBenefit: string;
  stack: string[];
  liveUrl: string | null;
  color: string;
  theme: "light" | "dark";
}

const saasProducts: SaaSProduct[] = [
  {
    id: "sivaraam-clinic",
    num: "01",
    name: "Sivaraam Clinic Cloud",
    shortName: "Sivaraam Clinic",
    tagline: "Online Clinic & Patient Management Platform",
    category: "Healthcare System",
    status: "Live",
    statusBadge: "Live in Production",
    simpleDescription:
      "A complete cloud system built for clinics and doctors to manage patient appointments, digital prescriptions, and medical records in one easy dashboard.",
    whatItDoes: "Handles online patient bookings and calendar schedules without double-booking.",
    whoItIsFor: "Doctors, clinics, and hospital administrators.",
    keyBenefit: "Eliminates paper records and saves hours of manual front-desk work.",
    stack: ["Next.js 14", "TypeScript", "MongoDB", "TailwindCSS", "Vercel"],
    liveUrl: "https://sivaraam-clinic.vercel.app",
    color: "#C8F135", // 01: Signature Electric Lime
    theme: "light",
  },
  {
    id: "omniflow-ai",
    num: "02",
    name: "OmniFlow AI",
    shortName: "OmniFlow AI",
    tagline: "AI Invoice & Document Data Extractor",
    category: "AI Automation Tool",
    status: "Building",
    statusBadge: "In Active Development",
    simpleDescription:
      "An intelligent AI scanner that automatically reads PDF invoices, receipts, and forms, extracts the key data accurately, and saves it into the database.",
    whatItDoes: "Scans uploaded PDFs and pulls out totals, dates, vendor names, and line items.",
    whoItIsFor: "Finance teams, small businesses, and accountants.",
    keyBenefit: "Stops manual typing errors and processes documents in seconds instead of hours.",
    stack: ["Python", "FastAPI", "Next.js", "OpenAI", "PostgreSQL", "Docker"],
    liveUrl: null,
    color: "#1D4ED8", // 02: Slightly Dark Blue (Royal Cobalt)
    theme: "dark",
  },
  {
    id: "agentforge",
    num: "03",
    name: "AgentForge Studio",
    shortName: "AgentForge",
    tagline: "Autonomous Multi-Agent AI Coding Workspace",
    category: "Developer Platform",
    status: "Live",
    statusBadge: "Live Demo Available",
    simpleDescription:
      "A developer platform where multiple AI agents collaborate to write, test, and debug code step-by-step, showing their thinking process in real time.",
    whatItDoes: "Coordinates AI agents to plan, program, and review code projects autonomously.",
    whoItIsFor: "Software engineers and AI developers.",
    keyBenefit: "Speeds up software development by automating routine coding and bug fixing.",
    stack: ["Python", "OpenAI", "Docker", "TypeScript", "React Flow"],
    liveUrl: "https://sivaraam-clinic.vercel.app",
    color: "#FFFFFF", // 03: Crisp White
    theme: "light",
  },
  {
    id: "eventpulse",
    num: "04",
    name: "EventPulse Microservices",
    shortName: "EventPulse",
    tagline: "High-Traffic Event Registration & Ticketing Backend",
    category: "Cloud Infrastructure",
    status: "Live",
    statusBadge: "API Live & Tested",
    simpleDescription:
      "A cloud backend engine engineered to handle thousands of users buying tickets or registering for events at the same moment without crashing or slowing down.",
    whatItDoes: "Processes ticket requests during high-demand bursts with queue fallbacks.",
    whoItIsFor: "Event ticketing companies and high-volume registration websites.",
    keyBenefit: "Guarantees 100% uptime with instant automated email confirmations.",
    stack: ["Node.js", "Docker", "Microservices", "Redis", "MongoDB"],
    liveUrl: "https://sivaraam-clinic.vercel.app",
    color: "#0C0C0C", // 04: Sleek Black
    theme: "dark",
  },
];

export default function SaaSProducts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const liveCount = saasProducts.filter((p) => p.status === "Live").length;
  const buildingCount = saasProducts.filter((p) => p.status === "Building").length;

  return (
    <section id="saas" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Recruiter-Friendly Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="section-label">SaaS & Products</span>
              <div className="h-px w-12 sm:w-16 bg-ink/10" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-lime text-ink border border-ink/15 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-ink animate-pulse" />
                Featured Work
              </span>
            </div>

            <h2
              className="font-sans font-bold text-ink text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight"
            >
              Built & Building<span className="text-lime">.</span>
            </h2>

            <p className="text-sm sm:text-base text-ink/80 max-w-2xl mt-3 sm:mt-4 leading-relaxed font-normal">
              Real-world SaaS products, AI platforms, and cloud architectures I have engineered from scratch.
              Click or tap each card to explore details and live platforms.
            </p>
          </div>

          {/* Quick Status Pill Bar */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 bg-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border border-ink/15 shadow-xs self-start lg:self-end">
            <div className="flex items-center gap-2 text-xs font-mono text-ink font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Products ({liveCount})</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-ink/15" />
            <div className="flex items-center gap-2 text-xs font-mono text-ink font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span>In Development ({buildingCount})</span>
            </div>
          </div>
        </div>

        {/* ─── DESKTOP EXPANDING VERTICAL DECKS (SCREEN WIDTH >= 1024px) ─── */}
        <div className="hidden lg:flex gap-3 xl:gap-4 min-h-[580px] h-[600px] w-full">
          {saasProducts.map((p, idx) => {
            const isExpanded = activeIndex === idx;
            const isDark = p.theme === "dark";

            return (
              <div
                key={p.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                style={{
                  flex: isExpanded ? "4 1 0%" : "1 1 0%",
                  backgroundColor: p.color,
                }}
                className={`relative rounded-3xl ${
                  isExpanded ? "p-6 xl:p-8" : "p-4 xl:p-6"
                } transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border ${
                  isDark ? "border-white/10" : "border-ink/15"
                } overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl flex flex-col justify-between min-w-0`}
              >
                {/* Background Watermark Number */}
                <div
                  className="absolute right-4 bottom-2 text-8xl xl:text-9xl font-sans font-black pointer-events-none select-none transition-all duration-700"
                  style={{
                    color: isDark ? "#FFFFFF" : "#000000",
                    opacity: isExpanded ? 0.08 : 0.04,
                  }}
                >
                  {p.num}
                </div>

                {isExpanded ? (
                  /* ─── EXPANDED DECK ─── */
                  <div className="h-full flex flex-col justify-between z-10 animate-fadeIn min-w-0">
                    <div>
                      {/* Top Header info */}
                      <div
                        className={`flex items-center justify-between gap-4 border-b ${
                          isDark ? "border-white/20" : "border-ink/15"
                        } pb-4 mb-5 xl:mb-6`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                          {/* Status Badge */}
                          <span
                            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold shadow-xs ${
                              isDark
                                ? p.color === "#0C0C0C"
                                  ? "bg-lime text-ink"
                                  : "bg-white text-ink"
                                : "bg-ink text-white"
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                p.status === "Live"
                                  ? p.color === "#0C0C0C"
                                    ? "bg-ink"
                                    : "bg-emerald-600"
                                  : "bg-amber-500"
                              } animate-pulse`}
                            />
                            {p.statusBadge}
                          </span>

                          <span
                            className={`text-xs font-mono font-bold px-3 py-1.5 rounded-full border ${
                              isDark
                                ? "bg-white/15 text-white border-white/20"
                                : "bg-ink/10 text-ink border-ink/15"
                            }`}
                          >
                            {p.category}
                          </span>
                        </div>

                        <span
                          className={`text-xs font-mono font-bold flex-shrink-0 ${
                            isDark ? "text-white" : "text-ink"
                          }`}
                        >
                          #{p.num} of 0{saasProducts.length}
                        </span>
                      </div>

                      {/* Main Title & Tagline */}
                      <div className="space-y-1 mb-4">
                        <h3
                          className={`text-2xl xl:text-4xl font-extrabold tracking-tight font-sans break-words ${
                            isDark ? "text-white" : "text-black"
                          }`}
                          style={{ letterSpacing: "-0.03em" }}
                        >
                          {p.name}
                        </h3>
                        <p
                          className={`text-sm xl:text-base font-semibold ${
                            isDark
                              ? p.color === "#0C0C0C"
                                ? "text-lime"
                                : "text-sky-200"
                              : "text-neutral-700"
                          }`}
                        >
                          {p.tagline}
                        </p>
                      </div>

                      {/* Clear Product Description */}
                      <p
                        className={`text-sm xl:text-base leading-relaxed max-w-2xl mb-5 font-normal ${
                          isDark ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        {p.simpleDescription}
                      </p>

                      {/* Key Highlights (Clear Plain English Bullets) */}
                      <div
                        className={`space-y-2 mb-5 p-3.5 xl:p-4 rounded-2xl border ${
                          isDark
                            ? "bg-black/25 border-white/20"
                            : "bg-black/5 border-black/10"
                        }`}
                      >
                        <div
                          className={`text-xs font-mono uppercase tracking-wider font-bold ${
                            isDark ? "text-white" : "text-black"
                          }`}
                        >
                          Key Highlights:
                        </div>
                        <ul className="space-y-1.5 text-xs xl:text-sm">
                          <li
                            className={`flex items-start gap-2 ${
                              isDark ? "text-white" : "text-black"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                                isDark
                                  ? p.color === "#0C0C0C"
                                    ? "bg-lime"
                                    : "bg-white"
                                  : "bg-black"
                              }`}
                            />
                            <span>
                              <strong>What it does:</strong> {p.whatItDoes}
                            </span>
                          </li>
                          <li
                            className={`flex items-start gap-2 ${
                              isDark ? "text-white" : "text-black"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                                isDark
                                  ? p.color === "#0C0C0C"
                                    ? "bg-lime"
                                    : "bg-white"
                                  : "bg-black"
                              }`}
                            />
                            <span>
                              <strong>Who it is for:</strong> {p.whoItIsFor}
                            </span>
                          </li>
                          <li
                            className={`flex items-start gap-2 ${
                              isDark ? "text-white" : "text-black"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                                isDark
                                  ? p.color === "#0C0C0C"
                                    ? "bg-lime"
                                    : "bg-white"
                                  : "bg-black"
                              }`}
                            />
                            <span>
                              <strong>Impact:</strong> {p.keyBenefit}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Footer: Stack & Live Action Button */}
                    <div>
                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 xl:gap-2 mb-5">
                        {p.stack.map((tech) => (
                          <span
                            key={tech}
                            className={`text-[11px] xl:text-xs font-mono font-bold px-2.5 py-1 rounded-lg border ${
                              isDark
                                ? "bg-white/20 text-white border-white/25"
                                : "bg-black/10 text-black border-black/15"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Button: Live Link Only */}
                      <div className="flex items-center gap-3 pt-1">
                        {p.liveUrl ? (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`text-xs xl:text-sm font-bold rounded-full inline-flex items-center gap-2 transition duration-200 shadow-sm ${
                              isDark
                                ? p.color === "#0C0C0C"
                                  ? "bg-lime text-ink hover:bg-white"
                                  : "bg-white text-blue-900 hover:bg-lime hover:text-black"
                                : "mag-btn"
                            }`}
                            style={{ padding: "11px 24px" }}
                          >
                            <span>Open Live Website</span>
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                          </a>
                        ) : (
                          <div
                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold ${
                              isDark
                                ? "bg-white/20 text-white border border-white/30"
                                : "bg-black text-white"
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                            <span>In Development • Beta Soon</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ─── COLLAPSED DECK ─── */
                  <div className="h-full flex flex-col justify-between py-2 z-10 select-none min-w-0 w-full">
                    {/* Top deck number & status indicator */}
                    <div className="flex items-center justify-between w-full px-1">
                      <span
                        className={`text-sm font-mono font-black ${
                          isDark ? "text-white" : "text-black"
                        }`}
                      >
                        #{p.num}
                      </span>
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          p.status === "Live"
                            ? p.color === "#0C0C0C"
                              ? "bg-lime"
                              : "bg-emerald-400"
                            : "bg-amber-400"
                        } shadow-xs flex-shrink-0`}
                      />
                    </div>

                    {/* Middle: Clean short name and category */}
                    <div className="my-auto flex flex-col items-center text-center px-1 w-full">
                      <span
                        className={`text-[10px] xl:text-[11px] font-mono uppercase tracking-wider font-bold mb-1.5 leading-tight ${
                          isDark ? "text-white/80" : "text-black/75"
                        }`}
                      >
                        {p.category}
                      </span>

                      <h4
                        className={`font-sans font-black text-base xl:text-lg leading-tight tracking-tight break-words max-w-full ${
                          isDark ? "text-white" : "text-black"
                        }`}
                      >
                        {p.shortName}
                      </h4>

                      <span
                        className={`mt-3 text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                          isDark
                            ? "bg-white/15 text-white border-white/20"
                            : "bg-black/10 text-black border-black/15"
                        }`}
                      >
                        View →
                      </span>
                    </div>

                    {/* Bottom Status pill */}
                    <div className="flex items-center justify-center w-full px-1">
                      <span
                        className={`text-[10px] xl:text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full truncate ${
                          isDark
                            ? p.color === "#0C0C0C"
                              ? "bg-lime text-ink"
                              : "bg-white text-ink"
                            : "bg-black text-white"
                        }`}
                      >
                        {p.status}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── MOBILE & MEDIUM SCREEN ACCORDION STACK (SCREEN WIDTH < 1024px) ─── */}
        <div className="lg:hidden flex flex-col gap-4 sm:gap-5">
          {saasProducts.map((p, idx) => {
            const isExpanded = activeIndex === idx;
            const isDark = p.theme === "dark";

            return (
              <div
                key={p.id}
                onClick={() => setActiveIndex(isExpanded ? (idx === 0 ? 1 : 0) : idx)}
                style={{
                  backgroundColor: p.color,
                }}
                className={`rounded-2xl sm:rounded-3xl border ${
                  isDark ? "border-white/10" : "border-ink/15"
                } p-5 sm:p-6 md:p-8 transition-all duration-300 shadow-sm cursor-pointer`}
              >
                {/* Header row */}
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span
                      className={`text-sm sm:text-base font-mono font-black flex-shrink-0 ${
                        isDark ? "text-white" : "text-black"
                      }`}
                    >
                      #{p.num}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className={`font-sans font-black text-lg sm:text-xl md:text-2xl truncate ${
                          isDark ? "text-white" : "text-black"
                        }`}
                      >
                        {p.name}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm font-mono font-bold truncate ${
                          isDark ? "text-white/80" : "text-black/70"
                        }`}
                      >
                        {p.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <span
                      className={`text-xs font-mono px-2.5 sm:px-3 py-1 rounded-full font-bold ${
                        isDark
                          ? p.color === "#0C0C0C"
                            ? "bg-lime text-ink"
                            : "bg-white text-ink"
                          : "bg-black text-white"
                      }`}
                    >
                      {p.status}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border transition-transform duration-300 ${
                        isDark
                          ? "border-white/30 text-white"
                          : "border-black/20 text-black"
                      }`}
                      style={{
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Details on Mobile & Medium screens */}
                {isExpanded && (
                  <div
                    className={`mt-4 sm:mt-6 pt-4 sm:pt-6 border-t ${
                      isDark ? "border-white/20" : "border-black/15"
                    } space-y-4 sm:space-y-5 animate-fadeIn`}
                  >
                    {/* Responsive two-column on tablet (md), single column on phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-3 sm:space-y-4">
                        <p
                          className={`text-sm sm:text-base font-semibold ${
                            isDark
                              ? p.color === "#0C0C0C"
                                ? "text-lime"
                                : "text-sky-200"
                              : "text-neutral-800"
                          }`}
                        >
                          {p.tagline}
                        </p>

                        <p
                          className={`text-sm sm:text-base leading-relaxed font-normal ${
                            isDark ? "text-white" : "text-black"
                          }`}
                        >
                          {p.simpleDescription}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                          {p.stack.map((tech) => (
                            <span
                              key={tech}
                              className={`text-xs font-mono px-2.5 py-1 rounded-md font-bold border ${
                                isDark
                                  ? "bg-white/20 text-white border-white/25"
                                  : "bg-black/10 text-black border-black/15"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div
                        className={`p-4 sm:p-5 rounded-2xl border space-y-2.5 text-xs sm:text-sm ${
                          isDark
                            ? "bg-black/25 border-white/20"
                            : "bg-black/5 border-black/10"
                        }`}
                      >
                        <span
                          className={`font-mono uppercase font-bold block ${
                            isDark ? "text-white" : "text-black"
                          }`}
                        >
                          Key Highlights:
                        </span>
                        <p className={isDark ? "text-white" : "text-black"}>
                          <strong>What it does:</strong> {p.whatItDoes}
                        </p>
                        <p className={isDark ? "text-white" : "text-black"}>
                          <strong>Who it is for:</strong> {p.whoItIsFor}
                        </p>
                        <p className={isDark ? "text-white" : "text-black"}>
                          <strong>Benefit:</strong> {p.keyBenefit}
                        </p>
                      </div>
                    </div>

                    {/* Action Button: Live Website Only */}
                    <div className="pt-2 sm:pt-3">
                      {p.liveUrl ? (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`text-xs sm:text-sm font-bold rounded-full inline-flex items-center gap-2 shadow-sm ${
                            isDark
                              ? p.color === "#0C0C0C"
                                ? "bg-lime text-ink"
                                : "bg-white text-blue-900"
                              : "mag-btn"
                          }`}
                          style={{ padding: "10px 22px" }}
                        >
                          <span>Open Live Website</span>
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </a>
                      ) : (
                        <div
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold ${
                            isDark
                              ? "bg-white/20 text-white border border-white/30"
                              : "bg-black text-white"
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                          <span>In Development • Beta Soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
