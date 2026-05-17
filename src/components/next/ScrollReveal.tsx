"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = [
  ".page-content > section",
  ".page-content > article",
  ".page-content h1",
  ".page-content h2",
  ".page-content h3",
  ".page-content p",
  ".page-content li",
  ".page-content dl",
  ".page-content dt",
  ".page-content dd",
  ".page-content img",
  ".page-content a",
  ".page-content button",
  ".page-content .bg-card",
  ".page-content .grid > *",
  "footer img",
  "footer h3",
  "footer h4",
  "footer p",
  "footer a",
  "footer nav",
  ".scroll-reveal",
].join(", ");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
      (element) =>
        !element.closest("[data-no-scroll-reveal]") &&
        !element.classList.contains("scroll-reveal-skip"),
    );

    elements.forEach((element) => {
      element.classList.add("scroll-reveal-item");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "-8% 0px -12% 0px",
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal-item", "is-visible");
      });
    };
  }, [pathname]);

  return null;
}
