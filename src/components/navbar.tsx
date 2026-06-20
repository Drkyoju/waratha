"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { WarathaLogo } from "@/components/waratha-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Container } from "@/components/layout/container"
import { useRequestAccess } from "@/components/providers/request-access-provider"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { type Locale } from "@/i18n/config"
import { type Dictionary } from "@/i18n/dictionaries"
import { cn } from "@/lib/utils"

type NavbarProps = {
  locale: Locale
  dict: Dictionary
}

const navItems = [
  { key: "product" as const, hash: "#product" },
  { key: "howItWorks" as const, hash: "#how-it-works" },
  { key: "forHospitals" as const, hash: "#hospitals" },
  { key: "research" as const, hash: "#research" },
  { key: "contact" as const, hash: "#contact" },
] as const

export function Navbar({ locale, dict }: NavbarProps) {
  const { openRequestAccess } = useRequestAccess()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onHero = !scrolled

  const logo = (
    <Link
      href={`/${locale}`}
      className="inline-flex transition-opacity hover:opacity-90"
    >
      <WarathaLogo
        locale={locale}
        wordmarkClassName={cn(onHero && "text-white")}
      />
    </Link>
  )

  const desktopNav = (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.key}>
            <NavigationMenuLink asChild>
              <Link
                href={`/${locale}${item.hash}`}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-sm font-medium",
                  onHero && "text-white/85 hover:bg-white/10 hover:text-white"
                )}
              >
                {dict.nav[item.key]}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-waratha-secondary text-white">
        <Container className="flex h-9 items-center justify-end gap-2">
          <span className="text-xs font-medium text-white/55">
            {dict.nav.languageLabel}
          </span>
          <LanguageSwitcher
            locale={locale}
            labels={dict.nav}
            inverted
            compact
          />
        </Container>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-border/70 bg-background/90 text-foreground shadow-sm backdrop-blur-md"
            : "border-white/10 bg-waratha-secondary/80 text-white backdrop-blur-md"
        )}
      >
        <Container className="relative">
          <div className="grid h-14 grid-cols-[1fr_auto] items-center gap-2 sm:h-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
            <div className="justify-self-start">{logo}</div>
            <div className="hidden justify-self-center lg:block">{desktopNav}</div>
            <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2">
              <Button
                size="sm"
                className={cn(
                  "touch-target lg:hidden",
                  onHero
                    ? "bg-waratha-primary text-primary-foreground hover:bg-waratha-primary/90"
                    : ""
                )}
                onClick={() => openRequestAccess()}
              >
                {dict.nav.requestAccess}
              </Button>
              <Button
                size="sm"
                className={cn(
                  "hidden lg:inline-flex touch-target",
                  onHero &&
                    "bg-waratha-primary text-primary-foreground hover:bg-waratha-primary/90"
                )}
                onClick={() => openRequestAccess()}
              >
                {dict.nav.requestAccess}
              </Button>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label={dict.nav.openMenu}
                    className={cn(
                      "touch-target",
                      onHero &&
                        "border-white/25 bg-white/5 text-white hover:bg-white/10"
                    )}
                  >
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side={locale === "ar" ? "left" : "right"}
                  className="w-80"
                  closeLabel={dict.nav.closeMenu}
                >
                  <SheetHeader>
                    <SheetTitle className="sr-only">{dict.brand.name}</SheetTitle>
                    <WarathaLogo locale={locale} />
                  </SheetHeader>
                  <Separator className="my-4" />
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.key}
                        href={`/${locale}${item.hash}`}
                        onClick={() => setOpen(false)}
                        className="touch-target rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                      >
                        {dict.nav[item.key]}
                      </Link>
                    ))}
                  </nav>
                  <Separator className="my-4" />
                  <Button
                    className="touch-target w-full"
                    onClick={() => {
                      setOpen(false)
                      openRequestAccess()
                    }}
                  >
                    {dict.nav.requestAccess}
                  </Button>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
