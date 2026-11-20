import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Code2,
  FileSearch,
  Globe2,
  Languages,
  Layers3,
  Map,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";

const title =
  "International SEO Services | Global & Multilingual SEO | GmCodes9";

const description =
  "GmCodes9 provides international SEO services from Lahore, Pakistan for businesses targeting global markets, including international keyword research, country targeting, multilingual SEO, hreflang, international site architecture, technical SEO, localized content, structured data and global search optimization.";

const socialDescription =
  "International SEO for businesses targeting multiple countries, with global keyword research, country targeting, multilingual SEO, hreflang, international site architecture and localized search optimization.";

const keywords = [
  "international SEO",
  "international SEO services",
  "international SEO consultant",
  "international SEO expert",
  "global SEO",
  "global SEO services",
  "international search engine optimization",
  "international SEO Pakistan",
  "international SEO Lahore",
  "multilingual SEO",
  "multilingual SEO services",
  "multilingual search optimization",
  "multiregional SEO",
  "multi-country SEO",
  "country-specific SEO",
  "international keyword research",
  "global keyword research",
  "international content SEO",
  "localized SEO",
  "website localization SEO",
  "hreflang SEO",
  "hreflang implementation",
  "international site architecture",
  "country targeting SEO",
  "international technical SEO",
  "international website SEO",
  "global website optimization",
  "international e-commerce SEO",
  "international local SEO",
  "international entity SEO",
  "entity SEO",
  "technical SEO",
  "GEO",
  "AEO",
  "SEO",
  "global search visibility",
];

const capabilities = [
  {
    icon: Globe2,
    title: "International SEO Strategy",
    text: "Develop a search strategy around target countries, markets, languages, services, competitors and international search intent.",
  },
  {
    icon: Search,
    title: "Global Keyword Research",
    text: "Research search behavior and keyword opportunities across different countries, languages and geographic markets.",
  },
  {
    icon: Map,
    title: "Country Targeting",
    text: "Structure website content and search signals around the countries and markets the business genuinely wants to serve.",
  },
  {
    icon: Languages,
    title: "Multilingual SEO",
    text: "Optimize multilingual websites so language-specific content is discoverable, understandable and aligned with search intent.",
  },
  {
    icon: Network,
    title: "Hreflang Strategy",
    text: "Plan and implement appropriate hreflang relationships for language and regional URL variants where required.",
  },
  {
    icon: Layers3,
    title: "International Site Architecture",
    text: "Design scalable URL and internal-link structures for country, language and regional content without creating unnecessary duplication.",
  },
  {
    icon: Code2,
    title: "Technical International SEO",
    text: "Address indexing, canonicalization, redirects, sitemaps, rendering, mobile performance and other technical international SEO requirements.",
  },
  {
    icon: Target,
    title: "Localized Content Strategy",
    text: "Create useful market-specific content that reflects genuine search behavior instead of simply translating every page word-for-word.",
  },
];

const internationalAreas = [
  {
    title: "Country & Market Targeting",
    items: [
      "Target-country research",
      "Country-specific search intent",
      "Market opportunity analysis",
      "Regional keyword mapping",
      "Country landing pages",
      "International competitor research",
    ],
  },
  {
    title: "Multilingual SEO",
    items: [
      "Language-specific URLs",
      "Localized page content",
      "Language keyword research",
      "Search-intent localization",
      "Metadata localization",
      "Internal linking between language versions",
    ],
  },
  {
    title: "Hreflang & Technical SEO",
    items: [
      "Hreflang planning",
      "Canonical URL strategy",
      "XML sitemap architecture",
      "Indexing controls",
      "Redirect management",
      "JavaScript rendering considerations",
    ],
  },
  {
    title: "Global Content Architecture",
    items: [
      "Country directories",
      "Language directories",
      "International service pages",
      "Localized content hubs",
      "Internal-link architecture",
      "Duplicate-content prevention",
    ],
  },
];

const structures = [
  {
    title: "Country-Based",
    example: "/us/",
    text: "Useful when country-specific content, offers or market requirements justify separate country sections.",
  },
  {
    title: "Language-Based",
    example: "/en/",
    text: "Useful when content is organized primarily by language rather than country.",
  },
  {
    title: "Country + Language",
    example: "/en-us/",
    text: "Useful when different countries require different language or market-specific experiences.",
  },
  {
    title: "Subdomains",
    example: "us.example.com",
    text: "Can be appropriate for certain technical or organizational requirements, but should be selected intentionally.",
  },
];

const globalSignals = [
  {
    icon: Globe2,
    title: "Geographic Relevance",
    text: "Clear country and regional signals help search engines understand which market a page is intended to serve.",
  },
  {
    icon: Languages,
    title: "Language Relevance",
    text: "Accurate language targeting and localized content align pages with how users actually search in each market.",
  },
  {
    icon: Network,
    title: "URL Relationships",
    text: "Consistent relationships between language and regional versions help search engines interpret alternate pages.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Consistency",
    text: "Canonical URLs, redirects, sitemaps, indexing and internal links should work together across international versions.",
  },
];

const useCases = [
  "Businesses expanding from Pakistan into international markets",
  "SaaS products targeting multiple countries",
  "E-commerce businesses selling internationally",
  "Agencies and service providers targeting global clients",
  "Technology companies with international audiences",
  "Education platforms serving multiple countries",
  "B2B companies entering new geographic markets",
  "Multilingual websites serving different language audiences",
];

const processSteps = [
  {
    number: "01",
    title: "Research",
    text: "Analyze target countries, languages, competitors, search behavior and market opportunities.",
  },
  {
    number: "02",
    title: "Map",
    text: "Map keywords, services, URLs, languages and countries to the correct pages and search intents.",
  },
  {
    number: "03",
    title: "Architect",
    text: "Design the international URL structure, internal linking, content relationships and technical architecture.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Implement localized content, metadata, technical SEO, hreflang and country-specific search signals.",
  },
  {
    number: "05",
    title: "Validate",
    text: "Check indexing, canonicalization, hreflang relationships, sitemaps, redirects and page accessibility.",
  },
  {
    number: "06",
    title: "Measure",
    text: "Monitor country-level search performance, queries, landing pages and market-specific organic visibility.",
  },
];

const faqs = [
  {
    question: "What is International SEO?",
    answer:
      "International SEO is the process of optimizing a website to serve users across multiple countries, regions or languages. It can include international keyword research, country targeting, multilingual content, hreflang, URL architecture, technical SEO and localized content.",
  },
  {
    question: "What countries can International SEO target?",
    answer:
      "International SEO can be structured around the countries and markets that a business genuinely serves. GmCodes9 can support businesses targeting markets such as the United States, United Kingdom, Canada, Australia, UAE, Saudi Arabia, Pakistan and other international markets.",
  },
  {
    question: "What is hreflang in SEO?",
    answer:
      "Hreflang is a technical signal used to indicate language and regional alternatives of pages. When implemented correctly, it helps search engines understand which version of a page is intended for a particular language or region.",
  },
  {
    question: "Does every international website need hreflang?",
    answer:
      "Not necessarily. Hreflang is particularly relevant when substantially equivalent pages exist for different languages or regional audiences. The correct implementation depends on the website's architecture and content.",
  },
  {
    question: "Should I translate my entire website for International SEO?",
    answer:
      "Not automatically. Translation should follow genuine market demand and business requirements. International SEO is stronger when localized content reflects the language, search behavior, terminology and needs of the target market rather than relying on low-quality automated translation alone.",
  },
  {
    question: "What is the best URL structure for international SEO?",
    answer:
      "There is no single URL structure that is best for every website. Country directories, language directories, country-language directories and subdomains can all be appropriate depending on the site's architecture, content and business requirements.",
  },
  {
    question: "Can International SEO work with e-commerce websites?",
    answer:
      "Yes. International SEO can support e-commerce websites targeting different countries through localized category and product content, country-specific search intent, technical architecture, international product information and appropriate regional targeting.",
  },
  {
    question: "How does International SEO connect with GEO and Entity SEO?",
    answer:
      "International SEO establishes geographic and language context, Entity SEO helps clarify businesses, brands, services and relationships, while GEO focuses on making content and entities easier for AI-powered search systems to understand.",
  },
];

const relatedServices = [
  {
    title: "SEO",
    href: "/services/seo",
    text: "Build the main organic search strategy that supports international growth.",
  },
  {
    title: "Technical SEO",
    href: "/services/technical-seo",
    text: "Strengthen crawling, indexing, performance, canonicalization and technical architecture.",
  },
  {
    title: "Local SEO",
    href: "/services/local-seo",
    text: "Optimize visibility for specific cities, service areas and local markets.",
  },
  {
    title: "GEO",
    href: "/services/geo",
    text: "Improve content and entity clarity for AI-powered search and generative engines.",
  },
  {
    title: "AEO",
    href: "/services/aeo",
    text: "Structure content around questions, answers and conversational search intent.",
  },
  {
    title: "Entity SEO",
    href: "/services/entity-seo",
    text: "Strengthen relationships between brands, services, organizations, locations and topics.",
  },
  {
    title: "E-Commerce Development",
    href: "/services/ecommerce-development",
    text: "Build international-ready e-commerce experiences around your global SEO strategy.",
  },
];

const areaServed = [
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
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/international-seo#service`,
      name: "International SEO Services",
      url: `${SITE_URL}/services/international-seo`,
      description,
      serviceType: "International SEO",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed,
      audience: {
        "@type": "BusinessAudience",
        audienceType: "International businesses and organizations",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/international-seo#webpage`,
      url: `${SITE_URL}/services/international-seo`,
      name: title,
      description,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/services/international-seo#service`,
      },
      breadcrumb: {
        "@id": `${SITE_URL}/services/international-seo#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/services/international-seo#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
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
          name: "International SEO",
          item: `${SITE_URL}/services/international-seo`,
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: {
    canonical: `${SITE_URL}/services/international-seo`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/international-seo`,
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
          "GmCodes9 — International SEO, Global SEO & Multilingual Search Optimization",
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

export default function InternationalSEOPage() {
  return (
    <>
      <main
        id="top"
        className="min-h-screen overflow-hidden bg-[#050807] text-white"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* Background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[120px]" />
          <div className="absolute right-[-10rem] top-[18rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/8 blur-[130px]" />
          <div className="absolute bottom-[-12rem] left-[25%] h-[30rem] w-[30rem] rounded-full bg-emerald-400/5 blur-[140px]" />
        </div>

        {/* Hero */}
        <section className="relative border-b border-white/8">
          <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
              <div>
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-2 text-sm text-emerald-300">
                  <Globe2 className="h-4 w-4" />
                  International SEO • Global Search • Multilingual SEO
                </div>

                <h1 className="max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                  International SEO for Global Search Visibility
                </h1>

                <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                  Expand organic search visibility across countries and
                  languages with international keyword research, country
                  targeting, multilingual SEO, hreflang, international site
                  architecture, localized content and technical search
                  optimization.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20International%20SEO%20services."
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                  >
                    Discuss International SEO
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="#capabilities"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 font-medium text-white transition hover:border-emerald-400/30 hover:bg-white/8"
                  >
                    Explore Global SEO
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/55">
                  {[
                    "Global SEO",
                    "Multilingual SEO",
                    "Hreflang",
                    "Country Targeting",
                    "International Architecture",
                    "Localized Content",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl">
                  <div className="rounded-[1.5rem] border border-white/8 bg-black/30 p-6">
                    <div className="flex items-center justify-between border-b border-white/8 pb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                          <Globe2 className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="font-medium">Global Search</p>
                          <p className="text-xs text-white/40">
                            Country & language signals
                          </p>
                        </div>
                      </div>

                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.8)]" />
                    </div>

                    <div className="mt-6 space-y-3">
                      {[
                        ["Market", "Target country & region"],
                        ["Language", "Localized search intent"],
                        ["Architecture", "Regional URL relationships"],
                        ["Technical", "Indexing & international signals"],
                      ].map(([label, value], index) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-white/7 bg-white/[0.025] p-4"
                        >
                          <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-xs text-emerald-300">
                              0{index + 1}
                            </span>

                            <div>
                              <p className="text-sm font-medium text-white/90">
                                {label}
                              </p>
                              <p className="mt-1 text-xs text-white/40">
                                {value}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-emerald-400/15 bg-[#08100d]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                  <div className="flex items-center gap-2 text-sm text-emerald-300">
                    <TrendingUp className="h-4 w-4" />
                    Global Search Optimization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                Global Search Strategy
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                One website can serve many markets, but it needs clear signals.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-white/60">
              <p>
                International SEO helps search engines understand which pages,
                languages and content are intended for specific countries or
                regional audiences.
              </p>

              <p>
                A strong international SEO strategy combines market research,
                keyword mapping, localized content, URL architecture,
                technical SEO, hreflang where appropriate and clear internal
                relationships between international versions.
              </p>

              <p>
                International SEO is not simply translating the same page
                repeatedly. Search behavior, terminology, competition and
                customer expectations can differ significantly between
                markets.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section
          id="capabilities"
          className="border-y border-white/8 bg-white/[0.015]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                International SEO Services
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Build search visibility across countries and languages
              </h2>

              <p className="mt-5 text-base leading-8 text-white/55">
                International search optimization should connect market
                strategy, content, technical architecture and measurable
                search intent.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-3xl border border-white/8 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Optimization Areas */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              Global SEO Architecture
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The core areas of international search optimization
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {internationalAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-3xl border border-white/8 bg-white/[0.025] p-6"
              >
                <h3 className="text-xl font-semibold">{area.title}</h3>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {area.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/7 bg-black/15 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      <span className="text-sm leading-6 text-white/55">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* URL Structures */}
        <section className="border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  International URL Structure
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Choose an architecture that matches the business.
                </h2>

                <p className="mt-5 text-base leading-8 text-white/50">
                  Country directories, language directories, combined
                  country-language paths and subdomains can all be valid.
                  The right structure depends on the website, market strategy
                  and technical requirements.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {structures.map((structure) => (
                  <article
                    key={structure.title}
                    className="rounded-3xl border border-white/8 bg-white/[0.025] p-6"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-semibold">{structure.title}</h3>

                      <span className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-300">
                        {structure.example}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-white/50">
                      {structure.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* International Signals */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              Global Search Signals
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Clear geographic and language context matters.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {globalSignals.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/8 bg-white/[0.025] p-6"
                >
                  <Icon className="h-5 w-5 text-emerald-300" />

                  <h3 className="mt-5 font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Use Cases */}
        <section className="border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  International Growth
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Built for businesses expanding beyond one market.
                </h2>

                <p className="mt-5 text-base leading-8 text-white/50">
                  International SEO can support organizations entering new
                  countries, serving multilingual audiences or building a
                  global digital presence.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {useCases.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                    <span className="text-sm leading-6 text-white/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* International + SEO ecosystem */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              SEO Ecosystem
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              International SEO works with the rest of your search strategy.
            </h2>

            <p className="mt-5 text-base leading-8 text-white/55">
              Global search optimization becomes stronger when technical SEO,
              local SEO, Entity SEO, AEO and GEO are connected through a clear
              site architecture and consistent content strategy.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {[
              ["SEO", "/services/seo"],
              ["Technical SEO", "/services/technical-seo"],
              ["Local SEO", "/services/local-seo"],
              ["GEO", "/services/geo"],
              ["AEO", "/services/aeo"],
              ["Entity SEO", "/services/entity-seo"],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="group rounded-3xl border border-white/8 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-emerald-400/20"
              >
                <Search className="h-5 w-5 text-emerald-300" />

                <div className="mt-5 flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold">{name}</span>
                  <ArrowRight className="h-4 w-4 text-white/25 transition group-hover:translate-x-1 group-hover:text-emerald-300" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                International SEO Process
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A structured path from one market to many.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-white/8 bg-white/[0.025] p-6"
                >
                  <span className="text-sm font-medium text-emerald-300">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lahore / Worldwide */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="rounded-[2rem] border border-white/8 bg-white/[0.025] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  Lahore, Pakistan & Worldwide
                </span>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  International SEO from Lahore for businesses targeting
                  global markets
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/55">
                  GmCodes9 provides international SEO services from Lahore,
                  Pakistan for businesses targeting the United States, United
                  Kingdom, Canada, Australia, UAE, Saudi Arabia and other
                  legitimate international markets.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                {[
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
                    className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-2 text-xs text-white/50"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="text-center">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              Frequently Asked Questions
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              International SEO questions
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/8 bg-white/[0.025]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-medium text-white/85">
                  <span>{faq.question}</span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-white/35 transition group-open:rotate-180" />
                </summary>

                <div className="border-t border-white/7 px-5 py-5 text-sm leading-7 text-white/50">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                Related Services
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Connect international SEO with the full search ecosystem
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-3xl border border-white/8 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold">{service.title}</h3>

                    <ArrowRight className="h-4 w-4 text-white/30 transition group-hover:translate-x-1 group-hover:text-emerald-300" />
                  </div>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    {service.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-400/15 bg-emerald-400/[0.045] p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-[90px]" />

            <div className="relative max-w-3xl">
              <Sparkles className="h-7 w-7 text-emerald-300" />

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to build search visibility across new markets?
              </h2>

              <p className="mt-5 text-base leading-8 text-white/55">
                Build an international SEO strategy around the countries,
                languages and customers your business genuinely wants to
                reach.
              </p>

              <Link
                href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20International%20SEO%20services."
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
              >
                Start International SEO
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Back to top */}
      <Link
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white/70 shadow-xl backdrop-blur-xl transition hover:border-emerald-400/30 hover:text-emerald-300"
      >
        <ArrowRight className="h-4 w-4 -rotate-90" />
      </Link>
    </>
  );
}
