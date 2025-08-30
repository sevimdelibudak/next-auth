'use client';

import { useSession } from 'next-auth/react';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Yükleniyor...</div>;
  }

  if (!session) {
    return <div>Yetkisiz erişim. Lütfen giriş yapın.</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>
        <p className="mb-6 text-gray-600">
          Hoş geldin, <span className="font-semibold">{session.user?.name}</span>!
        </p>
        <p className="text-gray-600">Burası korumalı bir sayfa.</p>
      </div>
    </main>
  );
}