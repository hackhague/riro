import { Card, CardContent } from "@/components/ui/card";
import { getReviewsByService } from "@/data/reviews";

interface ReviewSectionProps {
  servicePath?: string;
  title?: string;
  showLink?: boolean;
}

export function ReviewSection({
  servicePath,
  title = "Wat klanten zeggen",
  showLink = false,
}: ReviewSectionProps) {
  const reviews = servicePath ? getReviewsByService(servicePath) : [];

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-10">
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-accent uppercase">
                    Probleem
                  </span>
                  <p className="text-foreground/80 mt-1">{review.problem}</p>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary uppercase">
                    Oplossing
                  </span>
                  <p className="text-foreground/80 mt-1">{review.solution}</p>
                </div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-foreground uppercase">
                    Resultaat
                  </span>
                  <p className="font-semibold mt-1">"{review.result}"</p>
                </div>
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <div>
                    <div className="font-medium text-foreground">
                      {review.author}
                    </div>
                    <div className="text-xs">
                      {review.company ? (
                        <>
                          {review.company}
                          <br />
                          {review.location}
                        </>
                      ) : (
                        review.location
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showLink && (
          <div className="text-center">
            <a
              href="/reviews"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Bekijk alle reviews
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
