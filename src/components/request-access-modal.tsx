"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RequestAccessForm } from "@/components/request-access-form"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"

type RequestAccessModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  locale: Locale
  dict: Dictionary["requestAccessModal"]
  toastMessage: string
  defaultRole?: string
}

export function RequestAccessModal({
    open,
    onOpenChange,
    locale,
    dict,
    toastMessage,
    defaultRole,
  }: RequestAccessModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent
        className="max-h-[90vh] overflow-y-auto sm:max-w-lg"
        dir={locale === "ar" ? "rtl" : "ltr"}
        closeLabel={dict.close}
      >
        <DialogHeader className="text-start">
          <DialogTitle>{dict.title}</DialogTitle>
          <DialogDescription>{dict.description}</DialogDescription>
        </DialogHeader>

        {open ? (
          <RequestAccessForm
            key={defaultRole ?? "default"}
            locale={locale}
            dict={dict}
            toastMessage={toastMessage}
            defaultRole={defaultRole}
            onSuccess={() => onOpenChange(false)}
          />
        ) : null}
      </DialogContent>
    </Dialog>
  )
}
