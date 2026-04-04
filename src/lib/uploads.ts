import { randomUUID } from "crypto";
import { put, del } from "@vercel/blob";

const MAX_SIZE = 25 * 1024 * 1024;
const IMAGE_MAX_SIZE = 10 * 1024 * 1024;
const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

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

function isValidImageSignature(buffer: Buffer, mimeType: string) {
  if (mimeType === "image/png") {
    return (
      buffer.length >= 8 &&
      buffer[0] === 0x89 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x4e &&
      buffer[3] === 0x47
    );
  }

  if (mimeType === "image/jpeg") {
    return (
      buffer.length >= 4 &&
      buffer[0] === 0xff &&
      buffer[1] === 0xd8 &&
      buffer[buffer.length - 2] === 0xff &&
      buffer[buffer.length - 1] === 0xd9
    );
  }

  if (mimeType === "image/webp") {
    if (buffer.length < 12) return false;
    const riff = buffer.subarray(0, 4).toString("ascii");
    const webp = buffer.subarray(8, 12).toString("ascii");
    return riff === "RIFF" && webp === "WEBP";
  }

  return false;
}

function extensionByMimeType(mimeType: string) {
  if (mimeType === "image/png") return "png";
  if (mimeType === "image/webp") return "webp";
  return "jpg";
}

export async function storeTeaserImage(file: File) {
  if (!file) {
    throw new Error("Bilddatei ist erforderlich.");
  }

  if (file.size > IMAGE_MAX_SIZE) {
    throw new Error("Bild zu gross (max. 10MB).");
  }

  if (!IMAGE_TYPES.has(file.type)) {
    throw new Error("Nur JPG, PNG oder WEBP sind erlaubt.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  if (!isValidImageSignature(buffer, file.type)) {
    throw new Error("Ungueltige Bilddatei.");
  }

  const safeName = sanitizeFilename(file.name);
  const extension = extensionByMimeType(file.type);
  const filename = `${safeName}-${randomUUID()}.${extension}`;
  const blob = await put(`sv/${filename}`, buffer, {
    access: "public",
    contentType: file.type
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
