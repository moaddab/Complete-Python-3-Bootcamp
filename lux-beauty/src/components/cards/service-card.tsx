import { Clock } from "lucide-react"

import { CoverImage } from "@/components/brand/cover-image"
import { Card } from "@/components/ui/card"
import { formatMinutes, formatToman } from "@/lib/format"
import type { Service } from "@/lib/types"

export function ServiceCard({
  service,
  variant = "grid",
}: {
  service: Service
  variant?: "grid" | "list"
}) {
  if (variant === "list") {
    return (
      <article className="flex items-center gap-3 rounded-2xl bg-card p-3 ring-1 ring-foreground/8">
        <CoverImage
          src={service.image}
          alt={service.title}
          className="size-[4.75rem] shrink-0 rounded-xl"
          sizes="76px"
        />
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-medium text-foreground">{service.title}</h3>
          <p className="mt-0.5 truncate text-sm text-muted-foreground">{service.subtitle}</p>
          <div className="mt-2 flex items-center justify-between gap-2 text-sm">
            <span className="font-medium text-primary">{formatToman(service.price)}</span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <Clock className="size-3.5" />
              {formatMinutes(service.duration)}
            </span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <Card className="gap-0 overflow-hidden py-0 ring-foreground/8">
      <CoverImage
        src={service.image}
        alt={service.title}
        className="aspect-[4/3] w-full rounded-none"
        sizes="(max-width: 1024px) 80vw, 25vw"
      />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-heading text-base font-medium">{service.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{service.subtitle}</p>
        </div>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="font-medium text-primary">{formatToman(service.price)}</span>
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Clock className="size-3.5" />
            {formatMinutes(service.duration)}
          </span>
        </div>
      </div>
    </Card>
  )
}
