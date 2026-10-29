import type { Metadata } from "next";
import { ImageLightboxGallery } from "@/components/next/ImageLightboxGallery";
import {
  Armchair,
  ArrowRight,
  Bath,
  BedDouble,
  Bike,
  BrushCleaning,
  Car,
  Coffee,
  CookingPot,
  CupSoda,
  Fan,
  MapPin,
  Microwave,
  Mountain,
  PanelTop,
  Refrigerator,
  Shirt,
  Sofa,
  Snowflake,
  Star,
  Tv,
  Waves,
  Wifi,
  Wind,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Forest Hill Świeradów-Zdrój — apartament w Górach Izerskich",
  description:
    "Apartament Forest Hill Świeradów-Zdrój w Izerskim Resorcie tuż obok wieży Sky Walk. Sauna, narciarnia, rowerownia i podziemne miejsce postojowe.",
};

const highlights = [
  {
    icon: Mountain,
    title: "Sky Walk Świeradów",
    text: "Apartament tuż obok słynnej wieży widokowej.",
  },
  {
    icon: Snowflake,
    title: "Raj dla narciarzy",
    text: "Świeradów-Zdrój zimą, ze stokami w zasięgu ręki.",
  },
  {
    icon: Bike,
    title: "Latem na rowerze",
    text: "Dziesiątki tras Singletrack Glacensis i Gór Izerskich.",
  },
];

const benefits = [
  { icon: ShieldCheck, label: "Prywatność" },
  { icon: Armchair, label: "Przestrzeń, w której naprawdę można odpocząć" },
  { icon: Wind, label: "Brak hałasu ulicy" },
  { icon: Car, label: "Podziemne miejsce parkingowe w cenie" },
  { icon: Waves, label: "Możliwość korzystania z sauny w budynku" },
  { icon: Bike, label: "Możliwość korzystania z rowerowni i narciarni" },
];

const facts = [
  { label: "Metraż", value: "26 m²" },
  { label: "Piętro", value: "1 (winda)" },
  { label: "Pokoje", value: "Studio + łazienka" },
  { label: "Maks. osób", value: "4" },
];

const amenities = [
  { icon: BedDouble, text: "1 podwójne łóżko" },
  { icon: Sofa, text: "2-osobowa rozkładana pełnowymiarowa sofa" },
  { icon: Bath, text: "Łazienka z prysznicem i WC" },
  { icon: CookingPot, text: "Płyta indukcyjna 2-palnikowa" },
  { icon: Refrigerator, text: "Lodówka" },
  { icon: Microwave, text: "Piekarnik z kuchenką mikrofalową" },
  { icon: CupSoda, text: "Czajnik" },
  { icon: Coffee, text: "Ekspres ciśnieniowy" },
  { icon: Tv, text: "TV z płaskim ekranem, Smart TV, platformy streamingowe" },
  { icon: BrushCleaning, text: "Odkurzacz" },
  { icon: PanelTop, text: "Deska do prasowania" },
  { icon: Shirt, text: "Żelazko" },
  { icon: Fan, text: "Suszarka do włosów" },
  { icon: Wifi, text: "Bezpłatne WiFi" },
  { icon: Car, text: "Miejsce parkingowe podziemne w cenie" },
];

const GOOGLE_REVIEW_URL = "https://share.google/QciNGlYuBX8J88drd";
const IZERSKIE_URL = "https://izerskie.com.pl/apartament/forest-hill/";

const galleryImages = [
  {
    src: "/assets/swieradow/gallery/swieradow-studio-aneks-kuchenny.webp",
    alt: "Jasne studio z aneksem kuchennym, częścią wypoczynkową i łóżkiem",
    featured: true,
  },
  {
    src: "/assets/swieradow/gallery/swieradow-studio-lozko-aneks.webp",
    alt: "Studio z podwójnym łóżkiem, aneksem kuchennym i stołem",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-sypialnia.webp",
    alt: "Podwójne łóżko z przygotowaną pościelą i ręcznikami",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-aneks-kuchenny.webp",
    alt: "Nowoczesny aneks kuchenny z piekarnikiem i ekspresem do kawy",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-lazienka-pralka-prysznic.webp",
    alt: "Łazienka z prysznicem, umywalką i pralką",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-lazienka-prysznic.webp",
    alt: "Kabina prysznicowa i umywalka w łazience",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-jadalnia-kwiaty.webp",
    alt: "Nakryty stół z kwiatami w apartamencie",
    featured: true,
  },
  {
    src: "/assets/swieradow/gallery/swieradow-lazienka-lustro.webp",
    alt: "Podświetlane lustro i umywalka w łazience",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-lozko-detal.webp",
    alt: "Tapicerowany zagłówek i oświetlenie przy łóżku",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-lampa-detal.webp",
    alt: "Dekoracyjna lampa na drewnianej ścianie",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-kwiaty-aneks.webp",
    alt: "Kwiaty i ekspres do kawy w aneksie kuchennym",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-sniadanie-kawa.webp",
    alt: "Świeże pieczywo i kawa przygotowane dla Gości",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-przewodniki-izerskie.webp",
    alt: "Przewodniki po Karkonoszach i Górach Izerskich",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-izerski-resort-sky-walk.webp",
    alt: "Izerski Resort i wieża Sky Walk w otoczeniu Gór Izerskich",
  },
  {
    src: "/assets/swieradow/gallery/swieradow-widok-resort-sky-walk.webp",
    alt: "Widok na Izerski Resort i wieżę Sky Walk",
  },
];

export default function SwieradowPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src="/assets/hero-swieradow.jpg"
          alt="Świeradów-Zdrój i wieża Sky Walk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-90">Góry Izerskie</p>
          <h1 className="font-serif text-4xl md:text-6xl">Forest Hill Świeradów-Zdrój</h1>
          <div className="mt-4 flex flex-col items-center gap-1 opacity-90">
            <p className="flex items-center gap-2 text-base md:text-lg">
              <MapPin className="h-4 w-4" /> Izerski Resort, obok wieży Sky Walk
            </p>
            <p className="text-sm md:text-base">ul. Kilińskiego 2C</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">O lokalizacji</p>
        <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
          Miasto uzdrowiskowe i brama Gór Izerskich
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Świeradów-Zdrój to nie tylko miasto uzdrowiskowe, ale też punkt wyjścia na liczne szlaki
            Gór Izerskich, popularna wieża Sky Walk oraz raj dla narciarzy zimą i rowerzystów latem.
          </p>
          <p>
            Serdecznie zapraszamy do naszego apartamentu w Izerskim Resorcie, tuż obok wieży Sky
            Walk. Nasi Goście, w ramach pobytów, mogą korzystać z sauny, narciarni i rowerowni oraz
            podziemnego miejsca postojowego.
          </p>
          <p>
            Izerski Resort, to miejsce szczególne. Tuż przy wieży Sky Walk, z dala od zatłoczonych
            ulic i hałasu turystów.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="interactive-card rounded-2xl bg-card p-8 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif mb-2 text-xl text-primary">{h.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/75">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Pobyt</p>
        <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
          Spokój, prywatność i hotelowy standard
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Rezerwując pobyt w naszym apartamencie, otrzymasz spokój, prywatność, hotelowy standard,
            a jednocześnie bliskość szlaków oraz licznych atrakcji Świeradowa-Zdroju i okolic.
          </p>
          <p>
            <strong>Forest Hill Świeradów-Zdrój</strong> to kameralne studio, wykończone w wysokim
            standardzie, bogato wyposażone, przeznaczone dla maksymalnie 4 osób, zlokalizowane na
            pierwszym piętrze budynku apartamentowego z windą, od strony wieży Sky Walk.
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
              Kameralne studio przy Sky Walk
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Studio z aneksem kuchennym oraz łazienką z WC mieści się w Izerskim Resorcie. Goście
              mają do dyspozycji bezpłatne WiFi oraz podziemne miejsce parkingowe w cenie.
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
          <p className="mx-auto mb-8 max-w-xl opacity-85">
            Rezerwacja prowadzona jest przez naszego operatora, Apartamenty Izerskie.
          </p>
          <div className="mx-auto max-w-xl">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="interactive-card overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-sm">
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Po pobycie</p>
              <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
                Podziel się opinią o Forest Hill Świeradów-Zdrój
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-foreground/80">
                Jeśli dobrze odpocząłeś w naszym apartamencie, będzie nam bardzo miło, gdy zostawisz
                kilka słów w Google. Twoja opinia pomaga kolejnym gościom wybrać miejsce na spokojny
                pobyt w Górach Izerskich.
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
