"use client";

import { motion } from "framer-motion";
import { FileCode, BookOpen, ShieldCheck, GitBranch } from "lucide-react";

const items = [
  {
    icon: FileCode,
    title: "Python ソースコード一式",
    body: "GitHub プライベートリポジトリで納品。クリーンコード・型ヒント完備。",
  },
  {
    icon: BookOpen,
    title: "README + 操作マニュアル",
    body: "セットアップ・実行・カスタム方法を画面付きで解説。",
  },
  {
    icon: ShieldCheck,
    title: "セキュリティ監査レポート",
    body: "OWASP Top 10 準拠の監査結果と対応一覧。",
  },
  {
    icon: GitBranch,
    title: "テストコード + CI 設定",
    body: "pytest によるテスト + GitHub Actions の自動実行設定。",
  },
];

export default function Deliverables() {
  return (
    <section className="relative py-16 px-6 bg-bg-dim border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <div className="text-[11px] tracking-[0.18em] uppercase text-brand-700 font-semibold mb-2">
            Deliverables
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-ink">
            ご依頼いただいた場合の納品物
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="panel p-4 flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-md bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                <it.icon className="w-4.5 h-4.5 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-ink mb-1">
                  {it.title}
                </h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  {it.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
