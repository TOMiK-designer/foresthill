"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageLightboxGalleryProps = {
  images: GalleryImage[];
};

export function ImageLightboxGallery({ images }: ImageLightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const hasManyImages = images.length > 1;

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length));
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % images.length));
  }, [images.length]);

  const handleTouchEnd = (touchEnd: number) => {
    if (touchStart === null || !hasManyImages) {
      return;
    }

    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    setTouchStart(null);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft" && hasManyImages) {
        showPrevious();
      }

      if (event.key === "ArrowRight" && hasManyImages) {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, hasManyImages, showNext, showPrevious]);

  const lightbox =
    activeImage && mounted ? (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={activeImage.alt}
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/[0.92] px-4 py-4 text-white backdrop-blur-sm sm:px-6 sm:py-6"
        onClick={closeLightbox}
      >
        <button
          type="button"
          aria-label="Zamknij podgląd"
          onClick={closeLightbox}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/14 text-white shadow-lg backdrop-blur transition hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <X className="h-5 w-5" />
        </button>

        {hasManyImages ? (
          <button
            type="button"
            aria-label="Poprzednie zdjęcie"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/14 text-white shadow-lg backdrop-blur transition hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:flex"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
        ) : null}

        <figure
          className="flex h-full max-h-[92vh] w-full max-w-6xl flex-col gap-4"
          onClick={(event) => event.stopPropagation()}
          onTouchStart={(event) => setTouchStart(event.changedTouches[0]?.clientX ?? null)}
          onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
        >
          <div className="flex min-h-0 flex-1 items-center justify-center">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            />
          </div>

          <figcaption className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-center text-sm text-white shadow-lg backdrop-blur md:flex-row md:justify-between md:text-left">
            <span>{activeImage.alt}</span>
            <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-white/70">
              {(activeIndex ?? 0) + 1} / {images.length}
            </span>
          </figcaption>

          {hasManyImages ? (
            <div className="flex justify-center gap-3 md:hidden">
              <button
                type="button"
                aria-label="Poprzednie zdjęcie"
                onClick={showPrevious}
                className="flex h-11 w-16 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur transition hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Następne zdjęcie"
                onClick={showNext}
                className="flex h-11 w-16 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur transition hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          ) : null}
        </figure>

        {hasManyImages ? (
          <button
            type="button"
            aria-label="Następne zdjęcie"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/14 text-white shadow-lg backdrop-blur transition hover:bg-white/24 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:flex"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        ) : null}
      </div>
    ) : null;

  return (
    <>
      <div className="grid auto-rows-[10.5rem] grid-flow-dense gap-3 sm:auto-rows-[12rem] md:grid-cols-3 md:auto-rows-[13.5rem] md:gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Powiększ zdjęcie: ${image.alt}`}
            onClick={() => setActiveIndex(index)}
            className={`interactive-card group relative h-full w-full overflow-hidden rounded-xl bg-muted text-left shadow-sm outline-none ring-primary/40 focus-visible:ring-2 md:rounded-2xl ${
              index % 10 === 0 || index % 10 === 6 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={index % 10 === 0 || index % 10 === 6 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
              className="interactive-card-media object-cover"
            />
            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <Expand className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {lightbox ? createPortal(lightbox, document.body) : null}
    </>
  );
}
