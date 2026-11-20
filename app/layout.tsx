import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatAssistant from "@/components/ChatAssistant";

const SITE_URL = "https://www.gmcodes9.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Ghulam Mustafa | Full Stack Engineer & Founder of GmCodes9",
    template: "%s | GmCodes9",
  },

  description:
    "GmCodes9 by Ghulam Mustafa provides full-stack web development, AI and LLM integrations, custom web applications, SEO, GEO, AEO, entity optimization, and digital marketing services from Lahore, Pakistan for local and international businesses.",

  keywords: [
    "GmCodes9",
    "Ghulam Mustafa",
    "Full Stack Engineer Lahore",
    "Full Stack Engineer Pakistan",
    "Web Development Lahore",
    "AI Development",
    "AI Integration",
    "LLM Integration",
    "Next.js Development",
    "React Development",
    "Node.js Development",
    "Python Development",
    "FastAPI Development",
    "Laravel Development",
    "SEO",
    "GEO",
    "AEO",
    "Entity SEO",
    "Digital Marketing",
  ],

  authors: [
    {
      name: "Ghulam Mustafa",
      url: SITE_URL,
    },
  ],

  creator: "Ghulam Mustafa",
  publisher: "GmCodes9",

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    title:
      "Ghulam Mustafa | Full Stack Engineer & Founder of GmCodes9",
    description:
      "Full-stack web development, AI and LLM integrations, custom web applications, SEO, GEO, AEO, entity optimization, and digital marketing by Ghulam Mustafa.",
    siteName: "GmCodes9",
    locale: "en_US",

    images: [
      {
        url: "/oggy.png",
        width: 1200,
        height: 628,
        alt:
          "Ghulam Mustafa | Full Stack Engineer & Founder of GmCodes9",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
        "Ghulam Mustafa | Full Stack Engineer & Founder of GmCodes9",

    description:
      "Full-stack engineering, AI/LLM integration, web development, SEO, GEO, AEO and digital marketing by Ghulam Mustafa.",

    images: ["/oggy.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <Footer />

        <ChatAssistant />
      </body>
    </html>
  );
}