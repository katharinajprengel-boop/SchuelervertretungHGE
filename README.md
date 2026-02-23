# Schülervertretung Humboldt-Gymnasium Eichwalde

## Setup (lokal)

1. Abhängigkeiten installieren
2. `.env` anlegen
3. Prisma Client generieren und Datenbank migrieren
4. Owner-Admin seeden
5. App starten

```bash
cp .env.example .env
```

```bash
npm install
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

## Erforderliche Umgebungsvariablen

- `DATABASE_URL` (PostgreSQL)
- `JWT_SECRET`
- `OWNER_EMAIL`
- `OWNER_PASSWORD`
- `BLOB_READ_WRITE_TOKEN` (Vercel Blob)

## Inhalte

- Public Bereich: Startseite und `Flyer & Infos`
- Admin Bereich: `/admin` (Login, Beiträge, Admins)
- PDFs: Vercel Blob Storage

## Deployment (Vercel)

1. Vercel Postgres + Vercel Blob im Projekt aktivieren
2. Env Vars in Vercel setzen (`DATABASE_URL`, `JWT_SECRET`, `OWNER_EMAIL`, `OWNER_PASSWORD`, `BLOB_READ_WRITE_TOKEN`)
3. `npx prisma migrate deploy` als Build Command oder Post-Deploy Script
4. `npx prisma db seed` einmalig nach dem ersten Deploy ausführen

## Hinweise

- Nur veröffentlichte Beiträge sind öffentlich sichtbar.
- JWT wird als HTTP-only Cookie gespeichert.
