import { Clock, MapPin, Sparkles } from "lucide-react"

import { CoverImage } from "@/components/brand/cover-image"
import { PageIntro } from "@/components/brand/section-header"
import { galleryImages, salon } from "@/lib/data"

const highlights = [
  {
    icon: Sparkles,
    title: "متریال درجه یک",
    text: "استفاده از برندهای معتبر رنگ، مراقبت پوست و ناخن.",
  },
  {
    icon: Clock,
    title: "نوبت منظم",
    text: "زمان‌بندی دقیق تا بدون انتظار طولانی به نوبت خود برسید.",
  },
  {
    icon: MapPin,
    title: "فضای آرام",
    text: "محیطی تمیز و لوکس در سعادت‌آباد با دسترسی آسان.",
  },
]

export function AboutView() {
  return (
    <div className="space-y-8 px-4 lg:px-0">
      <PageIntro title="درباره سالن" description={salon.about} />
      <CoverImage
        src={galleryImages[0].src}
        alt={galleryImages[0].alt}
        className="aspect-[16/7] rounded-3xl"
        sizes="100vw"
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-card p-5 ring-1 ring-foreground/8"
          >
            <item.icon className="mb-3 size-5 text-primary" />
            <h3 className="font-medium">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
