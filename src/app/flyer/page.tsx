import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function FlyerPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: [{ pinned: "desc" }, { createdAt: "desc" }]
  });

  return (
    <main>
      <h1>Flyer &amp; Infos</h1>
      <section className="list">
        {posts.length === 0 ? (
          <p className="notice">Noch keine Beiträge vorhanden.</p>
        ) : (
          posts.map((post) => (
            <article className="card" key={post.id}>
              <div className="actions" style={{ justifyContent: "space-between" }}>
                <h2>{post.title}</h2>
                {post.pinned ? <span className="badge">Gepinnt</span> : null}
              </div>
              {post.description ? <p>{post.description}</p> : null}
              <p className="meta">
                {post.createdAt.toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
              </p>
              <div className="actions">
                <Link className="button" href={`/flyer/${post.id}`}>
                  Beitrag öffnen
                </Link>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
