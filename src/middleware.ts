import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { sessionCookieName } from "./lib/auth";

const encoder = new TextEncoder();

async function isValidSession(token: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) return false;
  try {
    await jwtVerify(token, encoder.encode(secret));
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(sessionCookieName)?.value;
  const isLoginPage = pathname === "/admin/login";

  if (token && (await isValidSession(token))) {
    if (isLoginPage) {
      return NextResponse.redirect(new URL("/admin/posts", request.url));
    }
    return NextResponse.next();
  }

  if (isLoginPage) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/admin/login", request.url));
}

export const config = {
  matcher: ["/admin/:path*"]
};
