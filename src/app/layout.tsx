import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Schülervertretung Humboldt-Gymnasium Eichwalde",
  robots: {
    index: false,
    follow: false
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <header>
          <nav className="navbar">
            <Link href="/">Schülervertretung HGE</Link>
            <div className="nav-links">
              <Link href="/flyer">Flyer &amp; Infos</Link>
              <Link href="/admin/login">Admin</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
