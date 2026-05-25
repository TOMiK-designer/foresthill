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
  Sparkles,
  TreePine,
  Tv,
  Volume,
  Wifi,
  Wind,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Forest Hill Sosnówka — apartament nad Zalewem Sosnówka",
  description:
    "Klimatyzowany apartament w kompleksie Lake Hill nad Zalewem Sosnówka. 38 m², 2 pokoje, do 4 osób. Cisza, las i bliskość Karpacza.",
};

const BOOKING_URL =
  "https://www.booking.com/hotel/pl/apartament-forest-hill-sosnowka-d114-5d-apartments.pl.html?aid=304142&label=gen173nr-10CAEoggI46AdIM1gEaLYBiAEBmAEzuAEHyAEN2AED6AEB-AEBiAIBqAIBuAKo4srQBsACAdICJDMzOWFjOWY5LWM0ZjAtNDVkOC1iNjg5LTYxMDA1YmRmOTBlYtgCAeACAQ&sid=cf9b14638fdf3d22e12a58210cb11761&all_sr_blocks=1627752001_433410955_2_0_0&checkin=2026-05-29&checkout=2026-05-31&dest_id=16277520&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1627752001_433410955_2_0_0&hpos=1&matching_block_id=1627752001_433410955_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1627752001_433410955_2_0_0__83100&srepoch=1779609924&srpvid=9c4f38e0528d05b1&type=total&ucfs=1&";

const benefits = [
  { icon: Volume, label: "Ciszę i prywatność" },
  { icon: TreePine, label: "Poranny śpiew ptaków" },
  { icon: Sparkles, label: "Przestrzeń, w której naprawdę można odpocząć" },
  { icon: Wind, label: "Brak hałasu ulicy" },
  { icon: TreePine, label: "Kojący widok na zielony las" },
  { icon: PawPrint, label: "Pobyt z pupilem mile widziany" },
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
  { icon: Tv, text: "2x Smart TV, platformy streamingowe" },
  { icon: Wifi, text: "Bezpłatne WiFi" },
  { icon: Wind, text: "Klimatyzacja centralna" },
  { icon: PawPrint, text: "Akceptujemy psy" },
  { icon: Sparkles, text: "Odkurzacz, żelazko, deska, suszarka" },
  { icon: TreePine, text: "Przestronny balkon z meblami ogrodowymi" },
  { icon: Car, text: "Miejsce parkingowe zewnętrzne w cenie" },
  { icon: Car, text: "Stacje ładowania aut elektrycznych" },
];

const galleryImages = [
  {
    src: "/assets/sosnowka/gallery/sosnowka-sypialnia-przygotowana.jpeg",
    alt: "Sypialnia z przygotowanym łóżkiem i ręcznikami",
    featured: true,
  },
  { src: "/assets/sosnowka/gallery/sosnowka-salon-jadalnia-nowy.jpeg", alt: "Salon z kanapą, stołem i zegarem" },
  { src: "/assets/sosnowka/gallery/sosnowka-balkon-las.webp", alt: "Balkon apartamentu z widokiem na las" },
  { src: "/assets/sosnowka/gallery/sosnowka-salon-kanapa.jpeg", alt: "Kanapa i kącik wypoczynkowy w salonie" },
  { src: "/assets/sosnowka/gallery/sosnowka-salon-perspektywa.jpeg", alt: "Salon z sofą i widokiem na aneks kuchenny" },
  { src: "/assets/sosnowka/gallery/sosnowka-kubki-polka.jpeg", alt: "Półka z kubkami w aneksie kuchennym" },
  {
    src: "/assets/sosnowka/gallery/sosnowka-resort-zalew.webp",
    alt: "Nakryty stół z kwiatkiem i zegarem w apartamencie",
    featured: true,
  },
  { src: "/assets/sosnowka/gallery/sosnowka-budynek-lake-hill.webp", alt: "Budynki Lake Hill w Sosnówce" },
  { src: "/assets/sosnowka/gallery/sosnowka-widok-na-sniezke.webp", alt: "Widok na Śnieżkę z okolic Sosnówki" },
  { src: "/assets/sosnowka/gallery/sosnowka-widok-zalew.webp", alt: "Panorama Zalewu Sosnówka i okolicznych wzgórz" },
  { src: "/assets/sosnowka/gallery/sosnowka-stol-zegar.webp", alt: "Widok na kompleks apartamentowy nad Zalewem Sosnówka" },
  { src: "/assets/sosnowka/gallery/sosnowka-dekoracja-forest-hill.webp", alt: "Dekoracja Forest Hill na drzwiach apartamentu" },
  { src: "/assets/sosnowka/gallery/sosnowka-aneks-kuchenny.jpg", alt: "Aneks kuchenny z płytą indukcyjną i mikrofalówką" },
  { src: "/assets/sosnowka/gallery/sosnowka-sypialnia-reczniki.jpeg", alt: "Sypialnia z łóżkiem i przygotowanymi ręcznikami" },
  { src: "/assets/sosnowka/gallery/sosnowka-lazienka-prysznic.jpg", alt: "Łazienka z prysznicem, umywalką i lustrem" },
  { src: "/assets/sosnowka/gallery/sosnowka-lazienka-obraz-lustro.jpeg", alt: "Łazienka z lustrem, umywalką i dekoracyjnym obrazem" },
];

export default function SosnowkaPage() {
  return (
    <>
      <section className="relative h-[75vh] min-h-[520px] overflow-hidden">
        <img src="/assets/hero-sosnowka-page.jpg" alt="Widok na Karkonosze i Zalew Sosnówka" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-90">Karkonosze</p>
          <h1 className="font-serif text-4xl md:text-6xl">Forest Hill Sosnówka</h1>
          <p className="mt-4 flex items-center gap-2 text-base opacity-90 md:text-lg">
            <MapPin className="h-4 w-4" /> Lake Hill, nad Zalewem Sosnówka
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
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
              <div key={b.label} className="interactive-card flex min-h-28 items-center gap-4 rounded-xl bg-card p-6 shadow-sm">
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
            <h2 className="font-serif text-3xl text-primary md:text-5xl">Wszystko, czego potrzebujesz</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div key={a.text} className="interactive-card flex items-center gap-3 rounded-lg bg-card px-5 py-4 shadow-sm">
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
          <p className="mx-auto mb-8 max-w-xl opacity-85">Rezerwacja prowadzona jest przez naszego operatora, 5D Apartamenty.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <img src="/assets/logo-5d.jpg" alt="5D Apartamenty" className="h-20 w-auto rounded-md bg-white p-2" />
              <a
                href="https://client6351.idobooking.com/book-now/index.php?currency=1&language=1&location=285&from_own_button=1"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-primary"
              >
                Przejdź do rezerwacji
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zarezerwuj apartament Forest Hill Sosnówka na Booking.com"
                className="inline-flex h-20 items-center rounded-md bg-white px-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <img src="/assets/booking-com-logo.svg" alt="Booking.com" className="h-10 w-auto" />
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-primary"
              >
                Rezerwuj na Booking.com
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
