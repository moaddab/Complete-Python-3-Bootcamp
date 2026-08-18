import { PageIntro } from "@/components/brand/section-header"
import { StylistCard } from "@/components/cards/stylist-card"
import { stylists } from "@/lib/data"

export function StylistsView() {
  return (
    <div className="px-4 lg:px-0">
      <PageIntro
        title="آرایشگران ما"
        description="با متخصصان سالن آشنا شوید و خدمات مرتبط با تخصص هر نفر را ببینید."
      />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {stylists.map((stylist) => (
          <StylistCard key={stylist.id} stylist={stylist} />
        ))}
      </div>
    </div>
  )
}
