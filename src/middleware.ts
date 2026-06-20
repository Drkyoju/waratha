import { NextRequest, NextResponse } from "next/server"

import { defaultLocale, isLocale } from "@/i18n/config"

function getLocaleFromPathname(pathname: string) {
  const segment = pathname.split("/")[1]
  return isLocale(segment) ? segment : null
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameLocale = getLocaleFromPathname(pathname)

  if (pathnameLocale) {
    const response = NextResponse.next()
    response.headers.set("x-locale", pathnameLocale)
    return response
  }

  const locale = defaultLocale
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  const response = NextResponse.redirect(url)
  response.headers.set("x-locale", locale)
  return response
}

export const config = {
  matcher: [`/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)`],
}
