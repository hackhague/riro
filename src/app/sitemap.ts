import type { MetadataRoute } from "next";

const baseUrl = "https://www.instantit.nl";
const lastModified = new Date();

const staticRoutes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/computerhulp-aan-huis", priority: 0.9 },
  { path: "/computerhulp-den-haag", priority: 0.9 },
  { path: "/computerhulp-delft", priority: 0.8 },
  { path: "/computerhulp-zoetermeer", priority: 0.8 },
  { path: "/computerhulp-rijswijk", priority: 0.8 },
  { path: "/computerhulp-voorburg", priority: 0.8 },
  { path: "/computerhulp-leiden", priority: 0.8 },
  { path: "/ik-ben-gehackt", priority: 0.85 },
  { path: "/diensten", priority: 0.7 },
  { path: "/tarieven", priority: 0.7 },
  { path: "/werkgebied", priority: 0.6 },
  { path: "/zakelijk", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
