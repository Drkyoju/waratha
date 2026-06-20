import { Resend } from "resend"

import { type Dictionary } from "@/i18n/dictionaries"
import { type ContactFormData } from "@/lib/validate-contact"

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

function getRoleLabel(data: ContactFormData, dict: Dictionary) {
  return (
    dict.requestAccessModal.roles.find((role) => role.value === data.role)
      ?.label ?? data.role
  )
}

function getVolumeLabel(data: ContactFormData, dict: Dictionary) {
  return (
    dict.requestAccessModal.volumes.find((volume) => volume.value === data.volume)
      ?.label ?? data.volume
  )
}

function buildEmailHtml(data: ContactFormData, dict: Dictionary) {
  const roleLabel = getRoleLabel(data, dict)
  const volumeLabel = getVolumeLabel(data, dict)

  return `
    <h2>New Waratha access request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Institution:</strong> ${escapeHtml(data.institution)}</p>
    <p><strong>Role:</strong> ${escapeHtml(roleLabel)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Monthly exome volume:</strong> ${escapeHtml(volumeLabel)}</p>
    <p><strong>Locale:</strong> ${escapeHtml(data.locale)}</p>
    ${
      data.message
        ? `<p><strong>Message:</strong><br/>${escapeHtml(data.message)}</p>`
        : ""
    }
  `
}

export async function sendContactNotification(
  data: ContactFormData,
  dict: Dictionary
) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL ?? "contact@waratha.sa"
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Waratha <onboarding@resend.dev>"

  if (!apiKey || apiKey === "your_resend_api_key_here") {
    return { sent: false as const, reason: "missing_api_key" }
  }

  const resend = new Resend(apiKey)

  await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[Waratha] Access request — ${data.institution}`,
    html: buildEmailHtml(data, dict),
  })

  return { sent: true as const }
}

export function getPublicContactEmail(fallback: string) {
  return process.env.CONTACT_EMAIL ?? fallback
}
