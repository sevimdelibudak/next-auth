'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-tight hover:text-gray-100 transition-colors duration-300">
          Lezzet Durağı
        </Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="text-lg hover:text-gray-200 transition-colors duration-300">
              Anasayfa
            </Link>
          </li>
          {session && (
            <>
              <li>
                <Link href="/profile" className="text-lg hover:text-gray-200 transition-colors duration-300">
                  Profil
                </Link>
              </li>
              {session.user?.roles?.includes('admin') && (
                <li>
                  <Link href="/admin" className="text-lg hover:text-gray-200 transition-colors duration-300">
                    Admin Paneli
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-white text-red-600 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
                >
                  Çıkış Yap
                </button>
              </li>
            </>
          )}
          {!session && (
            <li>
              <Link href="/api/auth/signin" className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300">
                Giriş Yap
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}