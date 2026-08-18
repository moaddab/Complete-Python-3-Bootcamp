"use client"

import { CoverImage } from "@/components/brand/cover-image"
import { StarRating } from "@/components/brand/star-rating"
import { useSalonApp } from "@/components/salon-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Stylist } from "@/lib/types"

export function StylistCard({ stylist }: { stylist: Stylist }) {
  const { openServices } = useSalonApp()

  return (
    <Card className="items-center gap-3 px-4 py-5 text-center ring-foreground/8">
      <CoverImage
        src={stylist.image}
        alt={stylist.name}
        className="size-24 rounded-full ring-4 ring-primary/10"
        sizes="96px"
      />
      <div>
        <h3 className="font-heading text-base font-medium">{stylist.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{stylist.specialty}</p>
      </div>
      <StarRating value={stylist.rating} />
      <Button
        type="button"
        variant="outline"
        className="mt-1 h-9 w-full rounded-xl border-primary/40 text-primary hover:bg-primary/10 hover:text-primary"
        onClick={() => openServices(stylist.categoryId)}
      >
        مشاهده خدمات
      </Button>
    </Card>
  )
}
