import "server-only";

import { sanityFetch } from "@/lib/sanity";
import type { BlogPost, RotatingBlogSection } from "@/types/blog";

const DEFAULT_REVALIDATE_SECONDS = 300;

const BLOG_POST_FIELDS = `{
  "id": _id,
  "slug": slug.current,
  title,
  description,
  content,
  category,
  readTime,
  image,
  publishedAt,
}`;

const ALL_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) ${BLOG_POST_FIELDS}`;
const POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] ${BLOG_POST_FIELDS}`;
const ALL_SLUGS_QUERY = `*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current }`;

const BLOG_SECTIONS_QUERY = `*[_type == "blogSection"] | order(coalesce(order, 1e6) asc, _createdAt asc) {
  "id": coalesce(identifier, _id),
  title,
  subtitle,
  posts[]->${BLOG_POST_FIELDS}
}`;

type SlugResult = Array<{ slug: string | null }>; 

type BlogSectionResult = Array<{
  id: string;
  title: string;
  subtitle: string;
  posts: BlogPost[];
}>;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return sanityFetch<BlogPost[]>({
    query: ALL_POSTS_QUERY,
    revalidate: DEFAULT_REVALIDATE_SECONDS,
    tags: ["sanity.blog.posts"],
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return sanityFetch<BlogPost | null>({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
    revalidate: DEFAULT_REVALIDATE_SECONDS,
    tags: ["sanity.blog.posts", `sanity.blog.post.${slug}`],
  });
}

export async function getAllBlogPostSlugs(): Promise<string[]> {
  const slugs = await sanityFetch<SlugResult>({
    query: ALL_SLUGS_QUERY,
    revalidate: DEFAULT_REVALIDATE_SECONDS,
    tags: ["sanity.blog.posts"],
  });

  return slugs
    .map((item) => item.slug)
    .filter((slug): slug is string => Boolean(slug));
}

export async function getRotatingBlogSections(): Promise<RotatingBlogSection[]> {
  const sections = await sanityFetch<BlogSectionResult>({
    query: BLOG_SECTIONS_QUERY,
    revalidate: DEFAULT_REVALIDATE_SECONDS,
    tags: ["sanity.blog.sections"],
  });

  return sections.map((section) => ({
    ...section,
    posts: section.posts.filter((post) => Boolean(post?.slug)),
  }));
}
