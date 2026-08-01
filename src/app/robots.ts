/**
 * 접근 권한 규칙
 */

import type { MetadataRoute } from "next";
import { siteUrl } from "@/shared";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // 모든 봇에게
      allow: "/", // 전부 크롤링 허용
    },
    sitemap: `${siteUrl}/sitemap.xml`, // 사이트 지도 -> sitemap.ts가 생성한 sitemap.xml을 알려줌
    host: siteUrl,
  };
}
