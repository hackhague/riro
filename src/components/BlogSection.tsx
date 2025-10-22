'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getRotatingBlogSections } from '@/data/blog';
import { useIsMobile } from '@/hooks/use-mobile';

export function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const sections = getRotatingBlogSections() || [];
  const isMobile = useIsMobile();

  // Desktop: rotate sections every 10 seconds
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [sections.length, isMobile]);

  // Mobile: rotate posts within a section every 15 seconds
  useEffect(() => {
    if (!isMobile || sections.length === 0) return;

    const currentSection = sections[currentIndex];
    if (!currentSection || currentSection.posts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentPostIndex((prev) => (prev + 1) % currentSection.posts.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [isMobile, currentIndex, sections]);

  const handlePrevious = () => {
    if (isMobile) {
      const currentSection = sections[currentIndex];
      setCurrentPostIndex((prev) => (prev - 1 + currentSection.posts.length) % currentSection.posts.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
    }
  };

  const handleNext = () => {
    if (isMobile) {
      const currentSection = sections[currentIndex];
      setCurrentPostIndex((prev) => (prev + 1) % currentSection.posts.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }
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

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
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

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          {/* Section Indicators */}
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
