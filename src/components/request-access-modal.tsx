"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"

type RequestAccessModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  locale: Locale
  dict: Dictionary["requestAccessModal"]
  toastMessage: string
}

type FormState = {
  name: string
  institution: string
  role: string
  email: string
  volume: string
  message: string
}

const initialFormState: FormState = {
  name: "",
  institution: "",
  role: "",
  email: "",
  volume: "",
  message: "",
}

export function RequestAccessModal({
  open,
  onOpenChange,
  locale,
  dict,
  toastMessage,
}: RequestAccessModalProps) {
  const [form, setForm] = useState<FormState>(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function resetForm() {
    setForm(initialFormState)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.role || !form.volume) {
      toast.error(dict.validationError)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      toast.success(toastMessage)
      resetForm()
      onOpenChange(false)
    } catch {
      toast.error(dict.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) resetForm()
        onOpenChange(nextOpen)
      }}
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

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="request-name">{dict.nameLabel}</Label>
            <Input
              id="request-name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder={dict.namePlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="request-institution">{dict.institutionLabel}</Label>
            <Input
              id="request-institution"
              value={form.institution}
              onChange={(event) => updateField("institution", event.target.value)}
              placeholder={dict.institutionPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="request-role">{dict.roleLabel}</Label>
            <Select
              value={form.role}
              onValueChange={(value) => updateField("role", value)}
            >
              <SelectTrigger id="request-role" className="w-full">
                <SelectValue placeholder={dict.rolePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {dict.roles.map((role) => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="request-email">{dict.emailLabel}</Label>
            <Input
              id="request-email"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder={dict.emailPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="request-volume">{dict.volumeLabel}</Label>
            <Select
              value={form.volume}
              onValueChange={(value) => updateField("volume", value)}
            >
              <SelectTrigger id="request-volume" className="w-full">
                <SelectValue placeholder={dict.volumePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {dict.volumes.map((volume) => (
                  <SelectItem key={volume.value} value={volume.value}>
                    {volume.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="request-message">{dict.messageLabel}</Label>
            <Textarea
              id="request-message"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder={dict.messagePlaceholder}
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-waratha-primary hover:bg-waratha-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? dict.submitting : dict.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
