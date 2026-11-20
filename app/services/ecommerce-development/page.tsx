import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Database,
  Globe2,
  LayoutDashboard,
  Package,
  Search,
  ShoppingCart,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/ecommerce-development`;

const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20E-Commerce%20Development%20services.";

const title =
  "E-Commerce Development Services in Lahore | Online Stores | GmCodes9";

const description =
  "GmCodes9 provides e-commerce development services in Lahore, Pakistan and worldwide, including responsive online stores, product catalogs, shopping carts, checkout flows, Stripe payments, authentication, order management, admin dashboards, APIs and AI-ready integrations.";

const socialDescription =
  "Custom e-commerce development for responsive online stores, product catalogs, checkout, payments, order management, dashboards and scalable business workflows.";

const keywords = [
  "e-commerce development",
  "ecommerce development",
  "e-commerce development Lahore",
  "ecommerce development Lahore",
  "e-commerce development Pakistan",
  "ecommerce development Pakistan",
  "e-commerce website development",
  "ecommerce website development",
  "online store development",
  "online shopping website development",
  "custom e-commerce website",
  "custom ecommerce development",
  "e-commerce web development",
  "ecommerce web development",
  "e-commerce developer Lahore",
  "shopping cart development",
  "e-commerce checkout",
  "Stripe e-commerce integration",
  "e-commerce payment integration",
  "e-commerce admin dashboard",
  "product catalog development",
  "order management system",
  "e-commerce API integration",
  "AI e-commerce development",
];

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Online Store Development",
    text: "Build responsive storefronts designed around product discovery, shopping flows and customer conversion journeys.",
  },
  {
    icon: Package,
    title: "Product Catalogs",
    text: "Create structured product experiences with categories, product details, pricing, variants and relevant information.",
  },
  {
    icon: CreditCard,
    title: "Checkout & Payments",
    text: "Implement practical checkout experiences and payment integrations such as Stripe where required.",
  },
  {
    icon: Users,
    title: "Customer Accounts",
    text: "Support authentication, account areas, customer information and relevant order-related workflows.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    text: "Create management interfaces for products, orders, customers, inventory-related workflows and business operations.",
  },
  {
    icon: Database,
    title: "E-Commerce APIs",
    text: "Connect storefronts with backend services, databases, payment providers and other third-party APIs.",
  },
  {
    icon: BarChart3,
    title: "Business Workflows",
    text: "Structure e-commerce systems around orders, customers, products, reporting and operational requirements.",
  },
  {
    icon: Sparkles,
    title: "AI-Ready Integrations",
    text: "Integrate AI-powered features and external AI APIs where they provide a genuine business or customer experience benefit.",
  },
];

const storeFeatures = [
  {
    title: "Product Discovery",
    text: "Categories, product pages, search, filtering and structured navigation help customers find relevant products.",
  },
  {
    title: "Shopping Experience",
    text: "Responsive product browsing, cart interactions and clear purchase paths across desktop and mobile devices.",
  },
  {
    title: "Secure Checkout",
    text: "Connect checkout flows with suitable payment providers and authentication requirements.",
  },
  {
    title: "Order Management",
    text: "Support order creation, customer information and administrative workflows based on the project requirements.",
  },
  {
    title: "Business Management",
    text: "Give administrators practical tools for managing products, orders, customers and operational information.",
  },
  {
    title: "Scalable Architecture",
    text: "Use modern frontend, backend, database and API architecture appropriate to the size and complexity of the store.",
  },
];

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Laravel",
  "PHP",
  "Python",
  "FastAPI",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Stripe",
  "Authentication",
  "Third-Party APIs",
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand products, customers, business workflows, payment requirements and the desired shopping experience.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Define storefront architecture, product structure, user flows, integrations, database requirements and administrative features.",
  },
  {
    number: "03",
    title: "Build",
    text: "Develop the storefront, backend services, product system, shopping cart, checkout and required business functionality.",
  },
  {
    number: "04",
    title: "Integrate",
    text: "Connect payment gateways, APIs, authentication, third-party services and other required platform functionality.",
  },
  {
    number: "05",
    title: "Test",
    text: "Review responsive behavior, product flows, cart interactions, checkout, forms, authentication and key business workflows.",
  },
  {
    number: "06",
    title: "Launch",
    text: "Deploy the completed e-commerce application and continue improvements based on real business requirements.",
  },
];

const faqs = [
  {
    question: "What is e-commerce development?",
    answer:
      "E-commerce development involves building online shopping platforms where customers can discover products, view product information, add items to a cart, complete checkout and interact with related customer services.",
  },
  {
    question: "Do you provide e-commerce development in Lahore?",
    answer:
      "Yes. GmCodes9 provides custom e-commerce development services for businesses in Lahore and Pakistan, as well as remote projects for international clients.",
  },
  {
    question: "Can you build a custom online store?",
    answer:
      "Yes. Custom online stores can be developed around the business's products, customer journey, payment requirements, administration workflows and technical architecture.",
  },
  {
    question: "Can you integrate Stripe payments?",
    answer:
      "Yes. Stripe can be integrated where it is appropriate for the project, including payment and checkout workflows supported by the required Stripe configuration.",
  },
  {
    question: "Can an e-commerce website have an admin dashboard?",
    answer:
      "Yes. Custom admin dashboards can provide management interfaces for products, orders, customers, inventory-related workflows and other operational requirements.",
  },
  {
    question: "Can you build an e-commerce website with React or Next.js?",
    answer:
      "Yes. React.js and Next.js can be used to build modern responsive storefronts and e-commerce interfaces, with backend services and databases selected according to the project requirements.",
  },
  {
    question: "Can e-commerce websites integrate AI?",
    answer:
      "Yes. AI APIs and AI-powered features can be integrated where they provide a useful business function, such as customer assistance, product-related workflows or intelligent search experiences.",
  },
  {
    question: "Can you optimize an e-commerce website for SEO?",
    answer:
      "Yes. E-commerce development can incorporate technical SEO fundamentals, semantic structure, metadata, structured content and search-friendly architecture. Dedicated SEO services can provide deeper optimization.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "E-Commerce Development Services",
      serviceType: "E-Commerce Development",
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
        "E-Commerce Development",
        "Online Store Development",
        "E-Commerce Web Development",
        "Payment Integration",
        "Shopping Cart Development",
        "E-Commerce Applications",
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
          name: "E-Commerce Development",
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
        alt: "GmCodes9 — E-Commerce Development Services",
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

export default function EcommerceDevelopmentPage() {
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
                <ShoppingCart className="h-4 w-4" />
                E-Commerce • Online Stores • Payments
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                E-Commerce Development for{" "}
                <span className="text-emerald-400">
                  Modern Online Businesses
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                Custom e-commerce websites and online stores built around
                product discovery, shopping carts, checkout, payments, customer
                accounts, order workflows and business management.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                GmCodes9 provides e-commerce development services in Lahore,
                Pakistan and worldwide using modern web technologies, APIs,
                databases, payment integrations and AI-ready architecture.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                >
                  Discuss Your Store
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  href="/services/full-stack-development"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-medium text-white backdrop-blur-xl transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
                >
                  Explore Full Stack Development
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
                Custom E-Commerce
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                More than a storefront. A complete digital commerce system.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                A successful e-commerce application connects the customer
                experience with the operational side of the business. Product
                discovery, pricing, carts, checkout, payments, orders,
                customers and administration all need to work together.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                GmCodes9 builds custom e-commerce applications based on the
                actual business model instead of forcing every business into
                the same template.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Products", "Catalog & details"],
                  ["Customers", "Accounts & profiles"],
                  ["Orders", "Purchase workflows"],
                  ["Payments", "Checkout integrations"],
                  ["Admin", "Business management"],
                  ["APIs", "Connected services"],
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
                E-Commerce Capabilities
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Build the commerce features your business actually needs
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                From the customer-facing storefront to the backend systems
                behind it, e-commerce development can cover the complete
                shopping and management workflow.
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

        {/* CUSTOMER EXPERIENCE */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Store Experience
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Make the buying journey clear from discovery to checkout.
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                E-commerce UX should reduce unnecessary friction and make it
                easy for customers to understand products, pricing,
                availability and the next step.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {storeFeatures.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                >
                  <BadgeCheck className="h-6 w-6 text-emerald-300" />

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PAYMENTS */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                  Payments & Checkout
                </p>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Checkout flows designed around the transaction
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Payment and checkout are critical parts of an online store.
                  The implementation should connect cart data, customer
                  information, payment processing and order creation in a
                  coherent workflow.
                </p>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Payment integrations such as Stripe can be included when
                  supported by the project and target market.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-blue-500/[0.06] p-7 backdrop-blur-xl">
                <div className="space-y-4">
                  {[
                    "Product selection",
                    "Shopping cart",
                    "Customer information",
                    "Payment processing",
                    "Order creation",
                    "Order confirmation",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-xs font-semibold text-emerald-300">
                        {index + 1}
                      </span>

                      <span className="text-sm text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ADMIN */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <LayoutDashboard className="h-8 w-8 text-emerald-300" />

                <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                  Give the business a practical management layer
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Customers see the storefront. Your team needs the system
                  behind it. Custom admin dashboards can bring products,
                  orders, customers and operational workflows into one
                  manageable interface.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Product management",
                  "Order management",
                  "Customer management",
                  "Inventory workflows",
                  "Sales information",
                  "Business dashboards",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI + SEO */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <Search className="h-7 w-7 text-emerald-300" />

                <h2 className="mt-5 text-2xl font-semibold">
                  E-Commerce + SEO
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  E-commerce architecture can be designed with search
                  visibility in mind, including semantic HTML, product content,
                  metadata, internal linking and technically sound page
                  structures.
                </p>

                <Link
                  href="/services/seo"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  Explore SEO
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <Sparkles className="h-7 w-7 text-emerald-300" />

                <h2 className="mt-5 text-2xl font-semibold">
                  E-Commerce + AI
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  AI APIs can be integrated into e-commerce experiences where
                  they provide useful functionality, including customer
                  assistants, product-related workflows and intelligent
                  experiences.
                </p>

                <Link
                  href="/services/ai-development"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  Explore AI Development
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
              Technology Stack
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Modern technologies for custom commerce
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400">
              The technology stack is selected according to the application's
              requirements, integrations, scale and business workflows.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-sm text-zinc-300 backdrop-blur-xl"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Development Process
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                From product idea to working commerce platform
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                A structured development process helps connect the storefront,
                backend systems, integrations and business requirements before
                the application reaches production.
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
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <Globe2 className="h-7 w-7 text-emerald-300" />

                <h2 className="mt-5 text-2xl font-semibold">
                  E-Commerce Development in Lahore & Pakistan
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Build custom online stores and commerce applications for
                  Lahore and Pakistan-based businesses with functionality
                  aligned to their products, customers, payments and operations.
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <Globe2 className="h-7 w-7 text-emerald-300" />

                <h2 className="mt-5 text-2xl font-semibold">
                  International E-Commerce Development
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Remote e-commerce development is available for international
                  businesses targeting markets such as the United States,
                  United Kingdom, Canada, Australia, UAE and Saudi Arabia.
                </p>
              </article>
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
              E-Commerce Development Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Common questions about online stores, payments, technology,
              dashboards, AI integrations and search visibility.
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
                Connect your store with the wider digital ecosystem
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                ["Full Stack Development", "/services/full-stack-development"],
                ["Web Development", "/services/web-development"],
                ["AI Development", "/services/ai-development"],
                ["SEO", "/services/seo"],
                ["Digital Marketing", "/services/digital-marketing"],
                ["Google Ads", "/services/google-ads"],
                ["Meta Ads", "/services/meta-ads"],
                [
                  "CRM & Dashboard Development",
                  "/services/crm-dashboard-development",
                ],
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
              <ShoppingCart className="h-6 w-6" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-5xl">
              Build an e-commerce experience around your business.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              From product discovery and checkout to payments, orders,
              dashboards and integrations, create a commerce platform designed
              for the way your business actually operates.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
              >
                Start an E-Commerce Project
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
