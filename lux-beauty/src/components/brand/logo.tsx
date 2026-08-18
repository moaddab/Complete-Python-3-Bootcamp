import { cn } from "@/lib/utils"

export function Logo({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        <LotusIcon className="size-6" />
      </span>
      {!compact && (
        <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
          لوکس بیوتی
        </span>
      )}
    </div>
  )
}

export function LotusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 8c1.8 6.2-1.2 11.4-6.8 14.2C20.6 16.4 24 11.8 24 8Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M24 8c-1.8 6.2 1.2 11.4 6.8 14.2C27.4 16.4 24 11.8 24 8Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M24 10c0 7.5-4.4 13.2-10.8 15.6 2.6-6.4 7.2-11.8 10.8-15.6Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M24 10c0 7.5 4.4 13.2 10.8 15.6-2.6-6.4-7.2-11.8-10.8-15.6Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M24 12c0 10-3.8 16.8-10 20.4 1.4-7.2 5.6-14.6 10-20.4Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M24 12c0 10 3.8 16.8 10 20.4-1.4-7.2-5.6-14.6-10-20.4Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M24 14c0 12.5 0 19.5 0 26 0-6.5 0-13.5 0-26Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <ellipse cx="24" cy="40" rx="7" ry="2.2" fill="currentColor" opacity="0.35" />
    </svg>
  )
}
