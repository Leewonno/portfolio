import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/features";

const siteUrl = "https://leewonno.vercel.app";

const title = "WONNO LEE";
const description =
  "흐름이 끊기지 않는 웹을 개발합니다. 복잡한 업무를 사용자가 헤매지 않는 화면으로 풀어내는 프론트엔드 개발자 이원노의 포트폴리오입니다.";
const shortDescription = "흐름이 끊기지 않는 웹을 개발합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | 이원노",
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "이원노 포트폴리오",
    title,
    description: shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shortDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-0QJXQ9B0H9" />
      )}
    </html>
  );
}
