import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sales Report Automation｜PeaceCraft Live Demo",
  description:
    "売上明細を編集 → ボタン 1 つで月次レポート生成。PeaceCraft 製の業務自動化スクリプト実装をライブデモで体験。",
  openGraph: {
    title: "Sales Report Automation｜PeaceCraft Live Demo",
    description:
      "実際に売上データを編集してレポート生成を体験できるライブデモ。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
