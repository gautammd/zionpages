import type { Metadata } from "next";
import Link from "next/link";

import { isAuthed } from "@/lib/admin-auth";

import { logout } from "./auth-actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: LayoutProps<"/admin">) {
  const authed = await isAuthed();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
      <header className="mb-10 flex items-baseline justify-between border-b border-border/70 pb-5">
        <Link href="/admin" className="text-sm font-semibold">
          Admin
        </Link>
        <div className="flex items-baseline gap-5">
          <Link
            href="/writing"
            className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-signal"
          >
            View site
          </Link>
          {authed && (
            <form action={logout}>
              <button
                type="submit"
                className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-signal"
              >
                Log out
              </button>
            </form>
          )}
        </div>
      </header>
      {children}
    </div>
  );
}
