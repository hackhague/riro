import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPostSlugs, getAllBlogPosts } from "@/data/blog";
import { BreadcrumbTrail } from "@/components/BreadcrumbTrail";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const slugs = await getAllBlogPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

type BlogPageParams = Promise<{ slug: string }>;

type BlogPageProps = {
  params: BlogPageParams;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel niet gevonden | InstantIT Blog",
    };
  }

  return {
    title: `${post.title} | InstantIT Blog`,
    description: post.description,
    keywords: [post.title, post.category, "InstantIT", "blog"],
    alternates: {
      canonical: `https://www.instantit.nl/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);
  const relatedPosts = allPosts.filter((_, index) => index !== currentIndex).slice(0, 3);
  const breadcrumbItems = [
    { label: "Home", href: "https://www.instantit.nl/" },
    { label: "Blog", href: "https://www.instantit.nl/blog" },
    { label: post.title, href: `https://www.instantit.nl/blog/${post.slug}` },
  ];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Terug naar blog
        </Link>
      </div>

      {/* Article Hero */}
      <section className="container mx-auto px-4 mb-12">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-8 border border-border">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4 text-sm">
              <span className="font-semibold text-primary uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-foreground/60">•</span>
              <span className="text-foreground/60">{post.readTime}</span>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-foreground/70">
              {post.description}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-muted/40 border-b border-border/60">
        <div className="container mx-auto px-4">
          <BreadcrumbTrail items={breadcrumbItems} />
        </div>
      </div>

      {/* Article Content */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed whitespace-pre-line mb-8">
              {post.content}
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-lg border border-primary/10 p-8 my-12">
            <h3 className="font-heading font-bold text-2xl mb-2">
              Heb je professionele hulp nodig?
            </h3>
            <p className="text-foreground/70 mb-6">
              Ons team staat altijd klaar voor snelle ondersteuning met je computerprobleem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href="tel:+31853696124">
                  <Phone className="mr-2 h-4 w-4" />
                  Bel nu: 085 369 6124
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://wa.me/31853696124" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp ons
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-8">Meer artikelen</h2>

            <div className="grid md:grid-cols-3 gap-5">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="border border-border hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden h-full cursor-pointer">
                    <div className="relative h-32 w-full bg-secondary overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <CardContent className="p-4 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-2 text-xs">
                        <span className="font-semibold text-primary uppercase tracking-wide">
                          {relatedPost.category}
                        </span>
                        <span className="text-foreground/60 text-xs">{relatedPost.readTime}</span>
                      </div>

                      <h3 className="font-heading font-semibold text-sm line-clamp-2 text-foreground">
                        {relatedPost.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
