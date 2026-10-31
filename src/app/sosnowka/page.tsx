import type { Metadata } from "next";
import { ImageLightboxGallery } from "@/components/next/ImageLightboxGallery";
import {
  ArrowRight,
  Bath,
  Bed,
  Car,
  Coffee,
  MapPin,
  PawPrint,
  PlugZap,
  Sparkles,
  Star,
  TreePine,
  Tv,
  UtensilsCrossed,
  Volume,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Forest Hill Sosnówka — apartament nad Zalewem Sosnówka",
  description:
    "Klimatyzowany apartament w kompleksie Lake Hill nad Zalewem Sosnówka. 38 m², 2 pokoje, do 4 osób. Cisza, las i bliskość Karpacza.",
};

const BOOKING_URL =
  "https://www.booking.com/hotel/pl/apartament-forest-hill-sosnowka-d114-5d-apartments.pl.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaLYBiAEBmAEzuAEHyAEN2AED6AEB-AEBiAIBqAIBuAKo4srQBsACAdICJDMzOWFjOWY5LWM0ZjAtNDVkOC1iNjg5LTYxMDA1YmRmOTBlYtgCAeACAQ&sid=cf9b14638fdf3d22e12a58210cb11761&all_sr_blocks=1627752001_433410955_2_0_0&checkin=2026-05-29&checkout=2026-05-31&dest_id=16277520&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1627752001_433410955_2_0_0&hpos=1&matching_block_id=1627752001_433410955_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1627752001_433410955_2_0_0__83100&srepoch=1779609924&srpvid=9c4f38e0528d05b1&type=total&ucfs=1&";
const APARTAMENTY_5D_URL =
  "https://apartamenty5d.pl/offer/283/Apartament-Forest-Hill-Sosnowka-D4106-5D-Apartments";
const IZERSKIE_URL = "https://izerskie.com.pl/apartament/forest-hill-sosnowka/";

// 5D Apartamenty obsługuje pobyty do końca listopada 2026, potem tylko Apartamenty Izerskie.
const OPERATOR_5D_END = new Date("2026-12-01T00:00:00+01:00");

// Strona odświeża się co godzinę, żeby sekcja rezerwacji przełączyła się sama po OPERATOR_5D_END.
export const revalidate = 3600;

const GOOGLE_REVIEW_URL = "https://share.google/bTWzGiwSGJcQv9Bhk";

const benefits = [
  { icon: Volume, label: "Ciszę i prywatność" },
  { icon: TreePine, label: "Poranny śpiew ptaków" },
  { icon: Sparkles, label: "Przestrzeń, w której naprawdę można odpocząć" },
  { icon: Wind, label: "Brak hałasu ulicy" },
  { icon: TreePine, label: "Kojący widok na zielony las" },
  { icon: PawPrint, label: "Pobyt z pupilem mile widziany" },
  { icon: Wind, label: "Przyjemny chłód latem, bez ciągłego szumu klimatyzacji" },
  {
    icon: Waves,
    label: "Dostęp do basenów, strefy saun i siłowni (dodatkowo płatne)",
  },
  { icon: UtensilsCrossed, label: "Bliskość restauracji oraz pizzeria w budynku" },
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
  { icon: Tv, text: "2x Smart TV, platformy streamingowe" },
  { icon: Wifi, text: "Bezpłatne WiFi" },
  { icon: Wind, text: "Klimatyzacja centralna" },
  { icon: PawPrint, text: "Akceptujemy psy" },
  { icon: PlugZap, text: "Odkurzacz, żelazko, deska, suszarka" },
  { icon: TreePine, text: "Przestronny balkon z meblami ogrodowymi" },
  { icon: Car, text: "Miejsce parkingowe zewnętrzne w cenie" },
  { icon: Car, text: "Stacje ładowania aut elektrycznych" },
];

const galleryImages = [
  {
    src: "/assets/sosnowka/gallery/sosnowka-salon-jadalnia-balkon.webp",
    alt: "Salon z jadalnią, kącikiem kawowym i wyjściem na balkon",
    featured: true,
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-sypialnia-okno-las.webp",
    alt: "Sypialnia z podwójnym łóżkiem i dużym oknem z widokiem na las",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-balkon-widok-las.webp",
    alt: "Balkon z meblami i widokiem na las",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-apartament-przedpokoj.webp",
    alt: "Widok z przedpokoju na sypialnię i salon",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-salon-zegar-sofa.webp",
    alt: "Salon z sofą, stołem i zegarem ściennym",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-aneks-kuchenny-wejscie.webp",
    alt: "Aneks kuchenny z płytą indukcyjną, mikrofalówką i czajnikiem",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-stol-nakrycie-kwiaty.webp",
    alt: "Nakryty stół z kwiatami w salonie",
    featured: true,
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-salon-sofa-balkon.webp",
    alt: "Kącik wypoczynkowy z sofą i wyjściem na balkon",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-sypialnia-szafa.webp",
    alt: "Sypialnia z pojemną szafą i łóżkiem",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-sypialnia-lozko-poduszki.webp",
    alt: "Łóżko z poduszkami i lampkami nocnymi",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-sypialnia-tv-okno.webp",
    alt: "Sypialnia z telewizorem i oknem na las",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-lazienka-prysznic-walkin.webp",
    alt: "Łazienka z prysznicem typu walk-in",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-budynek-lake-hill.webp",
    alt: "Budynki Lake Hill w Sosnówce",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-widok-na-sniezke.webp",
    alt: "Widok na Śnieżkę z okolic Sosnówki",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-widok-zalew.webp",
    alt: "Panorama Zalewu Sosnówka i okolicznych wzgórz",
  },
  {
    src: "/assets/sosnowka/gallery/sosnowka-dekoracja-forest-hill.webp",
    alt: "Dekoracja Forest Hill na drzwiach apartamentu",
  },
];

function IzerskieCard({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
      {label ? <p className="text-xs uppercase tracking-[0.2em] opacity-80">{label}</p> : null}
      <div className="flex h-20 w-56 items-center justify-center rounded-md bg-white px-5 shadow-lg shadow-black/10">
        <img
          src="/assets/apartamenty-izerskie-logo.svg"
          width={212}
          height={48}
          alt="Apartamenty Izerskie"
          className="h-12 w-auto"
        />
      </div>
      <a
        href={IZERSKIE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-button inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-primary"
      >
        Przejdź do rezerwacji
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export default function SosnowkaPage() {
  const is5DActive = Date.now() < OPERATOR_5D_END.getTime();

  return (
    <>
      <section className="relative h-[75vh] min-h-[520px] overflow-hidden">
        <Image
          src="/assets/hero-sosnowka-page.jpg"
          alt="Widok na Karkonosze i Zalew Sosnówka"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-90">Karkonosze</p>
          <h1 className="font-serif text-4xl md:text-6xl">Forest Hill Sosnówka</h1>
          <div className="mt-4 flex flex-col items-center gap-1 opacity-90">
            <p className="flex items-center gap-2 text-base md:text-lg">
              <MapPin className="h-4 w-4" /> Lake Hill, nad Zalewem Sosnówka
            </p>
            <p className="text-sm md:text-base">ul. Tyrolska 2I</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">O lokalizacji</p>
        <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
          Sosnówka koło Karpacza to miejsce szczególne
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            To jedna z najbardziej prestiżowych i kameralnych lokalizacji w Karkonoszach, z dala od
            zatłoczonych ulic i hałasu turystów.
          </p>
          <p>
            Rezerwując pobyt w naszym apartamencie, położonym w kompleksie Lake Hill nad Zalewem
            Sosnówka, otrzymasz ciszę, spokój, prywatność, a jednocześnie bliskość Karpacza,
            Szklarskiej Poręby, Cieplic, Jeleniej Góry oraz całych Karkonoszy.
          </p>
          <p>
            Możesz chodzić po górach, robić codzienne wycieczki, a jeśli zechcesz - spędzić dzień na
            leżaku lub na basenie i podziwiać góry z tej perspektywy.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif mb-12 max-w-2xl text-3xl text-primary md:text-4xl">
            Dzięki tej lokalizacji otrzymasz
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="interactive-card flex min-h-28 items-center gap-4 rounded-xl bg-card p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <p className="leading-snug text-foreground/85">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Apartament</p>
            <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
              Klimatyzowany apartament w wysokim standardzie
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Forest Hill Sosnówka to bogato wyposażony apartament dla maksymalnie 4 osób,
              zlokalizowany na pierwszym piętrze budynku apartamentowego D z windą, od strony lasu.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-border bg-cream p-6">
                <dt className="text-xs uppercase tracking-[0.2em] text-accent">{f.label}</dt>
                <dd className="mt-2 font-serif text-3xl text-primary">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <ImageLightboxGallery images={galleryImages} />
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Wyposażenie</p>
            <h2 className="font-serif text-3xl text-primary md:text-5xl">
              Wszystko, czego potrzebujesz
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div
                key={a.text}
                className="interactive-card flex items-center gap-3 rounded-lg bg-card px-5 py-4 shadow-sm"
              >
                <a.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground/85">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rezerwacje" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-20 md:py-28">
        <div className="rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-14">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] opacity-80">Rezerwacja</p>
          <h2 className="font-serif mb-4 text-3xl md:text-5xl">Zarezerwuj pobyt</h2>
          {is5DActive ? (
            <>
              <p className="mx-auto mb-8 max-w-xl opacity-85">
                Zmieniamy operatora. Pobyty od 5 grudnia rezerwujesz przez Apartamenty Izerskie,
                a pobyty do 30 listopada nadal przez 5D Apartamenty.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <IzerskieCard label="Pobyty od 5 grudnia" />

                <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-80">
                    Pobyty do 30 listopada
                  </p>
                  <Image
                    src="/assets/logo-5d.jpg"
                    width={721}
                    height={1218}
                    sizes="96px"
                    alt="5D Apartamenty"
                    className="h-20 w-auto rounded-md bg-white p-2"
                  />
                  <a
                    href={APARTAMENTY_5D_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-primary"
                  >
                    Rezerwuj w 5D Apartamenty
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline-offset-4 opacity-85 hover:underline"
                  >
                    lub na Booking.com
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="mx-auto mb-8 max-w-xl opacity-85">
                Rezerwacja prowadzona jest przez naszego operatora, Apartamenty Izerskie.
              </p>
              <div className="mx-auto max-w-xl">
                <IzerskieCard />
              </div>
            </>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28">
        <div className="interactive-card overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Po pobycie</p>
              <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
                Podziel się opinią o Forest Hill Sosnówka
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                Jeśli dobrze odpocząłeś w naszym apartamencie, będzie nam bardzo miło, gdy zostawisz
                kilka słów w Google. Twoja opinia pomaga kolejnym gościom wybrać miejsce na spokojny
                pobyt w Karkonoszach.
              </p>
            </div>
            <div className="rounded-2xl bg-secondary/55 p-6 text-center">
              <div className="mx-auto mb-5 flex w-max gap-1 text-primary" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-foreground/75">
                Dziękujemy za każdą opinię i każde dobre słowo po pobycie.
              </p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-medium text-primary"
              >
                Zostaw opinię w Google
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
