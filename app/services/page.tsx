import type { Metadata } from "next";
import Services from "@/components/Services";

const SITE_URL = "https://www.gmcodes9.com";

const title =
  "Web Development, AI, SEO & Digital Marketing Services | Lahore & Worldwide | GmCodes9";

const description =
  "GmCodes9 provides full-stack web development, Next.js, React, Node.js, Python, Laravel, AI and LLM integrations, SEO, GEO, AEO, entity SEO, and digital marketing services in Lahore, Pakistan and for international clients.";

const socialDescription =
  "Full-stack web development, AI and LLM integrations, SEO, GEO, AEO, entity SEO and digital marketing services for Lahore businesses and international clients.";

export const metadata: Metadata = {
  title,

  description,

  alternates: {
    canonical: `${SITE_URL}/services`,
  },

  openGraph: {
    type: "website",
    url: `${SITE_URL}/services`,
    title: `${title} | GmCodes9`,
    description: socialDescription,
    siteName: "GmCodes9",
    locale: "en_US",

    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 628,
        alt:
          "GmCodes9 — Web Development, AI, SEO, GEO, AEO & Digital Marketing Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | GmCodes9`,
    description: socialDescription,
    images: [`${SITE_URL}/og.png`],
  },
};

export default function ServicesPage() {
  return <Services />;
}