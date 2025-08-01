// middleware.ts (yoki .js)

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Faqat bosh sahifaga (/) kirganlarni /success sahifasiga yo'naltirish
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/success', request.url))
  }

  return NextResponse.next()
}
