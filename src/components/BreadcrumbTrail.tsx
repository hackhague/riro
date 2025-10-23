import Link from "next/link";
import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

const SITE_URL = "https://www.instantit.nl";

interface BreadcrumbEntry {
  label: string;
  href: string;
}

interface NormalizedBreadcrumbEntry extends BreadcrumbEntry {
  canonicalUrl: string;
  relativeHref: string;
}

export interface BreadcrumbTrailProps {
  items: BreadcrumbEntry[];
  className?: string;
}

const ensureAbsoluteUrl = (href: string): string => {
  if (!href) {
    return SITE_URL;
  }

  try {
    const url = new URL(href, SITE_URL);
    if (!url.origin || url.origin === "null") {
      return `${SITE_URL}${url.pathname}`;
    }

    return url.toString().replace(/\/$/, (match) => (url.pathname === "/" ? match : ""));
  } catch {
    const normalized = href.startsWith("/") ? href : `/${href}`;
    return `${SITE_URL}${normalized}`;
  }
};

const toRelativeHref = (href: string): string => {
  try {
    const url = new URL(href, SITE_URL);
    const path = url.pathname || "/";
    const search = url.search ?? "";
    const hash = url.hash ?? "";
    const relative = `${path}${search}${hash}`;
    return relative || "/";
  } catch {
    if (!href) {
      return "/";
    }

    if (href.startsWith("http")) {
      try {
        const url = new URL(href);
        return url.pathname || "/";
      } catch {
        return "/";
      }
    }

    return href.startsWith("/") ? href : `/${href}`;
  }
};

const normalizeItems = (items: BreadcrumbEntry[]): NormalizedBreadcrumbEntry[] =>
  items.map((item) => {
    const canonicalUrl = ensureAbsoluteUrl(item.href);

    return {
      ...item,
      canonicalUrl,
      relativeHref: toRelativeHref(canonicalUrl),
    };
  });

export const BreadcrumbTrail = ({ items, className }: BreadcrumbTrailProps) => {
  if (!items?.length) {
    return null;
  }

  const normalizedItems = normalizeItems(items);
  const lastIndex = normalizedItems.length - 1;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: normalizedItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.canonicalUrl,
    })),
  };

  return (
    <div className={cn("py-3 text-sm text-muted-foreground", className)}>
      <Breadcrumb>
        <BreadcrumbList>
          {normalizedItems.map((item, index) => (
            <Fragment key={`${item.canonicalUrl}-${item.label}`}> 
              <BreadcrumbItem>
                {index === lastIndex ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.relativeHref}>{item.label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < lastIndex && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};
