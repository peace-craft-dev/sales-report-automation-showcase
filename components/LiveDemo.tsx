"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  LineChart,
  Line,
} from "recharts";
import {
  Play,
  Plus,
  Trash2,
  Bell,
  Check,
  RotateCcw,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Row = {
  id: number;
  date: string;
  product: string;
  category: string;
  qty: number;
  unitPrice: number;
};

const CATEGORIES = ["サブスク", "単品販売", "コンサル", "オプション"];
const COLORS = ["#1e3a8a", "#2563eb", "#3b82f6", "#93c5fd"];

const INITIAL_DATA: Row[] = [
  { id: 1, date: "2026-06-01", product: "Pro Plan 月額", category: "サブスク", qty: 12, unitPrice: 9800 },
  { id: 2, date: "2026-06-01", product: "コンサル 90分", category: "コンサル", qty: 1, unitPrice: 35000 },
  { id: 3, date: "2026-06-02", product: "Standard Plan", category: "サブスク", qty: 8, unitPrice: 4800 },
  { id: 4, date: "2026-06-02", product: "単発レポート作成", category: "単品販売", qty: 3, unitPrice: 25000 },
  { id: 5, date: "2026-06-03", product: "Pro Plan 月額", category: "サブスク", qty: 4, unitPrice: 9800 },
  { id: 6, date: "2026-06-04", product: "API 接続オプション", category: "オプション", qty: 2, unitPrice: 5000 },
  { id: 7, date: "2026-06-05", product: "Standard Plan", category: "サブスク", qty: 6, unitPrice: 4800 },
  { id: 8, date: "2026-06-05", product: "コンサル 60分", category: "コンサル", qty: 2, unitPrice: 20000 },
];

export default function LiveDemo() {
  const [rows, setRows] = useState<Row[]>(INITIAL_DATA);
  const [generated, setGenerated] = useState(false);
  const [running, setRunning] = useState(false);
  const [slackShown, setSlackShown] = useState(false);

  const handleEdit = (id: number, key: keyof Row, value: string) => {
    setRows((rs) =>
      rs.map((r) =>
        r.id === id
          ? {
              ...r,
              [key]: key === "qty" || key === "unitPrice" ? Number(value) || 0 : value,
            }
          : r
      )
    );
    setGenerated(false);
    setSlackShown(false);
  };

  const handleAdd = () => {
    const nextId = Math.max(0, ...rows.map((r) => r.id)) + 1;
    setRows([
      ...rows,
      { id: nextId, date: "2026-06-06", product: "新商品", category: "単品販売", qty: 1, unitPrice: 10000 },
    ]);
    setGenerated(false);
  };

  const handleDelete = (id: number) => {
    setRows(rows.filter((r) => r.id !== id));
    setGenerated(false);
  };

  const handleReset = () => {
    setRows(INITIAL_DATA);
    setGenerated(false);
    setSlackShown(false);
  };

  const handleGenerate = () => {
    setRunning(true);
    setSlackShown(false);
    setTimeout(() => {
      setRunning(false);
      setGenerated(true);
      setTimeout(() => setSlackShown(true), 400);
    }, 700);
  };

  // ── Aggregations ──
  const totals = useMemo(() => {
    const sales = rows.reduce((sum, r) => sum + r.qty * r.unitPrice, 0);
    const orders = rows.length;
    const avg = orders > 0 ? Math.round(sales / orders) : 0;
    return { sales, orders, avg };
  }, [rows]);

  const byCategory = useMemo(() => {
    const map = new Map<string, number>();
    rows.forEach((r) => {
      const v = (map.get(r.category) || 0) + r.qty * r.unitPrice;
      map.set(r.category, v);
    });
    return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
  }, [rows]);

  const byDate = useMemo(() => {
    const map = new Map<string, number>();
    rows.forEach((r) => {
      const v = (map.get(r.date) || 0) + r.qty * r.unitPrice;
      map.set(r.date, v);
    });
    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, sales]) => ({ date: date.slice(5), sales }));
  }, [rows]);

  const topCategory = useMemo(() => {
    return [...byCategory].sort((a, b) => b.value - a.value)[0];
  }, [byCategory]);

  return (
    <section id="live-demo" className="relative py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* ──── Left: Editable Table ──── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 panel p-5 md:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[11px] tracking-[0.18em] uppercase text-brand-700 font-semibold mb-1">
                  Step 1 — Input
                </div>
                <h2 className="font-semibold text-lg text-ink">
                  売上明細を編集
                </h2>
                <p className="text-xs text-ink-muted mt-1">
                  数値・商品名はクリックして自由に変更できます
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAdd}
                  className="inline-flex items-center gap-1 text-xs text-brand-700 hover:text-brand-800 border border-brand-200 hover:bg-brand-50 px-2.5 py-1.5 rounded-md transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  行追加
                </button>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-ink-soft hover:text-ink border border-border hover:bg-bg-dim px-2.5 py-1.5 rounded-md transition-colors"
                  title="初期データに戻す"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  リセット
                </button>
              </div>
            </div>

            <div className="overflow-x-auto -mx-1 max-h-[420px] overflow-y-auto">
              <table className="w-full text-xs font-mono border-collapse">
                <thead className="sticky top-0 bg-bg-dim z-10">
                  <tr>
                    <th className="text-left p-2 border-b border-border text-ink-soft font-medium">日付</th>
                    <th className="text-left p-2 border-b border-border text-ink-soft font-medium">商品</th>
                    <th className="text-left p-2 border-b border-border text-ink-soft font-medium">カテゴリ</th>
                    <th className="text-right p-2 border-b border-border text-ink-soft font-medium">数量</th>
                    <th className="text-right p-2 border-b border-border text-ink-soft font-medium">単価</th>
                    <th className="text-right p-2 border-b border-border text-ink-soft font-medium">小計</th>
                    <th className="border-b border-border"></th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="group hover:bg-bg-dim">
                      <td className="p-1.5 border-b border-border">
                        <input
                          type="date"
                          value={r.date}
                          onChange={(e) => handleEdit(r.id, "date", e.target.value)}
                          className="input-base w-full text-xs font-mono"
                        />
                      </td>
                      <td className="p-1.5 border-b border-border">
                        <input
                          value={r.product}
                          onChange={(e) => handleEdit(r.id, "product", e.target.value)}
                          className="input-base w-full text-xs font-mono"
                        />
                      </td>
                      <td className="p-1.5 border-b border-border">
                        <select
                          value={r.category}
                          onChange={(e) => handleEdit(r.id, "category", e.target.value)}
                          className="input-base w-full text-xs font-mono"
                        >
                          {CATEGORIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="p-1.5 border-b border-border">
                        <input
                          type="number"
                          value={r.qty}
                          onChange={(e) => handleEdit(r.id, "qty", e.target.value)}
                          className="input-base w-16 text-right text-xs font-mono"
                          min={0}
                        />
                      </td>
                      <td className="p-1.5 border-b border-border">
                        <input
                          type="number"
                          value={r.unitPrice}
                          onChange={(e) => handleEdit(r.id, "unitPrice", e.target.value)}
                          className="input-base w-24 text-right text-xs font-mono"
                          min={0}
                          step={100}
                        />
                      </td>
                      <td className="p-1.5 border-b border-border text-right text-ink font-semibold">
                        ¥{(r.qty * r.unitPrice).toLocaleString()}
                      </td>
                      <td className="p-1.5 border-b border-border text-right w-8">
                        <button
                          onClick={() => handleDelete(r.id)}
                          className="text-ink-muted hover:text-danger opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="行を削除"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 pt-4 border-t border-border">
              <div className="text-sm">
                <span className="text-ink-muted">入力データ合計: </span>
                <span className="font-mono font-semibold text-ink">
                  {rows.length} 行 / ¥{totals.sales.toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleGenerate}
                disabled={running || rows.length === 0}
                className={cn(
                  "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all",
                  running
                    ? "bg-brand-700 text-white"
                    : "bg-brand-600 hover:bg-brand-700 text-white",
                  rows.length === 0 && "opacity-50 cursor-not-allowed"
                )}
              >
                {running ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="40 60"
                      />
                    </svg>
                    集計中...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    レポート生成（実行）
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* ──── Right: Output ──── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="panel p-5 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[11px] tracking-[0.18em] uppercase text-brand-700 font-semibold mb-1">
                    Step 2 — Output
                  </div>
                  <h2 className="font-semibold text-lg text-ink">
                    自動生成レポート
                  </h2>
                </div>
                {generated && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-success font-medium">
                    <Check className="w-3 h-3" />
                    生成完了
                  </span>
                )}
              </div>

              {!generated ? (
                <div className="bg-bg-dim border border-dashed border-border rounded-lg p-8 text-center text-sm text-ink-muted">
                  「レポート生成」ボタンを押すと、
                  <br />
                  ここに集計結果が表示されます
                </div>
              ) : (
                <AnimatePresence>
                  <motion.div
                    key="output"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* KPI */}
                    <div className="grid grid-cols-3 gap-2 mb-5">
                      <div className="bg-brand-50 border border-brand-100 rounded-md p-3">
                        <div className="text-[10px] text-brand-700 tracking-wider uppercase mb-0.5">
                          売上合計
                        </div>
                        <div className="font-mono font-bold text-base text-ink">
                          ¥{totals.sales.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-bg-dim border border-border rounded-md p-3">
                        <div className="text-[10px] text-ink-soft tracking-wider uppercase mb-0.5">
                          注文数
                        </div>
                        <div className="font-mono font-bold text-base text-ink">
                          {totals.orders}
                        </div>
                      </div>
                      <div className="bg-bg-dim border border-border rounded-md p-3">
                        <div className="text-[10px] text-ink-soft tracking-wider uppercase mb-0.5">
                          平均単価
                        </div>
                        <div className="font-mono font-bold text-base text-ink">
                          ¥{totals.avg.toLocaleString()}
                        </div>
                      </div>
                    </div>

                    {/* Line: by date */}
                    <div className="mb-5">
                      <div className="text-xs font-semibold text-ink mb-2">
                        日次売上推移
                      </div>
                      <div className="h-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={byDate}>
                            <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                            <XAxis dataKey="date" stroke="#94a3b8" style={{ fontSize: 10 }} />
                            <YAxis
                              stroke="#94a3b8"
                              style={{ fontSize: 10 }}
                              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                            />
                            <Tooltip
                              contentStyle={{
                                background: "#0f172a",
                                border: "none",
                                borderRadius: 6,
                                color: "#fff",
                                fontSize: 11,
                              }}
                              labelStyle={{ color: "#cbd5e1" }}
                              formatter={(v: number) => [`¥${v.toLocaleString()}`, "売上"]}
                            />
                            <Line
                              type="monotone"
                              dataKey="sales"
                              stroke="#2563eb"
                              strokeWidth={2}
                              dot={{ r: 3, fill: "#2563eb" }}
                              activeDot={{ r: 5 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Category breakdown */}
                    <div>
                      <div className="text-xs font-semibold text-ink mb-2">
                        カテゴリ別売上構成
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-28 w-28 shrink-0">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={byCategory}
                                dataKey="value"
                                innerRadius={26}
                                outerRadius={50}
                                paddingAngle={2}
                              >
                                {byCategory.map((_, i) => (
                                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <ul className="flex-1 space-y-1 text-xs">
                          {byCategory.map((c, i) => (
                            <li key={c.name} className="flex items-center gap-2">
                              <span
                                className="w-2.5 h-2.5 rounded-sm shrink-0"
                                style={{ background: COLORS[i % COLORS.length] }}
                              />
                              <span className="text-ink-soft truncate">{c.name}</span>
                              <span className="ml-auto font-mono text-ink font-semibold">
                                ¥{c.value.toLocaleString()}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Slack mock */}
            <AnimatePresence>
              {slackShown && generated && (
                <motion.div
                  initial={{ opacity: 0, x: 16, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 16, scale: 0.95 }}
                  transition={{ duration: 0.35, type: "spring" }}
                  className="panel p-4 md:p-5 border-l-4 border-l-brand-600"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-md bg-indigo-gradient flex items-center justify-center shrink-0">
                      <Bell className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="text-xs text-ink-muted">
                          <span className="font-semibold text-ink">PeaceCraft Bot</span>
                          {" · "}
                          <span className="font-mono">#sales-report</span>
                        </div>
                        <span className="text-[10px] text-ink-muted">いま</span>
                      </div>
                      <div className="text-sm font-semibold text-ink mb-1">
                        📊 売上レポートが生成されました
                      </div>
                      <ul className="text-xs text-ink-soft space-y-0.5">
                        <li>
                          • 売上合計:{" "}
                          <span className="font-mono font-semibold text-brand-700">
                            ¥{totals.sales.toLocaleString()}
                          </span>
                        </li>
                        <li>• 注文件数: {totals.orders} 件</li>
                        <li>
                          • トップカテゴリ:{" "}
                          <span className="font-semibold text-ink">{topCategory?.name}</span>{" "}
                          (¥{topCategory?.value.toLocaleString()})
                        </li>
                      </ul>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex items-center gap-1 text-xs text-brand-600 hover:text-brand-700 mt-2"
                      >
                        <Download className="w-3 h-3" />
                        詳細レポート (CSV)
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
