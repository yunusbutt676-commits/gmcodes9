import type { Metadata } from "next";
import Portfolio from "../components/Portfolio";

export const metadata: Metadata = {
  title:
     "Ghulam Mustafa | Full Stack Engineer & Founder of GmCodes9",
  description:
    "GmCodes9 by Ghulam Mustafa provides full-stack web development, AI/LLM integrations, custom web applications, SEO, GEO, AEO, entity optimization, and digital marketing services in Lahore, Pakistan and for international businesses.",
  keywords: [
    "GmCodes9",
    "Ghulam Mustafa",
    "Full Stack Engineer",
    "Full Stack Developer Lahore",
    "Web Development Lahore",
    "AI Development Lahore",
    "AI Integration",
    "LLM Integration",
    "React Development",
    "Next.js Development",
    "Node.js Development",
    "Python Development",
    "Laravel Development",
    "SEO Lahore",
    "Technical SEO",
    "GEO",
    "Generative Engine Optimization",
    "AEO",
    "Answer Engine Optimization",
    "Entity SEO",
    "Digital Marketing",
    "Google Ads",
    "Meta Ads",
    "International Web Development",
    "AI Development Services",
  ],
  alternates: {
    canonical: "https://www.gmcodes9.com/",
  },
  openGraph: {
    title:
       "Ghulam Mustafa | Full Stack Engineer & Founder of GmCodes9",
    description:
      "Full-stack web development, AI/LLM integrations, custom web applications, SEO, GEO, AEO, entity optimization, and digital marketing by Ghulam Mustafa in Lahore, Pakistan and for international businesses.",
    url: "https://www.gmcodes9.com/",
    siteName: "GmCodes9",
    type: "website",
    images: [
      {
        url: "https://www.gmcodes9.com/Images/omg.jpeg",
        width: 1200,
        height: 630,
        alt: "GmCodes9 - Ghulam Mustafa Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
       "Ghulam Mustafa | Full Stack Engineer & Founder of GmCodes9",
    description:
      "Full-stack development, AI/LLM integration, SEO, GEO, AEO, entity optimization and digital marketing by Ghulam Mustafa.",
    images: ["https://www.gmcodes9.com/Images/omg.jpeg"],
  },
};

const personSchema = {
  "@type": "Person",
  "@id": "https://www.gmcodes9.com/#person",
  name: "Ghulam Mustafa",
  alternateName: "GmCodes9",
  url: "https://www.gmcodes9.com/",
  image: "https://www.gmcodes9.com/Images/omg.jpeg",
  jobTitle: "Full Stack Engineer",
  description:
    "Ghulam Mustafa is a Full Stack Engineer and the founder of GmCodes9, specializing in modern web applications, AI/ML and LLM integrations, REST APIs, scalable backend systems, SEO, GEO, AEO, entity optimization, and digital solutions for local and international businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  knowsAbout: [
    "Full Stack Development",
    "Web Application Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "Django",
    "Flask",
    "FastAPI",
    "Laravel",
    "PHP",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Large Language Models",
    "LLM Integration",
    "AI Assistant Integration",
    "AI Chatbot Development",
    "AI Voice Applications",
    "Computer Vision",
    "E-commerce Development",
    "CRM Systems",
    "Dashboard Development",
    "SEO",
    "Technical SEO",
    "GEO",
    "Generative Engine Optimization",
    "AEO",
    "Answer Engine Optimization",
    "Entity SEO",
    "Entity Optimization",
    "Digital Marketing",
    "Social Media Marketing",
    "Google Ads",
    "Meta Ads",
  ],
  sameAs: [
    "https://github.com/yunusbutt676-commits",
    "https://www.linkedin.com/in/ghulam-mustafa-620142380/",
    "https://x.com/Mustafa06833246",
    "https://www.instagram.com/gmcodes9",
    "https://www.facebook.com/share/1aJbL575Tr/",
    "https://www.threads.com/@gmcodes9",
    "https://www.tiktok.com/@gmcodes9",
  ],
};

const organizationSchema = {
  "@type": "Organization",
  "@id": "https://www.gmcodes9.com/#organization",
  name: "GmCodes9",
  alternateName: "GmCodes9 by Ghulam Mustafa",
  url: "https://www.gmcodes9.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.gmcodes9.com/Images/omg.jpeg",
  },
  description:
    "GmCodes9 is a digital services brand founded by Ghulam Mustafa, providing full-stack web development, AI integrations, SEO, GEO, AEO, entity optimization, and digital marketing services for businesses in Lahore, Pakistan and international markets.",
  founder: {
    "@id": "https://www.gmcodes9.com/#person",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Lahore",
    },
    {
      "@type": "Country",
      name: "Pakistan",
    },
    {
      "@type": "Place",
      name: "International",
    },
  ],
  sameAs: [
    "https://github.com/yunusbutt676-commits",
    "https://www.linkedin.com/in/ghulam-mustafa-620142380/",
    "https://x.com/Mustafa06833246",
    "https://www.instagram.com/gmcodes9",
    "https://www.facebook.com/share/1aJbL575Tr/",
    "https://www.threads.com/@gmcodes9",
    "https://www.tiktok.com/@gmcodes9",
  ],
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": "https://www.gmcodes9.com/#website",
  url: "https://www.gmcodes9.com/",
  name: "GmCodes9",
  description:
    "Full-stack web development, AI development, SEO, GEO, AEO and digital marketing services by Ghulam Mustafa.",
  publisher: {
    "@id": "https://www.gmcodes9.com/#organization",
  },
  inLanguage: "en",
};

const webpageSchema = {
  "@type": "WebPage",
  "@id": "https://www.gmcodes9.com/#webpage",
  url: "https://www.gmcodes9.com/",
  name:
    "GmCodes9 | Full Stack Engineer, AI Development & SEO/GEO/AEO Services",
  description:
    "GmCodes9 provides full-stack development, AI/LLM integrations, SEO, GEO, AEO, entity optimization and digital marketing services in Lahore, Pakistan and internationally.",
  isPartOf: {
    "@id": "https://www.gmcodes9.com/#website",
  },
  about: [
    {
      "@id": "https://www.gmcodes9.com/#person",
    },
    {
      "@id": "https://www.gmcodes9.com/#organization",
    },
  ],
  inLanguage: "en",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    organizationSchema,
    websiteSchema,
    webpageSchema,
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Portfolio />
    </>
  );
}
