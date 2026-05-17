import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności — Forest Hill Apartamenty" },
      {
        name: "description",
        content:
          "Zasady przetwarzania danych osobowych Gości Forest Hill Apartamenty zgodnie z RODO.",
      },
      { property: "og:title", content: "Polityka prywatności — Forest Hill Apartamenty" },
      {
        property: "og:description",
        content: "Zasady przetwarzania danych osobowych Gości Forest Hill Apartamenty.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Dokumenty</p>
        <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-10">
          Polityka prywatności
        </h1>

        <div className="prose-content space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Niniejsza Polityka prywatności określa zasady przetwarzania i ochrony danych
            osobowych przekazywanych przez Użytkowników w związku z korzystaniem ze strony
            internetowej Forest Hill Apartamenty oraz w procesie rezerwacji pobytu.
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest Forest Hill Apartamenty. W sprawach
            związanych z przetwarzaniem danych prosimy o kontakt mailowy.
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">2. Zakres i cel przetwarzania</h2>
          <p>
            Dane osobowe (imię, nazwisko, adres e-mail, numer telefonu, dane do faktury)
            przetwarzane są wyłącznie w celu:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>realizacji rezerwacji i umowy najmu krótkoterminowego,</li>
            <li>kontaktu z Gościem przed, w trakcie i po pobycie,</li>
            <li>wystawienia dokumentów księgowych,</li>
            <li>realizacji obowiązków wynikających z przepisów prawa.</li>
          </ul>

          <h2 className="font-serif text-2xl text-primary pt-6">3. Podstawa prawna</h2>
          <p>
            Dane przetwarzane są na podstawie art. 6 ust. 1 lit. b oraz c RODO — wykonanie
            umowy oraz wypełnienie obowiązku prawnego ciążącego na administratorze.
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">4. Okres przechowywania</h2>
          <p>
            Dane przechowywane są przez czas niezbędny do realizacji umowy oraz przez okres
            wymagany przepisami prawa (m.in. podatkowymi i rachunkowymi).
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">5. Prawa Użytkownika</h2>
          <p>
            Każdy Użytkownik ma prawo dostępu do swoich danych, ich sprostowania, usunięcia,
            ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu. Przysługuje
            także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">6. Odbiorcy danych</h2>
          <p>
            Dane mogą być udostępniane wyłącznie podmiotom uprawnionym na podstawie przepisów
            prawa oraz partnerom obsługującym proces rezerwacji (np. operatorowi systemu
            rezerwacyjnego 5D Apartamenty) na podstawie zawartych umów powierzenia.
          </p>

          <h2 className="font-serif text-2xl text-primary pt-6">7. Bezpieczeństwo</h2>
          <p>
            Stosujemy środki techniczne i organizacyjne zapewniające ochronę danych
            odpowiednią do zagrożeń oraz kategorii danych objętych ochroną.
          </p>

          <p className="text-sm opacity-60 pt-10">
            Data ostatniej aktualizacji: {new Date().toLocaleDateString("pl-PL")}.
          </p>
        </div>
      </article>
    </Layout>
  );
}
