import type { CSSProperties, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight, BadgeCheck, BarChart3, Blocks, Bot,
  BriefcaseBusiness, Check, CheckCircle2, ChevronDown,
  Code2, Database, Gauge, Globe2, GraduationCap,
  HeartPulse, Layers3, LayoutDashboard, Megaphone,
  MessageCircle, MonitorSmartphone, Plug, Rocket,
  Search, ShieldCheck, ShoppingCart, Sparkles,
  Target, Users, Workflow, Wrench, Zap,
} from "lucide-react";

const SITE_URL = "https://gmcodes9.com";
const PAGE_URL = `${SITE_URL}/services`;

const WHATSAPP_URL =
  "https://wa.me/923045478602?text=Hi%20Ghulam%20Mustafa%2C%20I%27m%20interested%20in%20your%20services.%20I%27d%20like%20to%20discuss%20my%20project.";

type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

const services: Service[] = [
  {
    id: "full-stack-web-development",
    title: "Full Stack Web Development",
    description:
      "Modern, responsive and production-ready websites and web applications built around real business requirements, from focused projects to advanced platforms.",
    icon: Code2,
    features: [
      "Next.js & React", "Angular", "Node.js & Express", "TypeScript",
      "Laravel & PHP", "Django", "Flask", "FastAPI", "REST APIs",
      "MySQL & MongoDB", "Authentication", "Role-Based Access",
    ],
  },
  {
    id: "seo-geo-entity",
    title: "SEO, GEO, AEO & Entity Optimization",
    description:
      "Advanced technical and content foundations designed to help search engines and AI systems understand your website, brand, services and entity relationships more clearly.",
    icon: Search,
    features: [
      "Technical SEO", "On-Page SEO", "GEO Optimization", "AEO Optimization",
      "Entity Optimization", "JSON-LD", "Open Graph", "Canonical URLs",
      "Robots.txt", "XML Sitemap", "Search Console", "Bing Webmaster",
      "Internal Linking",
    ],
  },
  {
    id: "ai-ml-integrations",
    title: "AI & ML Integrations",
    description:
      "Practical AI and machine-learning capabilities integrated into websites, applications, dashboards and business workflows.",
    icon: Bot,
    features: [
      "AI Chatbots", "AI Assistants", "NLP", "Computer Vision",
      "Recommendation Systems", "AI Search", "AI API Integration",
      "Groq Integration", "Automation", "AI Dashboards",
      "Smart Features", "Custom AI Workflows",
    ],
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    description:
      "Complete online stores with customer accounts, product management, payments, orders, administration and scalable business workflows.",
    icon: ShoppingCart,
    features: [
      "Product Management", "Categories", "Cart", "Checkout",
      "Customer Accounts", "Order Management", "Payment Gateways",
      "Stripe", "Inventory", "Admin Panel", "Analytics",
      "Responsive Storefront",
    ],
  },
  {
    id: "crm-admin-dashboard",
    title: "CRM, Admin Panels & Dashboards",
    description:
      "Custom business platforms for managing customers, employees, operations, analytics, reporting and day-to-day workflows.",
    icon: LayoutDashboard,
    features: [
      "CRM Systems", "Admin Panels", "Business Dashboards",
      "Role-Based Portals", "Analytics", "Reports", "Customer Management",
      "Employee Management", "CRUD Systems", "Notifications",
      "Workflow Automation", "Data Management",
    ],
  },
  {
    id: "management-systems",
    title: "Custom Management Systems",
    description:
      "Purpose-built management systems designed around the real operational requirements of organizations and institutions.",
    icon: Database,
    features: [
      "Hospital Systems", "School Systems", "College Systems",
      "Inventory Systems", "Employee Systems", "Customer Systems",
      "Attendance", "Records Management", "Billing Workflows",
      "Reporting", "Role Management", "Admin Control",
    ],
  },
  {
    id: "cms-development",
    title: "CMS & Content Platforms",
    description:
      "Flexible content-management systems that allow businesses to manage pages, content, media and publishing without touching application code.",
    icon: Layers3,
    features: [
      "Custom CMS", "Content Management", "Blog Systems", "Dynamic Pages",
      "Media Management", "Role-Based Publishing", "Admin Controls",
      "API-Driven Content", "SEO / GEO / AEO Content Fields",
      "Categories", "Search", "Content Workflows",
    ],
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Professional websites designed to establish credibility, present services clearly and turn visitors into real enquiries.",
    icon: BriefcaseBusiness,
    features: [
      "Company Websites", "Corporate Websites", "Service Websites",
      "Startup Websites", "Local Business Websites", "Contact Forms",
      "Lead Generation", "WhatsApp CTA", "SEO / GEO / AEO Structure",
      "Analytics", "Responsive Design", "Deployment",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "Focused, fast and conversion-oriented pages for products, services, advertising campaigns and lead generation.",
    icon: Rocket,
    features: [
      "Service Landing Pages", "Product Pages", "Campaign Pages",
      "Lead Forms", "CTA Strategy", "Responsive UI", "Analytics",
      "Ad Alignment", "Fast Loading", "SEO / GEO / AEO Setup",
      "WhatsApp CTA", "Conversion Focus",
    ],
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description:
      "Modern personal and professional websites for developers, freelancers, creators, consultants and other professionals.",
    icon: Users,
    features: [
      "Personal Branding", "Project Showcase", "Skills Sections",
      "Experience", "Education", "Client Reviews", "Social Profiles",
      "Contact CTA", "SEO / GEO / AEO & Entity Setup", "Open Graph",
      "Responsive UI", "Live Deployment",
    ],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "Consistent social-media management focused on professional brand presentation, content planning and organic digital growth.",
    icon: Megaphone,
    features: [
      "Profile Optimization", "Content Strategy", "Content Planning",
      "Post Captions", "Content Calendar", "Brand Consistency",
      "Organic Strategy", "Platform Planning", "Post Optimization",
      "Performance Review", "CTA Strategy", "Audience Focus",
    ],
  },
  {
    id: "meta-ads",
    title: "Meta & Social Media Ads",
    description:
      "Facebook and Instagram advertising campaigns structured around awareness, enquiries, leads, traffic and measurable business objectives.",
    icon: Target,
    features: [
      "Meta Ads Setup", "Facebook Ads", "Instagram Ads",
      "Audience Research", "Lead Campaigns", "Traffic Campaigns",
      "WhatsApp Campaigns", "Creative Strategy", "Ad Copy",
      "Campaign Testing", "Optimization", "Reporting",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description:
      "Search advertising focused on connecting businesses with people actively looking for relevant products and services.",
    icon: BarChart3,
    features: [
      "Campaign Setup", "Keyword Research", "Search Campaigns",
      "Negative Keywords", "Ad Groups", "Ad Copy", "Landing Alignment",
      "Conversion Strategy", "Audience Signals", "Optimization",
      "Monitoring", "Reporting",
    ],
  },
  {
    id: "third-party-integrations",
    title: "Third-Party Integrations",
    description:
      "Connect websites and applications with external APIs, authentication providers, payments, AI platforms, communication tools and business services.",
    icon: Plug,
    features: [
      "REST APIs", "Stripe", "Payment Gateways", "Google Sign-In",
      "Social Login", "AI APIs", "Email Services", "Analytics",
      "WhatsApp", "Webhooks", "External APIs", "Custom Integrations",
    ],
  },
  {
    id: "deployment-maintenance",
    title: "Deployment, Maintenance & Updates",
    description:
      "Production deployment, updates and ongoing technical improvements so completed projects continue working beyond launch day.",
    icon: Wrench,
    features: [
      "Vercel Deployment", "Render Deployment", "Domain Setup",
      "Environment Variables", "Production Builds", "Bug Fixes",
      "Feature Updates", "Content Updates", "Performance Checks",
      "SEO / GEO / AEO Updates", "API Maintenance", "Technical Support",
    ],
  },
];

const capabilities = [
  {
    title: "Responsive by Default",
    description:
      "Interfaces designed to work across mobile phones, tablets, laptops and desktop screens.",
    icon: MonitorSmartphone,
  },
  {
    title: "Performance Focused",
    description:
      "Attention to image handling, loading performance, application structure and production optimization.",
    icon: Gauge,
  },
  {
    title: "SEO, GEO & AEO Ready",
    description:
      "Search, clear answers, structured data, entity signals, metadata and AI-discovery foundations can be integrated from the beginning.",
    icon: Globe2,
  },
  {
    title: "Secure Foundations",
    description:
      "Authentication, authorization, validation and sensible backend architecture considered during development.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable Architecture",
    description:
      "Applications structured so features and integrations can evolve as business requirements grow.",
    icon: Blocks,
  },
  {
    title: "Business-Focused",
    description:
      "Features are designed around actual business requirements rather than adding technology merely because it looks impressive.",
    icon: Workflow,
  },
];

const industries = [
  { title: "Business & Startups", icon: BriefcaseBusiness },
  { title: "E-Commerce", icon: ShoppingCart },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Schools & Colleges", icon: GraduationCap },
  { title: "Internal Operations", icon: LayoutDashboard },
  { title: "AI Products", icon: Bot },
];

const technologies = [
  "Next.js", "React", "Angular", "Node.js", "Express.js", "TypeScript",
  "JavaScript", "Laravel", "PHP", "Python", "Django", "Flask", "FastAPI",
  "MongoDB", "MySQL", "REST APIs", "Tailwind CSS", "Bootstrap", "Stripe",
  "AI/ML", "TensorFlow", "PyTorch", "NLP", "Vercel", "Render",
];

const overview = [
  { label: "Development", value: "Web & Applications", icon: Code2 },
  { label: "Visibility", value: "SEO / GEO / AEO / Entity", icon: Search },
  { label: "Intelligence", value: "AI / ML Integration", icon: Bot },
  { label: "Growth", value: "SMM & Advertising", icon: Target },
];

const searchFeatures = [
  "Technical SEO", "On-Page SEO", "GEO Optimization", "AEO Optimization",
  "Person / Brand Entity", "JSON-LD Structured Data", "sameAs Connections",
  "Open Graph", "Canonical URLs", "Sitemap.xml", "Robots.txt",
  "Search Console", "Bing Webmaster", "Internal Linking",
  "Image Optimization", "Performance Checks", "Accessibility",
];

const process = [
  {
    title: "Understand",
    description:
      "Define the goal, audience, requirements, functionality and project scope.",
  },
  {
    title: "Plan",
    description:
      "Select the technology, architecture, integrations and delivery approach.",
  },
  {
    title: "Build",
    description:
      "Develop, test and refine the solution across desktop and mobile experiences.",
  },
  {
    title: "Launch & Improve",
    description:
      "Deploy to production, verify the live system and continue improvements where required.",
  },
];

const levels = [
  {
    title: "Focused",
    description:
      "Landing pages, portfolios and smaller business websites for straightforward requirements.",
    icon: Zap,
  },
  {
    title: "Professional",
    description:
      "Custom business websites, e-commerce stores, dashboards and integrations with broader functionality.",
    icon: Layers3,
  },
  {
    title: "Advanced",
    description:
      "Full-stack platforms, complex management systems, AI integrations, advanced SEO/GEO/AEO and scalable digital products.",
    icon: Sparkles,
  },
];

const faqs = [
  {
    question: "Who provides GmCodes9 services?",
    answer:
      "GmCodes9 is the professional digital brand of Ghulam Mustafa, a Full Stack Engineer based in Lahore, Pakistan, with 4+ years of experience. His work covers web applications, APIs, databases, AI integrations and digital services.",
  },
  {
    question: "What services does GmCodes9 offer?",
    answer:
      "GmCodes9 offers full-stack development, business websites, landing pages, portfolios, e-commerce, CRM and CMS systems, custom management platforms, AI/ML integrations, SEO/GEO/AEO and entity optimization, social media management, Meta Ads, Google Ads, integrations and maintenance.",
  },
  {
    question: "Can international clients work with GmCodes9?",
    answer:
      "Yes. GmCodes9 works with businesses in Pakistan and international clients remotely. Project requirements, communication, deliverables and timelines are agreed before development begins.",
  },
  {
    question: "How much does a website or application cost?",
    answer:
      "Pricing depends on the number of pages, features, integrations, design requirements and ongoing support. Share your requirements on WhatsApp to request a project-specific quote.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Delivery time depends on the agreed scope, content readiness, integrations and review cycles. A project timeline is discussed after the requirements are reviewed.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Responsive layouts are designed for phones, tablets and desktops. Navigation, forms, buttons and content layouts are checked at relevant screen sizes. Native app development and installable or offline PWA features require a separate agreed scope.",
  },
  {
    question: "What is the difference between SEO, AEO and GEO?",
    answer:
      "SEO improves how a website can be crawled, understood and discovered in search. AEO focuses on clear answers to specific questions. GEO focuses on making content useful and understandable for generative search and AI-assisted discovery. These approaches overlap and do not guarantee rankings or citations.",
  },
  {
    question:
      "Are SEO, GEO, AEO, AI features and advertising included in every website?",
    answer:
      "The included features depend on the agreed proposal. Advanced SEO/GEO/AEO, AI integrations, advertising and ongoing management can be added where needed. Confirm the deliverables and recurring costs before starting.",
  },
  {
    question: "Can you integrate payments, login systems and AI assistants?",
    answer:
      "Yes. Depending on the project, integrations can include Stripe, authentication, Google Sign-In, role-based access, external APIs, webhooks and AI assistants. Provider availability, account requirements and usage fees are reviewed during planning.",
  },
  {
    question: "Can you maintain an existing website?",
    answer:
      "Yes. Maintenance can cover bug fixes, content changes, feature updates, API maintenance, performance checks and deployment support. The existing codebase and required access are reviewed before confirming the scope.",
  },
  {
    question: "Where can I see previous work?",
    answer:
      "The portfolio includes full-stack and AI projects. Live client websites include Union Add, an advertising and digital marketing platform, and Apki Manzil, a real estate website for Arabian City, Lahore.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Send your business goal, required pages or features, reference websites, preferred timeline and available budget through WhatsApp. Ghulam Mustafa can then review the requirements and discuss an appropriate scope.",
  },
];

const tones = [
  ["#7c3aed", "#db2777", "124,58,237"],
  ["#0284c7", "#0d9488", "2,132,199"],
  ["#db2777", "#ea580c", "219,39,119"],
  ["#059669", "#0284c7", "5,150,105"],
];

function tone(index = 0): CSSProperties {
  const [a, b, rgb] = tones[index % tones.length];

  return {
    "--a": a,
    "--b": b,
    "--rgb": rgb,
    "--delay": `${(index % 4) * 65}ms`,
  } as CSSProperties;
}

const serviceSchema = services.map((service) => ({
  "@type": "Service",
  "@id": `${SITE_URL}/#service-${service.id}`,
  name: service.title,
  serviceType: service.title,
  description: service.description,
  url: `${PAGE_URL}#${service.id}`,
  provider: { "@id": `${SITE_URL}/#person` },
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Place", name: "Worldwide" },
  ],
}));

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Ghulam Mustafa",
      alternateName: "GmCodes9",
      url: SITE_URL,
      jobTitle: "Full Stack Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
    },
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "GmCodes9 Digital Services",
      description:
        "Web development, AI integrations, e-commerce, business systems, SEO/GEO/AEO, digital marketing and maintenance services by Ghulam Mustafa in Lahore, Pakistan, for local and international clients.",
      inLanguage: "en",
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${PAGE_URL}#services` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#services`,
      name: "GmCodes9 Services",
      numberOfItems: services.length,
      itemListElement: serviceSchema.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: { "@id": service["@id"] },
      })),
    },
    ...serviceSchema,
  ],
};

function IconBox({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="gs-icon">
      <Icon size={22} aria-hidden="true" />
    </span>
  );
}

function Heading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="gs-heading">
      <p className="gs-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      {children && <p className="gs-copy">{children}</p>}
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="gm-services"
      style={tone()}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="gs-container">
        <div className="gs-hero">
          <div className="gs-hero-grid" aria-hidden="true" />
          <div className="gs-orb gs-orb-one" aria-hidden="true" />
          <div className="gs-orb gs-orb-two" aria-hidden="true" />
          <div className="gs-orb gs-orb-three" aria-hidden="true" />

          <div className="gs-hero-content">
            <div className="gs-label">
              <Sparkles size={15} aria-hidden="true" />
              GmCodes9 Digital Services
            </div>

            <h2 id="services-heading">
              Build. Rank.<br className="gs-mobile-break" /> Promote.{" "}
              <span className="gs-gradient">Grow.</span>
            </h2>

            <p className="gs-hero-description">
              GmCodes9 provides complete digital solutions ranging from modern
              business websites and full-stack applications to AI integrations,
              e-commerce, CRM systems, SEO/GEO/AEO, social media management and
              paid advertising for businesses in Pakistan and international clients.
            </p>

            <div className="gs-actions">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gs-button gs-button-primary"
                aria-label="Discuss your project with GmCodes9 on WhatsApp"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Discuss Your Project
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#all-services" className="gs-button">
                Explore Services
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>

            <ul className="gs-highlights">
              {[
                "Pakistan + Worldwide",
                "Mobile Responsive",
                "SEO/GEO/AEO Ready",
                "Modern UI/UX",
                "Third-Party Integrations",
                "Live Deployment",
              ].map((item) => (
                <li key={item}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gs-grid gs-grid-four gs-overview">
          {overview.map((item, index) => (
            <div
              key={item.label}
              className="gs-card gs-overview-card"
              style={tone(index)}
            >
              <IconBox icon={item.icon} />
              <p className="gs-eyebrow">{item.label}</p>
              <p className="gs-overview-value">{item.value}</p>
            </div>
          ))}
        </div>

        <aside
          className="gs-provider gs-card"
          aria-label="About the service provider"
        >
          <div>
            <p className="gs-eyebrow">The person behind GmCodes9</p>
            <h3>Ghulam Mustafa · Full Stack Engineer</h3>
            <p className="gs-copy">
              Based in Lahore, Pakistan, with 4+ years of experience.
              Providing full-stack web development, AI integrations and digital
              services for local businesses and international clients.
            </p>
          </div>
          <a href="/#experience" className="gs-button">
            View Experience
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </aside>

        <nav className="gs-jump-links" aria-label="Services page sections">
          {[
            ["#all-services", "All services"],
            ["#search-foundations", "Search & AI discovery"],
            ["#service-process", "Project process"],
            ["#service-faq", "Common questions"],
            ["#start-project", "Start a project"],
          ].map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div id="all-services" className="gs-section">
          <Heading
            eyebrow="Complete Services"
            title="From simple websites to advanced digital platforms."
          >
            Start with a focused service or combine development, search,
            automation, AI and marketing into a complete digital solution.
          </Heading>

          <div className="gs-grid gs-grid-three">
            {services.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="gs-card gs-service-card"
                style={tone(index)}
                aria-labelledby={`${service.id}-title`}
              >
                <IconBox icon={service.icon} />
                <h4 id={`${service.id}-title`}>{service.title}</h4>
                <p className="gs-copy">{service.description}</p>

                <ul className="gs-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/923045478602?text=${encodeURIComponent(
                    `Hi Ghulam Mustafa, I would like to discuss ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gs-card-link"
                  aria-label={`Discuss ${service.title} on WhatsApp`}
                >
                  Discuss this service
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>

        <div
          id="search-foundations"
          className="gs-section gs-panel"
          style={tone(1)}
        >
          <div className="gs-split">
            <div>
              <p className="gs-label">
                <Search size={15} aria-hidden="true" />
                SEO / GEO / AEO / Entity
              </p>
              <h3 className="gs-large-title">
                Built to be understood by people, search engines and AI systems.
              </h3>
              <p className="gs-copy">
                Advanced website projects can include SEO/GEO/AEO foundations:
                technical SEO, clear answers, structured data, entity relationships,
                social previews, crawlability, performance, accessibility and
                search-platform integration from the beginning rather than treating
                search visibility as an afterthought.
              </p>

              <dl className="gs-definitions">
                <div>
                  <dt>SEO</dt>
                  <dd>
                    Search Engine Optimization: improving crawlability,
                    relevance and the website experience.
                  </dd>
                </div>
                <div>
                  <dt>AEO</dt>
                  <dd>
                    Answer Engine Optimization: providing clear, accurate
                    answers to specific user questions.
                  </dd>
                </div>
                <div>
                  <dt>GEO</dt>
                  <dd>
                    Generative Engine Optimization: making content useful and
                    understandable for AI-assisted discovery.
                  </dd>
                </div>
                <div>
                  <dt>Entity</dt>
                  <dd>
                    Connecting consistent information about the person,
                    brand, services and official profiles.
                  </dd>
                </div>
              </dl>

              <div className="gs-tags">
                {[
                  "Search", "AI Discovery", "Entity",
                  "Social Sharing", "Performance",
                ].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <ul className="gs-search-features">
              {searchFeatures.map((item) => (
                <li key={item}>
                  <BadgeCheck size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gs-section">
          <Heading
            eyebrow="Built properly"
            title="Strong digital foundations behind the visual design."
          />
          <div className="gs-grid gs-grid-three">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="gs-card gs-small-card"
                style={tone(index)}
              >
                <IconBox icon={item.icon} />
                <h4>{item.title}</h4>
                <p className="gs-copy">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="gs-section gs-split">
          <Heading
            eyebrow="Different businesses. Different needs."
            title="Solutions built around real workflows."
          >
            The platform should adapt to the organization instead of forcing
            every business into the same generic template.
          </Heading>

          <div className="gs-industries">
            {industries.map((item, index) => (
              <div
                key={item.title}
                className="gs-card gs-industry"
                style={tone(index)}
              >
                <IconBox icon={item.icon} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gs-section gs-panel gs-split" style={tone(0)}>
          <Heading
            eyebrow="Technology"
            title="Modern technologies selected according to the project."
          >
            Frontend, backend, databases, APIs, AI, payments and deployment
            can be combined according to the actual technical requirements.
          </Heading>
          <div className="gs-tags gs-tech-tags">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

        <div id="service-process" className="gs-section">
          <Heading
            eyebrow="Project Process"
            title="Clear from idea to production."
          />
          <ol className="gs-grid gs-grid-four gs-process">
            {process.map((step, index) => (
              <li
                key={step.title}
                className="gs-card gs-small-card"
                style={tone(index)}
              >
                <span className="gs-step-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h4>{step.title}</h4>
                <p className="gs-copy">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="gs-section gs-grid gs-grid-three">
          {levels.map((level, index) => (
            <article
              key={level.title}
              className="gs-card gs-small-card"
              style={tone(index)}
            >
              <IconBox icon={level.icon} />
              <h4>{level.title}</h4>
              <p className="gs-copy">{level.description}</p>
            </article>
          ))}
        </div>

        <div id="service-faq" className="gs-section">
          <Heading
            eyebrow="Questions, answered"
            title="Clear answers before you start."
          >
            Understand the services, project scope, communication and next steps.
          </Heading>

          <div className="gs-faq-grid">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="gs-faq"
                open={index === 0}
              >
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown size={19} aria-hidden="true" />
                </summary>
                <p className="gs-copy">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="gs-related">
            <a href="/#projects">
              Explore the portfolio
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://union-add.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Union Add
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="https://apkimanzil.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Apki Manzil
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div id="start-project" className="gs-section gs-final">
          <div className="gs-final-glow" aria-hidden="true" />
          <div className="gs-final-content">
            <IconBox icon={MessageCircle} />
            <p className="gs-eyebrow">Start Your Project</p>
            <h3>
              Need a website, application, AI solution or digital growth service?
            </h3>
            <p>
              Share your requirements directly for full-stack development,
              e-commerce, CRM/CMS systems, AI/ML integrations, SEO/GEO/AEO,
              social media management, Meta Ads, Google Ads or custom digital solutions.
            </p>
            <div className="gs-actions">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message GmCodes9 on WhatsApp"
                className="gs-button gs-button-white"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Message on WhatsApp
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="/#projects" className="gs-button gs-button-dark">
                View Projects
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .gm-services {
          --gs-bg: #f8f9ff;
          --gs-surface: #ffffff;
          --gs-glass: rgba(255,255,255,.88);
          --gs-text: #172039;
          --gs-muted: #56627a;
          --gs-border: rgba(100,116,160,.18);
          position: relative;
          isolation: isolate;
          width: 100%;
          min-width: 0;
          overflow-x: clip;
          padding: 24px 0 64px;
          padding-bottom: max(64px, env(safe-area-inset-bottom, 0px));
          background:
            radial-gradient(ellipse at 0% 8%, rgba(139,92,246,.09), transparent 26%),
            radial-gradient(ellipse at 100% 35%, rgba(6,182,212,.08), transparent 28%),
            radial-gradient(ellipse at 0% 68%, rgba(236,72,153,.06), transparent 25%),
            var(--gs-bg);
          color: var(--gs-text);
          -webkit-tap-highlight-color: transparent;
        }

        .dark .gm-services {
          --gs-bg: #080d1b;
          --gs-surface: #11192b;
          --gs-glass: rgba(17,25,43,.9);
          --gs-text: #f0f4ff;
          --gs-muted: #b0bdd4;
          --gs-border: rgba(150,166,205,.19);
        }

        .gm-services *,
        .gm-services *::before,
        .gm-services *::after { box-sizing: border-box; }

        .gm-services h2,
        .gm-services h3,
        .gm-services h4,
        .gm-services p { margin: 0; }

        .gm-services ul,
        .gm-services ol { list-style: none; padding: 0; }

        .gm-services a {
          text-decoration: none;
          touch-action: manipulation;
        }

        .gm-services svg { flex-shrink: 0; }
        .gm-services [id] { scroll-margin-top: 110px; }

        .gm-services .gs-container {
          width: min(100%, 1248px);
          margin-inline: auto;
          padding-left: max(clamp(16px, 4vw, 32px), env(safe-area-inset-left, 0px));
          padding-right: max(clamp(16px, 4vw, 32px), env(safe-area-inset-right, 0px));
        }

        .gm-services .gs-section {
          margin-top: clamp(48px, 7vw, 88px);
          min-width: 0;
        }

        .gm-services .gs-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          text-align: center;
          padding: clamp(40px, 7vw, 88px) 0 46px;
        }

        .gm-services .gs-hero-content { position: relative; z-index: 1; }

        .gm-services .gs-hero-grid {
          position: absolute;
          inset: 0;
          opacity: .4;
          pointer-events: none;
          background-image:
            linear-gradient(var(--gs-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--gs-border) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at center, black, transparent 72%);
          -webkit-mask-image: radial-gradient(ellipse at center, black, transparent 72%);
        }

        .gm-services .gs-orb {
          position: absolute;
          width: clamp(160px, 28vw, 340px);
          aspect-ratio: 1;
          border-radius: 50%;
          filter: blur(56px);
          opacity: .23;
          pointer-events: none;
          animation: gs-float 14s ease-in-out infinite alternate;
        }

        .gm-services .gs-orb-one { background: #a78bfa; top: 0; left: 0; }
        .gm-services .gs-orb-two {
          background: #22d3ee;
          bottom: 20px;
          right: 0;
          animation-delay: -6s;
        }
        .gm-services .gs-orb-three {
          background: #f472b6;
          width: 180px;
          top: 35%;
          left: 45%;
          opacity: .13;
          animation-delay: -10s;
        }

        .gm-services .gs-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          max-width: 100%;
          padding: 9px 14px;
          border: 1px solid rgba(var(--rgb), .22);
          border-radius: 999px;
          background: rgba(var(--rgb), .07);
          color: var(--gs-text);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .1em;
          line-height: 1.6;
          text-transform: uppercase;
          overflow-wrap: anywhere;
        }

        .gm-services .gs-label svg { color: var(--a); }
        .dark .gm-services .gs-label svg { color: #c4b5fd; }

        .gm-services .gs-hero h2 {
          margin-top: 24px;
          font-size: clamp(2.35rem, 6.8vw, 5.1rem);
          font-weight: 800;
          letter-spacing: -.06em;
          line-height: 1.1;
          overflow-wrap: anywhere;
          text-wrap: balance;
        }

        .gm-services .gs-mobile-break { display: none; }

        .gm-services .gs-gradient {
          color: #7c3aed;
          background: linear-gradient(110deg, #7c3aed, #db2777, #0284c7, #7c3aed);
          background-size: 240% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gs-gradient-flow 10s ease-in-out infinite alternate;
        }

        .dark .gm-services .gs-gradient {
          background-image:
            linear-gradient(110deg, #c4b5fd, #f472b6, #67e8f9, #c4b5fd);
        }

        .gm-services .gs-hero-description {
          max-width: 860px;
          margin: 24px auto 0;
          color: var(--gs-muted);
          font-size: clamp(14px, 1.6vw, 18px);
          line-height: 1.9;
          text-wrap: pretty;
        }

        .gm-services .gs-hero-content > * {
          animation: gs-enter .7s ease-out both;
        }

        .gm-services .gs-hero-content > :nth-child(2) { animation-delay: .06s; }
        .gm-services .gs-hero-content > :nth-child(3) { animation-delay: .12s; }
        .gm-services .gs-hero-content > :nth-child(4) { animation-delay: .18s; }
        .gm-services .gs-hero-content > :nth-child(5) { animation-delay: .24s; }

        .gm-services .gs-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
        }

        .gm-services .gs-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-width: 0;
          max-width: 100%;
          min-height: 48px;
          padding: 12px 20px;
          border: 1px solid var(--gs-border);
          border-radius: 15px;
          background: var(--gs-surface);
          color: var(--gs-text);
          font-size: 13px;
          font-weight: 650;
          line-height: 1.5;
          text-align: center;
          overflow-wrap: anywhere;
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }

        .gm-services .gs-button-primary {
          background: linear-gradient(115deg, #6d28d9, #a21caf 65%, #be185d);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 10px 28px rgba(124,58,237,.24);
        }

        .gm-services .gs-button svg,
        .gm-services .gs-card-link svg,
        .gm-services .gs-related svg {
          transition: transform .25s;
        }

        .gm-services .gs-highlights {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px 22px;
          margin: 28px 0 0;
        }

        .gm-services .gs-highlights li {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--gs-muted);
          font-size: 12px;
          line-height: 1.6;
        }

        .gm-services .gs-highlights svg { color: #059669; }
        .dark .gm-services .gs-highlights svg { color: #34d399; }

        .gm-services .gs-grid { display: grid; gap: 20px; min-width: 0; }
        .gm-services .gs-grid-three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .gm-services .gs-grid-four { grid-template-columns: repeat(4, minmax(0, 1fr)); }

        .gm-services .gs-card {
          position: relative;
          isolation: isolate;
          min-width: 0;
          border: 1px solid var(--gs-border);
          border-radius: 23px;
          background:
            radial-gradient(ellipse at 100% 0%, rgba(var(--rgb), .13), transparent 62%),
            linear-gradient(155deg, var(--gs-glass), var(--gs-surface));
          box-shadow: 0 10px 30px rgba(45,35,90,.05);
          transition: transform .28s, border-color .28s, box-shadow .28s;
        }

        .gm-services .gs-service-card::before {
          content: "";
          position: absolute;
          top: -1px;
          left: 24px;
          right: 24px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--a), var(--b), transparent);
          opacity: .65;
          pointer-events: none;
        }

        .gm-services .gs-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 15px;
          background: linear-gradient(135deg, var(--a), var(--b));
          color: #fff;
          box-shadow: 0 7px 20px rgba(var(--rgb), .22);
          transition: transform .3s, box-shadow .3s;
        }

        .gm-services .gs-overview-card { padding: 22px; }

        .gm-services .gs-overview > .gs-card {
          animation: gs-enter .65s ease-out both;
          animation-delay: calc(.2s + var(--delay, 0ms));
        }

        .gm-services .gs-eyebrow {
          color: #7c3aed;
          font-size: 11px;
          font-weight: 750;
          line-height: 1.7;
          letter-spacing: .15em;
          text-transform: uppercase;
          overflow-wrap: anywhere;
        }

        .dark .gm-services .gs-eyebrow { color: #c4b5fd; }
        .gm-services .gs-overview-card .gs-eyebrow {
          margin-top: 18px;
          color: var(--gs-muted);
        }

        .gm-services .gs-overview-value {
          margin-top: 5px;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .gm-services .gs-provider {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 24px;
          padding: clamp(20px, 3vw, 30px);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .gm-services .gs-provider > div { max-width: 760px; min-width: 0; }

        .gm-services .gs-provider h3 {
          margin-top: 7px;
          font-size: 19px;
          font-weight: 700;
          letter-spacing: -.025em;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        .gm-services .gs-provider .gs-button { flex-shrink: 0; }

        .gm-services .gs-jump-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
        }

        .gm-services .gs-jump-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          max-width: 100%;
          padding: 9px 14px;
          border: 1px solid var(--gs-border);
          border-radius: 12px;
          color: var(--gs-muted);
          background: var(--gs-glass);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.6;
          text-align: center;
          overflow-wrap: anywhere;
          transition: background .2s, border-color .2s, color .2s;
        }

        .gm-services .gs-heading {
          max-width: 790px;
          margin-bottom: 30px;
          min-width: 0;
        }

        .gm-services .gs-heading h3,
        .gm-services .gs-large-title {
          margin-top: 12px;
          font-size: clamp(1.6rem, 3.5vw, 2.65rem);
          font-weight: 750;
          line-height: 1.2;
          letter-spacing: -.045em;
          overflow-wrap: anywhere;
          text-wrap: balance;
        }

        .gm-services .gs-copy {
          margin-top: 13px;
          color: var(--gs-muted);
          font-size: 14px;
          line-height: 1.85;
          overflow-wrap: anywhere;
        }

        .gm-services .gs-service-card {
          display: flex;
          flex-direction: column;
          padding: 26px;
        }

        .gm-services .gs-card h4 {
          margin-top: 22px;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -.025em;
          overflow-wrap: anywhere;
          text-wrap: balance;
        }

        .gm-services .gs-features {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin: 22px 0;
        }

        .gm-services .gs-features li {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          min-width: 0;
          color: var(--gs-muted);
          font-size: 12px;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .gm-services .gs-features li span { min-width: 0; }
        .gm-services .gs-features svg { margin-top: 3px; color: var(--a); }
        .dark .gm-services .gs-features svg { color: #a5b4fc; }

        .gm-services .gs-card-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          min-height: 48px;
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px solid var(--gs-border);
          color: var(--gs-text);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.7;
        }

        .gm-services .gs-card-link svg { color: var(--a); }
        .dark .gm-services .gs-card-link svg { color: #c4b5fd; }

        .gm-services .gs-panel {
          padding: clamp(22px, 4vw, 48px);
          border: 1px solid rgba(var(--rgb), .23);
          border-radius: 28px;
          background:
            radial-gradient(ellipse at 0% 0%, rgba(var(--rgb), .13), transparent 65%),
            radial-gradient(ellipse at 100% 100%, rgba(139,92,246,.06), transparent 60%),
            var(--gs-surface);
          box-shadow: 0 16px 48px rgba(var(--rgb), .045);
        }

        .gm-services .gs-split {
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
          gap: 36px;
          align-items: center;
        }

        .gm-services .gs-split > * { min-width: 0; }
        .gm-services .gs-split .gs-heading { margin-bottom: 0; }
        .gm-services .gs-definitions { display: grid; gap: 13px; margin: 23px 0; }

        .gm-services .gs-definitions > div {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 10px;
        }

        .gm-services .gs-definitions dt { font-size: 12px; font-weight: 750; }

        .gm-services .gs-definitions dd {
          margin: 0;
          font-size: 13px;
          line-height: 1.8;
          color: var(--gs-muted);
          overflow-wrap: anywhere;
        }

        .gm-services .gs-tags { display: flex; flex-wrap: wrap; gap: 8px; }

        .gm-services .gs-tags span {
          max-width: 100%;
          padding: 8px 12px;
          border: 1px solid var(--gs-border);
          border-radius: 11px;
          background: var(--gs-glass);
          font-size: 12px;
          line-height: 1.5;
          font-weight: 550;
          overflow-wrap: anywhere;
        }

        .gm-services .gs-tech-tags span {
          padding: 10px 14px;
          transition: border-color .2s, background .2s;
        }

        .gm-services .gs-search-features {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin: 0;
        }

        .gm-services .gs-search-features li {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
          padding: 13px;
          border: 1px solid var(--gs-border);
          border-radius: 12px;
          background: var(--gs-glass);
          font-size: 12px;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .gm-services .gs-search-features li span { min-width: 0; }
        .gm-services .gs-search-features svg { color: #0891b2; }
        .dark .gm-services .gs-search-features svg { color: #67e8f9; }

        .gm-services .gs-small-card { padding: 26px; }
        .gm-services .gs-industries {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .gm-services .gs-industry { padding: 20px; }
        .gm-services .gs-industry p {
          margin-top: 16px;
          font-size: 13px;
          font-weight: 650;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .gm-services .gs-process { margin-bottom: 0; }
        .gm-services .gs-step-number {
          font-size: 30px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -.05em;
          color: var(--a);
        }

        .dark .gm-services .gs-step-number { color: #c4b5fd; }

        .gm-services .gs-faq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          align-items: start;
        }

        .gm-services .gs-faq {
          min-width: 0;
          padding: 0 20px;
          border: 1px solid var(--gs-border);
          border-radius: 17px;
          background: var(--gs-glass);
          transition: border-color .25s, box-shadow .25s;
        }

        .gm-services .gs-faq summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          min-height: 68px;
          padding: 17px 0;
          cursor: pointer;
          list-style: none;
          font-size: 14px;
          line-height: 1.6;
          font-weight: 650;
          overflow-wrap: anywhere;
          touch-action: manipulation;
        }

        .gm-services .gs-faq summary span { min-width: 0; }
        .gm-services .gs-faq summary::-webkit-details-marker { display: none; }

        .gm-services .gs-faq summary svg {
          color: #8b5cf6;
          transition: transform .25s;
        }

        .gm-services .gs-faq[open] {
          border-color: rgba(139,92,246,.4);
          box-shadow: 0 8px 24px rgba(124,58,237,.055);
        }

        .gm-services .gs-faq[open] summary svg { transform: rotate(180deg); }
        .gm-services .gs-faq .gs-copy {
          margin: 0;
          padding: 0 0 20px;
          font-size: 13px;
        }

        .gm-services .gs-faq[open] .gs-copy { animation: gs-enter .25s ease-out; }

        .gm-services .gs-related {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 22px;
          margin-top: 24px;
        }

        .gm-services .gs-related a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          max-width: 100%;
          min-height: 44px;
          color: var(--gs-text);
          font-size: 13px;
          font-weight: 650;
          line-height: 1.6;
        }

        .gm-services .gs-final {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: clamp(32px, 6vw, 72px) clamp(20px, 4vw, 48px);
          border: 1px solid rgba(167,139,250,.3);
          border-radius: 30px;
          background: #10152b;
          box-shadow: 0 24px 60px rgba(76,29,149,.13);
          color: #fff;
          text-align: center;
        }

        .gm-services .gs-final-glow {
          position: absolute;
          inset: -12%;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 20% 0%, rgba(139,92,246,.45), transparent 65%),
            radial-gradient(ellipse at 100% 100%, rgba(6,182,212,.28), transparent 60%),
            radial-gradient(ellipse at 70% 20%, rgba(219,39,119,.15), transparent 50%);
          animation: gs-float 16s ease-in-out infinite alternate;
        }

        .gm-services .gs-final-content { position: relative; }
        .gm-services .gs-final .gs-eyebrow { margin-top: 23px; color: #c4b5fd; }

        .gm-services .gs-final h3 {
          max-width: 850px;
          margin: 15px auto 0;
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          font-weight: 750;
          letter-spacing: -.045em;
          line-height: 1.2;
          overflow-wrap: anywhere;
          text-wrap: balance;
        }

        .gm-services .gs-final-content > p:not(.gs-eyebrow) {
          max-width: 760px;
          margin: 22px auto 0;
          color: #c6cfe3;
          font-size: 14px;
          line-height: 1.9;
        }

        .gm-services .gs-button-white {
          background: #fff;
          border-color: #fff;
          color: #172039;
        }

        .gm-services .gs-button-dark {
          background: rgba(255,255,255,.07);
          border-color: rgba(255,255,255,.25);
          color: #fff;
        }

        .gm-services a:focus-visible,
        .gm-services summary:focus-visible {
          outline: 3px solid #a78bfa;
          outline-offset: 4px;
          border-radius: 8px;
        }

        .gm-services .gs-button:active { transform: scale(.98); }

        @media (hover: hover) and (pointer: fine) {
          .gm-services .gs-card:hover {
            transform: translateY(-5px);
            border-color: rgba(var(--rgb), .42);
            box-shadow: 0 20px 44px rgba(var(--rgb), .12);
          }

          .gm-services .gs-card:hover .gs-icon {
            transform: translateY(-2px) rotate(-4deg);
            box-shadow: 0 10px 24px rgba(var(--rgb), .3);
          }

          .gm-services .gs-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(124,58,237,.2);
          }

          .gm-services .gs-button:hover svg:last-child,
          .gm-services .gs-card-link:hover svg,
          .gm-services .gs-related a:hover svg {
            transform: translateX(3px);
          }

          .gm-services .gs-jump-links a:hover {
            border-color: #a78bfa;
            color: var(--gs-text);
            background: rgba(139,92,246,.08);
          }

          .gm-services .gs-tech-tags span:hover {
            border-color: rgba(139,92,246,.45);
            background: rgba(139,92,246,.08);
          }

          .gm-services .gs-related a:hover {
            text-decoration: underline;
            text-underline-offset: 4px;
          }
        }

        @supports (animation-timeline: view()) {
          @media (prefers-reduced-motion: no-preference) {
            .gm-services .gs-section > .gs-heading {
              animation: gs-section-enter linear both;
              animation-timeline: view();
              animation-range: entry 0% entry 80%;
            }
          }
        }

        @media (max-width: 1099px) {
          .gm-services .gs-grid-three,
          .gm-services .gs-grid-four {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .gm-services .gs-split {
            grid-template-columns: minmax(0, 1fr);
            gap: 28px;
          }

          .gm-services .gs-provider {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 639px) {
          .gm-services {
            padding-top: 12px;
            padding-bottom: max(36px, env(safe-area-inset-bottom, 0px));
          }

          .gm-services .gs-grid-three { grid-template-columns: minmax(0, 1fr); }
          .gm-services .gs-grid { gap: 16px; }
          .gm-services .gs-grid-four { gap: 12px; }
          .gm-services .gs-overview-card { padding: 17px; }
          .gm-services .gs-overview-value { font-size: 13px; }

          .gm-services .gs-eyebrow {
            font-size: 10px;
            letter-spacing: .12em;
          }

          .gm-services .gs-mobile-break { display: block; }
          .gm-services .gs-actions { flex-direction: column; }
          .gm-services .gs-actions .gs-button,
          .gm-services .gs-provider .gs-button { width: 100%; }

          .gm-services .gs-highlights { gap: 10px 14px; }
          .gm-services .gs-highlights li { font-size: 11px; }
          .gm-services .gs-service-card,
          .gm-services .gs-small-card { padding: 22px; }
          .gm-services .gs-card { border-radius: 20px; }
          .gm-services .gs-card h4 { font-size: 19px; }
          .gm-services .gs-industries { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .gm-services .gs-industry { padding: 18px; }
          .gm-services .gs-faq-grid { grid-template-columns: minmax(0, 1fr); }
          .gm-services .gs-faq { padding-inline: 16px; }
          .gm-services .gs-panel,
          .gm-services .gs-final { border-radius: 23px; }
          .gm-services .gs-search-features { gap: 8px; }

          .gm-services .gs-search-features li {
            padding: 10px;
            font-size: 11px;
            gap: 7px;
          }

          .gm-services .gs-orb { filter: blur(38px); }
          .gm-services .gs-orb-three { display: none; }
          .gm-services .gs-provider {
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
          }
        }

        @media (max-width: 359px) {
          .gm-services .gs-grid-four,
          .gm-services .gs-features,
          .gm-services .gs-search-features {
            grid-template-columns: minmax(0, 1fr);
          }

          .gm-services .gs-label { font-size: 10px; padding-inline: 10px; }
          .gm-services .gs-jump-links a { width: 100%; }
          .gm-services .gs-button { padding-inline: 12px; gap: 7px; }
        }

        @media (max-width: 279px) {
          .gm-services .gs-industries { grid-template-columns: minmax(0, 1fr); }
          .gm-services .gs-definitions > div { grid-template-columns: minmax(0, 1fr); }
        }

        @keyframes gs-enter {
          from { opacity: 0; transform: translate3d(0, 14px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes gs-section-enter {
          from { opacity: .55; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gs-float {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(16px, -20px, 0); }
        }

        @keyframes gs-gradient-flow {
          from { background-position: 0% 50%; }
          to { background-position: 100% 50%; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gm-services *,
          .gm-services *::before,
          .gm-services *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }

          .gm-services .gs-card:hover,
          .gm-services .gs-card:hover .gs-icon,
          .gm-services .gs-button:hover,
          .gm-services .gs-button:active,
          .gm-services .gs-button:hover svg:last-child,
          .gm-services .gs-card-link:hover svg,
          .gm-services .gs-related a:hover svg {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}