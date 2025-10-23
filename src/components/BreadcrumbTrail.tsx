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

const DEFAULT_BASE_URL = "https://www.instantit.nl";

type BreadcrumbEntry = {
  label: string;
  href: string;
  canonicalUrl?: string;
};

type BreadcrumbTrailProps = {
  items: BreadcrumbEntry[];
  className?: string;
  baseUrl?: string;
};

function toAbsoluteUrl(href: string, baseUrl: string) {
  try {
    return new URL(href, baseUrl).toString();
  } catch (error) {
    return href;
  }
}

export function BreadcrumbTrail({
  items,
  className,
  baseUrl = DEFAULT_BASE_URL,
}: BreadcrumbTrailProps) {
  if (!items.length) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.canonicalUrl ?? toAbsoluteUrl(item.href, baseUrl),
    })),
  };

  return (
    <div className={cn("bg-background/80 py-3", className)}>
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <Fragment key={`${item.href}-${item.label}-${index}`}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
