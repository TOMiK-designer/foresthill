import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import hero from "@/assets/hero-mrzezyno.jpg";

import { Instagram, Facebook, MapPin, Waves, Sun, TreePine, Bath } from "lucide-react";

export const Route = createFileRoute("/mrzezyno")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Forest Hill Mrzeżyno — apartament nad Bałtykiem" },
      {
        name: "description",
        content:
          "Wkrótce: całoroczny luksusowy apartament w Resorcie Hevenia, tuż przy plaży. Basen, sauny, jacuzzi i taras na dachu z widokiem na morze.",
      },
    ],
  }),
});

const features = [
  { icon: Bath, title: "Apartament premium", text: "Oddzielna sypialnia, w pełni wyposażony aneks kuchenny i przestronny taras." },
  { icon: Waves, title: "Baseny i sauny", text: "Dostęp do basenu zewnętrznego, wewnętrznego, strefy saun i jacuzzi." },
  { icon: Sun, title: "Taras na dachu", text: "Leżaki i widok na morze — Twoja prywatna przestrzeń na słońce." },
  { icon: TreePine, title: "Cisza i natura", text: "Szeroka plaża tuż obok, pachnący las i kojący szum fal." },
];

function Page() {
  return (
    <Layout>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={hero} alt="Plaża w Mrzeżynie o zachodzie słońca" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl h-full px-6 flex flex-col items-center justify-center text-center text-primary-foreground">
          
          <p className="text-sm uppercase tracking-[0.3em] mb-3 opacity-90">Bałtyk</p>
          <h1 className="font-serif text-4xl md:text-6xl">Forest Hill Mrzeżyno</h1>
          <p className="mt-4 flex items-center gap-2 text-base md:text-lg opacity-90">
            <MapPin className="h-4 w-4" /> Resort Hevenia, tuż przy plaży
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] bg-accent/10 text-accent px-4 py-1.5 rounded-full mb-6">
          Już wkrótce
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
          Nad samym Bałtykiem, z dala od tłumów
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Już wkrótce zapraszamy do naszego nowego apartamentu w Mrzeżynie, nad samym Bałtykiem.
          </p>
          <p>
            Nasz apartament znajduje się w Resorcie Hevenia, tuż przy plaży, w spokojnej okolicy
            Mrzeżyna — dynamicznie rozwijającej się nadmorskiej miejscowości, z dala od tłumów
            i hałasu dużych miast.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.25em] text-accent mb-4">Przygotowujemy dla Was</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Co znajdziesz w Mrzeżynie</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="bg-card p-7 rounded-2xl h-full">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
          Śledź nas i obserwuj postępy prac wykończeniowych
        </h2>
        <p className="text-foreground/75 mb-8">
          Dołącz do naszej społeczności na Facebooku i Instagramie.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.facebook.com/share/1B31HGFq6V/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            <Facebook className="h-4 w-4" /> Facebook
          </a>
          <a
            href="https://www.instagram.com/forest.hill.apartamenty?igsh=dzI5NHIyZTkycGh2&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </section>
    </Layout>
  );
}
