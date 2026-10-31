import Portfolio from "../components/Portfolio";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.gmcodes9.com/#person",

  "name": "Ghulam Mustafa",
  "alternateName": "GmCodes9",

  "url": "https://www.gmcodes9.com/",
  "image": "https://www.gmcodes9.com/Images/omg.jpeg",

  "jobTitle": "Full Stack Engineer",

  "birthDate": "1999-04-08",

  "description":
    "Full Stack Engineer with 4+ years of experience specializing in modern web applications, RESTful APIs, AI/ML integrations, scalable backend systems, SEO/GEO/AEO, entity optimization, and digital solutions.",

  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lahore",
    "addressCountry": "PK"
  },

  "knowsAbout": [
    "Full Stack Development",
    "Next.js",
    "React",
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
    "LLM Integration",
    "AI Assistant Integration",
    "Web Application Development",
    "E-commerce Development",
    "CRM Systems",
    "Business Management Systems",
    "Dashboard Development",
    "SEO",
    "GEO",
    "AEO",
    "Entity Optimization",
    "Digital Marketing",
    "Social Media Marketing",
    "Google Ads",
    "Meta Ads"
  ],

  "sameAs": [
    "https://github.com/yunusbutt676-commits",
    "https://www.linkedin.com/in/ghulam-mustafa-620142380/",
    "https://x.com/Mustafa06833246",
    "https://www.instagram.com/gmcodes9",
    "https://www.facebook.com/share/1aJbL575Tr/",
    "https://www.threads.com/@gmcodes9",
    "https://www.tiktok.com/@gmcodes9"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Portfolio />
    </>
  );
}