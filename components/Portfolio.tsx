"use client";

import React, {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit, Workflow, Eye, Download, Mail, Globe, MapPin,
  Briefcase, Calendar, Sparkles, ExternalLink, Phone,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { MdOutlineWifi } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import {
  FaXTwitter, FaInstagram, FaFacebook, FaTiktok, FaThreads,
} from "react-icons/fa6";
import {
  SiGithub, SiReact, SiAngular, SiNodedotjs, SiExpress,
  SiMongodb, SiPython, SiDjango, SiFlask, SiPhp, SiTypescript,
  SiLaravel, SiJquery, SiMysql, SiTailwindcss, SiBootstrap,
  SiPostman, SiVite, SiGit, SiDocker, SiRender, SiVercel,
  SiFastapi, SiTensorflow, SiPytorch, SiScikitlearn, SiPandas,
  SiNumpy, SiJavascript, SiHtml5, SiCss, SiGoogletranslate,
  SiOpenai,
} from "react-icons/si";
import ClientsReviews from "./ClientsReviews";

const PROFILE = {
  name: "Ghulam Mustafa",
  title: "Full Stack Engineer",
  location: "Lahore, Pakistan",
  email: "yunusbutt676@gmail.com",
  phone: "+92-304-5478602",
  summary:
    "Full Stack Engineer 4+ years of experience in specializing modern web applications, RESTful APIs, AI/ML integrations, and scalable backend systems. Experienced with Next.js, React, Node.js, TypeScript, Laravel, Python, Django, Flask, FastAPI, MongoDB, and MySQL. Builds production-ready applications across full-stack development, AI-powered platforms, dashboards, e-commerce, and real-time systems.",
  avatar: "/omg.jpeg",
};

const LINKS = {
  github: "https://github.com/yunusbutt676-commits",
  linkedin: "https://www.linkedin.com/in/ghulam-mustafa-620142380/",
  twitter: "https://x.com/Mustafa06833246",
  instagram: "https://www.instagram.com/gmcodes9?igsh=Y3g4MHdqZnY0eHQw",
  facebook: "https://www.facebook.com/share/1aJbL575Tr/",
  tiktok: "https://www.tiktok.com/@gmcodes9?_r=1&_t=ZP-96lVlFKd1yh",
  threads: "https://www.threads.com/@gmcodes9",
  whatsapp: "https://wa.me/923045478602",
};

const SKILL_ICONS: Record<string, [ElementType, string]> = {
  "Next.js": [Globe, "text-black dark:text-white"],
  "React (with Vite)": [SiReact, "text-blue-500"],
  React: [SiReact, "text-blue-500"],
  "OpenAI API": [SiOpenai, "text-[#10A37F]"],
  Angular: [SiAngular, "text-red-600"],
  "Node.js": [SiNodedotjs, "text-green-600"],
  Express: [SiExpress, "text-gray-700 dark:text-gray-200"],
  "Express.js": [SiExpress, "text-gray-700 dark:text-gray-200"],
  MongoDB: [SiMongodb, "text-green-500"],
  Python: [SiPython, "text-purple-500"],
  Django: [SiDjango, "text-green-700"],
  Flask: [SiFlask, "text-gray-700 dark:text-gray-200"],
  FastAPI: [SiFastapi, "text-green-500"],
  PHP: [SiPhp, "text-indigo-600"],
  "Core-PHP": [SiPhp, "text-indigo-400"],
  JQuery: [SiJquery, "text-blue-400"],
  Laravel: [SiLaravel, "text-red-500"],
  TypeScript: [SiTypescript, "text-blue-600"],
  MySQL: [SiMysql, "text-blue-600"],
  TailwindCSS: [SiTailwindcss, "text-sky-500"],
  Bootstrap: [SiBootstrap, "text-purple-600"],
  Postman: [SiPostman, "text-orange-500"],
  Vite: [SiVite, "text-yellow-400"],
  Gitbash: [SiGit, "text-red-500"],
  GitHub: [SiGithub, "text-gray-900 dark:text-white"],
  Docker: [SiDocker, "text-blue-500"],
  Render: [SiRender, "text-purple-600"],
  Vercel: [SiVercel, "text-black dark:text-white"],
  TensorFlow: [SiTensorflow, "text-orange-500"],
  "RESTful APIs": [Workflow, "text-purple-500"],
  PyTorch: [SiPytorch, "text-red-600"],
  "Computer Vision": [Sparkles, "text-pink-500"],
  "Scikit-learn": [SiScikitlearn, "text-blue-400"],
  Pandas: [SiPandas, "text-purple-500"],
  NumPy: [SiNumpy, "text-blue-500"],
  NLP: [BrainCircuit, "text-pink-500"],
  "JavaScript (ES6+)": [SiJavascript, "text-yellow-400"],
  HTML5: [SiHtml5, "text-orange-500"],
  CSS3: [SiCss, "text-blue-500"],
  WebSocket: [MdOutlineWifi, "text-purple-500"],
  LangDetect: [SiGoogletranslate, "text-green-500"],
};

const SKILLS = {
  frontend: [
    "Next.js", "React (with Vite)", "Angular", "JavaScript (ES6+)",
    "HTML5", "CSS3", "TailwindCSS", "Bootstrap",
  ],
  backend: [
    "Node.js", "Express.js", "TypeScript", "Python", "Django", "Flask",
    "FastAPI", "PHP", "Core-PHP", "JQuery", "Laravel", "RESTful APIs",
  ],
  database: ["MongoDB", "MySQL"],
  tools: ["Gitbash", "GitHub", "Vite", "Vercel", "Render", "Docker", "Postman"],
  ai_ml: [
    "TensorFlow", "PyTorch", "Computer Vision", "Scikit-learn",
    "Pandas", "NumPy", "NLP",
  ],
};

type Project = {
  name: string;
  description: string;
  stack: string[];
  links: { code?: string; live?: string };
  images?: string[];
};

const PROJECTS: Project[] = [
  {
    name: "Union Add",
    description:
      "Official production platform for a full-service advertising and digital marketing agency. Built as a complete digital presence with an OpenAI-powered AI assistant, intelligent quote workflow, MongoDB-backed functionality, service and portfolio experiences, WhatsApp integration, advanced SEO/GEO architecture, dark mode, and responsive performance.",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB", "OpenAI API"],
    links: { live: "https://union-add.vercel.app" },
    images: ["/Images/ua1.png", "/Images/ua2.png", "/Images/ua3.png", "/Images/ua4.png", "/Images/ua5.png", "/Images/ua6.png", "/Images/ua7.png", "/Images/ua8.png"],
  },
  {
    name: "Apki Manzil",
    description:
      "Official production real estate platform for Arabian City, Lahore. Designed to provide a streamlined property discovery experience with structured listings, detailed property information, direct client communication, responsive performance, and a refined mobile-first interface.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    links: { live: "https://apkimanzil.vercel.app" },
    images: ["/Images/ap1.png", "/Images/ap2.png", "/Images/ap3.png", "/Images/ap5.png", "/Images/ap4.png", "/Images/ap6.png", "/Images/ap7.png", "/Images/ap8.png"],
  },
  {
    name: "MEAN-SET",
    description:
      "Smart Expenses Tracker is a full-stack expense management application built with Angular 19, Node.js, Express, and MongoDB. It includes role-based access control, token-based authentication, dashboard functionality, and secure API integration.",
    stack: ["Angular", "Node.js", "Express.js", "MongoDB"],
    links: {
      code: "https://github.com/yunusbutt676-commits/mean-SET.git",
    },
    images: ["/Images/02.png", "/Images/00.png", "/Images/01.png", "/Images/03.png"],
  },
  {
    name: "MERN Courses Management",
    description:
      "A full-stack course management platform built with MongoDB, Express, React, and Node.js. The application provides role-based authentication and authorization, course management workflows, modern dashboards, and a responsive user experience.",
    stack: ["React (with Vite)", "Node.js", "Express.js", "MongoDB"],
    links: {
      code: "https://github.com/yunusbutt676-commits/mern-courses-management.git",
    },
    images: [
      "/Images/mern.png", "/Images/ma.png", "/Images/ll.png",
      "/Images/nb.png", "/Images/nn.png",
    ],
  },
  {
    name: "Python Django Inventory Dashboard",
    description:
      "A real-time inventory and sales dashboard built with Django, Tailwind CSS, and Chart.js. It manages products, orders, stock levels, sales activity, and top-selling products through a data-driven dashboard.",
    stack: ["Python", "Django", "MySQL"],
    links: {
      code: "https://github.com/yunusbutt676-commits/Python-Django.git",
    },
    images: [
      "/Images/11.png", "/Images/12.png", "/Images/13.png",
      "/Images/14.png", "/Images/15.png",
    ],
  },
  {
    name: "Advanced Project Management API",
    description:
      "A multi-tenant, role-based project management REST API built with Node.js, Express, and MongoDB. It includes JWT authentication, role-based authorization, project management workflows, and real-time notifications using Server-Sent Events.",
    stack: ["Node.js", "Express.js", "MongoDB", "Postman"],
    links: {
      code: "https://github.com/yunusbutt676-commits/Advanced-Api.git",
    },
    images: ["/Images/01.png"],
  },
  {
    name: "Nexacart E-Commerce Platform",
    description:
      "A full-stack e-commerce project built with Laravel, Next.js, and MySQL. Includes Google Sign-In, Stripe checkout, a Groq-powered shopping assistant, and customer and administrator dashboards.",
    stack: ["Laravel", "PHP", "Next.js", "MySQL"],
    links: {
      code: "https://github.com/yunusbutt676-commits/nexacart.git",
    },
    images: ["/Images/nx1.png", "/Images/nx2.png", "/Images/nx3.png", "/Images/nx6.png", "/Images/nx9.png", "/Images/nx20.png", "/Images/nx19.png"],
  },
  {
    name: "NovaLearn AI",
    description:
      "A full-stack AI-powered learning platform with role-based dashboards, course management, Stripe subscriptions and webhooks, AI tutoring, quiz generation, and intelligent text summarization.",
    stack: ["Node.js", "Express.js", "MongoDB", "TypeScript", "FastAPI", "React"],
    links: {
      code: "https://github.com/yunusbutt676-commits/NovaLearn-AI",
    },
    images: [
      "/Images/50.png", "/Images/53.png", "/Images/51.png",
      "/Images/52.png", "/Images/54.png", "/Images/55.png",
      "/Images/56.png", "/Images/57.png", "/Images/58.png",
      "/Images/63.png", "/Images/64.png", "/Images/65.png",
      "/Images/66.png", "/Images/59.png", "/Images/60.png",
      "/Images/61.png", "/Images/62.png",
    ],
  },
  {
    name: "AI Job Portal",
    description:
      "A full-stack job portal built with Flask, React, and MySQL. It provides role-based authentication, job CRUD operations, administrative workflows, and an AI-powered job recommendation system using NLP and cosine similarity.",
    stack: ["React", "Flask", "MySQL"],
    links: {
      code: "https://github.com/yunusbutt676-commits/Flask-React",
    },
    images: ["/Images/30.png", "/Images/31.png", "/Images/32.png"],
  },
  {
    name: "AI Smart Assistant",
    description:
      "An AI-powered assistant combining computer vision and large language model capabilities. It supports webcam and image-based facial analysis, face registration and recognition using embeddings stored in MongoDB, and a context-aware conversational assistant powered by Groq.",
    stack: [
      "HTML5", "TailwindCSS", "FastAPI", "MongoDB", "JavaScript (ES6+)",
      "TensorFlow", "PyTorch", "Computer Vision", "Scikit-learn",
      "Pandas", "NumPy", "NLP",
    ],
    links: {
      code: "https://github.com/yunusbutt676-commits/ai_smart_assistant",
    },
    images: [
      "/Images/44.png", "/Images/43.png", "/Images/45.png",
      "/Images/41.png", "/Images/40.png",
    ],
  },
  {
    name: "AI Voice Chatbot",
    description:
      "A multilingual AI voice and text chatbot built with FastAPI, React, and MongoDB. It supports General, Medical, and Education domains, multiple languages including English, Urdu, Spanish, Arabic, French, and Hindi, real-time communication, language detection, AI responses, and persistent chat history.",
    stack: ["React", "FastAPI", "MongoDB", "WebSocket", "LangDetect"],
    links: {
      code: "https://github.com/yunusbutt676-commits/voice.git",
    },
    images: [
      "/Images/voice.png", "/Images/voice1.png", "/Images/voice2.png",
      "/Images/voice3.png", "/Images/voice4.png", "/Images/voice5.png",
      "/Images/voice6.png", "/Images/voice7.png",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Full Stack Engineer",
    company: "Union Add Advertisement Company",
    period: "July 2026 – Present",
    points: [
      "Develop and maintain scalable full-stack web applications using MERN, MEAN, Laravel, Django, Flask, and FastAPI technologies.",
      "Design and integrate secure RESTful APIs, authentication systems, role-based access control, and database-driven application features.",
      "Implement AI/ML integrations and third-party services to enhance application functionality and user experiences.",
      "Improve application performance through database optimization, efficient backend workflows, and reliable API architecture.",
      "Work closely with cross-functional teams to build, enhance, and deploy production-ready web and digital solutions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Geniune Tech Softwares",
    period: "July 2023 – June 2026",
    points: [
      "Develop full-stack web applications across MERN, MEAN, Laravel, Django, Flask, and FastAPI ecosystems.",
      "Build and integrate secure RESTful APIs, authentication systems, role-based access control, and database-driven features.",
      "Integrate AI/ML capabilities and third-party services into modern web applications.",
      "Optimize database queries and application workflows for reliability and performance.",
      "Collaborate with design and marketing teams to deliver production-ready digital products.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Shan Tech Softwares",
    period: "June 2022 – May 2023",
    points: [
      "Built responsive web interfaces using React, Tailwind CSS, and modern JavaScript.",
      "Integrated REST APIs and connected frontend applications with backend services.",
      "Improved usability, responsiveness, and frontend user experience across web applications.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "BS Computer Science",
    school: "University of Lahore",
    period: "2018 – 2022",
  },
  { degree: "ICS", school: "PGC Muslim Town", period: "2015 – 2017" },
  {
    degree: "Matric",
    school: "Crescent Model School, Shadman",
    period: "2005 – 2015",
  },
];

const LANGUAGES = ["English", "Punjabi", "Urdu"];

const ABOUT = [
  {
    title: "Who is Ghulam Mustafa?",
    text:
      "Ghulam Mustafa is a Full Stack Engineer based in Lahore, Pakistan, working with modern frontend, backend, database, API and AI/ML technologies to build web applications and digital platforms.",
  },
  {
    title: "What is GmCodes9?",
    text:
      "GmCodes9 is the professional digital brand of Ghulam Mustafa, focused on full stack web development, AI/ML integrations, business systems, e-commerce, SEO/GEO and related digital services.",
  },
  {
    title: "What does Ghulam Mustafa specialize in?",
    text:
      "His work includes Next.js, React, Node.js, TypeScript, Laravel, Python, Django, Flask, FastAPI, MongoDB, MySQL, REST APIs, AI/ML integrations, dashboards, e-commerce and database-driven applications.",
  },
];

const CONTACTS = [
  { label: "GitHub", href: LINKS.github, icon: SiGithub, color: "text-[#181717] dark:text-white" },
  { label: "LinkedIn", href: LINKS.linkedin, icon: FaLinkedin, color: "text-[#0A66C2]" },
  { label: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail, color: "text-[#EA4335]" },
  { label: "WhatsApp", href: LINKS.whatsapp, icon: Phone, color: "text-[#25D366]" },
  { label: "X / Twitter", href: LINKS.twitter, icon: FaXTwitter, color: "text-black dark:text-white" },
  { label: "Instagram", href: LINKS.instagram, icon: FaInstagram, color: "text-[#E4405F]" },
  { label: "Facebook", href: LINKS.facebook, icon: FaFacebook, color: "text-[#1877F2]" },
  { label: "TikTok", href: LINKS.tiktok, icon: FaTiktok, color: "text-black dark:text-white group-hover:text-[#FE2C55]" },
  { label: "Threads", href: LINKS.threads, icon: FaThreads, color: "text-black dark:text-white" },
];

const SKILL_GROUPS = [
  { title: "Frontend", items: SKILLS.frontend, icon: Globe },
  { title: "Backend & APIs", items: SKILLS.backend, icon: Workflow },
  { title: "Databases", items: SKILLS.database, icon: SiMongodb },
  { title: "Tools & Development", items: SKILLS.tools, icon: SiDocker },
];

const PALETTE = [
  ["#7c3aed", "#db2777", "124,58,237"],
  ["#0284c7", "#0d9488", "2,132,199"],
  ["#db2777", "#ea580c", "219,39,119"],
  ["#059669", "#0284c7", "5,150,105"],
];

const accent = (index = 0): CSSProperties => {
  const [a, b, rgb] = PALETTE[index % PALETTE.length];
  return { "--a": a, "--b": b, "--rgb": rgb } as CSSProperties;
};

function Badge({ name }: { name: string }) {
  const entry = SKILL_ICONS[name];
  const Icon = entry?.[0];

  return (
    <span className="gm-badge">
      {Icon && <Icon className={`h-4 w-4 shrink-0 ${entry[1]}`} aria-hidden="true" />}
      <span>{name}</span>
    </span>
  );
}

function Section({
  id, title, icon: Icon, children, color = 0,
}: {
  id: string;
  title: string;
  icon: ElementType;
  children: ReactNode;
  color?: number;
}) {
  return (
    <section id={id} className="gm-section" aria-labelledby={`${id}-heading`} style={accent(color)}>
      <div className="gm-container">
        <div className="gm-section-heading">
          <span className="gm-icon-box"><Icon aria-hidden="true" /></span>
          <h2 id={`${id}-heading`}>{title}</h2>
          <span className="gm-heading-line" aria-hidden="true" />
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Portfolio() {
  const [activeSlides, setActiveSlides] = useState<Record<string, number>>({});
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const changeSlide = (projectName: string, index: number) =>
    setActiveSlides((previous) => ({ ...previous, [projectName]: index }));

  const previousSlide = (projectName: string, total: number) =>
    setActiveSlides((previous) => ({
      ...previous,
      [projectName]: ((previous[projectName] ?? 0) - 1 + total) % total,
    }));

  const nextSlide = (projectName: string, total: number) =>
    setActiveSlides((previous) => ({
      ...previous,
      [projectName]: ((previous[projectName] ?? 0) + 1) % total,
    }));

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.12 },
          transition: { duration: 0.55, delay, ease: "easeOut" as const },
        };

  const hover = (y = -5) => shouldReduceMotion ? undefined : { y };

  return (
    <div id="top" className="gm-portfolio" style={accent()}>
      <main>
        <section className="gm-hero" aria-labelledby="hero-heading">
          <div className="gm-hero-grid" aria-hidden="true" />
          <div className="gm-orb gm-orb-one" aria-hidden="true" />
          <div className="gm-orb gm-orb-two" aria-hidden="true" />
          <div className="gm-orb gm-orb-three" aria-hidden="true" />

          <div className="gm-container gm-hero-inner">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="gm-hero-content"
            >
              <div className="gm-avatar-wrap">
                <div className="gm-avatar-ring" aria-hidden="true" />
                <Image
                  src={PROFILE.avatar}
                  alt="Ghulam Mustafa - Full Stack Engineer"
                  width={112}
                  height={112}
                  priority
                  className="gm-avatar"
                />
                <div className="gm-availability">
                  <span className="gm-status-dot" aria-hidden="true" />
                  Open to Opportunities
                </div>
              </div>

              <h1 id="hero-heading" className="gm-hero-title">
                <span className="gm-gradient-text">Full Stack Engineer</span>
                <span className="gm-hero-subtitle">
                  React • Next.js • Node.js • Python • Laravel • AI/ML
                </span>
              </h1>

              <p className="gm-hero-description">{PROFILE.summary}</p>

              <div className="gm-hero-actions">
                <a href="#projects" className="gm-button gm-button-primary">
                  Explore Projects
                </a>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="gm-button">
                  <SiGithub aria-hidden="true" /> GitHub
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="gm-button">
                  <FaLinkedin className="text-[#0A66C2]" aria-hidden="true" /> LinkedIn
                </a>
                <a href="/Resume.GM9.pdf" target="_blank" rel="noopener noreferrer" className="gm-button gm-button-soft">
                  <Eye aria-hidden="true" /> View CV
                </a>
                <a href="/Resume.GM9.pdf" download="GM-CV.pdf" className="gm-button gm-button-blue">
                  <Download aria-hidden="true" /> Download CV
                </a>
              </div>

              <div className="gm-hero-meta">
                <span><MapPin aria-hidden="true" />{PROFILE.location}</span>
                <span><Briefcase aria-hidden="true" />Available for remote opportunities</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about-gmcodes9" className="gm-section gm-about" aria-labelledby="about-gmcodes9-heading">
          <div className="gm-container">
            <motion.div {...reveal()}>
              <p className="gm-eyebrow">About GmCodes9</p>
              <h2 id="about-gmcodes9-heading" className="gm-about-title">
                Ghulam Mustafa &amp; <span className="gm-gradient-text">GmCodes9</span>
              </h2>
              <p className="gm-section-description">
                Quick answers about Ghulam Mustafa, GmCodes9 and the
                technologies and digital solutions behind the work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:gap-6 mt-8">
              {ABOUT.map((item, index) => (
                <motion.article
                  key={item.title}
                  {...reveal(index * 0.06)}
                  whileHover={hover()}
                  style={accent(index)}
                  className="gm-card gm-padded gm-about-card"
                >
                  <span className="gm-card-number" aria-hidden="true">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p className="gm-copy mt-3">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <Section id="skills" title="Full Stack Development Skills" icon={Briefcase}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
            {SKILL_GROUPS.map(({ title, items, icon: Icon }, index) => (
              <motion.article
                key={title}
                {...reveal(index * 0.05)}
                whileHover={hover()}
                className="gm-card gm-padded gm-skill-card"
                style={accent(index)}
              >
                <span className="gm-icon-box gm-card-icon"><Icon aria-hidden="true" /></span>
                <h3 className="mb-4">{title}</h3>
                <div className="gm-badges">
                  {items.map((skill) => <Badge key={skill} name={skill} />)}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="ai-ml" title="AI / ML Integration" icon={Sparkles} color={2}>
          <motion.div {...reveal()} className="gm-card gm-padded gm-ai-panel">
            <div className="gm-badges">
              {SKILLS.ai_ml.map((skill) => <Badge key={skill} name={skill} />)}
            </div>
            <BrainCircuit className="gm-ai-decoration" aria-hidden="true" />
          </motion.div>
        </Section>

        <div id="reviews"><ClientsReviews /></div>

        <Section id="projects" title="Featured Live, Full Stack & AI Projects" icon={ExternalLink} color={1}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {PROJECTS.map((project, projectIndex) => {
              const currentSlide = activeSlides[project.name] ?? 0;
              const images = project.images ?? [];

              return (
                <motion.article
                  key={project.name}
                  {...reveal((projectIndex % 3) * 0.05)}
                  whileHover={hover(-6)}
                  style={accent(projectIndex)}
                  className="gm-card gm-project-card group"
                >
                  {images.length > 0 ? (
                    <div className="gm-project-image">
                      <Image
                        src={images[currentSlide]}
                        alt={`${project.name} project screenshot ${currentSlide + 1}`}
                        fill
                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                      />
                      <div className="gm-image-shade" aria-hidden="true" />

                      {images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => previousSlide(project.name, images.length)}
                            aria-label={`Previous ${project.name} screenshot`}
                            className="gm-carousel-arrow gm-carousel-previous"
                          >
                            <ChevronLeft aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            onClick={() => nextSlide(project.name, images.length)}
                            aria-label={`Next ${project.name} screenshot`}
                            className="gm-carousel-arrow gm-carousel-next"
                          >
                            <ChevronRight aria-hidden="true" />
                          </button>

                          <div className="gm-image-counter">
                            {currentSlide + 1} / {images.length}
                          </div>

                          <div className="gm-carousel-dots" role="group" aria-label={`${project.name} screenshots`}>
                            {images.map((_, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => changeSlide(project.name, index)}
                                aria-label={`Show ${project.name} screenshot ${index + 1}`}
                                aria-current={currentSlide === index ? "true" : undefined}
                              >
                                <span className={currentSlide === index ? "is-active" : ""} />
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="gm-project-image gm-project-placeholder">
                      <Sparkles className="h-12 w-12" aria-hidden="true" />
                      <span>Full Stack Project</span>
                    </div>
                  )}

                  <div className="gm-project-body">
                    <h3>{project.name}</h3>
                    <p className="gm-copy mt-3">{project.description}</p>
                    <div className="gm-badges mt-4" aria-label={`${project.name} technologies`}>
                      {project.stack.map((technology) => <Badge key={technology} name={technology} />)}
                    </div>

                    <div className="gm-project-links">
                      {project.links.code && (
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gm-button gm-project-link"
                          aria-label={`View ${project.name} source code on GitHub`}
                        >
                          <SiGithub aria-hidden="true" /> Code
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gm-button gm-button-primary gm-project-link"
                          aria-label={`Open ${project.name} live project`}
                        >
                          <Globe aria-hidden="true" /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Section>

        <Section id="experience" title="Professional Experience" icon={Calendar} color={0}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6">
            {EXPERIENCE.map((experience, index) => (
              <motion.article
                key={`${experience.role}-${experience.company}`}
                {...reveal(index * 0.05)}
                whileHover={hover(-4)}
                style={accent(index)}
                className="gm-card gm-padded gm-experience-card"
              >
                <span className="gm-icon-box gm-card-icon"><Briefcase aria-hidden="true" /></span>
                <h3>{experience.role}{" — "}{experience.company}</h3>
                <p className="gm-period">{experience.period}</p>
                <ul className="gm-experience-list">
                  {experience.points.map((point, i) => (
                    <li key={i}><span aria-hidden="true" />{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" icon={Briefcase} color={1}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {EDUCATION.map((education, index) => (
              <motion.article
                key={`${education.degree}-${index}`}
                {...reveal(index * 0.05)}
                whileHover={hover(-4)}
                style={accent(index + 1)}
                className="gm-card gm-padded"
              >
                <span className="gm-icon-box gm-card-icon"><Briefcase aria-hidden="true" /></span>
                <h3>{education.degree}</h3>
                <p className="gm-copy mt-2">{education.school}</p>
                <p className="gm-period">{education.period}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section id="languages" title="Languages" icon={Globe} color={3}>
          <motion.div {...reveal()} className="flex flex-wrap gap-3">
            {LANGUAGES.map((language, index) => (
              <span key={language} style={accent(index)} className="gm-language">
                <span aria-hidden="true" />{language}
              </span>
            ))}
          </motion.div>
        </Section>

        <Section id="contact" title="Contact" icon={Mail} color={2}>
          <motion.div {...reveal()} className="gm-card gm-contact-panel">
            <div className="gm-contact-glow" aria-hidden="true" />
            <div className="relative">
              <h3 className="gm-contact-title">Let’s build something useful together.</h3>
              <p className="gm-copy gm-contact-description">
                Available for remote opportunities, freelance projects,
                full-stack development, AI integrations, and modern web application development.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {CONTACTS.map(({ label, href, icon: Icon, color }, index) => {
                  const external = !href.startsWith("mailto:");

                  return (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="gm-contact-link group"
                      style={accent(index)}
                    >
                      <span className="gm-contact-icon">
                        <Icon className={`h-5 w-5 ${color}`} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 break-words">{label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="gm-contact-status">
                <span className="gm-status-dot" aria-hidden="true" />
                <span>Open for Remote Jobs, Online Work &amp; Freelance.</span>
              </div>
            </div>
          </motion.div>
        </Section>
      </main>

      <style>{`
        .gm-portfolio {
          --page: #f8f9ff;
          --surface: #ffffff;
          --surface-soft: #f4f6fc;
          --text: #172039;
          --muted: #5c667e;
          --border: rgba(100,116,160,.18);
          --shadow: 0 12px 38px rgba(45,35,90,.055);
          color: var(--text);
          background:
            radial-gradient(ellipse at 0% 28%, rgba(139,92,246,.055), transparent 35%),
            radial-gradient(ellipse at 100% 65%, rgba(6,182,212,.06), transparent 35%),
            var(--page);
          min-height: 100vh;
          width: 100%;
          max-width: 100vw;
          overflow-x: clip;
          isolation: isolate;
          transition: background-color .3s, color .3s;
          -webkit-tap-highlight-color: transparent;
        }

        .dark .gm-portfolio {
          --page: #090e1c;
          --surface: #11192b;
          --surface-soft: #172137;
          --text: #f0f4ff;
          --muted: #b0bad0;
          --border: rgba(150,166,205,.17);
          --shadow: 0 12px 38px rgba(0,0,0,.18);
        }

        .gm-portfolio *, .gm-portfolio *::before, .gm-portfolio *::after {
          box-sizing: border-box;
        }

        .gm-portfolio .gm-container {
          width: min(100%, 1184px);
          margin-inline: auto;
          padding-inline: clamp(16px, 4vw, 32px);
        }

        .gm-portfolio .gm-section {
          position: relative;
          padding-block: clamp(40px, 6vw, 76px);
          scroll-margin-top: 96px;
        }

        .gm-portfolio .gm-section-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .gm-portfolio .gm-section-heading h2 {
          font-size: clamp(1.25rem, 2.6vw, 2rem);
          font-weight: 750;
          letter-spacing: -.035em;
          line-height: 1.25;
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .gm-portfolio .gm-heading-line {
          height: 1px;
          flex: 1;
          min-width: 16px;
          background: linear-gradient(90deg, rgba(var(--rgb), .38), transparent);
        }

        .gm-portfolio .gm-icon-box {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 15px;
          color: #fff;
          background: linear-gradient(135deg, var(--a), var(--b));
          box-shadow: 0 8px 20px rgba(var(--rgb), .2);
        }

        .gm-portfolio .gm-icon-box svg { width: 22px; height: 22px; }
        .gm-portfolio .gm-card-icon { margin-bottom: 20px; }

        .gm-portfolio .gm-gradient-text {
          color: #7c3aed;
          background: linear-gradient(105deg, #6d28d9 0%, #c026d3 38%, #db2777 64%, #0284c7 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .dark .gm-portfolio .gm-gradient-text {
          background-image: linear-gradient(105deg, #a78bfa, #e879f9 38%, #f472b6 64%, #67e8f9);
        }

        .gm-portfolio .gm-hero {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
          background:
            radial-gradient(ellipse at 50% 0%, rgba(139,92,246,.12), transparent 65%),
            linear-gradient(180deg, transparent 75%, var(--page));
        }

        .gm-portfolio .gm-hero-grid {
          position: absolute;
          inset: 0;
          opacity: .45;
          pointer-events: none;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at 50% 20%, black, transparent 72%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 20%, black, transparent 72%);
        }

        .gm-portfolio .gm-orb {
          position: absolute;
          pointer-events: none;
          width: clamp(160px, 28vw, 350px);
          aspect-ratio: 1;
          border-radius: 50%;
          filter: blur(55px);
          opacity: .22;
          animation: gm-float 12s ease-in-out infinite alternate;
        }

        .gm-portfolio .gm-orb-one { background: #a78bfa; left: -10%; top: 8%; }
        .gm-portfolio .gm-orb-two { background: #22d3ee; right: -9%; top: 25%; animation-delay: -4s; }
        .gm-portfolio .gm-orb-three { background: #f9a8d4; left: 42%; bottom: -25%; animation-delay: -8s; }

        .gm-portfolio .gm-hero-inner { padding-block: clamp(64px, 8vw, 108px); }
        .gm-portfolio .gm-hero-content { position: relative; display: flex; flex-direction: column; align-items: center; text-align: center; min-width: 0; }
        .gm-portfolio .gm-avatar-wrap { position: relative; width: 112px; height: 112px; margin-bottom: 52px; }

        .gm-portfolio .gm-avatar-ring {
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          background: conic-gradient(#8b5cf6, #ec4899, #22d3ee, #8b5cf6);
          box-shadow: 0 0 40px rgba(139,92,246,.22);
          animation: gm-spin 14s linear infinite;
        }

        .gm-portfolio .gm-avatar {
          position: relative;
          display: block;
          width: 112px;
          height: 112px;
          object-fit: cover;
          border: 5px solid var(--surface);
          border-radius: 50%;
        }

        .gm-portfolio .gm-availability {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 13px;
          border: 1px solid rgba(16,185,129,.22);
          border-radius: 999px;
          background: var(--surface);
          color: #047857;
          box-shadow: 0 6px 22px rgba(16,185,129,.09);
          font-size: 11px;
          font-weight: 650;
          white-space: nowrap;
        }

        .dark .gm-portfolio .gm-availability { color: #6ee7b7; }
        .gm-portfolio .gm-status-dot { width: 8px; height: 8px; flex-shrink: 0; border-radius: 50%; background: #10b981; box-shadow: 0 0 0 4px rgba(16,185,129,.12); animation: gm-pulse 2.5s ease-in-out infinite; }

        .gm-portfolio .gm-hero-title {
          max-width: 100%;
          margin: 12px 0 0;
          font-size: clamp(2.3rem, 6.5vw, 4.8rem);
          font-weight: 800;
          letter-spacing: -.055em;
          line-height: 1.12;
          overflow-wrap: anywhere;
        }

        .gm-portfolio .gm-hero-subtitle {
          display: block;
          margin-top: 18px;
          color: var(--text);
          font-size: clamp(1rem, 2.55vw, 1.9rem);
          font-weight: 550;
          letter-spacing: -.025em;
          line-height: 1.5;
        }

        .gm-portfolio .gm-hero-description {
          width: 100%;
          max-width: 850px;
          margin: 24px auto 0;
          color: var(--muted);
          font-size: clamp(.875rem, 1.5vw, 1.05rem);
          line-height: 1.9;
          overflow-wrap: anywhere;
        }

        .gm-portfolio .gm-hero-actions { display: flex; flex-wrap: wrap; justify-content: center; width: 100%; gap: 10px; margin-top: 30px; }

        .gm-portfolio .gm-button {
          min-width: 0;
          min-height: 46px;
          padding: 11px 18px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          border: 1px solid var(--border);
          border-radius: 13px;
          background: var(--surface);
          color: var(--text);
          box-shadow: 0 3px 10px rgba(25,35,60,.025);
          font-size: 14px;
          font-weight: 650;
          text-decoration: none;
          transition: transform .25s, box-shadow .25s, border-color .25s;
        }

        .gm-portfolio .gm-button svg { width: 18px; height: 18px; flex-shrink: 0; }
        .gm-portfolio .gm-button-primary { background: linear-gradient(120deg, var(--a), var(--b)); border-color: transparent; color: #fff; box-shadow: 0 8px 22px rgba(var(--rgb), .22); }
        .gm-portfolio .gm-button-blue { background: linear-gradient(120deg, #2563eb, #087eab); color: #fff; border-color: transparent; box-shadow: 0 8px 22px rgba(37,99,235,.18); }
        .gm-portfolio .gm-button-soft { background: rgba(var(--rgb), .075); border-color: rgba(var(--rgb), .16); }

        .gm-portfolio .gm-hero-meta { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 12px 22px; margin-top: 26px; color: var(--muted); font-size: 13px; }
        .gm-portfolio .gm-hero-meta span { display: inline-flex; align-items: center; justify-content: center; gap: 7px; }
        .gm-portfolio .gm-hero-meta svg { height: 15px; width: 15px; flex-shrink: 0; color: #8b5cf6; }

        .gm-portfolio .gm-eyebrow { font-size: 12px; font-weight: 750; text-transform: uppercase; letter-spacing: .2em; color: #7c3aed; }
        .dark .gm-portfolio .gm-eyebrow { color: #c4b5fd; }
        .gm-portfolio .gm-about-title { margin-top: 12px; font-size: clamp(1.6rem, 3.5vw, 2.6rem); font-weight: 750; letter-spacing: -.045em; line-height: 1.2; }
        .gm-portfolio .gm-section-description { margin-top: 15px; max-width: 680px; color: var(--muted); font-size: 15px; line-height: 1.8; }

        .gm-portfolio .gm-card {
          position: relative;
          min-width: 0;
          border: 1px solid var(--border);
          border-radius: 23px;
          background:
            radial-gradient(ellipse at 100% 0%, rgba(var(--rgb), .075), transparent 60%),
            var(--surface);
          box-shadow: var(--shadow);
          transition: border-color .3s, box-shadow .3s;
        }

        .gm-portfolio .gm-padded { padding: clamp(20px, 2.2vw, 28px); }
        .gm-portfolio .gm-card h3 { font-size: 18px; font-weight: 700; letter-spacing: -.025em; line-height: 1.4; overflow-wrap: anywhere; }
        .gm-portfolio .gm-copy { color: var(--muted); font-size: 14px; line-height: 1.85; overflow-wrap: anywhere; }
        .gm-portfolio .gm-card-number { display: inline-block; margin-bottom: 20px; font-size: 32px; font-weight: 800; letter-spacing: -.06em; color: var(--a); opacity: .8; }
        .dark .gm-portfolio .gm-card-number { color: #c4b5fd; }

        .gm-portfolio .gm-badges { display: flex; flex-wrap: wrap; gap: 8px; min-width: 0; }
        .gm-portfolio .gm-badge { display: inline-flex; align-items: center; gap: 7px; min-width: 0; max-width: 100%; padding: 7px 10px; border: 1px solid var(--border); border-radius: 11px; background: var(--surface); color: var(--text); font-size: 12px; line-height: 1.5; font-weight: 550; transition: transform .25s, border-color .25s, box-shadow .25s; }
        .gm-portfolio .gm-badge span { min-width: 0; overflow-wrap: anywhere; }

        .gm-portfolio .gm-ai-panel { overflow: hidden; padding-block: 30px; }
        .gm-portfolio .gm-ai-panel .gm-badges { position: relative; z-index: 1; }
        .gm-portfolio .gm-ai-decoration { position: absolute; width: 140px; height: 140px; right: -15px; top: -24px; color: var(--a); opacity: .07; pointer-events: none; }

        .gm-portfolio .gm-project-card { display: flex; flex-direction: column; overflow: hidden; }
        .gm-portfolio .gm-project-image { position: relative; width: 100%; aspect-ratio: 16/10; overflow: hidden; background: var(--surface-soft); }
        .gm-portfolio .gm-image-shade { position: absolute; inset: 0; pointer-events: none; background: linear-gradient(0deg, rgba(4,9,24,.6), transparent 45%); }
        .gm-portfolio .gm-project-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: #fff; background: radial-gradient(circle at 25% 25%, rgba(255,255,255,.2), transparent 45%), linear-gradient(135deg, var(--a), var(--b)); font-weight: 650; }
        .gm-portfolio .gm-project-body { flex: 1; display: flex; flex-direction: column; min-width: 0; padding: 22px; border-top: 3px solid var(--a); }
        .gm-portfolio .gm-project-body h3 { font-size: 20px; }
        .gm-portfolio .gm-project-links { display: flex; flex-wrap: wrap; gap: 9px; margin-top: auto; padding-top: 22px; }
        .gm-portfolio .gm-project-link { padding: 9px 15px; min-height: 44px; font-size: 13px; }

        .gm-portfolio .gm-carousel-arrow { position: absolute; top: 50%; transform: translateY(-50%); display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; padding: 0; border: 1px solid rgba(255,255,255,.25); border-radius: 50%; background: rgba(8,14,30,.6); color: white; backdrop-filter: blur(8px); cursor: pointer; transition: background .2s; }
        .gm-portfolio .gm-carousel-arrow svg { width: 20px; height: 20px; }
        .gm-portfolio .gm-carousel-previous { left: 10px; }
        .gm-portfolio .gm-carousel-next { right: 10px; }
        .gm-portfolio .gm-image-counter { position: absolute; top: 10px; right: 10px; border: 1px solid rgba(255,255,255,.2); border-radius: 999px; background: rgba(8,14,30,.65); color: white; backdrop-filter: blur(8px); padding: 4px 9px; font-size: 11px; font-weight: 600; }

        .gm-portfolio .gm-carousel-dots { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; max-width: calc(100% - 5rem); gap: 2px; padding: 2px 5px; border-radius: 999px; background: rgba(8,14,30,.6); backdrop-filter: blur(8px); overflow-x: auto; scrollbar-width: none; }
        .gm-portfolio .gm-carousel-dots::-webkit-scrollbar { display: none; }
        .gm-portfolio .gm-carousel-dots button { display: flex; align-items: center; justify-content: center; flex: 0 0 26px; width: 26px; height: 28px; padding: 0; border: 0; border-radius: 999px; background: transparent; cursor: pointer; }
        .gm-portfolio .gm-carousel-dots span { display: block; width: 6px; height: 6px; border-radius: 999px; background: rgba(255,255,255,.55); transition: width .25s, background .25s; }
        .gm-portfolio .gm-carousel-dots .is-active { width: 20px; background: white; }

        .gm-portfolio .gm-period { display: inline-flex; margin-top: 12px; padding: 5px 10px; border-radius: 8px; background: rgba(var(--rgb), .09); color: var(--text); font-size: 12px; font-weight: 600; }
        .gm-portfolio .gm-experience-list { list-style: none; margin: 20px 0 0; padding: 0; display: grid; gap: 11px; }
        .gm-portfolio .gm-experience-list li { display: flex; align-items: flex-start; gap: 10px; color: var(--muted); font-size: 14px; line-height: 1.8; overflow-wrap: anywhere; }
        .gm-portfolio .gm-experience-list li > span { width: 6px; height: 6px; margin-top: 9px; flex-shrink: 0; border-radius: 50%; background: linear-gradient(135deg, var(--a), var(--b)); }

        .gm-portfolio .gm-language { display: inline-flex; align-items: center; gap: 10px; min-height: 45px; padding: 10px 18px; border: 1px solid rgba(var(--rgb), .2); border-radius: 14px; background: linear-gradient(125deg, rgba(var(--rgb), .08), transparent), var(--surface); font-size: 14px; font-weight: 650; box-shadow: var(--shadow); transition: transform .25s; }
        .gm-portfolio .gm-language > span { width: 8px; height: 8px; border-radius: 50%; background: var(--a); }

        .gm-portfolio .gm-contact-panel { padding: clamp(20px, 4vw, 44px); overflow: hidden; }
        .gm-portfolio .gm-contact-glow { position: absolute; top: -150px; right: -120px; width: 360px; height: 360px; pointer-events: none; border-radius: 50%; background: radial-gradient(circle, rgba(236,72,153,.13), transparent 70%); }
        .gm-portfolio .gm-contact-panel .gm-contact-title { font-size: clamp(1.35rem, 3vw, 2rem); letter-spacing: -.04em; }
        .gm-portfolio .gm-contact-description { max-width: 740px; margin-top: 14px; margin-bottom: 26px; }
        .gm-portfolio .gm-contact-link { display: flex; align-items: center; min-width: 0; min-height: 64px; gap: 13px; padding: 12px 16px; border: 1px solid var(--border); border-radius: 15px; background: var(--surface); color: var(--text); text-decoration: none; font-size: 14px; font-weight: 550; transition: transform .25s, border-color .25s, box-shadow .25s; }
        .gm-portfolio .gm-contact-icon { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 36px; height: 36px; border-radius: 11px; background: rgba(var(--rgb), .07); }
        .gm-portfolio .gm-contact-icon svg { transition: transform .25s; }
        .gm-portfolio .gm-contact-status { display: flex; align-items: center; gap: 12px; margin-top: 25px; color: #047857; font-size: 14px; font-weight: 600; line-height: 1.7; }
        .dark .gm-portfolio .gm-contact-status { color: #6ee7b7; }

        .gm-portfolio .gm-button:focus-visible,
        .gm-portfolio .gm-contact-link:focus-visible {
          outline: 3px solid #8b5cf6;
          outline-offset: 4px;
        }

        .gm-portfolio .gm-carousel-arrow:focus-visible,
        .gm-portfolio .gm-carousel-dots button:focus-visible {
          outline: 2px solid white;
          outline-offset: -3px;
        }

        @media (hover: hover) {
          .gm-portfolio .gm-card:hover { border-color: rgba(var(--rgb), .38); box-shadow: 0 20px 50px rgba(var(--rgb), .11); }
          .gm-portfolio .gm-button:hover { transform: translateY(-3px); border-color: rgba(var(--rgb), .35); box-shadow: 0 12px 24px rgba(var(--rgb), .14); }
          .gm-portfolio .gm-badge:hover { transform: translateY(-2px); border-color: rgba(var(--rgb), .35); box-shadow: 0 5px 12px rgba(var(--rgb), .08); }
          .gm-portfolio .gm-language:hover { transform: translateY(-3px); }
          .gm-portfolio .gm-contact-link:hover { transform: translateY(-3px); border-color: rgba(var(--rgb), .4); box-shadow: 0 10px 22px rgba(var(--rgb), .09); }
          .gm-portfolio .gm-contact-link:hover svg { transform: scale(1.1); }
          .gm-portfolio .gm-carousel-arrow:hover { background: rgba(8,14,30,.85); }
        }

        @media (min-width: 640px) {
          .gm-portfolio .gm-project-image { aspect-ratio: 16/9; }
        }

        @media (min-width: 1024px) {
          .gm-portfolio .gm-project-image { aspect-ratio: auto; height: 208px; }
        }

        @media (max-width: 639px) {
          .gm-portfolio .gm-section-heading { gap: 11px; margin-bottom: 22px; }
          .gm-portfolio .gm-heading-line { display: none; }
          .gm-portfolio .gm-section-heading > .gm-icon-box { width: 40px; height: 40px; border-radius: 13px; }
          .gm-portfolio .gm-hero-actions { display: grid; grid-template-columns: 1fr 1fr; }
          .gm-portfolio .gm-hero-actions > :first-child { grid-column: 1 / -1; }
          .gm-portfolio .gm-hero-actions .gm-button { padding-inline: 10px; font-size: 13px; }
          .gm-portfolio .gm-hero-meta { flex-direction: column; font-size: 12px; }
          .gm-portfolio .gm-card { border-radius: 20px; }
          .gm-portfolio .gm-project-body { padding: 20px; }
          .gm-portfolio .gm-project-link { flex: 1; }
          .gm-portfolio .gm-contact-link { padding-inline: 12px; font-size: 13px; }
          .gm-portfolio .gm-contact-status { align-items: flex-start; font-size: 13px; }
          .gm-portfolio .gm-contact-status .gm-status-dot { margin-top: 7px; }
        }

        @keyframes gm-float {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(22px, -25px, 0); }
        }
        @keyframes gm-spin { to { transform: rotate(360deg); } }
        @keyframes gm-pulse {
          50% { box-shadow: 0 0 0 7px rgba(16,185,129,.05); }
        }

        @media (prefers-reduced-motion: reduce) {
          .gm-portfolio .gm-orb,
          .gm-portfolio .gm-avatar-ring,
          .gm-portfolio .gm-status-dot { animation: none; }

          .gm-portfolio .gm-card,
          .gm-portfolio .gm-button,
          .gm-portfolio .gm-badge,
          .gm-portfolio .gm-language,
          .gm-portfolio .gm-contact-link,
          .gm-portfolio .gm-contact-icon svg,
          .gm-portfolio .gm-project-image img,
          .gm-portfolio .gm-carousel-dots span { transition: none; }

          .gm-portfolio .gm-button:hover,
          .gm-portfolio .gm-badge:hover,
          .gm-portfolio .gm-language:hover,
          .gm-portfolio .gm-contact-link:hover,
          .gm-portfolio .gm-contact-link:hover svg { transform: none; }
        }
      `}</style>
    </div>
  );
}