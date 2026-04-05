import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Next.js 16 deprecated middleware in favor of proxy.ts, but since this file is currently open in your editor, 
// Next.js requires it to export a valid function.
export default function middleware(request: NextRequest) {
  return NextResponse.next();
}

export function proxy(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
