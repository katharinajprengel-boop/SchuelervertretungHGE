import Link from "next/link";
import PostForm from "@/components/PostForm";
import { createPost } from "@/app/admin/actions";
import { requireAdmin } from "@/lib/require-admin";

export default async function NewPostPage() {
  await requireAdmin();

  return (
    <main>
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <h1>Beitrag erstellen</h1>
        <Link className="button secondary" href="/admin/posts">
          Zurück
        </Link>
      </div>
      <div className="card">
        <PostForm
          action={createPost}
          requirePdf={true}
          initialValues={{
            title: "",
            description: null,
            content: null,
            published: false,
            pinned: false
          }}
        />
      </div>
    </main>
  );
}
