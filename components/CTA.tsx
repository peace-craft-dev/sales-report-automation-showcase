"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

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
          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href="https://corporate-lp-nextjs.vercel.app/#contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-bg-dim text-brand-700 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              無料相談を申し込む
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:peace.craft.dev@gmail.com?subject=PeaceCraft%20%E5%A3%B2%E4%B8%8A%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E8%87%AA%E5%8B%95%E5%8C%96%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/30 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              メールで相談
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
