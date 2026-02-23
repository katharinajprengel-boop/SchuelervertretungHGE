import { randomUUID } from "crypto";
import { put, del } from "@vercel/blob";

const MAX_SIZE = 25 * 1024 * 1024;

export function sanitizeFilename(name: string) {
  const base = name.replace(/\.[^/.]+$/, "");
  const safe = base
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return safe || "datei";
}

export async function storePdf(file: File) {
  if (!file) {
    throw new Error("PDF-Datei ist erforderlich.");
  }

  if (file.size > MAX_SIZE) {
    throw new Error("Datei zu gross (max. 25MB).");
  }

  if (file.type !== "application/pdf") {
    throw new Error("Nur PDF-Dateien sind erlaubt.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const signature = buffer.subarray(0, 4).toString("utf8");
  if (signature !== "%PDF") {
    throw new Error("Ungueltige PDF-Datei.");
  }

  const safeName = sanitizeFilename(file.name);
  const filename = `${safeName}-${randomUUID()}.pdf`;
  const blob = await put(`sv/${filename}`, buffer, {
    access: "public",
    contentType: "application/pdf"
  });

  return blob.url;
}

export async function deletePdf(url: string | null | undefined) {
  if (!url) return;
  try {
    await del(url);
  } catch {
    // ignore missing file
  }
}
