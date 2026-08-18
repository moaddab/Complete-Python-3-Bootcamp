"use client"

import { Menu } from "lucide-react"
import { useState } from "react"

import { Logo } from "@/components/brand/logo"
import { useSalonApp } from "@/components/salon-context"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { navItems, salon } from "@/lib/data"
import { cn } from "@/lib/utils"

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { tab, setTab } = useSalonApp()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu />
        <span className="sr-only">منو</span>
      </Button>
      <SheetContent side="left" className="w-[18rem] bg-background">
        <SheetHeader>
          <SheetTitle className="sr-only">منوی سایت</SheetTitle>
          <SheetDescription className="sr-only">
            دسترسی به بخش‌های سالن {salon.name}
          </SheetDescription>
          <Logo />
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              type="button"
              variant="ghost"
              className={cn(
                "h-11 justify-start rounded-xl px-3 text-base",
                tab === item.id && "bg-primary/10 text-primary"
              )}
              onClick={() => {
                setTab(item.id)
                setOpen(false)
              }}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
