"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Mic, ArrowUp, X, Sparkles, Volume2, MessageCircle,
} from "lucide-react";

type Msg = {
  role: "user" | "ai";
  text: string;
};

type RecognitionEvent = {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
};

type RecognitionInstance = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: RecognitionEvent) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  abort: () => void;
};

type VoiceWindow = Window & {
  SpeechRecognition?: new () => RecognitionInstance;
  webkitSpeechRecognition?: new () => RecognitionInstance;
};

const suggestions = [
  "Show my Projects",
  "Tell me About Skills",
  "What is Your Experience?",
  "Contact Details",
];

const SECTION_LABELS: Record<string, string> = {
  "#about-gmcodes9": "About Ghulam Mustafa",
  "#skills": "View Skills",
  "#projects": "View Projects",
  "#ai-ml": "View AI / ML Skills",
  "#experience": "View Experience",
  "#education": "View Education",
  "#reviews": "View Testimonials",
  "#contact": "View Contact Details",
};

const WEBSITE_LABELS: Record<string, string> = {
  "wa.me": "Open WhatsApp",
  "linkedin.com": "View LinkedIn",
  "instagram.com": "View Instagram",
  "facebook.com": "View Facebook",
  "tiktok.com": "View TikTok",
  "threads.com": "View Threads",
  "x.com": "View X / Twitter",
  "unionadd.com": "Visit Union Add",
  "apkimanzil.com": "Visit Apki Manzil",
};

// Only these supplied repositories can appear as source-code links.
// Union Add and Apki Manzil have live website links only.
const PUBLIC_REPOSITORIES = new Set([
  "mean-set",
  "mern-courses-management",
  "python-django",
  "advanced-api",
  "nexacart",
  "novalearn-ai",
  "flask-react",
  "ai_smart_assistant",
  "voice",
]);

function isAllowedGitHub(url: URL) {
  const parts = url.pathname.split("/").filter(Boolean);
  const owner = parts[0]?.toLowerCase();
  const repository = parts[1]?.toLowerCase().replace(/\.git$/, "");

  return (
    owner === "yunusbutt676-commits" &&
    (parts.length === 1 || Boolean(repository && PUBLIC_REPOSITORIES.has(repository)))
  );
}

function cleanReply(text: string) {
  return text
    .replace(/\r\n?/g, "\n")
    // Convert Markdown links into URLs for our safe link renderer.
    .replace(
      /\[([^\]]*)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|tel:[^\s)]+|\/Resume\.GM9\.pdf)\)/gi,
      "$2"
    )
    .replace(/https?:\/\/[^\s<>"`*]+/gi, (raw) => {
      const href = raw.replace(/[.,!?;:)\]}]+$/g, "");
      const suffix = raw.slice(href.length);

      try {
        const url = new URL(href);
        const host = url.hostname.toLowerCase().replace(/^www\./, "");

        if (host === "github.com" && !isAllowedGitHub(url)) return "";

        if (
          host === "gmcodes9.com" &&
          /^\/(?:Resume|Resume\.GM9)\.pdf$/i.test(url.pathname)
        ) {
          return `/Resume.GM9.pdf${suffix}`;
        }
      } catch {
        return raw;
      }

      return raw;
    })
    // Remove empty source-link labels left after a filtered URL.
    .split("\n")
    .filter((line) =>
      !/^(?:source(?:\s+code)?|code|github|repository)(?:\s+link)?\s*:?\s*$/i.test(
        line.replace(/[*_#]/g, "").replace(/^\s*[-•]\s*/, "").trim()
      )
    )
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function renderBold(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*)/g)
    .map((part, index) => {
      if (
        (part.startsWith("**") && part.endsWith("**")) ||
        (part.startsWith("__") && part.endsWith("__"))
      ) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }

      if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
        return <strong key={index}>{part.slice(1, -1)}</strong>;
      }

      // Hide unfinished formatting markers during the typing effect.
      return part.replace(/\*/g, "");
    });
}

function renderInline(text: string, streaming = false) {
  const parts = text.split(
    /(https?:\/\/[^\s<>"`*]+|mailto:[^\s<>"`*]+|tel:\+?[\d-]+|\/Resume\.GM9\.pdf)/gi
  );

  return parts.map((part, index) => {
    if (!/^(https?:\/\/|mailto:|tel:|\/Resume\.GM9\.pdf$)/i.test(part)) {
      return <span key={index}>{renderBold(part)}</span>;
    }

    // Wait until the URL has finished typing before making it clickable.
    if (
      streaming &&
      index === parts.length - 2 &&
      parts[parts.length - 1] === ""
    ) {
      return null;
    }

    let href = part.replace(/[.,!?;:)\]}]+$/g, "");
    const trailing = part.slice(href.length);
    let label = href;
    let newTab = false;

    if (href.toLowerCase() === "/resume.gm9.pdf") {
      href = "/Resume.GM9.pdf";
      label = "Resume.GM9.pdf";
      newTab = true;
    } else {
      try {
        const url = new URL(href);

        if (url.protocol === "mailto:") {
          label = "Email GM";
        } else if (url.protocol === "tel:") {
          label = "Call GM";
        } else if (url.protocol === "https:" || url.protocol === "http:") {
          if (url.username || url.password) return null;

          const host = url.hostname.toLowerCase().replace(/^www\./, "");
          const path = url.pathname.toLowerCase();
          newTab = true;

          if (host === "github.com") {
            if (!isAllowedGitHub(url)) return null;

            label = url.pathname.split("/").filter(Boolean).length > 1
              ? "View Source Code"
              : "View GitHub";
          } else if (host === "gmcodes9.com") {
            if (/^\/(?:Resume|Resume\.GM9)\.pdf$/i.test(path)) {
              href = "/Resume.GM9.pdf";
              label = "Resume.GM9.pdf";
            } else {
              label = path === "/services" || path === "/services/"
                ? "View Services"
                : SECTION_LABELS[url.hash] || "Visit GmCodes9";
            }
          } else {
            label = WEBSITE_LABELS[host] || `Visit ${host}`;
          }
        } else {
          return null;
        }
      } catch {
        return <span key={index}>{renderBold(part)}</span>;
      }
    }

    return (
      <span key={index}>
        <a
          href={href}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="gm-chat-response-link"
          title={href}
          aria-label={`${label}${newTab ? " — opens in a new tab" : ""}`}
        >
          {label}
          <span aria-hidden="true">↗</span>
        </a>
        {trailing}
      </span>
    );
  });
}

function renderReply(text: string, streaming = false) {
  const lines = text.split("\n");

  return lines.map((rawLine, index) => {
    const line = rawLine.trim();

    if (!line) {
      return <div key={index} className="gm-chat-paragraph-gap" />;
    }

    const bullet = /^[-*•]\s+/.test(line);
    const heading = /^#{1,6}\s+/.test(line);
    const content = line
      .replace(/^#{1,6}\s+/, "")
      .replace(/^[-*•]\s+/, "");

    const formatted = renderInline(
      content,
      streaming && index === lines.length - 1
    );

    return (
      <div
        key={index}
        className={`gm-chat-line ${bullet ? "gm-chat-list-line" : ""}`}
      >
        {bullet && <span className="gm-chat-list-dot" aria-hidden="true" />}
        <span className="gm-chat-line-content">
          {heading ? <strong>{formatted}</strong> : formatted}
        </span>
      </div>
    );
  });
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState("");

  const shouldReduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const recognitionRef = useRef<RecognitionInstance | null>(null);
  const requestRef = useRef<AbortController | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamResolveRef = useRef<(() => void) | null>(null);
  const busyRef = useRef(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
      requestRef.current?.abort();
      recognitionRef.current?.abort();

      if (timerRef.current !== null) clearInterval(timerRef.current);
      streamResolveRef.current?.();
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const viewport = window.visualViewport;
    const root = rootRef.current;

    const updateViewport = () => {
      const height = viewport?.height ?? window.innerHeight;
      const bottomInset = viewport
        ? Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop)
        : 0;

      root?.style.setProperty("--chat-viewport", `${height}px`);
      root?.style.setProperty("--chat-keyboard", `${bottomInset}px`);
    };

    updateViewport();
    viewport?.addEventListener("resize", updateViewport);
    viewport?.addEventListener("scroll", updateViewport);
    window.addEventListener("resize", updateViewport);

    return () => {
      viewport?.removeEventListener("resize", updateViewport);
      viewport?.removeEventListener("scroll", updateViewport);
      window.removeEventListener("resize", updateViewport);
      root?.style.removeProperty("--chat-viewport");
      root?.style.removeProperty("--chat-keyboard");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        recognitionRef.current?.abort();
        launcherRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "instant",
    });
  }, [messages, loading, open]);

  const closeChat = () => {
    setOpen(false);
    recognitionRef.current?.abort();
    launcherRef.current?.focus();
  };

  const streamText = (text: string) =>
    new Promise<void>((resolve) => {
      if (!mountedRef.current) {
        resolve();
        return;
      }

      if (shouldReduceMotion) {
        setMessages((previous) => [...previous, { role: "ai", text }]);
        resolve();
        return;
      }

      let index = 0;
      streamResolveRef.current = resolve;
      setMessages((previous) => [...previous, { role: "ai", text: "" }]);

      timerRef.current = setInterval(() => {
        index += 1;

        if (mountedRef.current) {
          setMessages((previous) =>
            previous.map((item, itemIndex) =>
              itemIndex === previous.length - 1 && item.role === "ai"
                ? { ...item, text: text.slice(0, index) }
                : item
            )
          );
        }

        if (index >= text.length || !mountedRef.current) {
          if (timerRef.current !== null) clearInterval(timerRef.current);
          timerRef.current = null;
          streamResolveRef.current = null;
          resolve();
        }
      }, 12);
    });

  const send = async (text?: string) => {
    const input = text || message;
    if (!input.trim() || busyRef.current) return;

    busyRef.current = true;
    recognitionRef.current?.abort();
    setVoiceNotice("");

    const updatedMessages: Msg[] = [
      ...messages,
      { role: "user", text: input },
    ];

    setMessages(updatedMessages);
    setMessage("");
    setLoading(true);

    const controller = new AbortController();
    requestRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: updatedMessages,
        }),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error("AI request failed");

      const data = await response.json();
      const reply =
        typeof data.reply === "string" && data.reply
          ? cleanReply(data.reply)
          : "Sorry, I couldn't generate a response.";

      await streamText(reply || "Please ask me about my projects, skills, or contact details.");
    } catch {
      if (mountedRef.current && !controller.signal.aborted) {
        setMessages((previous) => [
          ...previous,
          { role: "ai", text: "⚠️ Error connecting AI." },
        ]);
      }
    } finally {
      busyRef.current = false;
      if (mountedRef.current) setLoading(false);
      if (requestRef.current === controller) requestRef.current = null;
    }
  };

  const startVoice = () => {
    if (listening) {
      recognitionRef.current?.abort();
      return;
    }

    const voiceWindow = window as VoiceWindow;
    const Recognition =
      voiceWindow.SpeechRecognition || voiceWindow.webkitSpeechRecognition;

    if (!Recognition) {
      setVoiceNotice("Voice input is not supported in this browser.");
      return;
    }

    setVoiceNotice("");
    const recognition = new Recognition();
    recognitionRef.current = recognition;
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      if (mountedRef.current) setMessage(transcript);
    };

    recognition.onend = () => {
      if (mountedRef.current) setListening(false);
      if (recognitionRef.current === recognition) recognitionRef.current = null;
    };

    recognition.onerror = () => {
      if (mountedRef.current) {
        setListening(false);
        setVoiceNotice("Voice input stopped. You can type your message instead.");
      }
    };

    try {
      recognition.start();
      setListening(true);
    } catch {
      setListening(false);
      setVoiceNotice("Unable to start voice input. Please try again.");
    }
  };

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) {
      setVoiceNotice("Reading aloud is not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(
      text.replace(/\*/g, "").replace(/^#{1,6}\s+/gm, "")
    );
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div ref={rootRef} className="gm-assistant">
      <button
        ref={launcherRef}
        type="button"
        onClick={() => (open ? closeChat() : setOpen(true))}
        aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={open}
        aria-controls="ai-assistant-chat"
        className={`gm-chat-launcher ${open ? "is-open" : ""}`}
      >
        {open ? <X aria-hidden="true" /> : <Sparkles aria-hidden="true" />}
        {!open && <span>AI</span>}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="ai-assistant-chat"
            role="dialog"
            aria-labelledby="gm-chat-title"
            className="gm-chat-panel"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          >
            <div className="gm-chat-header">
              <span className="gm-chat-header-icon">
                <Sparkles aria-hidden="true" />
              </span>
              <h2 id="gm-chat-title">AI Assistant</h2>
              <button
                type="button"
                onClick={closeChat}
                className="gm-chat-icon-button gm-chat-close"
                aria-label="Close AI Assistant"
              >
                <X aria-hidden="true" />
              </button>
            </div>

            <div className="gm-chat-suggestions" aria-label="Suggested questions">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => send(suggestion)}
                  disabled={loading}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <div
              ref={chatRef}
              className="gm-chat-messages"
              role="log"
              aria-live="polite"
              aria-busy={loading}
              aria-label="AI conversation"
            >
              {messages.length === 0 && !loading && (
                <div className="gm-chat-empty" aria-hidden="true">
                  <MessageCircle />
                  <span>AI Assistant</span>
                </div>
              )}

              {messages.map((item, index) => (
                <div
                  key={`${item.role}-${index}`}
                  className={`gm-chat-row gm-chat-row-${item.role}`}
                >
                  <div className="gm-chat-bubble">
                    {item.role === "ai" ? (
                      <div className="gm-chat-formatted">
                        {renderReply(
                          item.text,
                          loading && index === messages.length - 1
                        )}
                      </div>
                    ) : (
                      <span>{item.text}</span>
                    )}

                    {item.role === "ai" &&
                      index === messages.length - 1 &&
                      loading && (
                        <span className="gm-chat-caret" aria-hidden="true">|</span>
                      )}

                    {item.role === "ai" && item.text.length > 0 && (
                      <button
                        type="button"
                        onClick={() => speak(item.text)}
                        className="gm-chat-speak"
                        aria-label="Read AI response aloud"
                      >
                        <Volume2 aria-hidden="true" />
                        Speak
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="gm-chat-thinking" role="status">
                  <span className="gm-chat-thinking-dots" aria-hidden="true">
                    <i /><i /><i />
                  </span>
                  Thinking...
                </div>
              )}
            </div>

            <div className="gm-chat-composer">
              {(voiceNotice || listening) && (
                <p className="gm-chat-notice" role="status">
                  {voiceNotice || "Listening..."}
                </p>
              )}

              <form
                className="gm-chat-input-wrap"
                onSubmit={(event) => {
                  event.preventDefault();
                  void send();
                }}
              >
                <button
                  type="button"
                  onClick={startVoice}
                  disabled={loading}
                  aria-label={listening ? "Stop voice input" : "Use voice input"}
                  aria-pressed={listening}
                  className={`gm-chat-icon-button gm-chat-mic ${listening ? "is-listening" : ""}`}
                >
                  <Mic aria-hidden="true" />
                </button>

                <label htmlFor="ai-message" className="gm-chat-sr-only">
                  Message AI Assistant
                </label>
                <input
                  id="ai-message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && event.nativeEvent.isComposing) {
                      event.preventDefault();
                    }
                  }}
                  autoComplete="off"
                  enterKeyHint="send"
                  placeholder="Message AI Assistant..."
                />
                <button
                  type="submit"
                  disabled={!message.trim() || loading}
                  aria-label="Send message"
                  className="gm-chat-send"
                >
                  <ArrowUp aria-hidden="true" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gm-assistant {
          --chat-text: #172039;
          --chat-muted: #66728a;
          --chat-surface: rgba(255,255,255,.95);
          --chat-soft: #f2f4fc;
          --chat-border: rgba(124,58,237,.15);
          --chat-keyboard: 0px;
          --chat-viewport: 100dvh;
          --chat-bottom: max(16px, env(safe-area-inset-bottom, 0px));
          --chat-right: max(16px, env(safe-area-inset-right, 0px));
          color: var(--chat-text);
          -webkit-tap-highlight-color: transparent;
        }

        .dark .gm-assistant {
          --chat-text: #eff3ff;
          --chat-muted: #b0bad0;
          --chat-surface: rgba(14,21,38,.97);
          --chat-soft: #1b263d;
          --chat-border: rgba(167,139,250,.2);
        }

        .gm-assistant *,
        .gm-assistant *::before,
        .gm-assistant *::after { box-sizing: border-box; }
        .gm-assistant button { font: inherit; cursor: pointer; }
        .gm-assistant button:disabled { opacity: .45; cursor: not-allowed; }

        .gm-assistant .gm-chat-launcher {
          position: fixed;
          bottom: calc(var(--chat-bottom) + var(--chat-keyboard));
          right: var(--chat-right);
          z-index: 60;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 60px;
          height: 60px;
          padding: 0;
          border: 1px solid rgba(255,255,255,.35);
          border-radius: 21px;
          background: linear-gradient(135deg, #7c3aed, #b72bc3 55%, #0891b2);
          color: #fff;
          box-shadow: 0 10px 28px rgba(124,58,237,.3), inset 0 1px 0 rgba(255,255,255,.25);
          font-size: 13px;
          font-weight: 750;
          transition: transform .2s, box-shadow .2s;
        }

        .gm-assistant .gm-chat-launcher svg { width: 20px; height: 20px; }
        .gm-assistant .gm-chat-launcher.is-open svg { width: 24px; height: 24px; }

        .gm-assistant .gm-chat-panel {
          position: fixed;
          bottom: calc(var(--chat-bottom) + var(--chat-keyboard) + 74px);
          right: var(--chat-right);
          z-index: 60;
          display: flex;
          flex-direction: column;
          width: min(410px, calc(100vw - 32px));
          height: min(570px, calc(var(--chat-viewport) - var(--chat-bottom) - 90px));
          max-height: calc(var(--chat-viewport) - var(--chat-bottom) - 90px);
          min-height: 0;
          overflow: hidden;
          border: 1px solid var(--chat-border);
          border-radius: 25px;
          background:
            radial-gradient(ellipse at 100% 0%, rgba(139,92,246,.09), transparent 55%),
            var(--chat-surface);
          color: var(--chat-text);
          box-shadow: 0 24px 80px rgba(30,20,65,.2), inset 0 1px 0 rgba(255,255,255,.25);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          transform-origin: bottom right;
        }

        .gm-assistant .gm-chat-header {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          gap: 11px;
          padding: 12px 14px;
          border-bottom: 1px solid var(--chat-border);
          background: linear-gradient(115deg, rgba(139,92,246,.09), rgba(6,182,212,.05));
        }

        .gm-assistant .gm-chat-header-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border-radius: 13px;
          background: linear-gradient(135deg, #7c3aed, #db2777);
          color: white;
          box-shadow: 0 5px 15px rgba(124,58,237,.16);
        }

        .gm-assistant .gm-chat-header-icon svg { width: 19px; height: 19px; }
        .gm-assistant .gm-chat-header h2 { margin: 0; font-size: 15px; font-weight: 750; letter-spacing: -.02em; }

        .gm-assistant .gm-chat-icon-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          flex-shrink: 0;
          border: 0;
          border-radius: 13px;
          background: transparent;
          color: var(--chat-muted);
          transition: color .2s, background .2s;
        }

        .gm-assistant .gm-chat-icon-button svg { width: 19px; height: 19px; }
        .gm-assistant .gm-chat-close { margin-left: auto; }

        .gm-assistant .gm-chat-suggestions {
          display: flex;
          flex-wrap: wrap;
          flex-shrink: 0;
          gap: 7px;
          padding: 12px;
          border-bottom: 1px solid var(--chat-border);
        }

        .gm-assistant .gm-chat-suggestions button {
          flex: 1 1 calc(50% - 7px);
          min-width: 0;
          min-height: 44px;
          padding: 8px 10px;
          border: 1px solid var(--chat-border);
          border-radius: 12px;
          background: rgba(139,92,246,.055);
          color: var(--chat-text);
          font-size: 11px;
          font-weight: 550;
          line-height: 1.5;
          text-align: left;
          transition: border-color .2s, background .2s;
        }

        .gm-assistant .gm-chat-messages {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          padding: 16px 14px;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: rgba(139,92,246,.35) transparent;
        }

        .gm-assistant .gm-chat-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 13px;
          min-height: 100%;
          padding: 20px;
          color: var(--chat-muted);
          font-size: 13px;
        }

        .gm-assistant .gm-chat-empty svg { width: 42px; height: 42px; color: #a78bfa; stroke-width: 1.3; }
        .gm-assistant .gm-chat-row { display: flex; margin-bottom: 13px; }
        .gm-assistant .gm-chat-row-user { justify-content: flex-end; }

        .gm-assistant .gm-chat-bubble {
          max-width: 88%;
          min-width: 0;
          padding: 12px 14px;
          border: 1px solid var(--chat-border);
          border-radius: 17px 17px 17px 5px;
          background: var(--chat-soft);
          color: var(--chat-text);
          font-size: 13px;
          line-height: 1.8;
          white-space: pre-wrap;
          overflow-wrap: anywhere;
        }

        .gm-assistant .gm-chat-row-user .gm-chat-bubble {
          border-color: transparent;
          border-radius: 17px 17px 5px 17px;
          background: linear-gradient(120deg, #7c3aed, #5158d7);
          color: white;
          box-shadow: 0 4px 12px rgba(124,58,237,.12);
        }

        .gm-assistant .gm-chat-formatted { white-space: normal; }
        .gm-assistant .gm-chat-line { margin-bottom: 6px; }
        .gm-assistant .gm-chat-line:last-child { margin-bottom: 0; }
        .gm-assistant .gm-chat-line-content { min-width: 0; white-space: pre-wrap; }
        .gm-assistant .gm-chat-formatted strong { font-weight: 750; color: var(--chat-text); }
        .gm-assistant .gm-chat-paragraph-gap { height: 10px; }
        .gm-assistant .gm-chat-list-line { display: flex; align-items: flex-start; gap: 9px; }
        .gm-assistant .gm-chat-list-dot {
          width: 5px;
          height: 5px;
          margin-top: 9px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #a78bfa;
        }

        .gm-assistant .gm-chat-response-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          max-width: 100%;
          min-height: 44px;
          margin-block: 5px;
          padding: 8px 12px;
          border: 1px solid rgba(139,92,246,.25);
          border-radius: 11px;
          background: rgba(139,92,246,.08);
          color: #6d28d9;
          font-size: 12px;
          font-weight: 650;
          line-height: 1.5;
          text-decoration: none;
          white-space: normal;
          overflow-wrap: anywhere;
          touch-action: manipulation;
          transition: background .2s, border-color .2s;
        }

        .dark .gm-assistant .gm-chat-response-link {
          color: #ddd6fe;
          border-color: rgba(167,139,250,.3);
          background: rgba(139,92,246,.14);
        }

        .gm-assistant .gm-chat-response-link:focus-visible { outline: 3px solid #a78bfa; outline-offset: 3px; }
        .gm-assistant .gm-chat-response-link > span { flex-shrink: 0; }

        .gm-assistant .gm-chat-speak {
          display: flex;
          align-items: center;
          gap: 6px;
          min-height: 44px;
          margin-top: 4px;
          padding: 5px 8px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          color: #6d28d9;
          font-size: 11px;
          font-weight: 600;
        }

        .dark .gm-assistant .gm-chat-speak { color: #c4b5fd; }
        .gm-assistant .gm-chat-speak svg { width: 15px; height: 15px; }
        .gm-assistant .gm-chat-caret { margin-left: 3px; animation: gm-chat-blink 1s ease-in-out infinite; }

        .gm-assistant .gm-chat-thinking {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 4px;
          color: var(--chat-muted);
          font-size: 12px;
        }

        .gm-assistant .gm-chat-thinking-dots { display: flex; gap: 4px; }
        .gm-assistant .gm-chat-thinking-dots i { width: 5px; height: 5px; border-radius: 50%; background: #a78bfa; animation: gm-chat-blink 1s ease-in-out infinite; }
        .gm-assistant .gm-chat-thinking-dots i:nth-child(2) { animation-delay: .15s; }
        .gm-assistant .gm-chat-thinking-dots i:nth-child(3) { animation-delay: .3s; }

        .gm-assistant .gm-chat-composer {
          flex-shrink: 0;
          padding: 12px;
          border-top: 1px solid var(--chat-border);
          background: var(--chat-surface);
        }

        .gm-assistant .gm-chat-notice { margin: 0 4px 9px; color: var(--chat-muted); font-size: 12px; line-height: 1.5; }

        .gm-assistant .gm-chat-input-wrap {
          display: flex;
          align-items: center;
          gap: 3px;
          padding: 5px;
          border: 1px solid var(--chat-border);
          border-radius: 17px;
          background: var(--chat-soft);
          transition: border-color .2s, box-shadow .2s;
        }

        .gm-assistant .gm-chat-input-wrap:focus-within { border-color: #a78bfa; box-shadow: 0 0 0 3px rgba(139,92,246,.1); }

        .gm-assistant .gm-chat-input-wrap input {
          flex: 1;
          min-width: 0;
          width: 100%;
          height: 44px;
          padding: 0 4px;
          border: 0;
          outline: none;
          background: transparent;
          color: var(--chat-text);
          font: inherit;
          font-size: 16px;
        }

        .gm-assistant .gm-chat-input-wrap input::placeholder { color: var(--chat-muted); font-size: 13px; }
        .gm-assistant .gm-chat-mic.is-listening { background: rgba(219,39,119,.12); color: #db2777; }

        .gm-assistant .gm-chat-send {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          padding: 0;
          border: 0;
          border-radius: 13px;
          background: linear-gradient(135deg, #7c3aed, #0891b2);
          color: white;
          transition: box-shadow .2s, opacity .2s;
        }

        .gm-assistant .gm-chat-send svg { width: 21px; height: 21px; }
        .gm-assistant button:focus-visible { outline: 3px solid #a78bfa; outline-offset: 2px; }

        .gm-assistant .gm-chat-sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          white-space: nowrap;
          border: 0;
        }

        @media (hover: hover) {
          .gm-assistant .gm-chat-launcher:hover { transform: translateY(-3px); box-shadow: 0 14px 32px rgba(124,58,237,.35); }
          .gm-assistant .gm-chat-icon-button:not(:disabled):hover { background: rgba(139,92,246,.1); color: var(--chat-text); }
          .gm-assistant .gm-chat-suggestions button:not(:disabled):hover { border-color: #a78bfa; background: rgba(139,92,246,.1); }
          .gm-assistant .gm-chat-speak:hover { background: rgba(139,92,246,.08); }
          .gm-assistant .gm-chat-send:not(:disabled):hover { box-shadow: 0 4px 16px rgba(124,58,237,.25); }
          .gm-assistant .gm-chat-response-link:hover { background: rgba(139,92,246,.18); border-color: #a78bfa; }
        }

        @media (min-width: 640px) {
          .gm-assistant {
            --chat-bottom: max(24px, env(safe-area-inset-bottom, 0px));
            --chat-right: max(24px, env(safe-area-inset-right, 0px));
          }
        }

        @media (max-width: 639px) {
          .gm-assistant .gm-chat-panel {
            left: max(12px, env(safe-area-inset-left, 0px));
            right: max(12px, env(safe-area-inset-right, 0px));
            width: auto;
            border-radius: 22px;
          }
          .gm-assistant .gm-chat-bubble { max-width: 92%; }
        }

        @media (max-height: 540px) {
          .gm-assistant .gm-chat-suggestions { flex-wrap: nowrap; overflow-x: auto; padding: 7px 10px; scrollbar-width: none; }
          .gm-assistant .gm-chat-suggestions button { flex: 0 0 auto; white-space: nowrap; }
          .gm-assistant .gm-chat-header { padding-block: 5px; }
          .gm-assistant .gm-chat-composer { padding: 7px; }
        }

        @keyframes gm-chat-blink { 50% { opacity: .35; } }

        @media (prefers-reduced-motion: reduce) {
          .gm-assistant .gm-chat-caret,
          .gm-assistant .gm-chat-thinking-dots i { animation: none; }
          .gm-assistant button,
          .gm-assistant .gm-chat-input-wrap,
          .gm-assistant .gm-chat-response-link { transition: none; }
          .gm-assistant .gm-chat-launcher:hover { transform: none; }
        }
      `}</style>
    </div>
  );
}