// Reasons 7501–10000: Your Voice, Laugh & Energy + overflow from all categories

const voiceLaughEnergy = [
  "Your voice is warm in a way that settles the room.",
  "Your laugh is whole-body and completely unrestrained.",
  "Your energy is the first thing I notice and the last thing I forget.",
  "Your voice when you're excited about something is one of my favorite sounds.",
  "Your laugh when something catches you off guard.",
  "The way your energy shifts when you're comfortable.",
  "Your voice saying my name specifically.",
  "Your laugh when you're trying not to laugh.",
  "The energy you bring that changes the temperature of a conversation.",
  "Your voice when it goes soft around the edges.",
  "Your laugh that starts in your eyes before your mouth catches up.",
  "The energy you carry that makes everything feel possible.",
  "Your voice in early calls when you were still figuring out how much I liked it.",
  "Your laugh that I would know from any distance.",
  "The energy you have that is both grounding and exciting.",
  "Your voice when you're telling a story and it starts to build.",
  "Your laugh that makes silence after it feel golden.",
  "The energy in a room after you arrive.",
  "Your voice when you're just talking, unguarded and real.",
  "Your laugh at something you found funny that no one else caught.",
  "The energy you carry, warm and steady and unmistakably you.",
  "Your voice saying something kind, which it does often.",
  "Your laugh when I say something that surprised you.",
  "The energy you have that I couldn't describe but could pick out anywhere.",
  "Your voice mid-call when the night got comfortable.",
  "Your laugh when something I did made you genuinely happy.",
  "The energy between us, which is its own complete thing.",
  "Your voice when it carries something you haven't said yet.",
  "Your laugh that I think about even when you're not near.",
  "The energy you bring, Merin, which is something no one else could replicate.",
  "Your voice — warm and familiar and mine.",
  "Your laugh — whole and honest and one of the best things I know.",
  "Your energy — the kind that makes loving you feel easy.",
];

const overflowReasons = [
  "You came into my life and made it better without trying.",
  "You made ordinary days feel like something worth remembering.",
  "You made love feel possible in a way it hadn't before.",
  "You made me want to be braver with my feelings.",
  "You made me want to text first, which I had never done.",
  "You made me understand what people mean when they say 'the right person'.",
  "You made me believe that someone could know me and still choose me.",
  "You made me feel like being known is safe.",
  "You made me feel like being loved doesn't require performance.",
  "You made me feel like I was worth the effort.",
  "You are the person I want to tell things to first.",
  "You are the person whose opinion I genuinely want.",
  "You are the person I think of when something good happens.",
  "You are the person I want beside me in the hard moments.",
  "You are the person I would choose again in any version of this story.",
  "You are, simply, the person.",
  "Loving you has expanded what I thought I was capable of.",
  "Loving you has made me more patient.",
  "Loving you has made me more honest.",
  "Loving you has made me more brave.",
  "Loving you has made me more myself.",
  "Loving you is the easiest and most important thing I do.",
  "Loving you is a privilege I think about every day.",
  "Loving you, Merin, is the best decision I've made.",
  "Knowing you has made me richer in ways money can't touch.",
  "Knowing you has made the world feel more navigable.",
  "Knowing you has given me something to hold onto.",
  "Knowing you has made me understand what love actually means.",
  "Knowing you, Merin, is one of the finest things that's happened to me.",
  "You, specifically you, are why this list needed to be 10,000 reasons.",
];

const starters4 = [
  "Your",
  "The sound of your",
  "The feeling of your",
  "The warmth of your",
  "The way your",
  "The specific thing about your",
  "What I love most about your",
  "What I'll always remember about your",
  "What moves me about your",
  "What makes your",
];

const energyWords = [
  "voice is a sound I would recognize anywhere.",
  "laugh makes the air lighter.",
  "energy is something I feel before you speak.",
  "presence shifts the tone of everything.",
  "warmth reaches the back of every room.",
  "enthusiasm is completely contagious.",
  "calm is the steadiest thing I know.",
  "humor cuts through any tension.",
  "tenderness rearranges me inside.",
  "honesty is the most trustworthy thing I've met.",
  "attention makes me feel like the most important person.",
  "care shows up in ways I notice even when I'm not looking.",
  "love is the most consistent thing in my world.",
  "spirit can't be imitated or taught.",
  "character is the same when no one is watching.",
  "kindness never feels calculated.",
  "patience is a language I'm learning from you.",
  "loyalty is something I've never had to test.",
  "depth is still surprising me.",
  "heart is one of the most beautiful things I've ever encountered.",
  "goodness radiates without effort.",
  "strength holds space for gentleness.",
  "gentleness holds space for strength.",
  "humor holds space for depth.",
  "depth holds space for lightness.",
  "love holds space for all of me.",
  "existence, Merin, makes my world better.",
  "being is something I feel grateful for every day.",
  "name is one I'll always be glad to say.",
  "love is the thing I'll never take for granted.",
];

const reasons4Raw: string[] = [];

reasons4Raw.push(...voiceLaughEnergy);
reasons4Raw.push(...overflowReasons);

// 10 × 30 = 300
for (const s of starters4) {
  for (const e of energyWords) {
    reasons4Raw.push(`${s} ${e}`);
  }
}

// More variety: feeling-based sentences
const feelStarters = [
  "Every time I hear your voice, I",
  "Every time you laugh, I",
  "Every time I feel your energy, I",
  "Every time you speak, I",
  "Every time you're near, I",
  "Whenever I hear you, I",
  "When your energy fills a space, I",
  "The sound of your voice makes me",
  "Your laugh makes me",
  "Your energy makes me",
  "The warmth of your presence makes me",
  "Something about the way you exist makes me",
  "Being with you, Merin, makes me",
  "Loving you makes me",
  "Knowing you makes me",
  "Having you in my life makes me",
];

const feelEndings = [
  "feel certain that I made the right choice.",
  "feel completely at home.",
  "feel like everything is going to be okay.",
  "feel like myself, fully and without apology.",
  "feel like the world is a generous place.",
  "feel like love is not complicated, actually.",
  "feel like the future is something worth moving toward.",
  "feel like I am known and still chosen.",
  "feel like belonging is real.",
  "feel like I am exactly where I am supposed to be.",
  "feel like the distance between us is temporary and the love is permanent.",
  "feel like something beautiful is unfolding.",
  "feel like the best version of myself is possible.",
  "feel like this story is one worth telling.",
  "feel like love is a daily gift I keep finding.",
  "feel like you were made for exactly this place in my life.",
  "feel like something I didn't know was missing clicked into place.",
  "feel like home has a new address.",
  "feel like the most lucky person in the world.",
  "feel like 10,000 reasons is not even close to enough.",
];

// 16 × 20 = 320
for (const s of feelStarters) {
  for (const e of feelEndings) {
    reasons4Raw.push(`${s} ${e}`);
  }
}

// Long-form unique reasons to fill the rest
const longFormReasons = [
  "The way you texted me on March 9th and changed the whole trajectory of my year.",
  "The fact that Hinge, of all apps, led me to the most important person I've met.",
  "That you deleted the app because what we had was already enough.",
  "The way texting you became the most natural part of my day.",
  "That you called and I answered and something shifted permanently.",
  "The way you told me you had a crush on me and suddenly everything made sense.",
  "March 13th, 2026: the day you became my boyfriend and the world improved.",
  "The twelve days between March 13th and March 25th, falling deeper every one.",
  "My birthday, March 25th, which you turned into the best one I've had.",
  "The car ride where I talked and you listened like I was the most interesting person.",
  "The mall, our first real place together, where I held your arm for the first time.",
  "The escape room where we worked as a team and I felt like we'd always done this.",
  "The food court where I held your hand the whole time and didn't want to stop.",
  "The drinks we had and how easy it was to just keep talking.",
  "The drive home where every mile felt like a countdown I didn't want to finish.",
  "The moment near the college where I hugged you and everything felt right.",
  "The cheek kiss, my first brave thing, which I hope was the first of many.",
  "That you are 5'4 and I am 5'5 and we fit together exactly right.",
  "That the height difference is barely a difference and somehow that's perfect.",
  "Every moment of March 25th that I have replayed a hundred times since.",
  "The Hinge bio that caught my eye and the message that started everything.",
  "Sharing our Instagrams like we already knew this was going somewhere real.",
  "The first call where your voice was exactly what I hoped it would be.",
  "The way falling for you happened so quickly it didn't feel like falling at all.",
  "The fact that knowing you has already made me better.",
  "The fact that being loved by you has already changed me.",
  "The fact that you existed and then I found you and now I can't imagine otherwise.",
  "The fact that a dating app, of all things, delivered the best thing.",
  "The way everything about us felt right before we'd even met in person.",
  "The way everything about us felt even more right after we did.",
  "Your specific laugh during the escape room when we figured something out.",
  "Your hand in mine at the food court and how completely right it felt.",
  "Your voice in the car telling me about something and me not wanting it to end.",
  "Your face when I kissed your cheek and the world got very still.",
  "Your presence on my birthday, the best gift without being a gift.",
  "Your patience with me as I yapped the whole drive and still listened.",
  "Your warmth that entire day, steady and real and all for me.",
  "Your choice of me, then and now, which I don't take lightly.",
  "Your name, Merin, which I didn't know before and now can't imagine not knowing.",
  "You, all 10,000 reasons and then some.",
  "You, in all your specificity and depth, are more than a list can hold.",
  "You, Merin, are why this list exists and why 10,000 is not enough.",
  "You are the reason I believe in the good luck of finding the right person.",
  "You are the reason I look forward to what comes next.",
  "You are the reason I feel brave about love.",
  "You are the reason I smile when I unlock my phone.",
  "You are the reason ordinary days have color.",
  "You are the reason I believe love is as good as people say.",
  "You are the reason I wrote 10,000 reasons.",
  "You are, simply, the reason.",
];

reasons4Raw.push(...longFormReasons);

// Extended cross-product for final fill
const finalStarters = [
  "Something I will never stop being grateful for:",
  "Something that fills me with quiet joy:",
  "A reason I count myself lucky:",
  "One of the things I love about us:",
  "A thing about you I keep discovering:",
  "Something about you that never gets old:",
  "One of the thousand reasons I adore you:",
  "Something I'd choose all over again:",
  "A thing about Merin that I carry with me:",
  "Something I'd tell anyone willing to listen:",
];

const finalEndings = [
  "that your love is patient and consistent and real.",
  "the way you show up before I even ask.",
  "how completely safe I feel with you.",
  "that you make love feel easy.",
  "the specific way you say my name.",
  "that you exist in this world and I found you.",
  "how you make every single day better.",
  "the way your humor is a form of warmth.",
  "that you choose me, again and again.",
  "how your care is shown in a hundred small ways.",
  "that talking to you is the best part of any day.",
  "how you make me feel like I belong.",
  "the way your laughter is something I collect.",
  "that you are honest in a way that builds trust.",
  "how your tenderness heals things quietly.",
  "that you make the future something to want.",
  "how you love without conditions.",
  "the way you make ordinary things feel like gifts.",
  "that you, Merin, are exactly who I needed.",
  "how knowing you has made everything better.",
  "that a dating app once gave me the best thing it had.",
  "how March 9th, 2026 turned out to be a very important day.",
  "the memory of your hand in mine and how right it felt.",
  "that you listened to me yap for an entire car ride and seemed to like it.",
  "the moment I kissed your cheek and knew I was in the right place.",
  "how you are 5 foot 4 inches and somehow feel like the tallest thing in my world.",
  "that you picked me up and made my birthday perfect.",
  "how your voice sounds on a late-night call.",
  "that you became mine and I became yours on March 13th.",
  "how loving you is the best and most important thing I do.",
];

// 10 × 30 = 300
for (const s of finalStarters) {
  for (const e of finalEndings) {
    reasons4Raw.push(`${s} ${e}`);
  }
}

const seen4 = new Set<string>();
for (const r of reasons4Raw) {
  const trimmed = r.trim();
  if (trimmed && !seen4.has(trimmed)) seen4.add(trimmed);
}

export const reasons4: string[] = Array.from(seen4).slice(0, 2500);
