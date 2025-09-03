'use client';

import { useSession } from 'next-auth/react';

export default function AdminPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <p>Yükleniyor...</p>
      </div>
    );
  }

  if (session?.user?.roles?.includes('admin')) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Admin Paneli</h1>
        <p className="text-xl">Hoş geldin, Admin! Sadece sen bu sayfayı görebilirsin.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 text-red-500">Yetkisiz Erişim!</h1>
      <p className="text-xl">Sadece admin rolüne sahip kullanıcılar bu sayfayı görebilir.</p>
    </div>
  );
}