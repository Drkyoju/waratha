import { NextResponse } from "next/server"

import { sendContactNotification } from "@/lib/email"
import { getDictionary } from "@/i18n/get-dictionary"
import { validateContactPayload } from "@/lib/validate-contact"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = validateContactPayload(body)

    if (!result.valid) {
      return NextResponse.json(
        { success: false, errors: result.errors },
        { status: 400 }
      )
    }

    const dict = getDictionary(result.data.locale)
    const emailResult = await sendContactNotification(result.data, dict)

    console.log("[contact] inbound request", {
      to: process.env.CONTACT_EMAIL ?? "contact@waratha.sa",
      data: result.data,
      emailSent: emailResult.sent,
      ...(emailResult.sent ? {} : { reason: emailResult.reason }),
    })

    return NextResponse.json({ success: true, emailSent: emailResult.sent })
  } catch (error) {
    console.error("[contact] error", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
