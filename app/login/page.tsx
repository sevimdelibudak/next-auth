// app/login/page.tsx

import AuthButtons from '@/components/AuthButtons';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Giriş Yap</h1>
      <AuthButtons />
    </div>
  );
}