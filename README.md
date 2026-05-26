# Showcase #1 — Google Sheets 売上レポート自動化

> PeaceCraft のサンプル実例ショーケースサイト

業務自動化スクリプト（Python + Google Sheets API + pandas + Slack Webhook）の **実例紹介サイト** です。

## 公開 URL

https://sales-report-automation-showcase.vercel.app/

## このサイトの目的

PeaceCraft が請け負う「業務自動化スクリプト」案件で、実際にどんな出力が得られるかを **動くデモ + ビジュアル** で示します。元のソースコードリポジトリは別途公開: [sales-report-automation](https://github.com/peace-craft-dev/sales-report-automation)

## セクション構成

1. **Hero** — Before/After 比較（2 時間 → 5 秒）
2. **Use Cases** — 4 つの典型ユースケース
3. **Demo Output** — 生データ → グラフ → Slack 通知の自動生成イメージ（Recharts で実描画）
4. **Architecture** — 構成図 + 3 つの実行タイミング
5. **Features** — 標準で含まれる 8 機能
6. **CTA** — 無料相談 / メール相談

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion（アニメーション）
- Recharts（グラフ描画）
- lucide-react（アイコン）

## ローカル起動

```bash
npm install
npm run dev
# → http://localhost:3000
```

## デプロイ

Vercel に GitHub 連携で自動デプロイ。Hobby (Free) プランで稼働。

---

**PeaceCraft** — AI Native Development で、あなたの業務に平穏を。
