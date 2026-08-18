"use client"

import { StarRating } from "@/components/brand/star-rating"
import { PageIntro } from "@/components/brand/section-header"
import { Badge } from "@/components/ui/badge"
import { reviews, salon } from "@/lib/data"
import { formatRating, toFa } from "@/lib/format"

export function ReviewsView() {
  return (
    <div className="px-4 lg:px-0">
      <PageIntro
        title="نظرات مشتریان"
        description={`${formatRating(salon.rating)} از ۵ بر اساس ${toFa(salon.reviewCount)} نظر ثبت‌شده.`}
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-medium">{review.author}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{review.date}</p>
              </div>
              <Badge variant="secondary" className="rounded-full">
                {review.service}
              </Badge>
            </div>
            <StarRating value={review.rating} className="mt-3" />
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{review.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
