'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import type { RotatingBlogSection } from '@/types/blog';

type BlogSectionProps = {
  sections?: RotatingBlogSection[];
};

export function BlogSection({ sections: incomingSections = [] }: BlogSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = useMemo(() => incomingSections.filter((section) => section.posts.length > 0), [incomingSections]);
  const isMobile = useIsMobile();

  useEffect(() => {
    setCurrentIndex(0);
  }, [sections.length]);

  // Desktop: rotate sections every 10 seconds
  useEffect(() => {
    if (isMobile || sections.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [sections.length, isMobile]);

  // Mobile: rotate sections every 15 seconds
  useEffect(() => {
    if (!isMobile || sections.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isMobile, sections.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  if (sections.length === 0) {
    return null;
  }

  const currentSection = sections[currentIndex];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header - Centered */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
            {currentSection.title}
          </h2>
          <p className="text-foreground/70 text-base md:text-lg">
            {currentSection.subtitle}
          </p>
        </div>

        {/* Blog Cards Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 mb-10">
          {currentSection.posts.map((post) => (
            <Card
              key={post.id}
              className="border border-border hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-36 w-full bg-secondary overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4 flex flex-col flex-grow">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="font-semibold text-primary uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-foreground/60">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-base mb-2 line-clamp-2 text-foreground">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-xs mb-4 line-clamp-2 flex-grow">
                  {post.description}
                </p>

                {/* Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  Lees verder
                  <span className="ml-1">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Card Carousel - Mobile */}
        {isMobile && currentSection.posts.length > 0 && (
          <div className="md:hidden mb-10">
            <div className="relative">
              <Card className="border border-border hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                {/* Image Container */}
                <div className="relative h-48 w-full bg-secondary overflow-hidden">
                  <Image
                    src={currentSection.posts[0].image}
                    alt={currentSection.posts[0].title}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-4 flex flex-col flex-grow">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-2 text-xs">
                    <span className="font-semibold text-primary uppercase tracking-wide">
                      {currentSection.posts[0].category}
                    </span>
                    <span className="text-foreground/60">{currentSection.posts[0].readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-semibold text-base mb-2 line-clamp-2 text-foreground">
                    {currentSection.posts[0].title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 text-xs mb-4 line-clamp-2 flex-grow">
                    {currentSection.posts[0].description}
                  </p>

                  {/* Link */}
                  <Link
                    href={`/blog/${currentSection.posts[0].slug}`}
                    className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Lees verder
                    <span className="ml-1">→</span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          {/* Section Indicators - Both Mobile and Desktop */}
          <div className="flex items-center gap-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50 w-2'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-lg border border-primary/30 text-primary hover:border-primary hover:bg-primary/5 transition-colors"
              aria-label="Previous section"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-primary/30 text-primary hover:border-primary hover:bg-primary/5 transition-colors"
              aria-label="Next section"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
