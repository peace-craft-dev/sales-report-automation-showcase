"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 px-6 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto bg-indigo-gradient rounded-2xl p-8 md:p-12 text-white shadow-elevated overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-cool bg-grid-32 opacity-10 pointer-events-none" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-5">
            ¥50,000 〜 / 納期 1〜2 週間
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-3">
            あなたのデータで、同じことができます。
          </h2>
          <p className="text-white/85 mb-7 max-w-xl text-sm md:text-base">
            御社のスプレッドシート構造に合わせて、グラフ・通知先・スケジュール・出力形式をカスタムします。まずは 30 分の無料ヒアリングから。
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
            <a
              href="https://corporate-lp-nextjs.vercel.app/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-bg-dim text-brand-700 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              ご相談はこちら（3 サイト経由）
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-start gap-2 text-xs text-white/70 leading-relaxed border-t border-white/15 pt-4">
            <Shield className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span>
              ご相談はランサーズ・ココナラ・CrowdWorks のいずれかでお受けします。
              本人確認済・2 段階認証有効で安全に運用しています。
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
