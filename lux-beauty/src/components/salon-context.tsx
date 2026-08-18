"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"

import type { CategoryId, TabId } from "@/lib/types"

type SalonContextValue = {
  tab: TabId
  setTab: (tab: TabId) => void
  categoryId: CategoryId | null
  setCategoryId: (id: CategoryId | null) => void
  openServices: (categoryId?: CategoryId | null) => void
}

const SalonContext = createContext<SalonContextValue | null>(null)

export function SalonProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState<TabId>("home")
  const [categoryId, setCategoryId] = useState<CategoryId | null>(null)

  const value = useMemo<SalonContextValue>(
    () => ({
      tab,
      setTab,
      categoryId,
      setCategoryId,
      openServices(nextCategory) {
        if (nextCategory !== undefined) setCategoryId(nextCategory)
        setTab("services")
      },
    }),
    [tab, categoryId]
  )

  return <SalonContext.Provider value={value}>{children}</SalonContext.Provider>
}

export function useSalonApp() {
  const context = useContext(SalonContext)
  if (!context) {
    throw new Error("useSalonApp must be used inside SalonProvider")
  }
  return context
}
