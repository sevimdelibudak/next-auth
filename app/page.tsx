'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: 'url(/hero-food.jpg)', // Public klasöründeki görsel
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in">
            Lezzetli Tarifler Kapınızda
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-slide-up">
            Dünyanın dört bir yanından özenle seçilmiş, pratik ve enfes yemek tariflerini keşfedin.
          </p>
          {!session && (
            <button
              onClick={() => signIn('auth0')}
              className="px-10 py-5 bg-orange-600 text-white text-xl font-bold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              Hemen Giriş Yap
            </button>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-12">
          Neler Sunuyoruz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Geniş Tarif Yelpazesi</h3>
            <p className="text-lg text-gray-700">
              Türk mutfağından dünya lezzetlerine kadar binlerce tarif.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Kolayca Keşfet</h3>
            <p className="text-lg text-gray-700">
              Kategoriye, malzemeye veya zorluk seviyesine göre filtrele.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Topluluğa Katıl</h3>
            <p className="text-lg text-gray-700">
              Kendi tariflerini paylaş, yorum yap ve favorilerini kaydet.
            </p>
          </div>
        </div>
      </section>

      {session && (
        <section className="bg-blue-600 text-white py-16 text-center">
          <h2 className="text-5xl font-bold mb-6">Hoş Geldin, {session.user?.name}!</h2>
          <p className="text-xl mb-8">
            Hadi yeni tarifleri keşfetmeye başla veya profilini düzenle.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/profile" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Profilim
            </Link>
            {session.user?.roles?.includes('admin') && (
              <Link href="/admin" className="px-8 py-4 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300 transform hover:scale-105">
                Admin Paneli
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
}