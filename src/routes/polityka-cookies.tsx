import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/polityka-cookies")({
  head: () => ({
    meta: [
      { title: "Polityka cookies — Forest Hill Apartamenty" },
      {
        name: "description",
        content:
          "Informacje o plikach cookies wykorzystywanych na stronie Forest Hill Apartamenty.",
      },
      { property: "og:title", content: "Polityka cookies — Forest Hill Apartamenty" },
      {
        property: "og:description",
        content: "Informacje o plikach cookies wykorzystywanych na stronie Forest Hill.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Dokumenty</p>
        <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-10">
          Polityka cookies
        </h1>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Strona Forest Hill Apartamenty korzysta z plików cookies (tzw. „ciasteczek"),
            czyli niewielkich plików tekstowych zapisywanych na urządzeniu końcowym
            Użytkownika w celu zapewnienia prawidłowego działania witryny oraz poprawy
            jakości świadczonych usług.
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">1. Czym są pliki cookies</h2>
          <p>
            Cookies to dane informatyczne przechowywane w urządzeniu Użytkownika,
            przeznaczone do korzystania ze strony internetowej. Zawierają zazwyczaj nazwę
            strony pochodzenia, czas przechowywania oraz unikalny identyfikator.
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">2. Rodzaje wykorzystywanych cookies</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Niezbędne</strong> — zapewniające prawidłowe działanie strony oraz
              jej podstawowych funkcji.
            </li>
            <li>
              <strong>Wydajnościowe</strong> — zbierające anonimowe informacje o sposobie
              korzystania ze strony (np. najczęściej odwiedzane podstrony).
            </li>
            <li>
              <strong>Funkcjonalne</strong> — umożliwiające zapamiętanie wybranych przez
              Użytkownika ustawień.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-primary pt-6">3. Cel wykorzystywania</h2>
          <p>
            Pliki cookies wykorzystywane są w celu dostosowania zawartości strony do
            preferencji Użytkownika, tworzenia statystyk pomagających zrozumieć sposób
            korzystania z witryny oraz utrzymania sesji Użytkownika.
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">4. Zarządzanie cookies</h2>
          <p>
            Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies
            w swojej przeglądarce internetowej — w tym zablokować ich automatyczną obsługę
            lub każdorazowo informować o ich zamieszczeniu. Szczegółowe informacje dostępne
            są w ustawieniach przeglądarki.
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">5. Konsekwencje wyłączenia</h2>
          <p>
            Ograniczenie stosowania plików cookies może wpłynąć na niektóre funkcjonalności
            dostępne na stronie internetowej.
          </p>

          <p className="text-sm opacity-60 pt-10">
            Data ostatniej aktualizacji: {new Date().toLocaleDateString("pl-PL")}.
          </p>
        </div>
      </article>
    </Layout>
  );
}
