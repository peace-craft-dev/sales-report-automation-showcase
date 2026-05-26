"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 md:py-28 px-6">
      <div className="absolute inset-0 bg-radial-warm opacity-80 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl mx-auto border-warm p-8 md:p-12 text-center shadow-glow"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-100 text-xs text-sage-700 mb-6 font-medium">
          ¥50,000 〜 / 納期 1〜2 週間
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
          この実例と
          <span className="text-gradient">同じものを作る</span>
        </h2>
        <p className="text-ink-soft mb-8 max-w-xl mx-auto">
          御社のデータ構造に合わせてカスタム実装します。
          まずは 30 分の無料ヒアリングで、できること・概算費用をお伝えします。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://corporate-lp-nextjs.vercel.app/#contact"
            className="inline-flex items-center justify-center gap-2 bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-medium shadow-glow transition-colors"
          >
            無料相談を申し込む
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="mailto:peace.craft.dev@gmail.com?subject=PeaceCraft%20%E5%A3%B2%E4%B8%8A%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E8%87%AA%E5%8B%95%E5%8C%96%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6"
            className="inline-flex items-center justify-center gap-2 bg-white border border-border hover:border-sage-300 text-ink px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Mail className="w-4 h-4 text-wood-500" />
            メールで相談する
          </a>
        </div>
      </motion.div>
    </section>
  );
}
