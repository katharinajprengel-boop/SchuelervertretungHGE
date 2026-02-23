import Link from "next/link";

type Props = {
  searchParams: { error?: string };
};

export default function LoginPage({ searchParams }: Props) {
  const hasError = Boolean(searchParams.error);

  return (
    <main>
      <h1>Admin Login</h1>
      <div className="card">
        {hasError ? (
          <p className="notice">Login fehlgeschlagen.</p>
        ) : null}
        <form action="/api/auth/login" method="post">
          <div>
            <label htmlFor="email">E-Mail</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div>
            <label htmlFor="password">Passwort</label>
            <input id="password" name="password" type="password" required />
          </div>
          <button type="submit">Anmelden</button>
        </form>
      </div>
      <Link className="button secondary" href="/">
        Zur Startseite
      </Link>
    </main>
  );
}
