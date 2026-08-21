import type { Metadata } from "next";
import { ImageLightboxGallery } from "@/components/next/ImageLightboxGallery";
import {
  ArrowRight,
  Bike,
  Facebook,
  Instagram,
  MapPin,
  Mountain,
  Snowflake,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Forest Hill Świeradów-Zdrój — apartament w Górach Izerskich",
  description:
    "Wkrótce luksusowy apartament w Izerskim Resorcie tuż obok wieży Sky Walk. Sauna, narciarnia, rowerownia.",
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

const GOOGLE_REVIEW_URL = "https://share.google/QciNGlYuBX8J88drd";

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
        <img
          src="/assets/hero-swieradow.jpg"
          alt="Świeradów-Zdrój i wieża Sky Walk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-90">Góry Izerskie</p>
          <h1 className="font-serif text-4xl md:text-6xl">Forest Hill Świeradów-Zdrój</h1>
          <p className="mt-4 flex items-center gap-2 text-base opacity-90 md:text-lg">
            <MapPin className="h-4 w-4" /> Izerski Resort, obok wieży Sky Walk
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <span className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-accent">
          Już wkrótce
        </span>
        <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
          Miasto uzdrowiskowe i brama Gór Izerskich
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Świeradów-Zdrój to nie tylko miasto uzdrowiskowe, ale też punkt wyjścia na liczne szlaki
            Gór Izerskich, popularna wieża Sky Walk oraz raj dla narciarzy zimą i rowerzystów latem.
          </p>
          <p>
            Już wkrótce zapraszamy do naszego apartamentu w Izerskim Resorcie, tuż obok wieży Sky
            Walk. Goście będą mieli dostęp do sauny, narciarni i rowerowni oraz podziemnego miejsca
            postojowego.
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

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <ImageLightboxGallery images={galleryImages} />
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

      <SocialSection title="Śledź nas i obserwuj postęp prac wykończeniowych" />
    </>
  );
}

function SocialSection({ title }: { title: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <h2 className="font-serif mb-4 text-3xl text-primary md:text-4xl">{title}</h2>
      <p className="mb-8 text-foreground/75">
        Bądź pierwszym, który zobaczy gotowy apartament i odbierze najlepsze terminy.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://www.facebook.com/share/1B31HGFq6V/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button glass-button-social-green inline-flex items-center gap-2 rounded-full px-6 py-3"
        >
          <Facebook className="h-4 w-4" /> Facebook
        </a>
        <a
          href="https://www.instagram.com/forest.hill.apartamenty?igsh=dzI5NHIyZTkycGh2&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button glass-button-social-green inline-flex items-center gap-2 rounded-full px-6 py-3"
        >
          <Instagram className="h-4 w-4" /> Instagram
        </a>
      </div>
    </section>
  );
}
