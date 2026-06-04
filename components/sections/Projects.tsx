"use client";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Personal Portfolio",
    desc: "Responsive portfolio with pixel-perfect UI from Figma. Admin dashboard with CRUD, reusable components, optimised for all devices.",
    stack: ["Next.js","TypeScript","Tailwind"],
    live: "https://bavithran.dev",
    github: null,
    thumb: "/thumbnails/portfolio.png",   // drop your image here
    size: "large",  // spans 2 cols
    accent: "#C8F135",
  },
  {
    num: "02",
    title: "Sivaraam Clinic System",
    desc: "Full clinic platform — appointment booking, role-based auth, admin panel, smooth polished interactions.",
    stack: ["Next.js","Tailwind","NextAuth"],
    live: "https://sivaraam-clinic.vercel.app",
    github: null,
    thumb: "/thumbnails/clinic.png",
    size: "normal",
    accent: "#B3E5FC",
  },
  {
    num: "03",
    title: "Style Craft E-commerce",
    desc: "MERN-stack store with product listing, cart, checkout, auth, and payment workflows.",
    stack: ["React","Express","MongoDB","Node.js"],
    live: null,
    github: null,
    thumb: "/thumbnails/ecommerce.png",
    size: "normal",
    accent: "#FFE0B2",
  },
  {
    num: "04",
    title: "Event Management (Microservices)",
    desc: "Microservices event platform with API Gateway, Booking Service APIs, and React + Tailwind frontend.",
    stack: ["React","Node.js","Docker","API Gateway"],
    live: null,
    github: null,
    thumb: "/thumbnails/events.png",
    size: "normal",
    accent: "#E1BEE7",
  },
  {
    num: "05",
    title: "Vehicle Rental Booking",
    desc: "Next.js booking platform with Firebase Auth, Firestore real-time data, AWS Lambda & Amplify.",
    stack: ["Next.js","TypeScript","Firebase","AWS"],
    live: null,
    github: null,
    thumb: "/thumbnails/vehicle.png",
    size: "normal",
    accent: "#C8E6C9",
  },
];

function PlaceholderThumb({ accent, num }: { accent: string; num: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${accent}40 0%, ${accent}15 100%)` }}>
      <span className="font-sans font-bold opacity-10 select-none"
        style={{ fontSize: "clamp(5rem,15vw,10rem)", letterSpacing:"-0.08em", color:"#000" }}>
        {num}
      </span>
    </div>
  );
}

function ProjectCard({ p, featured = false }: { p: typeof projects[0]; featured?: boolean }) {
  return (
    <div className={`proj-card group flex flex-col ${featured ? "lg:flex-row" : ""}`}>
      {/* Thumbnail */}
      <div className={`proj-thumb ${featured ? "lg:w-1/2 aspect-video lg:aspect-auto" : ""}`}>
        <Image
          src={p.thumb}
          alt={p.title}
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
        {/* Fallback overlay always behind image */}
        <div className="absolute inset-0">
          <PlaceholderThumb accent={p.accent} num={p.num} />
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col gap-4 ${featured ? "lg:w-1/2 lg:p-8" : ""}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-mono text-xs text-muted mb-1 block">{p.num}</span>
            <h3 className="font-sans font-bold text-xl text-ink" style={{ letterSpacing: "-0.03em" }}>
              {p.title}
            </h3>
          </div>
          <div className="flex gap-2">
            {p.live && (
              <a href={p.live} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-ink/15 grid place-items-center hover:bg-lime hover:border-lime transition-all duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M7 7h10v10"/>
                </svg>
              </a>
            )}
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-ink/15 grid place-items-center hover:bg-ink hover:text-paper hover:border-ink transition-all duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="font-body text-sm text-muted leading-relaxed">{p.desc}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {p.stack.map(t => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between gap-4 mb-16 sr flex-wrap">
          <div className="flex items-center gap-4">
            <span className="section-label">Selected work</span>
            <div className="h-px w-24 bg-ink/10"/>
          </div>
          <h2 className="font-sans font-bold text-ink" style={{fontSize:"clamp(2rem,4vw,3.5rem)", letterSpacing:"-0.04em"}}>
            Projects<span className="text-lime">.</span>
          </h2>
        </div>

        {/* Featured — wide card */}
        <div className="sr mb-4">
          <ProjectCard p={featured} featured />
        </div>

        {/* Grid of remaining */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {rest.map((p, i) => (
            <div key={p.num} className={`sr d${i+2}`}>
              <ProjectCard p={p} />
            </div>
          ))}
        </div>

        {/* Add thumbnail hint */}
        <p className="sr mt-8 font-mono text-xs text-muted/50 text-center">
          Drop images into <code className="font-mono">/public/thumbnails/</code> to add project screenshots
        </p>
      </div>
    </section>
  );
}
