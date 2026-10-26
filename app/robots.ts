import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gmcodes9.com/sitemap.xml",
    host: "https://gmcodes9.com",
  };
}