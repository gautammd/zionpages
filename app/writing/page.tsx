import type { Metadata } from "next";
import Link from "next/link";

import { PieceList } from "@/components/piece-list";
import { forms, getPiecesByForm, pieces } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Papers, essays, thoughts, and experiments on AI, neuroscience, philosophy, and anatomy.",
};

export default function WritingPage() {
  const sections = forms.map((form) => ({
    form,
    pieces: getPiecesByForm(form.form),
  }));
  const filled = sections.filter((section) => section.pieces.length > 0);
  const empty = sections.filter((section) => section.pieces.length === 0);

  return (
    <div className="mx-auto min-h-[calc(100svh-8rem)] w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <header className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end lg:gap-20">
        <h1 className="text-6xl leading-none font-semibold tracking-[-0.04em] sm:text-8xl">
          Writing
        </h1>

        {filled.length > 1 && (
          <nav aria-label="Forms" className="border-t border-border/70 pt-5">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {filled.map(({ form }) => (
                <li key={form.id}>
                  <Link
                    href={`#${form.id}`}
                    className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
                  >
                    {form.plural}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {pieces.length > 0 ? (
        <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-32">
          {filled.map(({ form, pieces: formPieces }) => (
            <section key={form.id} id={form.id} className="scroll-mt-24">
              <div className="mb-9 grid gap-5 border-t border-border/70 pt-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                <h2 className="text-sm font-semibold">{form.plural}</h2>
                <p className="max-w-lg leading-7 text-muted-foreground text-pretty">
                  {form.description}
                </p>
              </div>
              <PieceList pieces={formPieces} />
            </section>
          ))}

          {empty.length > 0 && (
            <section className="border-t border-border/70 pt-6">
              <div className="grid gap-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                <h2 className="text-sm font-semibold">Not yet written</h2>
                <div className="max-w-lg space-y-4">
                  {empty.map(({ form }) => (
                    <p
                      key={form.id}
                      className="leading-7 text-muted-foreground text-pretty"
                    >
                      <span className="text-foreground">{form.plural}.</span>{" "}
                      {form.description}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      ) : (
        <section className="mt-20 border-t border-border/70 pt-8 sm:mt-28">
          <h2 className="text-2xl font-semibold tracking-[-0.025em]">
            The pages are still blank.
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-muted-foreground text-pretty">
            The questions are here. The writing will follow.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex min-h-11 items-center text-sm text-signal transition-colors hover:text-foreground focus-visible:text-foreground"
          >
            Return home
          </Link>
        </section>
      )}
    </div>
  );
}
