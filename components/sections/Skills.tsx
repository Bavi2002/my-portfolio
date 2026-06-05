"use client";

export default function Skills() {
  const data = [
    {
      section: "frontend.engineering",
      items: [
        "React / Next.js",
        "TypeScript",
        "Tailwind CSS",
        "UI Architecture",
      ],
    },
    {
      section: "backend.systems",
      items: [
        "Node.js / Express",
        "REST APIs",
        "MongoDB",
        "Prisma ORM",
      ],
    },
    {
      section: "python.ai.engineering",
      items: [
        "Python Automation",
        "OpenAI API Integration",
        "AI Agents / Chatbots",
        "Data Processing Scripts",
      ],
    },
    {
      section: "cloud.infrastructure",
      items: [
        "AWS Lambda",
        "Docker",
        "CI/CD Basics",
        "System Design",
      ],
    },
  ];

  const left = data.slice(0, 2);
  const right = data.slice(2, 4);

  const Block = ({ block }: any) => (
    <div className="mb-6">
      <div className="text-ink mb-2 font-mono text-xs">
        <span className="text-lime">▶</span>{" "}
        <span className="opacity-70">{block.section}</span>
      </div>

      <div className="pl-5 flex flex-col gap-1 text-muted font-mono text-sm">
        {block.items.map((item: string) => (
          <div key={item} className="flex items-center gap-2">
            <span className="text-ink/30">•</span>
            <span className="hover:text-ink transition">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label">Engineering Stack</span>
          <div className="flex-1 h-px bg-ink/10" />
        </div>

 <div className="lg:col-span-4 mb-16">
            <div
              
              className="lg:sticky lg:top-28"
              
            >
              <h2
                className="font-sans font-bold text-ink"
                style={{
                  fontSize: "clamp(2rem,4vw,3.5rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: "1.05",
                }}
              >
                Full-stack {""}
                <span className="italic text-muted font-normal">
                  engineering mindset.
                </span>
              </h2>

           
            </div>
          </div>
        {/* GRID 2 LEFT + 2 RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-ink/10 bg-white overflow-hidden">

              <div className="flex items-center gap-2 px-5 py-3 border-b border-ink/10 bg-ink/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-mono text-muted">
                  frontend.backend.stack
                </span>
              </div>

              <div className="p-6">
                {left.map((block) => (
                  <Block key={block.section} block={block} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            <div className="rounded-2xl border border-ink/10 bg-white overflow-hidden">

              <div className="flex items-center gap-2 px-5 py-3 border-b border-ink/10 bg-ink/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-xs font-mono text-muted">
                  ai.cloud.stack
                </span>
              </div>

              <div className="p-6">
                {right.map((block) => (
                  <Block key={block.section} block={block} />
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}