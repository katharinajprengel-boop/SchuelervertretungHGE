import Link from "next/link";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/require-admin";
import { deletePost } from "@/app/admin/actions";

export default async function AdminPostsPage() {
  await requireAdmin();

  const posts = await prisma.post.findMany({
    orderBy: [{ createdAt: "desc" }]
  });

  return (
    <main>
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <h1>Beiträge verwalten</h1>
        <form action="/api/auth/logout" method="post">
          <button type="submit" className="button secondary">
            Abmelden
          </button>
        </form>
      </div>

      <div className="actions" style={{ marginBottom: 16 }}>
        <Link className="button" href="/admin/posts/new">
          Beitrag erstellen
        </Link>
        <Link className="button secondary" href="/admin/admins">
          Admins verwalten
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="notice">Keine Beiträge vorhanden.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Titel</th>
              <th>Status</th>
              <th>Datum</th>
              <th>Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  {post.title}
                  {post.pinned ? <span className="badge" style={{ marginLeft: 8 }}>Gepinnt</span> : null}
                </td>
                <td>{post.published ? "Veröffentlicht" : "Entwurf"}</td>
                <td>
                  {post.createdAt.toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </td>
                <td>
                  <div className="actions">
                    <Link className="button secondary" href={`/admin/posts/${post.id}/edit`}>
                      Bearbeiten
                    </Link>
                    <form action={deletePost.bind(null, post.id)}>
                      <button type="submit">Löschen</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
