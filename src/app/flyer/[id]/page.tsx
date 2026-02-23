import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export default async function FlyerDetail({ params }: Props) {
  const post = await prisma.post.findFirst({
    where: { id: params.id, published: true }
  });

  if (!post) {
    notFound();
  }

  return (
    <main>
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <h1>{post.title}</h1>
        <Link className="button secondary" href="/flyer">
          Zurück
        </Link>
      </div>
      {post.description ? <p>{post.description}</p> : null}
      {post.content ? <p>{post.content}</p> : null}
      <div className="card">
        <object data={`/api/files/${post.id}`} type="application/pdf" width="100%" height="720">
          <p className="notice">PDF kann nicht angezeigt werden.</p>
        </object>
        <div className="actions" style={{ marginTop: 12 }}>
          <a className="button" href={`/api/files/${post.id}?download=1`}>
            PDF herunterladen
          </a>
        </div>
      </div>
    </main>
  );
}
