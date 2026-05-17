import type { Metadata } from "next";
import { ImageLightboxGallery } from "@/components/next/ImageLightboxGallery";
import {
  ArrowRight,
  Bath,
  Bed,
  Car,
  Coffee,
  MapPin,
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
    "Klimatyzowany apartament w kompleksie Lake Hill nad Zalewem Sosnówka. 38 m2, 2 pokoje, do 4 osób. Cisza, las i bliskość Karpacza.",
};

const benefits = [
  { icon: Volume, label: "Cisza i prywatność" },
  { icon: TreePine, label: "Poranny śpiew ptaków" },
  { icon: Sparkles, label: "Przestrzeń, w której naprawdę można odpocząć" },
  { icon: Wind, label: "Brak hałasu ulicy" },
  { icon: TreePine, label: "Kojący widok na zielony las" },
  { icon: Wind, label: "Przyjemny chłód latem, bez ciągłego szumu klimatyzacji" },
];

const facts = [
  { label: "Metraż", value: "38 m2" },
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
  { icon: Sparkles, text: "Odkurzacz, żelazko, deska, suszarka" },
  { icon: TreePine, text: "Przestronny balkon z meblami ogrodowymi" },
  { icon: Car, text: "Miejsce parkingowe zewnętrzne w cenie" },
  { icon: Car, text: "Stacje ładowania aut elektrycznych" },
];

const galleryImages = [
  { src: "/assets/sosnowka/gallery/sosnowka-budynek-lake-hill.webp", alt: "Budynki Lake Hill w Sosnówce" },
  { src: "/assets/sosnowka/gallery/sosnowka-widok-na-sniezke.webp", alt: "Widok na Śnieżkę z okolic Sosnówki" },
  { src: "/assets/sosnowka/gallery/sosnowka-balkon-las.webp", alt: "Balkon apartamentu z widokiem na las" },
  { src: "/assets/sosnowka/gallery/sosnowka-widok-zalew.webp", alt: "Panorama Zalewu Sosnówka i okolicznych wzgórz" },
  { src: "/assets/sosnowka/gallery/sosnowka-resort-zalew.webp", alt: "Widok na kompleks apartamentowy nad Zalewem Sosnówka" },
  { src: "/assets/sosnowka/gallery/sosnowka-stol-zegar.webp", alt: "Nakryty stół w apartamencie Forest Hill Sosnówka" },
  { src: "/assets/sosnowka/gallery/sosnowka-dekoracja-forest-hill.webp", alt: "Dekoracja Forest Hill w apartamencie" },
  { src: "/assets/sosnowka/gallery/sosnowka-salon-balkon.webp", alt: "Salon z wyjściem na balkon" },
  { src: "/assets/sosnowka/gallery/sosnowka-strefa-tv.webp", alt: "Strefa telewizyjna i kącik kawowy" },
  { src: "/assets/sosnowka/gallery/sosnowka-salon-kuchnia.webp", alt: "Salon z aneksem kuchennym" },
  { src: "/assets/sosnowka/gallery/sosnowka-sypialnia-okno.webp", alt: "Sypialnia z dużym oknem" },
  { src: "/assets/sosnowka/gallery/sosnowka-sypialnia-szafa.webp", alt: "Sypialnia z drewnianą zabudową" },
  { src: "/assets/sosnowka/gallery/sosnowka-sypialnia-jasna.webp", alt: "Jasna sypialnia apartamentu" },
  { src: "/assets/sosnowka/gallery/sosnowka-sypialnia-lozko.webp", alt: "Łóżko w sypialni apartamentu" },
  { src: "/assets/sosnowka/gallery/sosnowka-kawa-ekspres.webp", alt: "Ekspres do kawy w apartamencie" },
  { src: "/assets/sosnowka/gallery/sosnowka-kawa-detal.webp", alt: "Kącik kawowy z detalami Forest Hill" },
  { src: "/assets/sosnowka/gallery/sosnowka-polki-kubki.webp", alt: "Półka z kubkami w aneksie kuchennym" },
  { src: "/assets/sosnowka/gallery/sosnowka-lazienka-umywalka.webp", alt: "Łazienka z umywalką i lustrem" },
  { src: "/assets/sosnowka/gallery/sosnowka-lazienka-obraz.webp", alt: "Łazienka z dekoracyjnym obrazem" },
  { src: "/assets/sosnowka/gallery/sosnowka-fotel-balkon.webp", alt: "Fotel wypoczynkowy przy balkonie" },
  { src: "/assets/sosnowka/gallery/sosnowka-salon-stol.webp", alt: "Część jadalniana i wypoczynkowa apartamentu" },
  { src: "/assets/sosnowka/gallery/sosnowka-sypialnia-wide.webp", alt: "Szerokie ujęcie sypialni" },
];

export default function SosnowkaPage() {
  return (
    <>
      <section className="relative h-[75vh] min-h-[520px] overflow-hidden">
        <img src="/assets/hero-sosnowka.jpg" alt="Widok na Karkonosze i Zalew Sosnówka" className="absolute inset-0 h-full w-full object-cover" />
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
            Możesz chodzić po górach, robić codzienne wycieczki, a jeśli zechcesz, spędzić dzień na
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
              <div key={b.label} className="flex min-h-28 items-center gap-4 rounded-xl bg-card p-6">
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
              <div key={a.text} className="flex items-center gap-3 rounded-lg bg-card px-5 py-4">
                <a.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground/85">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-14">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] opacity-80">Rezerwacja</p>
          <h2 className="font-serif mb-4 text-3xl md:text-5xl">Zarezerwuj pobyt</h2>
          <p className="mx-auto mb-8 max-w-xl opacity-85">Rezerwacja prowadzona jest przez naszego operatora, 5D Apartamenty.</p>
          <div className="flex flex-col items-center gap-6">
            <img src="/assets/logo-5d.jpg" alt="5D Apartamenty" className="h-16 w-auto rounded-md bg-white p-2" />
            <a
              href="https://client6351.idobooking.com/book-now/index.php?currency=1=1&language=1=1&language=1&location=2855&from_own_button=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 font-medium text-primary transition-colors hover:bg-white"
            >
              Przejdź do rezerwacji
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
