import Link from "next/link";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/require-admin";
import { updateHomeContent } from "@/app/admin/actions";
import HomeContentForm from "@/components/HomeContentForm";

const defaultHomeIntro =
  "Hallo liebe Humboldtianer*innen! Wir sind die Schülersprecher*innen und das Kernteam der Schülervertretung am Humboldt-Gymnasium Eichwalde. Hier findet ihr Infos über uns, unsere aktuellen Projekte und alles, was gerade an der Schule wichtig ist – von Aktionen und Terminen bis hin zu neuen Flyern. Wenn ihr Fragen, Ideen oder Anliegen habt, meldet euch gern bei uns!";

export default async function AdminHomeContentPage() {
  await requireAdmin();

  const content = await prisma.siteContent.findUnique({ where: { key: "home" } });

  return (
    <main>
      <div className="actions" style={{ justifyContent: "space-between" }}>
        <h1>Startseite bearbeiten</h1>
        <Link className="button secondary" href="/admin/posts">
          Zurück
        </Link>
      </div>

      <div className="card">
        <HomeContentForm
          action={updateHomeContent}
          initialValue={content?.homeIntro ?? defaultHomeIntro}
        />
      </div>
    </main>
  );
}
