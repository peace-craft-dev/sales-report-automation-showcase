export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-gradient" />
          <span className="font-semibold text-sm text-ink">PeaceCraft</span>
          <span className="text-xs text-ink-muted">
            / Sales Report Automation · Live Demo
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <a
            href="https://corporate-lp-nextjs.vercel.app/"
            className="text-ink-soft hover:text-brand-600 transition-colors"
          >
            TOP
          </a>
          <a
            href="https://corporate-lp-nextjs.vercel.app/#showcase"
            className="text-ink-soft hover:text-brand-600 transition-colors"
          >
            他の実例
          </a>
          <a
            href="https://corporate-lp-nextjs.vercel.app/#contact"
            className="text-ink-soft hover:text-brand-600 transition-colors"
          >
            無料相談
          </a>
        </div>
      </div>
      <p className="text-center text-[11px] text-ink-muted mt-5">
        © 2026 PeaceCraft. Built with Next.js · React · Recharts · Framer Motion.
      </p>
    </footer>
  );
}
