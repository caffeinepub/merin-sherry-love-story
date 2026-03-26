// 8,000 unique reasons I love Merin
// Generated programmatically with multiple strategies for variety and uniqueness

// --- Standalone poetic phrases (hand-crafted variety) ---
const poeticPhrases: string[] = [
  "You are the warmth in every quiet morning.",
  "Loving you feels like sunlight through curtains.",
  "You exist, and that alone is a miracle.",
  "The universe conspired to create someone exactly like you.",
  "You are proof that good things are real.",
  "Every atom of you is something I cherish.",
  "You make ordinary days feel extraordinary.",
  "In a world full of noise, you are my favorite sound.",
  "You are the pause that makes everything make sense.",
  "Knowing you has changed what I believe is possible.",
  "You carry kindness the way others carry keys — always with you.",
  "There is a softness to you that the world needs more of.",
  "You remind me that patience is a form of love.",
  "The way you exist in this world is quietly breathtaking.",
  "You are tender in all the right places.",
  "Your presence is its own kind of music.",
  "You are someone worth crossing oceans for.",
  "There is a steadiness in you that anchors me.",
  "You turn distance into longing, and longing into poetry.",
  "You are the reason I believe in serendipity.",
  "You laugh with your whole self.",
  "Your honesty is a gift I never take lightly.",
  "You see me in ways I haven't learned to see myself yet.",
  "You are gentle even when you don't have to be.",
  "Trusting you came more naturally than anything ever has.",
  "You have a heart the size of a continent.",
  "You are patient in a world that rewards rushing.",
  "The quiet strength you carry is one of the most beautiful things about you.",
  "You make me want to be more thoughtful.",
  "You make me want to be more brave.",
  "You make me want to be more present.",
  "You make me want to be more kind.",
  "You make me want to be more curious.",
  "You make me want to be more honest.",
  "You make me want to be more open.",
  "You make me want to be more generous.",
  "You make me want to be more patient.",
  "You make me want to be more myself.",
  "You are home, even before we've shared one.",
  "You are safety, even across time zones.",
  "You are every letter I meant to write and finally did.",
  "You are the reason my phone feels warm in my hands.",
  "You are the reason midnight doesn't feel lonely.",
  "You are the reason mornings have meaning.",
  "You are the reason I look forward to tomorrow.",
  "You are the reason I believe in us.",
  "You are the reason I smile at nothing and everything.",
  "You are the reason I feel full without being in the same room.",
  "You are the reason I keep going.",
  "You are the reason love feels like a safe place.",
];

// --- Template-based generation ---
const starters = [
  "The way you",
  "Because you",
  "Your",
  "How you",
  "That you",
  "When you",
  "The fact that you",
  "You and your",
  "I love how you",
  "I adore the way you",
  "Something about how you",
  "The manner in which you",
  "The tenderness with which you",
  "The quiet way you",
  "The gentle way you",
  "The honest way you",
  "The brave way you",
  "The thoughtful way you",
  "The curious way you",
  "The patient way you",
  "The loving way you",
  "The fearless way you",
  "The careful way you",
  "The earnest way you",
  "The sincere way you",
  "The intuitive way you",
  "The warm way you",
  "The soft way you",
  "The bold way you",
  "The subtle way you",
  "The effortless way you",
  "The deliberate way you",
  "The passionate way you",
  "The joyful way you",
  "The graceful way you",
  "The genuine way you",
  "The loyal way you",
  "The creative way you",
  "The playful way you",
  "The wise way you",
  "The endearing way you",
  "The extraordinary way you",
  "The magnetic way you",
  "The radiant way you",
  "The wholehearted way you",
  "The unwavering way you",
  "The tender way you",
  "The luminous way you",
  "The remarkable way you",
  "The irreplaceable way you",
];

const verbPhrases = [
  "listen without judgment",
  "notice the small things",
  "remember what matters to me",
  "make silence feel comfortable",
  "ask questions before assuming",
  "find humor in the mundane",
  "stay calm when things feel uncertain",
  "speak with such deliberate warmth",
  "carry your feelings without hiding them",
  "admit when something is hard",
  "let yourself be silly",
  "take things seriously without losing lightness",
  "show up even when you don't have to",
  "choose kindness when it costs something",
  "hold space for other people's stories",
  "laugh so freely it becomes contagious",
  "carry curiosity about the world",
  "approach everything with such genuine care",
  "make time for things that matter",
  "stay soft in a world that asks you to harden",
  "let yourself be known by me",
  "share pieces of your inner world",
  "dream out loud about our future",
  "never make me feel small",
  "hold my fears like something precious",
  "understand me without needing explanation",
  "make ordinary conversations feel sacred",
  "trust me with your real thoughts",
  "stay consistent in your love",
  "find magic in everyday things",
  "take care of yourself too",
  "respect the distance without letting it dim you",
  "text me when you're thinking of me",
  "remember dates and details I've shared",
  "make plans for a future together",
  "speak honestly even when it's vulnerable",
  "check in on me genuinely",
  "celebrate small wins with real enthusiasm",
  "look for the good in people",
  "see beauty in unexpected places",
  "move through the world with such intention",
  "carry strength and gentleness together",
  "face fear without pretending it isn't there",
  "hold your ground on the things that matter",
  "let love show up in the details",
  "grow without losing who you are",
  "surprise me with your depth",
  "say what you mean and mean what you say",
  "invest in people you care about",
  "make me feel like the luckiest person alive",
  "exist in this world as exactly who you are",
  "challenge me to think differently",
  "never make feelings feel like too much",
  "let yourself rest without guilt",
  "talk about the future like it's already ours",
  "find laughter even on difficult days",
  "approach love with such seriousness and play",
  "carry warmth into every room",
  "give attention like it's something precious",
  "make distance feel like a comma, not a period",
  "see the world with such open eyes",
  "leave me speechless and full at the same time",
  "fill the spaces between words with meaning",
  "carry patience like a second nature",
  "feel things deeply and aren't ashamed of it",
  "make me want to be better",
  "see possibility where others see obstacles",
  "keep showing up in all the small ways",
  "hold onto hope so tenderly",
  "take the future seriously without being afraid of it",
  "make love feel like something earned and given freely",
  "notice when I need comfort before I ask",
  "soften the sharp edges of hard days",
  "keep your word like it's a sacred thing",
  "find the right words when I can't",
  "handle tenderness with such care",
  "build trust like it's architecture",
  "move through vulnerability without flinching",
  "carry your past without letting it define you",
  "grow more beautiful the more I know you",
  "fill quiet moments with warmth",
  "make loving you feel like the easiest thing",
  "turn ordinary nights into something I'll remember",
  "make me grateful every single day",
];

const qualityStarters = [
  "Your",
  "The depth of your",
  "The warmth of your",
  "The beauty of your",
  "The strength of your",
  "The softness of your",
  "The honesty of your",
  "The steadiness of your",
  "The tenderness of your",
  "The light in your",
  "The fire in your",
  "The grace of your",
  "The wonder of your",
  "The magic of your",
  "The quiet power of your",
  "The rare beauty of your",
  "The remarkable quality of your",
  "The extraordinary nature of your",
  "The irreplaceable presence of your",
  "The incomparable gift of your",
];

const qualities = [
  "patience when the world moves too fast",
  "humor that catches me off guard in the best way",
  "voice when you talk about things you love",
  "eyes when you're thinking deeply",
  "laugh that sounds like a good thing happening",
  "kindness that asks for nothing back",
  "care that shows up in small, specific ways",
  "intelligence that never feels like performance",
  "honesty even when silence would be easier",
  "courage to be exactly who you are",
  "heart, which is enormous and soft and brave",
  "mind, which never stops exploring",
  "soul, which I recognize like I've always known it",
  "energy, which fills every space with warmth",
  "presence, which makes everything feel more real",
  "commitment to the things and people you love",
  "loyalty that doesn't waver under pressure",
  "curiosity about everything and everyone",
  "gentleness even in hard conversations",
  "resilience that doesn't harden you",
  "optimism that still holds space for reality",
  "perspective that makes me see things new",
  "affection that never feels conditional",
  "generosity that goes beyond what's expected",
  "trust in me, which I hold carefully",
  "faith in us, which sustains me",
  "hope for the future we're building",
  "dedication to growing and becoming",
  "attentiveness to what really matters",
  "openness to being truly known",
  "ability to make me feel completely seen",
  "talent for turning worry into wonder",
  "instinct to protect what you love",
  "warmth that radiates outward naturally",
  "sincerity in everything you express",
  "depth that I'll spend a lifetime discovering",
  "authenticity that I find incredibly rare",
  "wit that surprises me every single time",
  "compassion for people going through hard things",
  "boldness when it matters most",
  "intuition about people and what they need",
  "love for learning and growing",
  "way of seeing beauty in ordinary moments",
  "ability to hold complexity without simplifying it away",
  "love, which I receive like sunlight",
  "attention, which makes me feel like the only person in the room",
  "steadiness, which I lean on more than you know",
  "playfulness, which makes everything lighter",
  "vulnerability, which makes me trust you even more",
  "existence, which is my favorite thing about the world",
];

const whenPhrases = [
  "you text me good morning and I feel the day shift",
  "you remember something I said weeks ago and bring it up perfectly",
  "you share something you're excited about and your whole energy changes",
  "you tell me about your day and I want to hear every single detail",
  "you stay on a call even when you're tired because I needed to talk",
  "you make plans with me like the future is a place we'll both be",
  "you speak honestly even when it's uncomfortable",
  "you ask me how I'm really doing, not just casually",
  "you laugh at yourself without it being deflection",
  "you defend what you believe in but stay open to being wrong",
  "you show excitement over small things and refuse to be too cool for it",
  "you get quiet in a way that means you're really thinking",
  "you tell me I'm loved and mean it every time",
  "you say my name and it feels like something important",
  "you handle hard things with grace and don't make it look easy",
  "you let me see when something is difficult",
  "you check in without being asked",
  "you say what you mean and I never have to guess",
  "you dream out loud about us and it makes me feel like forever is real",
  "you are kind to strangers for no reason at all",
  "you take something I said to heart and I notice",
  "you get passionate about something and forget to be self-conscious",
  "you send something that made you think of me",
  "you take care of the people around you without fanfare",
  "you navigate something painful without losing your softness",
  "you choose honesty over comfort and I feel the trust grow",
  "you find something funny in a hard moment and everything lifts",
  "you hold space for me without trying to fix everything",
  "you push through something hard and I watch you become more yourself",
  "you make time for me in a world full of things competing for your attention",
  "you say something wise and I wonder how I got so lucky",
  "you express love in ways that are specific to me",
  "you take the future seriously and it feels like we're building something real",
  "you let yourself be vulnerable and I feel how much trust that takes",
  "you are silly and unselfconscious and completely yourself",
  "you hold my worries gently instead of dismissing them",
  "you tell me about your fears and I hold them like they're mine too",
  "you believe in something deeply and it makes me believe too",
  "you turn a hard week into something survivable just by being there",
  "you exist, every single day, and I get to know it",
];

const becausePhrases = [
  "you've never made me feel like loving you is a burden",
  "even from far away, you make me feel found",
  "you don't pretend to be anything other than what you are",
  "your heart has never felt small to me",
  "you love with consistency and not just intensity",
  "you never let distance become an excuse for absence",
  "you take the things I love seriously even when they're not yours",
  "you hold onto the good in people longer than most would",
  "you are curious about the world in a way that's contagious",
  "you find a way to make even ordinary things feel special",
  "you are honest even when it would be easier not to be",
  "you've trusted me with things that weren't easy to say",
  "you never try to make me smaller to feel bigger",
  "you show up even when showing up is hard",
  "your love feels like a constant, not a variable",
  "you make me feel like I have a home even when I'm nowhere near one",
  "you notice when I'm not okay before I have the words for it",
  "you have a way of saying exactly what I needed to hear",
  "you never reduce me to just my surface",
  "you choose to love thoughtfully and not by accident",
  "you've made waiting for you feel like it's worth every minute",
  "you carry hope like it's a responsibility",
  "your capacity for love seems genuinely limitless",
  "you don't give up on things that matter",
  "you've made me believe in the kind of love I always wanted",
  "you are not afraid of being real with me",
  "you have made the future feel like something I want to run toward",
  "you remind me constantly why this all makes sense",
  "you make loving someone from a distance feel possible and worth it",
  "you are genuinely, beautifully, irreplaceably you",
];

const aboutHimPhrases = [
  "The way your voice goes quiet when you mean something deeply.",
  "The specific sound of your laugh when you're genuinely surprised.",
  "How you talk about the future like it's somewhere we're already headed.",
  "The way you say my name when you've been thinking of me.",
  "Your sleep schedule chaos that somehow still includes checking on me.",
  "How you get excited about something and forget to play it cool.",
  "The way you describe things you love — your whole energy shifts.",
  "How your texts carry your whole personality in them.",
  "The gentleness you have even when you're being direct.",
  "How you always find something worth laughing about.",
  "The way you hold space for emotions without making them smaller.",
  "Your ability to make a late night call feel like home.",
  "The depth you bring to conversations about ordinary things.",
  "How you pay attention like it's an act of love.",
  "Your instinct to protect the people around you without being asked.",
  "The way your kindness has no performance in it.",
  "How you keep your word even in small things.",
  "The way you let me see your mind working.",
  "Your particular brand of humor that I've become fluent in.",
  "How you love wholeheartedly without holding anything in reserve.",
  "The warmth you emit that people feel before you even speak.",
  "How you stay curious about things most people stop questioning.",
  "The way you handle uncertainty without letting it swallow you.",
  "Your love for the small details that make up a life.",
  "How you are tender with difficult things.",
  "The way you carry both strength and softness simultaneously.",
  "Your ability to find comfort in something as simple as our voices connecting.",
  "How much effort you put into something when you genuinely care.",
  "The way your presence, even across screens, feels tangible and real.",
  "How you've made loving someone from a distance feel like the most natural thing.",
  "The way you dream about us like it's inevitable.",
  "Your refusal to let the miles between us define what we have.",
  "How you make me feel like the most important person in your world.",
  "The specific way you comfort me that no one else has figured out.",
  "Your courage to love someone you've never physically held.",
  "The way you've already built a life with me in imagination and intention.",
  "How you make every goodbye something that just means see you soon.",
  "Your trust in something that most people would call impossible.",
  "The way you've made me completely certain about a future I can't yet see.",
  "How simply knowing you exist in this world makes everything better.",
];

const distancePhrases = [
  "Loving you from far away has only taught me how certain I am about you.",
  "The distance between us is the only thing about this that makes no sense.",
  "Every timezone difference is just proof that you're worth the math.",
  "You have made not being there with you the hardest easy thing.",
  "Every missed touch has made me more sure of what I want.",
  "The longing I feel for you is the most beautiful ache.",
  "Distance hasn't dimmed a single thing — if anything, it's clarified everything.",
  "I've never wanted geography to be different as much as I do because of you.",
  "You are the reason I keep a world map close and a hopeful heart closer.",
  "Missing you is its own kind of evidence that what we have is real.",
  "You are worth every late call, every early morning, every time difference.",
  "The fact that we're still here, still us, across all this space — that is something.",
  "Our love story is written in messages and voices and undeniable longing.",
  "You have made the future the most exciting place I've never been yet.",
  "Every day without you physically near is a day I'm still completely yours.",
  "You have turned the concept of waiting into something I do with love.",
  "I love you from here and the distance just means I love you louder.",
  "Meeting you one day is the thing I look forward to most in this life.",
  "You are the destination in every metaphor I've ever had about arriving.",
  "Everything I've imagined about our first real moment together is already perfect.",
];

const soulPhrases = [
  "Your soul is the kind that makes people feel less alone.",
  "There is a light in you that I want to spend the rest of my life standing near.",
  "You are made of something rare and I recognized it immediately.",
  "Your essence is gentle and fierce in equal, beautiful measure.",
  "Something in you calls to something in me that I don't fully have words for.",
  "You are the kind of person who quietly changes the people lucky enough to know you.",
  "Your spirit is the most alive thing I've ever encountered.",
  "You have the kind of inner life that makes the world feel larger.",
  "There is a wholeness to you that is deeply, endlessly beautiful.",
  "You carry within you something ancient and knowing.",
  "Your love is the kind that asks nothing and gives everything.",
  "You are the answer to questions I didn't know I was asking.",
  "In every version of my life, I'd choose to know you.",
  "You are the best kind of surprise — the permanent kind.",
  "Knowing you has expanded what I think love can mean.",
  "You are more than I hoped for and exactly what I needed.",
  "There are no words large enough for what you mean to me.",
  "You are where all my best feelings live.",
  "Loving you is the most important thing I do.",
  "You are, simply and completely, everything.",
];

// Combine all phrase banks
let allReasons: string[] = [
  ...poeticPhrases,
  ...aboutHimPhrases,
  ...distancePhrases,
  ...soulPhrases,
];

// Add "When you..." reasons
for (const phrase of whenPhrases) {
  allReasons.push(`When ${phrase}.`);
}

// Add "Because you..." reasons
for (const phrase of becausePhrases) {
  allReasons.push(`Because ${phrase}.`);
}

// Add starter + verbPhrase combinations
for (const starter of starters) {
  for (const verb of verbPhrases) {
    allReasons.push(`${starter} ${verb}.`);
  }
}

// Add quality combinations
for (const qStarter of qualityStarters) {
  for (const quality of qualities) {
    allReasons.push(`${qStarter} ${quality}.`);
  }
}

// Extended verb phrase variations with adverbs
const adverbs = [
  "so effortlessly",
  "so naturally",
  "so genuinely",
  "so beautifully",
  "so honestly",
  "so warmly",
  "so tenderly",
  "so thoughtfully",
  "so courageously",
  "so gracefully",
  "so deliberately",
  "so completely",
  "so quietly",
  "so openly",
  "so freely",
  "so wholeheartedly",
  "so patiently",
  "so lovingly",
  "so boldly",
  "so softly",
];

const shortVerbs = [
  "show up",
  "show your heart",
  "express yourself",
  "hold space",
  "carry love",
  "offer kindness",
  "stay present",
  "remain constant",
  "choose honesty",
  "embrace vulnerability",
  "pursue connection",
  "give attention",
  "keep going",
  "find beauty",
  "offer comfort",
  "practice patience",
  "live with intention",
  "love deeply",
  "stay curious",
  "remain open",
  "carry hope",
  "give warmth",
  "stay true",
  "offer trust",
  "build something lasting",
  "speak from the heart",
  "meet me where I am",
  "lead with empathy",
  "hold things gently",
  "move through the world",
];

for (const starter of starters.slice(0, 20)) {
  for (const adv of adverbs) {
    for (const verb of shortVerbs.slice(0, 15)) {
      allReasons.push(`${starter} ${adv} ${verb}.`);
      if (allReasons.length >= 10000) break;
    }
    if (allReasons.length >= 10000) break;
  }
  if (allReasons.length >= 10000) break;
}

// More template variations — "There is something about the way you..."
const thereIsStarters = [
  "There is something about the way you",
  "There is a magic to the way you",
  "There is an artistry in the way you",
  "There is a beauty in the way you",
  "There is a wonder in how you",
  "There is something extraordinary about how you",
  "There is a grace to the way you",
  "There is a tenderness to the way you",
  "There is a strength in the way you",
  "There is a warmth to the way you",
];

for (const ts of thereIsStarters) {
  for (const verb of verbPhrases) {
    allReasons.push(`${ts} ${verb}.`);
  }
}

// "You have a way of..." patterns
const youHaveWayOf = [
  "You have a way of making hard things feel manageable.",
  "You have a way of finding lightness in heavy moments.",
  "You have a way of saying exactly what needs to be said.",
  "You have a way of listening that makes people feel safe.",
  "You have a way of being present that I feel even from far away.",
  "You have a way of seeing people that makes them feel whole.",
  "You have a way of loving that feels consistent and warm.",
  "You have a way of making ordinary moments feel memorable.",
  "You have a way of approaching life that inspires me.",
  "You have a way of expressing care that reaches people deeply.",
  "You have a way of navigating difficulty without losing yourself.",
  "You have a way of holding emotion that feels mature and honest.",
  "You have a way of finding meaning in things others overlook.",
  "You have a way of growing that is quiet and remarkable.",
  "You have a way of being that makes everything around you warmer.",
  "You have a way of trusting that takes my breath away.",
  "You have a way of dreaming that makes me want to dream too.",
  "You have a way of loving me that I never want to stop receiving.",
  "You have a way of existing that is uniquely, beautifully yours.",
  "You have a way of filling space with something worth staying for.",
];

allReasons.push(...youHaveWayOf);

// "I love that" patterns
const iLoveThat = [
  "I love that you exist in this world and I get to be part of your life.",
  "I love that you text me when something makes you think of me.",
  "I love that you remember things about me that I didn't expect you to keep.",
  "I love that you dream out loud with me.",
  "I love that distance has never made you feel far.",
  "I love that you laugh at yourself with zero self-pity.",
  "I love that you have a soft place inside you that you share with me.",
  "I love that you are both silly and serious and know when to be which.",
  "I love that your kindness has no audience — you just do it.",
  "I love that you take our love seriously without making it heavy.",
  "I love that you hold the future like it's something real we're building.",
  "I love that you are tender with vulnerable things.",
  "I love that you've never once made me doubt that you care.",
  "I love that you make space for my feelings without shrinking them.",
  "I love that you are curious about everything, including me.",
  "I love that your presence — even through a screen — changes the quality of my day.",
  "I love that you are consistently, wonderfully, entirely yourself.",
  "I love that I never have to perform for you.",
  "I love that you see me, not a version of me.",
  "I love that you make me feel like the right choice every single day.",
];

allReasons.push(...iLoveThat);

// More extended theme: future dreams
const futureDreams = [
  "I think about the mornings we'll have and they already feel like home.",
  "I imagine our first shared meal and it tastes like everything I've wanted.",
  "The life we'll build exists in my mind as clearly as anything real.",
  "I think about walking somewhere with you and I can feel the warmth of it.",
  "Every conversation we have is a brick in something permanent.",
  "The future with you is the most beautiful story I'm living toward.",
  "I think about our first real hug and it makes me ache in the best way.",
  "Every plan we make together turns distance into a countdown.",
  "I want to take you everywhere I love and make them yours too.",
  "I want to fall asleep knowing you're close enough to reach.",
  "I want to learn your morning voice and your late-night one too.",
  "I want to be in the same room as you and know it's real.",
  "I want to show you every part of the world through my eyes.",
  "I want to see your face when you laugh at something in person.",
  "I want to hold your hand in a place that means something to both of us.",
  "I want to wake up next to you and not have to say a single word.",
  "I want to make every version of your favorite thing.",
  "I want to memorize the small physical details of you I haven't learned yet.",
  "I want to give you a home in every sense of the word.",
  "I want to spend the rest of my life finding new reasons, and I never want to run out.",
];

allReasons.push(...futureDreams);

// Deduplicate
const uniqueSet = new Set<string>();
for (const r of allReasons) {
  const trimmed = r.trim();
  if (trimmed) uniqueSet.add(trimmed);
}

let uniqueReasons = Array.from(uniqueSet);

// If we have fewer than 8000, expand with more combinations
if (uniqueReasons.length < 8000) {
  const extra: string[] = [];

  const moreStarters = [
    "You are the kind of person who",
    "You are someone who",
    "You are a person who",
    "You are the type who",
  ];

  const moreVerbs = [
    "makes the people around them feel genuinely seen",
    "carries their heart carefully and gives it completely",
    "finds meaning in connection over convenience",
    "chooses depth over surface every single time",
    "brings warmth into every space without trying",
    "loves with consistency and not just in moments",
    "sees the world with a poet's eye and a scientist's mind",
    "holds loyalty like it's a spiritual practice",
    "makes vulnerability look like courage",
    "turns presence into the most generous gift",
    "keeps love alive across every obstacle",
    "believes in things worth believing in",
    "fights for what matters and lets go of what doesn't",
    "finds humor in the honest places",
    "makes silence feel like a conversation worth having",
    "turns ordinary moments into memories I keep returning to",
    "says I love you in actions more than in words and also in words",
    "exists in this world in a way I never want to stop witnessing",
    "makes the distance feel like the only wrong thing in an otherwise right story",
    "has made me certain of more things than I've ever been certain of before",
    "treats love like something sacred and worth protecting",
    "gives care in the specific ways that land exactly right",
    "approaches growth with humility and genuine willingness",
    "carries curiosity about the world as a permanent feature",
    "holds space for joy and grief and everything between",
    "stays gentle even when hardness would be understandable",
    "moves forward without dragging the past behind them",
    "loves deeply without making love feel like a transaction",
    "makes every conversation feel worth having",
    "turns the fact of missing someone into an act of devotion",
    "holds onto the people they love with both hands",
    "gives attention like it's the rarest and most meaningful thing",
    "approaches intimacy with both tenderness and steadiness",
    "makes hope feel rational instead of naive",
    "invests fully in the things that matter to them",
    "carries an inner life rich enough to sustain a thousand conversations",
    "makes even a text message feel like a small act of love",
    "turns being known into one of the safest feelings",
    "faces the unknown with grace and a sense of humor",
    "holds their love carefully so it doesn't spill and lose its shape",
  ];

  for (const ms of moreStarters) {
    for (const mv of moreVerbs) {
      extra.push(`${ms} ${mv}.`);
    }
  }

  // Additional number-based variations
  const thingsAbout = [
    "The first thing I noticed about you was your warmth.",
    "One of my favorite things about you is how you listen.",
    "Something that took me by surprise was how safe you made me feel.",
    "One of the thousand things I love about you is your honesty.",
    "Something I didn't expect was how completely you'd become home to me.",
    "Among all my favorite things about you, your humor ranks impossibly high.",
    "Something I keep discovering about you is new depth.",
    "One thing that stays with me is the way you say my name.",
    "Something I'll never take for granted is your attention.",
    "Among all the gifts you've given me, feeling understood ranks first.",
  ];

  extra.push(...thingsAbout);

  // Seasonal / sensory
  const sensory = [
    "You feel like the warmth right before summer arrives.",
    "You feel like a long exhale after a tense week.",
    "You feel like the first page of a book you know will be important.",
    "You feel like rain on a day that needed it.",
    "You feel like a song that somehow knows what you're going through.",
    "You feel like the light that comes in just right in the late afternoon.",
    "You feel like finally being somewhere you were meant to be.",
    "You feel like something I've been looking for without knowing the name.",
    "You feel like arriving home after a long time away.",
    "You feel like everything that makes ordinary days beautiful.",
    "You feel like the calm in the middle of something chaotic.",
    "You feel like a window opened in a room that needed fresh air.",
    "You feel like the best kind of beginning.",
    "You feel like certainty in a world full of maybes.",
    "You feel like a gift that keeps teaching me what it means to be loved.",
  ];

  extra.push(...sensory);

  for (const e of extra) {
    const trimmed = e.trim();
    if (trimmed && !uniqueSet.has(trimmed)) {
      uniqueSet.add(trimmed);
    }
  }

  uniqueReasons = Array.from(uniqueSet);
}

// Final shuffle with seeded approach for determinism
function seededShuffle(arr: string[]): string[] {
  const a = [...arr];
  let seed = 42;
  function rand() {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    return (seed >>> 0) / 0xffffffff;
  }
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const shuffled = seededShuffle(uniqueReasons);

// Ensure we have exactly 8000 (trim or expand minimally)
export const reasons: string[] = shuffled.slice(
  0,
  Math.min(shuffled.length, 8000),
);

export const totalReasons = reasons.length;
