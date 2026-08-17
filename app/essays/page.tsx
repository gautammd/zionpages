import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { essays, formatEssayDate } from "@/lib/essays";

export const metadata: Metadata = {
  title: "Essays",
  description: "Zion Pages essays on minds, machines, and perspective.",
};

export default function EssaysPage() {
  return (
    <div className="mx-auto min-h-[calc(100svh-8rem)] w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
      <header className="max-w-2xl">
        <p className="t-label mb-5 text-signal">All essays</p>
        <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">Essays</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground text-pretty">
          Essays on perception, intelligence, consciousness, brain anatomy, and
          AI—written for careful readers, not specialists.
        </p>
      </header>

      <ol className="mt-16 border-t border-border/60 sm:mt-24">
        {essays.map((essay) => (
          <li key={essay.slug} className="border-b border-border/60">
            <Link
              href={`/essays/${essay.slug}`}
              className="group grid gap-5 py-9 sm:grid-cols-[9rem_1fr_auto] sm:items-start sm:gap-8 sm:py-11"
            >
              <div className="space-y-2">
                <p className="t-label text-signal">{essay.field}</p>
                <time dateTime={essay.date} className="t-label block">
                  {formatEssayDate(essay.date)}
                </time>
              </div>
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-signal group-focus-visible:text-signal sm:text-4xl">
                  {essay.title}
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground text-pretty">{essay.deck}</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground sm:justify-self-end sm:pt-2">
                <span className="t-label whitespace-nowrap">{essay.readingMinutes} min</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
