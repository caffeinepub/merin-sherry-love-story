import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

// ── 5000 Reasons Generator ─────────────────────────────────────────────────
function generateReasons(): string[] {
  const reasons: string[] = [];

  // Category 1: His personality
  const personalityAdjectives = [
    "kind",
    "gentle",
    "funny",
    "sweet",
    "caring",
    "thoughtful",
    "genuine",
    "warm",
    "honest",
    "patient",
    "creative",
    "intelligent",
    "playful",
    "charming",
    "tender",
    "sincere",
    "loyal",
    "brave",
    "humble",
    "cheerful",
    "witty",
    "magnetic",
    "wonderful",
    "remarkable",
    "precious",
    "special",
    "authentic",
    "real",
    "pure-hearted",
    "golden-souled",
  ];
  const personalityTemplates = [
    (a: string) => `I love how you're always so ${a} 💖`,
    (a: string) => `The way you're genuinely ${a} melts my heart completely`,
    (a: string) => `You being ${a} is one of my favourite things about you 🌸`,
    (a: string) =>
      `How ${a} you are every single day makes me fall harder, Merin`,
    (a: string) => `Your ${a} nature is something I treasure beyond words 💕`,
    (a: string) => `I adore everything about how ${a} you truly are`,
    (a: string) =>
      `Being ${a} comes so naturally to you and I love that so much 💗`,
    (a: string) => `The world is better because you're in it, being so ${a}`,
  ];
  for (const adj of personalityAdjectives) {
    for (const tmpl of personalityTemplates) {
      reasons.push(tmpl(adj));
    }
  }

  // Category 2: The way he texts/chats
  const textThings = [
    "you send me good morning messages",
    "you check in on me during the day",
    "you use my name when you text",
    "you remember the little things I tell you",
    "you never leave me on read",
    "you text back even when you're busy",
    "you know exactly what to say to make me smile",
    "you share random things that made you think of me",
    "you send voice messages and I love hearing your voice",
    "you tell me about your day like I'm already part of it",
    "you hype me up in the sweetest ways",
    "you make every conversation feel like home",
    "you laugh at my jokes even the bad ones",
    "you notice when I seem off and ask if I'm okay",
    "you write the most beautiful things to me",
    "you're honest about how you feel without making it weird",
    "you make late-night chats feel like adventures",
    "you send memes that are weirdly perfect for us",
    "you never make me feel needy for wanting to talk",
    "you turn ordinary moments into memories",
    "you always end our conversations with so much warmth",
    "you remember my favourite things and bring them up naturally",
    "you send long texts when I need them most",
    "you use emojis that feel like little digital hugs",
    "you always make me feel seen and understood",
  ];
  const textTemplates = [
    (t: string) => `I love how ${t} 💬`,
    (t: string) => `The fact that ${t} means everything to me 💖`,
    (t: string) => `It makes my whole day when ${t} 🌸`,
    (t: string) => `One of my favourite things: ${t} 💕`,
    (t: string) => `My heart does a little flip because ${t} ✨`,
    (t: string) => `I treasure the way ${t} 💗`,
  ];
  for (const thing of textThings) {
    for (const tmpl of textTemplates) {
      reasons.push(tmpl(thing));
    }
  }

  // Category 3: Online connection moments
  const onlineMoments = [
    "our late night calls that stretch past midnight",
    "the way you stay on call even when neither of us is talking",
    "those voice notes that make me feel like you're right here",
    "the memes you send that are perfectly us",
    "every playlist you've shared with me",
    "the way our time zones don't stop us",
    "staying up late just to be awake at the same time as you",
    "every screenshot of our chats I've saved",
    "the way video calls with you feel like visiting a whole other world",
    "how we built an entire universe through a screen",
    "those moments of comfortable silence on call",
    "laughing together through a camera and it feeling real",
    "the way you say goodnight like you really mean it",
    "inside jokes we made up without even meeting",
    "all the virtual dates that feel like real ones",
    "every song you ever sent me with a little note attached",
    "when you said things that changed how I see everything",
    "the moment I realised I was falling for you between two messages",
    "how you made me feel chosen even from thousands of miles away",
    "all the times we stayed connected despite distance and time",
  ];
  const momentTemplates = [
    (m: string) => `I will never forget ${m} 💖`,
    (m: string) =>
      `${m[0].toUpperCase() + m.slice(1)} — that's what real love looks like to me 🌸`,
    (m: string) => `My favourite memory is ${m} 💕`,
    (m: string) => `I love us for ${m} 💗`,
    (m: string) => `Thank you for ${m}, Merin ✨`,
    (m: string) => `I replay ${m} in my mind and smile every time 💖`,
    (m: string) =>
      `${m[0].toUpperCase() + m.slice(1)} is proof that distance means nothing 💝`,
  ];
  for (const moment of onlineMoments) {
    for (const tmpl of momentTemplates) {
      reasons.push(tmpl(moment));
    }
  }

  // Category 4: Things she imagines about meeting him
  const imagineThings = [
    "your laugh sounds even better in person",
    "your hugs will feel like finally arriving home",
    "seeing you smile for the first time in real life",
    "the first time I'll hear your voice without a screen between us",
    "walking beside you and feeling the world shift",
    "cooking something together in a tiny kitchen",
    "watching you talk about something you love and seeing your eyes light up",
    "the first moment our eyes meet across a room",
    "sharing a meal and it tasting better just because you're there",
    "falling asleep knowing you're actually nearby",
    "you reaching for my hand without thinking",
    "laughing so hard in person that we can't breathe",
    "dancing with you even if neither of us can dance",
    "the quiet mornings we'll share with coffee and no rush",
    "going to places we talked about during late night calls",
    "introducing you to the people I love and watching you charm them all",
    "that moment the airport doors open and I see your face",
    "the first photo we take together in real life",
    "you being even more wonderful than I imagined",
    "the way everything will feel different once we've hugged once",
  ];
  const imagineTemplates = [
    (i: string) => `I can already imagine ${i} 🌸`,
    (i: string) => `I dream about ${i} more than you know 💖`,
    (i: string) => `I keep thinking about ${i} and my heart races 💕`,
    (i: string) => `One day I'll get to experience ${i} and I can't wait ✨`,
    (i: string) =>
      `${i[0].toUpperCase() + i.slice(1)} — I hold onto that thought on hard days 💗`,
    (i: string) => `The idea of ${i} makes everything worth it, Merin 💝`,
    (i: string) => `I live for the future where ${i} 💖`,
  ];
  for (const img of imagineThings) {
    for (const tmpl of imagineTemplates) {
      reasons.push(tmpl(img));
    }
  }

  // Category 5: Dreams of the future together
  const futureDreams = [
    "a home full of warmth and your laughter",
    "road trips with no destination just each other",
    "building something beautiful together from scratch",
    "Sunday mornings slow and unhurried with you",
    "growing into better people side by side",
    "a life where I get to love you every single day",
    "celebrating every little win with you by my side",
    "getting through hard times together and coming out stronger",
    "making memories that no camera could ever fully capture",
    "the version of us that's been through everything and still chooses each other",
    "holidays that feel magical just because you're in them",
    "being each other's safe place for the rest of our lives",
    "building traditions that are just ours",
    "a love story that people talk about with warmth",
    "waking up next to you every morning and never taking it for granted",
    "growing old together and still laughing at the same things",
    "adventures we haven't even thought of yet",
    "a future where every hard thing led us here",
    "becoming a family in whatever shape that takes",
    "a life where I get to say 'this is Merin, my person'",
  ];
  const futureTemplates = [
    (f: string) => `I dream of ${f} 💖`,
    (f: string) => `More than anything I want ${f} with you 🌸`,
    (f: string) => `The future I want most has ${f} in it 💕`,
    (f: string) => `I choose ${f} every single day ✨`,
    (f: string) =>
      `${f[0].toUpperCase() + f.slice(1)} — that's what I'm working toward with you, Merin 💗`,
    (f: string) => `Everything I do is aimed at ${f} 💝`,
    (f: string) => `I'd wait forever for ${f} because it'll be worth it 💖`,
  ];
  for (const dream of futureDreams) {
    for (const tmpl of futureTemplates) {
      reasons.push(tmpl(dream));
    }
  }

  // Category 6: Random sweet details
  const sweetDetails = [
    "the name Merin is the most beautiful name I've ever heard",
    "you exist and somehow found me",
    "you make being loved feel easy",
    "you never try to be anyone other than yourself",
    "even your flaws are things I adore",
    "you love with your whole heart unguarded",
    "you make me want to be a better version of myself",
    "you're the first person I want to tell good news to",
    "you're the first person I want when something goes wrong",
    "you make silence feel comfortable",
    "you think deeply about things and it shows",
    "you're the kind of person who notices the small stuff",
    "you carry so much and still show up fully",
    "you have the most beautiful mind",
    "you turn ordinary days into something worth remembering",
    "you say my name and it sounds different than when anyone else does",
    "you're not perfect and that makes you even more real to me",
    "you're everything I didn't know I needed",
    "you've already changed me in the best ways",
    "you feel like the plot twist I always needed in my story",
    "you love the parts of me I thought were too much",
    "you're my favourite notification every single time",
    "you're proof that the universe conspires to bring people together",
    "you give me butterflies and peace at the same time",
    "you make uncertainty feel like an adventure not a fear",
    "you chose me too and that still amazes me",
    "you make love feel uncomplicated",
    "you remind me that good people really do exist",
    "you're my safe harbour and my wildest dream all at once",
    "you make everything better just by being you",
  ];
  const detailTemplates = [
    (d: string) => `I love that ${d} 💖`,
    (d: string) => `It's incredible that ${d} 🌸`,
    (d: string) => `Something I treasure: ${d} 💕`,
    (d: string) => `My heart is full because ${d} ✨`,
    (d: string) =>
      `${d[0].toUpperCase() + d.slice(1)} — and that's reason enough 💗`,
    (d: string) => `I keep coming back to the fact that ${d} 💝`,
    (d: string) => `Every day I'm grateful that ${d}, Merin 💖`,
    (d: string) =>
      `${d[0].toUpperCase() + d.slice(1)} and I could never stop being thankful`,
  ];
  for (const detail of sweetDetails) {
    for (const tmpl of detailTemplates) {
      reasons.push(tmpl(detail));
    }
  }

  // Category 7: Not having met yet but already deeply in love
  const notMetThings = [
    "loving someone this deeply without touching them once proves love is beyond physical",
    "we haven't met yet and I already know you're it for me",
    "distance couldn't stop this love from blooming",
    "I fell in love with your soul before I could hold your hand",
    "every barrier between us only made this stronger",
    "I know the shape of your laugh before I've heard it in person",
    "you're a stranger to my hands but not to my heart",
    "miles between us and still somehow I feel you close",
    "not having met you yet makes every future moment feel like treasure",
    "I loved you in pixels and I'll love you more in person",
    "we built something real without a single shared room",
    "one day 'haven't met yet' will become 'remember when we first met'",
    "the waiting has only made my love for you more certain",
    "I don't need to have held you to know how right this is",
    "everything I know about you makes me love you more not less",
    "the anticipation of meeting you is one of the most beautiful feelings",
    "loving you long distance has taught me what love really is",
    "every day without you is proof that I want every day with you",
    "not meeting you yet is the plot before the best chapter",
    "I already love you completely and meeting you will only deepen that",
  ];
  const notMetTemplates = [
    (n: string) => `${n[0].toUpperCase() + n.slice(1)} 💖`,
    (n: string) => `I think about how ${n} 🌸`,
    (n: string) => `The truth is: ${n} 💕`,
    (n: string) => `It means everything that ${n} ✨`,
    (n: string) => `I hold onto the fact that ${n} 💗`,
    (n: string) => `My heart knows: ${n} 💝`,
    (n: string) => `One of my deepest truths is that ${n}, Merin 💖`,
    (n: string) => `I believe with everything in me: ${n}`,
  ];
  for (const thing of notMetThings) {
    for (const tmpl of notMetTemplates) {
      reasons.push(tmpl(thing));
    }
  }

  // Category 8: Extended fillers with varied sentence structures to fill to 5000
  const fillerSubjects = [
    "your voice",
    "your mind",
    "your heart",
    "your laugh",
    "your soul",
    "your kindness",
    "your warmth",
    "your smile",
    "your energy",
    "your presence",
    "your humour",
    "your honesty",
    "your depth",
    "your gentleness",
    "your love",
    "your patience",
    "your passion",
    "your spirit",
    "your light",
    "your care",
  ];
  const fillerPredicates = [
    "is everything I ever wanted",
    "heals parts of me I didn't know were broken",
    "makes me believe in fate",
    "feels like sunlight on a cloudy day",
    "is something I want to hold onto forever",
    "makes every day brighter",
    "is the first thing I think about in the morning",
    "gives me reasons to look forward to tomorrow",
    "is something no one else could ever replicate",
    "makes me certain this is real",
    "is woven into all my favourite moments now",
    "changed my world completely",
    "is a gift I never saw coming",
    "leaves me breathless every single time",
    "is my favourite thing in the universe",
    "grounds me and lifts me up at once",
    "is the reason I believe in beautiful things",
    "makes the distance feel like nothing",
    "is the answer to every question I ever had about love",
    "fills every quiet moment with something warm",
    "makes me feel lucky in a way I can't explain",
    "is something I'd choose over and over again",
    "has become my favourite thing about being alive",
    "makes me want to write pages and pages and never stop",
    "is what I didn't know I was waiting for",
  ];
  for (const subject of fillerSubjects) {
    for (const predicate of fillerPredicates) {
      reasons.push(
        `${subject[0].toUpperCase() + subject.slice(1)} ${predicate} 💖`,
      );
      reasons.push(`I love that ${subject} ${predicate} 💕`);
      reasons.push(`Merin, ${subject} ${predicate} — and I mean every word 🌸`);
    }
  }

  // Category 9: More specific sweet observations
  const sweetObservations = [
    "I love how you've never made me feel like a burden",
    "I love that you take my feelings seriously",
    "I love how you dream big and actually chase those dreams",
    "I love the way your enthusiasm is completely contagious",
    "I love that you're emotionally intelligent in a way that's rare",
    "I love how you handle hard conversations with grace",
    "I love that you never try to change who I am",
    "I love how you celebrate me on days I can't celebrate myself",
    "I love that you tell me things you don't tell anyone else",
    "I love the trust that has grown between us",
    "I love how you make me feel beautiful even through a screen",
    "I love the way you listen — really listen — when I speak",
    "I love how safe I feel being vulnerable with you",
    "I love that you show up consistently in little ways",
    "I love how you find joy in the simplest things",
    "I love the way your happiness becomes my happiness",
    "I love how we can talk about anything and everything",
    "I love that you apologise genuinely when you need to",
    "I love how thoughtful your words always are",
    "I love the way you hold space for me without judgment",
    "I love that you make me feel less alone in this world",
    "I love how you always find a way to make me laugh when I'm sad",
    "I love that you care about the things that matter to me",
    "I love how you love the people in your life so fiercely",
    "I love that you chose to let me in",
    "I love the way you make ordinary Tuesday evenings something to look forward to",
    "I love that I know your favourite things and they make me think of you always",
    "I love how you're growing and I get to witness it",
    "I love that your heart is so open despite everything",
    "I love how you make love look effortless",
  ];
  reasons.push(...sweetObservations);

  // Category 10: Top-up reasons to reach exactly 5000
  const topUpBase = [
    "the way your name alone makes me smile",
    "how choosing you feels like the easiest thing I've ever done",
    "that I get to love you, Merin — of all the people in the world, you",
    "how this love grew quietly and then all at once",
    "that you are my favourite chapter so far",
    "how loving you feels like finally speaking my mother tongue",
    "that missing you means I have something worth missing",
    "how every song hits differently since I found you",
    "that you're the reason I believe in happy endings",
    "how this started as a message and became my whole heart",
    "that I would find you again in every lifetime",
    "how being with you — even from afar — is my favourite place to be",
    "that you are proof that love doesn't need geography",
    "how you make tomorrow feel like something worth waiting for",
    "that my heart knew before my head did",
    "how quickly you became home to me",
    "that I love you in the present and in every future tense",
    "how you turned a wish I barely dared to have into something real",
    "that every single day I love you a little more than the last",
    "how you are, simply, my favourite person in the world",
  ];
  const topUpTemplates = [
    (r: string) => `I love ${r} 💖`,
    (r: string) => `Because ${r} 🌸`,
    (r: string) => `I love you for ${r} 💕`,
    (r: string) => `Reason: ${r} ✨`,
    (r: string) => `My heart chose you because of ${r} 💗`,
    (r: string) => `Simply: ${r} 💝`,
    (r: string) => `Merin — ${r} 💖`,
    (r: string) => `I can't stop thinking about ${r} 💕`,
    (r: string) => `Every time I think of ${r} I smile 🌸`,
    (r: string) => `${r[0].toUpperCase() + r.slice(1)} — this is love 💖`,
  ];
  for (const base of topUpBase) {
    for (const tmpl of topUpTemplates) {
      reasons.push(tmpl(base));
    }
  }

  // Trim or pad to exactly 5000
  while (reasons.length < 5000) {
    const idx = reasons.length % topUpBase.length;
    const tmplIdx =
      Math.floor(reasons.length / topUpBase.length) % topUpTemplates.length;
    reasons.push(`${topUpTemplates[tmplIdx](topUpBase[idx])} 💖`);
  }

  return reasons.slice(0, 5000);
}

const ALL_REASONS = generateReasons();
const PAGE_SIZE = 50;

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

// ── Reasons Section ────────────────────────────────────────────────────────
function ReasonsSection({
  sectionRef,
}: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!search.trim()) return ALL_REASONS;
    const q = search.toLowerCase();
    return ALL_REASONS.filter((r) => r.toLowerCase().includes(q));
  }, [search]);

  const visibleReasons = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visibleReasons.length < filtered.length;

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 px-4"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.93 0.06 350) 0%, oklch(0.96 0.05 320) 40%, oklch(0.94 0.06 360) 100%)",
      }}
      data-ocid="reasons5k.section"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="text-5xl mb-4">💕</div>
          <h2
            className="font-script text-5xl md:text-7xl leading-tight mb-4"
            style={{ color: "oklch(0.42 0.22 10)" }}
          >
            5,000 Reasons I Love You
          </h2>
          <p
            className="font-body text-lg md:text-xl max-w-xl mx-auto"
            style={{ color: "oklch(0.48 0.14 330)" }}
          >
            Even without meeting you, here are all the reasons my heart chose
            you, Merin 💕
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 relative"
        >
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg pointer-events-none">
            🔍
          </span>
          <Input
            type="text"
            placeholder="Search reasons… (e.g. 'smile', 'late night', 'Merin')"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="pl-10 py-3 rounded-2xl font-body text-base shadow-sm"
            style={{
              background: "oklch(1 0 0 / 0.85)",
              border: "1.5px solid oklch(0.78 0.12 340)",
              color: "oklch(0.3 0.1 340)",
            }}
            data-ocid="reasons5k.search_input"
          />
        </motion.div>

        {/* Counter */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-body text-sm text-center mb-8"
          style={{ color: "oklch(0.55 0.12 330)" }}
          data-ocid="reasons5k.panel"
        >
          Showing <strong>{visibleReasons.length}</strong> of{" "}
          <strong>{filtered.length.toLocaleString()}</strong> reasons
          {search && ` matching "${search}"`}
        </motion.p>

        {/* Cards grid */}
        <div className="space-y-3" data-ocid="reasons5k.list">
          {visibleReasons.map((reason, idx) => {
            const globalIdx = ALL_REASONS.indexOf(reason);
            const num = (globalIdx !== -1 ? globalIdx : idx) + 1;
            const isNew = idx >= (page - 1) * PAGE_SIZE;
            return (
              <motion.div
                key={`reason-${num}`}
                initial={isNew ? { opacity: 0, y: 16 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: isNew ? (idx % PAGE_SIZE) * 0.012 : 0,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="flex items-start gap-4 rounded-2xl px-5 py-4"
                style={{
                  background:
                    idx % 3 === 0
                      ? "oklch(1 0 0 / 0.82)"
                      : idx % 3 === 1
                        ? "oklch(0.98 0.04 355 / 0.9)"
                        : "oklch(0.97 0.04 305 / 0.85)",
                  boxShadow: "0 2px 8px oklch(0.65 0.12 340 / 0.12)",
                  backdropFilter: "blur(8px)",
                }}
                data-ocid={`reasons5k.item.${Math.min(idx + 1, 3)}`}
              >
                <span
                  className="font-display text-xs font-bold shrink-0 mt-0.5 px-2 py-0.5 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.62 0.2 10), oklch(0.68 0.18 340))",
                    color: "white",
                    minWidth: "42px",
                    textAlign: "center",
                  }}
                >
                  #{num}
                </span>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "oklch(0.32 0.1 340)" }}
                >
                  {reason}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16" data-ocid="reasons5k.empty_state">
            <div className="text-5xl mb-4">🌸</div>
            <p
              className="font-body text-lg"
              style={{ color: "oklch(0.55 0.12 330)" }}
            >
              No reasons found for "{search}" — but trust me, they all still
              apply! 💖
            </p>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-center"
          >
            <button
              type="button"
              className="font-body font-semibold text-base text-white px-8 py-4 rounded-2xl shadow-lg transition-transform hover:scale-105 active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 10), oklch(0.62 0.18 355))",
              }}
              onClick={() => setPage((p) => p + 1)}
              data-ocid="reasons5k.button"
            >
              Load More Reasons 💕
            </button>
            <p
              className="font-body text-xs mt-3"
              style={{ color: "oklch(0.6 0.1 330)" }}
            >
              {filtered.length - visibleReasons.length} more to explore
            </p>
          </motion.div>
        )}

        {/* All shown message */}
        {!hasMore && filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 text-center py-8 rounded-3xl"
            style={{ background: "oklch(1 0 0 / 0.6)" }}
            data-ocid="reasons5k.success_state"
          >
            <div className="text-4xl mb-3">💖</div>
            <p
              className="font-script text-2xl"
              style={{ color: "oklch(0.42 0.22 10)" }}
            >
              {search
                ? `All ${filtered.length} matching reasons ✨`
                : "All 5,000 reasons — every single one true 💕"}
            </p>
            <p
              className="font-body text-sm mt-2"
              style={{ color: "oklch(0.58 0.1 330)" }}
            >
              I love you, Merin. Always. 🌸
            </p>
          </motion.div>
        )}
      </div>
    </section>
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
  const reasonsSectionRef = useRef<HTMLElement | null>(null);

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

  const scrollToReasons = () => {
    reasonsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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

          {/* Scroll to 5000 reasons button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6"
          >
            <button
              type="button"
              onClick={scrollToReasons}
              className="font-body font-semibold text-base text-white px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 10), oklch(0.62 0.18 340))",
                boxShadow: "0 4px 20px oklch(0.55 0.22 10 / 0.35)",
              }}
              data-ocid="hero.primary_button"
            >
              See 5,000 Reasons 💕
            </button>
          </motion.div>
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
                  You&apos;re the melody I never want to stop hearing 💕
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

      {/* ── 5000 Reasons Section ─────────────────── */}
      <ReasonsSection sectionRef={reasonsSectionRef} />

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
