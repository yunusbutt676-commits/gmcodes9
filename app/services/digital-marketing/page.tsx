import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Megaphone,
  MousePointerClick,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/digital-marketing`;

const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20digital%20marketing%20services.";

const title =
  "Digital Marketing Services in Lahore | SEO, Social Media & Ads | GmCodes9";

const description =
  "Digital marketing services in Lahore, Pakistan and worldwide covering SEO, GEO, AEO, entity SEO, social media marketing, Meta Ads, Google Ads, content strategy, lead generation and conversion-focused digital growth.";

const socialDescription =
  "Full-service digital marketing covering SEO, GEO, AEO, entity SEO, social media marketing, Meta Ads, Google Ads, content strategy and lead generation.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "digital marketing services",
    "digital marketing Lahore",
    "digital marketing Pakistan",
    "digital marketing agency Lahore",
    "SEO services",
    "GEO",
    "AEO",
    "entity SEO",
    "social media marketing",
    "SMM",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Google Ads",
    "Google PPC",
    "lead generation",
    "digital advertising",
    "online marketing",
    "content marketing",
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
          "GmCodes9 — Digital Marketing, SEO, Social Media and Paid Advertising Services",
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

const marketingServices = [
  {
    icon: Search,
    title: "SEO",
    description:
      "Organic search optimization covering technical SEO, on-page SEO, content, internal linking and search visibility.",
    href: "/services/seo",
  },
  {
    icon: Sparkles,
    title: "GEO",
    description:
      "Generative Engine Optimization for stronger visibility across modern AI-powered and generative search experiences.",
    href: "/services/geo",
  },
  {
    icon: MousePointerClick,
    title: "AEO",
    description:
      "Answer Engine Optimization focused on question intent, answer-ready content and conversational search.",
    href: "/services/aeo",
  },
  {
    icon: Globe2,
    title: "Entity SEO",
    description:
      "Entity and semantic optimization that improves relationships between brands, people, services, topics and content.",
    href: "/services/entity-seo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Social strategy, content planning, audience engagement and organic social media growth.",
    href: "/services/social-media-marketing",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Facebook and Instagram advertising focused on audience targeting, leads, traffic, conversions and retargeting.",
    href: "/services/meta-ads",
  },
  {
    icon: Target,
    title: "Google Ads",
    description:
      "Google PPC campaigns aligned with search intent, keywords, landing pages, conversions and measurable outcomes.",
    href: "/services/google-ads",
  },
];

const growthAreas = [
  {
    title: "Search Visibility",
    text: "Build long-term organic visibility through SEO, semantic content, AEO, GEO and entity optimization.",
  },
  {
    title: "Social Presence",
    text: "Develop a consistent social presence that supports awareness, engagement and brand communication.",
  },
  {
    title: "Paid Acquisition",
    text: "Use Google Ads and Meta Ads to reach high-intent or targeted audiences with measurable campaigns.",
  },
  {
    title: "Lead Generation",
    text: "Connect campaigns, landing pages, messaging and conversion paths around meaningful business goals.",
  },
  {
    title: "Content Strategy",
    text: "Create useful content aligned with audience questions, search intent, business topics and customer journeys.",
  },
  {
    title: "Performance Analysis",
    text: "Review traffic, engagement, leads, conversions and campaign data to identify opportunities for improvement.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Review the business, audience, offer, market, competition and current digital presence.",
  },
  {
    number: "02",
    title: "Research",
    text: "Study search intent, audience behavior, content opportunities, platforms and acquisition channels.",
  },
  {
    number: "03",
    title: "Plan",
    text: "Create a practical marketing roadmap across organic search, social media, paid advertising and content.",
  },
  {
    number: "04",
    title: "Build",
    text: "Implement campaigns, content structures, landing pages, tracking foundations and channel-specific assets.",
  },
  {
    number: "05",
    title: "Optimize",
    text: "Improve targeting, messaging, content, technical foundations and campaign performance based on available data.",
  },
  {
    number: "06",
    title: "Scale",
    text: "Expand the strongest channels and opportunities while keeping the strategy aligned with business goals.",
  },
];

const faqs = [
  {
    question: "What digital marketing services does GmCodes9 provide?",
    answer:
      "GmCodes9 provides SEO, GEO, AEO, entity SEO, social media marketing, Meta Ads, Google Ads, content strategy and broader digital marketing support for businesses in Lahore, Pakistan and international markets.",
  },
  {
    question: "Do you provide digital marketing services in Lahore?",
    answer:
      "Yes. GmCodes9 provides digital marketing services for businesses in Lahore and across Pakistan, while also supporting international clients and campaigns.",
  },
  {
    question: "Does digital marketing include SEO?",
    answer:
      "Yes. SEO is one of the core digital marketing channels, but digital marketing is broader. It can also include social media, paid advertising, content strategy, lead generation and conversion-focused campaigns.",
  },
  {
    question: "Do you offer both organic and paid marketing?",
    answer:
      "Yes. The service structure can combine organic channels such as SEO and social media with paid acquisition through Google Ads and Meta Ads.",
  },
  {
    question: "What is the difference between Google Ads and Meta Ads?",
    answer:
      "Google Ads can capture users based on active search intent, while Meta Ads can target audiences based on platform signals, interests, behaviors and campaign objectives. The right channel depends on the offer, audience and conversion goal.",
  },
  {
    question: "Can digital marketing include AI search optimization?",
    answer:
      "Yes. Modern digital marketing can include SEO, AEO, GEO and entity optimization to improve how a business and its content are understood across traditional and AI-powered search experiences.",
  },
  {
    question: "Can you manage social media marketing as part of a broader strategy?",
    answer:
      "Yes. Social media marketing can be integrated with SEO, content, paid advertising and broader brand communication rather than being treated as an isolated channel.",
  },
  {
    question: "Do you guarantee leads or sales?",
    answer:
      "No legitimate marketing provider can guarantee a fixed number of leads or sales because performance depends on the market, offer, audience, budget, competition, landing experience and many external factors. The focus is on building, measuring and improving the system.",
  },
];

const relatedServices = [
  {
    href: "/services/seo",
    title: "SEO",
    description: "Grow organic search visibility.",
  },
  {
    href: "/services/social-media-marketing",
    title: "Social Media Marketing",
    description: "Build social presence and audience engagement.",
  },
  {
    href: "/services/google-ads",
    title: "Google Ads",
    description: "Reach users with active search intent.",
  },
  {
    href: "/services/meta-ads",
    title: "Meta Ads",
    description: "Run targeted Facebook and Instagram campaigns.",
  },
  {
    href: "/services/geo",
    title: "GEO",
    description: "Prepare content for AI-powered search.",
  },
  {
    href: "/services/aeo",
    title: "AEO",
    description: "Build answer-ready search content.",
  },
  {
    href: "/services/entity-seo",
    title: "Entity SEO",
    description: "Strengthen brand and topical relationships.",
  },
];

export default function DigitalMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Digital Marketing Services",
        serviceType: "Digital Marketing",
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
          "Digital Marketing",
          "Search Engine Optimization",
          "Social Media Marketing",
          "Online Advertising",
          "Lead Generation",
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
            name: "Digital Marketing",
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

      <main id="top" className="min-h-screen bg-[#050505] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.13),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 backdrop-blur-xl">
                <Megaphone className="h-4 w-4" />
                Digital Marketing • Organic + Paid Growth
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Digital Marketing That Connects{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Search, Social & Ads
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
                Build a connected digital marketing strategy across SEO,
                social media, Google Ads, Meta Ads, content and modern AI
                search optimization.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
                GmCodes9 provides digital marketing services in Lahore,
                Pakistan and for international businesses, combining organic
                visibility, social presence, paid acquisition and
                conversion-focused digital strategy.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-medium text-black transition hover:scale-[1.02]"
                >
                  Discuss Your Marketing
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
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Digital growth strategy
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                One strategy. Multiple acquisition channels.
              </h2>
            </div>

            <div className="space-y-5 text-white/65">
              <p className="text-lg leading-8">
                Digital marketing works best when channels support each other
                instead of operating as disconnected campaigns.
              </p>

              <p className="leading-8">
                Search can capture existing demand. Social media can build
                awareness and relationships. Paid advertising can accelerate
                reach and acquisition. Content can answer questions and
                support the entire customer journey.
              </p>

              <p className="leading-8">
                GmCodes9 brings these channels together around practical
                business objectives such as visibility, qualified traffic,
                leads, engagement and conversions.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
                Marketing services
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Build the right channel mix for the business.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                Different businesses need different combinations of organic
                search, social media and paid acquisition. The goal is not to
                force every business into every channel.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {marketingServices.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.06]"
                  >
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>

                    <h3 className="text-lg font-medium">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-white/55">
                      {item.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-white/70">
                      Explore service
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* GROWTH AREAS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
                Growth areas
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                From visibility to measurable acquisition.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                Marketing should connect attention with action. Every channel
                has a role, and the role should be clear.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {growthAreas.map((item) => (
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

        {/* ORGANIC + PAID */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <TrendingUp className="h-5 w-5 text-emerald-300" />
                </div>

                <h2 className="mt-7 text-2xl font-semibold">
                  Organic growth
                </h2>

                <p className="mt-4 leading-8 text-white/60">
                  Build durable visibility through SEO, content, AEO, GEO,
                  entity optimization and social media.
                </p>

                <ul className="mt-7 space-y-4">
                  {[
                    "SEO strategy",
                    "Technical SEO",
                    "Content optimization",
                    "GEO and AEO",
                    "Entity SEO",
                    "Social media marketing",
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
                  <BarChart3 className="h-5 w-5 text-blue-300" />
                </div>

                <h2 className="mt-7 text-2xl font-semibold">
                  Paid acquisition
                </h2>

                <p className="mt-4 leading-8 text-white/60">
                  Use paid channels to reach targeted audiences and capture
                  demand faster, with campaigns aligned to landing pages and
                  measurable objectives.
                </p>

                <ul className="mt-7 space-y-4">
                  {[
                    "Google Search Ads",
                    "Meta Ads",
                    "Facebook advertising",
                    "Instagram advertising",
                    "Lead generation campaigns",
                    "Retargeting campaigns",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FUNNEL */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
              Customer journey
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Connect awareness, consideration and conversion.
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              A useful marketing strategy considers what the audience needs at
              each stage rather than treating every visitor as if they arrived
              with a credit card already in hand.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Awareness",
                text: "Social media, content, SEO and paid reach help people discover the brand.",
              },
              {
                icon: Search,
                title: "Consideration",
                text: "Search content, landing pages, comparisons, answers and proof help people evaluate the offer.",
              },
              {
                icon: Target,
                title: "Conversion",
                text: "Clear offers, relevant landing pages, lead forms, calls and campaign optimization support action.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>

                  <h3 className="mt-6 text-xl font-medium">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
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
                Strategy first. Channels second.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <span className="text-sm font-medium text-cyan-300">
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

        {/* LOCAL + GLOBAL */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                  Local & international
                </span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Digital marketing for Lahore, Pakistan and global markets.
                </h2>
              </div>

              <div className="space-y-5 text-white/60">
                <p className="leading-8">
                  Local businesses can focus on Lahore and Pakistan-specific
                  search, social and acquisition opportunities, while
                  international businesses can build campaigns around their
                  target markets and audiences.
                </p>

                <p className="leading-8">
                  The strategy should adapt to the audience, offer, market and
                  available budget rather than blindly copying the same campaign
                  across every country.
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
                Digital marketing questions, answered.
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
              Build a connected digital marketing system.
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
              <Megaphone className="h-6 w-6 text-emerald-300" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-5xl">
              Build a digital marketing strategy around your actual goals.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/55">
              Connect search, social media, paid advertising and content into
              one practical growth strategy.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-medium text-black transition hover:scale-[1.02]"
              >
                Start a Marketing Conversation
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
