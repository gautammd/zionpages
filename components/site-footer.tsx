import { DecodeText } from "@/components/decode-text";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl flex-col justify-center gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p
          className="font-mono text-xs text-muted-foreground"
          title="Still warm."
        >
          © {new Date().getFullYear()} Zion Pages
        </p>
        <div className="text-xs text-muted-foreground sm:text-right">
          <p className="flex flex-wrap items-baseline gap-x-2 sm:justify-end">
            <span lang="sa" className="font-serif">
              असतो मा सद्गमय
            </span>
            <span aria-hidden>·</span>
            <span lang="sa-Latn">asato mā sad gamaya</span>
          </p>
          <p className="mt-1">
            <DecodeText text="Lead me from the unreal to the real." />
          </p>
        </div>
      </div>
    </footer>
  );
}
