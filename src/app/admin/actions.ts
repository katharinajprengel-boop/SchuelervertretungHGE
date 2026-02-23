"use server";

import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/require-admin";
import { adminCreateSchema, postSchema } from "@/lib/validators";
import { deletePdf, storePdf } from "@/lib/uploads";
import { hashPassword } from "@/lib/password";
import { redirect } from "next/navigation";

export type ActionState = {
  error?: string;
};

function toOptionalText(value: FormDataEntryValue | null) {
  const text = String(value || "").trim();
  return text.length > 0 ? text : null;
}

function toBoolean(value: FormDataEntryValue | null) {
  return value === "on" || value === "true";
}

export async function createPost(_: ActionState, formData: FormData) {
  await requireAdmin();

  const data = {
    title: String(formData.get("title") || "").trim(),
    description: toOptionalText(formData.get("description")) ?? undefined,
    content: toOptionalText(formData.get("content")) ?? undefined,
    published: toBoolean(formData.get("published")),
    pinned: toBoolean(formData.get("pinned"))
  };

  const parsed = postSchema.safeParse(data);
  if (!parsed.success) {
    return { error: "Bitte alle Pflichtfelder korrekt ausfuellen." };
  }

  const file = formData.get("pdf");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "PDF-Datei ist erforderlich." };
  }

  try {
    const pdfPath = await storePdf(file);
    await prisma.post.create({
      data: {
        ...parsed.data,
        description: toOptionalText(formData.get("description")),
        content: toOptionalText(formData.get("content")),
        pdfPath
      }
    });
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Upload fehlgeschlagen." };
  }

  redirect("/admin/posts");
}

export async function updatePost(postId: string, _: ActionState, formData: FormData) {
  await requireAdmin();

  const existing = await prisma.post.findUnique({ where: { id: postId } });
  if (!existing) {
    return { error: "Beitrag nicht gefunden." };
  }

  const data = {
    title: String(formData.get("title") || "").trim(),
    description: toOptionalText(formData.get("description")) ?? undefined,
    content: toOptionalText(formData.get("content")) ?? undefined,
    published: toBoolean(formData.get("published")),
    pinned: toBoolean(formData.get("pinned"))
  };

  const parsed = postSchema.safeParse(data);
  if (!parsed.success) {
    return { error: "Bitte alle Pflichtfelder korrekt ausfuellen." };
  }

  let pdfPath = existing.pdfPath;
  const file = formData.get("pdf");

  if (file instanceof File && file.size > 0) {
    try {
      pdfPath = await storePdf(file);
      await deletePdf(existing.pdfPath);
    } catch (error) {
      return { error: error instanceof Error ? error.message : "Upload fehlgeschlagen." };
    }
  }

  await prisma.post.update({
    where: { id: postId },
    data: {
      ...parsed.data,
      description: toOptionalText(formData.get("description")),
      content: toOptionalText(formData.get("content")),
      pdfPath
    }
  });

  redirect("/admin/posts");
}

export async function deletePost(postId: string) {
  await requireAdmin();

  const post = await prisma.post.findUnique({ where: { id: postId } });
  if (post) {
    await prisma.post.delete({ where: { id: postId } });
    await deletePdf(post.pdfPath);
  }

  redirect("/admin/posts");
}

export async function createAdmin(_: ActionState, formData: FormData) {
  await requireAdmin();

  const data = {
    email: String(formData.get("email") || "").trim(),
    password: String(formData.get("password") || "")
  };

  const parsed = adminCreateSchema.safeParse(data);
  if (!parsed.success) {
    return { error: "Bitte gueltige Daten eingeben (Passwort min. 8 Zeichen)." };
  }

  const exists = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (exists) {
    return { error: "E-Mail ist bereits vergeben." };
  }

  const passwordHash = await hashPassword(parsed.data.password);
  await prisma.user.create({
    data: {
      email: parsed.data.email,
      passwordHash,
      role: "ADMIN"
    }
  });

  redirect("/admin/admins");
}
