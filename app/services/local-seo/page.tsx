import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileSearch,
  Globe2,
  Layers3,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";

const title =
  "Local SEO Services in Lahore | Google Maps & Local Search SEO | GmCodes9";

const description =
  "GmCodes9 provides local SEO services in Lahore, Pakistan and worldwide, helping businesses improve local search visibility through Google Business Profile optimization, local keyword research, location-based content, technical SEO, citations, reviews, entity signals and local search optimization.";

const socialDescription =
  "Local SEO for Lahore and international businesses, including Google Business Profile optimization, local keyword research, location-based content, citations, reviews, technical SEO and local search visibility.";

const keywords = [
  "local SEO",
  "local SEO services",
  "local SEO Lahore",
  "local SEO Pakistan",
  "local search optimization",
  "local search SEO",
  "local SEO services Lahore",
  "local SEO expert Lahore",
  "local SEO consultant Lahore",
  "Google Business Profile optimization",
  "Google Business Profile SEO",
  "Google Maps SEO",
  "Google Maps optimization",
  "Google local search",
  "local business SEO",
  "local business optimization",
  "near me SEO",
  "local keyword research",
  "local keyword optimization",
  "local landing pages",
  "location based SEO",
  "local content optimization",
  "local citations",
  "citation building",
  "local business citations",
  "online reviews SEO",
  "review management SEO",
  "local entity SEO",
  "entity SEO",
  "technical SEO",
  "on page SEO",
  "structured data",
  "local business schema",
  "geo SEO",
  "GEO",
  "AEO",
  "SEO",
  "digital marketing",
];

const capabilities = [
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    text: "Optimize business information, categories, services, descriptions and local relevance signals for an accurate and useful Google Business Profile.",
  },
  {
    icon: Search,
    title: "Local Keyword Research",
    text: "Identify location-based search queries, service intent and geographic keyword opportunities relevant to the target market.",
  },
  {
    icon: Target,
    title: "Local Search Strategy",
    text: "Build a local SEO strategy around business type, service area, customer intent, locations and competitive search opportunities.",
  },
  {
    icon: FileSearch,
    title: "Local On-Page SEO",
    text: "Optimize titles, headings, content, internal links, URLs, metadata and location-relevant page signals.",
  },
  {
    icon: Building2,
    title: "Local Business Signals",
    text: "Strengthen consistency and clarity across business information, services, locations, entities and supporting web properties.",
  },
  {
    icon: MessageCircle,
    title: "Reviews & Reputation Signals",
    text: "Develop practical review and reputation strategies that support trust and local search relevance without manufacturing reviews.",
  },
  {
    icon: Layers3,
    title: "Local Structured Data",
    text: "Implement appropriate structured data and semantic relationships to help search engines understand businesses, services and locations.",
  },
  {
    icon: TrendingUp,
    title: "Local Performance Analysis",
    text: "Monitor local search visibility, queries, landing pages and other measurable search signals to guide ongoing optimization.",
  },
];

const localSeoAreas = [
  {
    title: "Google Business Profile",
    items: [
      "Business information consistency",
      "Primary and relevant categories",
      "Services and business descriptions",
      "Profile content opportunities",
      "Location and service-area context",
      "Business information accuracy",
    ],
  },
  {
    title: "Local On-Page SEO",
    items: [
      "Location-focused titles",
      "Service and location pages",
      "Local keyword intent",
      "Internal linking",
      "Local content structure",
      "Metadata optimization",
    ],
  },
  {
    title: "Local Authority & Trust",
    items: [
      "Citation consistency",
      "Business information accuracy",
      "Relevant local references",
      "Review strategy",
      "Brand/entity consistency",
      "Trust-oriented content",
    ],
  },
  {
    title: "Technical Local SEO",
    items: [
      "Crawlable location pages",
      "Canonical URLs",
      "XML sitemaps",
      "Mobile SEO",
      "Page performance",
      "Structured data",
    ],
  },
];

const businessTypes = [
  "Local service businesses",
  "Professional services",
  "Agencies",
  "Clinics and healthcare businesses",
  "Real estate businesses",
  "Restaurants and hospitality",
  "Education and training businesses",
  "Retail businesses",
  "Home and property services",
  "B2B businesses with local markets",
  "Multi-location businesses",
  "Service-area businesses",
];

const localSignals = [
  {
    icon: MapPin,
    title: "Location Relevance",
    text: "Clear geographic context helps search engines understand where a business operates and which local searches are relevant.",
  },
  {
    icon: Building2,
    title: "Business Entity",
    text: "Consistent business identity, services and relationships create clearer entity context across the web.",
  },
  {
    icon: Star,
    title: "Customer Trust",
    text: "Accurate business information and legitimate customer feedback contribute to a stronger local presence.",
  },
  {
    icon: Globe2,
    title: "Website Context",
    text: "Relevant service pages, local content, internal links and technical signals connect the website with local search intent.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Audit",
    text: "Review the website, local search presence, business information, technical setup and existing local signals.",
  },
  {
    number: "02",
    title: "Research",
    text: "Analyze local keywords, service intent, locations, competitors and search opportunities.",
  },
  {
    number: "03",
    title: "Optimize",
    text: "Improve relevant website pages, local business information, content, structured data and supporting signals.",
  },
  {
    number: "04",
    title: "Strengthen",
    text: "Improve consistency, entity context, citations, reviews strategy and local content where appropriate.",
  },
  {
    number: "05",
    title: "Measure",
    text: "Review search visibility, queries, landing-page performance and other available local SEO data.",
  },
  {
    number: "06",
    title: "Improve",
    text: "Refine the strategy based on search behavior, business priorities and measurable performance.",
  },
];

const faqs = [
  {
    question: "What is Local SEO?",
    answer:
      "Local SEO is the process of improving a business's visibility for geographically relevant searches. It can include website optimization, Google Business Profile optimization, local keyword research, local content, citations, reviews, structured data and entity signals.",
  },
  {
    question: "Do you provide Local SEO services in Lahore?",
    answer:
      "Yes. GmCodes9 provides local SEO services for businesses in Lahore and across Pakistan, while also supporting businesses targeting local markets in international countries.",
  },
  {
    question: "What does Google Business Profile optimization include?",
    answer:
      "It can include improving business information, categories, services, descriptions, location or service-area context and other profile elements based on the business and its actual operations.",
  },
  {
    question: "Can Local SEO help a business appear on Google Maps?",
    answer:
      "Local SEO can improve the signals associated with local search visibility, including Google Business Profile optimization and website relevance. Search placement is determined by Google's systems and cannot be guaranteed.",
  },
  {
    question: "Do you create fake reviews or business listings?",
    answer:
      "No. Local SEO should use accurate business information and legitimate reputation-building practices. Fake reviews, misleading listings and fabricated business information are not appropriate SEO practices.",
  },
  {
    question: "Do you create location pages for every city?",
    answer:
      "Location pages should only be created when they provide genuine value and accurately represent the business's services or operating area. Creating large numbers of thin doorway pages is not a sound local SEO strategy.",
  },
  {
    question: "Can Local SEO work with technical SEO?",
    answer:
      "Yes. Local SEO and technical SEO work together. Crawlability, indexing, page performance, mobile usability, canonical URLs, internal linking, structured data and site architecture can all affect how local content is understood and discovered.",
  },
  {
    question: "How does Local SEO connect with Entity SEO and GEO?",
    answer:
      "Local SEO establishes geographic relevance, Entity SEO clarifies relationships between businesses, services and locations, while GEO focuses on making information easier for AI-powered search systems to understand and retrieve.",
  },
];

const relatedServices = [
  {
    title: "SEO",
    href: "/services/seo",
    text: "Build the broader organic search strategy around your local SEO efforts.",
  },
  {
    title: "Technical SEO",
    href: "/services/technical-seo",
    text: "Strengthen crawlability, indexing, performance, architecture and technical search signals.",
  },
  {
    title: "International SEO",
    href: "/services/international-seo",
    text: "Expand organic search strategy across multiple countries and international markets.",
  },
  {
    title: "GEO",
    href: "/services/geo",
    text: "Optimize content and semantic context for modern AI-powered search experiences.",
  },
  {
    title: "AEO",
    href: "/services/aeo",
    text: "Structure content around questions, answers and conversational search intent.",
  },
  {
    title: "Entity SEO",
    href: "/services/entity-seo",
    text: "Strengthen the relationships between your business, services, locations and topics.",
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    text: "Connect local organic search with broader digital marketing and growth activity.",
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
      "@id": `${SITE_URL}/services/local-seo#service`,
      name: "Local SEO Services",
      url: `${SITE_URL}/services/local-seo`,
      description,
      serviceType: "Local SEO",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed,
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Local businesses and organizations",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/local-seo#webpage`,
      url: `${SITE_URL}/services/local-seo`,
      name: title,
      description,
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/services/local-seo#service`,
      },
      breadcrumb: {
        "@id": `${SITE_URL}/services/local-seo#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/services/local-seo#breadcrumb`,
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
          name: "Local SEO",
          item: `${SITE_URL}/services/local-seo`,
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
    canonical: `${SITE_URL}/services/local-seo`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/services/local-seo`,
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
          "GmCodes9 — Local SEO, Google Business Profile & Local Search Optimization",
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

export default function LocalSEOPage() {
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
                  <MapPin className="h-4 w-4" />
                  Local SEO • Google Maps • Local Search Visibility
                </div>

                <h1 className="max-w-5xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                  Local SEO Services for Stronger Local Search Visibility
                </h1>

                <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                  Improve local search visibility with Google Business Profile
                  optimization, local keyword research, location-focused
                  content, technical SEO, structured data, citations, reviews
                  strategy and clearer local business signals.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Local%20SEO%20services."
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                  >
                    Discuss Local SEO
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="#capabilities"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 font-medium text-white transition hover:border-emerald-400/30 hover:bg-white/8"
                  >
                    Explore Local SEO
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/55">
                  {[
                    "Google Business Profile",
                    "Google Maps SEO",
                    "Local Keywords",
                    "Local Content",
                    "Citations",
                    "Entity SEO",
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
                          <MapPin className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="font-medium">Local Search</p>
                          <p className="text-xs text-white/40">
                            Business visibility signals
                          </p>
                        </div>
                      </div>

                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.8)]" />
                    </div>

                    <div className="mt-6 space-y-3">
                      {[
                        ["Business", "Accurate local identity"],
                        ["Location", "Geographic relevance"],
                        ["Website", "Service & location context"],
                        ["Trust", "Reviews & legitimate signals"],
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
                    <Search className="h-4 w-4" />
                    Local Search Optimization
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
                Local Search Strategy
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Make your business easier to understand in local search.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-white/60">
              <p>
                Local SEO helps businesses become more relevant and
                understandable for searches connected to a specific location,
                service area or geographic intent.
              </p>

              <p>
                A strong local search strategy combines website optimization,
                business information, local content, Google Business Profile
                optimization, structured data, legitimate citations, reviews
                and clear entity relationships.
              </p>

              <p>
                The objective is not to create hundreds of nearly identical
                location pages. It is to build useful, accurate local
                information that matches real customer intent.
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
                Local SEO Services
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                A complete local search optimization foundation
              </h2>

              <p className="mt-5 text-base leading-8 text-white/55">
                Local SEO is most effective when the business, website,
                location, services and reputation signals tell a consistent
                story.
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
              Optimization Areas
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              What a local SEO strategy can cover
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {localSeoAreas.map((area) => (
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

        {/* Local Signals */}
        <section className="border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  Local Search Signals
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Local relevance comes from connected signals.
                </h2>

                <p className="mt-5 text-base leading-8 text-white/50">
                  Search engines evaluate many signals together. Local SEO
                  should therefore focus on consistency, relevance and useful
                  information rather than one isolated tactic.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {localSignals.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/8 bg-white/[0.025] p-6"
                    >
                      <Icon className="h-5 w-5 text-emerald-300" />

                      <h3 className="mt-5 font-semibold">{item.title}</h3>

                      <p className="mt-3 text-sm leading-7 text-white/50">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Business Types */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                Businesses & Organizations
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Local SEO can support many business models.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/50">
                The exact strategy depends on the business, market, service
                area, customers and the locations it genuinely serves.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {businessTypes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4"
                >
                  <Users className="h-4 w-4 shrink-0 text-emerald-300" />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local + SEO ecosystem */}
        <section className="border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                SEO Ecosystem
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Local SEO connects naturally with modern search optimization.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/55">
                Local SEO is one part of a broader search strategy. Technical
                SEO supports discoverability, Entity SEO clarifies business
                relationships, AEO supports answer-oriented search, and GEO
                helps structure information for AI-powered search experiences.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ["SEO", "/services/seo"],
                ["Technical SEO", "/services/technical-seo"],
                ["Entity SEO", "/services/entity-seo"],
                ["GEO", "/services/geo"],
                ["AEO", "/services/aeo"],
              ].map(([name, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-3xl border border-white/8 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-emerald-400/20"
                >
                  <Search className="h-5 w-5 text-emerald-300" />

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="font-semibold">{name}</span>
                    <ArrowRight className="h-4 w-4 text-white/25 transition group-hover:translate-x-1 group-hover:text-emerald-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
              Local SEO Process
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A structured approach to local search optimization
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

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Local / International */}
        <section className="border-y border-white/8 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  Lahore, Pakistan & Worldwide
                </span>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Local SEO for Lahore businesses and international local
                  markets
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/55">
                  GmCodes9 provides local SEO services from Lahore, Pakistan
                  for businesses targeting Lahore, other Pakistani markets and
                  legitimate local markets across international countries.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
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
              Local SEO questions
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
                Strengthen the complete search ecosystem
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
                Build a stronger local search presence
              </h2>

              <p className="mt-5 text-base leading-8 text-white/55">
                Improve the connection between your business, website,
                services, location and local search intent with a structured
                local SEO strategy.
              </p>

              <Link
                href="https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Local%20SEO%20services."
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
              >
                Start Local SEO
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