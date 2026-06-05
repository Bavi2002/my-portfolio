export default function Contact() {
  return (
    <section id="contact" className="contact-bg py-40 px-6">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex items-center gap-4 mb-16 sr">
          <span className="section-label text-paper/70">Contact</span>
          <div className="flex-1 max-w-xs h-px bg-paper/40" />
        </div>

        {/* Giant CTA text */}
        <div className="sr">
          <h2
            className="font-sans font-bold text-paper leading-[0.92] mb-10"
            style={{ fontSize: "clamp(3rem,9vw,8rem)", letterSpacing: "-0.05em" }}
          >
            Got a project<br />
            in <span style={{ color: "var(--lime)" }}>mind?</span>
          </h2>
        </div>

        <div className="sr d2 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          {/* Left */}
          <div>
            <p className="font-body text-xl text-paper/50 leading-relaxed mb-10 max-w-md">
              Open to frontend roles, full-stack collaborations, and interesting projects.
              I typically respond within 24 hours.
            </p>

            <div className="flex flex-wrap gap-3">

              {/* Email */}
              <a
                href="https://wa.me/94774840116"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 bg-lime text-ink font-sans font-bold text-sm rounded-full hover:scale-105 transition-transform duration-200"
              >
                WhatsApp Me
              </a>



              <a
                href="mailto:sivanesanbavithran16@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-4 border border-paper/20 text-paper font-sans font-semibold text-sm rounded-full hover:border-paper/50 transition-all duration-200"
              >
                Mail Me
              </a>

            </div>
          </div>

          {/* Right — contact info cards */}
          <div className="flex flex-col gap-3">
            {[
              { label: "Email", value: "sivanesanbavithran16@gmail.com", href: "mailto:sivanesanbavithran16@gmail.com" },
              { label: "Phone", value: "+94 77 4840 116", href: "tel:+94774840116" },
              { label: "Location", value: "Jaffna, Sri Lanka", href: null },
              { label: "LinkedIn", value: "Bavithran Sivanesan", href: "https://linkedin.com/in/bavithran-sivanesan16" },
            ].map(item => (
              <div
                key={item.label}
                className="flex items-center justify-between px-5 py-4 rounded-xl border border-paper/8 hover:border-paper/20 transition-colors duration-200 group"
              >
                <span className="font-mono text-xs text-paper/30">{item.label}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-body text-sm text-paper/60 group-hover:text-paper transition-colors duration-200 hl"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="font-body text-sm text-paper/60">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom socials */}
        <div className="sr d4 mt-20 pt-8 border-t border-paper/8 flex items-center justify-between flex-wrap gap-4">
          <span className="font-sans font-extrabold text-2xl text-paper/70" style={{ letterSpacing: "-0.04em" }}>
            BAVI <span style={{ color: "var(--lime)" }}>.</span>
          </span>
          <div className="flex gap-6">
            {[
              { label: "GitHub", href: "https://github.com/Bavi2002" },
              { label: "LinkedIn", href: "https://linkedin.com/in/bavithran-sivanesan16" },
              { label: "Portfolio", href: "https://bavithran.dev" },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank" rel="noopener noreferrer"
                className="font-body text-sm text-paper/70 hover:text-paper/70 transition-colors duration-200 hl"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
