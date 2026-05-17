import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-semibold text-primary">404</h1>
      <p className="mt-4 text-lg text-foreground/75">Nie znaleziono tej strony.</p>
      <Link href="/" className="mt-6 rounded-full bg-primary px-6 py-3 text-primary-foreground">
        Wróć na stronę główną
      </Link>
    </div>
  );
}
