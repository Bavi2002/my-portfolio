export default function Footer() {
  return (
    <footer className="bg-ink border-t border-paper/5 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <p className="font-mono text-xs text-paper/20">
          © {new Date().getFullYear()} Bavithran Sivanesan. Designed & Built with obsession.
        </p>
        <a
          href="#"
          className="font-mono text-xs text-paper/20 hover:text-paper/50 transition-colors duration-200 flex items-center gap-1.5"
        >
          Back to top
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
