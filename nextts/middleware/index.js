import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const res = NextResponse.redirect('/') // creates an actual instance
  res.cookie('hello', 'world') // can be called on an instance
  return res
}