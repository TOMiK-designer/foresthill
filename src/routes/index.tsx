import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroMain from "@/assets/hero-main.jpg";
import heroSosnowka from "@/assets/hero-sosnowka.jpg";
import heroSwieradow from "@/assets/hero-swieradow.jpg";
import heroMrzezyno from "@/assets/hero-mrzezyno.jpg";
import logoMain from "@/assets/logo-main.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const locations = [
  {
    to: "/sosnowka" as const,
    name: "Sosnówka",
    region: "Karkonosze",
    image: heroSosnowka,
    description:
      "Kameralny apartament nad Zalewem Sosnówka, w prestiżowym kompleksie Lake Hill. Cisza, las i bliskość Karpacza.",
  },
  {
    to: "/swieradow" as const,
    name: "Świeradów Zdrój",
    region: "Góry Izerskie",
    image: heroSwieradow,
    description:
      "Wkrótce — apartament w Izerskim Resorcie, tuż obok wieży Sky Walk. Sauna, narciarnia, rowerownia.",
  },
  {
    to: "/mrzezyno" as const,
    name: "Mrzeżyno",
    region: "Bałtyk",
    image: heroMrzezyno,
    description:
      "Wkrótce — apartament w Resorcie Hevenia, kilka kroków od plaży. Baseny, sauny, taras na dachu.",
  },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroMain}
          alt="Karkonoski las o poranku"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-5xl h-full px-6 flex flex-col items-center justify-center text-center text-primary-foreground">
          <img
            src={logoMain}
            alt="Forest Hill Apartamenty"
            className="h-24 md:h-32 w-auto mb-8 rounded-md shadow-2xl"
          />
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl">
            Twój drugi dom na szlaku karkonoskich
            <span className="italic"> i nadmorskich</span> wspomnień
          </h1>
          <p className="mt-6 font-serif italic text-lg md:text-2xl opacity-90">
            Są miejsca, do których przyjeżdża się raz. Są takie, do których się wraca.
          </p>
          <a
            href="#apartamenty"
            className="mt-10 inline-flex items-center gap-2 bg-cream text-primary px-7 py-3.5 rounded-full font-medium hover:bg-white transition-colors"
          >
            Poznaj nasze apartamenty
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-accent mb-6">Witamy</p>
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
          Wasza obecność w apartamentach Forest Hill to wyraz ogromnego zaufania
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Dołożyliśmy wszelkich starań, by nasze apartamenty stały się dla Was wygodną bazą
            do odkrywania uroków Karkonoszy, Gór Izerskich oraz spacerów po nadbałtyckiej plaży.
          </p>
          <p>
            Życzymy, by każdy nasz Gość wrócił do domu z bagażem pełnym wspomnień.
            Najpiękniejszym komplementem dla nas będzie poczucie, że czas spędzony u nas
            przyniósł Wam upragniony odpoczynek.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section id="apartamenty" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Nasze lokalizacje</p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary">
              Trzy miejsca, jedna obietnica
            </h2>
            <p className="mt-5 text-foreground/70">
              Zapraszamy do zapoznania się z ofertą naszych luksusowych apartamentów
              w Karkonoszach, Górach Izerskich oraz nad Bałtykiem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.to}
                to={loc.to}
                className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={`Forest Hill ${loc.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">
                      {loc.region}
                    </p>
                    <h3 className="font-serif text-3xl">Forest Hill {loc.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-foreground/75 leading-relaxed text-sm">{loc.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-primary font-medium text-sm">
                    Zobacz apartament
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
