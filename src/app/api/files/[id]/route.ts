import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromCookies } from "@/lib/auth";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({ where: { id: params.id } });
  if (!post) {
    return new NextResponse("Nicht gefunden", { status: 404 });
  }

  const session = getSessionFromCookies();
  const isAdmin = session?.role === "ADMIN";

  if (!post.published && !isAdmin) {
    return new NextResponse("Nicht gefunden", { status: 404 });
  }

  const url = new URL(request.url);
  const isDownload = url.searchParams.get("download") === "1";

  const target = new URL(post.pdfPath);
  if (isDownload) {
    target.searchParams.set("download", "1");
  }

  return NextResponse.redirect(target);
}
