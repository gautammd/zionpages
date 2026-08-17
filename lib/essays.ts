export type Essay = {
  slug: string;
  title: string;
  deck: string;
  date: string;
  field: "AI" | "Neuroscience" | "Philosophy" | "Anatomy";
  readingMinutes: number;
  body: string;
};

export const essays: Essay[] = [
  {
    slug: "what-a-language-model-knows",
    title: "What Does a Language Model Know?",
    deck: "A language model predicts text. That simple goal can produce useful representations of the world, but fluent output is not proof of understanding.",
    date: "2026-08-02",
    field: "AI",
    readingMinutes: 6,
    body: `A language model is trained to predict the next piece of text. That description is accurate. It is also too small to explain what the training produces.

To predict well, a model must learn patterns. Some are local, such as grammar and spelling. Others reflect facts and relationships found across its training data: Paris is in France, pressure changes boiling point, and a promise creates an expectation. The model stores these patterns in billions of numerical parameters rather than in a searchable list of sentences.

## Prediction can build useful structure

Researchers can inspect a model and find internal activity that tracks features such as location, syntax, sentiment, or whether a statement is likely to be true. These representations are imperfect, but they help explain why a model can answer a new question rather than only repeat text it has seen.

Calling this “autocomplete” is therefore true at the level of the task and misleading at the level of the result. A calculator also follows simple operations, yet those operations can produce answers that were never written into it.

None of this proves that the model understands in the human sense. There is no agreed scientific test for understanding, and the word bundles together several abilities: using concepts, forming goals, connecting words to experience, noticing contradictions, and changing a belief when evidence changes.

Current language models show some of those abilities in limited settings and fail at others. They can explain a difficult idea and then make an elementary error. They can use a concept correctly without having a body, a life, or direct contact with what the concept refers to.

## Fluency is not evidence

The most important mistake is to judge a model by how its answer feels. Confident language is easy for it because confidence is a pattern in language. The tone does not tell us whether the claim is true, whether the reasoning is sound, or whether the model has anything like an inner point of view.

The opposite mistake is to treat every correct answer as accidental. Models solve problems that require combining information in ways that are hard to explain as simple copying. The ability is real even when its mechanism differs from ours.

## A better question

Instead of asking whether a model is “really intelligent,” ask four narrower questions:

- What task can it do?
- Under what conditions does it succeed?
- How does it fail?
- Can the answer be checked?

Those questions produce evidence. They also avoid two stories that get in the way: that the model is secretly a person, or that it is only a trick.

---

A language model can represent part of the world without experiencing it. It can reason in some settings without being reliable in all settings. Both statements can be true at once. The useful work begins there.`,
  },
  {
    slug: "what-forty-hertz-can-explain",
    title: "What Forty Hertz Can Explain",
    deck: "Gamma rhythms can help groups of neurons coordinate. They are linked to attention and perception, but they do not by themselves explain consciousness.",
    date: "2026-07-19",
    field: "Neuroscience",
    readingMinutes: 5,
    body: `The brain is active in rhythms. One of them, called gamma, usually refers to activity between roughly 30 and 100 cycles per second. Forty hertz sits inside that range and has received unusual attention because some experiments link it to perception, attention, and memory.

The basic observation is solid. The larger claims need care.

## What a brain rhythm is

Neurons excite and inhibit one another. When groups of them repeat that push and pull, their activity can become rhythmic. The rhythm does not come from a single clock. It emerges locally, changes from moment to moment, and can differ across brain regions.

Gamma activity can help define when neurons are most able to influence other neurons. If two groups become aligned at the right times, signals may pass between them more effectively. This gives the brain one possible way to coordinate activity without sending everything to a central control room.

## The binding idea

Color, shape, movement, and memory are processed across different neural systems. Yet we usually experience one object. This is part of the binding problem: how does distributed activity become a unified perception?

One proposal is that neurons representing the same object briefly synchronize. Gamma rhythms could help mark which signals belong together. Experiments have found gamma activity during attention and perception, and changing neural timing can change what an animal detects.

That is evidence for a role in coordination. It is not proof that forty hertz creates a conscious experience.

Gamma appears during many kinds of activity, not only conscious perception. Its frequency and function vary by region and task. Some measured gamma can also be affected by muscle activity or by the way an experiment records the signal. A correlation between a rhythm and an experience does not tell us that the rhythm caused the experience.

## What remains true

The brain has no single place where a complete world is displayed. Perception depends on many systems exchanging information at the right time. Rhythms are part of that timing.

Forty hertz may help explain how neural groups coordinate. It does not, by itself, explain why coordinated activity feels like anything from the inside. That gap is still open, and saying so is more useful than filling it with certainty.`,
  },
];

const essayDate = new Intl.DateTimeFormat("en", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export function formatEssayDate(date: string) {
  return essayDate.format(new Date(`${date}T00:00:00Z`));
}

export function getEssay(slug: string) {
  return essays.find((essay) => essay.slug === slug);
}
