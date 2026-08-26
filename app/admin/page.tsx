import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isAuthed } from "@/lib/admin-auth";
import { formatPieceDate, getPieces } from "@/lib/writing";

import { LoginForm } from "./login-form";

export default async function AdminPage() {
  if (!(await isAuthed())) return <LoginForm />;

  const pieces = getPieces();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-[-0.025em]">Writing</h1>
        <Button asChild>
          <Link href="/admin/new">New piece</Link>
        </Button>
      </div>

      {pieces.length > 0 ? (
        <ul className="mt-8 divide-y divide-border/70 border-y border-border/70">
          {pieces.map((piece) => (
            <li key={piece.slug}>
              <Link
                href={`/admin/edit/${piece.slug}`}
                className="group flex items-baseline justify-between gap-6 py-4"
              >
                <span className="font-medium transition-colors group-hover:text-signal">
                  {piece.title}
                </span>
                <span className="t-label shrink-0">
                  {piece.form} · {piece.field} · {formatPieceDate(piece.date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 text-sm text-muted-foreground">
          Nothing here yet. Write the first piece.
        </p>
      )}
    </div>
  );
}
