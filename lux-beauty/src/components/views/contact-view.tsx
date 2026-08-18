"use client"

import { Clock, MapPin, Phone } from "lucide-react"
import { FormEvent } from "react"

import { PageIntro } from "@/components/brand/section-header"
import { InfoBox } from "@/components/cards/info-box"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { salon } from "@/lib/data"

export function ContactView() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div className="grid gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:px-0">
      <div>
        <PageIntro
          title="تماس با ما"
          description="برای هماهنگی یا سؤال، از اطلاعات زیر استفاده کنید. فرم تماس در این نسخه فقط نمایشی است."
        />
        <div className="space-y-3">
          <InfoBox icon={<Phone className="size-4" />} title="تماس">
            <a href={`tel:${salon.phoneTel}`}>{salon.phoneDisplay}</a>
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
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-3xl bg-card p-5 ring-1 ring-foreground/8 lg:p-6"
      >
        <h2 className="font-heading text-lg font-medium">ارسال پیام</h2>
        <div className="space-y-2">
          <Label htmlFor="name">نام</Label>
          <Input id="name" name="name" className="h-11 rounded-xl" placeholder="نام شما" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">شماره تماس</Label>
          <Input
            id="phone"
            name="phone"
            className="h-11 rounded-xl"
            placeholder="۰۹۱۲xxxxxxx"
            dir="ltr"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">پیام</Label>
          <Textarea
            id="message"
            name="message"
            className="min-h-28 rounded-xl"
            placeholder="سؤال یا توضیح کوتاه"
          />
        </div>
        <Button type="submit" className="h-11 w-full rounded-xl">
          ارسال پیام
        </Button>
      </form>
    </div>
  )
}
