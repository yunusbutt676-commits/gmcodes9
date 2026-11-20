import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Code2,
  Eye,
  Globe2,
  Layers3,
  MessageCircle,
  Mic,
  Network,
  Rocket,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/ai-development`;
const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hello%20GmCodes9%2C%20I%27m%20interested%20in%20AI%20development%20services.";

export const metadata: Metadata = {
  title:
    "AI Development Services in Lahore | AI & LLM Integration | GmCodes9",
  description:
    "AI development and AI integration services in Lahore, Pakistan and worldwide. Build AI chatbots, LLM applications, AI assistants, voice AI, computer vision solutions and AI-powered web applications with OpenAI, Groq, Python and FastAPI.",
  keywords: [
    "AI development services",
    "AI development Lahore",
    "AI development Pakistan",
    "AI integration services",
    "LLM integration",
    "AI chatbot development",
    "AI assistant development",
    "AI web application development",
    "OpenAI integration",
    "Groq integration",
    "FastAPI AI development",
    "Python AI development",
    "voice AI chatbot",
    "computer vision development",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title:
      "AI Development Services in Lahore | AI & LLM Integration | GmCodes9",
    description:
      "AI development, LLM integration, AI chatbots, AI assistants, voice AI, computer vision and AI-powered web applications for businesses in Pakistan and worldwide.",
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 628,
        alt:
          "GmCodes9 — AI Development, LLM Integration & AI-Powered Web Applications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Development Services in Lahore | AI & LLM Integration | GmCodes9",
    description:
      "AI development, LLM integration, AI chatbots, voice AI, computer vision and AI-powered web applications.",
    images: [`${SITE_URL}/og.png`],
  },
};

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI Application Development",
    description:
      "Build practical AI-powered web applications that connect intelligent workflows with real business processes, data and user interfaces.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description:
      "Create conversational AI assistants for customer support, internal tools, education, knowledge access and business workflows.",
  },
  {
    icon: Network,
    title: "LLM Integration",
    description:
      "Integrate large language model APIs into existing applications, products and business systems without rebuilding the entire platform.",
  },
  {
    icon: Mic,
    title: "Voice AI Applications",
    description:
      "Develop voice-enabled AI experiences and conversational interfaces that connect speech-based interaction with application workflows.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Integrate computer vision capabilities for image analysis, face-related workflows and other visual application use cases.",
  },
  {
    icon: Workflow,
    title: "AI Automation & Workflows",
    description:
      "Connect AI capabilities with APIs, databases and application logic to automate repetitive business and information workflows.",
  },
];

const technologies = [
  "OpenAI APIs",
  "Groq",
  "Python",
  "FastAPI",
  "Django",
  "Flask",
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "OpenCV",
  "DeepFace",
  "REST APIs",
  "MySQL",
  "MongoDB",
];

const solutions = [
  "AI-powered web applications",
  "AI customer support assistants",
  "Knowledge-based AI assistants",
  "AI tutoring systems",
  "Multilingual AI assistants",
  "AI chat interfaces",
  "Voice-enabled AI applications",
  "AI dashboards and business tools",
  "AI API integrations",
  "Computer vision applications",
  "AI workflow automation",
  "Internal AI productivity tools",
];

const process = [
  {
    number: "01",
    title: "Understand the Use Case",
    description:
      "Define the business problem, users, required AI capabilities, data sources and expected application behavior.",
  },
  {
    number: "02",
    title: "Design the AI Workflow",
    description:
      "Plan the application architecture, API integrations, prompts, data flow, authentication and frontend experience.",
  },
  {
    number: "03",
    title: "Build the Integration",
    description:
      "Connect AI APIs and application services with the frontend, backend, databases and business logic.",
  },
  {
    number: "04",
    title: "Test Real Scenarios",
    description:
      "Test conversations, edge cases, application workflows, responses, errors and user interactions.",
  },
  {
    number: "05",
    title: "Launch the Application",
    description:
      "Deploy the AI-powered application with a responsive user experience and production-ready application structure.",
  },
  {
    number: "06",
    title: "Improve & Extend",
    description:
      "Iterate on workflows, integrations, user experience and additional AI capabilities as the product grows.",
  },
];

const faqs = [
  {
    question: "What AI development services does GmCodes9 provide?",
    answer:
      "GmCodes9 provides AI application development, AI chatbot development, LLM integration, AI assistants, voice AI applications, computer vision integrations, AI API integrations and AI-powered web application development.",
  },
  {
    question: "Do you integrate OpenAI APIs into web applications?",
    answer:
      "Yes. OpenAI APIs can be integrated into web applications, chatbots, assistants, automation workflows and other application experiences where an AI model is part of the product functionality.",
  },
  {
    question: "Do you work with Groq for AI applications?",
    answer:
      "Yes. Groq can be integrated into AI-powered applications where its API capabilities and supported models fit the application's requirements.",
  },
  {
    question: "Can you build an AI chatbot for a business?",
    answer:
      "Yes. AI chatbots can be developed for customer support, internal knowledge access, education, lead interactions and other business workflows. The chatbot can be integrated with an existing website or developed as part of a new web application.",
  },
  {
    question: "Can AI be integrated into an existing website or application?",
    answer:
      "Yes. AI functionality can be added to an existing application through APIs and backend integrations without necessarily rebuilding the complete frontend or backend.",
  },
  {
    question: "Can you build AI applications with Python and FastAPI?",
    answer:
      "Yes. Python and FastAPI can be used to build AI-focused backend services, API layers and application integrations alongside technologies such as React, Next.js, Node.js and modern databases.",
  },
  {
    question: "Do you provide AI voice chatbot development?",
    answer:
      "Yes. Voice-enabled AI applications can connect speech interaction with conversational AI and application workflows, depending on the selected speech and AI services.",
  },
  {
    question: "Can AI applications support multiple languages?",
    answer:
      "Yes. Multilingual AI experiences can be designed when the selected AI and speech services support the required languages and the application's workflow is designed for multilingual interaction.",
  },
  {
    question: "Do you train AI models from scratch?",
    answer:
      "The primary focus is practical AI integration and application development using existing AI and LLM APIs, rather than claiming custom model training or research-level model development.",
  },
  {
    question: "Can AI development be combined with SEO and AI search optimization?",
    answer:
      "Yes. AI-powered applications can be developed alongside SEO, Generative Engine Optimization, Answer Engine Optimization and Entity SEO strategies when search visibility and AI-search discoverability are part of the project.",
  },
];

const relatedServices = [
  {
    href: "/services/full-stack-development",
    title: "Full Stack Development",
  },
  {
    href: "/services/seo",
    title: "SEO Services",
  },
  {
    href: "/services/geo",
    title: "GEO Services",
  },
  {
    href: "/services/aeo",
    title: "AEO Services",
  },
  {
    href: "/services/entity-seo",
    title: "Entity SEO",
  },
  {
    href: "/services/digital-marketing",
    title: "Digital Marketing",
  },
];

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "AI Development Services",
        serviceType:
          "AI Development, AI Integration and LLM Application Development",
        description:
          "AI development and integration services including AI chatbots, LLM applications, AI assistants, voice AI, computer vision and AI-powered web applications.",
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
          "AI Development",
          "AI Integration",
          "LLM Integration",
          "AI Application Development",
          "AI Chatbot Development",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name:
          "AI Development Services in Lahore | AI & LLM Integration | GmCodes9",
        description:
          "AI development and AI integration services for businesses in Lahore, Pakistan and worldwide.",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${PAGE_URL}#service`,
        },
        mainEntity: {
          "@id": `${PAGE_URL}#service`,
        },
        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
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
            name: "AI Development",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function AIDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <JsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.14),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              AI Development • LLM Integration • AI Applications
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              AI Development Services for
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Intelligent Web Applications
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Build practical AI-powered applications with AI APIs, LLM
              integrations, intelligent assistants, conversational interfaces,
              voice AI, computer vision and automation. GmCodes9 develops AI
              solutions for businesses in Lahore, Pakistan and international
              markets.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
              >
                Discuss an AI Project
                <ArrowRight className="h-5 w-5" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-medium text-white/85 transition hover:bg-white/[0.08]"
              >
                Explore All Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/45">
              <span>OpenAI APIs</span>
              <span>Groq</span>
              <span>Python</span>
              <span>FastAPI</span>
              <span>React.js</span>
              <span>Next.js</span>
              <span>Computer Vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              AI integration that solves real problems
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From AI APIs to complete AI-powered products
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/60">
              AI becomes useful when it is connected to an actual product,
              workflow or business process. GmCodes9 combines modern web
              development with AI integrations to build applications where
              intelligent capabilities work alongside interfaces, APIs,
              databases and business logic.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-white/60">
              Whether you need an AI chatbot inside an existing website, a
              multilingual assistant, a voice-enabled application, an AI
              tutoring platform or a custom AI workflow, the goal is the same:
              turn AI capabilities into a usable product rather than another
              impressive demo that nobody opens twice.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["AI Integration", "Connect AI capabilities to existing products."],
              ["LLM Applications", "Build conversational and intelligent workflows."],
              ["AI Automation", "Connect models with APIs, data and workflows."],
              ["AI + Web", "Combine AI services with modern web applications."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/5 p-3 text-cyan-300">
                    <Zap className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              AI capabilities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI development built around your application
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Practical AI development across conversational AI, LLM
              integrations, computer vision, voice interfaces and intelligent
              application workflows.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-2xl border border-violet-400/10 bg-violet-400/5 p-3 text-violet-300">
              <Code2 className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI technologies and application stack
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              AI capabilities can be connected to modern frontend and backend
              systems through APIs, Python services and application-level
              integrations.
            </p>

            <p className="mt-4 leading-8 text-white/55">
              The technology choice depends on the use case, existing
              application architecture, required integrations and expected
              user experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {technologies.map((technology) => (
              <div
                key={technology}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-center text-sm text-white/70 transition hover:border-cyan-300/20 hover:text-white"
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Solutions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI solutions for modern businesses
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              AI can support customer-facing products, internal systems,
              education platforms, business workflows and data-driven
              applications.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                <span className="text-sm text-white/70">{solution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI + FULL STACK */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.07] via-white/[0.03] to-violet-400/[0.06] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-cyan-200">
                <Layers3 className="h-4 w-4" />
                AI + Full Stack Engineering
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                AI is more powerful when it is part of the product
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-white/60">
                An AI model alone is not a complete application. Production
                experiences often require authentication, databases, APIs,
                frontend interfaces, payments, business logic and deployment.
                Combining AI integration with full-stack engineering makes it
                possible to build the complete experience.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "React and Next.js interfaces",
                  "Python and FastAPI services",
                  "Node.js backend integrations",
                  "Database-connected AI workflows",
                  "Authentication and user roles",
                  "Third-party API integrations",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/services/full-stack-development"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-3.5 font-medium transition hover:bg-white/[0.1]"
            >
              Full Stack Development
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* AI + SEARCH */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-3 text-cyan-300">
                <Globe2 className="h-6 w-6" />
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                AI products with search-ready architecture
              </h2>

              <p className="mt-5 leading-8 text-white/55">
                When an AI-powered product also needs organic visibility, its
                technical architecture and public content can be developed
                with search in mind.
              </p>

              <p className="mt-4 leading-8 text-white/55">
                GmCodes9 can combine AI development with SEO, Generative Engine
                Optimization, Answer Engine Optimization and Entity SEO so the
                product and its public web presence are structured for both
                users and modern search systems.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "SEO",
                  href: "/services/seo",
                  text: "Search-friendly technical and content foundations.",
                },
                {
                  title: "GEO",
                  href: "/services/geo",
                  text: "Improve content visibility across generative search experiences.",
                },
                {
                  title: "AEO",
                  href: "/services/aeo",
                  text: "Structure useful content for answer-focused search.",
                },
                {
                  title: "Entity SEO",
                  href: "/services/entity-seo",
                  text: "Strengthen relationships between your brand, services and topics.",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <ArrowRight className="h-5 w-5 text-white/35 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {item.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            Development process
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            From AI concept to working application
          </h2>

          <p className="mt-5 leading-8 text-white/55">
            A structured process keeps AI projects focused on application
            requirements instead of turning the project into an endless
            collection of shiny API experiments.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map((item) => (
            <article
              key={item.number}
              className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="text-sm font-semibold text-cyan-300">
                {item.number}
              </div>

              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Frequently asked questions
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI development questions
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/[0.035]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-medium marker:hidden">
                  <span>{faq.question}</span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-white/40 transition group-open:rotate-180" />
                </summary>

                <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-white/55">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Explore more
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Related GmCodes9 services
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300"
          >
            All services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:border-cyan-300/20 hover:bg-white/[0.05]"
            >
              <span className="text-sm text-white/70 group-hover:text-white">
                {service.title}
              </span>

              <ArrowRight className="h-4 w-4 text-white/30 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
          <div className="relative px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_45%)]" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/5 text-cyan-300">
                <Bot className="h-7 w-7" />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Build an AI-powered product that people can actually use
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/55">
                Discuss your AI use case, existing application or product idea
                and turn it into a practical AI-powered web experience.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start an AI Project
                </a>

                <Link
                  href="/#portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-medium text-white/80 transition hover:bg-white/[0.08]"
                >
                  View Portfolio
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BACK TO TOP */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/60 shadow-2xl backdrop-blur-xl transition hover:border-cyan-300/20 hover:text-cyan-300"
      >
        ↑
      </a>
    </main>
  );
}