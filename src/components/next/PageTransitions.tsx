"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const EXIT_DURATION = 220;

export function PageTransitions() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.classList.remove("page-is-leaving");
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");
      if (!href || target || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) {
        return;
      }

      event.preventDefault();
      document.body.classList.add("page-is-leaving");

      window.setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, EXIT_DURATION);
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("pageshow", () => document.body.classList.remove("page-is-leaving"));

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  return null;
}
