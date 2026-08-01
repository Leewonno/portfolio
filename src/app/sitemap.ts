/**
 * 사이트에 존재하는 페이지 목록을 알려줌
 */

import type { MetadataRoute } from "next";
import { siteUrl } from "@/shared";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
