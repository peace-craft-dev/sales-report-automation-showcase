"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-cool bg-grid-32 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,#000_50%,transparent_100%)] opacity-50" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs text-brand-700 font-medium mb-5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          PeaceCraft Live Demo · Showcase #1
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-4 text-ink"
        >
          売上データを編集 →
          <br className="hidden sm:inline" />
          <span className="text-indigo-gradient">1 クリックで月次レポート。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-base md:text-lg text-ink-soft max-w-2xl leading-relaxed mb-6"
        >
          下のテーブルの売上を自由に編集してから「レポート生成」を押してください。
          PeaceCraft が実装する自動レポート生成スクリプトの動きを、Web 上で再現したライブデモです。
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 text-xs text-ink-muted"
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          スクロールしてデモを体験
        </motion.div>
      </div>
    </section>
  );
}
