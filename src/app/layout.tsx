import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GeekSalon就活サポート | 28卒向け・完全無料",
  description:
    "受講生経験を人生を決める就活に。自己分析から企業紹介・選考対策まで伴走。月1回以上の面談＋チャット無制限。GeekSalon卒業生限定・28卒・完全無料。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={noto.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
