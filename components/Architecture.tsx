"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, Cpu, Send, Database } from "lucide-react";

const flow = [
  {
    icon: FileSpreadsheet,
    label: "Google Sheets",
    sub: "売上明細データ",
    color: "sage",
  },
  {
    icon: Cpu,
    label: "Python スクリプト",
    sub: "pandas 集計 + 分析",
    color: "wood",
  },
  {
    icon: Database,
    label: "Google Sheets",
    sub: "ダッシュボード出力",
    color: "sage",
  },
  {
    icon: Send,
    label: "Slack 通知",
    sub: "サマリーを自動配信",
    color: "wood",
  },
];

export default function Architecture() {
  return (
    <section className="relative py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] text-wood-600 uppercase mb-3">
            Architecture
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            シンプルで <span className="text-gradient">堅牢</span> な構成
          </h2>
        </div>

        <div className="border-warm p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 items-center">
            {flow.map((f, i) => (
              <div key={i} className="contents">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 ${
                      f.color === "sage"
                        ? "bg-sage-50 border border-sage-200"
                        : "bg-wood-50 border border-wood-200"
                    }`}
                  >
                    <f.icon
                      className={`w-6 h-6 ${
                        f.color === "sage" ? "text-sage-600" : "text-wood-600"
                      }`}
                    />
                  </div>
                  <div className="text-sm font-semibold text-ink mb-0.5">
                    {f.label}
                  </div>
                  <div className="text-xs text-ink-muted">{f.sub}</div>
                </motion.div>

                {i < flow.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <svg
                      width="40"
                      height="12"
                      viewBox="0 0 40 12"
                      className="text-border-strong"
                    >
                      <line
                        x1="0"
                        y1="6"
                        x2="32"
                        y2="6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="2 3"
                      />
                      <polygon
                        points="32,2 40,6 32,10"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <div className="text-xs tracking-[0.2em] text-wood-600 uppercase mb-3 text-center font-medium">
              実行タイミング
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-center">
              <div className="bg-bg-warm rounded-lg px-4 py-3">
                <div className="font-medium text-ink mb-1">手動実行</div>
                <div className="text-xs text-ink-soft">必要なときに 1 コマンド</div>
              </div>
              <div className="bg-bg-warm rounded-lg px-4 py-3">
                <div className="font-medium text-ink mb-1">cron 定期実行</div>
                <div className="text-xs text-ink-soft">毎月 1 日 朝 9 時など</div>
              </div>
              <div className="bg-bg-warm rounded-lg px-4 py-3">
                <div className="font-medium text-ink mb-1">GitHub Actions</div>
                <div className="text-xs text-ink-soft">クラウドで完全無人運用</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
