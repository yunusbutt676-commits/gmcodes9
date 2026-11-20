import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Globe2,
  KeyRound,
  MousePointerClick,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/google-ads`;

const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Google%20Ads%20services.";

const title =
  "Google Ads Services in Lahore | PPC & Search Advertising | GmCodes9";

const description =
  "GmCodes9 provides Google Ads and PPC services in Lahore, Pakistan and worldwide, including search campaigns, keyword research, search intent analysis, ad groups, negative keywords, conversion-focused campaigns, landing-page alignment, optimization and performance tracking.";

const socialDescription =
  "Google Ads and PPC management for search campaigns, keyword targeting, conversion-focused advertising, campaign optimization and performance tracking.";

const keywords = [
  "Google Ads",
  "Google Ads services",
  "Google Ads Lahore",
  "Google Ads Pakistan",
  "PPC services",
  "PPC advertising",
  "PPC Lahore",
  "Google Search Ads",
  "Google advertising",
  "Google PPC",
  "search advertising",
  "paid search",
  "keyword research",
  "Google Ads campaign management",
  "Google Ads optimization",
  "negative keywords",
  "conversion campaigns",
  "search engine advertising",
  "digital marketing",
];

const capabilities = [
  {
    icon: Target,
    title: "Google Ads Strategy",
    text: "Build paid search strategies around your business goals, audience intent, offer, market and conversion journey.",
  },
  {
    icon: KeyRound,
    title: "Keyword Research",
    text: "Identify relevant search terms and group them according to commercial intent, relevance and campaign objectives.",
  },
  {
    icon: Search,
    title: "Search Intent Analysis",
    text: "Separate informational, commercial and transactional search behavior to create more relevant advertising structures.",
  },
  {
    icon: MousePointerClick,
    title: "Search Campaigns",
    text: "Create campaign structures focused on reaching people actively searching for relevant products, services or solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Negative Keywords",
    text: "Use negative keyword strategies to reduce irrelevant search traffic and improve campaign targeting.",
  },
  {
    icon: Zap,
    title: "Ad Messaging",
    text: "Develop clear advertising messages aligned with search intent, offers, landing pages and conversion objectives.",
  },
  {
    icon: TrendingUp,
    title: "Campaign Optimization",
    text: "Review campaign performance and refine targeting, keywords, ads, budgets and other relevant campaign elements.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    text: "Use available conversion and campaign data to evaluate performance and guide future optimization decisions.",
  },
];

const campaignTypes = [
  {
    title: "Search Campaigns",
    text: "Reach users actively searching for relevant products, services or business solutions through Google Search.",
  },
  {
    title: "Lead Generation",
    text: "Drive relevant search traffic toward forms, contact pages, booking flows or other configured lead destinations.",
  },
  {
    title: "Conversion Campaigns",
    text: "Structure campaigns around measurable business actions such as purchases, inquiries, registrations or bookings.",
  },
  {
    title: "Remarketing",
    text: "Reconnect with relevant audiences where appropriate Google Ads audiences and tracking configurations are available.",
  },
];

const intentTypes = [
  {
    label: "Informational",
    text: "Users looking for explanations, guides, definitions or general information.",
  },
  {
    label: "Commercial",
    text: "Users researching solutions, providers, products or options before deciding.",
  },
  {
    label: "Transactional",
    text: "Users showing stronger intent to purchase, contact, book or take another business action.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Review your business, offer, target audience, market, conversion goals and existing advertising setup.",
  },
  {
    number: "02",
    title: "Research",
    text: "Research relevant keywords, search intent, competitors, messaging opportunities and campaign requirements.",
  },
  {
    number: "03",
    title: "Structure",
    text: "Organize campaigns, ad groups, keywords, negative keywords, ad messaging and conversion paths.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Configure and launch the agreed campaigns with suitable targeting, budgets, ads and measurement.",
  },
  {
    number: "05",
    title: "Monitor",
    text: "Review search terms, clicks, conversions, costs and campaign performance signals.",
  },
  {
    number: "06",
    title: "Optimize",
    text: "Refine campaign structure and targeting based on actual performance data and business objectives.",
  },
];

const faqs = [
  {
    question: "What are Google Ads?",
    answer:
      "Google Ads is Google's paid advertising platform. Search campaigns can place relevant ads in front of users searching for products, services or information related to a business.",
  },
  {
    question: "Do you provide Google Ads services in Lahore?",
    answer:
      "Yes. GmCodes9 provides Google Ads and PPC services for businesses in Lahore and Pakistan, as well as remote services for international clients.",
  },
  {
    question: "What is PPC advertising?",
    answer:
      "PPC means pay-per-click advertising, where advertisers generally pay when someone clicks an advertisement. Google Ads includes several campaign types, with Search campaigns being a major form of paid search advertising.",
  },
  {
    question: "Do you perform Google Ads keyword research?",
    answer:
      "Yes. Keyword research can include identifying relevant search terms, grouping related keywords, evaluating search intent and building campaign structures around business objectives.",
  },
  {
    question: "What are negative keywords?",
    answer:
      "Negative keywords help prevent ads from appearing for searches that are not relevant to the campaign. They can help reduce unwanted traffic and improve targeting.",
  },
  {
    question: "Can Google Ads generate leads?",
    answer:
      "Yes. Google Ads can be configured for lead-generation goals using destinations such as contact forms, landing pages, calls or other supported conversion paths. Actual lead volume and quality depend on many campaign and business factors.",
  },
  {
    question: "Can Google Ads and SEO work together?",
    answer:
      "Yes. Google Ads and SEO are separate acquisition channels, but they can complement each other. Paid search can provide immediate advertising visibility while SEO focuses on organic search visibility over time.",
  },
  {
    question: "Do you guarantee Google Ads leads or sales?",
    answer:
      "No. Responsible PPC management cannot guarantee a specific number of leads, sales or return on ad spend. Results depend on competition, demand, offer quality, landing pages, budget, targeting, tracking and campaign execution.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Google Ads Services",
      serviceType: "Google Ads and PPC Advertising",
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
        "Google Ads",
        "PPC Advertising",
        "Google Search Ads",
        "Paid Search",
        "Lead Generation",
        "Digital Marketing",
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
          name: "Google Ads",
          item: PAGE_URL,
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
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `${title} | GmCodes9`,
    description: socialDescription,
    siteName: "GmCodes9",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 628,
        alt: "GmCodes9 — Google Ads, PPC & Search Advertising Services",
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

export default function GoogleAdsPage() {
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
        className="min-h-screen bg-[#05070a] text-white selection:bg-emerald-400/30"
      >
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.13),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.10),transparent_32%)]" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-5xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300 backdrop-blur-xl">
                <Search className="h-4 w-4" />
                Google Ads • PPC • Search Advertising
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Google Ads That Connect Your{" "}
                <span className="text-emerald-400">
                  Business With Search Intent
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                Performance-focused Google Ads and PPC campaigns built around
                keyword research, search intent, campaign structure,
                conversion paths, optimization and measurable performance.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                GmCodes9 provides Google Ads services in Lahore, Pakistan and
                worldwide, helping businesses reach relevant users when they
                are actively searching for products, services and solutions.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                >
                  Discuss Google Ads
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/services/digital-marketing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-medium text-white backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
                >
                  Explore Digital Marketing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Paid Search
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Reach people when they are already searching.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                Search advertising is different from interruptive advertising.
                Users are actively expressing an information need, commercial
                interest or potential buying intent through their searches.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                A strong Google Ads strategy connects that search intent with
                relevant keywords, useful ad messaging and a destination that
                supports the next step.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Intent", "Understand the search"],
                  ["Keywords", "Target relevant demand"],
                  ["Ads", "Match the message"],
                  ["Conversion", "Support the next action"],
                ].map(([label, text]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Google Ads Capabilities
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Build campaigns around search behavior
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                From keyword research to campaign optimization, every part of
                the paid search system should support the actual business
                objective.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/[0.05]"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEARCH INTENT */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Search Intent
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Understand what the search is really asking
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                Keyword targeting becomes more useful when it is connected to
                the reason behind the search. Different intent types can
                require different landing pages, messaging and campaign
                structures.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {intentTypes.map((item) => (
                <article
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                >
                  <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    {item.label}
                  </span>

                  <p className="mt-5 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CAMPAIGN TYPES */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Campaign Objectives
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Match the campaign to the business goal
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                Search advertising can support different acquisition goals.
                The campaign structure should reflect the action the business
                actually wants users to take.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {campaignTypes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* KEYWORDS + NEGATIVE KEYWORDS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <KeyRound className="h-6 w-6 text-emerald-300" />

                <h2 className="text-2xl font-semibold">
                  Relevant keyword targeting
                </h2>
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                Keyword research helps identify search terms that are relevant
                to your products, services and target audience. Keywords can
                then be organized into logical campaign and ad-group
                structures.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Commercial search terms",
                  "Transactional search terms",
                  "Service-specific keywords",
                  "Product-focused searches",
                  "Location-relevant searches where appropriate",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Search className="h-6 w-6 text-emerald-300" />

                <h2 className="text-2xl font-semibold">
                  Negative keyword strategy
                </h2>
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-400">
                Not every search containing a target keyword is useful.
                Negative keywords can help reduce irrelevant searches and
                improve the relationship between campaign targeting and actual
                business intent.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm leading-7 text-zinc-300">
                  The goal is not simply to get more clicks. The goal is to
                  attract the <span className="text-emerald-300">right</span>{" "}
                  clicks.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* LANDING PAGE ALIGNMENT */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                  Landing Page Alignment
                </p>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  The click is not the finish line.
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  A relevant ad can still perform poorly when the destination
                  does not match the user's search intent. Campaign messaging,
                  landing-page content and conversion paths should work
                  together.
                </p>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  This is where paid advertising connects with web development,
                  SEO, UX and conversion-focused page structure.
                </p>

                <Link
                  href="/services/web-development"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  Explore Web Development
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-blue-500/[0.06] p-7 backdrop-blur-xl">
                <div className="space-y-5">
                  {[
                    "Search query",
                    "Relevant keyword",
                    "Clear ad message",
                    "Relevant landing page",
                    "Useful conversion path",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-xs font-semibold text-emerald-300">
                        {index + 1}
                      </span>

                      <p className="text-sm text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO + GOOGLE ADS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Search,
                title: "Google Ads + SEO",
                text: "Paid search and organic SEO are separate channels that can complement each other across short-term and long-term search visibility.",
              },
              {
                icon: Users,
                title: "Google Ads + SMM",
                text: "Search advertising can complement social media marketing by reaching users through different stages and discovery channels.",
              },
              {
                icon: Target,
                title: "Google Ads + Meta Ads",
                text: "Paid search and paid social can support different parts of the customer journey when campaign objectives and measurement are clearly defined.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                >
                  <Icon className="h-6 w-6 text-emerald-300" />

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Our Process
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A structured Google Ads workflow
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                Campaign decisions should connect search intent, keywords,
                advertising, landing pages and measurable business outcomes.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                >
                  <span className="text-sm font-semibold text-emerald-300">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LOCAL + INTERNATIONAL */}
        <section>
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-6 w-6 text-emerald-300" />

                  <h2 className="text-2xl font-semibold">
                    Google Ads in Lahore & Pakistan
                  </h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Build paid search campaigns for businesses targeting Lahore
                  and audiences across Pakistan, with keyword and campaign
                  strategy adapted to the relevant market and offer.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-6 w-6 text-emerald-300" />

                  <h2 className="text-2xl font-semibold">
                    International Google Ads
                  </h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Google Ads campaigns can also target international audiences
                  across the United States, United Kingdom, Canada, Australia,
                  UAE, Saudi Arabia and other markets based on the business
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
              FAQ
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Google Ads Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Clear answers about PPC, keywords, search campaigns, negative
              keywords, conversions and paid search strategy.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-xl"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-medium text-white [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>

                  <ChevronDown className="h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300 group-open:rotate-180" />
                </summary>

                <div className="border-t border-white/10 px-5 pb-5 pt-4">
                  <p className="text-sm leading-7 text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Related Services
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Connect paid search with your wider digital strategy
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                ["Digital Marketing", "/services/digital-marketing"],
                ["SEO", "/services/seo"],
                ["Social Media Marketing", "/services/social-media-marketing"],
                ["Meta Ads", "/services/meta-ads"],
                ["GEO", "/services/geo"],
                ["AEO", "/services/aeo"],
                ["Entity SEO", "/services/entity-seo"],
                ["Web Development", "/services/web-development"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-zinc-300 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] hover:text-white"
                >
                  {label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.14),transparent_35%)]" />

          <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <Target className="h-6 w-6" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-5xl">
              Turn search intent into measurable advertising.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Build Google Ads campaigns around relevant keywords, clear
              messaging, useful landing pages and real performance data.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
              >
                Start a Google Ads Project
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-medium text-white transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* BACK TO TOP */}
        <a
          href="#top"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-zinc-300 shadow-2xl backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-emerald-400 hover:text-black"
        >
          ↑
        </a>
      </main>
    </>
  );
}