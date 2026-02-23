import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import PostForm from "@/components/PostForm";
import { updatePost } from "@/app/admin/actions";
import { requireAdmin } from "@/lib/require-admin";

type Props = {
  params: { id: string };
};

export default async function EditPostPage({ params }: Props) {
  await requireAdmin();

  const post = await prisma.post.findUnique({ where: { id: params.id } });
  if (!post) {
    notFound();
  }

  return (
    <main>
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <h1>Beitrag bearbeiten</h1>
        <Link className="button secondary" href="/admin/posts">
          Zurück
        </Link>
      </div>
      <div className="card">
        <PostForm
          action={updatePost.bind(null, post.id)}
          requirePdf={false}
          initialValues={{
            title: post.title,
            description: post.description ?? null,
            content: post.content ?? null,
            published: post.published,
            pinned: post.pinned
          }}
        />
      </div>
    </main>
  );
}
