import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { sessionCookieName, sessionMaxAge } from "./session";

export type SessionPayload = {
  userId: string;
  role: "ADMIN";
};

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET ist nicht gesetzt.");
  }
  return secret;
}

export function signSession(payload: SessionPayload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: sessionMaxAge });
}

export function verifySession(token: string): SessionPayload | null {
  try {
    return jwt.verify(token, getJwtSecret()) as SessionPayload;
  } catch {
    return null;
  }
}

export function setSessionCookie(token: string) {
  cookies().set({
    name: sessionCookieName,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: sessionMaxAge,
    path: "/"
  });
}

export function clearSessionCookie() {
  cookies().set({
    name: sessionCookieName,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/"
  });
}

export function getSessionFromCookies(): SessionPayload | null {
  const token = cookies().get(sessionCookieName)?.value;
  if (!token) return null;
  return verifySession(token);
}
