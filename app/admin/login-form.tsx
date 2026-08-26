"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";

import { login } from "./auth-actions";

export function LoginForm() {
  const [error, action, pending] = useActionState(login, null);

  return (
    <form action={action} className="max-w-sm space-y-5">
      <label className="block">
        <span className="t-label mb-1.5 block">Password</span>
        <input
          type="password"
          name="password"
          required
          autoFocus
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        />
      </label>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit" disabled={pending}>
        {pending ? "Checking…" : "Log in"}
      </Button>
    </form>
  );
}
