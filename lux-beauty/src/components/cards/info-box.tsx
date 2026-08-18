import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function InfoBox({
  icon,
  title,
  children,
  className,
}: {
  icon: ReactNode
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl bg-card p-4 ring-1 ring-foreground/8",
        className
      )}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{title}</p>
        <div className="mt-1 text-sm font-medium leading-6 text-foreground">{children}</div>
      </div>
    </div>
  )
}
