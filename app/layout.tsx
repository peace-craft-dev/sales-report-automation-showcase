import type { Metadata } from "next";
import { Inter, Noto_Serif_JP, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Google Sheets 売上レポート自動化 | PeaceCraft 実例",
  description:
    "Google Sheets の売上データから月次レポートを自動生成し Slack 通知する Python ツール。手作業 2 時間が 5 秒に。PeaceCraft が実装する業務自動化の実例。",
  openGraph: {
    title: "Google Sheets 売上レポート自動化 | PeaceCraft 実例",
    description:
      "売上データの手作業集計を Python で完全自動化。手作業 2 時間が 5 秒に。",
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
      className={`${inter.variable} ${notoSerif.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
