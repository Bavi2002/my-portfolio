export default function About() {
  return (
    <section id="about" className="py-32 px-6" style={{background:"var(--warm)"}}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 sr">
          <span className="section-label">About me</span>
          <div className="flex-1 max-w-xs h-px bg-ink/10" />
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Big text block — spans 7 cols */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-10">
            <h2
              className="sr font-sans font-bold text-ink"
              style={{fontSize:"clamp(2.2rem,4.5vw,4rem)", letterSpacing:"-0.04em", lineHeight:"1.05"}}
            >
              I turn{" "}
              <span className="italic font-normal" style={{color:"var(--muted)"}}>
                ambitious ideas
              </span>{" "}
              into software that delivers results.
            </h2>

            <div className="sr d2 grid grid-cols-2 gap-4">
              <p className="font-body text-base text-muted leading-relaxed">
                I build web applications, AI-powered tools, and business systems that solve real problems. From concept to deployment, I focus on creating software that is fast, reliable, and easy to use.
              </p>
              <p className="font-body text-base text-muted leading-relaxed">
                Whether it's a startup idea, internal platform, or automation workflow, I enjoy turning complex requirements into clean, production-ready solutions that people actually use.
              </p>
            </div>

            {/* Education card */}
            <div className="sr d3 flex items-center gap-5 p-5 rounded-2xl bg-white border border-ink/8">
              <div className="w-12 h-12 rounded-xl bg-ink grid place-items-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F135" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-sans font-semibold text-ink text-base">BSc (Hons) in Information Technology</div>
                <div className="font-body text-sm text-muted">Specializing in Software Engineering · SLIIT · 2023–2026</div>
              </div>
              <span className="chip !bg-white !text-ink/80 border-ink/10">
  GPA 3.2/4.0
</span>
            </div>
          </div>

          {/* Right column — stats bento */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { num: "10+", label: "Projects\nBuilt", bg: "bg-ink text-paper", accent: "" },
              { num: "5+", label: "Modern\nTechnologies" , bg: "bg-lime text-ink", accent: "" },
              { num: "2", label: "Industry\nInternships", bg: "bg-white text-ink", accent: "" },
              { num: "AI", label: "Powered\nSolutions", bg: "bg-white text-ink", accent: "" },
            ].map((s, i) => (
              <div
                key={i}
                className={`sr d${i+2} ${s.bg} rounded-2xl p-6 flex flex-col justify-between min-h-[160px] border border-ink/6`}
              >
                <div className="stat-num" style={{color:"inherit"}}>{s.num}</div>
                <div className="font-body text-sm opacity-60 whitespace-pre-line leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  );
}
