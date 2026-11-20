import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";

const title =
  "Web Development Services in Lahore | Modern Websites & Web Apps | GmCodes9";

const description =
  "GmCodes9 provides web development services in Lahore, Pakistan and worldwide, building modern responsive business websites, web applications, landing pages, portals and scalable digital experiences using React, Next.js, Node.js, Laravel and Python.";

const socialDescription =
  "Modern web development for businesses and organizations in Lahore, Pakistan and worldwide, including responsive websites, web apps, landing pages, portals, integrations and SEO-ready digital experiences.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "web development services",
    "web development Lahore",
    "web development Pakistan",
    "website development Lahore",
    "website development Pakistan",
    "web developer Lahore",
    "web development company Lahore",
    "business website development",
    "custom website development",
    "responsive web development",
    "web application development",
    "modern website development",
    "React web development",
    "Next.js web development",
    "Node.js web development",
    "Laravel web development",
    "Python web development",
    "SEO friendly web development",
    "SEO ready websites",
    "custom web applications",
    "business websites",
    "landing page development",
    "portal development",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/web-development`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/web-development`,
    title,
    description: socialDescription,
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 628,
        alt:
          "GmCodes9 — Web Development Services in Lahore, Pakistan and Worldwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: socialDescription,
    images: [`${SITE_URL}/og.png`],
  },
};

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Website Development",
    text: "Modern websites designed to provide a consistent, accessible experience across mobile, tablet and desktop devices.",
  },
  {
    icon: Code2,
    title: "Modern Frontend Development",
    text: "Interactive user interfaces built with React.js, Next.js, TypeScript, JavaScript and modern component-based architecture.",
  },
  {
    icon: Layers3,
    title: "Web Application Development",
    text: "Custom browser-based applications, portals, dashboards and workflow-driven experiences designed around real business requirements.",
  },
  {
    icon: Rocket,
    title: "Performance-Focused Development",
    text: "Clean architecture, optimized assets, efficient rendering and technical foundations designed for a fast user experience.",
  },
  {
    icon: Search,
    title: "SEO-Ready Architecture",
    text: "Semantic HTML, metadata, canonical URLs, structured data, internal linking and crawl-friendly architecture can be built into the website from the start.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Web Experiences",
    text: "Authentication, authorization, API integrations and secure application patterns for websites and web applications that require them.",
  },
];

const solutions = [
  "Business websites",
  "Corporate websites",
  "Professional service websites",
  "Landing pages",
  "Portfolio websites",
  "Web applications",
  "Customer portals",
  "Admin interfaces",
  "Dashboards",
  "Content platforms",
  "Custom management systems",
  "API-connected websites",
  "Third-party integrations",
  "Payment-enabled web experiences",
  "AI-powered web interfaces",
  "SEO-ready websites",
];

const technologies = [
  {
    category: "Frontend",
    items: "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap",
  },
  {
    category: "Backend",
    items: "Node.js, Express.js, Laravel, PHP, Python, Django, FastAPI, Flask",
  },
  {
    category: "Databases",
    items: "MongoDB, MySQL and application-focused database architecture",
  },
  {
    category: "APIs & Integrations",
    items: "REST APIs, authentication, payments, third-party services and business integrations",
  },
  {
    category: "AI Integration",
    items: "LLM APIs, Groq, OpenAI APIs, AI assistants and AI-powered application workflows",
  },
  {
    category: "Deployment",
    items: "Production deployment and modern hosting workflows using platforms such as Vercel and Render",
  },
];

const process = [
  {
    number: "01",
    title: "Requirements & Strategy",
    text: "Understand the business, users, pages, functionality, content requirements and technical goals before development begins.",
  },
  {
    number: "02",
    title: "Architecture & UX",
    text: "Plan the information architecture, user flows, responsive layout and technical structure around the actual project requirements.",
  },
  {
    number: "03",
    title: "Development",
    text: "Build the frontend, backend functionality, APIs, database integrations and interactive experiences required by the project.",
  },
  {
    number: "04",
    title: "SEO & Performance",
    text: "Implement SEO-ready structure, responsive behavior, metadata, semantic markup and performance-focused development practices.",
  },
  {
    number: "05",
    title: "Testing & Launch",
    text: "Review functionality, responsiveness, navigation and production behavior before deploying the finished website or application.",
  },
];

const faqs = [
  {
    question: "What web development services does GmCodes9 provide?",
    answer:
      "GmCodes9 provides business website development, responsive websites, landing pages, portfolio websites, web applications, portals, dashboards, custom management systems, API integrations and AI-powered web experiences.",
  },
  {
    question: "Do you provide web development services in Lahore?",
    answer:
      "Yes. GmCodes9 provides web development services for businesses and organizations in Lahore and across Pakistan, as well as for international clients.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "The development stack includes React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, Laravel, PHP, Python, Django, FastAPI, Flask, MongoDB and MySQL, depending on the requirements of the project.",
  },
  {
    question: "What is the difference between web development and full stack development?",
    answer:
      "Web development is the broader service covering websites, web applications, portals, landing pages and digital experiences. Full stack development focuses more specifically on engineering both frontend and backend systems, APIs, databases and application architecture.",
  },
  {
    question: "Can you build an SEO-ready website?",
    answer:
      "Yes. Websites can be developed with semantic HTML, crawl-friendly architecture, metadata, canonical URLs, structured data, responsive design, internal linking and performance considerations that support SEO.",
  },
  {
    question: "Can web development include AI features?",
    answer:
      "Yes. AI and LLM integrations can be incorporated into suitable web applications, including AI assistants, chatbot workflows, content tools, multilingual interfaces and other API-powered AI experiences.",
  },
];

const relatedServices = [
  {
    href: "/services/full-stack-development",
    title: "Full Stack Development",
    text: "Frontend, backend, APIs, databases and complete application engineering.",
  },
  {
    href: "/services/custom-web-app-development",
    title: "Custom Web Apps",
    text: "Purpose-built web applications for specialized workflows and business requirements.",
  },
  {
    href: "/services/ecommerce-development",
    title: "E-Commerce Development",
    text: "Online stores, product experiences, checkout flows and commerce integrations.",
  },
  {
    href: "/services/crm-dashboard-development",
    title: "CRM & Dashboards",
    text: "Business dashboards, admin panels, CRM systems and data-driven interfaces.",
  },
  {
    href: "/services/ai-development",
    title: "AI Development",
    text: "AI and LLM-powered web experiences and application integrations.",
  },
  {
    href: "/services/seo",
    title: "SEO Services",
    text: "Search optimization for websites designed to compete in organic search.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/web-development#service`,
      name: "Web Development Services",
      serviceType: "Web Development",
      description,
      url: `${SITE_URL}/services/web-development`,
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
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/web-development#webpage`,
      url: `${SITE_URL}/services/web-development`,
      name: title,
      description,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/services/web-development#service`,
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/services/web-development#breadcrumb`,
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
          name: "Web Development",
          item: `${SITE_URL}/services/web-development`,
        },
      ],
    },
  ],
};

export default function WebDevelopmentPage() {
  return (
    <>
      <main
        id="top"
        className="min-h-screen overflow-hidden bg-[#06110d] text-white"
      >
        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
        >
          <div className="absolute left-[-15%] top-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="absolute right-[-10%] top-[25%] h-[360px] w-[360px] rounded-full bg-green-400/5 blur-[110px]" />
          <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[400px] rounded-full bg-teal-500/5 blur-[120px]" />
        </div>

        {/* Hero */}
        <section className="relative border-b border-white/10 px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300 backdrop-blur-xl">
                  <Code2 className="h-4 w-4" />
                  Modern Web Development
                </div>

                <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
                  Web Development for Modern Businesses & Digital Products
                </h1>

                <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                  Build responsive, fast and scalable websites and web
                  applications for businesses, organizations and digital
                  products using modern frontend, backend and integration
                  technologies.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Web Development",
                    "Website Development",
                    "Web Applications",
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "Laravel",
                    "Python",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Web%20Development%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-medium text-black transition hover:bg-emerald-300"
                  >
                    Discuss Your Project
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-medium text-white transition hover:border-emerald-400/30 hover:bg-white/[0.08]"
                  >
                    All Services
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/70">
                        Digital Experience
                      </p>
                      <h2 className="mt-2 text-xl font-semibold">
                        Built Around Your Goals
                      </h2>
                    </div>

                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3">
                      <Sparkles className="h-5 w-5 text-emerald-300" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      "Responsive user experience",
                      "Modern frontend architecture",
                      "Scalable backend functionality",
                      "API & third-party integrations",
                      "SEO-ready technical foundation",
                      "Performance-focused implementation",
                      "Production-ready deployment",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-black/10 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/10 text-xs text-emerald-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-sm text-white/70">
                            {item}
                          </span>
                        </div>

                        <CheckCircle2 className="h-4 w-4 text-emerald-300/70" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                Web Development Capabilities
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                From business websites to custom web applications
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                Web development should serve the business, not merely produce
                another website that looks impressive in a browser tab. The
                architecture, content structure, responsiveness, integrations
                and performance all need to work together.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.05]"
                  >
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10">
                      <Icon className="h-5 w-5 text-emerald-300" />
                    </div>

                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  What We Build
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Web solutions for different business needs
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-white/60">
                  Whether you need a focused business website, a conversion
                  landing page or a larger browser-based application, the
                  implementation can be shaped around the actual use case.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {solutions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-black/10 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />

                    <span className="text-sm leading-6 text-white/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                Technology Stack
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Modern technologies selected around the project
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60">
                The right stack depends on the product, functionality,
                maintainability and deployment requirements. The goal is not to
                collect framework logos like trading cards.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((item) => (
                <article
                  key={item.category}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <h3 className="text-lg font-semibold text-emerald-200">
                    {item.category}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.items}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Ready */}
        <section className="border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.035] p-7 sm:p-10 lg:p-14">
              <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
                <div>
                  <Search className="h-7 w-7 text-emerald-300" />

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Web development with search visibility in mind
                  </h2>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                    SEO should not be something bolted onto a website after
                    development like a questionable aftermarket spoiler.
                    Technical foundations can be considered from the beginning,
                    including semantic HTML, metadata, canonical URLs,
                    structured data, internal linking, responsive behavior and
                    crawl-friendly architecture.
                  </p>
                </div>

                <div className="grid gap-3">
                  {[
                    "Semantic HTML structure",
                    "Metadata & canonical URLs",
                    "Structured data",
                    "Responsive architecture",
                    "Internal linking",
                    "Performance considerations",
                    "Crawl-friendly routing",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI */}
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-10">
                <Globe2 className="h-7 w-7 text-emerald-300" />

                <h2 className="mt-5 text-2xl font-semibold">
                  Websites for Lahore, Pakistan & global clients
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  Develop websites and web applications for businesses in
                  Lahore and across Pakistan, while supporting projects aimed at
                  international markets such as the United States, United
                  Kingdom, Canada, Australia, UAE and Saudi Arabia.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-10">
                <Sparkles className="h-7 w-7 text-emerald-300" />

                <h2 className="mt-5 text-2xl font-semibold">
                  AI-ready web experiences
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  Suitable projects can integrate AI assistants, LLM APIs,
                  conversational interfaces, multilingual workflows and other
                  API-powered AI functionality into a modern web experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-white/10 bg-white/[0.018] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                Development Process
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                From requirements to production
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-5">
              {process.map((item) => (
                <article
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <span className="text-sm font-medium text-emerald-300">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                FAQ
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Web development questions
              </h2>
            </div>

            <div className="mt-12 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-medium text-white/85">
                    <span>{faq.question}</span>

                    <ChevronDown className="h-5 w-5 shrink-0 text-emerald-300 transition-transform group-open:rotate-180" />
                  </summary>

                  <p className="pt-4 text-sm leading-7 text-white/55">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                Related Services
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Extend your web development strategy
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-emerald-400/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold">{service.title}</h3>

                    <ArrowRight className="h-4 w-4 text-emerald-300 transition-transform group-hover:translate-x-1" />
                  </div>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {service.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-24 pt-8 sm:px-8 lg:px-12 lg:pb-32">
          <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.045] p-8 text-center sm:p-12 lg:p-16">
            <BarChart3 className="mx-auto h-8 w-8 text-emerald-300" />

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Build a modern web presence that works
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/55">
              From business websites and landing pages to custom web
              applications, build a digital experience around your users,
              business goals and long-term growth.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Web%20Development%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 font-medium text-black transition hover:bg-emerald-300"
              >
                Start a Web Development Discussion
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Back to top */}
        <div className="px-5 pb-8 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl justify-end">
            <a
              href="#top"
              aria-label="Back to top"
              className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-white/60 transition hover:border-emerald-400/30 hover:text-emerald-300"
            >
              ↑
            </a>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}