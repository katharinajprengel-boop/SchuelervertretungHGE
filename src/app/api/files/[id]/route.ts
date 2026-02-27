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

  let target: URL;
  try {
    target = new URL(post.pdfPath);
  } catch {
    return new NextResponse("Datei nicht verfuegbar", { status: 404 });
  }

  const headers = new Headers();
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(target.toString(), { headers, cache: "no-store" });
  if (!response.ok) {
    return new NextResponse("Datei nicht gefunden", { status: 404 });
  }

  const pathname = target.pathname.split("/").pop() || "dokument.pdf";
  const filename = pathname.endsWith(".pdf") ? pathname : `${pathname}.pdf`;
  const disposition = isDownload ? "attachment" : "inline";

  return new NextResponse(response.body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `${disposition}; filename="${filename}"`,
      "Cache-Control": "no-store"
    }
  });
}
