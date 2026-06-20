"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
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

export type RequestAccessFormState = {
  name: string
  institution: string
  role: string
  email: string
  volume: string
  message: string
}

export const initialRequestAccessFormState: RequestAccessFormState = {
  name: "",
  institution: "",
  role: "",
  email: "",
  volume: "",
  message: "",
}

type RequestAccessFormProps = {
  locale: Locale
  dict: Dictionary["requestAccessModal"]
  toastMessage: string
  defaultRole?: string
  idPrefix?: string
  onSuccess?: () => void
}

export function RequestAccessForm({
  locale,
  dict,
  toastMessage,
  defaultRole,
  idPrefix = "request",
  onSuccess,
}: RequestAccessFormProps) {
  const [form, setForm] = useState<RequestAccessFormState>(
    initialRequestAccessFormState
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (defaultRole) {
      setForm((current) => ({ ...current, role: defaultRole }))
    }
  }, [defaultRole])

  function updateField<K extends keyof RequestAccessFormState>(
    key: K,
    value: RequestAccessFormState[K]
  ) {
    setForm((current) => ({ ...current, [key]: value }))
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
      setForm(initialRequestAccessFormState)
      onSuccess?.()
    } catch {
      toast.error(dict.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-name`}>{dict.nameLabel}</Label>
        <Input
          id={`${idPrefix}-name`}
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder={dict.namePlaceholder}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-institution`}>{dict.institutionLabel}</Label>
        <Input
          id={`${idPrefix}-institution`}
          value={form.institution}
          onChange={(event) => updateField("institution", event.target.value)}
          placeholder={dict.institutionPlaceholder}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-role`}>{dict.roleLabel}</Label>
        <Select
          value={form.role}
          onValueChange={(value) => updateField("role", value)}
        >
          <SelectTrigger id={`${idPrefix}-role`} className="w-full">
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
        <Label htmlFor={`${idPrefix}-email`}>{dict.emailLabel}</Label>
        <Input
          id={`${idPrefix}-email`}
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder={dict.emailPlaceholder}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-volume`}>{dict.volumeLabel}</Label>
        <Select
          value={form.volume}
          onValueChange={(value) => updateField("volume", value)}
        >
          <SelectTrigger id={`${idPrefix}-volume`} className="w-full">
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
        <Label htmlFor={`${idPrefix}-message`}>{dict.messageLabel}</Label>
        <Textarea
          id={`${idPrefix}-message`}
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
  )
}
