"use client"

import { Home, Info, Scissors, Sparkles, Star } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { useSalonApp } from "@/components/salon-context"
import { bottomNavItems } from "@/lib/data"
import type { TabId } from "@/lib/types"
import { cn } from "@/lib/utils"

const icons: Record<TabId, LucideIcon> = {
  home: Home,
  services: Sparkles,
  stylists: Scissors,
  portfolio: Sparkles,
  about: Info,
  reviews: Star,
  contact: Info,
}

export function BottomNav() {
  const { tab, setTab } = useSalonApp()

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-foreground/8 bg-background/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md lg:hidden">
      <ul className="grid grid-cols-5">
        {bottomNavItems.map((item) => {
          const Icon = icons[item.id]
          const active = tab === item.id
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => setTab(item.id)}
                className={cn(
                  "flex w-full flex-col items-center gap-1 rounded-xl py-1 text-[11px]",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="size-5" />
                {item.label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
