import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  Database,
  Gauge,
  Globe2,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  PanelsTopLeft,
  Search,
  Settings2,
  ShieldCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const SITE_URL = "https://www.gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services/crm-dashboard-development`;

const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20GmCodes9%2C%20I%27m%20interested%20in%20CRM%20and%20Dashboard%20Development%20services.";

const title =
  "CRM & Dashboard Development Services in Lahore | GmCodes9";

const description =
  "GmCodes9 provides custom CRM, admin panel and dashboard development services in Lahore, Pakistan and worldwide, including role-based access, business workflows, analytics dashboards, data management, REST APIs, databases, authentication and responsive interfaces.";

const socialDescription =
  "Custom CRM systems, admin panels and business dashboards with role-based access, workflows, analytics, databases, APIs and responsive interfaces.";

const keywords = [
  "CRM development",
  "CRM development services",
  "CRM development Lahore",
  "CRM development Pakistan",
  "custom CRM development",
  "custom CRM software",
  "CRM software development",
  "CRM web application",
  "admin panel development",
  "admin dashboard development",
  "dashboard development",
  "dashboard development Lahore",
  "business dashboard development",
  "custom dashboard development",
  "management dashboard",
  "business management system",
  "internal business tools",
  "role based access control",
  "RBAC development",
  "analytics dashboard development",
  "REST API development",
  "database development",
  "CRM integration",
  "custom management system",
];

const capabilities = [
  {
    icon: LayoutDashboard,
    title: "Custom CRM Systems",
    text: "Build CRM applications around customer records, sales processes, communication workflows and business-specific requirements.",
  },
  {
    icon: PanelsTopLeft,
    title: "Admin Panels",
    text: "Create centralized management interfaces for users, content, products, orders, records and operational data.",
  },
  {
    icon: BarChart3,
    title: "Business Dashboards",
    text: "Turn operational data into useful dashboards, summaries, charts, tables and performance views.",
  },
  {
    icon: Users,
    title: "Customer Management",
    text: "Organize customer information, records, interactions and related business workflows in one application.",
  },
  {
    icon: LockKeyhole,
    title: "Role-Based Access",
    text: "Implement authentication and role-based permissions so different users can access the functionality relevant to their responsibilities.",
  },
  {
    icon: Workflow,
    title: "Business Workflows",
    text: "Translate real operational processes into structured digital workflows that reduce repetitive manual work.",
  },
  {
    icon: Database,
    title: "Database Systems",
    text: "Design application data structures and database integrations around the application's information and reporting needs.",
  },
  {
    icon: Zap,
    title: "API Integrations",
    text: "Connect CRM and dashboard applications with REST APIs, third-party services and other business systems.",
  },
];

const systemAreas = [
  {
    title: "Customer Records",
    text: "Centralize customer profiles, contact information, notes, statuses and relevant business data.",
  },
  {
    title: "Sales & Leads",
    text: "Organize leads, opportunities, pipeline stages and sales-related workflows according to business requirements.",
  },
  {
    title: "User Management",
    text: "Manage application users, roles, permissions and account-related settings through controlled interfaces.",
  },
  {
    title: "Data Management",
    text: "Create searchable, filterable and structured interfaces for managing operational records and information.",
  },
  {
    title: "Reports & Analytics",
    text: "Present relevant business information through metrics, charts, tables and reporting dashboards.",
  },
  {
    title: "Workflow Automation",
    text: "Digitize repetitive processes and connect related actions through structured application workflows.",
  },
];

const dashboardFeatures = [
  "Responsive dashboard layouts",
  "Interactive data tables",
  "Search and filtering",
  "Charts and performance metrics",
  "User authentication",
  "Role-based permissions",
  "CRUD operations",
  "Form validation",
  "REST API integration",
  "Database integration",
  "Notifications and status workflows",
  "Business reporting",
];

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Laravel",
  "PHP",
  "Python",
  "Django",
  "FastAPI",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "JWT Authentication",
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    text: "Map the business process, users, records, permissions, reporting requirements and operational goals.",
  },
  {
    number: "02",
    title: "Architect",
    text: "Plan the application's pages, data structure, user roles, APIs, workflows and dashboard architecture.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Build the frontend interfaces, backend services, database functionality and business logic.",
  },
  {
    number: "04",
    title: "Integrate",
    text: "Connect APIs, authentication, third-party services and other systems required by the application.",
  },
  {
    number: "05",
    title: "Test",
    text: "Review permissions, forms, workflows, responsive behavior, data handling and key business operations.",
  },
  {
    number: "06",
    title: "Deploy",
    text: "Deploy the completed system and continue improvements based on real operational requirements.",
  },
];

const faqs = [
  {
    question: "What is CRM development?",
    answer:
      "CRM development involves creating software that helps businesses manage customer information, leads, sales processes, interactions and related business workflows.",
  },
  {
    question: "Do you provide CRM development services in Lahore?",
    answer:
      "Yes. GmCodes9 provides custom CRM development for businesses in Lahore and Pakistan, as well as remote CRM and business application projects for international clients.",
  },
  {
    question: "Can you build a custom admin dashboard?",
    answer:
      "Yes. Custom admin dashboards can be built around specific business data, users, permissions, workflows, reports and management requirements.",
  },
  {
    question: "Can dashboards have different user roles?",
    answer:
      "Yes. Role-based access control can be implemented so administrators, managers, staff members and other users can receive different permissions where required.",
  },
  {
    question: "Can you integrate APIs into CRM systems?",
    answer:
      "Yes. CRM and dashboard applications can integrate REST APIs and third-party services to exchange data and support broader business workflows.",
  },
  {
    question: "Can you build dashboards with React or Next.js?",
    answer:
      "Yes. React.js and Next.js are suitable for modern responsive dashboard interfaces, while backend technologies and databases can be selected according to the application's requirements.",
  },
  {
    question: "Can CRM systems connect with databases?",
    answer:
      "Yes. Custom CRM applications can use databases such as MongoDB or MySQL depending on the data model, application architecture and project requirements.",
  },
  {
    question: "Can a CRM include analytics and reporting?",
    answer:
      "Yes. CRM systems can include business metrics, charts, tables, filters and reporting views based on the data and decisions the business needs to monitor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "CRM & Dashboard Development Services",
      serviceType: "CRM, Admin Panel and Dashboard Development",
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
        "CRM Development",
        "Dashboard Development",
        "Admin Panel Development",
        "Business Software Development",
        "Management System Development",
        "Web Application Development",
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
          name: "CRM & Dashboard Development",
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
        alt: "GmCodes9 — CRM, Admin Panel & Dashboard Development Services",
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

export default function CrmDashboardDevelopmentPage() {
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
                <LayoutDashboard className="h-4 w-4" />
                CRM • Admin Panels • Business Dashboards
              </div>

              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Custom CRM &{" "}
                <span className="text-emerald-400">
                  Dashboard Development
                </span>{" "}
                for Modern Businesses
              </h1>

              <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                Build custom CRM systems, admin panels and business dashboards
                that organize customer data, workflows, permissions,
                reporting and day-to-day operations in one modern web
                application.
              </p>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                GmCodes9 provides CRM and dashboard development services in
                Lahore, Pakistan and worldwide using React.js, Next.js, Node.js,
                Laravel, Python, databases, REST APIs and modern authentication
                systems.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
                >
                  Discuss Your System
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
                Business Applications
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Turn scattered business information into a usable system.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">
                Businesses often manage customers, leads, orders, staff,
                records and reports across multiple tools. A custom CRM or
                dashboard can bring the workflows that matter into a single
                application.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                The goal is not to build a dashboard simply because dashboards
                look impressive. It should make information easier to manage,
                decisions easier to understand and daily operations easier to
                execute.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Customers", "Profiles & records"],
                  ["Leads", "Sales workflows"],
                  ["Users", "Roles & permissions"],
                  ["Data", "Structured management"],
                  ["Reports", "Metrics & analytics"],
                  ["Workflows", "Business processes"],
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
                CRM & Dashboard Capabilities
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Build around your actual business workflow
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                Custom systems can combine customer management, operational
                data, permissions, reporting and APIs into one application
                designed for the organization's requirements.
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

        {/* SYSTEM AREAS */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                System Architecture
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Connect the areas of your business that need to work together.
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                A CRM or business dashboard becomes useful when its different
                parts reflect the way information actually moves through the
                organization.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {systemAreas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
                >
                  <CheckCircle2 className="h-6 w-6 text-emerald-300" />

                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ACCESS CONTROL */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                  Authentication & Permissions
                </p>

                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Give users access to what they actually need.
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Business applications often have multiple types of users.
                  Authentication and role-based permissions can help separate
                  administrative functions from staff, management or other
                  application roles.
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm text-zinc-300">
                  <ShieldCheck className="h-5 w-5 text-emerald-300" />
                  Authentication and role-based access can be designed around
                  the application's requirements.
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-blue-500/[0.06] p-7 backdrop-blur-xl">
                <div className="space-y-4">
                  {[
                    "Administrator",
                    "Manager",
                    "Staff Member",
                    "Standard User",
                  ].map((role, index) => (
                    <div
                      key={role}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <KeyRound className="h-5 w-5 text-emerald-300" />
                        <span className="text-sm text-zinc-300">{role}</span>
                      </div>

                      <span className="text-xs text-zinc-500">
                        Role {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DASHBOARD FEATURES */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
              Dashboard Features
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Practical interfaces for everyday operations
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400">
              Build dashboards that make business information easier to find,
              filter, understand and manage.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                <span className="text-sm text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ANALYTICS */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <Gauge className="h-8 w-8 text-emerald-300" />

                <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                  Make business data easier to understand.
                </h2>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  Dashboards can bring important operational metrics into
                  focused views instead of forcing teams to manually assemble
                  information from disconnected sources.
                </p>

                <p className="mt-5 text-base leading-8 text-zinc-400">
                  The right metrics depend on the business. A sales dashboard,
                  CRM dashboard and internal operations dashboard should not
                  pretend to be the same thing.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["KPIs", "Key performance metrics"],
                  ["Charts", "Visual data summaries"],
                  ["Tables", "Detailed records"],
                  ["Filters", "Focused data views"],
                  ["Reports", "Business information"],
                  ["Status", "Workflow visibility"],
                ].map(([label, text]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
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

        {/* API + DATABASE */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <Database className="h-7 w-7 text-emerald-300" />

              <h2 className="mt-5 text-2xl font-semibold">
                Database-Driven Applications
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                CRM and dashboard applications depend on reliable data
                structures. MongoDB and MySQL can be used according to the
                application's requirements, data relationships and backend
                architecture.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
              <Settings2 className="h-7 w-7 text-emerald-300" />

              <h2 className="mt-5 text-2xl font-semibold">
                APIs & Third-Party Integrations
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                REST APIs and third-party services can connect the dashboard to
                other applications, payment systems, business tools or external
                data sources where required.
              </p>
            </article>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Technology Stack
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Modern technologies for business applications
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400">
                The technology stack can be selected according to the
                application's functionality, data requirements, integrations
                and long-term architecture.
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
          </div>
        </section>

        {/* PROCESS */}
        <section>
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                Development Process
              </p>

              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                From business workflow to working system
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-400">
                The development process starts with how the business operates,
                then translates those requirements into interfaces, data,
                permissions and workflows.
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
        <section className="border-y border-white/10 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <Globe2 className="h-7 w-7 text-emerald-300" />

                <h2 className="mt-5 text-2xl font-semibold">
                  CRM & Dashboard Development in Lahore
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Build custom business applications for Lahore and
                  Pakistan-based organizations that need better customer
                  management, reporting, administration or internal workflows.
                </p>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
                <Globe2 className="h-7 w-7 text-emerald-300" />

                <h2 className="mt-5 text-2xl font-semibold">
                  International Business Applications
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Remote CRM, admin dashboard and internal business application
                  development is available for international clients across
                  markets including the United States, United Kingdom, Canada,
                  Australia, UAE and Saudi Arabia.
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
              CRM & Dashboard Development Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Common questions about custom CRM software, admin panels,
              dashboards, authentication, APIs and business systems.
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
                Connect your business system with the wider stack
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                ["Full Stack Development", "/services/full-stack-development"],
                ["Custom Web Applications", "/services/custom-web-app-development"],
                ["Web Development", "/services/web-development"],
                ["E-Commerce Development", "/services/ecommerce-development"],
                ["AI Development", "/services/ai-development"],
                ["SEO", "/services/seo"],
                ["Digital Marketing", "/services/digital-marketing"],
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
              <LayoutDashboard className="h-6 w-6" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-5xl">
              Build a business system that works the way you do.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Create a custom CRM, admin panel or business dashboard around
              your users, data, workflows and operational requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-black transition hover:bg-emerald-300"
              >
                Start a CRM Project
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
