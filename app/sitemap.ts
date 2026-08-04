import type { MetadataRoute } from "next";

const base = "https://bright-spiral-literacy.jlaoverstreet.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/start-here",
    "/services",
    "/reading-instruction-blueprint",
    "/reading-turnaround",
    "/parent-reading-room",
    "/private-advisory",
    "/about",
    "/standard",
    "/resources",
    "/resources/what-makes-a-reader",
    "/resources/what-15-years-taught-me",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-08-04"),
    changeFrequency: route.startsWith("/resources") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.includes("reading-") ? 0.9 : 0.7,
  }));
}
