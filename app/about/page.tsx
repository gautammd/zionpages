import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About the subjects covered by Zion Pages.",
};

const fields = [
  ["Artificial intelligence", "How AI systems learn from data, solve problems, and fail."],
  ["Neuroscience", "How neural activity supports perception, memory, and behavior."],
  ["Philosophy", "What we mean by intelligence, consciousness, and truth."],
  ["Anatomy", "The structures and connections that support brain function."],
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto min-h-[calc(100svh-8rem)] w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="grid gap-8 sm:grid-cols-[8rem_1fr] sm:gap-12">
        <p className="t-label text-signal">About</p>
        <div className="max-w-2xl">
          <h1 className="max-w-[13ch] text-5xl leading-[0.98] font-semibold tracking-[-0.04em] text-balance sm:text-7xl">
            A blog about AI, neuroscience, philosophy, and anatomy.
          </h1>
          <div className="mt-10 space-y-6 text-lg leading-8 text-foreground/90 text-pretty">
            <p>
              Articles on perception, intelligence, consciousness, and the
              brain—written in plain language.
            </p>
            <p className="text-muted-foreground">
              Where evidence is limited or disputed, the writing says so.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-24 border-t border-border/60 sm:mt-32">
        <h2 className="sr-only">What we write about</h2>
        {fields.map(([title, description]) => (
          <div key={title} className="grid gap-3 border-b border-border/60 py-7 sm:grid-cols-[8rem_14rem_1fr] sm:gap-12 sm:py-9">
            <span aria-hidden />
            <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="max-w-md leading-7 text-muted-foreground text-pretty">{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
