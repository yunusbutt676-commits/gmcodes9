import type { Metadata } from "next";
import Services from "@/components/Services";
import ChatAssistant from "@/components/ChatAssistant";

const title = "Full Stack Web Development, SEO/GEO/AEO, AI & Digital Services";

const description =
  "Explore GmCodes9 services by Ghulam Mustafa: full-stack web development, SEO/GEO/AEO, entity optimization, AI/ML, e-commerce, CRM, dashboards and digital marketing.";

const socialDescription =
  "Full-stack development, SEO/GEO/AEO, entity optimization, AI integrations, e-commerce, business systems, SMM, Meta Ads and Google Ads.";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical: "https://gmcodes9.com/services",
  },

  openGraph: {
    type: "website",
    url: "https://gmcodes9.com/services",
    title: `${title} | GmCodes9`,
    description: socialDescription,
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: "https://gmcodes9.com/og.png",
        width: 1200,
        height: 628,
        alt: "GmCodes9 — Web Development, SEO/GEO/AEO, AI & Digital Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${title} | GmCodes9`,
    description: socialDescription,
    images: [
      {
        url: "https://gmcodes9.com/og.png",
        alt: "GmCodes9 — Web Development, SEO/GEO/AEO, AI & Digital Services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <ChatAssistant />
    </>
  );
}