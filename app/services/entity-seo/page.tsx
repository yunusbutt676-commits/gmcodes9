import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Building2,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Layers3,
  Network,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/entity-seo`;

const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Entity%20SEO%20services.";

const title =
  "Entity SEO Services in Lahore | Entity Optimization | GmCodes9";

const description =
  "Entity SEO and entity optimization services for Lahore, Pakistan and international businesses. Strengthen brand, person, organization, service and topic relationships through semantic content, structured data, consistent information and search-friendly entity architecture.";

const socialDescription =
  "Entity SEO focused on entity relationships, structured data, semantic content, brand identity, topical relevance and machine-readable website architecture.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Entity SEO",
    "Entity SEO services",
    "Entity optimization",
    "Entity SEO Lahore",
    "Entity SEO Pakistan",
    "semantic SEO",
    "knowledge graph SEO",
    "brand entity optimization",
    "entity-based SEO",
    "entity search optimization",
    "SEO",
    "GEO",
    "AEO",
    "structured data",
    "knowledge graph",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
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
          "GmCodes9 — Entity SEO and Entity Optimization Services in Lahore",
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
    icon: Building2,
    title: "Brand Entity Optimization",
    description:
      "Strengthen the connection between a brand, its website, services, people, profiles and relevant business information.",
  },
  {
    icon: Network,
    title: "Entity Relationships",
    description:
      "Create clearer relationships between organizations, people, services, products, technologies, locations and topics.",
  },
  {
    icon: Layers3,
    title: "Semantic Content",
    description:
      "Build content around meaningful concepts and relationships rather than relying only on isolated keywords.",
  },
  {
    icon: Search,
    title: "Search Entity Signals",
    description:
      "Improve consistency and clarity across important website and search-facing information.",
  },
  {
    icon: Bot,
    title: "AI & Machine Understanding",
    description:
      "Make important business and topical information easier for search systems and AI-powered experiences to interpret.",
  },
  {
    icon: Sparkles,
    title: "Structured Data",
    description:
      "Implement relevant Schema.org relationships where structured data genuinely represents visible website information.",
  },
  {
    icon: Globe2,
    title: "Local & Global Context",
    description:
      "Connect organizations, services and topics with relevant markets such as Lahore, Pakistan and international audiences.",
  },
  {
    icon: Target,
    title: "Topical Authority",
    description:
      "Develop supporting content and internal relationships that make a site's expertise and subject coverage clearer.",
  },
];

const entityTypes = [
  {
    title: "Organization",
    text: "Define the business or digital brand and its relationship with its website, services and people.",
  },
  {
    title: "Person",
    text: "Connect founders, professionals and authors with their legitimate expertise and organizational relationships.",
  },
  {
    title: "Service",
    text: "Clarify what a business actually provides and how individual services relate to the main organization.",
  },
  {
    title: "Product",
    text: "Structure product information and relationships where a website genuinely offers products.",
  },
  {
    title: "Place",
    text: "Represent relevant locations and service areas without inventing offices or physical locations.",
  },
  {
    title: "Technology",
    text: "Connect technologies, platforms and technical topics to relevant services and expertise.",
  },
];

const signals = [
  "Consistent organization and brand information",
  "Clear person and organization relationships",
  "Relevant Schema.org structured data",
  "Consistent names and descriptions",
  "Strong internal linking",
  "Semantic HTML and page structure",
  "Author and expertise context where appropriate",
  "Relevant external profile consistency",
  "Clear service relationships",
  "Topical content clusters",
];

const process = [
  {
    number: "01",
    title: "Entity Discovery",
    text: "Identify the important people, organizations, services, technologies, topics and locations represented by the website.",
  },
  {
    number: "02",
    title: "Relationship Mapping",
    text: "Map how those entities relate to one another and which relationships are supported by real website information.",
  },
  {
    number: "03",
    title: "Consistency Review",
    text: "Review names, descriptions, profiles, URLs and other important entity information for unnecessary inconsistencies.",
  },
  {
    number: "04",
    title: "Semantic Architecture",
    text: "Improve page structure, internal linking and content relationships so important topics are easier to understand.",
  },
  {
    number: "05",
    title: "Structured Data",
    text: "Add or refine relevant structured data that accurately represents the visible content and entity relationships.",
  },
  {
    number: "06",
    title: "Search Integration",
    text: "Connect entity optimization with SEO, AEO and GEO so the website has a coherent search visibility strategy.",
  },
];

const faqs = [
  {
    question: "What is Entity SEO?",
    answer:
      "Entity SEO focuses on helping search systems understand real-world entities and the relationships between them. Instead of treating a website as a collection of keywords, it builds clearer context around organizations, people, services, products, technologies, locations and topics.",
  },
  {
    question: "Why are entities important for SEO?",
    answer:
      "Modern search systems increasingly rely on understanding concepts and relationships, not just matching individual words. Clear entity information can help provide stronger context about what a business, person, service or topic represents.",
  },
  {
    question: "Does Entity SEO create a Google Knowledge Panel?",
    answer:
      "No legitimate SEO service can guarantee a Google Knowledge Panel. Entity optimization can improve consistency and machine-readable context, but search engines independently determine whether and how entities appear in their products.",
  },
  {
    question: "Is Entity SEO the same as structured data?",
    answer:
      "No. Structured data is one technical mechanism for describing information to machines. Entity SEO is broader and can include content, internal linking, identity consistency, relationships, structured data and relevant external information.",
  },
  {
    question: "How does Entity SEO help GEO?",
    answer:
      "Generative search systems need context to understand which organization, person, service or topic a piece of information refers to. Strong entity relationships can therefore support clearer interpretation in AI-powered search environments.",
  },
  {
    question: "Can a personal brand use Entity SEO?",
    answer:
      "Yes. Personal brands can establish clearer relationships between a person, their professional expertise, organization, website, services, published work and legitimate public profiles.",
  },
  {
    question: "Do you provide Entity SEO in Lahore?",
    answer:
      "Yes. GmCodes9 provides entity optimization and broader search visibility services for businesses and professionals in Lahore, Pakistan and international markets.",
  },
  {
    question: "Can Entity SEO be added to an existing website?",
    answer:
      "Yes. Existing websites can be audited for entity clarity, structured data, internal relationships, content context, identity consistency and topical architecture before targeted improvements are implemented.",
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
    description: "Optimize content for generative and AI-powered search.",
  },
  {
    href: "/services/aeo",
    title: "AEO",
    description: "Create clearer, question-focused answer content.",
  },
  {
    href: "/services/technical-seo",
    title: "Technical SEO",
    description: "Improve crawling, indexing and technical foundations.",
  },
  {
    href: "/services/local-seo",
    title: "Local SEO",
    description: "Strengthen location-based search visibility.",
  },
  {
    href: "/services/international-seo",
    title: "International SEO",
    description: "Build search architecture for multiple markets.",
  },
  {
    href: "/services/digital-marketing",
    title: "Digital Marketing",
    description: "Connect search visibility with broader digital growth.",
  },
];

export default function EntitySEOPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Entity SEO Services",
        serviceType: "Entity SEO",
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
          "Entity SEO",
          "Entity Optimization",
          "Semantic SEO",
          "Search Engine Optimization",
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
            name: "Entity SEO",
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

      <main
        id="top"
        className="min-h-screen bg-[#050505] text-white"
      >
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
                <Network className="h-4 w-4" />
                Entity SEO • Entity Optimization
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Entity SEO for{" "}
                <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Clearer Search Understanding
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                Help search engines and AI-powered systems better understand
                your organization, people, services, technologies, topics and
                the relationships between them.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
                GmCodes9 provides Entity SEO services in Lahore, across
                Pakistan and for international businesses, combining semantic
                content, structured data, internal linking and consistent
                entity information.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-medium text-black transition hover:scale-[1.02]"
                >
                  Discuss Entity SEO
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

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                What Entity SEO means
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Search is increasingly about things, not just words.
              </h2>
            </div>

            <div className="space-y-5 text-white/65">
              <p className="text-lg leading-8">
                A business is more than a list of keywords. It is an
                organization with people, services, technologies, locations,
                topics and relationships.
              </p>

              <p className="leading-8">
                Entity SEO focuses on making those relationships clearer across
                a website. The objective is to help search systems understand
                what an entity is, what it does, what it is associated with and
                how its important topics connect.
              </p>

              <p className="leading-8">
                This becomes particularly useful when SEO is combined with
                AEO, GEO, structured data and semantic content architecture.
              </p>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                Entity capabilities
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Build clearer relationships between important information.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                Entity optimization combines content, architecture and
                structured information. No single schema tag magically turns a
                website into an authority. Humanity has not yet invented that
                button.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.06]"
                  >
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <Icon className="h-5 w-5 text-cyan-300" />
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

        {/* ENTITY TYPES */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Entity relationships
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Connect the entities that actually matter.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                The right entity model depends on the real information
                represented by the website. Only legitimate, supported
                relationships should be marked up or communicated.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {entityTypes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />

                    <div>
                      <h3 className="text-lg font-medium">{item.title}</h3>

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

        {/* SIGNALS */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Network className="h-5 w-5 text-violet-300" />
                </div>

                <h2 className="mt-7 text-2xl font-semibold">
                  Entity signals we evaluate
                </h2>

                <p className="mt-4 leading-8 text-white/60">
                  Entity SEO is broader than structured data. We look at how
                  identity, content, relationships and technical signals work
                  together.
                </p>

                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {signals.map((signal) => (
                    <li
                      key={signal}
                      className="flex items-start gap-3 text-sm text-white/65"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Bot className="h-5 w-5 text-cyan-300" />
                </div>

                <h2 className="mt-7 text-2xl font-semibold">
                  Entity SEO and AI search
                </h2>

                <p className="mt-4 leading-8 text-white/60">
                  AI-powered search systems need context. Clear relationships
                  between an organization, its services, people, topics and
                  supporting information can make the site's meaning easier to
                  interpret.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Organization → Person",
                    "Organization → Services",
                    "Service → Topic",
                    "Person → Expertise",
                    "Website → Organization",
                    "Topic → Supporting Content",
                  ].map((relationship) => (
                    <div
                      key={relationship}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/65"
                    >
                      {relationship}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO GEO AEO ENTITY */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
              Search architecture
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Entity SEO connects the modern search stack.
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              SEO establishes the foundation. AEO improves question and answer
              coverage. GEO focuses on generative search experiences. Entity
              SEO helps connect the concepts and relationships behind all of
              them.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "SEO",
                text: "Technical, content and organic search foundations.",
                href: "/services/seo",
              },
              {
                title: "AEO",
                text: "Question-focused and answer-ready content.",
                href: "/services/aeo",
              },
              {
                title: "GEO",
                text: "Generative and AI-powered search visibility.",
                href: "/services/geo",
              },
              {
                title: "Entity SEO",
                text: "Entities, relationships and semantic context.",
                href: "/services/entity-seo",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <BadgeCheck className="h-5 w-5 text-cyan-300" />

                <h3 className="mt-5 text-xl font-medium">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {item.text}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Our process
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                From entity discovery to search architecture.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="text-sm font-medium text-violet-300">
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
                  Entity optimization for Lahore, Pakistan and global markets.
                </h2>
              </div>

              <div className="space-y-5 text-white/60">
                <p className="leading-8">
                  Entity relationships can include legitimate geographic
                  context when location is relevant to the business or
                  service. That can help distinguish a local service from an
                  international offering without creating artificial location
                  pages.
                </p>

                <p className="leading-8">
                  GmCodes9 can structure entity and search architecture for
                  businesses targeting Lahore and Pakistan as well as markets
                  such as the United States, United Kingdom, Canada, Australia,
                  UAE and Saudi Arabia.
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
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                FAQ
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Entity SEO questions, answered clearly.
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
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Related services
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Strengthen the rest of your search architecture.
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
              <Network className="h-6 w-6 text-violet-300" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-5xl">
              Make your website easier to understand as an entity.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/55">
              Build clearer relationships between your organization, people,
              services, topics and supporting content across search.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-medium text-black transition hover:scale-[1.02]"
              >
                Start an Entity SEO Conversation
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