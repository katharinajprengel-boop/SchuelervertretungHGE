import prisma from "./prisma";
import { getSessionFromCookies } from "./auth";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const session = getSessionFromCookies();
  if (!session) {
    redirect("/admin/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId }
  });

  if (!user || user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  return user;
}
