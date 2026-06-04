"use client";
const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Landing Pages & Websites",
    desc: "Conversion-optimized, beautifully designed websites that turn visitors into paying customers. Pixel-perfect implementation from your design or mine.",
    deliverable: "In 5–10 days",
    highlight: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Web App Development",
    desc: "Full-featured dashboards, SaaS platforms, and management systems built with React & Next.js. Clean code, scalable architecture, fast delivery.",
    deliverable: "In 2–6 weeks",
    highlight: true,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    title: "API & Backend Integration",
    desc: "Connect your frontend to REST APIs, third-party services, payment gateways, OpenAI, and more. Smooth data flow, solid error handling.",
    deliverable: "In 3–7 days",
    highlight: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: "Figma to Code",
    desc: "Hand me your Figma file and get back pixel-perfect, responsive, production-ready code. I respect every spacing decision and design intention.",
    deliverable: "In 2–5 days",
    highlight: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: "Performance & SEO Optimization",
    desc: "Slow sites lose clients. I audit, optimize, and supercharge your existing website for Core Web Vitals, Lighthouse scores, and search visibility.",
    deliverable: "In 3–7 days",
    highlight: false,
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: "E-commerce Development",
    desc: "Beautiful online stores with smooth checkout, product pages, cart management, and payment integration that drive sales.",
    deliverable: "In 2–4 weeks",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad px-6" style={{background:"var(--snow)"}}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="sr flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="t-label mb-3" style={{color:"var(--gold)"}}>What I offer</div>
            <h2 className="t-heading" style={{fontSize:"clamp(2rem,4vw,3.2rem)",color:"var(--ink)"}}>
              Services Built<br/>
              <span style={{color:"var(--ash)",fontStyle:"italic",fontWeight:400}}>Around Your Goals</span>
            </h2>
          </div>
          <p className="t-body" style={{color:"var(--ash)",maxWidth:360,lineHeight:1.7}}>
            Whether you need a beautiful landing page or a full web application — I deliver quality work, on time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s,i)=>(
            <div
              key={s.title}
              className={`sr d${i%4+1} service-card ${s.highlight?"card-ink text-white":""}`}
              style={s.highlight?{background:"var(--ink)",borderColor:"transparent"}:{}}
            >
              {/* Icon */}
              <div className="mb-5" style={{color:s.highlight?"var(--gold)":"var(--forest)"}}>
                {s.icon}
              </div>

              <div className="pill mb-4" style={s.highlight?{background:"rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.5)",borderColor:"rgba(255,255,255,0.12)"}:{}}>
                {s.deliverable}
              </div>

              <h3 className="t-subhead mb-3" style={{fontSize:"1.15rem",color:s.highlight?"white":"var(--ink)"}}>
                {s.title}
              </h3>

              <p className="t-body" style={{fontSize:"0.9rem",color:s.highlight?"rgba(255,255,255,0.5)":"var(--ash)",lineHeight:1.75}}>
                {s.desc}
              </p>

              {s.highlight && (
                <div className="mt-5 flex items-center gap-2" style={{color:"var(--gold)"}}>
                  <span className="t-label">Most requested</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
