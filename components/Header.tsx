"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

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
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass-warm border-b border-border" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="https://corporate-lp-nextjs.vercel.app/"
          className="flex items-center gap-2 group"
        >
          <ArrowLeft className="w-4 h-4 text-ink-muted group-hover:text-sage-700 transition-colors" />
          <div className="w-7 h-7 rounded-lg bg-sage-gradient" />
          <span className="text-ink font-semibold tracking-tight">
            PeaceCraft
          </span>
        </a>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs tracking-[0.2em] text-wood-600 uppercase font-medium">
            Showcase #1
          </span>
          <a
            href="https://corporate-lp-nextjs.vercel.app/#contact"
            className="bg-sage-600 hover:bg-sage-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-glow transition-colors"
          >
            同じものを作る
          </a>
        </div>

        <a
          href="https://corporate-lp-nextjs.vercel.app/#contact"
          className="md:hidden text-sm font-medium px-3 py-1.5 rounded-md bg-sage-600 text-white"
        >
          相談
        </a>
      </div>
    </header>
  );
}
