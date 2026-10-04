import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SESSION_COOKIE } from './lib/session';

// Optimistic auth check: send signed-out visitors to the login page.
export function proxy(request: NextRequest) {
  if (request.cookies.has(SESSION_COOKIE)) return NextResponse.next();
  const url = new URL('/login', request.url);
  url.searchParams.set('next', request.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/dashboard/:path*', '/payments/:path*'],
};
