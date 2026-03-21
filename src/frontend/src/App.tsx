import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────
interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  dur: number;
  delay: number;
  tx: number;
  emoji: string;
}

// ── Data ──────────────────────────────────────────────────────────────────
const LOVE_ANSWERS = [
  "To the moon 🌙",
  "To the stars ✨",
  "To infinity and beyond 🚀",
  "More than pizza 🍕 (yes, really)",
  "More than words can ever say 💖",
  "More than all the songs ever written 🎶",
  "More than the ocean is deep 🌊",
  "Endlessly, hopelessly, completely 💗",
];

const LOVE_REASONS = [
  "Your smile that lights up every room ☀️",
  "Your laugh — it's my favourite sound 🎵",
  "The way you make me feel safe 🏡",
  "How kind and caring you are 🌸",
  "Your warm hugs that feel like home 🤗",
  "The way your eyes crinkle when you're happy 👀",
  "How you always know what to say 💬",
  "Everything about you, honestly 💝",
];

const HEART_EMOJIS = ["💖", "💗", "💓", "💕", "💞", "🌸", "✨", "💝"];

// ── Components ────────────────────────────────────────────────────────────
function SparkleParticle({
  delay,
  size,
  x,
  y,
}: { delay: number; size: number; x: string; y: string }) {
  return (
    <div
      className="absolute pointer-events-none animate-sparkle"
      style={
        {
          left: x,
          top: y,
          width: size,
          height: size,
          "--dur": `${2 + Math.random() * 2}s`,
          "--delay": `${delay}s`,
        } as React.CSSProperties
      }
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-full h-full"
        aria-label="sparkle"
        role="img"
      >
        <path
          d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
          fill="oklch(0.72 0.18 355 / 0.5)"
        />
      </svg>
    </div>
  );
}

function FloatingHeartEl({
  heart,
  onDone,
}: { heart: FloatingHeart; onDone: (id: number) => void }) {
  useEffect(() => {
    const t = setTimeout(
      () => onDone(heart.id),
      (heart.dur + heart.delay) * 1000 + 200,
    );
    return () => clearTimeout(t);
  }, [heart, onDone]);

  return (
    <div
      className="fixed pointer-events-none select-none animate-float-heart z-50"
      style={
        {
          left: `${heart.x}%`,
          bottom: "5%",
          fontSize: `${heart.size}px`,
          "--dur": `${heart.dur}s`,
          "--delay": `${heart.delay}s`,
          "--tx": `${heart.tx}px`,
        } as React.CSSProperties
      }
    >
      {heart.emoji}
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────
export default function App() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [loveIdx, setLoveIdx] = useState(-1);
  const [reasonIdx, setReasonIdx] = useState(-1);
  const [songClicked, setSongClicked] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [bigHeartAnim, setBigHeartAnim] = useState(false);
  const heartIdRef = useRef(0);

  // background sparkles — stable reference
  const sparkles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      delay: i * 0.3,
      size: 8 + (i % 3) * 6,
      x: `${(i * 37 + 5) % 95}%`,
      y: `${(i * 53 + 10) % 88}%`,
    })),
  ).current;

  const spawnHearts = useCallback((count = 6) => {
    const newHearts: FloatingHeart[] = Array.from({ length: count }, (_, i) => {
      heartIdRef.current += 1;
      return {
        id: Date.now() + i + heartIdRef.current,
        x: 10 + Math.random() * 80,
        size: 24 + Math.random() * 24,
        dur: 5 + Math.random() * 3,
        delay: i * 0.15,
        tx: (Math.random() - 0.5) * 120,
        emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
      };
    });
    setHearts((prev) => [...prev, ...newHearts]);
    setHeartCount((c) => c + count);
  }, []);

  const removeHeart = useCallback((id: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
  }, []);

  const handleLoveClick = () => {
    setLoveIdx((i) => (i + 1) % LOVE_ANSWERS.length);
    spawnHearts(3);
    setBigHeartAnim(true);
    setTimeout(() => setBigHeartAnim(false), 700);
  };

  const handleReasonClick = () => {
    setReasonIdx((i) => (i + 1) % LOVE_REASONS.length);
    spawnHearts(2);
  };

  const handleSongClick = () => {
    setSongClicked(true);
    spawnHearts(8);
  };

  const handleSendHeart = () => {
    spawnHearts(10);
  };

  return (
    <div
      className="min-h-screen sparkle-bg"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.96 0.04 340) 0%, oklch(0.92 0.06 305) 40%, oklch(0.95 0.05 355) 100%)",
      }}
    >
      {/* Background sparkles */}
      {sparkles.map((s) => (
        <SparkleParticle
          key={s.id}
          delay={s.delay}
          size={s.size}
          x={s.x}
          y={s.y}
        />
      ))}

      {/* Floating hearts portal */}
      {hearts.map((h) => (
        <FloatingHeartEl key={h.id} heart={h} onDone={removeHeart} />
      ))}

      {/* ── Hero ──────────────────────────────────── */}
      <header className="relative pt-16 pb-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="text-6xl mb-4 animate-bounce-heart inline-block">
            💖
          </div>
          <h1
            className="font-script text-6xl md:text-8xl leading-tight mb-3"
            style={{ color: "oklch(0.48 0.22 10)" }}
          >
            I Love You,
          </h1>
          <h2 className="font-script text-7xl md:text-9xl leading-tight shimmer-text">
            Merin
          </h2>
          <p
            className="mt-5 font-body text-lg md:text-xl"
            style={{ color: "oklch(0.52 0.1 330)" }}
          >
            A little something made just for you 🌸
          </p>
        </motion.div>

        {/* Heart counter */}
        {heartCount > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 inline-block"
          >
            <span
              className="font-body text-sm px-4 py-2 rounded-full"
              style={{
                background: "oklch(0.55 0.22 10 / 0.12)",
                color: "oklch(0.45 0.2 10)",
              }}
            >
              💕 {heartCount} hearts sent to Merin!
            </span>
          </motion.div>
        )}
      </header>

      {/* ── Main Content ────────────────────────── */}
      <main className="max-w-2xl mx-auto px-4 pb-20 space-y-6">
        {/* ── How much do I love you ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl p-7 shadow-card"
          style={{
            background: "oklch(1 0 0 / 0.75)",
            backdropFilter: "blur(12px)",
          }}
          data-ocid="love_amount.card"
        >
          <p
            className="font-display text-sm uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.65 0.1 305)" }}
          >
            Ask me anything 💬
          </p>
          <button
            type="button"
            className="btn-love w-full py-4 px-6 rounded-2xl font-body font-semibold text-lg text-white shadow-love animate-pulse-glow"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 10), oklch(0.62 0.2 355))",
            }}
            onClick={handleLoveClick}
            data-ocid="love_amount.button"
          >
            How much do I love you? 💕
          </button>

          <AnimatePresence mode="wait">
            {loveIdx >= 0 && (
              <motion.div
                key={loveIdx}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="mt-5 rounded-2xl py-5 px-6 text-center"
                style={{ background: "oklch(0.97 0.04 355)" }}
                data-ocid="love_amount.success_state"
              >
                <p
                  className="font-display text-2xl font-bold"
                  style={{ color: "oklch(0.45 0.22 10)" }}
                >
                  {LOVE_ANSWERS[loveIdx]}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "oklch(0.6 0.08 330)" }}
                >
                  click again for more ↑
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* ── Send a Heart ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-3xl p-7 shadow-card"
          style={{
            background: "oklch(1 0 0 / 0.75)",
            backdropFilter: "blur(12px)",
          }}
          data-ocid="send_heart.card"
        >
          <p
            className="font-display text-sm uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.65 0.1 305)" }}
          >
            For you 💌
          </p>
          <button
            type="button"
            className="btn-love w-full py-4 px-6 rounded-2xl font-body font-semibold text-lg text-white shadow-glow"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.62 0.16 305), oklch(0.68 0.18 340))",
            }}
            onClick={handleSendHeart}
            data-ocid="send_heart.button"
          >
            Send a Heart 💗
          </button>
          <p
            className="text-center text-xs mt-3"
            style={{ color: "oklch(0.62 0.08 305)" }}
          >
            Watch the hearts fly! 🎈
          </p>
        </motion.section>

        {/* ── Reasons I love you ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-3xl p-7 shadow-card"
          style={{
            background: "oklch(1 0 0 / 0.75)",
            backdropFilter: "blur(12px)",
          }}
          data-ocid="love_reason.card"
        >
          <p
            className="font-display text-sm uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.65 0.1 305)" }}
          >
            Reasons 🌷
          </p>
          <button
            type="button"
            className="btn-love w-full py-4 px-6 rounded-2xl font-body font-semibold text-lg text-white"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.68 0.14 305), oklch(0.55 0.22 10))",
            }}
            onClick={handleReasonClick}
            data-ocid="love_reason.button"
          >
            Reasons I love you 🌸
          </button>

          <AnimatePresence mode="wait">
            {reasonIdx >= 0 && (
              <motion.div
                key={reasonIdx}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="mt-5 rounded-2xl py-5 px-6 text-center"
                style={{ background: "oklch(0.95 0.05 305)" }}
                data-ocid="love_reason.success_state"
              >
                <p
                  className="font-body text-xl font-semibold"
                  style={{ color: "oklch(0.38 0.16 305)" }}
                >
                  {LOVE_REASONS[reasonIdx]}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "oklch(0.58 0.08 305)" }}
                >
                  click for more reasons ↑
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* ── Our Song ── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="rounded-3xl p-7 shadow-card"
          style={{
            background: "oklch(1 0 0 / 0.75)",
            backdropFilter: "blur(12px)",
          }}
          data-ocid="our_song.card"
        >
          <p
            className="font-display text-sm uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.65 0.1 305)" }}
          >
            Feel the music 🎵
          </p>
          <button
            type="button"
            className="btn-love w-full py-4 px-6 rounded-2xl font-body font-semibold text-lg text-white"
            style={{
              background: songClicked
                ? "linear-gradient(135deg, oklch(0.55 0.22 10), oklch(0.62 0.2 355))"
                : "linear-gradient(135deg, oklch(0.48 0.18 355), oklch(0.58 0.14 320))",
            }}
            onClick={handleSongClick}
            data-ocid="our_song.button"
          >
            🎵 Play Our Song
          </button>

          <AnimatePresence>
            {songClicked && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-5 rounded-2xl py-5 px-6 text-center overflow-hidden"
                style={{ background: "oklch(0.97 0.04 340)" }}
                data-ocid="our_song.success_state"
              >
                <div className="text-3xl mb-2">🎶</div>
                <p
                  className="font-script text-2xl"
                  style={{ color: "oklch(0.45 0.22 10)" }}
                >
                  Every song reminds me of you
                </p>
                <p
                  className="font-body text-sm mt-2"
                  style={{ color: "oklch(0.55 0.1 330)" }}
                >
                  You're the melody I never want to stop hearing 💕
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        {/* ── Big heart button ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="text-center py-4"
        >
          <button
            type="button"
            className="btn-love inline-flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none p-4"
            onClick={() => {
              spawnHearts(15);
              setBigHeartAnim(true);
              setTimeout(() => setBigHeartAnim(false), 700);
            }}
            aria-label="Big love button"
            data-ocid="big_heart.button"
          >
            <motion.span
              animate={
                bigHeartAnim
                  ? { scale: [1, 1.5, 1], rotate: [0, -10, 10, 0] }
                  : {}
              }
              transition={{ duration: 0.5 }}
              className="text-7xl block"
            >
              ❤️
            </motion.span>
            <span
              className="font-body text-sm"
              style={{ color: "oklch(0.55 0.14 340)" }}
            >
              tap me!
            </span>
          </button>
        </motion.div>

        {/* ── Love Letter card ── */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="rounded-3xl p-8 shadow-love text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.22 10), oklch(0.6 0.18 355), oklch(0.62 0.14 305))",
          }}
          data-ocid="love_letter.card"
        >
          <div className="text-5xl mb-5">💌</div>
          <h3 className="font-script text-4xl mb-4 text-white">
            My Dearest Merin,
          </h3>
          <p className="font-body text-white/90 text-base leading-relaxed mb-4">
            Every single day with you is a gift I never want to unwrap too
            quickly. You make the ordinary feel extraordinary just by being in
            it. I cherish your laugh, your warmth, and the way you see the
            world.
          </p>
          <p className="font-body text-white/90 text-base leading-relaxed mb-6">
            I love you — not just today, but every day that comes after. You are
            my favourite person, always.
          </p>
          <p className="font-script text-2xl text-white/95">
            Forever yours, Sherry 💖
          </p>
        </motion.section>
      </main>

      {/* ── Footer ── */}
      <footer className="py-6 text-center">
        <p
          className="font-body text-sm"
          style={{ color: "oklch(0.6 0.1 330)" }}
        >
          Made with ❤️ by Sherry · {new Date().getFullYear()} ·{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            className="underline underline-offset-2 hover:opacity-80 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built with caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
