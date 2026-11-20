import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  CheckCircle2,
  ChevronDown,
  FileSearch,
  Globe2,
  Layers3,
  MessageCircle,
  Search,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/aeo`;
const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20AEO%20services.";

const title =
  "AEO Services in Lahore | Answer Engine Optimization | GmCodes9";

const description =
  "Answer Engine Optimization (AEO) services for Lahore, Pakistan and international businesses. Improve answer-ready content, question intent coverage, semantic structure, FAQs, internal linking and machine-readable content for modern search and AI-powered answer experiences.";

const socialDescription =
  "AEO services focused on question intent, answer-ready content, semantic structure, FAQs, internal linking, entity context and AI-powered search visibility.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AEO services",
    "Answer Engine Optimization",
    "AEO Lahore",
    "AEO Pakistan",
    "answer engine optimization services",
    "AI search optimization",
    "answer optimization",
    "question based SEO",
    "featured snippet optimization",
    "conversational search optimization",
    "semantic SEO",
    "SEO",
    "GEO",
    "entity SEO",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `${title}`,
    description: socialDescription,
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 628,
        alt:
          "GmCodes9 — Answer Engine Optimization and AEO Services in Lahore",
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

const aeoCapabilities = [
  {
    icon: Target,
    title: "Question Intent Mapping",
    description:
      "Identify the questions, problems and conversational search intents your target audience is trying to solve.",
  },
  {
    icon: MessageCircle,
    title: "Answer-Ready Content",
    description:
      "Structure important information so users and search systems can quickly understand direct answers, explanations and supporting context.",
  },
  {
    icon: FileSearch,
    title: "Featured Snippet Readiness",
    description:
      "Organize definitions, lists, steps, comparisons and concise answers in formats that are easier for search systems to interpret.",
  },
  {
    icon: Layers3,
    title: "Semantic Content Structure",
    description:
      "Build clear relationships between topics, entities, services, questions and supporting content across the website.",
  },
  {
    icon: Search,
    title: "Conversational Search",
    description:
      "Optimize content around natural-language queries and the longer, more specific questions people increasingly use in search.",
  },
  {
    icon: Bot,
    title: "AI Answer Visibility",
    description:
      "Prepare website content for modern answer experiences by improving clarity, context, entities and machine-readable signals.",
  },
  {
    icon: Workflow,
    title: "Internal Linking",
    description:
      "Connect related questions, services and supporting pages to create a stronger topical and semantic content structure.",
  },
  {
    icon: Globe2,
    title: "Local & International Answers",
    description:
      "Structure service and informational content for Lahore, Pakistan and international search audiences without creating doorway-page spam.",
  },
];

const answerFormats = [
  {
    title: "Definitions",
    text: "Clear explanations of technical terms, services, products and concepts.",
  },
  {
    title: "How-To Answers",
    text: "Step-by-step content designed around practical questions and tasks.",
  },
  {
    title: "Comparisons",
    text: "Structured comparisons that help users evaluate technologies, services or approaches.",
  },
  {
    title: "Lists & Checklists",
    text: "Organized information that makes important points easy to scan and understand.",
  },
  {
    title: "Troubleshooting",
    text: "Problem-focused content that addresses symptoms, causes and practical solutions.",
  },
  {
    title: "Service Questions",
    text: "Answers to questions about pricing, process, capabilities, timelines and suitability.",
  },
];

const process = [
  {
    number: "01",
    title: "Research",
    text: "Study search intent, audience questions, existing content and important topic relationships.",
  },
  {
    number: "02",
    title: "Map",
    text: "Group questions by topic, intent, funnel stage and the page that should answer them.",
  },
  {
    number: "03",
    title: "Structure",
    text: "Create clear headings, direct answers, supporting explanations, semantic relationships and internal links.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Improve existing content, metadata, structured data and answer formats without keyword stuffing.",
  },
  {
    number: "05",
    title: "Connect",
    text: "Link AEO with SEO, GEO and entity optimization to create a stronger overall search architecture.",
  },
  {
    number: "06",
    title: "Measure",
    text: "Review search performance, impressions, queries, engagement and content opportunities through available analytics.",
  },
];

const faqs = [
  {
    question: "What is AEO?",
    answer:
      "Answer Engine Optimization, or AEO, is the practice of structuring website content so important questions can be understood and answered clearly by search engines and modern answer experiences. It complements traditional SEO rather than replacing it.",
  },
  {
    question: "Is AEO different from SEO?",
    answer:
      "AEO is a focused part of a broader search strategy. SEO covers technical health, crawlability, relevance, content, links and overall search visibility. AEO places additional emphasis on question intent, direct answers, conversational queries and answer-friendly content structures.",
  },
  {
    question: "Does AEO guarantee featured snippets or AI answers?",
    answer:
      "No. Search engines and AI systems independently decide which information they show. AEO improves the clarity, structure and relevance of content, but no legitimate provider can guarantee a particular search result or AI citation.",
  },
  {
    question: "How does AEO work with GEO?",
    answer:
      "AEO focuses heavily on answering questions clearly, while GEO focuses on visibility across generative and AI-powered search experiences. They overlap through semantic content, entity context, clear answers and machine-readable website structure.",
  },
  {
    question: "Do you provide AEO services in Lahore?",
    answer:
      "Yes. GmCodes9 provides AEO and broader search optimization services for businesses in Lahore and Pakistan, as well as international clients.",
  },
  {
    question: "Can AEO be applied to an existing website?",
    answer:
      "Yes. Existing websites can be audited for question coverage, content structure, internal linking, semantic clarity, structured data and answer opportunities before targeted improvements are made.",
  },
  {
    question: "Does AEO include technical SEO?",
    answer:
      "AEO can benefit from strong technical SEO because search systems need to crawl, understand and access website content effectively. Technical SEO is therefore an important supporting layer, although it remains a distinct service.",
  },
  {
    question: "Can AEO help service businesses?",
    answer:
      "Yes. Service businesses can use AEO to answer questions around services, pricing factors, processes, locations, suitability, comparisons, problems and frequently asked customer questions.",
  },
];

const relatedServices = [
  {
    href: "/services/seo",
    title: "SEO",
    description: "Build the broader organic search foundation.",
  },
  {
    href: "/services/geo",
    title: "GEO",
    description: "Optimize for generative and AI-powered search experiences.",
  },
  {
    href: "/services/entity-seo",
    title: "Entity SEO",
    description: "Strengthen entities, relationships and topical understanding.",
  },
  {
    href: "/services/technical-seo",
    title: "Technical SEO",
    description: "Improve crawlability, indexing and technical search foundations.",
  },
  {
    href: "/services/local-seo",
    title: "Local SEO",
    description: "Improve visibility for location-based searches.",
  },
  {
    href: "/services/international-seo",
    title: "International SEO",
    description: "Build search visibility across multiple international markets.",
  },
  {
    href: "/services/digital-marketing",
    title: "Digital Marketing",
    description: "Connect search visibility with broader digital growth.",
  },
];

export default function AEOPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Answer Engine Optimization Services",
        serviceType: "Answer Engine Optimization",
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
          "Answer Engine Optimization",
          "SEO",
          "Semantic SEO",
          "AI Search Optimization",
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
            name: "AEO",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.12),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                Answer Engine Optimization • AEO
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Answer Engine Optimization for{" "}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  Modern Search
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                Build content that clearly answers the questions your audience
                asks across search engines, conversational queries and
                AI-powered answer experiences.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
                GmCodes9 provides AEO services in Lahore, across Pakistan and
                for international businesses, combining question intent,
                semantic content, internal linking, structured data and strong
                SEO foundations.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-medium text-black transition hover:scale-[1.02]"
                >
                  Discuss AEO Strategy
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/services/seo"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-medium text-white transition hover:bg-white/[0.08]"
                >
                  Explore SEO Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS AEO */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                What AEO means
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Make important information easier to understand and answer.
              </h2>
            </div>

            <div className="space-y-5 text-white/65">
              <p className="text-lg leading-8">
                People do not always search with short keywords anymore. They
                ask complete questions, describe problems and expect concise,
                useful answers.
              </p>

              <p className="leading-8">
                AEO focuses on organizing website information around those
                questions. That means identifying meaningful search intent,
                providing direct answers, expanding with useful context and
                connecting related information through a clear semantic
                structure.
              </p>

              <p className="leading-8">
                The goal is not to manipulate search engines or manufacture
                artificial answers. It is to make genuinely useful information
                easier for users and search systems to discover, interpret and
                connect.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                AEO capabilities
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A question-first content architecture
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                AEO is not simply adding a giant FAQ section to a website and
                hoping the robots feel generous. It requires useful answers,
                logical information architecture and strong semantic signals.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {aeoCapabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.06]"
                  >
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <Icon className="h-5 w-5 text-blue-300" />
                    </div>

                    <h3 className="text-lg font-medium">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ANSWER FORMATS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                Answer formats
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Structure information around real questions.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                Different questions require different answer formats. AEO
                considers the intent behind the query instead of forcing every
                topic into the same content template.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {answerFormats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />

                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/55">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO / GEO / AEO / ENTITY */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Search ecosystem
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                AEO works best as part of a broader search strategy.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                SEO, AEO, GEO and Entity SEO have overlapping signals, but
                they solve different parts of the search visibility problem.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "SEO",
                  text: "Build technical, content and organic search foundations.",
                  href: "/services/seo",
                },
                {
                  title: "AEO",
                  text: "Make useful answers clear, structured and easy to interpret.",
                  href: "/services/aeo",
                },
                {
                  title: "GEO",
                  text: "Prepare content for generative and AI-powered search experiences.",
                  href: "/services/geo",
                },
                {
                  title: "Entity SEO",
                  text: "Clarify entities, relationships and topical context.",
                  href: "/services/entity-seo",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
                >
                  <BadgeCheck className="h-5 w-5 text-violet-300" />

                  <h3 className="mt-5 text-xl font-medium">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-white/75">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SEMANTIC STRUCTURE */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                <Layers3 className="h-5 w-5 text-cyan-300" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold">
                Semantic content architecture
              </h2>

              <p className="mt-4 leading-8 text-white/60">
                Strong AEO content is connected rather than isolated. Important
                questions should lead to relevant services, supporting
                explanations and related topics.
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  "Clear topic hierarchy",
                  "Meaningful headings and sections",
                  "Question-to-answer relationships",
                  "Relevant internal links",
                  "Context around important entities",
                  "Consistent terminology",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                <Bot className="h-5 w-5 text-violet-300" />
              </div>

              <h2 className="mt-7 text-2xl font-semibold">
                Machine-readable context
              </h2>

              <p className="mt-4 leading-8 text-white/60">
                Search systems need more than visible words. Clear page
                relationships, structured data, semantic HTML and consistent
                entity information can help machines interpret what a page is
                about.
              </p>

              <ul className="mt-7 space-y-4">
                {[
                  "Structured data where appropriate",
                  "Service and organization relationships",
                  "Breadcrumb structure",
                  "Semantic HTML",
                  "Consistent metadata",
                  "Clear canonical URLs",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                Our process
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                From questions to structured answers.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="text-sm font-medium text-blue-300">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-medium">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL + INTERNATIONAL */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                  Local & global
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  AEO for Lahore, Pakistan and international markets.
                </h2>
              </div>

              <div className="space-y-5 text-white/60">
                <p className="leading-8">
                  Search questions often contain location, industry,
                  audience and service context. AEO can account for those
                  differences without creating hundreds of thin location
                  pages.
                </p>

                <p className="leading-8">
                  For Lahore and Pakistan, content can address local services,
                  customer questions and regional intent. For international
                  campaigns, the same framework can be adapted to different
                  markets, terminology and search behavior.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {[
                    "Lahore",
                    "Pakistan",
                    "United States",
                    "United Kingdom",
                    "Canada",
                    "Australia",
                    "UAE",
                    "Saudi Arabia",
                  ].map((location) => (
                    <span
                      key={location}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="text-center">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                FAQ
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                AEO questions, answered directly.
              </h2>
            </div>

            <div className="mt-12 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-medium">
                    <span>{faq.question}</span>

                    <ChevronDown className="h-5 w-5 shrink-0 text-white/45 transition group-open:rotate-180" />
                  </summary>

                  <div className="pb-5 pr-8 text-sm leading-7 text-white/55">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              Related services
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Build the complete search ecosystem.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <h3 className="text-lg font-medium">{service.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
                  Explore service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 lg:py-28">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
              <MessageCircle className="h-6 w-6 text-cyan-300" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-5xl">
              Turn important search questions into useful answers.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/55">
              Build an AEO strategy around real search intent, useful content,
              semantic structure and a stronger overall search architecture.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-medium text-black transition hover:scale-[1.02]"
              >
                Start an AEO Conversation
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-medium text-white transition hover:bg-white/[0.08]"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* BACK TO TOP */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/70 shadow-2xl backdrop-blur-xl transition hover:bg-white hover:text-black"
      >
        ↑
      </a>
    </>
  );
}
