import type { Metadata } from "next";
import { ImageLightboxGallery } from "@/components/next/ImageLightboxGallery";
import { Bath, Facebook, Instagram, MapPin, Sun, TreePine, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Forest Hill Mrzeżyno — apartament nad Bałtykiem",
  description:
    "Wkrótce całoroczny luksusowy apartament w Resorcie Hevenia, tuż przy plaży. Basen, sauny, jacuzzi i taras na dachu z widokiem na morze.",
};

const features = [
  { icon: Bath, title: "Apartament premium", text: "Oddzielna sypialnia, w pełni wyposażony aneks kuchenny i przestronny taras." },
  { icon: Waves, title: "Baseny i sauny", text: "Dostęp do basenu zewnętrznego, wewnętrznego, strefy saun i jacuzzi." },
  { icon: Sun, title: "Taras na dachu", text: "Leżaki i widok na morze. Twoja prywatna przestrzeń na słońce." },
  { icon: TreePine, title: "Cisza i natura", text: "Szeroka plaża tuż obok, pachnący las i kojący szum fal." },
];

const galleryImages = [
  {
    src: "/assets/mrzezyno/gallery/mrzezyno-strefa-basenowa-hevenia.webp",
    alt: "Strefa basenowa i wellness w Resorcie Hevenia",
  },
  {
    src: "/assets/mrzezyno/gallery/mrzezyno-resort-hevenia.webp",
    alt: "Budynek Resortu Hevenia w Mrzeżynie",
  },
  {
    src: "/assets/mrzezyno/gallery/mrzezyno-apartamenty-wsrod-sosen.webp",
    alt: "Apartamenty Hevenia pośród nadmorskich sosen",
  },
];

export default function MrzezynoPage() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src="/assets/hero-mrzezyno.jpg" alt="Plaża w Mrzeżynie o zachodzie słońca" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] opacity-90">Bałtyk</p>
          <h1 className="font-serif text-4xl md:text-6xl">Forest Hill Mrzeżyno</h1>
          <p className="mt-4 flex items-center gap-2 text-base opacity-90 md:text-lg">
            <MapPin className="h-4 w-4" /> Resort Hevenia, tuż przy plaży
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <span className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-accent">
          Już wkrótce
        </span>
        <h2 className="font-serif text-3xl leading-tight text-primary md:text-5xl">
          Nad samym Bałtykiem, z dala od tłumów
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>Już wkrótce zapraszamy do naszego nowego apartamentu w Mrzeżynie, nad samym Bałtykiem.</p>
          <p>
            Nasz apartament znajduje się w Resorcie Hevenia, tuż przy plaży, w spokojnej okolicy
            Mrzeżyna. To dynamicznie rozwijająca się nadmorska miejscowość, z dala od tłumów i
            hałasu dużych miast.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Przygotowujemy dla Was</p>
            <h2 className="font-serif text-3xl text-primary md:text-4xl">Co znajdziesz w Mrzeżynie</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="interactive-card h-full rounded-2xl bg-card p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif mb-2 text-xl text-primary">{f.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/75">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-accent">Galeria</p>
          <h2 className="font-serif text-3xl text-primary md:text-5xl">Mrzeżyno w kadrach</h2>
          <p className="mt-5 text-foreground/70">
            Zobacz Resort Hevenia, strefę wellness oraz otoczenie apartamentów pośród nadmorskich sosen.
          </p>
        </div>

        <ImageLightboxGallery images={galleryImages} />
      </section>

      <section className="border-t border-primary/10 bg-secondary/35 py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-serif mb-4 text-3xl text-primary md:text-4xl">
            Śledź nas i obserwuj postępy prac wykończeniowych
          </h2>
          <p className="mb-8 text-foreground/75">Dołącz do naszej społeczności na Facebooku i Instagramie.</p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/share/1B31HGFq6V/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="glass-button glass-button-dark inline-flex items-center gap-2 rounded-full px-6 py-3">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <a href="https://www.instagram.com/forest.hill.apartamenty?igsh=dzI5NHIyZTkycGh2&utm_source=qr" target="_blank" rel="noopener noreferrer" className="glass-button glass-button-dark inline-flex items-center gap-2 rounded-full px-6 py-3">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
