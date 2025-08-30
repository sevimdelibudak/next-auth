import AuthButtons from '../components/AuthButtons';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Giriş Yap</h1>
        <p className="mb-6 text-gray-600">Devam etmek için lütfen giriş yapın.</p>
        <AuthButtons />
      </div>
    </main>
  );
}