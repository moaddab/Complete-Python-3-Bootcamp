"use client"

import { ChevronLeft, Clock, MapPin, Phone, Share2 } from "lucide-react"

import { BookButton } from "@/components/brand/book-button"
import { CoverImage } from "@/components/brand/cover-image"
import { SectionHeader } from "@/components/brand/section-header"
import { StarRating } from "@/components/brand/star-rating"
import { CategoryCard } from "@/components/cards/category-card"
import { InfoBox } from "@/components/cards/info-box"
import { ServiceCard } from "@/components/cards/service-card"
import { StylistCard } from "@/components/cards/stylist-card"
import { useSalonApp } from "@/components/salon-context"
import { Button } from "@/components/ui/button"
import {
  categories,
  galleryImages,
  getPopularServices,
  salon,
  stylists,
} from "@/lib/data"
import { formatRating, toFa } from "@/lib/format"
import { cn } from "@/lib/utils"

async function shareSalon() {
  try {
    if (navigator.share) {
      await navigator.share({
        title: salon.name,
        text: salon.description,
        url: window.location.href,
      })
    }
  } catch {
    // cancelled
  }
}

export function HomeView() {
  const { categoryId, openServices, setTab } = useSalonApp()
  const popular = getPopularServices(categoryId)
  const selectedCategory = categories.find((category) => category.id === categoryId)

  return (
    <div className="space-y-8 lg:space-y-12">
      <MobileHero onAbout={() => setTab("about")} onHours={() => setTab("contact")} />
      <DesktopHero onAbout={() => setTab("about")} />

      <section>
        <SectionHeader title="دسته‌بندی خدمات" className="px-4 lg:px-0" />
        <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-1 lg:hidden">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} variant="chip" />
          ))}
        </div>
        <div className="hidden grid-cols-6 gap-4 lg:grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <div className="mt-4 hidden justify-end lg:flex">
          <Button
            type="button"
            variant="link"
            className="h-auto px-0 text-primary"
            onClick={() => openServices(categoryId)}
          >
            مشاهده همه خدمات
            <ChevronLeft data-icon="inline-end" />
          </Button>
        </div>
      </section>

      <section className="px-4 lg:px-0">
        <SectionHeader
          title={selectedCategory ? selectedCategory.name : "خدمات پرطرفدار"}
          action={
            <Button
              type="button"
              variant="link"
              className="h-auto px-0 text-sm text-primary lg:hidden"
              onClick={() => openServices(categoryId)}
            >
              همه خدمات
              <ChevronLeft data-icon="inline-end" />
            </Button>
          }
        />
        <div className="space-y-3 lg:hidden">
          {popular.map((service) => (
            <ServiceCard key={service.id} service={service} variant="list" />
          ))}
        </div>
        <div className="hidden grid-cols-4 gap-4 lg:grid">
          {popular.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="px-4 lg:px-0">
        <SectionHeader
          title="آرایشگران ما"
          action={
            <Button
              type="button"
              variant="link"
              className="h-auto px-0 text-sm text-primary"
              onClick={() => setTab("stylists")}
            >
              مشاهده همه
              <ChevronLeft data-icon="inline-end" />
            </Button>
          }
        />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {stylists.map((stylist) => (
            <StylistCard key={stylist.id} stylist={stylist} />
          ))}
        </div>
      </section>
    </div>
  )
}

function DesktopHero({ onAbout }: { onAbout: () => void }) {
  return (
    <section className="hidden items-start gap-8 lg:grid lg:grid-cols-2">
      <div>
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {salon.badge}
        </span>
        <div className="mt-4 flex flex-wrap items-end gap-3">
          <h1 className="font-heading text-4xl font-semibold tracking-tight">{salon.name}</h1>
          <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
            <StarRating value={salon.rating} />
            <span>
              {formatRating(salon.rating)} از {toFa(salon.reviewCount)} نظر
            </span>
          </div>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-8 text-muted-foreground">{salon.description}</p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <InfoBox icon={<Phone className="size-4" />} title="تماس">
            <a href={`tel:${salon.phoneTel}`} className="hover:text-primary">
              {salon.phoneDisplay}
            </a>
          </InfoBox>
          <InfoBox icon={<MapPin className="size-4" />} title="آدرس">
            <p>{salon.address}</p>
            <a
              href={salon.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-xs text-primary"
            >
              مشاهده روی نقشه
            </a>
          </InfoBox>
          <InfoBox icon={<Clock className="size-4" />} title="ساعت کاری">
            <p>{salon.hours}</p>
            <p className="text-xs font-normal text-muted-foreground">{salon.hoursNote}</p>
          </InfoBox>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <BookButton className="h-12 min-w-44" />
          <Button
            type="button"
            variant="outline"
            className="h-12 rounded-xl border-primary/50 px-5 text-base text-primary hover:bg-primary/10 hover:text-primary"
            onClick={onAbout}
          >
            درباره سالن
          </Button>
        </div>
      </div>

      <div>
        <CoverImage
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          className="aspect-[4/3] rounded-3xl"
          sizes="(max-width: 1280px) 50vw, 640px"
          priority
        />
        <div className="mt-3 grid grid-cols-5 gap-2">
          {galleryImages.map((image, index) => (
            <CoverImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={cn(
                "aspect-square rounded-xl",
                index === 0 && "ring-2 ring-primary ring-offset-2 ring-offset-background"
              )}
              sizes="120px"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function MobileHero({
  onAbout,
  onHours,
}: {
  onAbout: () => void
  onHours: () => void
}) {
  return (
    <section className="-mt-4 lg:hidden">
      <div className="relative">
        <CoverImage
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          className="h-56 w-full"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="text-xs text-white/80">{salon.badge}</p>
          <h1 className="mt-1 font-heading text-2xl font-semibold">{salon.name}</h1>
          <div className="mt-1 flex items-center gap-2 text-sm">
            <StarRating value={salon.rating} className="text-primary-foreground" />
            <span>
              {formatRating(salon.rating)} از {toFa(salon.reviewCount)} نظر
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 px-4 py-5">
        <QuickAction href={`tel:${salon.phoneTel}`} icon={Phone} label="تماس" />
        <QuickAction href={salon.mapUrl} icon={MapPin} label="مسیر" external />
        <QuickAction icon={Clock} label="ساعت" onClick={onHours} />
        <QuickAction icon={Share2} label="اشتراک" onClick={() => void shareSalon()} />
      </div>

      <div className="space-y-3 px-4">
        <BookButton fullWidth className="h-12" />
        <Button
          type="button"
          variant="outline"
          className="h-12 w-full rounded-xl border-primary/50 text-base text-primary hover:bg-primary/10 hover:text-primary"
          onClick={onAbout}
        >
          درباره سالن
        </Button>
      </div>
    </section>
  )
}

function QuickAction({
  icon: Icon,
  label,
  href,
  external,
  onClick,
}: {
  icon: typeof Phone
  label: string
  href?: string
  external?: boolean
  onClick?: () => void
}) {
  const className =
    "flex flex-col items-center gap-2 text-xs text-muted-foreground"

  const content = (
    <>
      <span className="flex size-14 items-center justify-center rounded-full bg-card text-primary ring-1 ring-foreground/10">
        <Icon className="size-5" />
      </span>
      {label}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  )
}
