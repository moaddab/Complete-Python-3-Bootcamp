import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

export function StarRating({
  value,
  className,
  size = "md",
}: {
  value: number
  className?: string
  size?: "sm" | "md"
}) {
  const iconClass = size === "sm" ? "size-3.5" : "size-4"

  return (
    <div className={cn("flex items-center gap-0.5 text-primary", className)} aria-hidden>
      {Array.from({ length: 5 }, (_, index) => {
        const filled = index + 1 <= Math.round(value)
        return (
          <Star
            key={index}
            className={cn(iconClass, filled ? "fill-current" : "fill-transparent opacity-30")}
          />
        )
      })}
    </div>
  )
}
