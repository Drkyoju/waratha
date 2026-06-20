import { type Locale } from "@/i18n/config"

type ContactPayload = {
  name?: string
  institution?: string
  role?: string
  email?: string
  volume?: string
  message?: string
  locale?: string
}

const allowedRoles = new Set([
  "clinical-geneticist",
  "molecular-pathologist",
  "lab-director",
  "other",
])

const allowedVolumes = new Set(["lt-50", "50-200", "200-500", "500-plus"])

export function validateContactPayload(body: ContactPayload) {
  const errors: string[] = []

  const name = body.name?.trim()
  const institution = body.institution?.trim()
  const email = body.email?.trim()
  const role = body.role?.trim()
  const volume = body.volume?.trim()

  if (!name || name.length < 2) errors.push("name")
  if (!institution || institution.length < 2) errors.push("institution")
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("email")
  if (!role || !allowedRoles.has(role)) errors.push("role")
  if (!volume || !allowedVolumes.has(volume)) errors.push("volume")
  if (body.locale && body.locale !== "ar" && body.locale !== "en") {
    errors.push("locale")
  }

  return {
    valid: errors.length === 0,
    errors,
    data: {
      name: name!,
      institution: institution!,
      email: email!,
      role: role!,
      volume: volume!,
      message: body.message?.trim() ?? "",
      locale: (body.locale === "en" ? "en" : "ar") as Locale,
    },
  }
}

export type ContactFormData = ReturnType<
  typeof validateContactPayload
>["data"]
