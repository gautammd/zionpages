import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { FirstVisitIntro } from "@/components/first-visit-intro";
import { ChoicePill } from "@/components/theme";
import { essays, formatEssayDate } from "@/lib/essays";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <FirstVisitIntro />

      <section className="flex min-h-[calc(70svh-4rem)] items-center px-6 py-20 sm:px-10 sm:py-28">
        <div className="w-full max-w-4xl">
          <h1 className="max-w-[12ch] text-[clamp(3rem,7vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-balance">
            What makes a mind?
            <ChoicePill />
          </h1>
          <p className="mt-10 max-w-[42rem] text-lg leading-8 text-pretty text-muted-foreground sm:text-xl sm:leading-9">
            Bodies shape perception. Memory links one moment to the next. Our
            choices make us ask how free we are. AI makes us ask which parts of
            intelligence require a body—or a self.
          </p>
        </div>
      </section>

      <section id="essays" className="border-t border-border/70 px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="t-label mb-3">New writing</p>
            <h2 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              Recent essays
            </h2>
          </div>
          <Link
            href="/essays"
            className="group hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground sm:flex"
          >
            All essays
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <ol className="border-t border-border/70">
          {essays.map((essay) => (
            <li key={essay.slug} className="border-b border-border/70">
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
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-signal group-focus-visible:text-signal sm:text-4xl">
                    {essay.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-7 text-muted-foreground text-pretty">
                    {essay.deck}
                  </p>
                </div>
                <span className="t-label whitespace-nowrap sm:pt-2">
                  {essay.readingMinutes} min read
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <Link
          href="/essays"
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground sm:hidden"
        >
          All essays <ArrowUpRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
