// app/components/AuthButtons.tsx

'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButtons() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Yükleniyor...</div>;
  }

  if (session) {
    return (
      <button 
        onClick={() => signOut()}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Çıkış Yap
      </button>
    );
  } else {
    return (
      <button 
        onClick={() => signIn('auth0')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Giriş Yap
      </button>
    );
  }
}