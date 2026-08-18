"use client"

import {
  Droplets,
  Eye,
  Hand,
  Palette,
  Scissors,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

import { useSalonApp } from "@/components/salon-context"
import type { Category, CategoryId } from "@/lib/types"
import { toFa } from "@/lib/format"
import { cn } from "@/lib/utils"

const categoryIcons: Record<CategoryId, LucideIcon> = {
  brows: Eye,
  skin: Sparkles,
  makeup: Palette,
  nails: Hand,
  color: Droplets,
  hair: Scissors,
}

export function CategoryCard({
  category,
  variant = "grid",
}: {
  category: Category
  variant?: "grid" | "chip"
}) {
  const { categoryId, setCategoryId } = useSalonApp()
  const selected = categoryId === category.id
  const Icon = categoryIcons[category.id]

  if (variant === "chip") {
    return (
      <button
        type="button"
        onClick={() => setCategoryId(selected ? null : category.id)}
        className={cn(
          "flex w-[5.5rem] shrink-0 flex-col items-center gap-2 text-center",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        )}
      >
        <span
          className={cn(
            "flex size-16 items-center justify-center rounded-full ring-1 transition-colors",
            selected
              ? "bg-primary text-primary-foreground ring-primary"
              : "bg-card text-primary ring-foreground/10"
          )}
        >
          <Icon className="size-6" />
        </span>
        <span className="text-xs font-medium text-foreground">{category.name}</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setCategoryId(selected ? null : category.id)}
      className={cn(
        "flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl bg-card p-4 text-center ring-1 transition-colors",
        selected
          ? "bg-primary/8 ring-primary"
          : "ring-foreground/8 hover:ring-primary/40"
      )}
    >
      <span
        className={cn(
          "flex size-12 items-center justify-center rounded-full",
          selected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
        )}
      >
        <Icon className="size-6" />
      </span>
      <span>
        <span className="block font-medium text-foreground">{category.name}</span>
        <span className="mt-1 block text-xs text-muted-foreground">
          {toFa(category.serviceCount)} خدمت
        </span>
      </span>
    </button>
  )
}
