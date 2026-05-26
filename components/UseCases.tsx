"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart, Briefcase, Bell } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    title: "月次売上レポート",
    body: "月初の売上レポート作成。手作業 2 時間が 5 秒に。",
  },
  {
    icon: BarChart,
    title: "経営会議用 KPI 集計",
    body: "前月比・前年同月比、店舗別・カテゴリ別を自動表組み。",
  },
  {
    icon: Briefcase,
    title: "営業日報の自動集計",
    body: "Sheets の入力データをそのまま日次集計 → 翌朝 Slack に通知。",
  },
  {
    icon: Bell,
    title: "アラート機能",
    body: "売上が目標を下回ったら Slack で即通知（閾値設定可）。",
  },
];

export default function UseCases() {
  return (
    <section className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] text-wood-600 uppercase mb-3">
            Use Cases
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            こんな業務に
            <span className="text-gradient"> 効きます</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-warm p-5 md:p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-sage-50 border border-sage-100 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-sage-600" />
              </div>
              <h3 className="font-semibold text-base text-ink mb-2">{c.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
