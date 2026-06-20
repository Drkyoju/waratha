"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"

import { RequestAccessModal } from "@/components/request-access-modal"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"

type RequestAccessContextValue = {
  openRequestAccess: () => void
  closeRequestAccess: () => void
}

const RequestAccessContext = createContext<RequestAccessContextValue | null>(null)

type RequestAccessProviderProps = {
  children: React.ReactNode
  locale: Locale
  dict: Dictionary
}

export function RequestAccessProvider({
  children,
  locale,
  dict,
}: RequestAccessProviderProps) {
  const [open, setOpen] = useState(false)

  const openRequestAccess = useCallback(() => setOpen(true), [])
  const closeRequestAccess = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ openRequestAccess, closeRequestAccess }),
    [openRequestAccess, closeRequestAccess]
  )

  return (
    <RequestAccessContext.Provider value={value}>
      {children}
      <RequestAccessModal
        open={open}
        onOpenChange={setOpen}
        locale={locale}
        dict={dict.requestAccessModal}
        toastMessage={dict.toast.requestReceived}
      />
    </RequestAccessContext.Provider>
  )
}

export function useRequestAccess() {
  const context = useContext(RequestAccessContext)

  if (!context) {
    throw new Error("useRequestAccess must be used within RequestAccessProvider")
  }

  return context
}
