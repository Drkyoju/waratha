"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"

import { DemoModal } from "@/components/demo-modal"
import { RequestAccessModal } from "@/components/request-access-modal"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"

type OpenRequestAccessOptions = {
  role?: string
}

type RequestAccessContextValue = {
  openRequestAccess: (options?: OpenRequestAccessOptions) => void
  openDemoModal: () => void
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
  const [requestOpen, setRequestOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const [defaultRole, setDefaultRole] = useState<string | undefined>()

  const openRequestAccess = useCallback((options?: OpenRequestAccessOptions) => {
    setDefaultRole(options?.role)
    setDemoOpen(false)
    setRequestOpen(true)
  }, [])

  const openDemoModal = useCallback(() => {
    setRequestOpen(false)
    setDemoOpen(true)
  }, [])

  const closeRequestAccess = useCallback(() => {
    setRequestOpen(false)
    setDefaultRole(undefined)
  }, [])

  const value = useMemo(
    () => ({ openRequestAccess, openDemoModal, closeRequestAccess }),
    [openRequestAccess, openDemoModal, closeRequestAccess]
  )

  return (
    <RequestAccessContext.Provider value={value}>
      {children}
      <RequestAccessModal
        open={requestOpen}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setDefaultRole(undefined)
          }
          setRequestOpen(nextOpen)
        }}
        locale={locale}
        dict={dict.requestAccessModal}
        toastMessage={dict.toast.requestReceived}
        defaultRole={defaultRole}
      />
      <DemoModal
        open={demoOpen}
        onOpenChange={setDemoOpen}
        locale={locale}
        dict={dict.demoModal}
        formDict={dict.requestAccessModal}
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
