export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-sage-gradient" />
          <span className="font-display font-semibold text-ink">
            PeaceCraft
          </span>
          <span className="text-xs text-ink-muted">
            / 売上レポート自動化 実例
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://corporate-lp-nextjs.vercel.app/"
            className="text-ink-soft hover:text-sage-700 transition-colors"
          >
            PeaceCraft TOP
          </a>
          <a
            href="https://corporate-lp-nextjs.vercel.app/#showcase"
            className="text-ink-soft hover:text-sage-700 transition-colors"
          >
            他の実例
          </a>
          <a
            href="https://corporate-lp-nextjs.vercel.app/#contact"
            className="text-ink-soft hover:text-sage-700 transition-colors"
          >
            無料相談
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-ink-muted mt-6">
        © 2026 PeaceCraft. Showcase #1 — Built with Next.js · Tailwind · Recharts.
      </p>
    </footer>
  );
}
