import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Search } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { allReasons } from "./data/reasons";

const PAGE_SIZE = 100;

// Floating petal particle
interface Petal {
  id: number;
  left: number;
  delay: number;
  dur: number;
  size: number;
  emoji: string;
  drift: number;
}

const PETALS: Petal[] = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: (i * 100) / 18 + Math.sin(i * 2.1) * 4,
  delay: (i * 3.2) % 20,
  dur: 14 + (i % 7) * 2,
  size: 0.7 + (i % 4) * 0.25,
  emoji: ["🌸", "✿", "❀", "🌺", "✨"][i % 5],
  drift: (i % 2 === 0 ? 1 : -1) * (15 + (i % 3) * 8),
}));

function FloatingPetals() {
  return (
    <div className="petals-container" aria-hidden="true">
      {PETALS.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={
            {
              left: `${p.left}%`,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              fontSize: `${p.size}rem`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}

// Fade-in card with IntersectionObserver
function ReasonCard({ number, text }: { number: number; text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reason-card ${visible ? "reason-card--visible" : ""}`}
    >
      <span className="reason-number">#{number}</span>
      <p className="reason-text">{text}</p>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    if (!query.trim()) return allReasons;
    const q = query.toLowerCase();
    return allReasons.filter((r) => r.toLowerCase().includes(q));
  }, [query]);

  const displayed = filtered.slice(0, visibleCount);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setVisibleCount(PAGE_SIZE);
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((v) => v + PAGE_SIZE);
  }, []);

  const canLoadMore = visibleCount < filtered.length;

  return (
    <div className="app-wrapper">
      <FloatingPetals />

      {/* Hero */}
      <header className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="hero-eyebrow">For Merin, with all my heart</p>
          <h1 className="hero-title">
            10,000 Reasons
            <br />
            <em>I Love You</em>
          </h1>
          <p className="hero-subtitle">
            Every single reason, written just for you.
          </p>
          <div className="hero-decoration" aria-hidden="true">
            <span>✿</span>
            <span>🌸</span>
            <span>❀</span>
            <span>🌸</span>
            <span>✿</span>
          </div>
        </motion.div>
      </header>

      {/* Counter banner */}
      <section className="counter-banner" aria-label="Reason count">
        <Heart className="counter-heart" size={16} fill="currentColor" />
        <span>{allReasons.length.toLocaleString()} reasons and counting ♡</span>
        <Heart className="counter-heart" size={16} fill="currentColor" />
      </section>

      {/* Main content */}
      <main className="main-content">
        {/* Search */}
        <div className="search-wrapper">
          <div className="search-inner" data-ocid="reasons.search_input">
            <Search className="search-icon" size={18} />
            <Input
              type="search"
              placeholder="Search through all 10,000 reasons…"
              value={query}
              onChange={handleSearch}
              className="search-input"
              aria-label="Search reasons"
            />
          </div>
          {query && (
            <p className="search-count">
              {filtered.length.toLocaleString()} reason
              {filtered.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="empty-state"
              data-ocid="reasons.empty_state"
            >
              <span className="empty-icon">🌸</span>
              <p>No reasons found for that search. Try a different word.</p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className="reasons-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {displayed.map((reason, i) => (
                <ReasonCard
                  key={reason.slice(0, 30)}
                  number={i + 1}
                  text={reason}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load more */}
        {canLoadMore && (
          <div className="load-more-wrapper">
            <Button
              onClick={handleLoadMore}
              className="load-more-btn"
              data-ocid="reasons.primary_button"
            >
              Show{" "}
              {Math.min(
                PAGE_SIZE,
                filtered.length - visibleCount,
              ).toLocaleString()}{" "}
              more reasons
            </Button>
            <p className="load-more-count">
              Showing {displayed.length.toLocaleString()} of{" "}
              {filtered.length.toLocaleString()}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          Made with{" "}
          <Heart size={14} fill="currentColor" className="footer-heart" /> for
          Merin
        </p>
        <p className="footer-sub">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
