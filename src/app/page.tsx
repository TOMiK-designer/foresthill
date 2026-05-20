import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";

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

      <section className="bg-secondary/45 px-6 py-16 text-center text-primary md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-3xl leading-tight md:text-5xl">
            Morze czy góry? Zapraszamy i tu i tu - nie musisz wybierać!
          </p>
          <a
            href="#apartamenty"
            className="glass-button mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-primary"
          >
            Poznaj nasze apartamenty
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="apartamenty" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
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
              <Link
                key={loc.href}
                href={loc.href}
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
                  <span className="ml-auto mt-auto inline-flex items-center gap-2 pt-5 text-right text-sm font-medium text-primary">
                    Zobacz apartament
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
