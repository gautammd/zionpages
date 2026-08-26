import Link from "next/link";
import { notFound } from "next/navigation";

import { isAuthed } from "@/lib/admin-auth";
import { getPiece } from "@/lib/writing";

import { LoginForm } from "../../login-form";
import { PieceForm } from "../../piece-form";

export default async function EditPiecePage({
  params,
}: PageProps<"/admin/edit/[slug]">) {
  if (!(await isAuthed())) return <LoginForm />;

  const piece = getPiece((await params).slug);

  if (!piece) notFound();

  return (
    <div>
      <div className="mb-8 flex items-baseline justify-between gap-6">
        <h1 className="text-2xl font-semibold tracking-[-0.025em]">
          {piece.title}
        </h1>
        <Link
          href={`/writing/${piece.slug}`}
          className="shrink-0 text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-signal"
        >
          View piece
        </Link>
      </div>
      <PieceForm piece={piece} />
    </div>
  );
}
