// middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // DEBUGGING: Terminale token değerini yazdır
  console.log('Middleware Token:', token);

  // Admin sayfası için rol kontrolü
  if (
    request.nextUrl.pathname.startsWith('/admin') &&
    (!token || !Array.isArray(token.roles) || !token.roles.includes('admin'))
  ) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Dashboard için normal oturum kontrolü
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};