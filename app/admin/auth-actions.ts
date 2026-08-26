"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

import { ADMIN_COOKIE, checkPassword, sessionToken } from "@/lib/admin-auth";

export async function login(_prev: string | null, formData: FormData) {
  if (!process.env.ADMIN_PASSWORD) {
    return "ADMIN_PASSWORD is not set. Add it to .env.local and restart.";
  }

  if (!checkPassword(String(formData.get("password") ?? ""))) {
    return "Incorrect password.";
  }

  (await cookies()).set(ADMIN_COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return null;
}

export async function logout() {
  (await cookies()).delete(ADMIN_COOKIE);
  revalidatePath("/admin", "layout");
}
