import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Code2,
  FileSearch,
  Globe2,
  Layers3,
  MessageCircle,
  Network,
  Search,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/geo`;
const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hello%20GmCodes9%2C%20I%27m%20interested%20in%20GEO%20and%20AI%20search%20optimization.";

export const metadata: Metadata = {
  title:
    "GEO Services in Lahore | Generative Engine Optimization | GmCodes9",
  description:
    "Generative Engine Optimization (GEO) services for businesses in Lahore, Pakistan and worldwide. Improve AI-search visibility with structured content, entity relationships, answer-ready information, technical SEO and machine-readable website architecture.",
  keywords: [
    "GEO services",
    "Generative Engine Optimization",
    "GEO Lahore",
    "GEO Pakistan",
    "AI search optimization",
    "generative search optimization",
    "AI search visibility",
    "LLM visibility",
    "AI search SEO",
    "ChatGPT search optimization",
    "AI answer visibility",
    "entity optimization",
    "AEO",
    "entity SEO",
    "technical SEO",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title:
      "GEO Services in Lahore | Generative Engine Optimization | GmCodes9",
    description:
      "Improve visibility across AI-powered search and generative experiences with GEO, structured content, entity optimization and search-ready website architecture.",
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 628,
        alt:
          "GmCodes9 — Generative Engine Optimization and AI Search Visibility Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GEO Services in Lahore | Generative Engine Optimization | GmCodes9",
    description:
      "Generative Engine Optimization, AI search visibility, entity optimization and answer-ready content for modern search.",
    images: [`${SITE_URL}/og.png`],
  },
};

const geoCapabilities = [
  {
    icon: BrainCircuit,
    title: "AI Search Visibility",
    description:
      "Prepare website content and information architecture for modern AI-powered search and generative answer experiences.",
  },
  {
    icon: FileSearch,
    title: "Answer-Ready Content",
    description:
      "Structure useful information around clear questions, entities, topics and concise explanations that can be understood by users and machines.",
  },
  {
    icon: Network,
    title: "Entity Relationships",
    description:
      "Strengthen relationships between your brand, people, services, technologies, locations, topics and other relevant entities.",
  },
  {
    icon: Code2,
    title: "Machine-Readable Architecture",
    description:
      "Improve technical and structured-data foundations so important information is easier for systems to interpret.",
  },
  {
    icon: Search,
    title: "Search Intent Alignment",
    description:
      "Connect content with the questions, comparisons, problems and decisions that users are actually trying to solve.",
  },
  {
    icon: Workflow,
    title: "SEO + GEO Integration",
    description:
      "Combine traditional organic search optimization with AI-search considerations instead of treating them as completely separate systems.",
  },
];

const geoSignals = [
  "Clear entity definitions",
  "Consistent brand information",
  "Useful first-hand content",
  "Structured information",
  "Semantic HTML",
  "Descriptive headings",
  "Question-focused sections",
  "Strong internal linking",
  "Relevant contextual relationships",
  "Author and organization information",
  "Service and product context",
  "Geographic relevance",
  "Technical SEO foundations",
  "Structured data",
  "Content depth and topical relevance",
];

const contentTypes = [
  "Service pages",
  "Product pages",
  "Comparison pages",
  "How-to guides",
  "FAQ content",
  "Expert explanations",
  "Industry guides",
  "Location pages",
  "Case studies",
  "Business information",
  "Technology documentation",
  "Educational resources",
];

const process = [
  {
    number: "01",
    title: "Discover the Entity",
    description:
      "Identify the business, services, people, products, technologies, locations and topics that define the website.",
  },
  {
    number: "02",
    title: "Map Search Intent",
    description:
      "Identify the questions, problems, comparisons and information needs associated with the target audience.",
  },
  {
    number: "03",
    title: "Improve Content Structure",
    description:
      "Organize important information into clear, useful and semantically connected pages and sections.",
  },
  {
    number: "04",
    title: "Strengthen Machine Understanding",
    description:
      "Use semantic HTML, structured data, consistent terminology and meaningful internal relationships.",
  },
  {
    number: "05",
    title: "Connect the Search Cluster",
    description:
      "Link GEO with SEO, AEO and Entity SEO so the website communicates a coherent topic and entity structure.",
  },
  {
    number: "06",
    title: "Monitor & Refine",
    description:
      "Review search visibility, content performance and available AI-search signals, then improve the strategy over time.",
  },
];

const faqs = [
  {
    question: "What is Generative Engine Optimization?",
    answer:
      "Generative Engine Optimization, commonly called GEO, is the practice of improving a website's content, structure and contextual signals so information is easier for modern AI-powered search and generative systems to understand, retrieve and potentially reference.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer:
      "Traditional SEO primarily focuses on improving visibility in conventional search engines. GEO adds considerations for generative and AI-powered search experiences, including answer-ready content, entity relationships, contextual clarity and machine-readable information.",
  },
  {
    question: "Does GEO guarantee that ChatGPT or another AI will mention my business?",
    answer:
      "No. No legitimate GEO service can guarantee inclusion, citations or recommendations in a particular AI system. Generative systems use changing retrieval, ranking and model processes that are not fully controlled by a website owner.",
  },
  {
    question: "Does GEO replace SEO?",
    answer:
      "No. GEO works best alongside strong traditional SEO. Technical SEO, useful content, internal linking, site architecture and search relevance remain important foundations for broader search visibility.",
  },
  {
    question: "Can GEO help a local business in Lahore?",
    answer:
      "GEO can be combined with local SEO and clear geographic information to improve how a business communicates its services, location and relevance. It does not guarantee placement in AI-generated local recommendations.",
  },
  {
    question: "What types of websites can benefit from GEO?",
    answer:
      "Service businesses, SaaS companies, ecommerce websites, technology companies, professional services, education platforms, AI products, local businesses and information-rich websites can all benefit from clearer content and entity-focused architecture.",
  },
  {
    question: "Does structured data help with GEO?",
    answer:
      "Structured data can provide explicit machine-readable information about entities and pages. It supports clearer machine understanding, although structured data alone does not guarantee visibility or citations in AI search systems.",
  },
  {
    question: "Can GEO be combined with AEO?",
    answer:
      "Yes. GEO and AEO overlap in their focus on useful answers and machine-readable information. AEO can focus more directly on answer-oriented content while GEO takes a broader view of generative search visibility.",
  },
  {
    question: "Can GEO be combined with Entity SEO?",
    answer:
      "Yes. Entity SEO is an important part of a broader GEO strategy because AI systems need contextual relationships between businesses, people, services, topics, locations and technologies.",
  },
  {
    question: "Can GmCodes9 optimize an existing website for GEO?",
    answer:
      "Yes. An existing website can be reviewed for technical structure, content clarity, entity relationships, internal linking, structured data and search intent before implementing GEO improvements.",
  },
];

const relatedServices = [
  {
    href: "/services/seo",
    title: "SEO Services",
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
    href: "/services/technical-seo",
    title: "Technical SEO",
  },
  {
    href: "/services/local-seo",
    title: "Local SEO",
  },
  {
    href: "/services/international-seo",
    title: "International SEO",
  },
];

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Generative Engine Optimization Services",
        serviceType: "Generative Engine Optimization",
        description:
          "GEO services focused on AI-search visibility, answer-ready content, entity relationships, structured information and machine-readable website architecture.",
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
          "Generative Engine Optimization",
          "AI Search Optimization",
          "AI Search Visibility",
          "Entity Optimization",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name:
          "GEO Services in Lahore | Generative Engine Optimization | GmCodes9",
        description:
          "Generative Engine Optimization services for AI-search visibility in Lahore, Pakistan and international markets.",
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
            name: "GEO",
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

export default function GEOPage() {
  return (
    <main id="top" className="min-h-screen bg-[#05070b] text-white">
      <JsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.14),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              GEO • AI Search • Generative Search Visibility
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              Generative Engine Optimization for
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                AI-Powered Search Visibility
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              GEO services for businesses in Lahore, Pakistan and worldwide.
              Improve how your brand, services and expertise are represented
              across modern AI-powered search experiences through clearer
              content, entity relationships, answer-ready information and
              machine-readable website architecture.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
              >
                Discuss GEO Strategy
                <ArrowRight className="h-5 w-5" />
              </a>

              <Link
                href="/services/seo"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-medium text-white/85 transition hover:bg-white/[0.08]"
              >
                Explore SEO Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/45">
              <span>AI Search</span>
              <span>Generative Search</span>
              <span>Entity Optimization</span>
              <span>Answer-Ready Content</span>
              <span>Structured Data</span>
              <span>Technical SEO</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Search is changing
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Make your website easier for AI systems to understand
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/60">
              People increasingly discover information through search
              experiences that can summarize, compare and answer questions
              directly. That changes how businesses need to communicate what
              they do, who they serve and why their information is relevant.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-white/60">
              GEO focuses on the information architecture behind that
              communication: useful content, clear entities, contextual
              relationships, answer-ready sections, technical accessibility
              and consistent signals across the website.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              [
                "Entity Clarity",
                "Clearly define the business, people, services, products and topics that matter.",
              ],
              [
                "Context",
                "Connect related information so systems can understand what each page means.",
              ],
              [
                "Useful Answers",
                "Provide direct, well-structured information around real user questions.",
              ],
              [
                "Technical Access",
                "Keep the website technically accessible and understandable to search systems.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-300/10 bg-cyan-300/5 p-3 text-cyan-300">
                    <CheckCircle2 className="h-5 w-5" />
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
              GEO capabilities
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Build a stronger foundation for generative search
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              GEO works across content, technical SEO, entity understanding,
              information architecture and contextual relationships.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {geoCapabilities.map((item) => {
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

      {/* GEO SIGNALS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-2xl border border-violet-400/10 bg-violet-400/5 p-3 text-violet-300">
              <Network className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Signals that improve machine understanding
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              There is no single “GEO switch.” AI-search visibility depends on
              many signals and systems. The goal is to make the website's
              information clearer, more useful and more consistently connected.
            </p>

            <p className="mt-4 leading-8 text-white/55">
              Structured data is useful, but it is only one part of the
              architecture. Content quality, context, technical accessibility
              and entity relationships matter too.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {geoSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-center text-sm text-white/65"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT TYPES */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Content architecture
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Content that answers real questions
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Different search intents require different content formats.
              Strong GEO architecture connects useful information instead of
              producing endless pages with slightly different keywords.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contentTypes.map((type) => (
              <div
                key={type}
                className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm text-white/65"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO + GEO + AEO + ENTITY */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.07] via-white/[0.03] to-violet-400/[0.06] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-cyan-200">
                <Layers3 className="h-4 w-4" />
                Search Visibility Architecture
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                GEO works best as part of a broader search strategy
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-white/60">
                GEO should not replace traditional SEO, AEO or Entity SEO.
                Each discipline addresses a different part of the search
                visibility problem, and together they can create a more
                coherent information architecture.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  ["SEO", "/services/seo", "Organic search foundations"],
                  ["AEO", "/services/aeo", "Answer-focused content"],
                  [
                    "Entity SEO",
                    "/services/entity-seo",
                    "Entity relationships",
                  ],
                  [
                    "Technical SEO",
                    "/services/technical-seo",
                    "Machine accessibility",
                  ],
                ].map(([title, href, text]) => (
                  <Link
                    key={title}
                    href={href}
                    className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4 transition hover:border-cyan-300/20"
                  >
                    <div className="font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm text-white/45">{text}</div>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/services/seo"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-3.5 font-medium transition hover:bg-white/[0.1]"
            >
              View SEO Strategy
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* GEO + AI DEVELOPMENT */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-3 text-cyan-300">
                <Bot className="h-6 w-6" />
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                GEO for AI-powered products and businesses
              </h2>

              <p className="mt-5 leading-8 text-white/55">
                AI products still need strong public-facing information.
                Product pages, documentation, service descriptions, company
                information and educational content can all contribute to a
                clearer digital entity.
              </p>

              <p className="mt-4 leading-8 text-white/55">
                When AI development and search optimization are handled
                together, the product architecture and its public web presence
                can support each other.
              </p>

              <Link
                href="/services/ai-development"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-300"
              >
                Explore AI Development
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "AI Products",
                  "Make product information easier to understand.",
                ],
                [
                  "Documentation",
                  "Create clear technical and educational context.",
                ],
                [
                  "Service Architecture",
                  "Connect offerings with related topics and entities.",
                ],
                [
                  "Knowledge Content",
                  "Answer real questions around the product or service.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"
                >
                  <h3 className="font-semibold">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            GEO process
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A practical approach to generative search optimization
          </h2>

          <p className="mt-5 leading-8 text-white/55">
            GEO is treated as an information architecture and search visibility
            problem, not a collection of magic prompts.
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
              GEO questions
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
                <Sparkles className="h-7 w-7" />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Prepare your website for the next generation of search
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/55">
                Build clearer content, stronger entity relationships and a
                search-ready website architecture for conventional and
                AI-powered discovery.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Discuss GEO
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