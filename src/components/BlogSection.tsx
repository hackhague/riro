'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogSections, type BlogSection as BlogSectionType } from '@/data/blog';

export function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sections = blogSections;

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
    <section className="py-12 md:py-16 overflow-hidden">
      <div className={`${currentSection.backgroundColor} ${currentSection.textColor} py-12 md:py-16 transition-colors duration-500`}>
        <div className="container mx-auto px-4">
          {/* Header with CTAs */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="font-heading font-bold text-2xl md:text-3xl mb-2">
                {currentSection.title}
              </h2>
              <p className="text-sm md:text-base opacity-90 max-w-2xl">
                {currentSection.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                asChild
                size="sm"
                className={`${
                  currentSection.backgroundColor === 'bg-blue-600'
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                <a
                  href="https://wa.me/31702119191"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="bg-transparent border-current text-current hover:bg-white/10"
              >
                <a href="tel:+31702119191">
                  <Phone className="h-4 w-4 mr-2" />
                  070 204 2880
                </a>
              </Button>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {currentSection.posts.map((post) => (
              <Card
                key={post.id}
                className="bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="relative h-40 md:h-48 overflow-hidden bg-white/5">
                    <div className="relative h-full w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold opacity-75 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs opacity-70">{post.readTime}</span>
                    </div>

                    <h3 className="font-heading font-semibold text-base md:text-lg mb-2 line-clamp-2 group-hover:text-opacity-90">
                      {post.title}
                    </h3>

                    <p className="text-sm opacity-80 mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    <Link
                      href={post.link}
                      className="text-sm font-semibold text-orange-300 hover:text-orange-200 underline transition-colors"
                    >
                      Lees verder
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation and Indicators */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60 w-2'
                  }`}
                  aria-label={`Go to section ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                aria-label="Previous section"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
                aria-label="Next section"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
