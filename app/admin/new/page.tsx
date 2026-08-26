import { isAuthed } from "@/lib/admin-auth";

import { LoginForm } from "../login-form";
import { PieceForm } from "../piece-form";

export default async function NewPiecePage() {
  if (!(await isAuthed())) return <LoginForm />;

  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold tracking-[-0.025em]">
        New piece
      </h1>
      <PieceForm />
    </div>
  );
}
