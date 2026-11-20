import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Eye,
  Globe2,
  MousePointerClick,
  RefreshCw,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/meta-ads`;

const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20Meta%20Ads%20services.";

const title = "Meta Ads Services in Lahore | Facebook & Instagram Ads | GmCodes9";

const description =
  "GmCodes9 provides Meta Ads services in Lahore, Pakistan and worldwide, including Facebook Ads, Instagram Ads, audience targeting, lead generation, traffic campaigns, retargeting, ad creative strategy, campaign optimization and performance tracking.";

const socialDescription =
  "Performance-focused Meta Ads for Facebook and Instagram, including campaign strategy, audience targeting, lead generation, retargeting, creative direction and optimization.";

const keywords = [
  "Meta Ads",
  "Meta Ads services",
  "Meta Ads Lahore",
  "Meta Ads Pakistan",
  "Facebook Ads",
  "Facebook Ads Lahore",
  "Facebook advertising",
  "Instagram Ads",
  "Instagram advertising",
  "Instagram Ads Lahore",
  "Meta advertising",
  "Facebook marketing",
  "Instagram marketing",
  "paid social advertising",
  "social media advertising",
  "lead generation ads",
  "Facebook lead generation",
  "Instagram lead generation",
  "retargeting ads",
  "conversion campaigns",
  "digital marketing",
];

const capabilities = [
  {
    icon: Target,
    title: "Campaign Strategy",
    text: "Plan Meta advertising around business objectives, audience intent, offers, conversion paths and available campaign assets.",
  },
  {
    icon: Users,
    title: "Audience Targeting",
    text: "Structure relevant audience groups using available Meta targeting options, customer context and campaign objectives.",
  },
  {
    icon: MousePointerClick,
    title: "Lead Generation",
    text: "Build campaigns designed to generate relevant inquiries through lead forms, landing pages or other agreed conversion paths.",
  },
  {
    icon: Eye,
    title: "Traffic Campaigns",
    text: "Promote relevant website pages, content or offers to audiences aligned with the campaign's traffic objective.",
  },
  {
    icon: RefreshCw,
    title: "Retargeting",
    text: "Reconnect with relevant audiences who have already interacted with your website, content or business where appropriate tracking is available.",
  },
  {
    icon: Zap,
    title: "Ad Creative Strategy",
    text: "Develop creative direction around hooks, messaging, offers, formats and audience needs to support campaign performance.",
  },
  {
    icon: TrendingUp,
    title: "Campaign Optimization",
    text: "Review campaign performance and refine audiences, creative direction, budget allocation and campaign structure where appropriate.",
  },
  {
    icon: BarChart3,
    title: "Performance Analysis",
    text: "Use campaign metrics and available tracking data to understand performance and identify opportunities for improvement.",
  },
];

const campaignTypes = [
  {
    title: "Lead Generation",
    text: "Reach relevant audiences and encourage inquiries through Meta lead forms or website-based conversion journeys.",
  },
  {
    title: "Website Traffic",
    text: "Drive targeted visitors toward useful landing pages, service pages, product pages or other business destinations.",
  },
  {
    title: "Conversions",
    text: "Support campaigns focused on measurable actions such as purchases, registrations, inquiries or other configured events.",
  },
  {
    title: "Retargeting",
    text: "Reconnect with audiences who have previously interacted with your business or digital content.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Review your business, offer, audience, market, conversion goal and existing advertising setup.",
  },
  {
    number: "02",
    title: "Research",
    text: "Analyze audience opportunities, competitors, messaging angles, creative requirements and campaign intent.",
  },
  {
    number: "03",
    title: "Structure",
    text: "Plan campaigns, audiences, ad sets, creative direction and conversion paths around the chosen objective.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Set up and launch campaigns using the agreed targeting, creative, budget and measurement configuration.",
  },
  {
    number: "05",
    title: "Monitor",
    text: "Review campaign performance, audience behavior, creative results and conversion signals.",
  },
  {
    number: "06",
    title: "Optimize",
    text: "Refine campaigns based on available performance data instead of making decisions from guesswork.",
  },
];

const faqs = [
  {
    question: "What are Meta Ads?",
    answer:
      "Meta Ads are paid advertising campaigns delivered through Meta platforms such as Facebook and Instagram. Campaigns can be configured around objectives including awareness, traffic, leads, engagement and conversions.",
  },
  {
    question: "Do you provide Meta Ads services in Lahore?",
    answer:
      "Yes. GmCodes9 provides Meta Ads services for businesses in Lahore and Pakistan, as well as remote advertising services for international clients.",
  },
  {
    question: "Do you run both Facebook Ads and Instagram Ads?",
    answer:
      "Yes. Meta advertising can include Facebook and Instagram placements depending on the campaign objective, audience, creative format and available account configuration.",
  },
  {
    question: "Can Meta Ads generate leads?",
    answer:
      "Yes. Meta campaigns can be structured for lead generation using options such as Meta lead forms or website conversion journeys. Actual lead volume and quality depend on the offer, audience, creative, market, budget and campaign execution.",
  },
  {
    question: "Do you provide retargeting campaigns?",
    answer:
      "Yes. Retargeting can be part of a Meta advertising strategy when suitable audience data and tracking configuration are available.",
  },
  {
    question: "Is Meta Ads the same as social media marketing?",
    answer:
      "No. Social media marketing can focus on organic content, community engagement and brand communication, while Meta Ads focuses on paid advertising through Meta platforms. They can work together as separate parts of a digital marketing strategy.",
  },
  {
    question: "Can Meta Ads work with SEO and digital marketing?",
    answer:
      "Yes. Meta Ads can complement SEO, social media marketing, content strategy, landing page optimization and broader digital marketing campaigns. Paid advertising and organic search should still be treated as distinct acquisition channels.",
  },
  {
    question: "Do you guarantee leads or sales from Meta Ads?",
    answer:
      "No. No responsible advertising service can guarantee a specific number of leads, sales or return on ad spend. Results depend on the offer, audience, creative, competition, landing page, tracking, budget and market conditions.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Meta Ads Services",
      serviceType: "Meta Advertising",
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
        "Meta Ads",
        "Facebook Ads",
        "Instagram Ads",
        "Paid Social Advertising",
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
          name: "Meta Ads",
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
        alt: "GmCodes9 — Meta Ads, Facebook Ads & Instagram Ads Services",
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

export default function MetaAdsPage() {
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
                <Zap className="h-4 w-4" />
                Meta Ads • Facebook Ads • Instagram Ads
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Meta Ads That Put Your{" "}
                <span className="text-emerald-400">Offer in Front</span> of
                Relevant Audiences
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                Performance-focused Meta advertising for Facebook and
                Instagram, built around campaign objectives, audience
                targeting, creative strategy, lead generation, retargeting and
                measurable performance.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                GmCodes9 provides Meta Ads services in Lahore, Pakistan and
                worldwide, helping businesses connect paid social campaigns
                with their wider digital marketing and conversion strategy.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                >
                  Discuss Meta Ads
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/services/social-media-marketing"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-medium text-white backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
                >
                  Explore Social Media Marketing
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
                Paid Social Advertising
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Paid social works best when strategy comes before spending.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                Meta advertising is more than creating an ad and pressing
                publish. Campaign performance depends on the offer, audience,
                creative, campaign objective, landing experience, tracking and
                ongoing optimization.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                GmCodes9 approaches Meta Ads as part of a wider digital
                marketing system, connecting paid campaigns with social
                strategy, landing pages, conversion paths and business goals.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Target", "Reach relevant audiences"],
                  ["Creative", "Communicate the offer clearly"],
                  ["Convert", "Support meaningful actions"],
                  ["Optimize", "Improve from real data"],
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
                Meta Advertising Capabilities
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Campaign strategy from audience to optimization
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                Build campaigns around a defined objective instead of treating
                every business like it needs the same advertising setup.
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

        {/* CAMPAIGN TYPES */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Campaign Objectives
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Different goals require different campaign structures
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                A lead generation campaign should not be structured exactly
                like a traffic or conversion campaign. The objective, audience,
                creative and destination should work together.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
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

        {/* FACEBOOK + INSTAGRAM */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <Users className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-semibold">Facebook Ads</h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Facebook advertising can support awareness, traffic, lead
                  generation and conversion campaigns using audience and
                  creative strategies aligned with the business objective.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Audience-focused campaign structure",
                    "Lead generation campaigns",
                    "Website traffic campaigns",
                    "Conversion-focused advertising",
                    "Retargeting opportunities",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                    <TrendingUp className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-semibold">Instagram Ads</h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Instagram advertising can use visual creative and audience
                  targeting to support awareness, traffic, leads and
                  conversion-focused campaigns.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Visual-first advertising concepts",
                    "Audience and placement strategy",
                    "Traffic and lead campaigns",
                    "Conversion-focused creative",
                    "Creative performance analysis",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* RETARGETING */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Retargeting
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Stay relevant after the first interaction
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                Not every visitor or social user converts on the first
                interaction. Where appropriate tracking and audience data are
                available, retargeting can help reconnect with people who have
                already interacted with your business.
              </p>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                Retargeting can be particularly useful for longer consideration
                journeys, repeat visits, product interest and audiences that
                need additional context before taking action.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-blue-500/[0.06] p-7 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <RefreshCw className="h-6 w-6 text-emerald-300" />

                <h3 className="text-xl font-semibold">
                  A connected acquisition journey
                </h3>
              </div>

              <div className="mt-7 space-y-4">
                {[
                  "Audience discovers the business",
                  "Audience interacts with content or website",
                  "Relevant audience is identified where tracking permits",
                  "Retargeting communicates a stronger next step",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-xs font-semibold text-emerald-300">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-7 text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CREATIVE + LANDING */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Beyond the Ad
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Advertising performance does not stop at the click
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                A strong campaign can still struggle if the offer is unclear,
                the landing page is confusing or the conversion path does not
                match the audience's intent.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Search,
                  title: "Creative",
                  text: "Clear hooks, relevant messaging, visual direction and calls to action.",
                },
                {
                  icon: Globe2,
                  title: "Landing Experience",
                  text: "Relevant pages and conversion paths that align with the advertising message.",
                },
                {
                  icon: BarChart3,
                  title: "Measurement",
                  text: "Useful tracking and performance signals to understand what is actually happening.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                  >
                    <Icon className="h-6 w-6 text-emerald-300" />

                    <h3 className="mt-5 text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
              Our Process
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A structured Meta Ads workflow
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              Campaign decisions should be connected to business objectives,
              audience context and measurable performance rather than random
              changes to settings.
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
        </section>

        {/* LOCAL + INTERNATIONAL */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-6 w-6 text-emerald-300" />

                  <h2 className="text-2xl font-semibold">
                    Meta Ads in Lahore & Pakistan
                  </h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Run paid social campaigns for businesses targeting Lahore
                  and audiences across Pakistan, with campaign strategy
                  adapted to the business offer, audience and market.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-6 w-6 text-emerald-300" />

                  <h2 className="text-2xl font-semibold">
                    International Meta Advertising
                  </h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Meta advertising can also support businesses targeting
                  audiences in the United States, United Kingdom, Canada,
                  Australia, UAE, Saudi Arabia and other international markets.
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
              Meta Ads Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Clear answers about Facebook Ads, Instagram Ads, lead
              generation, retargeting and paid social advertising.
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
                Connect paid social with your wider marketing strategy
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                ["Digital Marketing", "/services/digital-marketing"],
                ["Social Media Marketing", "/services/social-media-marketing"],
                ["Google Ads", "/services/google-ads"],
                ["SEO", "/services/seo"],
                ["GEO", "/services/geo"],
                ["AEO", "/services/aeo"],
                ["Entity SEO", "/services/entity-seo"],
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
              Turn paid social into a measurable growth channel.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Build Meta campaigns around the right audience, creative,
              conversion path and performance data instead of simply spending
              money and hoping the algorithm develops a conscience.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
              >
                Start a Meta Ads Project
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