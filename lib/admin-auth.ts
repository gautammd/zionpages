import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_session";

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export function checkPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  return Boolean(expected) && safeEqual(password, expected as string);
}

// Cookie stores a keyed hash of the password, so changing ADMIN_PASSWORD
// invalidates existing sessions.
export function sessionToken() {
  return createHmac("sha256", "zionpages-admin-session")
    .update(process.env.ADMIN_PASSWORD ?? "")
    .digest("hex");
}

export async function isAuthed() {
  if (!process.env.ADMIN_PASSWORD) return false;
  const cookie = (await cookies()).get(ADMIN_COOKIE)?.value ?? "";
  return safeEqual(cookie, sessionToken());
}
