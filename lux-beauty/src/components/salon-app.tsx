"use client"

import { HomeView } from "@/components/home/home-view"
import { BottomNav } from "@/components/layout/bottom-nav"
import { SiteHeader } from "@/components/layout/site-header"
import { SalonProvider, useSalonApp } from "@/components/salon-context"
import { AboutView } from "@/components/views/about-view"
import { ContactView } from "@/components/views/contact-view"
import { PortfolioView } from "@/components/views/portfolio-view"
import { ReviewsView } from "@/components/views/reviews-view"
import { ServicesView } from "@/components/views/services-view"
import { StylistsView } from "@/components/views/stylists-view"
import type { TabId } from "@/lib/types"

export function SalonApp() {
  return (
    <SalonProvider>
      <SalonShell />
    </SalonProvider>
  )
}

function SalonShell() {
  const { tab } = useSalonApp()

  return (
    <div className="flex min-h-full flex-1 flex-col bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl flex-1 pb-28 pt-4 lg:px-6 lg:pb-16 lg:pt-8">
        <ActiveView tab={tab} />
      </main>
      <BottomNav />
    </div>
  )
}

function ActiveView({ tab }: { tab: TabId }) {
  switch (tab) {
    case "services":
      return <ServicesView />
    case "stylists":
      return <StylistsView />
    case "portfolio":
      return <PortfolioView />
    case "about":
      return <AboutView />
    case "reviews":
      return <ReviewsView />
    case "contact":
      return <ContactView />
    default:
      return <HomeView />
  }
}
