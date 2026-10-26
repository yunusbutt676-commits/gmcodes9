import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  FaXTwitter, FaInstagram, FaFacebook, FaTiktok, FaThreads,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/yunusbutt676-commits",
    icon: FaGithub,
    brand: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ghulam-mustafa-620142380/",
    icon: FaLinkedin,
    brand: "linkedin",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923045478602",
    icon: FaWhatsapp,
    brand: "whatsapp",
  },
  {
    name: "X / Twitter",
    href: "https://x.com/Mustafa06833246",
    icon: FaXTwitter,
    brand: "twitter",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gmcodes9?igsh=Y3g4MHdqZnY0eHQw",
    icon: FaInstagram,
    brand: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1aJbL575Tr/",
    icon: FaFacebook,
    brand: "facebook",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@gmcodes9?_r=1&_t=ZP-96lVlFKd1yh",
    icon: FaTiktok,
    brand: "tiktok",
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@gmcodes9",
    icon: FaThreads,
    brand: "threads",
  },
];

export default function Footer() {
  return (
    <footer className="gm-footer">
      <div className="gm-footer-inner">
        <div className="gm-footer-glass">
          <div className="gm-footer-copy">
            <span className="gm-footer-copyright">
              © {new Date().getFullYear()} Ghulam Mustafa. All rights reserved.
            </span>

            <span className="gm-footer-stack">
              Full Stack Engineer • React • Next.js • Node.js • Python • Laravel • AI/ML
            </span>
          </div>

          <nav className="gm-footer-socials" aria-label="Social media links">
            {socialLinks.map(({ name, href, icon: Icon, brand }) => (
              <a
                key={brand}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} — opens in a new tab`}
                title={name}
                className={`gm-footer-social gm-social-${brand}`}
              >
                <Icon aria-hidden="true" focusable="false" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      <style>{`
        .gm-footer {
          --footer-text: #263149;
          --footer-muted: #647089;
          position: relative;
          width: 100%;
          color: var(--footer-text);
          background:
            radial-gradient(
              ellipse at 15% 100%,
              rgba(167, 139, 250, .15),
              transparent 60%
            ),
            radial-gradient(
              ellipse at 90% 0%,
              rgba(103, 232, 249, .12),
              transparent 60%
            ),
            #f8f9ff;
          padding-bottom: env(safe-area-inset-bottom, 0px);
          border-top: 1px solid rgba(139, 92, 246, .12);
          -webkit-tap-highlight-color: transparent;
        }

        .dark .gm-footer {
          --footer-text: #eef2ff;
          --footer-muted: #b0bad0;
          background:
            radial-gradient(
              ellipse at 15% 100%,
              rgba(139, 92, 246, .12),
              transparent 60%
            ),
            radial-gradient(
              ellipse at 90% 0%,
              rgba(6, 182, 212, .08),
              transparent 60%
            ),
            #090e1c;
          border-top-color: rgba(167, 139, 250, .16);
        }

        .gm-footer *,
        .gm-footer *::before,
        .gm-footer *::after {
          box-sizing: border-box;
        }

        .gm-footer .gm-footer-inner {
          width: min(100%, 1184px);
          margin-inline: auto;
          padding: 24px clamp(16px, 4vw, 32px);
        }

        .gm-footer .gm-footer-glass {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          min-width: 0;
          padding: 26px;
          border: 1px solid rgba(255, 255, 255, .9);
          border-radius: 24px;
          background: linear-gradient(
            130deg,
            rgba(255, 255, 255, .82),
            rgba(255, 255, 255, .55)
          );
          box-shadow:
            0 12px 36px rgba(59, 46, 107, .06),
            inset 0 1px 0 rgba(255, 255, 255, .95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .dark .gm-footer .gm-footer-glass {
          border-color: rgba(190, 200, 235, .16);
          background: linear-gradient(
            130deg,
            rgba(30, 40, 65, .82),
            rgba(17, 25, 43, .65)
          );
          box-shadow:
            0 12px 36px rgba(0, 0, 0, .18),
            inset 0 1px 0 rgba(255, 255, 255, .06);
        }

        .gm-footer .gm-footer-glass::before {
          content: "";
          position: absolute;
          top: -1px;
          left: 10%;
          right: 10%;
          height: 1px;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 92, 246, .6),
            rgba(236, 72, 153, .45),
            rgba(6, 182, 212, .6),
            transparent
          );
        }

        .gm-footer .gm-footer-copy {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
          flex: 1;
        }

        .gm-footer .gm-footer-copyright {
          font-size: 13px;
          font-weight: 600;
          line-height: 1.8;
          overflow-wrap: anywhere;
        }

        .gm-footer .gm-footer-stack {
          color: var(--footer-muted);
          font-size: 12px;
          line-height: 1.9;
          overflow-wrap: anywhere;
        }

        .gm-footer .gm-footer-socials {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          gap: 10px;
          min-width: 0;
        }

        .gm-footer .gm-footer-social {
          --brand-color: #000000;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 44px;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, .95);
          border-radius: 14px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, .96),
            rgba(230, 235, 246, .88)
          );
          color: #000000;
          box-shadow:
            0 4px 12px rgba(40, 48, 78, .07),
            inset 0 1px 0 #ffffff,
            inset 0 -1px 0 rgba(90, 105, 140, .07);
          text-decoration: none;
          touch-action: manipulation;
          transition:
            color .2s ease,
            transform .2s ease,
            border-color .2s ease,
            box-shadow .2s ease;
        }

        .dark .gm-footer .gm-footer-social {
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, .96),
            rgba(216, 225, 243, .93)
          );
          border-color: rgba(255, 255, 255, .7);
          box-shadow:
            0 5px 16px rgba(0, 0, 0, .18),
            inset 0 1px 0 rgba(255, 255, 255, .95);
        }

        .gm-footer .gm-footer-social svg {
          display: block;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          transition: filter .2s ease;
        }

        .gm-footer .gm-social-github { --brand-color: #181717; }
        .gm-footer .gm-social-linkedin { --brand-color: #0A66C2; }
        .gm-footer .gm-social-whatsapp { --brand-color: #25D366; }
        .gm-footer .gm-social-instagram { --brand-color: #E4405F; }
        .gm-footer .gm-social-facebook { --brand-color: #1877F2; }

        .gm-footer .gm-footer-social:focus-visible {
          color: var(--brand-color);
          outline: 3px solid #a78bfa;
          outline-offset: 4px;
          border-color: currentColor;
        }

        .gm-footer .gm-footer-social:active {
          color: var(--brand-color);
          transform: scale(.95);
        }

        .gm-footer .gm-social-tiktok:focus-visible svg,
        .gm-footer .gm-social-tiktok:active svg {
          filter:
            drop-shadow(-1px -1px 0 #25F4EE)
            drop-shadow(1px 1px 0 #FE2C55);
        }

        @media (hover: hover) {
          .gm-footer .gm-footer-social:hover {
            color: var(--brand-color);
            transform: translateY(-4px);
            border-color: currentColor;
            box-shadow:
              0 10px 20px rgba(124, 58, 237, .13),
              inset 0 1px 0 #ffffff;
          }

          .gm-footer .gm-social-tiktok:hover svg {
            filter:
              drop-shadow(-1px -1px 0 #25F4EE)
              drop-shadow(1px 1px 0 #FE2C55);
          }
        }

        @media (max-width: 1023px) {
          .gm-footer .gm-footer-glass {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }

          .gm-footer .gm-footer-copy {
            align-items: center;
            width: 100%;
          }

          .gm-footer .gm-footer-socials {
            width: 100%;
          }
        }

        @media (max-width: 639px) {
          .gm-footer .gm-footer-inner {
            padding-block: 18px;
          }

          .gm-footer .gm-footer-glass {
            padding: 22px 16px;
            border-radius: 20px;
          }

          .gm-footer .gm-footer-copyright {
            font-size: 12px;
          }

          .gm-footer .gm-footer-stack {
            max-width: 330px;
            font-size: 11px;
          }

          .gm-footer .gm-footer-socials {
            display: grid;
            grid-template-columns: repeat(4, 44px);
            gap: 12px;
          }
        }

        @media (max-width: 299px) {
          .gm-footer .gm-footer-socials {
            grid-template-columns: repeat(3, 44px);
            gap: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gm-footer .gm-footer-social,
          .gm-footer .gm-footer-social svg {
            transition: none;
          }

          .gm-footer .gm-footer-social:hover,
          .gm-footer .gm-footer-social:active {
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
}