import type { MetadataRoute } from "next";

const SITE_URL = "https://foresthillapartamenty.pl";

const routes = [
  "",
  "/sosnowka",
  "/swieradow",
  "/mrzezyno",
  "/polityka-prywatnosci",
  "/polityka-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/polityka") ? 0.3 : 0.8,
  }));
}
