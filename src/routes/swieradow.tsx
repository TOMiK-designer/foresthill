import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import hero from "@/assets/hero-swieradow.jpg";
import logo from "@/assets/logo-swieradow.jpg";
import { Instagram, Facebook, MapPin, Mountain, Bike, Snowflake } from "lucide-react";

export const Route = createFileRoute("/swieradow")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Forest Hill Świeradów Zdrój — apartament w Górach Izerskich" },
      {
        name: "description",
        content:
          "Wkrótce: luksusowy apartament w Izerskim Resorcie tuż obok wieży Sky Walk. Sauna, narciarnia, rowerownia.",
      },
    ],
  }),
});

const highlights = [
  { icon: Mountain, title: "Sky Walk Świeradów", text: "Apartament tuż obok słynnej wieży widokowej." },
  { icon: Snowflake, title: "Raj dla narciarzy", text: "Świeradów Zdrój zimą — stoki w zasięgu ręki." },
  { icon: Bike, title: "Latem na rowerze", text: "Dziesiątki tras Singletrack Glacensis i Gór Izerskich." },
];

function Page() {
  return (
    <Layout>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={hero} alt="Świeradów Zdrój i wieża Sky Walk" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 mx-auto max-w-5xl h-full px-6 flex flex-col items-center justify-center text-center text-primary-foreground">
          <img src={logo} alt="Forest Hill Świeradów Zdrój" className="h-24 md:h-28 w-auto rounded-md shadow-xl mb-6" />
          <p className="text-sm uppercase tracking-[0.3em] mb-3 opacity-90">Góry Izerskie</p>
          <h1 className="font-serif text-4xl md:text-6xl">Forest Hill Świeradów Zdrój</h1>
          <p className="mt-4 flex items-center gap-2 text-base md:text-lg opacity-90">
            <MapPin className="h-4 w-4" /> Izerski Resort, obok wieży Sky Walk
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] bg-accent/10 text-accent px-4 py-1.5 rounded-full mb-6">
          Już wkrótce
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
          Miasto uzdrowiskowe i brama Gór Izerskich
        </h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Świeradów Zdrój to nie tylko miasto uzdrowiskowe, ale też punkt wyjścia na liczne szlaki
            Gór Izerskich, popularna wieża Sky Walk oraz raj dla narciarzy zimą i rowerzystów latem.
          </p>
          <p>
            Już wkrótce zapraszamy do naszego apartamentu w Izerskim Resorcie, tuż obok wieży Sky Walk.
            Goście naszego apartamentu będą mieli dostęp do sauny, narciarni i rowerowni
            oraz podziemnego miejsca postojowego.
          </p>
          <p className="font-serif italic text-primary">Aktualnie szykujemy go dla Was.</p>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card p-8 rounded-2xl">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">{h.title}</h3>
              <p className="text-sm text-foreground/75 leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
          Śledź nas i obserwuj postęp prac wykończeniowych
        </h2>
        <p className="text-foreground/75 mb-8">
          Bądź pierwszym, który zobaczy gotowy apartament i odbierze najlepsze terminy.
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
