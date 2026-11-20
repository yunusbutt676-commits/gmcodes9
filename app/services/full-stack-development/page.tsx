import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Globe2,
  Layers3,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  MonitorSmartphone,
  Network,
  Plug,
  Rocket,
  Search,
  Server,
  ShoppingCart,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/full-stack-development`;

const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20Ghulam%20Mustafa%2C%20I%27m%20interested%20in%20full-stack%20development%20services.%20I%27d%20like%20to%20discuss%20my%20project.";

export const metadata: Metadata = {
  title:
    "Full Stack Development Services in Lahore | React, Next.js & Node.js | GmCodes9",

  description:
    "GmCodes9 provides full stack web development in Lahore, Pakistan and for international businesses, using React, Next.js, Node.js, TypeScript, Python, FastAPI, Laravel, REST APIs, databases, payments and AI integrations.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    type: "website",
    url: PAGE_URL,
    title:
      "Full Stack Development Services in Lahore | React, Next.js & Node.js | GmCodes9",
    description:
      "Custom full stack web applications, business platforms, APIs, dashboards, e-commerce systems and AI-powered web solutions by GmCodes9.",
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 628,
        alt: "GmCodes9 Full Stack Web Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Full Stack Development Services in Lahore | GmCodes9",
    description:
      "Full stack web development using React, Next.js, Node.js, Python, Laravel, APIs, databases, payments and AI integrations.",
    images: [`${SITE_URL}/og.png`],
  },
};

const technologies = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Angular",
    "Tailwind CSS",
    "Bootstrap",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "Laravel",
    "PHP",
  ],
  database: ["MongoDB", "MySQL"],
  integrations: [
    "REST APIs",
    "Stripe",
    "Authentication",
    "Webhooks",
    "AI APIs",
    "Third-Party APIs",
  ],
};

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    description:
      "Responsive, accessible and production-ready interfaces built with modern component-based frontend technologies.",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Business logic, APIs, authentication, authorization and backend systems designed around real application requirements.",
  },
  {
    icon: Database,
    title: "Database Development",
    description:
      "Structured data models, CRUD workflows, relationships and application data management using MySQL and MongoDB.",
  },
  {
    icon: Network,
    title: "REST API Development",
    description:
      "Reliable API layers for web applications, mobile applications, dashboards, integrations and external services.",
  },
  {
    icon: LockKeyhole,
    title: "Authentication & Roles",
    description:
      "User authentication, protected routes, role-based access and permission-driven application workflows.",
  },
  {
    icon: Plug,
    title: "Third-Party Integrations",
    description:
      "Payments, AI APIs, authentication providers, communication tools, webhooks and other external services.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Applications",
    description:
      "Online stores with products, carts, checkout, customer accounts, orders, payments and administration.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Business Systems",
    description:
      "Custom dashboards, CRM-style platforms, admin panels, reporting systems and internal business applications.",
  },
];

const applicationTypes = [
  "Business Web Applications",
  "SaaS Applications",
  "E-Commerce Platforms",
  "CRM Systems",
  "Admin Dashboards",
  "Management Systems",
  "Internal Business Tools",
  "Customer Portals",
  "API-Driven Applications",
  "AI-Powered Web Applications",
  "Education Platforms",
  "Data & Reporting Dashboards",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand the business objective, users, workflows, technical requirements and project scope before development begins.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define application structure, technology choices, data models, APIs, user flows and implementation priorities.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the frontend, backend, database, integrations and business functionality in a structured production-ready workflow.",
  },
  {
    number: "04",
    title: "Test & Refine",
    description:
      "Review responsive behavior, functionality, integrations, forms, authentication, performance and important user flows.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Prepare the production build, configure deployment requirements and make the application available to its intended users.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Continue with feature improvements, technical updates, maintenance, content changes and application enhancements when required.",
  },
];

const faqs = [
  {
    question: "What is full stack web development?",
    answer:
      "Full stack web development covers both the frontend and backend sides of a web application. It can include user interfaces, application logic, APIs, databases, authentication, integrations, payments and deployment-related implementation.",
  },
  {
    question: "What technologies do you use for full stack development?",
    answer:
      "GmCodes9 works with React.js, Next.js, TypeScript, JavaScript, Angular, Node.js, Express.js, Python, Django, FastAPI, Flask, Laravel, PHP, MySQL and MongoDB, along with REST APIs and third-party integrations.",
  },
  {
    question: "Can you build a custom web application from scratch?",
    answer:
      "Yes. Custom web applications can be developed around specific business workflows, user roles, dashboards, APIs, databases, authentication requirements, integrations and other project requirements.",
  },
  {
    question: "Can you build React and Next.js applications?",
    answer:
      "Yes. React.js and Next.js can be used to build responsive websites, dashboards, business applications, customer portals, SaaS interfaces and other modern web experiences.",
  },
  {
    question: "Can you develop the backend and APIs as well?",
    answer:
      "Yes. Backend development can include Node.js, Express.js, Python, Django, FastAPI, Flask or Laravel, together with REST APIs, authentication, authorization, business logic, database operations and external API integrations.",
  },
  {
    question: "Can you integrate Stripe and online payments?",
    answer:
      "Yes. Payment integrations can include Stripe and other supported payment workflows, depending on the project requirements, including checkout, payment processing, subscriptions and related application flows.",
  },
  {
    question: "Can you build AI-powered web applications?",
    answer:
      "Yes. AI functionality can be integrated into full stack applications through AI APIs and services, including AI assistants, chatbots, LLM workflows, intelligent features and other application-specific AI experiences.",
  },
  {
    question: "Do you build SEO-ready websites and applications?",
    answer:
      "Yes. Development can include semantic HTML, crawlable navigation, metadata support, canonical URLs, structured data, Open Graph, XML sitemaps, robots configuration, performance considerations and search-friendly architecture.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. GmCodes9 is based in Lahore, Pakistan and works with local businesses as well as remote and international clients.",
  },
  {
    question: "How much does full stack development cost?",
    answer:
      "Project cost depends on application scope, number of screens, functionality, integrations, backend complexity, authentication, payment requirements, database design and other technical requirements. A project-specific estimate is provided after understanding the requirements.",
  },
];

const serviceSchema = {
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "Full Stack Web Development Services",
  serviceType: "Full Stack Web Development",
  url: PAGE_URL,
  description:
    "Full stack web development services for business websites, web applications, dashboards, e-commerce platforms, APIs, business systems and AI-powered applications.",
  provider: {
    "@id": `${SITE_URL}/#organization`,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Pakistan",
    },
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
    {
      "@type": "Country",
      name: "Australia",
    },
    {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  ],
  category: [
    "Full Stack Web Development",
    "Web Application Development",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Custom Software Development",
  ],
};

const webpageSchema = {
  "@type": "WebPage",
  "@id": `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name:
    "Full Stack Development Services in Lahore | React, Next.js & Node.js | GmCodes9",
  description:
    "Full stack web development services using React, Next.js, Node.js, TypeScript, Python, FastAPI, Laravel, databases, APIs, payments and AI integrations.",
  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },
  about: {
    "@id": `${PAGE_URL}#service`,
  },
  mainEntity: {
    "@id": `${PAGE_URL}#service`,
  },
  inLanguage: "en",
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Full Stack Development",
      item: PAGE_URL,
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    webpageSchema,
    serviceSchema,
    breadcrumbSchema,
  ],
};

export default function FullStackDevelopmentPage() {
  return (
    <main className="fs-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <style>{`
        .fs-page {
          --fs-bg: #05070b;
          --fs-surface: rgba(255,255,255,.045);
          --fs-surface-strong: rgba(255,255,255,.07);
          --fs-border: rgba(255,255,255,.09);
          --fs-text: #f4f7fb;
          --fs-muted: #aab3c2;
          --fs-accent: #7dd3fc;
          --fs-accent-2: #86efac;
          --fs-max: 1180px;
          min-height: 100vh;
          background:
            radial-gradient(circle at 15% 5%, rgba(56,189,248,.12), transparent 28%),
            radial-gradient(circle at 85% 20%, rgba(134,239,172,.08), transparent 25%),
            var(--fs-bg);
          color: var(--fs-text);
          overflow: hidden;
        }

        .fs-container {
          width: min(calc(100% - 32px), var(--fs-max));
          margin: 0 auto;
        }

        .fs-hero {
          padding: 92px 0 70px;
          border-bottom: 1px solid var(--fs-border);
        }

        .fs-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 34px;
          color: var(--fs-muted);
          font-size: .88rem;
        }

        .fs-breadcrumb a {
          color: inherit;
          text-decoration: none;
        }

        .fs-breadcrumb a:hover {
          color: var(--fs-text);
        }

        .fs-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border: 1px solid var(--fs-border);
          border-radius: 999px;
          background: rgba(255,255,255,.035);
          color: var(--fs-accent);
          font-size: .82rem;
          font-weight: 700;
          letter-spacing: .04em;
          margin-bottom: 22px;
        }

        .fs-hero h1 {
          max-width: 950px;
          margin: 0;
          font-size: clamp(2.6rem, 7vw, 5.7rem);
          line-height: .98;
          letter-spacing: -.055em;
        }

        .fs-lead {
          max-width: 820px;
          margin: 26px 0 0;
          color: var(--fs-muted);
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          line-height: 1.8;
        }

        .fs-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .fs-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 14px;
          border: 1px solid var(--fs-border);
          text-decoration: none;
          font-weight: 750;
          color: var(--fs-text);
          background: rgba(255,255,255,.045);
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
        }

        .fs-button:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,.08);
          border-color: rgba(125,211,252,.35);
        }

        .fs-button.primary {
          color: #031017;
          background: var(--fs-accent);
          border-color: var(--fs-accent);
        }

        .fs-button.primary:hover {
          background: #a5e5ff;
        }

        .fs-section {
          padding: 78px 0;
          border-bottom: 1px solid var(--fs-border);
        }

        .fs-section-heading {
          max-width: 780px;
          margin-bottom: 34px;
        }

        .fs-section-heading span {
          color: var(--fs-accent-2);
          font-size: .8rem;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .fs-section-heading h2 {
          margin: 10px 0 12px;
          font-size: clamp(2rem, 4vw, 3.25rem);
          line-height: 1.08;
          letter-spacing: -.035em;
        }

        .fs-section-heading p {
          margin: 0;
          color: var(--fs-muted);
          line-height: 1.8;
        }

        .fs-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .fs-card {
          padding: 24px;
          border: 1px solid var(--fs-border);
          border-radius: 22px;
          background: var(--fs-surface);
          backdrop-filter: blur(18px);
        }

        .fs-card-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: rgba(125,211,252,.08);
          color: var(--fs-accent);
          margin-bottom: 18px;
        }

        .fs-card h3 {
          margin: 0 0 9px;
          font-size: 1.05rem;
        }

        .fs-card p {
          margin: 0;
          color: var(--fs-muted);
          line-height: 1.7;
          font-size: .93rem;
        }

        .fs-two {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 18px;
        }

        .fs-panel {
          padding: 30px;
          border: 1px solid var(--fs-border);
          border-radius: 26px;
          background: var(--fs-surface);
        }

        .fs-panel h3 {
          margin: 0 0 16px;
          font-size: 1.3rem;
        }

        .fs-panel p {
          color: var(--fs-muted);
          line-height: 1.8;
        }

        .fs-list {
          display: grid;
          gap: 10px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .fs-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #dce3ec;
          line-height: 1.55;
        }

        .fs-list svg {
          flex: 0 0 auto;
          margin-top: 3px;
          color: var(--fs-accent-2);
        }

        .fs-tech-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .fs-tech-group {
          padding: 22px;
          border: 1px solid var(--fs-border);
          border-radius: 20px;
          background: var(--fs-surface);
        }

        .fs-tech-group h3 {
          margin: 0 0 15px;
          font-size: .95rem;
        }

        .fs-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .fs-tech span {
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid var(--fs-border);
          color: var(--fs-muted);
          font-size: .8rem;
        }

        .fs-process {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .fs-process-card {
          padding: 24px;
          border: 1px solid var(--fs-border);
          border-radius: 22px;
          background: var(--fs-surface);
        }

        .fs-number {
          color: var(--fs-accent);
          font-size: .78rem;
          font-weight: 900;
          letter-spacing: .08em;
        }

        .fs-process-card h3 {
          margin: 12px 0 8px;
        }

        .fs-process-card p {
          margin: 0;
          color: var(--fs-muted);
          line-height: 1.7;
          font-size: .92rem;
        }

        .fs-projects {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .fs-project {
          display: flex;
          flex-direction: column;
          min-height: 220px;
          padding: 25px;
          border: 1px solid var(--fs-border);
          border-radius: 24px;
          background: var(--fs-surface);
          text-decoration: none;
          color: var(--fs-text);
          transition: transform .2s ease, border-color .2s ease;
        }

        .fs-project:hover {
          transform: translateY(-3px);
          border-color: rgba(125,211,252,.35);
        }

        .fs-project-icon {
          color: var(--fs-accent);
          margin-bottom: auto;
        }

        .fs-project h3 {
          margin: 35px 0 8px;
        }

        .fs-project p {
          margin: 0;
          color: var(--fs-muted);
          line-height: 1.65;
          font-size: .9rem;
        }

        .fs-related {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .fs-related a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 18px;
          border: 1px solid var(--fs-border);
          border-radius: 17px;
          color: var(--fs-text);
          background: var(--fs-surface);
          text-decoration: none;
          font-weight: 700;
          transition: background .2s ease, transform .2s ease;
        }

        .fs-related a:hover {
          background: var(--fs-surface-strong);
          transform: translateY(-2px);
        }

        .fs-faq {
          display: grid;
          gap: 10px;
        }

        .fs-faq details {
          border: 1px solid var(--fs-border);
          border-radius: 17px;
          background: var(--fs-surface);
          overflow: hidden;
        }

        .fs-faq summary {
          cursor: pointer;
          padding: 20px;
          font-weight: 750;
          list-style: none;
        }

        .fs-faq summary::-webkit-details-marker {
          display: none;
        }

        .fs-faq p {
          margin: 0;
          padding: 0 20px 20px;
          color: var(--fs-muted);
          line-height: 1.8;
        }

        .fs-cta {
          padding: 76px 0 100px;
        }

        .fs-cta-box {
          position: relative;
          overflow: hidden;
          padding: clamp(28px, 5vw, 55px);
          border: 1px solid var(--fs-border);
          border-radius: 30px;
          background:
            radial-gradient(circle at 80% 20%, rgba(134,239,172,.12), transparent 30%),
            radial-gradient(circle at 15% 80%, rgba(125,211,252,.12), transparent 30%),
            var(--fs-surface);
        }

        .fs-cta-box h2 {
          max-width: 780px;
          margin: 0;
          font-size: clamp(2rem, 4vw, 3.6rem);
          line-height: 1.05;
          letter-spacing: -.04em;
        }

        .fs-cta-box p {
          max-width: 700px;
          margin: 17px 0 0;
          color: var(--fs-muted);
          line-height: 1.8;
        }

        .fs-top {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 30;
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          border: 1px solid var(--fs-border);
          background: rgba(5,7,11,.82);
          color: var(--fs-text);
          text-decoration: none;
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 35px rgba(0,0,0,.28);
        }

        .fs-top:hover {
          border-color: rgba(125,211,252,.4);
          color: var(--fs-accent);
        }

        @media (max-width: 1000px) {
          .fs-grid,
          .fs-tech-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .fs-two {
            grid-template-columns: 1fr;
          }

          .fs-process {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .fs-projects {
            grid-template-columns: 1fr;
          }

          .fs-related {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .fs-container {
            width: min(calc(100% - 22px), var(--fs-max));
          }

          .fs-hero {
            padding: 70px 0 52px;
          }

          .fs-section {
            padding: 58px 0;
          }

          .fs-grid,
          .fs-tech-grid,
          .fs-process,
          .fs-related {
            grid-template-columns: 1fr;
          }

          .fs-card,
          .fs-panel,
          .fs-process-card,
          .fs-project {
            padding: 21px;
          }

          .fs-button {
            width: 100%;
          }

          .fs-top {
            right: 14px;
            bottom: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fs-button,
          .fs-project,
          .fs-related a {
            transition: none;
          }

          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <section className="fs-hero" id="top">
        <div className="fs-container">
          <nav className="fs-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <Link href="/services">Services</Link>
            <ChevronRight size={15} aria-hidden="true" />
            <span aria-current="page">Full Stack Development</span>
          </nav>

          <div className="fs-kicker">
            <Code2 size={15} aria-hidden="true" />
            Full Stack Engineering
          </div>

          <h1>Full Stack Web Development Services</h1>

          <p className="fs-lead">
            GmCodes9 provides custom full stack web development for businesses,
            startups and organizations in Lahore, Pakistan and international
            markets. I build modern frontend interfaces, backend systems,
            REST APIs, databases, authentication, payment integrations,
            dashboards, e-commerce platforms and AI-powered web applications
            around real business requirements.
          </p>

          <div className="fs-actions">
            <a
              className="fs-button primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Discuss Your Project
            </a>

            <Link className="fs-button" href="/services">
              Explore All Services
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link className="fs-button" href="/">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="fs-section" id="capabilities">
        <div className="fs-container">
          <div className="fs-section-heading">
            <span>Full Stack Capabilities</span>
            <h2>From frontend interfaces to backend systems</h2>
            <p>
              Full stack development brings the user experience, application
              logic, data layer and external integrations together into one
              connected product. The implementation is shaped around the
              actual business workflow rather than a generic technology stack.
            </p>
          </div>

          <div className="fs-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article className="fs-card" key={item.title}>
                  <div className="fs-card-icon">
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="fs-section" id="development">
        <div className="fs-container">
          <div className="fs-section-heading">
            <span>Application Development</span>
            <h2>Build the complete web application, not just the interface</h2>
            <p>
              A production web application needs more than a polished
              frontend. Full stack engineering connects interface design,
              backend logic, databases, APIs, security, integrations and
              business workflows into a usable system.
            </p>
          </div>

          <div className="fs-two">
            <article className="fs-panel">
              <h3>Frontend Development</h3>

              <p>
                Responsive frontend applications can be developed with
                React.js, Next.js, TypeScript, JavaScript and other modern
                frontend technologies. Interfaces are structured for desktop,
                tablet and mobile users while keeping the application's
                business workflows clear.
              </p>

              <ul className="fs-list">
                {[
                  "Responsive and mobile-first interfaces",
                  "React and Next.js applications",
                  "Reusable component architecture",
                  "Interactive dashboards and portals",
                  "Forms, validation and user flows",
                  "Accessible and semantic HTML",
                  "Performance-conscious frontend implementation",
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="fs-panel">
              <h3>Backend & API Development</h3>

              <p>
                Backend systems handle business logic, application data,
                authentication, authorization, APIs and external integrations.
                Development can use Node.js, Express.js, Python, Django,
                FastAPI, Flask or Laravel depending on project requirements.
              </p>

              <ul className="fs-list">
                {[
                  "RESTful API development",
                  "Authentication and authorization",
                  "Role-based access control",
                  "Business logic and application workflows",
                  "Database operations and data management",
                  "Third-party API integrations",
                  "Webhooks and service integrations",
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="fs-section" id="applications">
        <div className="fs-container">
          <div className="fs-section-heading">
            <span>What I Build</span>
            <h2>Custom web applications for real business workflows</h2>
            <p>
              Full stack development can support focused business websites,
              advanced web applications, internal tools, SaaS products,
              e-commerce systems and custom digital platforms.
            </p>
          </div>

          <div className="fs-grid">
            {applicationTypes.map((item) => (
              <div className="fs-card" key={item}>
                <div className="fs-card-icon">
                  <Layers3 size={20} aria-hidden="true" />
                </div>

                <h3>{item}</h3>

                <p>
                  Custom application architecture and functionality based on
                  the project's users, workflows and technical requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fs-section" id="ai">
        <div className="fs-container">
          <div className="fs-two">
            <article className="fs-panel">
              <div className="fs-card-icon">
                <Bot size={21} aria-hidden="true" />
              </div>

              <h3>AI-Powered Full Stack Applications</h3>

              <p>
                AI functionality can be integrated directly into full stack
                applications when it solves a real product or business
                requirement. This can include AI assistants, chatbots, LLM
                workflows, AI APIs, intelligent features and computer-vision
                functionality.
              </p>

              <ul className="fs-list">
                <li>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  AI API integration
                </li>
                <li>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  LLM application workflows
                </li>
                <li>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  AI assistants and chatbots
                </li>
                <li>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  Groq and OpenAI API integration
                </li>
                <li>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  AI-enabled dashboards and business workflows
                </li>
              </ul>

              <div className="fs-actions">
                <Link className="fs-button" href="/services/ai-development">
                  Explore AI Development
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="fs-panel">
              <div className="fs-card-icon">
                <Sparkles size={21} aria-hidden="true" />
              </div>

              <h3>SEO-Ready Web Architecture</h3>

              <p>
                Full stack applications can be developed with a strong
                technical foundation for search visibility, including semantic
                HTML, crawlable navigation, metadata, canonical URLs,
                structured data, Open Graph, XML sitemaps and performance
                considerations.
              </p>

              <div className="fs-actions">
                <Link className="fs-button" href="/services/seo">
                  Explore SEO Services
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <Link className="fs-button" href="/services/geo">
                  GEO
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <Link className="fs-button" href="/services/aeo">
                  AEO
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>

                <Link className="fs-button" href="/services/entity-seo">
                  Entity SEO
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="fs-section" id="ecommerce">
        <div className="fs-container">
          <div className="fs-section-heading">
            <span>E-Commerce & Payments</span>
            <h2>Online stores and payment-enabled applications</h2>
            <p>
              Full stack e-commerce development can connect product
              management, customer accounts, cart and checkout flows, orders,
              payment processing, inventory and administration into one
              application.
            </p>
          </div>

          <div className="fs-grid">
            {[
              {
                icon: ShoppingCart,
                title: "E-Commerce Stores",
                text: "Responsive storefronts with product catalogs, categories, cart and customer workflows.",
              },
              {
                icon: Zap,
                title: "Checkout & Payments",
                text: "Payment and checkout integrations based on the application's business and provider requirements.",
              },
              {
                icon: BarChart3,
                title: "Orders & Analytics",
                text: "Order management, reporting, analytics and business-facing administration.",
              },
              {
                icon: LockKeyhole,
                title: "Customer Accounts",
                text: "Authentication, protected areas, customer profiles and role-aware application workflows.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article className="fs-card" key={item.title}>
                  <div className="fs-card-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>

          <div className="fs-actions">
            <Link
              className="fs-button"
              href="/services/ecommerce-development"
            >
              Explore E-Commerce Development
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="fs-section" id="technology">
        <div className="fs-container">
          <div className="fs-section-heading">
            <span>Technology Stack</span>
            <h2>Modern technologies for production web applications</h2>
            <p>
              Technology choices depend on the application's requirements,
              existing systems, performance needs, integrations and long-term
              maintenance considerations.
            </p>
          </div>

          <div className="fs-tech-grid">
            <div className="fs-tech-group">
              <h3>Frontend</h3>
              <div className="fs-tech">
                {technologies.frontend.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="fs-tech-group">
              <h3>Backend</h3>
              <div className="fs-tech">
                {technologies.backend.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="fs-tech-group">
              <h3>Database</h3>
              <div className="fs-tech">
                {technologies.database.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="fs-tech-group">
              <h3>Integrations</h3>
              <div className="fs-tech">
                {technologies.integrations.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fs-section" id="process">
        <div className="fs-container">
          <div className="fs-section-heading">
            <span>Development Process</span>
            <h2>A structured path from requirements to production</h2>
            <p>
              The development process is adapted to project scope, but the
              underlying goal remains the same: understand the problem,
              implement the right architecture and deliver a usable product.
            </p>
          </div>

          <div className="fs-process">
            {process.map((item) => (
              <article className="fs-process-card" key={item.number}>
                <span className="fs-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fs-section" id="projects">
        <div className="fs-container">
          <div className="fs-section-heading">
            <span>Project Experience</span>
            <h2>See the type of work behind the service</h2>
            <p>
              Real project examples provide better context than generic
              capability claims. Explore selected work and connect each
              project to the technologies and business requirements involved.
            </p>
          </div>

          <div className="fs-projects">
            <Link className="fs-project" href="/#portfolio">
              <Code2
                className="fs-project-icon"
                size={26}
                aria-hidden="true"
              />
              <h3>Full Stack Projects</h3>
              <p>
                Explore the GmCodes9 portfolio for web applications, business
                systems, dashboards and other development work.
              </p>
            </Link>

            <Link className="fs-project" href="/#portfolio">
              <Bot
                className="fs-project-icon"
                size={26}
                aria-hidden="true"
              />
              <h3>AI-Powered Projects</h3>
              <p>
                See selected AI assistants, AI-enabled applications and
                intelligent workflows built as part of full stack products.
              </p>
            </Link>

            <Link className="fs-project" href="/#portfolio">
              <ShoppingCart
                className="fs-project-icon"
                size={26}
                aria-hidden="true"
              />
              <h3>E-Commerce & Business Apps</h3>
              <p>
                Explore business-focused applications, commerce workflows and
                custom platforms in the portfolio.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="fs-section" id="why">
        <div className="fs-container">
          <div className="fs-two">
            <article className="fs-panel">
              <div className="fs-card-icon">
                <BadgeCheck size={21} aria-hidden="true" />
              </div>

              <h3>Why GmCodes9?</h3>

              <p>
                GmCodes9 combines full stack engineering with practical
                experience in AI integrations, search optimization and digital
                services. The goal is to build technology that supports the
                actual business rather than simply producing another website.
              </p>

              <ul className="fs-list">
                {[
                  "4+ years of professional development experience",
                  "Frontend and backend development",
                  "AI and LLM integration experience",
                  "REST APIs and third-party integrations",
                  "Responsive and production-focused implementation",
                  "SEO, GEO, AEO and entity-aware architecture",
                  "Lahore, Pakistan and remote international availability",
                ].map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="fs-panel">
              <div className="fs-card-icon">
                <Globe2 size={21} aria-hidden="true" />
              </div>

              <h3>Local & International Development</h3>

              <p>
                Based in Lahore, Pakistan, GmCodes9 works with businesses and
                clients that need modern web applications, APIs, dashboards,
                e-commerce platforms and custom digital products. Projects can
                be delivered remotely for international clients as well.
              </p>

              <p>
                The development approach can also account for search
                visibility, AI-search discoverability, structured content,
                responsive experiences and integrations when those requirements
                are relevant to the project.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="fs-section" id="related-services">
        <div className="fs-container">
          <div className="fs-section-heading">
            <span>Related Services</span>
            <h2>Connect development with the rest of your digital strategy</h2>
            <p>
              Full stack development often works alongside AI, SEO, digital
              marketing and specialized business application services.
            </p>
          </div>

          <div className="fs-related">
            <Link href="/services/ai-development">
              <span>AI Development</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link href="/services/seo">
              <span>SEO Services</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link href="/services/digital-marketing">
              <span>Digital Marketing</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link href="/services/ecommerce-development">
              <span>E-Commerce Development</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link href="/services/crm-dashboard-development">
              <span>CRM & Dashboards</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link href="/services/custom-web-app-development">
              <span>Custom Web Applications</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link href="/services/geo">
              <span>GEO</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link href="/services/entity-seo">
              <span>Entity SEO</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="fs-section" id="faq">
        <div className="fs-container">
          <div className="fs-section-heading">
            <span>Frequently Asked Questions</span>
            <h2>Full stack development questions</h2>
            <p>
              Clear answers to common questions about full stack development,
              technologies, integrations, projects and working with GmCodes9.
            </p>
          </div>

          <div className="fs-faq">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="fs-cta" id="contact">
        <div className="fs-container">
          <div className="fs-cta-box">
            <div className="fs-card-icon">
              <Rocket size={22} aria-hidden="true" />
            </div>

            <h2>
              Have a web application or business platform in mind?
            </h2>

            <p>
              Share the project requirements, business goal and functionality
              you need. We can discuss the appropriate full stack architecture,
              technologies, integrations and development scope.
            </p>

            <div className="fs-actions">
              <a
                className="fs-button primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Start a Project
              </a>

              <Link className="fs-button" href="/services">
                View All Services
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <a
        className="fs-top"
        href="#top"
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowRight
          size={19}
          aria-hidden="true"
          style={{ transform: "rotate(-90deg)" }}
        />
      </a>
    </main>
  );
}