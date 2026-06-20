"use client"

import { Play } from "lucide-react"

import { RequestAccessForm } from "@/components/request-access-form"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"

type DemoModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  locale: Locale
  dict: Dictionary["demoModal"]
  formDict: Dictionary["requestAccessModal"]
  toastMessage: string
}

export function DemoModal({
  open,
  onOpenChange,
  locale,
  dict,
  formDict,
  toastMessage,
}: DemoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[90vh] overflow-y-auto border-white/10 bg-[#0F1A12] text-white sm:max-w-2xl"
        dir={locale === "ar" ? "rtl" : "ltr"}
        closeLabel={formDict.close}
      >
        <DialogHeader className="text-start">
          <DialogTitle className="text-white">{dict.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-[#1a2a22]">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-white/10 text-white/80">
                <Play className="size-6 fill-current" aria-hidden="true" />
              </span>
              <p className="max-w-sm text-sm leading-relaxed text-white/65">
                {dict.placeholder}
              </p>
            </div>
          </div>

          {open ? (
            <RequestAccessForm
              key="demo-form"
              locale={locale}
              dict={formDict}
              toastMessage={toastMessage}
              idPrefix="demo-request"
              onSuccess={() => onOpenChange(false)}
            />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
