import "server-only";

import { createClient, type ClientConfig } from "next-sanity";
import { draftMode } from "next/headers";

import { apiVersion, dataset, projectId } from "../../sanity/env";

const EDGE_RUNTIME = process.env.NEXT_RUNTIME === "edge";

const defaultReadToken = EDGE_RUNTIME ? process.env.SANITY_READ_TOKEN : undefined;
const previewToken = process.env.SANITY_PREVIEW_TOKEN;

const shouldUseCdn = process.env.NODE_ENV === "production" && !previewToken;

const baseConfig: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: shouldUseCdn,
};

export const getSanityClient = (token?: string) =>
  createClient({
    ...baseConfig,
    token,
    useCdn: !token && baseConfig.useCdn,
    perspective: token ? "previewDrafts" : "published",
  });

type SanityFetchOptions = {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number | false;
  tags?: string[];
  token?: string;
  perspective?: "published" | "previewDrafts";
};

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags,
  token,
  perspective,
}: SanityFetchOptions): Promise<T> {
  const { isEnabled } = draftMode();
  const effectiveToken = token ?? (isEnabled ? previewToken : defaultReadToken);
  const client = getSanityClient(effectiveToken);

  return client.fetch<T>(query, params, {
    perspective: perspective ?? (effectiveToken ? "previewDrafts" : "published"),
    next: {
      revalidate,
      tags,
    },
  });
}

export const sanityPreviewToken = previewToken;
export const sanityReadToken = defaultReadToken;
