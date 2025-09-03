import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  const isProfilePage = request.nextUrl.pathname.startsWith('/profile');
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');

  // Adım 1: Kullanıcı giriş yapmış mı kontrol et
  if (!token) {
    if (isProfilePage || isAdminPage) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
  }
  
  // Adım 2: Giriş yapmış kullanıcıların rollerini kontrol et
  if (isAdminPage) {
    const roles = token.roles;
    if (!Array.isArray(roles) || !roles.includes('admin')) {
      // Rolü olmayanları oldukları yerde bırak
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/admin/:path*'],
};