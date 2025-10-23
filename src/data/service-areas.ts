export interface ServiceAreaRoute {
  slug: string;
  path: string;
  priority: number;
  lastModified?: string;
}

const serviceAreaRoutes: ServiceAreaRoute[] = [
  { slug: "den-haag", path: "/computerhulp-den-haag", priority: 0.9, lastModified: "2024-10-10" },
  { slug: "delft", path: "/computerhulp-delft", priority: 0.85, lastModified: "2024-10-10" },
  { slug: "leiden", path: "/computerhulp-leiden", priority: 0.85, lastModified: "2024-10-10" },
  { slug: "rijswijk", path: "/computerhulp-rijswijk", priority: 0.8, lastModified: "2024-10-10" },
  { slug: "voorburg", path: "/computerhulp-voorburg", priority: 0.8, lastModified: "2024-10-10" },
  { slug: "zoetermeer", path: "/computerhulp-zoetermeer", priority: 0.8, lastModified: "2024-10-10" },
];

export function getComputerhulpCityRoutes(): ServiceAreaRoute[] {
  return serviceAreaRoutes;
}
