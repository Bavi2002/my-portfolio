"use client";

const services = [
  {
    title: "Landing Pages & Websites",
    desc: "Conversion-focused, fast and clean websites built to perform.",
    deliverable: "5–10 days",
  },
  {
    title: "Web App Development",
    desc: "Full-stack apps, dashboards and SaaS platforms built with modern tools.",
    deliverable: "2–6 weeks",
    highlight: true,
  },
  {
    title: "API & Backend Integration",
    desc: "Connect systems, payments, AI tools and external services smoothly.",
    deliverable: "3–7 days",
  },
  {
    title: "Figma to Code",
    desc: "Pixel-perfect UI converted into production-ready React code.",
    deliverable: "2–5 days",
  },
  {
    title: "Performance Optimization",
    desc: "Improve speed, SEO and Core Web Vitals for better ranking.",
    deliverable: "3–7 days",
  },
  {
    title: "E-commerce Development",
    desc: "Modern online stores with smooth checkout and payments.",
    deliverable: "2–4 weeks",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 overflow-hidden ">



      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="mb-14">
          {/* Section header */}
     
   <div className="flex items-center gap-4 mb-14">
          <span className="section-label">What I Offer </span>
          <div className="flex-1 max-w-xs h-px bg-ink/10" />
        </div>
         <div className="mb-16">
  <h2
    className="font-sans font-bold text-black"
    style={{
      fontSize: "clamp(2.2rem,4.5vw,4rem)",
      letterSpacing: "-0.04em",
      lineHeight: "1.05",
    }}
  >
    Services built{" "}
    <br />
    <span className="italic font-normal text-black/50">
      around real needs
    </span>
  </h2>

  <p className="mt-6 max-w-xl text-black/50 leading-relaxed">
    Simple, fast and production-ready solutions — from idea to deployment.
  </p>
</div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`
                relative p-6 rounded-2xl border transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                ${s.highlight
                  ? "bg-black text-white border-black"
                  : "bg-white border-black/10"}
              `}
            >
              {/* badge */}
              <div className="text-xs mb-4 opacity-60">
                {s.deliverable}
              </div>

              {/* title */}
              <h3 className="text-lg font-semibold mb-3">
                {s.title}
              </h3>

              {/* desc */}
              <p className={`text-sm leading-relaxed ${
                s.highlight ? "text-white/70" : "text-black/60"
              }`}>
                {s.desc}
              </p>

              {/* hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top left, rgba(200,241,53,0.15), transparent 60%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}