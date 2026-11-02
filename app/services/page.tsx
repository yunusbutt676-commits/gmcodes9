import type { Metadata } from "next";
import Services from "@/components/Services";
import ChatAssistant from "@/components/ChatAssistant";

const title = "Web Development, AI & SEO | Lahore & Worldwide";

const description =
  "GmCodes9 provides full-stack web development, Next.js applications, AI integrations and SEO/GEO/AEO services from Lahore for businesses worldwide.";

const socialDescription =
  "Full-stack web development, Next.js apps, AI integrations, SEO/GEO/AEO and digital marketing for Lahore businesses and international clients.";

export const metadata: Metadata = {
  title,
  description,

  alternates: {
    canonical: "https://www.gmcodes9.com/services",
  },

  openGraph: {
    type: "website",
    url: "https://www.gmcodes9.com/services",
    title: `${title} | GmCodes9`,
    description: socialDescription,
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: "https://www.gmcodes9.com/og.png",
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
        url: "https://www.gmcodes9.com/og.png",
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