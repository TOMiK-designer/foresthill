import type { Metadata } from "next";
import { ArrowRight, BriefcaseBusiness, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt — Forest Hill Apartamenty",
  description:
    "Kontakt w sprawie współpracy z Forest Hill Apartamenty oraz informacje, gdzie kierować pytania dotyczące rezerwacji i pobytu.",
};

const locations = [
  {
    href: "/sosnowka#rezerwacje",
    label: "Forest Hill Sosnówka",
    note: "Rezerwacje i sprawy związane z pobytem",
  },
  {
    href: "/swieradow",
    label: "Forest Hill Świeradów-Zdrój",
    note: "Informacje o operatorze pojawią się na podstronie lokalizacji",
  },
  {
    href: "/mrzezyno",
    label: "Forest Hill Mrzeżyno",
    note: "Informacje o operatorze pojawią się na podstronie lokalizacji",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-36 text-center md:pb-20 md:pt-44">
        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-accent">Kontakt</p>
        <h1 className="font-serif text-4xl leading-tight text-primary md:text-6xl">
          Napisz w odpowiednie miejsce
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/75">
          Sprawy rezerwacji, pobytu i obsługi gości prowadzone są przez operatorów przypisanych
          do poszczególnych apartamentów. Kontakt do nich znajdziesz na podstronach lokalizacji.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-[1fr_0.9fr] md:pb-28">
        <div className="rounded-3xl bg-card p-8 shadow-sm md:p-10">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MapPin className="h-5 w-5" />
          </div>
          <h2 className="font-serif text-3xl text-primary md:text-4xl">Rezerwacje i pobyt</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-foreground/75">
            W przypadku pytań o termin, płatność, zameldowanie, wyjazd lub szczegóły pobytu
            wybierz konkretną lokalizację. Tam znajdziesz aktualne informacje i linki do operatora.
          </p>

          <div className="mt-8 grid gap-3">
            {locations.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="interactive-card group rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/30"
              >
                <span className="flex items-center justify-between gap-4">
                  <span>
                    <span className="block font-medium text-primary">{location.label}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-foreground/65">
                      {location.note}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-sm md:p-10">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl">Współpraca</h2>
          <p className="mt-4 leading-relaxed opacity-85">
            Jeśli chcesz porozmawiać o współpracy, ofercie biznesowej, mediach lub sprawach
            organizacyjnych niezwiązanych bezpośrednio z rezerwacją pobytu, napisz do nas.
          </p>
          <a
            href="mailto:foresthillapartamenty@gmail.com"
            className="glass-button mt-8 inline-flex items-center gap-3 rounded-full px-6 py-4 font-medium text-primary"
          >
            <Mail className="h-5 w-5" />
            foresthillapartamenty@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}
