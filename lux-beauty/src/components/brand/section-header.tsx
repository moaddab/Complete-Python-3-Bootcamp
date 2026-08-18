import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function SectionHeader({
  title,
  action,
  className,
}: {
  title: string
  action?: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mb-4 flex items-center justify-between gap-3", className)}>
      <h2 className="font-heading text-xl font-semibold tracking-tight">{title}</h2>
      {action}
    </div>
  )
}

export function PageIntro({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="mb-6">
      <h1 className="font-heading text-2xl font-semibold tracking-tight">{title}</h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
