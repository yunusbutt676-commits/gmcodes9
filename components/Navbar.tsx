"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Sparkles, Sun, Moon, Menu, X, ArrowUpRight,
} from "lucide-react";

const navLinks = [
  ["/#skills", "Skills"],
  ["/services", "Services"],
  ["/#projects", "Projects"],
  ["/#ai-ml", "AI/ML"],
  ["/#experience", "Experience"],
  ["/#education", "Education"],
  ["/#reviews", "Testimonials"],
  ["/#contact", "Contact"],
] as const;

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pendingSectionRef = useRef<string | null>(null);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const initialTheme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileMenuOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
  };

  const scrollAfterMenuCloses = () => {
    const id = pendingSectionRef.current;
    pendingSectionRef.current = null;

    if (!id) return;

    if (scrollFrameRef.current !== null) {
      cancelAnimationFrame(scrollFrameRef.current);
    }

    scrollFrameRef.current = requestAnimationFrame(() => {
      scrollFrameRef.current = null;

      const section = document.getElementById(id);
      if (!section) return;

      const headerHeight =
        headerRef.current?.getBoundingClientRect().height ?? 64;

      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        16;

      const hash = `#${id}`;

      if (window.location.hash !== hash) {
        window.history.pushState(
          window.history.state,
          "",
          `${window.location.pathname}${window.location.search}${hash}`
        );
      }

      window.scrollTo({
        top: Math.max(0, top),
        behavior: shouldReduceMotion ? "instant" : "smooth",
      });
    });
  };

  return (
    <header ref={headerRef} className="gm-navbar">
      <div className="gm-nav-inner">
        <a
          href="/#top"
          aria-label="Ghulam Mustafa home"
          onClick={() => setMobileMenuOpen(false)}
          className="gm-nav-brand"
        >
          <span className="gm-nav-avatar">
            <Image
              src="/omg.jpeg"
              alt="Ghulam Mustafa"
              width={40}
              height={40}
              priority
            />
          </span>

          <span className="gm-nav-name">Ghulam Mustafa</span>
          <Sparkles className="gm-nav-sparkle" aria-hidden="true" />
        </a>

        <div className="gm-nav-actions">
          <nav className="gm-nav-desktop" aria-label="Primary navigation">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="gm-nav-link">
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="gm-nav-button gm-theme-button"
          >
            <motion.span
              key={theme}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, rotate: -35, scale: 0.8 }
              }
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            >
              {theme === "dark" ? (
                <Sun aria-hidden="true" />
              ) : (
                <Moon aria-hidden="true" />
              )}
            </motion.span>
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className={`gm-nav-button gm-menu-button ${
              mobileMenuOpen ? "is-open" : ""
            }`}
          >
            {mobileMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence
        initial={false}
        onExitComplete={scrollAfterMenuCloses}
      >
        {mobileMenuOpen && (
          <motion.nav
            key="mobile-navigation"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="gm-nav-mobile"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.22,
              ease: "easeOut",
            }}
            onBlur={(event) => {
              if (
                event.relatedTarget instanceof Node &&
                !headerRef.current?.contains(event.relatedTarget)
              ) {
                setMobileMenuOpen(false);
              }
            }}
          >
            <div className="gm-mobile-scroll">
              <div className="gm-mobile-grid">
                {navLinks.map(([href, label], index) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(event) => {
                      if (
                        event.button !== 0 ||
                        event.metaKey ||
                        event.ctrlKey ||
                        event.shiftKey ||
                        event.altKey
                      ) {
                        return;
                      }

                      const id = href.startsWith("/#")
                        ? href.slice(2)
                        : null;

                      pendingSectionRef.current = null;

                      if (
                        window.location.pathname === "/" &&
                        id &&
                        document.getElementById(id)
                      ) {
                        event.preventDefault();
                        pendingSectionRef.current = id;
                      }

                      setMobileMenuOpen(false);
                    }}
                    className="gm-mobile-link"
                    initial={
                      shouldReduceMotion ? false : { opacity: 0, y: 8 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.2,
                      delay: shouldReduceMotion ? 0 : index * 0.025,
                    }}
                  >
                    <span className="gm-mobile-dot" aria-hidden="true" />
                    <span>{label}</span>
                    <ArrowUpRight
                      className="gm-mobile-arrow"
                      aria-hidden="true"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <style>{`
        .gm-navbar {
          --nav-text: #172039;
          --nav-muted: #59637b;
          --nav-surface: #ffffff;
          --nav-border: rgba(124, 58, 237, .13);
          position: sticky;
          top: 0;
          z-index: 50;
          width: 100%;
          color: var(--nav-text);
          background: rgba(255, 255, 255, .92);
          border-bottom: 1px solid var(--nav-border);
          box-shadow: 0 4px 24px rgba(45, 35, 90, .035);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: background-color .3s, border-color .3s, color .3s;
          -webkit-tap-highlight-color: transparent;
        }

        .dark .gm-navbar {
          --nav-text: #f0f4ff;
          --nav-muted: #b0bad0;
          --nav-surface: #11192b;
          --nav-border: rgba(167, 139, 250, .17);
          background: rgba(9, 14, 28, .94);
          box-shadow: 0 4px 24px rgba(0, 0, 0, .12);
        }

        .gm-navbar *,
        .gm-navbar *::before,
        .gm-navbar *::after {
          box-sizing: border-box;
        }

        .gm-navbar::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: -1px;
          left: 0;
          height: 1px;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 92, 246, .55),
            rgba(236, 72, 153, .4),
            rgba(6, 182, 212, .5),
            transparent
          );
        }

        .gm-navbar .gm-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: min(100%, 1184px);
          min-height: 68px;
          margin-inline: auto;
          padding-inline: clamp(14px, 4vw, 32px);
          padding-top: env(safe-area-inset-top, 0px);
        }

        .gm-navbar .gm-nav-brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          min-width: 0;
          min-height: 44px;
          border-radius: 12px;
          color: var(--nav-text);
          text-decoration: none;
        }

        .gm-navbar .gm-nav-avatar {
          display: block;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          padding: 2px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #ec4899, #22d3ee);
          box-shadow: 0 3px 12px rgba(139, 92, 246, .18);
        }

        .gm-navbar .gm-nav-avatar img {
          display: block;
          width: 40px;
          height: 40px;
          border: 2px solid var(--nav-surface);
          border-radius: 50%;
          object-fit: cover;
        }

        .gm-navbar .gm-nav-name {
          min-width: 0;
          overflow: hidden;
          font-size: 15px;
          font-weight: 750;
          letter-spacing: -.035em;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .gm-navbar .gm-nav-sparkle {
          flex-shrink: 0;
          width: 17px;
          height: 17px;
          color: #8b5cf6;
        }

        .dark .gm-navbar .gm-nav-sparkle {
          color: #c4b5fd;
        }

        .gm-navbar .gm-nav-actions {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 8px;
        }

        .gm-navbar .gm-nav-desktop {
          display: none;
          align-items: center;
          gap: 3px;
          margin-right: 8px;
        }

        .gm-navbar .gm-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 10px;
          border-radius: 10px;
          color: var(--nav-muted);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: color .2s, background-color .2s;
        }

        .gm-navbar .gm-nav-link::after {
          content: "";
          position: absolute;
          right: 10px;
          bottom: 5px;
          left: 10px;
          height: 2px;
          border-radius: 99px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }

        .gm-navbar .gm-nav-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 1px solid var(--nav-border);
          border-radius: 14px;
          background: var(--nav-surface);
          color: var(--nav-text);
          cursor: pointer;
          transition: background-color .2s, border-color .2s, box-shadow .2s;
        }

        .gm-navbar .gm-nav-button svg {
          width: 20px;
          height: 20px;
        }

        .gm-navbar .gm-theme-button > span {
          display: inline-flex;
        }

        .gm-navbar .gm-theme-button {
          color: #7c3aed;
          background: rgba(139, 92, 246, .07);
        }

        .dark .gm-navbar .gm-theme-button {
          color: #fcd34d;
          background: rgba(250, 204, 21, .07);
        }

        .gm-navbar .gm-menu-button.is-open {
          border-color: transparent;
          background: linear-gradient(135deg, #7c3aed, #db2777);
          color: #fff;
          box-shadow: 0 5px 16px rgba(124, 58, 237, .2);
        }

        .gm-navbar .gm-nav-mobile {
          overflow: hidden;
          background: var(--nav-surface);
        }

        .gm-navbar .gm-mobile-scroll {
          max-height: calc(100vh - 80px - env(safe-area-inset-top, 0px));
          max-height: calc(100dvh - 80px - env(safe-area-inset-top, 0px));
          overflow-y: auto;
          overscroll-behavior: contain;
          border-top: 1px solid var(--nav-border);
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }

        .gm-navbar .gm-mobile-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          width: min(100%, 1184px);
          margin-inline: auto;
          padding: 16px clamp(14px, 4vw, 32px) 20px;
        }

        .gm-navbar .gm-mobile-link {
          --link-rgb: 124, 58, 237;
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
          min-height: 54px;
          padding: 12px;
          border: 1px solid rgba(var(--link-rgb), .16);
          border-radius: 14px;
          background: linear-gradient(
            120deg,
            rgba(var(--link-rgb), .075),
            rgba(var(--link-rgb), .025)
          );
          color: var(--nav-text);
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: border-color .2s, box-shadow .2s;
        }

        .gm-navbar .gm-mobile-link:nth-child(4n + 2) {
          --link-rgb: 2, 132, 199;
        }

        .gm-navbar .gm-mobile-link:nth-child(4n + 3) {
          --link-rgb: 219, 39, 119;
        }

        .gm-navbar .gm-mobile-link:nth-child(4n + 4) {
          --link-rgb: 5, 150, 105;
        }

        .gm-navbar .gm-mobile-link > span:nth-child(2) {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .gm-navbar .gm-mobile-dot {
          flex-shrink: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgb(var(--link-rgb));
          box-shadow: 0 0 0 4px rgba(var(--link-rgb), .08);
        }

        .gm-navbar .gm-mobile-arrow {
          flex-shrink: 0;
          width: 15px;
          height: 15px;
          margin-left: auto;
          color: var(--nav-muted);
        }

        .gm-navbar a:focus-visible,
        .gm-navbar button:focus-visible {
          outline: 3px solid #a78bfa;
          outline-offset: 3px;
        }

        @media (hover: hover) {
          .gm-navbar .gm-nav-link:hover {
            color: var(--nav-text);
            background: rgba(139, 92, 246, .065);
          }

          .gm-navbar .gm-nav-link:hover::after {
            transform: scaleX(1);
          }

          .gm-navbar .gm-nav-button:hover {
            border-color: rgba(139, 92, 246, .4);
            box-shadow: 0 5px 15px rgba(139, 92, 246, .1);
          }

          .gm-navbar .gm-mobile-link:hover {
            border-color: rgba(var(--link-rgb), .4);
            box-shadow: 0 5px 16px rgba(var(--link-rgb), .08);
          }
        }

        @media (min-width: 1280px) {
          .gm-navbar .gm-nav-desktop {
            display: flex;
          }

          .gm-navbar .gm-menu-button,
          .gm-navbar .gm-nav-mobile {
            display: none;
          }
        }

        @media (max-width: 639px) {
          .gm-navbar .gm-nav-inner {
            min-height: 64px;
          }

          .gm-navbar .gm-nav-brand {
            gap: 8px;
          }

          .gm-navbar .gm-nav-name {
            font-size: 13px;
          }

          .gm-navbar .gm-nav-sparkle {
            display: none;
          }

          .gm-navbar .gm-nav-actions {
            gap: 6px;
          }
        }

        @media (max-width: 359px) {
          .gm-navbar .gm-nav-name {
            font-size: 12px;
          }

          .gm-navbar .gm-mobile-link {
            gap: 8px;
            padding-inline: 10px;
            font-size: 12px;
          }

          .gm-navbar .gm-mobile-arrow {
            display: none;
          }
        }

        @media (max-width: 299px) {
          .gm-navbar .gm-nav-name {
            display: none;
          }

          .gm-navbar .gm-mobile-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gm-navbar,
          .gm-navbar .gm-nav-link,
          .gm-navbar .gm-nav-link::after,
          .gm-navbar .gm-nav-button,
          .gm-navbar .gm-mobile-link {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}