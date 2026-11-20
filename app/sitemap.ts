import type { MetadataRoute } from "next";

const baseUrl = "https://www.gmcodes9.com";
const lastModified = "2026-11-21";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Development services
    {
      url: `${baseUrl}/services/full-stack-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ecommerce-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/crm-dashboard-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/custom-web-app-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // AI
    {
      url: `${baseUrl}/services/ai-development`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // SEO / AI Search
    {
      url: `${baseUrl}/services/seo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/technical-seo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/local-seo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/international-seo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/geo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/aeo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/entity-seo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },

    // Digital Marketing
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/social-media-marketing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/google-ads`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/services/meta-ads`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}