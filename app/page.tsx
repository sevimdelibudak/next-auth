export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-6">
        Merhaba Tailwind!
      </h1>

      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        Bu sayfa Tailwind CSS ile hazırlanmış basit bir örnektir. Butonlara ve kutulara bakın!
      </p>

      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors mb-6">
        Tıkla Beni
      </button>

      <div className="grid grid-cols-3 gap-4 max-w-md w-full">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
          Kutu 1
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
          Kutu 2
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
          Kutu 3
        </div>
      </div>
    </div>
  );
}
