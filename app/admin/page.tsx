// app/admin/page.tsx

'use client';

import { useSession } from 'next-auth/react';

type UserWithRoles = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  roles?: string[];
};

export default function AdminPage() {
  const { data: session, status } = useSession();
  const user = session?.user as UserWithRoles;

  // TEMPORARY DEBUGGING: Add this line to log the session data
  console.log('Session data:', session);

  if (status === 'loading') {
    return <div>Yükleniyor...</div>;
  }

  if (!user || !user.roles || !user.roles.includes('admin')) {
    return <div>Yetkisiz erişim. Sadece adminler görebilir.</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Paneli</h1>
        <p className="mb-6 text-gray-600">
          Hoş geldin, <span className="font-semibold">{user.name}</span>!
        </p>
        <p className="text-gray-600">Burası sadece adminler için korumalı bir sayfa.</p>
      </div>
    </main>
  );
}