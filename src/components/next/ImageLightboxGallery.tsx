"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageLightboxGalleryProps = {
  images: GalleryImage[];
};

export function ImageLightboxGallery({ images }: ImageLightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % images.length));
  };

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <div className="grid auto-rows-[10.5rem] grid-flow-dense gap-3 sm:auto-rows-[12rem] md:grid-cols-3 md:auto-rows-[13.5rem] md:gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Powiększ zdjęcie: ${image.alt}`}
            onClick={() => setActiveIndex(index)}
            className={`group relative h-full w-full overflow-hidden rounded-xl bg-muted text-left shadow-sm outline-none ring-primary/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 md:rounded-2xl ${
              index % 10 === 0 || index % 10 === 6 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={index % 10 === 0 || index % 10 === 6 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <Expand className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Zamknij podgląd"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Poprzednie zdjęcie"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <figure className="relative h-[82vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
            <figcaption className="absolute bottom-0 left-1/2 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 rounded-full bg-black/45 px-5 py-3 text-center text-sm text-white backdrop-blur">
              {activeImage.alt}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Następne zdjęcie"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      ) : null}
    </>
  );
}
