"use client"

import { Phone, Share2 } from "lucide-react"

import { BookButton } from "@/components/brand/book-button"
import { Logo } from "@/components/brand/logo"
import { MobileMenu } from "@/components/layout/mobile-menu"
import { useSalonApp } from "@/components/salon-context"
import { Button, buttonVariants } from "@/components/ui/button"
import { navItems, salon } from "@/lib/data"
import { cn } from "@/lib/utils"

async function shareSalon() {
  const payload = {
    title: salon.name,
    text: salon.description,
    url: window.location.href,
  }

  try {
    if (navigator.share) {
      await navigator.share(payload)
    }
  } catch {
    // User cancelled share; keep the control silent.
  }
}

export function SiteHeader() {
  const { tab, setTab } = useSalonApp()

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:h-16 lg:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                tab === item.id
                  ? "bg-primary/10 font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <a
            href={`tel:${salon.phoneTel}`}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "text-primary"
            )}
          >
            <Phone />
            <span className="sr-only">تماس</span>
          </a>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-primary"
            onClick={() => void shareSalon()}
          >
            <Share2 />
            <span className="sr-only">اشتراک‌گذاری</span>
          </Button>
          <BookButton />
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
