"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Image from "next/image";

const CLIENTS_REVIEWS = [
  {
    client: "Aiden Smith",
    rating: 5,
    feedback:
      "Delivered the project on time with clean, efficient code. Very professional.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    client: "Olivia Brown",
    rating: 5,
    feedback:
      "Extremely responsive and detail-oriented. The final product exceeded expectations.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    client: "Liam Johnson",
    rating: 5,
    feedback:
      "Handled complex backend APIs and frontend integration flawlessly. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    client: "Sophia Davis",
    rating: 5,
    feedback:
      "Fast, professional, and creative. Delivered a high-quality solution for our platform.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    client: "Noah Wilson",
    rating: 5,
    feedback:
      "Great communication, efficient workflow, and the project was delivered perfectly.",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export default function ClientsReviews() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const stopsRef = useRef<number[]>([0]);
  const targetIndexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopCount, setStopCount] = useState(1);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let frame = 0;

    const updateIndex = () => {
      const stops = stopsRef.current;
      const nearest = stops.reduce(
        (best, position, index) =>
          Math.abs(position - slider.scrollLeft) <
          Math.abs(stops[best] - slider.scrollLeft)
            ? index
            : best,
        0
      );

      setCurrentIndex(nearest);
    };

    const measure = () => {
      const cards = Array.from(
        slider.querySelectorAll<HTMLElement>(".gm-review-card")
      );
      const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
      const firstOffset = cards[0]?.offsetLeft ?? 0;
      const stops: number[] = [];

      cards.forEach((card) => {
        const position = Math.min(card.offsetLeft - firstOffset, maxScroll);
        if (!stops.length || Math.abs(position - stops[stops.length - 1]) > 2) {
          stops.push(position);
        }
      });

      stopsRef.current = stops.length ? stops : [0];
      setStopCount(stopsRef.current.length);
      targetIndexRef.current = Math.min(
        targetIndexRef.current,
        stopsRef.current.length - 1
      );
      updateIndex();
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateIndex);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(slider);
    slider.querySelectorAll(".gm-review-card").forEach((card) => {
      observer.observe(card);
    });

    slider.addEventListener("scroll", onScroll, { passive: true });
    measure();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      slider.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const stops = stopsRef.current;
    const next = (index + stops.length) % stops.length;

    targetIndexRef.current = next;

    sliderRef.current?.scrollTo({
      left: stops[next],
      behavior: shouldReduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <section
      id="reviews"
      className="gm-reviews"
      aria-labelledby="gm-reviews-heading"
    >
      <div className="gm-reviews-inner">
        <div className="gm-reviews-heading">
          <div className="gm-reviews-title">
            <span className="gm-reviews-heading-icon">
              <FaQuoteLeft aria-hidden="true" />
            </span>
            <h2 id="gm-reviews-heading">Clients Reviews</h2>
          </div>

          <div className="gm-reviews-controls">
            <button
              type="button"
              onClick={() => scrollToIndex(targetIndexRef.current - 1)}
              disabled={stopCount <= 1}
              aria-label="Previous reviews"
              aria-controls="gm-reviews-slider"
            >
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(targetIndexRef.current + 1)}
              disabled={stopCount <= 1}
              aria-label="Next reviews"
              aria-controls="gm-reviews-slider"
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          id="gm-reviews-slider"
          className="gm-reviews-slider"
          role="region"
          aria-label="Client reviews carousel"
          tabIndex={0}
          onPointerDown={() => {
            targetIndexRef.current = currentIndex;
          }}
          onPointerUp={() => {
            targetIndexRef.current = currentIndex;
          }}
          onScroll={() => {
            // Keep the next button aligned with native swiping.
            const slider = sliderRef.current;
            if (!slider) return;

            const stops = stopsRef.current;
            const target = stops[targetIndexRef.current];

            if (Math.abs(slider.scrollLeft - target) < 2) {
              targetIndexRef.current = stops.indexOf(target);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              scrollToIndex(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
        >
          {CLIENTS_REVIEWS.map((review, index) => (
            <article
              key={review.client}
              className={`gm-review-card gm-review-tone-${index % 4}`}
              aria-label={`Review ${index + 1} of ${CLIENTS_REVIEWS.length}`}
            >
              <motion.div
                className="gm-review-content"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
              >
                <FaQuoteLeft className="gm-review-quote" aria-hidden="true" />

                <div
                  className="gm-review-stars"
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }, (_, starIndex) => (
                    <FaStar key={starIndex} aria-hidden="true" />
                  ))}
                </div>

                <blockquote className="gm-review-feedback">
                  {review.feedback}
                </blockquote>

                <div className="gm-review-client">
                  <span className="gm-review-avatar">
                    <Image
                      src={review.avatar}
                      alt={review.client}
                      width={52}
                      height={52}
                      className="gm-review-photo"
                    />
                  </span>

                  <h3>{review.client}</h3>
                </div>
              </motion.div>
            </article>
          ))}
        </div>

        {stopCount > 1 && (
          <div className="gm-reviews-dots" aria-label="Review carousel positions">
            {Array.from({ length: stopCount }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to review position ${index + 1}`}
                aria-current={currentIndex === index ? "true" : undefined}
                aria-controls="gm-reviews-slider"
              >
                <span />
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .gm-reviews {
          --reviews-text: #172039;
          --reviews-muted: #5c667e;
          --reviews-surface: rgba(255, 255, 255, .8);
          --reviews-border: rgba(124, 58, 237, .15);
          position: relative;
          width: 100%;
          padding-block: clamp(40px, 6vw, 76px);
          scroll-margin-top: 96px;
          color: var(--reviews-text);
          background:
            radial-gradient(ellipse at 5% 40%, rgba(139,92,246,.07), transparent 55%),
            radial-gradient(ellipse at 95% 65%, rgba(6,182,212,.07), transparent 55%);
          -webkit-tap-highlight-color: transparent;
        }

        .dark .gm-reviews {
          --reviews-text: #f0f4ff;
          --reviews-muted: #b0bad0;
          --reviews-surface: rgba(17, 25, 43, .86);
          --reviews-border: rgba(167, 139, 250, .19);
        }

        .gm-reviews *,
        .gm-reviews *::before,
        .gm-reviews *::after { box-sizing: border-box; }

        .gm-reviews .gm-reviews-inner {
          width: min(100%, 1184px);
          margin-inline: auto;
          padding-inline: clamp(16px, 4vw, 32px);
        }

        .gm-reviews .gm-reviews-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
        }

        .gm-reviews .gm-reviews-title {
          display: flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .gm-reviews .gm-reviews-title h2 {
          margin: 0;
          font-size: clamp(1.25rem, 2.6vw, 2rem);
          line-height: 1.25;
          font-weight: 750;
          letter-spacing: -.035em;
        }

        .gm-reviews .gm-reviews-heading-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 46px;
          height: 46px;
          border-radius: 15px;
          background: linear-gradient(135deg, #7c3aed, #db2777);
          color: white;
          box-shadow: 0 8px 20px rgba(124,58,237,.2);
        }

        .gm-reviews .gm-reviews-heading-icon svg { width: 19px; height: 19px; }
        .gm-reviews .gm-reviews-controls { display: flex; flex-shrink: 0; gap: 8px; }

        .gm-reviews .gm-reviews-controls button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 1px solid var(--reviews-border);
          border-radius: 14px;
          background: var(--reviews-surface);
          color: var(--reviews-text);
          cursor: pointer;
          transition: background .2s, color .2s, box-shadow .2s;
        }

        .gm-reviews .gm-reviews-controls svg { width: 22px; height: 22px; }
        .gm-reviews .gm-reviews-controls button:disabled { opacity: .4; cursor: default; }

        .gm-reviews .gm-reviews-slider {
          position: relative;
          display: flex;
          align-items: stretch;
          gap: 20px;
          overflow-x: auto;
          padding-block: 8px 18px;
          scroll-snap-type: x mandatory;
          overscroll-behavior-x: contain;
          scrollbar-width: none;
        }

        .gm-reviews .gm-reviews-slider::-webkit-scrollbar { display: none; }

        .gm-reviews .gm-review-card {
          --review-rgb: 124,58,237;
          position: relative;
          flex: 0 0 calc((100% - 40px) / 3);
          min-width: 0;
          overflow: hidden;
          scroll-snap-align: start;
          border: 1px solid rgba(var(--review-rgb), .2);
          border-radius: 23px;
          background:
            radial-gradient(ellipse at 100% 0%, rgba(var(--review-rgb), .11), transparent 65%),
            var(--reviews-surface);
          box-shadow: 0 8px 20px rgba(40,35,85,.045), inset 0 1px 0 rgba(255,255,255,.15);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: border-color .25s, box-shadow .25s;
        }

        .gm-reviews .gm-review-tone-1 { --review-rgb: 2,132,199; }
        .gm-reviews .gm-review-tone-2 { --review-rgb: 219,39,119; }
        .gm-reviews .gm-review-tone-3 { --review-rgb: 5,150,105; }

        .gm-reviews .gm-review-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 22px;
          right: 22px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(var(--review-rgb), .65), transparent);
        }

        .gm-reviews .gm-review-content {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 26px;
        }

        .gm-reviews .gm-review-quote {
          position: absolute;
          top: 22px;
          right: 22px;
          width: 35px;
          height: 35px;
          color: rgb(var(--review-rgb));
          opacity: .13;
          pointer-events: none;
        }

        .gm-reviews .gm-review-stars {
          display: flex;
          gap: 4px;
          padding-right: 35px;
          color: #d99a08;
        }

        .dark .gm-reviews .gm-review-stars { color: #fbbf24; }
        .gm-reviews .gm-review-stars svg { width: 15px; height: 15px; }

        .gm-reviews .gm-review-feedback {
          flex: 1;
          margin: 24px 0;
          color: var(--reviews-text);
          font-size: 15px;
          line-height: 1.9;
          overflow-wrap: anywhere;
        }

        .gm-reviews .gm-review-client {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
          padding-top: 18px;
          border-top: 1px solid rgba(var(--review-rgb), .13);
        }

        .gm-reviews .gm-review-avatar {
          display: block;
          flex-shrink: 0;
          padding: 3px;
          border: 1px solid rgba(var(--review-rgb), .22);
          border-radius: 50%;
          background: rgba(var(--review-rgb), .08);
        }

        .gm-reviews .gm-review-photo {
          display: block;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          object-fit: cover;
        }

        .gm-reviews .gm-review-client h3 {
          margin: 0;
          min-width: 0;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -.02em;
          overflow-wrap: anywhere;
        }

        .gm-reviews .gm-reviews-dots {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 2px;
        }

        .gm-reviews .gm-reviews-dots button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 0;
          border-radius: 12px;
          background: transparent;
          cursor: pointer;
        }

        .gm-reviews .gm-reviews-dots span {
          width: 7px;
          height: 7px;
          border-radius: 99px;
          background: rgba(139,92,246,.28);
          transition: width .2s, background .2s;
        }

        .gm-reviews .gm-reviews-dots [aria-current="true"] span {
          width: 25px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
        }

        .gm-reviews button:focus-visible,
        .gm-reviews .gm-reviews-slider:focus-visible {
          outline: 3px solid #a78bfa;
          outline-offset: 3px;
        }

        @media (hover: hover) {
          .gm-reviews .gm-review-card:hover {
            border-color: rgba(var(--review-rgb), .4);
            box-shadow: 0 10px 24px rgba(var(--review-rgb), .1);
          }

          .gm-reviews .gm-reviews-controls button:not(:disabled):hover {
            background: #7c3aed;
            color: white;
            box-shadow: 0 6px 16px rgba(124,58,237,.2);
          }
        }

        @media (max-width: 1023px) {
          .gm-reviews .gm-review-card { flex-basis: calc((100% - 20px) / 2); }
        }

        @media (max-width: 639px) {
          .gm-reviews .gm-review-card { flex-basis: 100%; border-radius: 20px; }
          .gm-reviews .gm-review-content { padding: 22px; }
          .gm-reviews .gm-reviews-heading { gap: 10px; }
          .gm-reviews .gm-reviews-title { gap: 10px; }
          .gm-reviews .gm-reviews-heading-icon { width: 40px; height: 40px; border-radius: 13px; }
          .gm-reviews .gm-reviews-controls { gap: 6px; }
          .gm-reviews .gm-review-feedback { font-size: 14px; }
        }

        @media (max-width: 359px) {
          .gm-reviews .gm-reviews-heading { flex-wrap: wrap; }
          .gm-reviews .gm-reviews-controls { margin-left: auto; }
        }

        @media (prefers-reduced-motion: reduce) {
          .gm-reviews .gm-review-card,
          .gm-reviews .gm-reviews-controls button,
          .gm-reviews .gm-reviews-dots span { transition: none; }
        }
      `}</style>
    </section>
  );
}