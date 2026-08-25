export const topics = [
  {
    id: "anatomy",
    field: "Anatomy",
    name: "Anatomy",
    question: "How does the body shape the mind?",
    description: "How the brain and body are built, connected, and changed.",
  },
  {
    id: "neuroscience",
    field: "Neuroscience",
    name: "Neuroscience",
    question: "How does the brain make a memory?",
    description:
      "How brain cells work together to support perception, memory, and action.",
  },
  {
    id: "philosophy",
    field: "Philosophy",
    name: "Philosophy",
    question: "What makes you the same person over time?",
    description:
      "Questions about consciousness, identity, knowledge, and truth.",
  },
  {
    id: "ai",
    field: "AI",
    name: "Artificial intelligence",
    question: "Could a machine have a self?",
    description:
      "How machines learn from examples, use language, and make mistakes.",
  },
] as const;

export type Field = (typeof topics)[number]["field"];

export const forms = [
  {
    id: "papers",
    form: "Paper",
    plural: "Papers",
    description: "Research, explained: a claim, its evidence, and what follows.",
  },
  {
    id: "essays",
    form: "Essay",
    plural: "Essays",
    description: "Long-form pieces that follow one question to a clearer one.",
  },
  {
    id: "thoughts",
    form: "Thought",
    plural: "Thoughts",
    description: "Short fragments. An idea worth keeping, without ceremony.",
  },
  {
    id: "experiments",
    form: "Experiment",
    plural: "Experiments",
    description: "Things tried, with a method and a result.",
  },
] as const;

export type Form = (typeof forms)[number]["form"];

export type Piece = {
  slug: string;
  title: string;
  subtitle?: string;
  deck: string;
  date: string;
  form: Form;
  field: Field;
  readingMinutes: number;
  author: string;
  credential?: string;
  body: string;
};

export const pieces: Piece[] = [
  {
    slug: "the-architecture-of-emptiness",
    title: "The Architecture of Emptiness",
    subtitle: "Structural Realism and the Search for Fundamental Reality",
    deck: "You have never actually touched anything in your life. Follow that thread far enough and the whole idea of \"solid stuff\" unravels — beautifully.",
    date: "2026-08-24",
    form: "Paper",
    field: "Philosophy",
    readingMinutes: 8,
    author: "Gautam Devaraju",
    credential: "MSc Neuroscience, ELTE",
    body: `Press your hand against the table in front of you. It feels solid, right?

But here is a mind-bending reality: you aren't actually touching it.

The table is almost entirely empty space. What you feel as "solidity" is the electric force of the table's electrons pushing back against the electrons in your hand. A force field, meeting a force field.

==You have never physically touched anything in your life — you have only ever felt invisible fields pushing back.==

That's not a poetic exaggeration. It's the plain reading of our best physics. And it opens a question that sounds childish until you try to answer it: if nothing is solid, what is anything actually *made of*?

## Hunting for the bottom brick 🧱

For centuries, scientists hunted for the ultimate building block of reality. They zoomed in from elements to atoms, from atoms to protons, from protons to quarks — always expecting to find tiny, solid marbles at the bottom.

Instead, at the very bottom, the "stuff" completely disappeared.

A particle isn't a solid object. It's a bundle of properties — this much charge, this much spin, this much mass. Take the list away, and there is no marble left holding it together. The properties are all there is.

Want to feel how strange that is? Think of a bank account. When you transfer five dollars from savings to checking, no physical bills move anywhere. Ask "which dollar bills went across?" and the question doesn't have an answer — it doesn't even have a *meaning*. There were never any bills. Only amounts.

Swap two electrons, and the universe doesn't change. Not approximately — exactly. The universe works like the bank account: shifting values, not moving objects.

## The ruler that measures itself 📏

There's a deeper reason the hunt for the bottom brick was never going to end the way we hoped. It's hiding in plain sight:

==Every tool we use to investigate matter is itself made of matter.==

Think about what that means. To find out what an electron is, we smash it with other particles. To see an atom, we bounce light off it — and light is made of particles too. We are trying to measure the ruler using the ruler.

You've met this trap before, in everyday places:

- **A dictionary** defines every word using other words. Follow the definitions long enough and you go in a circle — at no point does the book step outside language and hand you the thing itself.
- **Your eye** can see everything in the room except one thing: itself, seeing.
- **A camera** can photograph anything in the world except the very act of taking that photograph.

Physics is in the same position. Every experiment ever performed reports how matter *interacts* — how it pushes, pulls, deflects, and glows in the presence of other matter. What it never reports, and can never report, is what matter is like from the inside, on its own, when nothing is interacting with it.

So the "intrinsic nature" of matter isn't just unknown. It may be *unknowable in principle* — because knowing is itself an interaction. Science's honest inventory contains relations all the way down, and no capacity to look beneath them.

Notice what that does to the question "what is everything made of?" It doesn't answer it. It dissolves it — the same way "which dollar bills moved?" dissolved. Maybe there was never an "inside" to find. Maybe the relations aren't hiding the stuff. ==Maybe the relations are the stuff.==

## Hurricanes and ocean waves 🌊

So if particles aren't little rocks, what are they? Here's a better mental picture.

A hurricane is not a permanent object you can put on a shelf. It's a *process* — a temporary swirl of wind and water, constantly pulling in new air and throwing out old, never the same thing for two seconds. It has a name, a location, a shape. And it is made of nothing but motion.

Modern physics says a particle is exactly like that:

- **The field is the ocean.** The universe is filled with invisible, energetic fields that exist everywhere, all the time.
- **The particle is the wave.** An electron is a temporary wave moving through its field — real, measurable, and made of nothing but the field's own motion.

{{figure:field-wave}}

You can surf a wave. You can be knocked over by one. But you can't take it home in a bucket, because the wave isn't *in* the ocean — the wave is something the ocean is *doing*.

Same with a song. A melody isn't *in* any single piano key; press one key alone and there is no music. The melody exists only in the pattern between the notes — and it's still perfectly real. You can hum it, sell it, get it stuck in your head.

==An electron is something the universe is doing.==

## The hole that fooled the universe 🕳️

Here's where it stops being philosophy and shows up in your pocket.

Inside computer chips, electrons sometimes shift together and leave behind a gap — an empty spot where an electron should be. Engineers call it a "hole." It is, by definition, an *absence*. Nothing. A missing thing.

And yet the hole acts exactly like a real particle. It has mass. It carries charge. It bounces around. It responds to magnets. The chip in your phone works, right now, because engineers treat this absence as a particle — and reality plays along.

{{figure:lattice-hole}}

Sit with that for a second. If an "emergent" gap and a "real" electron behave identically, what exactly makes the electron more real than the hole?

There's only one honest answer: ==the pattern is what's real, not the "stuff."==

Even mass — the most stubbornly stuff-like property of all — turns out to be borrowed. Particles don't carry mass inside them; they acquire it by dragging against an invisible field (the Higgs field), the way you feel heavier wading through water. Switch that field off, and the electron weighs nothing at all. The mass was never *in* the particle. It lived in the relationship.

## The web of reality 🕸️

If there are no solid bricks at the bottom, what's left? Both modern physicists and ancient philosophers arrive at the same picture: a giant network of relationships.

Ancient India drew it best. Imagine **Indra's Net**: a vast web stretching in every direction, with a clear jewel at every single connection.

No jewel has a color of its own. Each one only exists as the reflection of all the other jewels around it. Take away the connections, and nothing is left — not even the jewel.

{{figure:indras-net}}

Now here's the astonishing part: Quantum Field Theory describes the universe the same way. The value of a field at any point is defined by its relation to every other point. No point has content of its own. A physics department and a thousand-year-old text drew almost the same picture.

Erwin Schrödinger — one of the founders of quantum mechanics — saw this coming. The world's multiplicity, he wrote, is a surface trick: two "identical" electrons aren't two things cooperating, they're two heads of the same hydra. He said it while pointing directly at Vedanta, where the idea already had a name: *Nama-Rupa* — name and form, draped over one underlying reality. The way "wave" is a name we drape over the ocean.

## You are what the ocean is doing 🖐️

The history of physics is a story of things thinning out. We went hunting for hard little atoms and found waving fields. Every time we grabbed for the paint, our hands closed on canvas.

Two philosophers of science, Ladyman and Ross, gave the conclusion its bluntest form: *every thing must go.*

That sounds like a loss. It isn't. Tables still hold cups. Waves still knock you over. Holes still power your phone. Nothing you love disappears — only the assumption that there had to be "stuff" underneath it all. What remains is not a void but an architecture of relations, and it was there the whole time.

And you? You aren't a solid object standing outside the universe, observing it. You are a pattern the universe is currently sustaining — a wave, briefly aware, asking what the ocean is made of.

---

So here's the question to sleep on tonight:

If nothing is solid — not the table, not the atom, not even you — what, exactly, is doing all the existing?`,
  },
];

const pieceDate = new Intl.DateTimeFormat("en", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatPieceDate(date: string) {
  return pieceDate.format(new Date(`${date}T00:00:00Z`));
}

export function getPiece(slug: string) {
  return pieces.find((piece) => piece.slug === slug);
}

export function getPiecesByForm(form: Form) {
  return pieces.filter((piece) => piece.form === form);
}
