const groups = [
  {
    category: "Frontend",
    icon: "◈",
    color: "bg-lime",
    skills: [
      { name: "React.js / Next.js", pct: 92 },
      { name: "TypeScript",         pct: 85 },
      { name: "Tailwind CSS",       pct: 95 },
      { name: "HTML5 / CSS3",       pct: 95 },
    ],
  },
  {
    category: "Backend",
    icon: "⬡",
    color: "bg-ink",
    skills: [
      { name: "Node.js / Express",  pct: 78 },
      { name: "Prisma / MongoDB",   pct: 75 },
      { name: "REST APIs",          pct: 85 },
      { name: "Laravel (PHP)",      pct: 65 },
    ],
  },
  {
    category: "Tools & Cloud",
    icon: "◎",
    color: "bg-warm border border-ink/20",
    skills: [
      { name: "Git / GitHub",       pct: 90 },
      { name: "AWS (Lambda/Amplify/ECR)", pct: 72 },
      { name: "Docker",             pct: 68 },
      { name: "Figma",              pct: 82 },
    ],
  },
];

const certs = [
  { title: "Front End Development",     issuer: "University of Moratuwa", year: "2024" },
  { title: "Server Side Development",   issuer: "University of Moratuwa", year: "2024" },
  { title: "Web Design for Beginners",  issuer: "University of Moratuwa", year: "2023" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6" style={{background:"var(--warm)"}}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16 sr">
          <span className="section-label">Skills & Tools</span>
          <div className="flex-1 max-w-xs h-px bg-ink/10"/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Heading */}
          <div className="lg:col-span-4">
            <h2
              className="sr font-sans font-bold text-ink lg:sticky lg:top-28"
              style={{fontSize:"clamp(2rem,4vw,3.5rem)", letterSpacing:"-0.04em", lineHeight:"1.05"}}
            >
              The tools<br/>
              <span className="italic font-normal">I reach for.</span>
            </h2>
          </div>

          {/* Skill groups */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {groups.map((g, gi) => (
              <div
                key={g.category}
                className={`sr d${gi+2} p-6 rounded-2xl bg-paper border border-ink/8`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-7 h-7 rounded-lg grid place-items-center text-sm ${g.color}`}>
                    {g.icon}
                  </span>
                  <span className="font-sans font-semibold text-ink text-base">{g.category}</span>
                </div>
                <div className="flex flex-col gap-4">
                  {g.skills.map(s => (
                    <div key={s.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="font-body text-sm text-muted">{s.name}</span>
                        <span className="font-mono text-xs text-muted/60">{s.pct}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${s.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Certifications inline */}
            <div className="sr d5 p-6 rounded-2xl bg-ink border border-transparent">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-lg bg-lime grid place-items-center text-sm">✦</span>
                <span className="font-sans font-semibold text-paper text-base">Certifications</span>
              </div>
              <div className="flex flex-col gap-3">
                {certs.map(c => (
                  <div key={c.title} className="flex items-center justify-between py-3 border-b border-white/8 last:border-0">
                    <div>
                      <div className="font-body text-sm text-paper font-medium">{c.title}</div>
                      <div className="font-mono text-xs text-paper/40">{c.issuer}</div>
                    </div>
                    <span className="chip border-white/10 bg-white/8 text-paper/50">{c.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
