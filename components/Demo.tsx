"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Bell, TrendingUp } from "lucide-react";

const monthly = [
  { month: "1月", sales: 1820 },
  { month: "2月", sales: 1540 },
  { month: "3月", sales: 2310 },
  { month: "4月", sales: 2680 },
  { month: "5月", sales: 2450 },
  { month: "6月", sales: 3120 },
];

const categories = [
  { name: "サブスク", value: 4200 },
  { name: "単品", value: 2100 },
  { name: "コンサル", value: 1450 },
  { name: "その他", value: 580 },
];

const COLORS = ["#5a7d6b", "#b8946a", "#92b29f", "#d8bb87"];

const rawData = [
  ["日付", "商品名", "カテゴリ", "数量", "単価", "売上"],
  ["2026-06-01", "Pro Plan 月額", "サブスク", 12, 9800, 117600],
  ["2026-06-01", "コンサル 90分", "コンサル", 1, 35000, 35000],
  ["2026-06-02", "Standard Plan", "サブスク", 8, 4800, 38400],
  ["2026-06-02", "単発レポート作成", "単品", 3, 25000, 75000],
  ["2026-06-03", "Pro Plan 月額", "サブスク", 4, 9800, 39200],
  ["...", "...", "...", "...", "...", "..."],
];

export default function Demo() {
  return (
    <section id="demo" className="relative py-20 md:py-28 px-6 bg-bg-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.2em] text-wood-600 uppercase mb-3">
            Demo Output
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-3">
            実際の出力イメージ
          </h2>
          <p className="text-ink-soft max-w-2xl mx-auto">
            ↓ 左の生データから、右のレポート + Slack 通知までを完全自動生成します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input: Raw Data */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="border-warm p-5 md:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs tracking-[0.18em] uppercase text-wood-600 font-medium">
                INPUT / Google Sheets
              </div>
              <span className="text-[10px] text-ink-muted font-mono">
                sales_raw.xlsx
              </span>
            </div>
            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-sage-50">
                    {rawData[0].map((h, i) => (
                      <th
                        key={i}
                        className="px-2 py-2 text-left border border-border text-sage-800 font-medium"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rawData.slice(1).map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-bg-warm"}>
                      {row.map((c, j) => (
                        <td
                          key={j}
                          className="px-2 py-2 border border-border text-ink-soft whitespace-nowrap"
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-ink-muted mt-4">
              ※ 普段使っている Sheets / Excel をそのまま入力データに使えます。フォーマット指定は要件定義時にすり合わせ。
            </p>
          </motion.div>

          {/* Output: Charts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-warm p-5 md:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs tracking-[0.18em] uppercase text-sage-700 font-medium">
                OUTPUT / 自動生成レポート
              </div>
              <span className="text-[10px] text-ink-muted font-mono">
                report.pdf / Sheets
              </span>
            </div>

            <div className="mb-5">
              <div className="flex items-center gap-2 text-sm font-medium text-ink mb-2">
                <TrendingUp className="w-4 h-4 text-sage-600" />
                月次売上推移
              </div>
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthly}>
                    <CartesianGrid stroke="#e5e0d6" strokeDasharray="3 3" />
                    <XAxis
                      dataKey="month"
                      stroke="#9aa19e"
                      style={{ fontSize: "11px" }}
                    />
                    <YAxis
                      stroke="#9aa19e"
                      style={{ fontSize: "11px" }}
                      tickFormatter={(v) => `${v / 1000}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#ffffff",
                        border: "1px solid #e5e0d6",
                        borderRadius: 8,
                        fontSize: 12,
                      }}
                    />
                    <Bar dataKey="sales" fill="#5a7d6b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-ink mb-2">
                カテゴリ別売上構成
              </div>
              <div className="flex items-center gap-4">
                <div className="h-32 w-32 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categories}
                        dataKey="value"
                        innerRadius={28}
                        outerRadius={56}
                        paddingAngle={2}
                      >
                        {categories.map((_, i) => (
                          <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <ul className="flex-1 space-y-1.5 text-xs">
                  {categories.map((c, i) => (
                    <li key={c.name} className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-sm"
                        style={{ background: COLORS[i] }}
                      />
                      <span className="text-ink-soft">{c.name}</span>
                      <span className="ml-auto font-mono text-ink">
                        ¥{c.value.toLocaleString()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slack notification mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 border-warm p-5 md:p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs tracking-[0.18em] uppercase text-sage-700 font-medium flex items-center gap-2">
              <Bell className="w-3.5 h-3.5" />
              Slack 通知（自動配信）
            </div>
            <span className="text-[10px] text-ink-muted font-mono">
              #sales-report
            </span>
          </div>
          <div className="bg-bg-warm rounded-lg p-4 text-sm font-mono">
            <p className="text-ink mb-1">
              <span className="font-semibold">📊 6月度 売上レポート</span>
            </p>
            <p className="text-ink-soft text-xs mb-3">本日 09:00 自動生成</p>
            <ul className="space-y-1 text-xs text-ink-soft">
              <li>• 売上合計: <span className="text-sage-700 font-semibold">¥3,120,000</span> (前月比 +27.3%)</li>
              <li>• 平均日次売上: ¥104,000</li>
              <li>• トップカテゴリ: サブスク (¥4,200,000 / 51.5%)</li>
              <li>• 注文件数: 318 件</li>
            </ul>
            <p className="text-xs text-wood-600 mt-3">→ 詳細レポート: <span className="underline">https://docs.google.com/sheets/...</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
