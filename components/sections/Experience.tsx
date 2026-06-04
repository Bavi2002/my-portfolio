const experiences = [
  {
    period: "Apr 2025 – Sep 2025",
    role: "Full Stack Developer Intern",
    company: "NothingApps",
    type: "Internship",
    description: "Built responsive interfaces and landing pages for 3 product sites (nothingapps.io, saaswa.com, botstarterkit.com). Developed OpenAI-powered chat features, integrated WhatsApp Cloud API, and contributed to WhatsBothub using Next.js, TypeScript, Prisma & MongoDB. Participated in agile sprints and AWS Lambda deployments.",
    stack: ["Next.js","TypeScript","MongoDB","Prisma","AWS Lambda","OpenAI API","WhatsApp API"],
    highlight: true,
  },
  {
    period: "Dec 2025 – Mar 2026",
    role: "Associate Software Engineer",
    company: "Gensoft",
    type: "Full-time",
    description: "Revamped a legacy Laravel application — refactored backend architecture, improved code structure, and applied modern best practices. Built responsive frontends using Blade & Bootstrap, fixing UI inconsistencies and handling full-stack API integration.",
    stack: ["Laravel","PHP","Bootstrap","Blade","MySQL","REST APIs"],
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6" style={{background:"var(--warm)"}}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16 sr">
          <span className="section-label">Experience</span>
          <div className="flex-1 max-w-xs h-px bg-ink/10"/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Big label */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <h2
              className="sr font-sans font-bold text-ink"
              style={{fontSize:"clamp(2rem,4vw,3.5rem)", letterSpacing:"-0.04em", lineHeight:"1.05"}}
            >
              Where I&apos;ve<br/>
              <span className="italic font-normal">worked.</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`sr d${i+2} relative p-7 rounded-2xl border transition-all duration-300 ${
                  exp.highlight
                    ? "bg-ink text-paper border-transparent"
                    : "bg-paper border-ink/8 hover:border-ink/20"
                }`}
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className={`font-sans font-bold text-xl ${exp.highlight?"text-paper":"text-ink"}`}
                      style={{letterSpacing:"-0.02em"}}>
                      {exp.role}
                    </h3>
                    <div className={`flex items-center gap-2 mt-1 font-body text-sm ${exp.highlight?"text-paper/50":"text-muted"}`}>
                      <span>{exp.company}</span>
                      <span>·</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <span className={`chip self-start flex-shrink-0 ${exp.highlight?"border-white/10 bg-white/10 text-paper/70":""}`}>
                    {exp.type}
                  </span>
                </div>

                <p className={`font-body text-sm leading-relaxed mb-5 ${exp.highlight?"text-paper/60":"text-muted"}`}>
                  {exp.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map(tech => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-lg font-mono text-xs ${
                        exp.highlight
                          ? "bg-white/10 text-paper/70"
                          : "bg-warm text-muted border border-ink/8"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Lime accent dot for highlighted */}
                {exp.highlight && (
                  <div className="absolute top-7 right-7 w-3 h-3 rounded-full bg-lime"/>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
