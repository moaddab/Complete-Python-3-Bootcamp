import Image from "next/image"

import { cn } from "@/lib/utils"

export function CoverImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes ?? "(max-width: 1024px) 100vw, 50vw"}
      />
    </div>
  )
}
