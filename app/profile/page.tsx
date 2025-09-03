'use client';

import { useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Profil Sayfası</h1>
      <p className="text-lg text-gray-600">
        Hoş geldin, <span className="font-semibold">{session?.user?.name}</span>
      </p>
      <p className="text-sm text-gray-500 mt-2">
        E-posta adresin: {session?.user?.email}
      </p>
    </div>
  );
}