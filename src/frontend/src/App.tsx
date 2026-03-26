import { useEffect, useRef, useState } from "react";
import { reasons } from "./data/reasons";

const INITIAL_BATCH = 200;
const BATCH_SIZE = 200;

const FLORAL_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

function BotanicalHero() {
  return (
    <header className="hero-section">
      <div className="botanical-top">
        <svg
          viewBox="0 0 800 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g stroke="#7a9e7e" strokeWidth="1.5" fill="none" opacity="0.7">
            <path d="M0 180 Q80 120 160 100" />
            <path d="M60 150 Q90 120 100 90" />
            <path d="M100 130 Q130 100 145 70" />
            <ellipse
              cx="80"
              cy="130"
              rx="18"
              ry="10"
              transform="rotate(-30 80 130)"
              fill="#7a9e7e"
              opacity="0.4"
            />
            <ellipse
              cx="110"
              cy="110"
              rx="15"
              ry="8"
              transform="rotate(-50 110 110)"
              fill="#7a9e7e"
              opacity="0.4"
            />
            <ellipse
              cx="140"
              cy="90"
              rx="12"
              ry="7"
              transform="rotate(-70 140 90)"
              fill="#7a9e7e"
              opacity="0.35"
            />
            <ellipse
              cx="50"
              cy="155"
              rx="14"
              ry="8"
              transform="rotate(-20 50 155)"
              fill="#7a9e7e"
              opacity="0.35"
            />
          </g>
          <g
            stroke="#7a9e7e"
            strokeWidth="1.5"
            fill="none"
            opacity="0.7"
            transform="translate(800,0) scale(-1,1)"
          >
            <path d="M0 180 Q80 120 160 100" />
            <path d="M60 150 Q90 120 100 90" />
            <path d="M100 130 Q130 100 145 70" />
            <ellipse
              cx="80"
              cy="130"
              rx="18"
              ry="10"
              transform="rotate(-30 80 130)"
              fill="#7a9e7e"
              opacity="0.4"
            />
            <ellipse
              cx="110"
              cy="110"
              rx="15"
              ry="8"
              transform="rotate(-50 110 110)"
              fill="#7a9e7e"
              opacity="0.4"
            />
            <ellipse
              cx="140"
              cy="90"
              rx="12"
              ry="7"
              transform="rotate(-70 140 90)"
              fill="#7a9e7e"
              opacity="0.35"
            />
            <ellipse
              cx="50"
              cy="155"
              rx="14"
              ry="8"
              transform="rotate(-20 50 155)"
              fill="#7a9e7e"
              opacity="0.35"
            />
          </g>
          <g transform="translate(400,160)" opacity="0.6">
            <circle cx="0" cy="0" r="5" fill="#c9a84c" />
            {FLORAL_ANGLES.map((angle) => (
              <ellipse
                key={angle}
                cx={Math.cos((angle * Math.PI) / 180) * 14}
                cy={Math.sin((angle * Math.PI) / 180) * 14}
                rx="7"
                ry="4"
                transform={`rotate(${angle} ${Math.cos((angle * Math.PI) / 180) * 14} ${Math.sin((angle * Math.PI) / 180) * 14})`}
                fill="#d4a0a0"
                opacity="0.7"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="hero-content">
        <p className="hero-by">by Sherry</p>
        <h1 className="hero-title">
          8,000 Reasons
          <br />
          <em>I Love You,</em>
          <br />
          Merin
        </h1>
        <p className="hero-subtitle">
          Every single one is true. Every single one is not enough.
        </p>
      </div>

      <div className="botanical-bottom">
        <svg
          viewBox="0 0 800 80"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g stroke="#c4623a" strokeWidth="1" fill="none" opacity="0.25">
            <path d="M200 80 Q300 40 400 50 Q500 60 600 20" />
            <path d="M280 70 Q310 50 320 30" />
            <path d="M480 60 Q510 40 520 20" />
            <ellipse
              cx="300"
              cy="55"
              rx="12"
              ry="6"
              transform="rotate(-40 300 55)"
              fill="#c4623a"
              opacity="0.3"
            />
            <ellipse
              cx="500"
              cy="45"
              rx="10"
              ry="5"
              transform="rotate(-60 500 45)"
              fill="#c4623a"
              opacity="0.3"
            />
          </g>
        </svg>
      </div>
    </header>
  );
}

function Divider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <svg
        viewBox="0 0 600 40"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g fill="none" stroke="#c4623a" strokeWidth="1" opacity="0.4">
          <line x1="0" y1="20" x2="240" y2="20" />
          <circle
            cx="270"
            cy="20"
            r="4"
            fill="#c9a84c"
            stroke="none"
            opacity="0.7"
          />
          <circle cx="300" cy="20" r="6" fill="none" stroke="#c4623a" />
          <circle
            cx="330"
            cy="20"
            r="4"
            fill="#c9a84c"
            stroke="none"
            opacity="0.7"
          />
          <line x1="360" y1="20" x2="600" y2="20" />
          <ellipse
            cx="270"
            cy="12"
            rx="5"
            ry="3"
            fill="#7a9e7e"
            opacity="0.5"
            transform="rotate(-15 270 12)"
          />
          <ellipse
            cx="330"
            cy="12"
            rx="5"
            ry="3"
            fill="#7a9e7e"
            opacity="0.5"
            transform="rotate(15 330 12)"
          />
        </g>
      </svg>
    </div>
  );
}

function ReasonCard({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cardStyles = [
    "card-style-a",
    "card-style-b",
    "card-style-c",
    "card-style-d",
    "card-style-e",
  ];
  const style = cardStyles[index % cardStyles.length];

  return (
    <div
      ref={ref}
      className={`reason-card ${style} ${visible ? "reason-card--visible" : ""}`}
    >
      <span className="reason-number">{index + 1}</span>
      <p className="reason-text">{text}</p>
    </div>
  );
}

export default function App() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCount < reasons.length) {
          setVisibleCount((prev) =>
            Math.min(prev + BATCH_SIZE, reasons.length),
          );
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visibleCount]);

  const visibleReasons = reasons.slice(0, visibleCount);

  return (
    <div className="app">
      <BotanicalHero />

      <main className="main-content">
        <Divider />

        <section
          className="reasons-section"
          aria-label="8000 reasons I love Merin"
        >
          <div className="reasons-grid">
            {visibleReasons.map((reason, i) => (
              <ReasonCard key={reason} text={reason} index={i} />
            ))}
          </div>

          <div ref={sentinelRef} className="sentinel" aria-hidden="true" />

          {visibleCount < reasons.length && (
            <div className="loading-indicator" aria-live="polite">
              <span className="loading-dot" />
              <span className="loading-dot" />
              <span className="loading-dot" />
            </div>
          )}
        </section>

        <Divider />
      </main>

      <footer className="site-footer">
        <div className="footer-botanical" aria-hidden="true">
          <svg
            viewBox="0 0 400 60"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g fill="#7a9e7e" opacity="0.4">
              <ellipse
                cx="180"
                cy="40"
                rx="20"
                ry="10"
                transform="rotate(-30 180 40)"
              />
              <ellipse
                cx="210"
                cy="30"
                rx="16"
                ry="8"
                transform="rotate(-50 210 30)"
              />
              <ellipse
                cx="230"
                cy="45"
                rx="14"
                ry="7"
                transform="rotate(20 230 45)"
              />
            </g>
            <g fill="#d4a0a0" opacity="0.5">
              <circle cx="200" cy="20" r="4" />
              <circle cx="215" cy="15" r="3" />
              <circle cx="190" cy="18" r="3" />
            </g>
          </svg>
        </div>
        <p className="footer-closing">
          And even 8,000 reasons isn&apos;t enough...
        </p>
        <p className="footer-love">With all of me, always — Sherry ♡</p>
        <p className="footer-credit">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
