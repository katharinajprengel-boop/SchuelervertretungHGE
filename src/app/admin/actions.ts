"use server";

import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/require-admin";
import { adminCreateSchema, homeContentSchema, postSchema } from "@/lib/validators";
import { deletePdf, storePdf, storeTeaserImage } from "@/lib/uploads";
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
    let teaserImagePath: string | null = null;
    const teaserImage = formData.get("teaserImage");
    if (teaserImage instanceof File && teaserImage.size > 0) {
      teaserImagePath = await storeTeaserImage(teaserImage);
    }

    await prisma.post.create({
      data: {
        ...parsed.data,
        description: toOptionalText(formData.get("description")),
        content: toOptionalText(formData.get("content")),
        pdfPath,
        teaserImagePath
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
  let teaserImagePath = existing.teaserImagePath;
  const file = formData.get("pdf");
  const teaserImage = formData.get("teaserImage");
  const removeTeaserImage = toBoolean(formData.get("removeTeaserImage"));

  if (file instanceof File && file.size > 0) {
    try {
      pdfPath = await storePdf(file);
      await deletePdf(existing.pdfPath);
    } catch (error) {
      return { error: error instanceof Error ? error.message : "Upload fehlgeschlagen." };
    }
  }

  if (removeTeaserImage && teaserImagePath) {
    await deletePdf(teaserImagePath);
    teaserImagePath = null;
  }

  if (teaserImage instanceof File && teaserImage.size > 0) {
    try {
      const nextTeaserImagePath = await storeTeaserImage(teaserImage);
      if (teaserImagePath) {
        await deletePdf(teaserImagePath);
      }
      teaserImagePath = nextTeaserImagePath;
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
      pdfPath,
      teaserImagePath
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
    await deletePdf(post.teaserImagePath);
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

export async function updateHomeContent(_: ActionState, formData: FormData) {
  await requireAdmin();

  const parsed = homeContentSchema.safeParse({
    homeIntro: String(formData.get("homeIntro") || "").trim()
  });

  if (!parsed.success) {
    return { error: "Bitte einen gueltigen Startseiten-Text eingeben." };
  }

  await prisma.siteContent.upsert({
    where: { key: "home" },
    create: {
      key: "home",
      homeIntro: parsed.data.homeIntro
    },
    update: {
      homeIntro: parsed.data.homeIntro
    }
  });

  redirect("/admin/home");
}
