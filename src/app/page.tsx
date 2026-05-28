import { ArrowDown, ArrowRight, Youtube } from "lucide-react";
import Link from "next/link";

const SOSNOWKA_RESERVATION_SECTION = "/sosnowka#rezerwacje";
const GUIDES_YOUTUBE_URL = "https://youtube.com/shorts/YBj2H0gt3-U?is=vi2_CW7Tn5bHvEas";
const GUIDES_TIKTOK_URL = "https://www.tiktok.com/@forest.hill.apart?_r=1&_t=ZN-96jzu4kbSSc";

const locations = [
  {
    href: "/sosnowka",
    name: "Sosnówka",
    region: "Karkonosze",
    image: "/assets/hero-sosnowka.jpg",
    description:
      "Kameralny apartament nad Zalewem Sosnówka, w prestiżowym kompleksie Lake Hill. Cisza, las i bliskość Karpacza.",
  },
  {
    href: "/swieradow",
    name: "Świeradów-Zdrój",
    region: "Góry Izerskie",
    image: "/assets/hero-swieradow.jpg",
    soon: true,
    description:
      "Wkrótce apartament w Izerskim Resorcie, tuż obok wieży Sky Walk. Sauna, narciarnia, rowerownia.",
  },
  {
    href: "/mrzezyno",
    name: "Mrzeżyno",
    region: "Bałtyk",
    image: "/assets/hero-mrzezyno.jpg",
    soon: true,
    description:
      "Wkrótce apartament w Resorcie Hevenia, kilka kroków od plaży. Baseny, sauny, taras na dachu.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        <img
          src="/assets/hero-main.jpg"
          alt="Karkonoski las o poranku"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/55" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-72 bg-gradient-to-b from-transparent via-background/70 to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <h1 className="font-serif max-w-4xl text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
            Twój drugi dom na szlaku <span className="italic">karkonoskich i nadmorskich</span> wspomnień
          </h1>
          <p className="mt-6 font-serif text-lg italic opacity-90 md:text-2xl">
            Są miejsca, do których przyjeżdża się raz. Są takie, do których się wraca.
          </p>
          <a
            href="#apartamenty"
            className="glass-button glass-button-hero mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium"
          >
            Poznaj nasze apartamenty
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <a
          href="#wprowadzenie"
          aria-label="Przewiń w dół"
          className="glass-button absolute bottom-8 left-1/2 z-20 inline-flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-primary shadow-lg transition-transform hover:-translate-x-1/2 hover:translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/80"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </section>

      <section id="wprowadzenie" className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="mb-6 text-sm uppercase tracking-[0.25em] text-accent">Witamy</p>
        <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
          Wasza obecność w apartamentach Forest Hill to wyraz ogromnego zaufania
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Dołożyliśmy wszelkich starań, by nasze apartamenty stały się dla Was wygodną bazą do
            odkrywania uroków Karkonoszy, Gór Izerskich oraz spacerów po nadbałtyckiej plaży.
          </p>
          <p>
            Życzymy, by każdy nasz Gość wrócił do domu z bagażem pełnym wspomnień. Najpiękniejszym
            komplementem dla nas będzie poczucie, że czas spędzony u nas przyniósł Wam upragniony
            odpoczynek.
          </p>
        </div>
      </section>

      <section className="bg-background px-6 pb-20 md:pb-28">
        <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-2xl bg-card p-5 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-8">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/assets/kropka-cookie-przewodniczki.jpeg"
              alt="Kropka i Coockie na kanapie"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="px-1 py-2 text-center md:px-4 md:text-left">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Nasi mali gospodarze</p>
            <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
              Kropka i Coockie
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75">
              Twoje przewodniczki po naszych apartamentach.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={GUIDES_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary"
              >
                <Youtube className="h-5 w-5" />
                Obejrzyj i subskrybuj
              </a>
              <a
                href={GUIDES_TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary"
              >
                <TikTokIcon className="h-5 w-5" />
                Obserwuj na TikToku
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/45 px-6 py-12 text-center text-primary md:py-14">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-3xl leading-tight md:text-5xl">
            Morze czy góry? Zapraszamy i tu i tu - nie musisz wybierać!
          </p>
          <a
            href="#apartamenty"
            aria-label="Przewiń do apartamentów"
            className="glass-button mx-auto mt-5 inline-flex h-12 w-12 items-center justify-center rounded-full text-primary shadow-lg transition-transform hover:translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </section>

      <section id="apartamenty" className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-4xl rounded-2xl bg-card/80 p-6 text-center shadow-sm md:p-8">
            <h3 className="font-serif text-2xl text-primary md:text-3xl">
              Poznaj nasze apartamenty i rezerwuj pobyt
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
              Wybierz lokalizację, sprawdź szczegóły i przejdź bezpośrednio do rezerwacji u operatora.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href={SOSNOWKA_RESERVATION_SECTION}
                className="glass-button rounded-full px-6 py-3 text-sm font-medium text-primary"
              >
                Rezerwuj pobyt w Sosnówce
              </Link>
              <span className="rounded-full border border-primary/15 px-6 py-3 text-sm font-medium text-primary/55">
                Świeradów-Zdrój wkrótce
              </span>
              <span className="rounded-full border border-primary/15 px-6 py-3 text-sm font-medium text-primary/55">
                Mrzeżyno wkrótce
              </span>
            </div>
          </div>

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Nasze lokalizacje</p>
            <h2 className="font-serif text-3xl text-primary md:text-5xl">
              Trzy miejsca, jedna obietnica
            </h2>
            <p className="mt-5 text-foreground/70">
              Zapraszamy do zapoznania się z ofertą naszych luksusowych apartamentów w Karkonoszach,
              Górach Izerskich oraz nad Bałtykiem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {locations.map((loc) => (
              <article
                key={loc.href}
                className="interactive-card group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={`Forest Hill ${loc.name}`}
                    className="interactive-card-media h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                  {loc.soon ? (
                    <span className="absolute right-4 top-4 rounded-full bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-lg shadow-black/15">
                      Już wkrótce
                    </span>
                  ) : null}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <p className="mb-1 text-xs uppercase tracking-[0.2em] opacity-80">{loc.region}</p>
                    <h3 className="font-serif text-3xl">Forest Hill {loc.name}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-foreground/75">{loc.description}</p>
                  <div className="mt-auto flex flex-wrap items-end justify-end gap-3 pt-6">
                    <Link
                      href={loc.href}
                      className="inline-flex items-center gap-2 rounded-full px-1 py-2.5 text-right text-sm font-medium text-primary"
                    >
                      Zobacz apartament
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.2 5.2a5.1 5.1 0 0 0 3.2 1.2v3.4a8.3 8.3 0 0 1-3.7-.9v5.9a5.8 5.8 0 1 1-5.8-5.8c.4 0 .8 0 1.2.1v3.5a2.4 2.4 0 1 0 1.2 2.1V2.8h3.4c.1 1 .3 1.8.5 2.4Z" />
    </svg>
  );
}
