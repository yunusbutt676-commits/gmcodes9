import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gmcodes9.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-10-26",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2026-10-26",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}