import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  Globe2,
  Layers3,
  LockKeyhole,
  MessageCircle,
  MonitorSmartphone,
  Network,
  RefreshCw,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/custom-web-app-development`;

const title = "Custom Web Application Development in Lahore | GmCodes9";

const description =
  "GmCodes9 provides custom web application development in Lahore, Pakistan and worldwide, building business web apps, SaaS platforms, client portals, internal tools, workflow systems, API-driven applications and custom management software with modern frontend, backend, database and authentication architecture.";

const socialDescription =
  "Custom web applications, SaaS platforms, portals, workflow systems and API-driven business software designed around real operational requirements.";

const keywords = [
  "custom web application development",
  "custom web app development",
  "custom web application development Lahore",
  "custom web application development Pakistan",
  "custom web apps",
  "web application development",
  "business web application development",
  "SaaS development",
  "SaaS web application development",
  "custom SaaS development",
  "client portal development",
  "customer portal development",
  "internal business tools",
  "workflow application development",
  "custom management software",
  "business process automation",
  "API-driven web applications",
  "scalable web applications",
  "responsive web applications",
  "custom software development",
  "web app development services",
  "React web application",
  "Next.js web application",
  "Node.js web application",
  "Laravel web application",
  "Python web application",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
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
          "GmCodes9 — Custom Web Application Development, SaaS & Business Applications",
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

const applicationTypes = [
  {
    icon: Blocks,
    title: "SaaS Platforms",
    description:
      "Multi-feature web applications designed around subscription products, digital services, teams, users and recurring workflows.",
  },
  {
    icon: Globe2,
    title: "Client Portals",
    description:
      "Secure customer-facing portals for account access, information sharing, requests, documents, workflows and service interactions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Internal Business Tools",
    description:
      "Purpose-built applications that replace fragmented spreadsheets, manual processes and disconnected operational workflows.",
  },
  {
    icon: Workflow,
    title: "Workflow Applications",
    description:
      "Custom systems that organize approvals, task flows, records, statuses, forms and business processes around your actual requirements.",
  },
  {
    icon: Settings2,
    title: "Management Applications",
    description:
      "Custom business software for structured data, operations, users, permissions, processes and day-to-day management.",
  },
  {
    icon: Database,
    title: "Data-Driven Web Apps",
    description:
      "Responsive applications connected to structured databases, APIs and business logic for reliable information management.",
  },
  {
    icon: Network,
    title: "API-Driven Applications",
    description:
      "Web applications connected to REST APIs, third-party services, payment systems and other business platforms.",
  },
  {
    icon: MonitorSmartphone,
    title: "Customer-Facing Applications",
    description:
      "Modern responsive interfaces built for customers, members, teams or users across desktop, tablet and mobile devices.",
  },
];

const capabilities = [
  "Custom frontend application development",
  "Backend and API development",
  "Authentication and user roles",
  "Database architecture and integration",
  "Business logic and application workflows",
  "Third-party API integrations",
  "Responsive application interfaces",
  "Forms, validation and data workflows",
  "Role-based permissions",
  "Application performance optimization",
  "Secure data handling",
  "Deployment-ready application architecture",
];

const architectureItems = [
  {
    icon: MonitorSmartphone,
    title: "Application Interface",
    text: "Modern React.js and Next.js interfaces with responsive layouts, reusable components, forms, navigation and application states.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    text: "Business logic, REST APIs, authentication flows and server-side functionality using modern backend technologies.",
  },
  {
    icon: Database,
    title: "Database Layer",
    text: "Structured data models and database integrations using MongoDB, MySQL and application-specific data requirements.",
  },
  {
    icon: LockKeyhole,
    title: "Access & Security",
    text: "Authentication, authorization, role-based access and protected application workflows designed around user responsibilities.",
  },
];

const workflowFeatures = [
  "Custom forms and data collection",
  "Multi-step business workflows",
  "Approval and status processes",
  "Role-based task access",
  "Search, filtering and data management",
  "Notifications and workflow states",
  "Record creation and updates",
  "Business rules and validation",
];

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Laravel",
  "PHP",
  "Python",
  "Django",
  "FastAPI",
  "Flask",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "JWT Authentication",
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Define the business problem, users, workflows, data requirements and application goals.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Translate requirements into application features, user flows, information architecture and technical priorities.",
  },
  {
    number: "03",
    title: "Architect",
    text: "Design the frontend, backend, database, authentication and integration architecture around the application.",
  },
  {
    number: "04",
    title: "Build",
    text: "Develop the application interface, business logic, APIs, database functionality and core workflows.",
  },
  {
    number: "05",
    title: "Integrate",
    text: "Connect required third-party APIs, services, payment systems or external business platforms.",
  },
  {
    number: "06",
    title: "Test & Refine",
    text: "Review responsive behavior, application flows, validation, permissions and overall user experience.",
  },
  {
    number: "07",
    title: "Deploy",
    text: "Prepare the application for production deployment and ongoing improvement.",
  },
];

const faqs = [
  {
    question: "What is custom web application development?",
    answer:
      "Custom web application development involves building software around specific business requirements instead of forcing an organization into a generic website or off-the-shelf workflow. A custom web application can combine frontend interfaces, backend logic, databases, authentication, APIs and business-specific workflows.",
  },
  {
    question: "What types of custom web applications can you build?",
    answer:
      "Custom applications can include SaaS platforms, client portals, customer portals, internal business tools, workflow systems, management applications, data-driven applications, API-driven platforms and other business-specific web software.",
  },
  {
    question: "Can you build SaaS platforms?",
    answer:
      "Yes. Custom SaaS web applications can be developed around product features, user accounts, application workflows, data management, authentication, APIs and other requirements specific to the SaaS product.",
  },
  {
    question: "Can you build client or customer portals?",
    answer:
      "Yes. Client and customer portals can include secure authentication, user-specific information, forms, requests, documents, status tracking, communication workflows and other portal functionality.",
  },
  {
    question: "Can custom web applications have different user roles?",
    answer:
      "Yes. Applications can implement authentication and role-based access so different users can access different features, records, workflows or administrative functionality.",
  },
  {
    question: "Can custom web apps connect to APIs and databases?",
    answer:
      "Yes. Custom web applications can integrate with REST APIs, databases and third-party services. The architecture can be designed around the data and integration requirements of the application.",
  },
  {
    question: "Can you build internal business tools?",
    answer:
      "Yes. Internal business applications can digitize operational workflows, structured data management, forms, approvals, reporting, user access and other repetitive business processes.",
  },
  {
    question: "Can you build applications with React or Next.js?",
    answer:
      "Yes. React.js and Next.js can be used for modern responsive web applications, with backend technologies such as Node.js, Laravel, Python, Django or FastAPI used where the application's requirements call for them.",
  },
  {
    question: "Do you provide custom web app development in Lahore?",
    answer:
      "Yes. GmCodes9 provides custom web application development for businesses and organizations in Lahore and across Pakistan, with services also available for international clients.",
  },
  {
    question: "Can custom web applications be developed for international businesses?",
    answer:
      "Yes. Custom web applications can be developed for businesses in international markets, with architecture and application requirements adapted to the target business, users and operational environment.",
  },
];

const relatedServices = [
  {
    title: "Full Stack Development",
    href: "/services/full-stack-development",
    description:
      "Frontend, backend, APIs, databases and complete web application engineering.",
  },
  {
    title: "CRM & Dashboard Development",
    href: "/services/crm-dashboard-development",
    description:
      "Custom CRM systems, admin panels, dashboards and business management interfaces.",
  },
  {
    title: "E-Commerce Development",
    href: "/services/ecommerce-development",
    description:
      "Custom e-commerce platforms, storefronts, checkout flows and commerce functionality.",
  },
  {
    title: "AI Development",
    href: "/services/ai-development",
    description:
      "AI and LLM integrations for applications, assistants, automation and intelligent workflows.",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Modern business websites and web development for organizations and brands.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "SEO, social media marketing, Meta Ads, Google Ads and digital growth services.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Custom Web Application Development",
      serviceType: "Custom Web Application Development",
      description,
      url: PAGE_URL,
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
        "Custom Web Application Development",
        "Web Application Development",
        "SaaS Development",
        "Custom Software Development",
        "Business Application Development",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: title,
      description,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${PAGE_URL}#service`,
      },
      mainEntity: {
        "@id": `${PAGE_URL}#service`,
      },
    },
    {
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
          name: "Custom Web Application Development",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function CustomWebApplicationDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main
        id="top"
        className="min-h-screen overflow-hidden bg-[#05070a] text-zinc-100"
      >
        {/* Hero */}
        <section className="relative border-b border-white/[0.06]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.14),transparent_38%)]" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm text-emerald-300">
                <Sparkles className="h-4 w-4" />
                Custom Web Applications • SaaS • Portals • Business Software
              </div>

              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                Custom Web Application Development for Real Business
                Workflows
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg lg:text-xl">
                Build purpose-designed web applications around your business
                processes, users and data. GmCodes9 develops custom web apps,
                SaaS platforms, client portals, internal tools, workflow
                systems and API-driven applications for businesses in Lahore,
                Pakistan and worldwide.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Custom%20Web%20Application%20Development%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                >
                  Discuss Your Web Application
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/services/full-stack-development"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
                >
                  Explore Full Stack Development
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-zinc-500">
                {[
                  "Custom Architecture",
                  "Responsive Applications",
                  "Authentication & Roles",
                  "APIs & Databases",
                  "Lahore & Worldwide",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Built Around Your Requirements
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  More than a website. A web application designed for how your
                  business actually works.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
                <p>
                  A standard business website is useful for presenting
                  information. A custom web application goes further by
                  handling users, data, workflows, business rules,
                  authentication, integrations and application-specific
                  functionality.
                </p>

                <p>
                  GmCodes9 builds custom web applications around the actual
                  requirements of the business instead of forcing complex
                  processes into a generic template. The result can be a SaaS
                  product, customer portal, internal platform, workflow
                  application or another purpose-built web system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Types */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading
              eyebrow="Application Types"
              title="Custom web applications for different business needs"
              description="From SaaS products to internal business systems, the application architecture can be shaped around the users, workflows and functionality the business actually needs."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {applicationTypes.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.045]"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.07]">
                      <Icon className="h-5 w-5 text-emerald-400" />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Core Capabilities
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  The building blocks behind a custom web application
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  A production-ready application typically combines interface
                  design, backend logic, data, authentication, integrations
                  and business workflows into one coherent system.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                  >
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <span className="text-sm leading-6 text-zinc-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading
              eyebrow="Application Architecture"
              title="Frontend, backend, data and access working together"
              description="Custom web application development connects the visible interface with the underlying business logic, data and user permissions required by the application."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {architectureItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6"
                  >
                    <Icon className="h-6 w-6 text-emerald-400" />

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-500">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.08]">
                  <Layers3 className="h-6 w-6 text-emerald-400" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Application architecture should follow the business
                    requirement
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    The right architecture depends on application scope,
                    users, data, integrations, workflows and future
                    requirements rather than simply choosing a technology
                    because it is fashionable this Tuesday.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS & Portals */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 sm:p-9">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.07]">
                  <Rocket className="h-6 w-6 text-emerald-400" />
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  SaaS & Portal Applications
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Build web-based products and secure portals around user
                  accounts, application functionality, data access, workflows
                  and business-specific requirements.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "SaaS product interfaces",
                    "User account systems",
                    "Client and customer portals",
                    "Protected application areas",
                    "User-specific data",
                    "Application workflows",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <Check className="h-4 w-4 text-emerald-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 sm:p-9">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.07]">
                  <Workflow className="h-6 w-6 text-emerald-400" />
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  Workflow & Business Process Applications
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Turn manual or fragmented operational processes into
                  structured digital workflows with clear data, user roles,
                  states and business rules.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {workflowFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-black/10 p-3"
                    >
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="text-sm text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  APIs, Data & Integrations
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Connect the application to the systems your business already
                  uses
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Custom web applications can be connected to databases,
                  REST APIs, payment services, authentication systems and
                  other third-party platforms where required.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "REST API integrations",
                    "Database connectivity",
                    "Authentication systems",
                    "Third-party services",
                    "Payment integrations",
                    "Business data synchronization",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                    >
                      <Network className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
                <div className="absolute right-5 top-5 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative space-y-4">
                  {[
                    {
                      icon: MonitorSmartphone,
                      label: "Frontend",
                      value: "React.js / Next.js",
                    },
                    {
                      icon: Server,
                      label: "Backend",
                      value: "Node.js / Laravel / Python",
                    },
                    {
                      icon: Database,
                      label: "Data",
                      value: "MongoDB / MySQL",
                    },
                    {
                      icon: LockKeyhole,
                      label: "Access",
                      value: "Authentication / Roles",
                    },
                    {
                      icon: Network,
                      label: "Integration",
                      value: "REST APIs / Services",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-black/20 p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/[0.08]">
                          <Icon className="h-5 w-5 text-emerald-400" />
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wider text-zinc-600">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-medium text-zinc-200">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading
              eyebrow="Technology Stack"
              title="Modern technologies for custom web applications"
              description="Technology choices are matched to the application's functionality, integration requirements and development needs."
            />

            <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-sm text-zinc-300 transition hover:border-emerald-400/20 hover:text-emerald-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading
              eyebrow="Development Process"
              title="From business requirement to production-ready application"
              description="A structured development process keeps the application aligned with its users, workflows, technical requirements and business objectives."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6"
                >
                  <span className="text-sm font-semibold text-emerald-400">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="rounded-3xl border border-emerald-400/10 bg-emerald-400/[0.035] p-7 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                    Lahore, Pakistan & Worldwide
                  </p>

                  <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                    Custom web application development for local and
                    international businesses
                  </h2>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
                    GmCodes9 provides custom web application development in
                    Lahore and across Pakistan, with web application projects
                    also available for businesses in the United States, United
                    Kingdom, Canada, Australia, UAE, Saudi Arabia and other
                    international markets.
                  </p>
                </div>

                <Globe2 className="hidden h-20 w-20 text-emerald-400/20 lg:block" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Custom Web Application Development FAQs"
              description="Common questions about custom web apps, SaaS platforms, portals, workflows and application architecture."
            />

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-left font-medium text-white [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-zinc-500 transition group-open:rotate-180" />
                  </summary>

                  <div className="border-t border-white/[0.06] px-5 pb-5 pt-4 text-sm leading-7 text-zinc-400">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading
              eyebrow="Related Services"
              title="Explore connected development and growth services"
              description="Custom web applications often connect with broader development, AI, e-commerce and digital growth requirements."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.045]"
                >
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>

                    <ArrowRight className="h-5 w-5 shrink-0 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-emerald-400" />
                  </div>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_45%)]" />

          <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-28">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08]">
              <Code2 className="h-7 w-7 text-emerald-400" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a custom web application in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Turn your business requirements into a purpose-built web
              application with modern frontend, backend, database,
              authentication and integration architecture.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Custom%20Web%20Application%20Development%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
              >
                <MessageCircle className="h-5 w-5" />
                Start a Project Discussion
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Back to top */}
        <a
          href="#top"
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/20 bg-[#0a0f0d]/90 text-emerald-400 shadow-lg shadow-black/20 backdrop-blur-md transition hover:border-emerald-400/40 hover:bg-emerald-400 hover:text-black"
        >
          <ArrowRight className="h-5 w-5 -rotate-90" />
        </a>
      </main>
    </>
  );
}
