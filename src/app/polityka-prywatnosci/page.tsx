import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności — Forest Hill Apartamenty",
  description: "Zasady przetwarzania danych osobowych Gości Forest Hill Apartamenty zgodnie z RODO.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Dokumenty</p>
      <h1 className="font-serif mb-10 text-4xl leading-tight text-primary md:text-5xl">Polityka prywatności</h1>
      <div className="space-y-6 leading-relaxed text-foreground/80">
        <p>
          Niniejsza Polityka prywatności określa zasady przetwarzania i ochrony danych osobowych
          przekazywanych przez Użytkowników w związku z korzystaniem ze strony internetowej Forest
          Hill Apartamenty oraz w procesie rezerwacji pobytu.
        </p>
        <h2 className="font-serif pt-6 text-2xl text-primary">1. Administrator danych</h2>
        <p>Administratorem danych osobowych jest Forest Hill Apartamenty.</p>
        <h2 className="font-serif pt-6 text-2xl text-primary">2. Zakres i cel przetwarzania</h2>
        <p>Dane osobowe przetwarzane są wyłącznie w celu realizacji rezerwacji, kontaktu z Gościem, wystawienia dokumentów księgowych oraz realizacji obowiązków wynikających z prawa.</p>
        <h2 className="font-serif pt-6 text-2xl text-primary">3. Podstawa prawna</h2>
        <p>Dane przetwarzane są na podstawie art. 6 ust. 1 lit. b oraz c RODO.</p>
        <h2 className="font-serif pt-6 text-2xl text-primary">4. Prawa Użytkownika</h2>
        <p>Każdy Użytkownik ma prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu.</p>
        <h2 className="font-serif pt-6 text-2xl text-primary">5. Bezpieczeństwo</h2>
        <p>Stosujemy środki techniczne i organizacyjne zapewniające ochronę danych odpowiednią do zagrożeń oraz kategorii danych objętych ochroną.</p>
      </div>
    </article>
  );
}
