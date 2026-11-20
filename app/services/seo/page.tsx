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
  Link2,
  MapPin,
  MessageCircle,
  Network,
  Search,
  Settings2,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/seo`;
const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hello%20GmCodes9%2C%20I%27m%20interested%20in%20SEO%20services.";

export const metadata: Metadata = {
  title:
    "SEO Services in Lahore | Technical, Local & International SEO | GmCodes9",
  description:
    "Professional SEO services in Lahore, Pakistan and worldwide covering technical SEO, on-page SEO, local SEO, international SEO, ecommerce SEO, structured data, content optimization and search visibility.",
  keywords: [
    "SEO services",
    "SEO services Lahore",
    "SEO services Pakistan",
    "SEO consultant Lahore",
    "technical SEO",
    "local SEO",
    "international SEO",
    "ecommerce SEO",
    "on page SEO",
    "SEO audit",
    "SEO optimization",
    "Google SEO",
    "search engine optimization",
    "GEO",
    "AEO",
    "entity SEO",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title:
      "SEO Services in Lahore | Technical, Local & International SEO | GmCodes9",
    description:
      "Technical SEO, local SEO, international SEO, ecommerce SEO, structured data and search visibility services for businesses in Pakistan and worldwide.",
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 628,
        alt:
          "GmCodes9 — SEO, Technical SEO, Local SEO & International SEO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SEO Services in Lahore | Technical, Local & International SEO | GmCodes9",
    description:
      "SEO services covering technical SEO, local SEO, international SEO, ecommerce SEO, structured data and search visibility.",
    images: [`${SITE_URL}/og.png`],
  },
};

const seoServices = [
  {
    icon: Settings2,
    title: "Technical SEO",
    description:
      "Improve crawlability, indexability, site architecture, performance, metadata, canonicalization, structured data and technical search foundations.",
    href: "/services/technical-seo",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Build stronger local search visibility for businesses targeting Lahore, Pakistan and other specific geographic markets.",
    href: "/services/local-seo",
  },
  {
    icon: Globe2,
    title: "International SEO",
    description:
      "Create search strategies for businesses targeting multiple countries, regions, languages and international audiences.",
    href: "/services/international-seo",
  },
  {
    icon: Sparkles,
    title: "Generative Engine Optimization",
    description:
      "Optimize useful, structured and entity-aware content for visibility across modern generative and AI-powered search experiences.",
    href: "/services/geo",
  },
  {
    icon: MessageCircle,
    title: "Answer Engine Optimization",
    description:
      "Structure content around clear questions, entities and useful answers for answer-focused search experiences.",
    href: "/services/aeo",
  },
  {
    icon: Network,
    title: "Entity SEO",
    description:
      "Strengthen the relationships between your brand, services, people, technologies, topics and geographic markets.",
    href: "/services/entity-seo",
  },
];

const capabilities = [
  {
    icon: Search,
    title: "SEO Audits",
    description:
      "Identify technical, content, indexing, internal linking and on-page opportunities affecting organic search visibility.",
  },
  {
    icon: Code2,
    title: "Technical Optimization",
    description:
      "Improve site structure, metadata, canonical URLs, structured data, crawlability, indexability and technical foundations.",
  },
  {
    icon: Target,
    title: "Search Intent",
    description:
      "Align pages with the actual intent behind informational, commercial, local and transactional searches.",
  },
  {
    icon: Link2,
    title: "Internal Linking",
    description:
      "Create meaningful relationships between related pages, services, topics and content clusters.",
  },
  {
    icon: BarChart3,
    title: "Performance & Measurement",
    description:
      "Use search performance data, indexing signals, impressions, clicks and rankings to guide ongoing improvements.",
  },
  {
    icon: TrendingUp,
    title: "Organic Growth",
    description:
      "Build sustainable search foundations designed to improve relevant visibility over time rather than chase short-lived tricks.",
  },
];

const technicalAreas = [
  "Crawlability",
  "Indexability",
  "XML sitemaps",
  "Robots.txt",
  "Canonical URLs",
  "Metadata",
  "Semantic HTML",
  "Structured data",
  "Open Graph",
  "Internal linking",
  "URL architecture",
  "Page experience",
  "Core Web Vitals",
  "Mobile usability",
  "JavaScript SEO",
];

const businessTypes = [
  "Business websites",
  "SaaS platforms",
  "Ecommerce websites",
  "Service businesses",
  "Professional services",
  "Education platforms",
  "Technology companies",
  "AI products",
  "Local businesses",
  "International businesses",
  "Content-driven websites",
  "Startup websites",
];

const process = [
  {
    number: "01",
    title: "Audit & Discovery",
    description:
      "Review the website, technical structure, content, indexing signals, search intent and existing organic visibility.",
  },
  {
    number: "02",
    title: "SEO Strategy",
    description:
      "Prioritize technical fixes, keyword themes, content opportunities, page architecture and internal linking.",
  },
  {
    number: "03",
    title: "Technical Optimization",
    description:
      "Improve the underlying search foundations so search engines can crawl, understand and index important pages.",
  },
  {
    number: "04",
    title: "Content & On-Page SEO",
    description:
      "Optimize page structure, headings, semantic relevance, metadata, internal links and useful search-focused content.",
  },
  {
    number: "05",
    title: "Measure & Improve",
    description:
      "Monitor search performance and use real data to identify additional opportunities and technical issues.",
  },
  {
    number: "06",
    title: "Expand Search Visibility",
    description:
      "Build additional topical, geographic, entity and content relationships as the website grows.",
  },
];

const faqs = [
  {
    question: "What SEO services does GmCodes9 provide?",
    answer:
      "GmCodes9 provides technical SEO, on-page SEO, local SEO, international SEO, ecommerce SEO, SEO audits, structured data optimization, internal linking, search intent optimization and broader organic search strategy.",
  },
  {
    question: "Do you provide SEO services in Lahore?",
    answer:
      "Yes. SEO services are available for businesses in Lahore and across Pakistan, as well as international businesses targeting markets such as the United States, United Kingdom, Canada, Australia, UAE and Saudi Arabia.",
  },
  {
    question: "What is technical SEO?",
    answer:
      "Technical SEO focuses on the technical foundations that help search engines crawl, understand and index a website. It can include site architecture, canonical URLs, metadata, structured data, sitemaps, robots.txt, internal linking, performance and JavaScript SEO.",
  },
  {
    question: "Do you provide local SEO?",
    answer:
      "Yes. Local SEO can help businesses targeting specific cities, regions or service areas improve their geographic search visibility through technical, content and local relevance strategies.",
  },
  {
    question: "Do you provide international SEO?",
    answer:
      "Yes. International SEO strategies can be designed for businesses targeting multiple countries or regions, including appropriate site architecture, geographic relevance, content strategy and international search considerations.",
  },
  {
    question: "Do you optimize ecommerce websites for SEO?",
    answer:
      "Yes. Ecommerce SEO can cover category pages, product pages, internal linking, structured data, technical foundations, search intent and other factors that help search engines understand ecommerce content.",
  },
  {
    question: "Do you provide SEO audits?",
    answer:
      "Yes. An SEO audit can review technical SEO, indexing, crawlability, metadata, content structure, internal linking, structured data, performance and other organic search factors.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO results vary by website authority, competition, technical condition, content quality, search intent and market. SEO is generally a long-term process rather than a guaranteed fixed-time ranking service.",
  },
  {
    question: "Can SEO be combined with GEO and AEO?",
    answer:
      "Yes. Traditional SEO can be combined with Generative Engine Optimization and Answer Engine Optimization to create a broader search visibility strategy across conventional search and emerging AI-powered search experiences.",
  },
  {
    question: "Can SEO be combined with Entity SEO?",
    answer:
      "Yes. Entity SEO can strengthen the relationships between a business, its services, technologies, people, topics and geographic markets, supporting clearer machine understanding of the website and brand.",
  },
];

const relatedServices = [
  {
    href: "/services/full-stack-development",
    title: "Full Stack Development",
  },
  {
    href: "/services/ai-development",
    title: "AI Development",
  },
  {
    href: "/services/digital-marketing",
    title: "Digital Marketing",
  },
  {
    href: "/services/social-media-marketing",
    title: "Social Media Marketing",
  },
  {
    href: "/services/google-ads",
    title: "Google Ads",
  },
  {
    href: "/services/meta-ads",
    title: "Meta Ads",
  },
];

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "SEO Services",
        serviceType:
          "Search Engine Optimization, Technical SEO, Local SEO and International SEO",
        description:
          "SEO services covering technical SEO, on-page optimization, local SEO, international SEO, ecommerce SEO, structured data, internal linking and organic search strategy.",
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
          "Search Engine Optimization",
          "Technical SEO",
          "Local SEO",
          "International SEO",
          "Ecommerce SEO",
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name:
          "SEO Services in Lahore | Technical, Local & International SEO | GmCodes9",
        description:
          "SEO services for businesses in Lahore, Pakistan and international markets.",
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
            name: "SEO",
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

export default function SEOPage() {
  return (
    <main id="top" className="min-h-screen bg-[#05070b] text-white">
      <JsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.12),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-5xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200">
              <Search className="h-4 w-4" />
              SEO • Technical SEO • Local SEO • International SEO
            </div>

            <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
              SEO Services for
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Sustainable Search Visibility
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
              Professional SEO services for businesses in Lahore, Pakistan and
              international markets. Improve technical foundations, search
              intent alignment, content structure, internal linking, structured
              data and organic search visibility with a strategy built around
              your actual business goals.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
              >
                Discuss SEO Strategy
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
              <span>Technical SEO</span>
              <span>Local SEO</span>
              <span>International SEO</span>
              <span>Ecommerce SEO</span>
              <span>Structured Data</span>
              <span>GEO</span>
              <span>AEO</span>
              <span>Entity SEO</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Search foundations first
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              SEO that connects technical quality with search intent
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-white/60">
              Search visibility is not created by adding a pile of keywords to
              a page and hoping Google develops feelings. Effective SEO
              combines technical accessibility, useful content, clear
              information architecture, relevant internal linking and strong
              alignment with what people are actually searching for.
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-white/60">
              GmCodes9 approaches SEO as part of the broader website
              architecture, combining web development, technical optimization,
              content structure, structured data, entity relationships and
              search strategy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              [
                "Technical Foundation",
                "Make important pages easier to crawl, understand and index.",
              ],
              [
                "Search Intent",
                "Match pages with the questions and goals behind searches.",
              ],
              [
                "Topical Structure",
                "Connect related services and content into useful clusters.",
              ],
              [
                "Entity Understanding",
                "Clarify relationships between your brand, services and topics.",
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

      {/* SEO CLUSTER */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              SEO services
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A complete SEO and AI-search optimization cluster
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              SEO can be expanded according to your market, website type and
              growth goals. These dedicated services create a connected search
              architecture rather than one oversized page trying to rank for
              everything under the sun.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seoServices.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    <ArrowRight className="h-5 w-5 text-white/25 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            SEO capabilities
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            What the SEO strategy can cover
          </h2>

          <p className="mt-5 leading-8 text-white/55">
            SEO work can focus on technical foundations, page-level relevance,
            information architecture, search intent and long-term organic
            growth.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* TECHNICAL SEO */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-2xl border border-violet-400/10 bg-violet-400/5 p-3 text-violet-300">
                <Code2 className="h-6 w-6" />
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Technical SEO foundations
              </h2>

              <p className="mt-5 leading-8 text-white/55">
                Technical SEO helps search engines access, interpret and
                discover important website content. The exact work depends on
                the site's technology, structure and current search issues.
              </p>

              <Link
                href="/services/technical-seo"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-300"
              >
                Explore Technical SEO
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technicalAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-center text-sm text-white/65"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL + INTERNATIONAL */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          <Link
            href="/services/local-seo"
            className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition hover:border-cyan-300/20 hover:bg-white/[0.05] sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
              <MapPin className="h-6 w-6" />
            </div>

            <div className="mt-6 flex items-center justify-between gap-5">
              <h2 className="text-2xl font-semibold">Local SEO</h2>
              <ArrowRight className="h-5 w-5 text-white/30 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
            </div>

            <p className="mt-4 leading-7 text-white/50">
              Search visibility for businesses serving Lahore, Pakistan or
              other defined geographic markets, with locally relevant content,
              technical foundations and search strategy.
            </p>
          </Link>

          <Link
            href="/services/international-seo"
            className="group rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition hover:border-cyan-300/20 hover:bg-white/[0.05] sm:p-9"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300">
              <Globe2 className="h-6 w-6" />
            </div>

            <div className="mt-6 flex items-center justify-between gap-5">
              <h2 className="text-2xl font-semibold">International SEO</h2>
              <ArrowRight className="h-5 w-5 text-white/30 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
            </div>

            <p className="mt-4 leading-7 text-white/50">
              SEO strategies for businesses targeting multiple countries,
              regions and international audiences across competitive global
              markets.
            </p>
          </Link>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              Website types
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              SEO for different types of websites
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              SEO priorities change depending on the business model, website
              architecture, audience and search intent.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {businessTypes.map((type) => (
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

      {/* SEARCH EVOLUTION */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-gradient-to-br from-cyan-300/[0.07] via-white/[0.03] to-violet-400/[0.06] p-7 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Modern Search Visibility
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                SEO can extend beyond traditional search results
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-white/60">
                Search is evolving across conventional search engines, answer
                systems and generative interfaces. A modern visibility
                strategy can therefore connect traditional SEO with GEO, AEO
                and Entity SEO.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["SEO", "/services/seo"],
                  ["GEO", "/services/geo"],
                  ["AEO", "/services/aeo"],
                ].map(([title, href]) => (
                  <Link
                    key={title}
                    href={href}
                    className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4 text-center text-sm font-medium text-white/70 transition hover:border-cyan-300/20 hover:text-white"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/services/entity-seo"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-3.5 font-medium transition hover:bg-white/[0.1]"
            >
              Explore Entity SEO
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
              SEO process
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A structured approach to organic search
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              SEO is treated as an ongoing optimization process rather than a
              one-time metadata update.
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
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/80">
            Frequently asked questions
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            SEO questions
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
      </section>

      {/* RELATED SERVICES */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
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
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035]">
          <div className="relative px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_45%)]" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/10 bg-cyan-300/5 text-cyan-300">
                <Search className="h-7 w-7" />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Build stronger organic search visibility
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/55">
                Get a search strategy built around your website, market,
                audience and actual business goals.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-black transition hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Discuss SEO
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