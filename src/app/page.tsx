import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home">
      <div className="hero">
        <h1>Schülervertretung HGE</h1>
        <div className="hero-card">
          <p>
            Hallo liebe Humboldtianer*innen! Wir sind die Schülersprecher*innen und das
            Kernteam der Schülervertretung am Humboldt-Gymnasium Eichwalde. Hier findet
            ihr Infos über uns, unsere aktuellen Projekte und alles, was gerade an der
            Schule wichtig ist – von Aktionen und Terminen bis hin zu neuen Flyern. Wenn
            ihr Fragen, Ideen oder Anliegen habt, meldet euch gern bei uns!
          </p>
          <div className="cta">
            <Link className="button" href="/flyer">
              Zu Flyer &amp; Infos
            </Link>
            <Link className="button secondary" href="/admin">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
