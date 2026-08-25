import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-shell mx-auto flex min-h-[calc(100svh-8rem)] w-full max-w-6xl items-center px-6 py-20 sm:px-10">
      <div>
        <p className="t-label text-signal">404</p>
        <h1 className="mt-5 max-w-[12ch] text-5xl leading-none font-semibold tracking-[-0.04em] text-balance sm:text-7xl">
          This page is not here.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground text-pretty">
          The address may have changed, or the page may never have existed.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-sm text-signal transition-colors hover:text-foreground focus-visible:text-foreground"
          >
            Go home
          </Link>
          <Link
            href="/writing"
            className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
          >
            Browse the writing
          </Link>
        </div>
        <p aria-hidden="true" className="not-found-whisper t-label mt-16">
          knock, knock.
        </p>
      </div>
    </div>
  );
}
