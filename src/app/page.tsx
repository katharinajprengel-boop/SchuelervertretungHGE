import Link from "next/link";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

const defaultHomeIntro =
  "Hallo liebe Humboldtianer*innen! Wir sind die Schülersprecher*innen und das Kernteam der Schülervertretung am Humboldt-Gymnasium Eichwalde. Hier findet ihr Infos über uns, unsere aktuellen Projekte und alles, was gerade an der Schule wichtig ist – von Aktionen und Terminen bis hin zu neuen Flyern. Wenn ihr Fragen, Ideen oder Anliegen habt, meldet euch gern bei uns!";

export default async function HomePage() {
  const content = await prisma.siteContent.findUnique({
    where: { key: "home" }
  });

  return (
    <main className="home">
      <div className="hero">
        <h1>Schülervertretung HGE</h1>
        <div className="hero-card">
          <p>{content?.homeIntro ?? defaultHomeIntro}</p>
          <div className="cta">
            <Link className="button" href="/flyer">
              Zu Flyer &amp; Infos
            </Link>
            <Link className="button secondary" href="/admin">
              Admin
            </Link>
          </div>
        </div>
        {content?.homeImagePath ? (
          <img
            src={content.homeImagePath}
            alt="Startseitenbild der Schülervertretung"
            className="home-banner"
          />
        ) : null}
      </div>
    </main>
  );
}
