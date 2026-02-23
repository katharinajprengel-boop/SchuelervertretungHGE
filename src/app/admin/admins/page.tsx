import Link from "next/link";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/require-admin";
import { createAdmin } from "@/app/admin/actions";
import AdminForm from "@/components/AdminForm";

export default async function AdminsPage() {
  await requireAdmin();

  const admins = await prisma.user.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <main>
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <h1>Admins verwalten</h1>
        <Link className="button secondary" href="/admin/posts">
          Zurück
        </Link>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <h2>Neuen Admin erstellen</h2>
        <AdminForm action={createAdmin} />
      </div>

      <div className="card">
        <h2>Bestehende Admins</h2>
        {admins.length === 0 ? (
          <p className="notice">Keine Admins vorhanden.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>E-Mail</th>
                <th>Erstellt am</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.email}</td>
                  <td>
                    {admin.createdAt.toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
