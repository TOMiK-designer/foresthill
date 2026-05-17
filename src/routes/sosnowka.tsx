import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import hero from "@/assets/hero-sosnowka.jpg";

import logo5d from "@/assets/logo-5d.jpg";
import apt1 from "@/assets/apt-sosnowka-1.jpg";
import apt2 from "@/assets/apt-sosnowka-2.jpg";
import apt3 from "@/assets/apt-sosnowka-3.jpg";
import {
  ArrowRight, Bed, Wifi, Car, Coffee, Tv, Wind, Bath,
  TreePine, Volume, Sparkles, MapPin,
} from "lucide-react";

export const Route = createFileRoute("/sosnowka")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Forest Hill Sosnówka — apartament nad Zalewem Sosnówka, Karkonosze" },
      {
        name: "description",
        content:
          "Klimatyzowany apartament w kompleksie Lake Hill nad Zalewem Sosnówka. 38 m², 2 pokoje, do 4 osób. Cisza, las i bliskość Karpacza.",
      },
    ],
  }),
});

const benefits = [
  { icon: Volume, label: "Cisza i prywatność" },
  { icon: TreePine, label: "Poranny śpiew ptaków" },
  { icon: Sparkles, label: "Przestrzeń, w której naprawdę można odpocząć" },
  { icon: Wind, label: "Brak hałasu ulicy" },
  { icon: TreePine, label: "Kojący widok na zielony las" },
  { icon: Wind, label: "Przyjemny chłód latem, bez ciągłego szumu klimatyzacji" },
];

const facts = [
  { label: "Metraż", value: "38 m²" },
  { label: "Piętro", value: "1 (winda)" },
  { label: "Pokoje", value: "2 + łazienka" },
  { label: "Maks. osób", value: "4" },
];

const amenities = [
  { icon: Bed, text: "2 pojedyncze łóżka lub 1 podwójne" },
  { icon: Bed, text: "2-osobowa rozkładana sofa" },
  { icon: Bath, text: "Łazienka z prysznicem i WC" },
  { icon: Coffee, text: "Ekspres ciśnieniowy, czajnik" },
  { icon: Coffee, text: "Płyta indukcyjna, lodówka, mikrofalówka" },
  { icon: Tv, text: "2× Smart TV, platformy streamingowe" },
  { icon: Wifi, text: "Bezpłatne WiFi" },
  { icon: Wind, text: "Klimatyzacja centralna" },
  { icon: Sparkles, text: "Odkurzacz, żelazko, deska, suszarka" },
  { icon: TreePine, text: "Przestronny balkon z meblami ogrodowymi" },
  { icon: Car, text: "Miejsce parkingowe zewnętrzne w cenie" },
  { icon: Car, text: "Stacje ładowania aut elektrycznych" },
];

function Page() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[520px] overflow-hidden">
        <img src={hero} alt="Widok na Karkonosze i Zalew Sosnówka" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl h-full px-6 flex flex-col items-center justify-center text-center text-primary-foreground">
          
          <p className="text-sm uppercase tracking-[0.3em] mb-3 opacity-90">Karkonosze</p>
          <h1 className="font-serif text-4xl md:text-6xl">Forest Hill Sosnówka</h1>
          <p className="mt-4 flex items-center gap-2 text-base md:text-lg opacity-90">
            <MapPin className="h-4 w-4" /> Lake Hill, nad Zalewem Sosnówka
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">O lokalizacji</p>
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
          Sosnówka k/Karpacza to miejsce szczególne
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            To jedna z najbardziej prestiżowych i kameralnych lokalizacji w Karkonoszach,
            z dala od zatłoczonych ulic i hałasu turystów.
          </p>
          <p>
            Rezerwując pobyt w naszym apartamencie, położonym w kompleksie Lake Hill nad Zalewem Sosnówka,
            otrzymasz ciszę, spokój, prywatność, a jednocześnie bliskość Karpacza, Szklarskiej Poręby,
            Cieplic, Jeleniej Góry oraz całych Karkonoszy i licznych atrakcji regionu.
          </p>
          <p>
            Możesz chodzić po górach, możesz robić codzienne wycieczki, a jeśli zechcesz —
            możesz spędzić dzień na leżaku lub na basenie i podziwiać góry z tej perspektywy.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">
              Dzięki tej lokalizacji otrzymasz
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.label} className="flex items-start gap-4 bg-card p-6 rounded-xl">
                <div className="h-11 w-11 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <b.icon className="h-5 w-5" />
                </div>
                <p className="text-foreground/85 leading-snug">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Apartament</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
              Klimatyzowany apartament w wysokim standardzie
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Forest Hill Sosnówka to bogato wyposażony apartament dla maksymalnie 4 osób,
              zlokalizowany na I piętrze budynku apartamentowego D z windą, od strony lasu.
              Salon z aneksem kuchennym, oddzielna sypialnia z podwójnym łóżkiem i łazienka z WC.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="bg-cream border border-border rounded-2xl p-6">
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">{f.label}</dt>
                <dd className="mt-2 font-serif text-3xl text-primary">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-3 md:[grid-template-rows:1fr]">
          <img src={apt1} alt="Salon z aneksem kuchennym" loading="lazy" className="w-full h-72 md:h-96 object-cover rounded-2xl md:col-span-2" />
          <img src={apt2} alt="Sypialnia z podwójnym łóżkiem" loading="lazy" className="w-full h-72 md:h-96 object-cover rounded-2xl" />
          <img src={apt3} alt="Balkon z meblami ogrodowymi" loading="lazy" className="w-full h-72 md:h-96 object-cover rounded-2xl" />
          <img src={apt1} alt="Wnętrze apartamentu" loading="lazy" className="w-full h-72 md:h-96 object-cover rounded-2xl md:col-span-2" />
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Wyposażenie</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary">Wszystko, czego potrzebujesz</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, i) => (
              <div key={i} className="flex items-center gap-3 bg-card px-5 py-4 rounded-lg">
                <a.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-foreground/85">{a.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="bg-card p-7 rounded-2xl">
              <h3 className="font-serif text-xl text-primary mb-2">Strefa wellness</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Dostęp do siłowni, basenu i strefy Spa w części hotelowej — aktualnie dodatkowo płatny.
                Wkrótce otwarcie drugiej strefy basenowej z możliwością bezpłatnego korzystania dla naszych Gości.
              </p>
            </div>
            <div className="bg-card p-7 rounded-2xl">
              <h3 className="font-serif text-xl text-primary mb-2">Gastronomia na miejscu</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Restauracja hotelowa z możliwością wykupienia śniadań, restauracja à la carte
                oraz pizzeria w budynku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operator CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] opacity-80 mb-4">Rezerwacja</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-4">Zarezerwuj pobyt</h2>
          <p className="opacity-85 max-w-xl mx-auto mb-8">
            Rezerwacja prowadzona jest przez naszego operatora — 5D Apartamenty.
          </p>
          <div className="flex flex-col items-center gap-6">
            <img src={logo5d} alt="5D Apartamenty" className="h-16 w-auto rounded-md bg-white p-2" />
            <a
              href="https://client6351.idobooking.com/book-now/index.php?currency=1=1&language=1=1&language=1&location=2855&from_own_button=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream text-primary px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
            >
              Przejdź do rezerwacji
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
