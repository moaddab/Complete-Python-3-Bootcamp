import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"

import { DirectionProvider } from "@/components/ui/direction"

import "./globals.css"

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "لوکس بیوتی | سالن زیبایی",
  description:
    "سالن زیبایی لوکس بیوتی؛ خدمات مو، پوست، ناخن و آرایش با فضای آرام و تیمی متخصص.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <DirectionProvider direction="rtl">{children}</DirectionProvider>
      </body>
    </html>
  )
}
