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
      "Ghulam Mustafa | Full Stack Engineer",
    template: "%s | GmCodes9",
  },

  description:
    "Ghulam Mustafa is a Full Stack Engineer from Lahore, Pakistan specializing in Next.js, React, Node.js, Laravel, Python, FastAPI, REST APIs, AI/ML integrations, and scalable web applications.",

  keywords: [
    "Ghulam Mustafa",
    "GmCodes9",
    "Ghulam Mustafa Full Stack Engineer",
    "Full Stack Engineer Lahore",
    "Full Stack Developer Pakistan",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "FastAPI Developer",
    "Laravel Developer",
    "AI ML Developer",
    "AI Integration",
    "LLM Integration",
    "Web Application Developer",
    "Software Engineer Pakistan",
  ],

  authors: [
    {
      name: "Ghulam Mustafa",
      url: SITE_URL,
    },
  ],

  creator: "Ghulam Mustafa",
  publisher: "Ghulam Mustafa",

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
      "Ghulam Mustafa | Full Stack Engineer • Next.js • React • AI/ML",
    description:
      "Ghulam Mustafa — Full Stack Engineer specializing in Next.js, React, Node.js, Python, FastAPI, Laravel, AI/ML integrations, and modern web applications.",
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 628,
        alt: "Ghulam Mustafa — Full Stack Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ghulam Mustafa | Full Stack Engineer • Next.js • React • AI/ML",
    description:
      "Ghulam Mustafa — Full Stack Engineer specializing in Next.js, React, Node.js, Python, FastAPI, Laravel, and AI/ML integrations.",
    images: ["/og.png"],
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