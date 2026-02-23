import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { loginSchema } from "@/lib/validators";
import { signSession } from "@/lib/auth";
import { sessionCookieName, sessionMaxAge } from "@/lib/session";
import { verifyPassword } from "@/lib/password";

export async function POST(request: Request) {
  const formData = await request.formData();
  const data = {
    email: String(formData.get("email") || "").trim(),
    password: String(formData.get("password") || "")
  };

  const parsed = loginSchema.safeParse(data);
  if (!parsed.success) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  const user = await prisma.user.findUnique({
    where: { email: parsed.data.email }
  });

  if (!user) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  const isValid = await verifyPassword(parsed.data.password, user.passwordHash);
  if (!isValid) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  const token = signSession({ userId: user.id, role: "ADMIN" });
  const response = NextResponse.redirect(new URL("/admin/posts", request.url));
  response.cookies.set({
    name: sessionCookieName,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: sessionMaxAge,
    path: "/"
  });

  return response;
}
