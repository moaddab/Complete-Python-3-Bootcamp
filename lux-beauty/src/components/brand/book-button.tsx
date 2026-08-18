"use client"

import { CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function BookButton({
  className,
  fullWidth = false,
}: {
  className?: string
  fullWidth?: boolean
}) {
  return (
    <Button
      type="button"
      className={cn(
        "h-11 rounded-xl px-5 text-base shadow-none",
        fullWidth && "w-full",
        className
      )}
    >
      <CalendarDays data-icon="inline-start" className="size-4" />
      رزرو نوبت
    </Button>
  )
}
