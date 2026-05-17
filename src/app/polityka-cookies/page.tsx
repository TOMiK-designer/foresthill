import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka cookies — Forest Hill Apartamenty",
  description: "Informacje o plikach cookies wykorzystywanych na stronie Forest Hill Apartamenty.",
};

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Dokumenty</p>
      <h1 className="font-serif mb-10 text-4xl leading-tight text-primary md:text-5xl">Polityka cookies</h1>
      <div className="space-y-6 leading-relaxed text-foreground/80">
        <p>
          Strona Forest Hill Apartamenty korzysta z plików cookies, czyli niewielkich plików
          tekstowych zapisywanych na urządzeniu końcowym Użytkownika w celu zapewnienia prawidłowego
          działania witryny oraz poprawy jakości świadczonych usług.
        </p>
        <h2 className="font-serif pt-6 text-2xl text-primary">1. Czym są pliki cookies</h2>
        <p>Cookies to dane informatyczne przechowywane w urządzeniu Użytkownika, przeznaczone do korzystania ze strony internetowej.</p>
        <h2 className="font-serif pt-6 text-2xl text-primary">2. Rodzaje wykorzystywanych cookies</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Niezbędne, zapewniające prawidłowe działanie strony.</li>
          <li>Wydajnościowe, zbierające anonimowe informacje o sposobie korzystania ze strony.</li>
          <li>Funkcjonalne, umożliwiające zapamiętanie wybranych ustawień.</li>
        </ul>
        <h2 className="font-serif pt-6 text-2xl text-primary">3. Zarządzanie cookies</h2>
        <p>Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej.</p>
      </div>
    </article>
  );
}
