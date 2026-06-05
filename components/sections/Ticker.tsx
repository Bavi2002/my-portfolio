const items = ["React.js","Next.js","TypeScript","Python","Tailwind CSS","Node.js","MongoDB","AWS","Docker","Figma","Prisma","OpenAI API","REST APIs","Git","Vercel","Firebase"];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap py-5 border-y border-ink/10 overflow-hidden bg-warm my-0">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 pr-6 font-mono text-xs text-muted uppercase tracking-[0.18em]">
            <span className="w-1 h-1 rounded-full bg-lime flex-shrink-0 border border-ink/20"/>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
