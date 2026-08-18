"use client"

import { PageIntro } from "@/components/brand/section-header"
import { ServiceCard } from "@/components/cards/service-card"
import { useSalonApp } from "@/components/salon-context"
import { Button } from "@/components/ui/button"
import { categories, getServicesByCategory } from "@/lib/data"

export function ServicesView() {
  const { categoryId, setCategoryId } = useSalonApp()
  const items = getServicesByCategory(categoryId)
  const selected = categories.find((category) => category.id === categoryId)

  return (
    <div className="px-4 lg:px-0">
      <PageIntro
        title="خدمات سالن"
        description="دسته‌بندی را انتخاب کنید تا خدمات همان بخش نمایش داده شود."
      />

      <div className="mb-5 flex flex-wrap gap-2">
        <Button
          type="button"
          variant={categoryId ? "outline" : "default"}
          className="h-9 rounded-full px-4"
          onClick={() => setCategoryId(null)}
        >
          همه خدمات
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            type="button"
            variant={categoryId === category.id ? "default" : "outline"}
            className="h-9 rounded-full px-4"
            onClick={() =>
              setCategoryId(categoryId === category.id ? null : category.id)
            }
          >
            {category.name}
          </Button>
        ))}
      </div>

      <h2 className="mb-4 font-heading text-lg font-medium">
        {selected ? selected.name : "همه خدمات"}
      </h2>

      <div className="space-y-3 lg:hidden">
        {items.map((service) => (
          <ServiceCard key={service.id} service={service} variant="list" />
        ))}
      </div>
      <div className="hidden grid-cols-3 gap-4 xl:grid-cols-4 lg:grid">
        {items.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}
