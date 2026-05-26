"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, Activity } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="https://corporate-lp-nextjs.vercel.app/"
          className="flex items-center gap-3 group"
        >
          <ArrowLeft className="w-4 h-4 text-ink-muted group-hover:text-brand-600 transition-colors" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-indigo-gradient flex items-center justify-center">
              <Activity className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-sm text-ink tracking-tight">
              PeaceCraft
            </span>
            <span className="text-xs text-ink-muted">/ Sales Report Automation</span>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="#live-demo"
            className="text-sm text-ink-soft hover:text-brand-600 transition-colors hidden sm:inline"
          >
            ライブデモ
          </a>
          <a
            href="https://corporate-lp-nextjs.vercel.app/#contact"
            className="bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-3.5 py-1.5 rounded-md transition-colors"
          >
            ¥50,000〜 で依頼
          </a>
        </div>
      </div>
    </header>
  );
}
