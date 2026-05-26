"use client";

import { motion } from "framer-motion";
import { Database, Code2, Bell } from "lucide-react";

const steps = [
  {
    icon: Database,
    label: "入力データ",
    body: "Google Sheets / Excel / CSV / DB の売上明細",
    sample: "オフィスで使い慣れた表をそのまま",
  },
  {
    icon: Code2,
    label: "Python 集計",
    body: "pandas で日次・月次・カテゴリ別を一括集計",
    sample: "全コード人間レビュー済み",
  },
  {
    icon: Bell,
    label: "通知 / 出力",
    body: "Slack / Email / Sheets ダッシュボードに自動配信",
    sample: "毎月 1 日朝 9 時など cron で完全無人",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 px-6 bg-white border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="text-[11px] tracking-[0.18em] uppercase text-brand-700 font-semibold mb-2">
            How it works
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-ink">
            上のデモを、本番環境で動かす場合
          </h2>
          <p className="text-sm md:text-base text-ink-soft mt-2 max-w-2xl">
            このページで体験しているのは Web 版の擬似デモです。実際には Python スクリプトとして納品し、御社のデータ・スケジュール・通知先に合わせてカスタムします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="panel panel-hover p-5"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-brand-600" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] tracking-wider uppercase text-ink-muted mb-1">
                    STEP {i + 1}
                  </div>
                  <h3 className="font-semibold text-sm text-ink mb-1">{s.label}</h3>
                  <p className="text-xs text-ink-soft leading-relaxed mb-2">
                    {s.body}
                  </p>
                  <p className="text-[11px] text-brand-700 font-medium">
                    {s.sample}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
