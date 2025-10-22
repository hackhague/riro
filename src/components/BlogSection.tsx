'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getRotatingBlogSections } from '@/data/blog';

export function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = getRotatingBlogSections();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [sections.length]);

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
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-2">
            {currentSection.title}
          </h2>
          <p className="text-foreground/70 text-base md:text-lg max-w-3xl">
            {currentSection.subtitle}
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {currentSection.posts.map((post) => (
            <Card
              key={post.id}
              className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/60">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold text-lg mb-3 line-clamp-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-6 line-clamp-2 flex-grow">
                  {post.description}
                </p>

                {/* Link */}
                <Link
                  href={post.link}
                  className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  Lees verder
                  <span className="ml-2">→</span>
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
              className="p-2 rounded-lg border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/5 transition-colors"
              aria-label="Previous section"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border-2 border-primary/30 text-primary hover:border-primary hover:bg-primary/5 transition-colors"
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
