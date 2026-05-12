import type { Metadata } from "next";
import "@fontsource/pretendard/400.css";
import "@fontsource/pretendard/500.css";
import "@fontsource/pretendard/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "클린아너 | 믿을 수 있는 전문 청소 서비스",
  description: "클린아너는 가정, 사무실, 특수 청소 전문 업체입니다. 철저한 관리와 검증된 전문가로 깨끗하고 쾌적한 공간을 만들어 드립니다.",
  keywords: "청소업체, 전문청소, 가정청소, 사무실청소, 입주청소, 클린아너",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
