import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka cookies — Forest Hill Apartamenty",
  description: "Informacje o plikach cookies wykorzystywanych na stronie Forest Hill Apartamenty.",
};

export default function CookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Dokumenty</p>
      <h1 className="mb-10 font-serif text-4xl leading-tight text-primary md:text-5xl">Polityka cookies</h1>
      <div className="space-y-6 leading-relaxed text-foreground/80">
        <p>
          Strona Forest Hill Apartamenty korzysta z plików cookies oraz podobnych technologii w celu
          zapewnienia prawidłowego działania witryny. Opcjonalne pliki cookies są wykorzystywane
          wyłącznie po wyrażeniu zgody przez Użytkownika.
        </p>

        <h2 className="pt-6 font-serif text-2xl text-primary">1. Czym są pliki cookies</h2>
        <p>
          Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym Użytkownika podczas
          korzystania ze strony internetowej. Mogą być niezbędne technicznie albo służyć dodatkowym
          celom, takim jak analiza ruchu lub działania marketingowe.
        </p>

        <h2 className="pt-6 font-serif text-2xl text-primary">2. Kategorie zgód</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Niezbędne</strong> - wymagane do prawidłowego działania strony i zapamiętania
            wyboru zgód. Te pliki nie wymagają dodatkowej zgody.
          </li>
          <li>
            <strong>Analityczne</strong> - pomagają mierzyć sposób korzystania ze strony. Są
            uruchamiane wyłącznie po dobrowolnej zgodzie.
          </li>
          <li>
            <strong>Marketingowe</strong> - mogą służyć do personalizacji treści reklamowych. Są
            uruchamiane wyłącznie po dobrowolnej zgodzie.
          </li>
        </ul>

        <h2 className="pt-6 font-serif text-2xl text-primary">3. Zarządzanie zgodą</h2>
        <p>
          Przy pierwszej wizycie Użytkownik może zaakceptować wszystkie opcjonalne cookies, odrzucić
          opcjonalne cookies albo samodzielnie wybrać kategorie zgód. Zgoda nie jest zaznaczona
          domyślnie dla kategorii opcjonalnych.
        </p>
        <p>
          Użytkownik może w każdej chwili zmienić lub wycofać zgodę, klikając przycisk „Cookies”
          widoczny w dolnej części strony po zapisaniu pierwszego wyboru. Możliwe jest również
          usunięcie plików cookies i danych strony w ustawieniach przeglądarki.
        </p>
      </div>
    </article>
  );
}
