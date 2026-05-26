"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileSpreadsheet, Clock, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero-bg">
      <div className="absolute inset-0 bg-grid-warm bg-grid-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_50%,transparent_100%)] opacity-70" />
      <div className="absolute inset-0 bg-radial-warm" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-warm text-xs text-sage-700 mb-6"
        >
          <FileSpreadsheet className="w-3.5 h-3.5 text-wood-500" />
          Showcase #1 — 業務自動化スクリプト
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-ink"
        >
          売上データから
          <br />
          月次レポートを
          <span className="text-gradient"> 自動生成。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl text-ink-soft max-w-2xl mb-10 leading-relaxed"
        >
          Excel やスプレッドシートの売上を、毎月コピペで集計していませんか？
          このスクリプトが Python で
          <span className="text-ink font-medium">集計・グラフ化・Slack 通知</span>
          まで全自動でやります。
        </motion.p>

        {/* Before/After */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-3xl"
        >
          <div className="border-warm p-5 md:p-6 bg-bg-warm">
            <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-ink-muted mb-3 font-medium">
              <Clock className="w-3.5 h-3.5" /> BEFORE / 手作業
            </div>
            <div className="font-display text-2xl md:text-3xl font-semibold text-ink mb-1">
              2 時間
            </div>
            <p className="text-sm text-ink-soft">
              月末に Excel を開いて、ピボットテーブルで集計し、グラフを作って Slack に貼る
            </p>
          </div>
          <div className="border-warm p-5 md:p-6 bg-sage-50 border-sage-200">
            <div className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-sage-700 mb-3 font-medium">
              <Zap className="w-3.5 h-3.5" /> AFTER / 自動化後
            </div>
            <div className="font-display text-2xl md:text-3xl font-semibold text-sage-800 mb-1">
              5 秒
            </div>
            <p className="text-sm text-sage-800">
              スクリプト 1 つ実行（or cron で毎月 1 日朝 9 時に自動実行）
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="https://corporate-lp-nextjs.vercel.app/#contact"
            className="inline-flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-medium shadow-glow transition-colors"
          >
            同じものを作る（¥50,000〜）
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 bg-white border border-border hover:border-sage-300 text-ink px-6 py-3 rounded-lg font-medium transition-colors"
          >
            出力イメージを見る
          </a>
        </motion.div>
      </div>
    </section>
  );
}
