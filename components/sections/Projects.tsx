"use client";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "AI Research Copilot",
    desc: "AI-powered research assistant that helps gather, analyze, and organize information through intelligent automation.",
    stack: ["Python", "AI", "LLMs"],
    live: null,
    github: "https://github.com/Bavi2002/Research-Copilot",
    thumb: "/thumbnails/1.png",
    accent: "#C8F135",
  },
  {
    num: "02",
    title: "Multi-Agent Coding Assistant",
    desc: "Autonomous AI system that coordinates multiple agents to solve coding and reasoning tasks.",
    stack: ["Python", "OpenAI", "AI Agents"],
    live: null,
    github: "https://github.com/Bavi2002/Tiny-Multi-Agent-Coding-Assistant",
    thumb: "/thumbnails/1.png",
    accent: "#B3E5FC",
  },
  {
    num: "03",
    title: "Clinic Management System",
    desc: "Full-stack healthcare platform with appointments, patient management, and admin workflows.",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    live: "https://sivaraam-clinic.vercel.app",
    github: "https://github.com/Bavi2002/Sivaraam-Clinic",
    thumb: "/thumbnails/1.png",
    accent: "#FFE0B2",
  },
  {
    num: "04",
    title: "Smart Event Platform",
    desc: "Microservices-based event system with API Gateway and scalable backend architecture.",
    stack: ["Node.js", "Microservices", "Docker"],
    live: null,
    github: "https://github.com/Bavi2002/smart-event-registration-service",
    thumb: "/thumbnails/1.png",
    accent: "#E1BEE7",
  },
  {
    num: "05",
    title: "Vehicle Rental Platform",
    desc: "Cloud-enabled booking system with authentication and AWS/Firebase integration.",
    stack: ["Next.js", "Firebase", "AWS"],
    live: null,
    github: "https://github.com/Bavi2002/Vehicle-Rental",
    thumb: "/thumbnails/1.png",
    accent: "#C8E6C9",
  },
  {
    num: "06",
    title: "Serverless Backend APIs",
    desc: "AWS Lambda-based backend services for scalable and event-driven execution.",
    stack: ["AWS Lambda", "TypeScript", "Serverless"],
    live: null,
    github: "https://github.com/Bavi2002/AWS-Lambda",
    thumb: "/thumbnails/1.png",
    accent: "#FFD180",
  },
];

function PlaceholderThumb({ accent, num }: { accent: string; num: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${accent}40 0%, ${accent}15 100%)`,
      }}
    >
      <span
        className="font-sans font-bold opacity-10 select-none"
        style={{
          fontSize: "clamp(5rem,15vw,10rem)",
          letterSpacing: "-0.08em",
          color: "#000",
        }}
      >
        {num}
      </span>
    </div>
  );
}

function ProjectCard({ p }: any) {
  return (
    <div className="group relative rounded-2xl p-[1px] transition-all duration-300 hover:scale-[1.02]">

      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `linear-gradient(135deg, ${p.accent}, transparent 70%)`,
        }}
      />

      {/* Inner card */}
      <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl border border-ink/10 overflow-hidden">

        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-ink/5">
          <span className="text-xs font-mono text-muted">#{p.num}</span>

          <div className="flex gap-2">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                className="w-7 h-7 grid place-items-center rounded-full border border-ink/10 hover:bg-lime transition"
              >
                ↗
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                className="w-7 h-7 grid place-items-center rounded-full border border-ink/10 hover:bg-ink hover:text-white transition"
              >
                ⌘
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">

          <h3 className="text-lg font-bold text-ink tracking-tight group-hover:text-black">
            {p.title}
          </h3>

          <p className="text-sm text-muted leading-relaxed">
            {p.desc}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {p.stack.map((t: string) => (
              <span
                key={t}
                className="text-[11px] px-2 py-1 rounded-full border border-ink/10 bg-white/60 text-ink/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* bottom glow line */}
        <div
          className="h-[2px] w-full opacity-40 group-hover:opacity-100 transition"
          style={{ background: p.accent }}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const rest = projects.slice(0);

  return (
    <section id="projects" className="py-32 px-6" style={{background:"var(--warm)"}}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className=" items-end justify-between gap-4 mb-16 flex-wrap">
          <div className="flex items-center gap-4 mb-8">
            <span className="section-label">Projects</span>
            <div className="h-px w-24 bg-ink/10" />
          </div>

          <h2
            className="font-sans font-bold text-ink"
            style={{
              fontSize: "clamp(2rem,4vw,3.5rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Selected Work<span className="text-lime">.</span>
          </h2>
        </div>

     

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {rest.map((p) => (
            <ProjectCard key={p.num} p={p} />
          ))}
        </div>

      </div>
    </section>
  );
}