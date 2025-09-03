export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12 shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-md mb-2">
          &copy; {new Date().getFullYear()} Lezzet Durağı. Tüm Hakları Saklıdır.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Gizlilik Politikası
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            Hizmet Şartları
          </a>
        </div>
      </div>
    </footer>
  );
}