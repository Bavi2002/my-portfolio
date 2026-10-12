"use client";

import { useState } from "react";

interface Project {
  num: string;
  title: string;
  desc: string;
  stack: string[];
  live: string | null;
  github: string;
  thumb: string;
  accent: string;
}

const projects: Project[] = [
  // Initial 6 projects
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

  // Duplicated batch 1 (projects 07 to 12 - placeholder projects to update later)
  {
    num: "07",
    title: "AI Research Copilot",
    desc: "AI-powered research assistant that helps gather, analyze, and organize information through intelligent automation.",
    stack: ["Python", "AI", "LLMs"],
    live: null,
    github: "https://github.com/Bavi2002/Research-Copilot",
    thumb: "/thumbnails/1.png",
    accent: "#C8F135",
  },
  {
    num: "08",
    title: "Multi-Agent Coding Assistant",
    desc: "Autonomous AI system that coordinates multiple agents to solve coding and reasoning tasks.",
    stack: ["Python", "OpenAI", "AI Agents"],
    live: null,
    github: "https://github.com/Bavi2002/Tiny-Multi-Agent-Coding-Assistant",
    thumb: "/thumbnails/1.png",
    accent: "#B3E5FC",
  },
  {
    num: "09",
    title: "Clinic Management System",
    desc: "Full-stack healthcare platform with appointments, patient management, and admin workflows.",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    live: "https://sivaraam-clinic.vercel.app",
    github: "https://github.com/Bavi2002/Sivaraam-Clinic",
    thumb: "/thumbnails/1.png",
    accent: "#FFE0B2",
  },
  {
    num: "10",
    title: "Smart Event Platform",
    desc: "Microservices-based event system with API Gateway and scalable backend architecture.",
    stack: ["Node.js", "Microservices", "Docker"],
    live: null,
    github: "https://github.com/Bavi2002/smart-event-registration-service",
    thumb: "/thumbnails/1.png",
    accent: "#E1BEE7",
  },
  {
    num: "11",
    title: "Vehicle Rental Platform",
    desc: "Cloud-enabled booking system with authentication and AWS/Firebase integration.",
    stack: ["Next.js", "Firebase", "AWS"],
    live: null,
    github: "https://github.com/Bavi2002/Vehicle-Rental",
    thumb: "/thumbnails/1.png",
    accent: "#C8E6C9",
  },
  {
    num: "12",
    title: "Serverless Backend APIs",
    desc: "AWS Lambda-based backend services for scalable and event-driven execution.",
    stack: ["AWS Lambda", "TypeScript", "Serverless"],
    live: null,
    github: "https://github.com/Bavi2002/AWS-Lambda",
    thumb: "/thumbnails/1.png",
    accent: "#FFD180",
  },

  // Duplicated batch 2 (projects 13 to 18 - placeholder projects to update later)
  {
    num: "13",
    title: "AI Research Copilot",
    desc: "AI-powered research assistant that helps gather, analyze, and organize information through intelligent automation.",
    stack: ["Python", "AI", "LLMs"],
    live: null,
    github: "https://github.com/Bavi2002/Research-Copilot",
    thumb: "/thumbnails/1.png",
    accent: "#C8F135",
  },
  {
    num: "14",
    title: "Multi-Agent Coding Assistant",
    desc: "Autonomous AI system that coordinates multiple agents to solve coding and reasoning tasks.",
    stack: ["Python", "OpenAI", "AI Agents"],
    live: null,
    github: "https://github.com/Bavi2002/Tiny-Multi-Agent-Coding-Assistant",
    thumb: "/thumbnails/1.png",
    accent: "#B3E5FC",
  },
  {
    num: "15",
    title: "Clinic Management System",
    desc: "Full-stack healthcare platform with appointments, patient management, and admin workflows.",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    live: "https://sivaraam-clinic.vercel.app",
    github: "https://github.com/Bavi2002/Sivaraam-Clinic",
    thumb: "/thumbnails/1.png",
    accent: "#FFE0B2",
  },
  {
    num: "16",
    title: "Smart Event Platform",
    desc: "Microservices-based event system with API Gateway and scalable backend architecture.",
    stack: ["Node.js", "Microservices", "Docker"],
    live: null,
    github: "https://github.com/Bavi2002/smart-event-registration-service",
    thumb: "/thumbnails/1.png",
    accent: "#E1BEE7",
  },
  {
    num: "17",
    title: "Vehicle Rental Platform",
    desc: "Cloud-enabled booking system with authentication and AWS/Firebase integration.",
    stack: ["Next.js", "Firebase", "AWS"],
    live: null,
    github: "https://github.com/Bavi2002/Vehicle-Rental",
    thumb: "/thumbnails/1.png",
    accent: "#C8E6C9",
  },
  {
    num: "18",
    title: "Serverless Backend APIs",
    desc: "AWS Lambda-based backend services for scalable and event-driven execution.",
    stack: ["AWS Lambda", "TypeScript", "Serverless"],
    live: null,
    github: "https://github.com/Bavi2002/AWS-Lambda",
    thumb: "/thumbnails/1.png",
    accent: "#FFD180",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group relative rounded-2xl p-[1px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]">

      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: `linear-gradient(135deg, ${p.accent}, transparent 70%)`,
        }}
      />

      {/* Inner card */}
      <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl border border-ink/10 overflow-hidden h-full flex flex-col justify-between">
        <div>
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-ink/5">
            <span className="text-xs font-mono text-muted">#{p.num}</span>

            <div className="flex gap-2">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 sm:w-7 sm:h-7 grid place-items-center rounded-full border border-ink/10 hover:bg-lime transition text-ink"
                  aria-label={`Live demo for ${p.title}`}
                >
                  <svg
                    className="w-3.5 h-3.5"
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
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 sm:w-7 sm:h-7 grid place-items-center rounded-full border border-ink/10 hover:bg-ink hover:text-white transition text-ink"
                  aria-label={`GitHub repository for ${p.title}`}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
            <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight group-hover:text-black break-words">
              {p.title}
            </h3>

            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {p.desc}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full border border-ink/10 bg-white/60 text-ink/75"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* bottom glow line */}
        <div
          className="h-[2px] w-full opacity-40 group-hover:opacity-100 transition mt-3 sm:mt-4"
          style={{ background: p.accent }}
        />
      </div>
    </div>
  );
}

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_PER_PAGE);
  };

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6" style={{ background: "var(--warm)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="items-end justify-between gap-4 mb-10 sm:mb-12 md:mb-16 flex-wrap">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
            <span className="section-label">Projects</span>
            <div className="h-px w-16 sm:w-24 bg-ink/10" />
          </div>

          <h2
            className="font-sans font-bold text-ink text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight"
          >
            Selected Work<span className="text-lime">.</span>
          </h2>
        </div>

        {/* Grid: 1 col on mobile, 2 cols on medium screen/tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {visibleProjects.map((p, idx) => (
            <ProjectCard key={`${p.num}-${idx}`} p={p} />
          ))}
        </div>

        {/* Show More Button (Only displayed if there are more projects) */}
        {hasMore && (
          <div className="mt-10 sm:mt-12 md:mt-14 flex flex-col items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleShowMore}
              className="mag-btn group cursor-pointer inline-flex items-center gap-2.5 px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm"
              id="show-more-projects-btn"
            >
              <span>Show More</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-1"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <span className="text-xs font-mono text-muted">
              Showing {visibleProjects.length} of {projects.length} projects
            </span>
          </div>
        )}
      </div>
    </section>
  );
}