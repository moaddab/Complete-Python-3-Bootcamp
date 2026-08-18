"use client"

import { CoverImage } from "@/components/brand/cover-image"
import { PageIntro } from "@/components/brand/section-header"
import { Badge } from "@/components/ui/badge"
import { categories, portfolio } from "@/lib/data"

export function PortfolioView() {
  return (
    <div className="px-4 lg:px-0">
      <PageIntro
        title="نمونه کارها"
        description="گزیده‌ای از کارهای اخیر تیم لوکس بیوتی در بخش‌های مختلف سالن."
      />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {portfolio.map((item) => {
          const category = categories.find((entry) => entry.id === item.categoryId)
          return (
            <figure key={item.id} className="overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/8">
              <CoverImage
                src={item.image}
                alt={item.title}
                className="aspect-square"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <figcaption className="flex items-center justify-between gap-2 p-3">
                <span className="text-sm font-medium">{item.title}</span>
                {category ? (
                  <Badge variant="secondary" className="rounded-full">
                    {category.name}
                  </Badge>
                ) : null}
              </figcaption>
            </figure>
          )
        })}
      </div>
    </div>
  )
}
