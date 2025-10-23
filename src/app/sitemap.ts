import type { MetadataRoute } from "next";

import { getAllBlogPosts } from "@/data/blog";
import { getComputerhulpCityRoutes } from "@/data/service-areas";

const baseUrl = "https://www.instantit.nl";
const defaultLastModified = new Date();

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: Date | string;
};

const staticRouteConfigs: RouteConfig[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/computerhulp", priority: 0.9 },
  { path: "/computerhulp-aan-huis", priority: 0.9 },
  { path: "/computerhulp-op-afstand", priority: 0.8 },
  { path: "/hulp-op-afstand", priority: 0.7 },
  { path: "/ik-ben-gehackt", priority: 0.85, changeFrequency: "daily" },
  { path: "/cyber-apk", priority: 0.75 },
  { path: "/diensten", priority: 0.7 },
  { path: "/tarieven", priority: 0.8, changeFrequency: "monthly" },
  { path: "/zakelijk", priority: 0.7 },
  { path: "/werkgebied", priority: 0.6 },
  { path: "/afspraak-maken", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/over-ons", priority: 0.6 },
  { path: "/reviews", priority: 0.6 },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.5 },
  { path: "/algemene-voorwaarden", priority: 0.4, changeFrequency: "yearly" },
  { path: "/privacyverklaring", priority: 0.4, changeFrequency: "yearly" },
  { path: "/email", priority: 0.55 },
  { path: "/email-gehackt", priority: 0.65 },
  { path: "/instagram-gehackt", priority: 0.6 },
  { path: "/whatsapp-fraude", priority: 0.6 },
  { path: "/phishing-hulp", priority: 0.6 },
  { path: "/ransomware-hulp", priority: 0.65 },
  { path: "/helpdesk-fraude", priority: 0.55 },
  { path: "/mobiel-tablet", priority: 0.5 },
  { path: "/mac-support", priority: 0.5 },
  { path: "/windows-support", priority: 0.5 },
  { path: "/antivirus-setup", priority: 0.5 },
  { path: "/printer", priority: 0.5 },
  { path: "/wifi", priority: 0.6 },
  { path: "/uitleg-les", priority: 0.5 },
  { path: "/expat", priority: 0.55 },
];

const toDate = (value?: string | Date): Date | undefined => {
  if (!value) {
    return undefined;
  }

  const parsed = value instanceof Date ? value : new Date(value);

  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts();
  const blogDates = blogPosts
    .map((post) => toDate(post.publishedAt))
    .filter((date): date is Date => Boolean(date));

  const latestBlogUpdate = blogDates.length
    ? new Date(Math.max(...blogDates.map((date) => date.getTime())))
    : defaultLastModified;

  const blogRoutes: RouteConfig[] = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: toDate(post.publishedAt) ?? latestBlogUpdate,
  }));

  const cityRoutes: RouteConfig[] = getComputerhulpCityRoutes().map((city) => ({
    path: city.path,
    priority: city.priority,
    changeFrequency: "weekly",
    lastModified: toDate(city.lastModified),
  }));

  const augmentedStaticRoutes = staticRouteConfigs.map((route) =>
    route.path === "/blog"
      ? { ...route, lastModified: latestBlogUpdate }
      : route
  );

  return [...augmentedStaticRoutes, ...cityRoutes, ...blogRoutes].map(
    ({ path, priority, changeFrequency, lastModified }) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: changeFrequency ?? "weekly",
      priority,
      lastModified: toDate(lastModified) ?? defaultLastModified,
    })
  );
}
