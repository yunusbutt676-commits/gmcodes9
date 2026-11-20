import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Code2,
  FileCode2,
  Gauge,
  Globe2,
  Layers3,
  Link2,
  LockKeyhole,
  Map,
  MessageCircle,
  Network,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/technical-seo`;

const title =
  "Technical SEO Services in Lahore | Technical SEO Audit & Optimization | GmCodes9";

const description =
  "GmCodes9 provides technical SEO services in Lahore, Pakistan and worldwide, including technical SEO audits, crawlability, indexing, site architecture, Core Web Vitals, structured data, canonical URLs, XML sitemaps, robots.txt, redirects, internal linking, mobile SEO and technical search optimization.";

const socialDescription =
  "Technical SEO audits and optimization for crawlability, indexing, site architecture, performance, structured data, canonical URLs, sitemaps, internal linking and search visibility.";

const keywords = [
  "technical SEO",
  "technical SEO services",
  "technical SEO services Lahore",
  "technical SEO Pakistan",
  "technical SEO audit",
  "technical SEO audit Lahore",
  "technical SEO optimization",
  "technical website audit",
  "SEO technical audit",
  "technical search engine optimization",
  "crawlability SEO",
  "indexability SEO",
  "Google indexing optimization",
  "site architecture SEO",
  "Core Web Vitals SEO",
  "website performance SEO",
  "mobile SEO",
  "structured data SEO",
  "schema markup SEO",
  "canonical URL SEO",
  "XML sitemap SEO",
  "robots.txt SEO",
  "internal linking SEO",
  "redirect optimization",
  "404 error SEO",
  "duplicate content SEO",
  "JavaScript SEO",
  "technical SEO consultant",
  "technical SEO expert Lahore",
  "technical SEO Pakistan",
  "SEO",
  "GEO",
  "AEO",
  "entity SEO",
];

const auditAreas = [
  {
    icon: Search,
    title: "Crawlability & Indexing",
    description:
      "Review how search engines discover, crawl and interpret important pages across the website.",
  },
  {
    icon: Server,
    title: "Site Architecture",
    description:
      "Evaluate URL structures, page hierarchy, navigation and internal relationships between important content.",
  },
  {
    icon: Gauge,
    title: "Performance & Core Web Vitals",
    description:
      "Identify technical performance issues affecting loading, responsiveness and the overall page experience.",
  },
  {
    icon: Link2,
    title: "Internal Linking",
    description:
      "Improve contextual connections between pages so users and search engines can better discover important content.",
  },
  {
    icon: FileCode2,
    title: "Structured Data",
    description:
      "Implement relevant Schema.org structured data to provide clearer machine-readable context.",
  },
  {
    icon: Map,
    title: "XML Sitemaps",
    description:
      "Review sitemap structure, discoverability and alignment between important indexable URLs and submitted pages.",
  },
  {
    icon: LockKeyhole,
    title: "Canonicalization",
    description:
      "Identify duplicate or competing URL signals and establish clearer canonical URL relationships.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Security",
    description:
      "Review HTTPS, secure URL handling and technical issues that can interfere with trustworthy site access.",
  },
];

const technicalChecks = [
  "Crawlability and crawler access",
  "Indexability and indexing signals",
  "Robots.txt configuration",
  "XML sitemap configuration",
  "Canonical URLs",
  "Redirect chains and redirect logic",
  "404 and broken URL handling",
  "Duplicate URL patterns",
  "Internal linking structure",
  "URL architecture",
  "Mobile responsiveness",
  "Core Web Vitals",
  "Page loading performance",
  "JavaScript rendering considerations",
  "Structured data and Schema.org",
  "Breadcrumb implementation",
  "HTTPS and secure URL structure",
  "Pagination and crawl paths",
];

const technicalSignals = [
  {
    icon: Network,
    title: "Crawl",
    text: "Can search engines efficiently discover the pages that matter?",
  },
  {
    icon: Search,
    title: "Index",
    text: "Are the right pages available for indexing without unnecessary duplication?",
  },
  {
    icon: Layers3,
    title: "Understand",
    text: "Does the architecture clearly communicate relationships between content and entities?",
  },
  {
    icon: Gauge,
    title: "Experience",
    text: "Does the site provide a usable, responsive and technically sound experience?",
  },
];

const seoConnections = [
  {
    title: "Technical SEO",
    description:
      "The technical foundation covering crawling, indexing, architecture, performance and machine-readable signals.",
    href: "/services/technical-seo",
  },
  {
    title: "SEO",
    description:
      "The broader search optimization strategy covering technical, content, on-page and authority-related signals.",
    href: "/services/seo",
  },
  {
    title: "GEO",
    description:
      "Optimization for generative and AI-powered search experiences and clearer machine understanding.",
    href: "/services/geo",
  },
  {
    title: "AEO",
    description:
      "Answer-focused optimization for question intent, answer-ready content and conversational search.",
    href: "/services/aeo",
  },
  {
    title: "Entity SEO",
    description:
      "Semantic entity relationships and structured context for clearer understanding of people, organizations, services and topics.",
    href: "/services/entity-seo",
  },
];

const process = [
  {
    number: "01",
    title: "Crawl & Inspect",
    text: "Review the website structure, important URLs, crawl paths, indexability and technical signals.",
  },
  {
    number: "02",
    title: "Diagnose",
    text: "Identify technical issues, conflicting signals, performance problems and structural opportunities.",
  },
  {
    number: "03",
    title: "Prioritize",
    text: "Separate critical issues from improvements so technical work is focused on the areas that matter most.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Implement or recommend technical improvements across architecture, performance, indexing and structured data.",
  },
  {
    number: "05",
    title: "Validate",
    text: "Recheck technical signals, important URLs, internal relationships and implementation details.",
  },
  {
    number: "06",
    title: "Monitor",
    text: "Continue reviewing technical health as the website grows, changes and publishes new content.",
  },
];

const faqs = [
  {
    question: "What is technical SEO?",
    answer:
      "Technical SEO focuses on the technical foundation that helps search engines discover, crawl, understand and index a website. It includes areas such as site architecture, crawlability, indexability, performance, mobile usability, canonical URLs, XML sitemaps, internal linking and structured data.",
  },
  {
    question: "What does a technical SEO audit include?",
    answer:
      "A technical SEO audit can examine crawlability, indexability, robots.txt, XML sitemaps, canonical URLs, redirects, broken links, duplicate URLs, site architecture, internal linking, Core Web Vitals, mobile responsiveness, structured data, HTTPS and other technical search signals.",
  },
  {
    question: "Why is technical SEO important?",
    answer:
      "Technical SEO helps create a stronger foundation for search visibility. If important pages cannot be discovered, crawled, understood or indexed properly, other SEO work may not perform as effectively as it could.",
  },
  {
    question: "Can you fix crawlability and indexing issues?",
    answer:
      "Yes. Technical SEO work can address issues involving crawler access, indexability, robots.txt, canonical URLs, sitemap configuration, redirects, duplicate URLs and other technical signals that affect how search engines process a website.",
  },
  {
    question: "Do you optimize Core Web Vitals?",
    answer:
      "Technical SEO can include identifying performance issues related to loading, responsiveness and visual stability. The exact implementation depends on the website's framework, hosting environment, assets and application architecture.",
  },
  {
    question: "Do you work with Next.js and React websites?",
    answer:
      "Yes. Technical SEO can be applied to modern JavaScript applications and frameworks such as Next.js and React, including metadata, rendering considerations, canonical URLs, structured data, internal linking and crawlable page architecture.",
  },
  {
    question: "Can you implement structured data?",
    answer:
      "Yes. Relevant Schema.org structured data can be implemented where it accurately represents visible and supported information on the website. Structured data helps machines interpret content, but it does not guarantee rich results or rankings.",
  },
  {
    question: "Do you provide technical SEO services in Lahore?",
    answer:
      "Yes. GmCodes9 provides technical SEO services for businesses in Lahore and across Pakistan, with technical SEO work also available for international websites.",
  },
  {
    question: "Can technical SEO help international websites?",
    answer:
      "Yes. International websites can require additional technical considerations around URL architecture, international targeting, crawlable country or language structures, canonicalization and other technical signals.",
  },
  {
    question: "Does technical SEO guarantee higher Google rankings?",
    answer:
      "No. Technical SEO improves the technical foundation and removes search-engine accessibility or understanding problems, but rankings depend on many factors including content quality, relevance, competition, authority, user experience and ongoing search-engine evaluation.",
  },
];

const relatedServices = [
  {
    title: "SEO Services",
    href: "/services/seo",
    description:
      "Broader search engine optimization covering technical, content and on-page search strategy.",
  },
  {
    title: "GEO Services",
    href: "/services/geo",
    description:
      "Generative Engine Optimization for AI-powered search and machine-readable visibility.",
  },
  {
    title: "AEO Services",
    href: "/services/aeo",
    description:
      "Answer Engine Optimization for question intent, answer-ready content and conversational search.",
  },
  {
    title: "Entity SEO",
    href: "/services/entity-seo",
    description:
      "Entity optimization and semantic relationships for clearer search and machine understanding.",
  },
  {
    title: "Full Stack Development",
    href: "/services/full-stack-development",
    description:
      "Modern frontend, backend, APIs, databases and web application engineering.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    description:
      "SEO, social media marketing, Meta Ads, Google Ads and broader digital growth services.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Technical SEO Services",
      serviceType: "Technical SEO",
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
        "Technical SEO",
        "Technical SEO Audit",
        "Search Engine Optimization",
        "Website Technical Optimization",
        "SEO Audit",
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
          name: "Technical SEO",
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

export default function TechnicalSeoPage() {
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
                <Terminal className="h-4 w-4" />
                Technical SEO • Crawling • Indexing • Performance • Architecture
              </div>

              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                Technical SEO for a Stronger Search Foundation
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg lg:text-xl">
                Technical SEO audits and optimization for crawlability,
                indexability, site architecture, Core Web Vitals, structured
                data, canonical URLs, XML sitemaps, internal linking, mobile
                SEO and modern search visibility.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Technical%20SEO%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                >
                  Discuss Technical SEO
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/services/seo"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
                >
                  Explore SEO Services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-zinc-500">
                {[
                  "Crawlability",
                  "Indexability",
                  "Site Architecture",
                  "Core Web Vitals",
                  "Structured Data",
                  "Mobile SEO",
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

        {/* Intro */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Technical Foundation
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Search visibility starts with a website search engines can
                  properly access and understand.
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
                <p>
                  Technical SEO focuses on the infrastructure and architecture
                  behind a website. It helps search engines discover important
                  URLs, process page relationships, understand structured
                  information and identify which pages are suitable for
                  indexing.
                </p>

                <p>
                  GmCodes9 combines technical SEO with modern web development
                  experience, making technical optimization especially useful
                  for React, Next.js and other modern web applications where
                  rendering, metadata, routing and application architecture can
                  directly affect search accessibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Areas */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading
              eyebrow="Technical SEO Audit"
              title="Technical issues worth checking before blaming the algorithm"
              description="A technical SEO audit examines the systems and signals that influence how search engines crawl, process and understand a website."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {auditAreas.map((item) => {
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

        {/* Technical Checklist */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Technical SEO Checklist
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  A deeper technical review across the website
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Technical SEO is not one checkbox hidden somewhere in
                  Google. It is a collection of interconnected signals across
                  crawling, URLs, content architecture, performance and
                  machine-readable information.
                </p>

                <div className="mt-7 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.035] p-5">
                  <div className="flex items-start gap-3">
                    <Settings2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <p className="text-sm leading-7 text-zinc-400">
                      Issues are prioritized according to their technical
                      significance, affected URLs and relationship to the
                      website's search architecture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {technicalChecks.map((item) => (
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

        {/* Crawl Index Understand Experience */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading
              eyebrow="Technical Search Signals"
              title="Four technical questions every search-friendly website should answer"
              description="A technically sound website gives search engines clearer paths through its content and stronger signals about what matters."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {technicalSignals.map((item) => {
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
          </div>
        </section>

        {/* Modern Web */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Modern Web & Technical SEO
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Technical SEO for React, Next.js and modern web applications
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Modern JavaScript applications introduce technical
                  considerations around rendering, routing, metadata, URLs,
                  structured data and crawlable content. Technical SEO should
                  work with the application's architecture rather than being
                  bolted on as an afterthought.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Metadata and page-level SEO",
                    "Canonical URL architecture",
                    "Crawlable route structures",
                    "Structured data implementation",
                    "Internal linking architecture",
                    "XML sitemap generation",
                    "Robots.txt configuration",
                    "Performance-aware page architecture",
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
              </div>

              <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
                <div className="absolute right-5 top-5 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/[0.08]">
                      <Code2 className="h-5 w-5 text-emerald-400" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-600">
                        Technical Architecture
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Search-ready application structure
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ["URL", "Canonical + crawlable"],
                      ["Content", "Indexable + semantic"],
                      ["Schema", "Machine-readable"],
                      ["Links", "Contextual + discoverable"],
                      ["Performance", "Responsive + efficient"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3"
                      >
                        <span className="text-sm text-zinc-500">{label}</span>
                        <span className="text-sm font-medium text-zinc-200">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Ecosystem */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading
              eyebrow="SEO Ecosystem"
              title="Technical SEO is the foundation, not the entire SEO strategy"
              description="Technical health, content relevance, answer optimization, generative search and entity context work together as connected parts of modern search optimization."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {seoConnections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.045]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <ArrowRight className="h-4 w-4 shrink-0 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-emerald-400" />
                  </div>

                  <p className="mt-3 text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <SectionHeading
              eyebrow="Technical SEO Process"
              title="Audit, prioritize, optimize and validate"
              description="A structured technical SEO process keeps implementation focused on real crawlability, indexing, architecture and performance issues."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                    Technical SEO for local and international websites
                  </h2>

                  <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-400">
                    GmCodes9 provides technical SEO services for businesses in
                    Lahore and across Pakistan, with technical SEO audits and
                    optimization also available for websites targeting the
                    United States, United Kingdom, Canada, Australia, UAE,
                    Saudi Arabia and other international markets.
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
              title="Technical SEO FAQs"
              description="Common questions about technical SEO audits, crawlability, indexing, performance and technical search optimization."
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
              title="Build the complete modern search foundation"
              description="Connect technical SEO with broader SEO, AI-search optimization and web development services."
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
              <Sparkles className="h-7 w-7 text-emerald-400" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Make your website technically easier to crawl, understand and
              maintain
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Build a stronger technical foundation for Google and modern
              search systems with structured architecture, crawlable pages,
              clean technical signals and machine-readable context.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Technical%20SEO%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
              >
                <MessageCircle className="h-5 w-5" />
                Discuss Technical SEO
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