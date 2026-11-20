import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Heart,
  Lightbulb,
  MessageCircle,
  Megaphone,
  PenTool,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/social-media-marketing`;

const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20social%20media%20marketing%20services.";

const title =
  "Social Media Marketing Services in Lahore | SMM | GmCodes9";

const description =
  "GmCodes9 provides social media marketing services in Lahore, Pakistan and worldwide, including social media strategy, content planning, Facebook and Instagram marketing, audience engagement, brand awareness, organic social growth, analytics and paid social coordination.";

const socialDescription =
  "Social media strategy, content planning, Facebook and Instagram marketing, audience engagement, brand awareness and performance-focused SMM for Lahore, Pakistan and international businesses.";

const keywords = [
  "social media marketing",
  "SMM",
  "social media marketing Lahore",
  "social media marketing Pakistan",
  "social media management",
  "social media strategy",
  "Facebook marketing",
  "Instagram marketing",
  "Facebook marketing Lahore",
  "Instagram marketing Lahore",
  "social media content strategy",
  "social media growth",
  "audience engagement",
  "brand awareness",
  "content marketing",
  "organic social media",
  "social media advertising",
  "Meta Ads",
  "digital marketing",
];

const serviceCapabilities = [
  {
    icon: Target,
    title: "Social Media Strategy",
    text: "Build a platform-focused social strategy around your audience, brand positioning, content goals and wider digital marketing objectives.",
  },
  {
    icon: PenTool,
    title: "Content Planning",
    text: "Create structured content pillars, themes, formats and publishing plans that keep your social presence consistent and purposeful.",
  },
  {
    icon: Share2,
    title: "Facebook Marketing",
    text: "Develop Facebook content and audience strategies designed around brand discovery, engagement, community and website traffic.",
  },
  {
    icon: Heart,
    title: "Instagram Marketing",
    text: "Use Instagram-focused content, visual storytelling, captions, engagement and profile optimization to strengthen your brand presence.",
  },
  {
    icon: MessageCircle,
    title: "Community Engagement",
    text: "Support meaningful audience interaction through relevant content, responses, conversations and community-focused communication.",
  },
  {
    icon: Megaphone,
    title: "Brand Awareness",
    text: "Build recognizable and consistent social communication that helps audiences understand what your business offers and why it matters.",
  },
  {
    icon: TrendingUp,
    title: "Organic Social Growth",
    text: "Improve content consistency, audience relevance and engagement without relying on artificial follower or engagement tactics.",
  },
  {
    icon: BarChart3,
    title: "Performance & Analytics",
    text: "Review social performance and audience behavior to identify stronger content opportunities and improve future campaigns.",
  },
];

const organicAreas = [
  "Content pillars and topic planning",
  "Social media content calendars",
  "Facebook and Instagram content strategy",
  "Audience engagement",
  "Community-focused communication",
  "Brand voice and consistency",
  "Profile and social presence optimization",
  "Organic content distribution",
];

const socialPlatforms = [
  {
    icon: Share2,
    title: "Facebook",
    text: "Content strategy, audience engagement, brand communication and traffic-focused social activity.",
  },
  {
    icon: CameraIcon,
    title: "Instagram",
    text: "Visual content strategy, captions, profile optimization, engagement and brand storytelling.",
  },
  {
    icon: MessageCircle,
    title: "Social Communities",
    text: "Audience conversations, community engagement and content designed around meaningful interactions.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Review your business, audience, market, positioning and social media objectives.",
  },
  {
    number: "02",
    title: "Research",
    text: "Analyze competitors, audience interests, content opportunities and relevant platform behavior.",
  },
  {
    number: "03",
    title: "Plan",
    text: "Develop content pillars, platform priorities, publishing direction and engagement goals.",
  },
  {
    number: "04",
    title: "Create",
    text: "Develop structured content concepts and social messaging aligned with your brand.",
  },
  {
    number: "05",
    title: "Publish & Engage",
    text: "Maintain consistent social activity while supporting relevant audience interactions.",
  },
  {
    number: "06",
    title: "Analyze & Optimize",
    text: "Review performance signals and refine the strategy based on what audiences respond to.",
  },
];

const faqs = [
  {
    question: "What is social media marketing?",
    answer:
      "Social media marketing is the strategic use of platforms such as Facebook and Instagram to build brand awareness, communicate with audiences, distribute content, encourage engagement and support broader business and marketing goals.",
  },
  {
    question: "Do you provide social media marketing in Lahore?",
    answer:
      "Yes. GmCodes9 provides social media marketing services for businesses in Lahore and Pakistan, as well as remote services for international clients.",
  },
  {
    question: "Do you manage Facebook and Instagram?",
    answer:
      "Social media services can include Facebook and Instagram strategy, content planning, audience engagement, brand communication and performance analysis depending on the agreed scope.",
  },
  {
    question: "Is social media marketing different from Meta Ads?",
    answer:
      "Yes. Social media marketing can focus on organic content, community engagement, brand communication and audience growth, while Meta Ads focuses on paid advertising through platforms such as Facebook and Instagram. They can also work together as part of a broader digital marketing strategy.",
  },
  {
    question: "Do you create social media content?",
    answer:
      "Content planning and creative direction can be included in an SMM strategy. The exact production scope depends on the project, including the type of content, platforms, publishing frequency and available creative assets.",
  },
  {
    question: "How does social media marketing support SEO?",
    answer:
      "Social media is not treated as a direct Google ranking signal. However, strong social content can support brand discovery, content distribution, branded searches, audience engagement and website traffic, which can contribute to a broader digital presence.",
  },
  {
    question: "Can social media marketing be combined with SEO and GEO?",
    answer:
      "Yes. Social content can complement SEO, GEO, AEO and entity-focused strategies by distributing useful information, reinforcing brand terminology and creating additional context around a business and its content.",
  },
  {
    question: "Do you guarantee followers, engagement or sales?",
    answer:
      "No. Responsible social media marketing does not guarantee a specific number of followers, engagement, leads or sales. Results depend on the business, audience, offer, content, competition, platform behavior and campaign execution.",
  },
];

function CameraIcon(props: React.ComponentProps<typeof Share2>) {
  return <Share2 {...props} />;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Social Media Marketing Services",
      serviceType: "Social Media Marketing",
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
        "Social Media Marketing",
        "Social Media Management",
        "Facebook Marketing",
        "Instagram Marketing",
        "Digital Marketing",
        "Content Strategy",
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
          name: "Social Media Marketing",
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
        alt: "GmCodes9 — Social Media Marketing Services",
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

export default function SocialMediaMarketingPage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.10),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-5xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                Social Media Marketing • SMM
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Social Media Marketing That Builds Attention Into{" "}
                <span className="text-emerald-400">Relationships</span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                Build a stronger social presence with strategy-driven content,
                Facebook and Instagram marketing, audience engagement, brand
                awareness and performance-focused social media management.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                GmCodes9 provides social media marketing services in Lahore,
                Pakistan and worldwide, connecting social strategy with your
                broader SEO, GEO, AEO, digital marketing and business goals.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                >
                  Discuss Your Social Strategy
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
                Social Strategy
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Social media is more than posting.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                Effective social media marketing combines audience research,
                content strategy, platform-specific communication, consistent
                publishing and meaningful engagement. The goal is not to fill
                a calendar with random posts because apparently the internet
                has enough of those already.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                A stronger social presence should help people discover your
                business, understand your offer, remember your brand and take
                the next relevant step toward your website, product, service
                or community.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["Strategy", "Clear social direction"],
                  ["Content", "Relevant content systems"],
                  ["Engagement", "Meaningful audience interaction"],
                  ["Analytics", "Performance-led refinement"],
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
                SMM Capabilities
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Social media marketing built around your audience
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                From social strategy and content planning to audience
                engagement and performance analysis, each activity should have
                a clear purpose within your digital marketing system.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCapabilities.map((item) => {
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

        {/* PLATFORMS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Platform Strategy
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Use the right social channel for the right audience
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                Social strategy should reflect how your audience actually
                discovers and interacts with content instead of copying the
                same post everywhere and hoping algorithms develop empathy.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {socialPlatforms.map((item) => {
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

        {/* ORGANIC SOCIAL */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                  Organic Social
                </p>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Build consistency before chasing scale
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Organic social media creates the foundation for your brand's
                  communication. A consistent strategy helps audiences
                  recognize your business, understand your expertise and find
                  useful content without every interaction requiring paid
                  promotion.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {organicAreas.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                      <span className="text-sm leading-6 text-zinc-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-blue-500/[0.06] p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-emerald-300" />

                  <h3 className="text-xl font-semibold">
                    Audience-first content
                  </h3>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Good social content answers a real audience need, reinforces
                  your positioning or gives people a useful reason to interact
                  with your brand.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Who is the audience?",
                    "What problems or interests matter to them?",
                    "Which content formats fit the platform?",
                    "What action should the content support?",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                      <p className="text-sm leading-7 text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL + SEO */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-4">
            {[
              {
                icon: Search,
                title: "Social + SEO",
                text: "Support content distribution, brand discovery and branded search without treating social signals as a direct Google ranking factor.",
              },
              {
                icon: Globe2,
                title: "Social + GEO",
                text: "Use consistent brand language and useful content to strengthen your broader digital presence across modern discovery channels.",
              },
              {
                icon: Lightbulb,
                title: "Social + AEO",
                text: "Turn audience questions and useful topics into structured content ideas that can also support answer-focused content strategies.",
              },
              {
                icon: Sparkles,
                title: "Social + Entity SEO",
                text: "Maintain consistent terminology around your brand, services and expertise across your website and social presence.",
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

        {/* PAID SOCIAL */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                  Organic + Paid
                </p>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Social media and paid advertising can work together
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                  A strong organic social presence can provide useful creative
                  direction and brand context for paid campaigns. Meta Ads can
                  then be used separately for targeted paid acquisition,
                  traffic, leads or conversions depending on campaign goals.
                </p>

                <Link
                  href="/services/meta-ads"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  Explore Meta Ads
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-7">
                <div className="space-y-5">
                  {[
                    "Organic content establishes brand communication.",
                    "Paid campaigns extend relevant content to selected audiences.",
                    "Creative performance can inform future content decisions.",
                    "Social strategy can connect awareness with broader conversion goals.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                      <p className="text-sm leading-7 text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
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
              A structured social media workflow
            </h2>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              The process connects research, content, publishing and
              performance analysis so social activity remains connected to
              actual business objectives.
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
                    Lahore & Pakistan
                  </h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Build social communication around local audiences,
                  businesses and market context in Lahore and across Pakistan,
                  while keeping the brand strategy aligned with the wider
                  digital ecosystem.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-6 w-6 text-emerald-300" />

                  <h2 className="text-2xl font-semibold">
                    International Social Marketing
                  </h2>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Social media strategy can also support businesses targeting
                  international audiences across the United States, United
                  Kingdom, Canada, Australia, UAE, Saudi Arabia and other
                  markets.
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
              Social Media Marketing Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Straight answers about SMM, organic social, paid advertising and
              how social fits into a broader digital marketing strategy.
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
                Connect social media with the rest of your digital strategy
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                ["Digital Marketing", "/services/digital-marketing"],
                ["Meta Ads", "/services/meta-ads"],
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
              <Megaphone className="h-6 w-6" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-5xl">
              Build a social presence people actually remember.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Connect your social strategy with content, SEO, paid
              advertising and wider digital growth goals through one coherent
              marketing system.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
              >
                Start a Social Media Project
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
