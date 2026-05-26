"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    title: "Google Sheets API 連携",
    body: "サービスアカウント認証で安全にデータ取得。複数シート対応。",
  },
  {
    title: "月次・週次・カテゴリ別集計",
    body: "pandas で任意の粒度で集計。フィルター条件もカスタム可能。",
  },
  {
    title: "前月比・前年同月比 自動算出",
    body: "増減率・差分を計算してダッシュボードに自動反映。",
  },
  {
    title: "出力フォーマット 3 種",
    body: "Sheets ダッシュボード / Markdown / PDF（オプション）を選択可。",
  },
  {
    title: "Slack Webhook 通知",
    body: "サマリーをチャンネルに自動配信。閾値ベースのアラートも設定可。",
  },
  {
    title: "定期実行対応",
    body: "cron / GitHub Actions / Cloud Functions のいずれかで自動実行。",
  },
  {
    title: "セキュリティ準拠",
    body: "API キー・認証情報は環境変数管理。OWASP Top 10 監査済み。",
  },
  {
    title: "テスト・ドキュメント完備",
    body: "pytest による集計ロジック検証、README + 操作マニュアル付き。",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] text-wood-600 uppercase mb-3">
            Features
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink">
            標準で含まれる <span className="text-gradient">8 つの機能</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border-warm p-4 md:p-5 flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-sage-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-sm text-ink mb-1">
                  {f.title}
                </h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  {f.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
