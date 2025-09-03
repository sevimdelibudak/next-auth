'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">Ürün Sitesi</span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/">
            <span className="cursor-pointer hover:text-gray-300">Ana Sayfa</span>
          </Link>
          {session && (
            <Link href="/profile">
              <span className="cursor-pointer hover:text-gray-300">Profil</span>
            </Link>
          )}
          {!session && (
            <button onClick={() => signIn('auth0')} className="cursor-pointer hover:text-gray-300">
              Giriş
            </button>
          )}
          {session && (
            <button onClick={() => signOut()} className="cursor-pointer hover:text-gray-300">
              Çıkış
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;