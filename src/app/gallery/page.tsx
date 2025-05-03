'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, X, Home, Info, MapPin, Phone, Map } from 'lucide-react';

type KontrakanType = "K1" | "K2" | "Denah";

const galleries = {
  K1: [
    { id: 1, title: "Tampak Depan", description: "Fasad modern dengan taman kecil di depan", path: "/k1/k1.jpg" },
    { id: 2, title: "Ruang Tamu", description: "Ruang tamu yang nyaman dan luas", path: "/k1/k2.jpg" },
    { id: 3, title: "Kamar Tidur", description: "Kamar tidur dengan sirkulasi udara yang baik", path: "/k1/k3.jpg" },
    { id: 4, title: "Kamar Mandi", description: "Kamar mandi bersih dengan shower", path: "/k1/k4.jpg" },
    { id: 5, title: "Dapur", description: "Dapur modern dengan peralatan lengkap", path: "/k1/k5.jpg" },
    { id: 6, title: "Dapur", description: "Dapur modern dengan peralatan lengkap", path: "/k1/k6.jpg" },
  ],
  K2: [
    { id: 1, title: "Tampak Depan", description: "Desain eksterior minimalis dan modern", path: "/k2/1.jpg" },
    { id: 2, title: "Ruang Keluarga", description: "Area berkumpul keluarga yang nyaman", path: "/k2/6.jpg" },
    { id: 3, title: "Dapur", description: "Dapur bersih dengan kabinet modern", path: "/k2/10.jpg" },
    { id: 4, title: "Kamar Mandi", description: "Kamar mandi bersih dengan shower", path: "/k2/7.jpg" },
    { id: 5, title: "Kamar Tidur", description: "Kamar tidur dengan pencahayaan alami", path: "/k2/4.jpg" },
    { id: 6, title: "vidio k2", path: "/k2/v2.mp4" },
  ],
  Denah: [
    { id: 1, title: "Denah Kontrakan", description: "Layout dan rancangan kontrakan", path: "/denah.jpg" },
  ],
};

const kontrakanInfo = {
  K1: {
    title: "Kontrakan K1",
    price: "Rp 450.000/bulan",
    rooms: "1 kamar tidur, 1 kamar mandi terpisah",
    features: ["lahan luas untuk mobil", "Taman depan", "Ruang keluarga luas", "Dapur modern"],
    location: "Jl. Tri Tunggal Jaya No. 12, Banjar Margo, Lampung",
    description: "Kontrakan keluarga dengan ruang lebih luas. Cocok untuk keluarga kecil atau pasangan. Lingkungan tenang dan aman dengan fasilitas lengkap. Lingkungan asri dengan ibu kontrakan dan tetangga ramah",
    status: "Sudah Terisi",
  },
  K2: {
    title: "Kontrakan K2",
    price: "Rp 450.000/bulan",
    rooms: "1 kamar tidur, 1 kamar mandi",
    features: ["lahan luas untuk mobil", "Ruang keluarga luas", "Dapur modern"],
    location: "Jl. Tri Tunggal Jaya No. 15, Banjar Margo, Lampung",
    description: "Kontrakan nyaman dengan layout yang efisien. Ideal untuk keluarga. Lingkungan asri dengan ibu kontrakan dan tetangga ramah.",
    status: "Kosong",
  },
  Denah: {
    title: "Denah Kontrakan",
    price: "",
    rooms: "",
    features: ["Layout kontrakan lengkap", "Pembagian ruangan", "Ukuran ruangan"],
    location: "",
    description: "Denah lengkap kontrakan untuk membantu Anda memvisualisasikan layout dan pembagian ruangan pada kontrakan kami.",
    status: "",
  },
};

export default function GalleryPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<KontrakanType>("K1");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev === 0 ? galleries[selected].length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev === galleries[selected].length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black py-10 px-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`mb-10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-2">
            {selected === "Denah" ? "Denah Kontrakan" : `Galeri Kontrakan ${selected}`}
          </h1>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-24 bg-blue-500 rounded"></div>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            {selected === "Denah" 
              ? "Lihat layout dan pembagian ruangan kontrakan kami" 
              : "Jelajahi berbagai sudut dan ruangan dari kontrakan kami yang nyaman dan modern"}
          </p>
        </div>

        {/* Tombol Pilih Kontrakan */}
        <div className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <button
            onClick={() => setSelected("K1")}
            className={`px-5 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all transform hover:scale-105 flex items-center ${
              selected === "K1"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 shadow"
            }`}
          >
            <Home className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            Kontrakan K1
          </button>
          
          <button
            onClick={() => setSelected("K2")}
            className={`px-5 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all transform hover:scale-105 flex items-center ${
              selected === "K2"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 shadow"
            }`}
          >
            <Home className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            Kontrakan K2
          </button>
          
          <button
            onClick={() => setSelected("Denah")}
            className={`px-5 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all transform hover:scale-105 flex items-center ${
              selected === "Denah"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 shadow"
            }`}
          >
            <Map className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            Denah Kontrakan
          </button>
        </div>

        {/* Info Panel */}
        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 md:p-6 mb-8 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <Info className="w-4 h-4 md:w-5 md:h-5 mr-2 text-blue-600" />
              {kontrakanInfo[selected].title}
            </h2>
            {kontrakanInfo[selected].price && (
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium px-3 py-1 rounded-full text-sm md:text-base w-fit">
                {kontrakanInfo[selected].price}
              </div>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-4">
            {kontrakanInfo[selected].description}
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm md:text-base">
            {kontrakanInfo[selected].features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {kontrakanInfo[selected].location && (
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-4">
              <strong>Lokasi:</strong> {kontrakanInfo[selected].location}
            </p>
          )}
          {kontrakanInfo[selected].status && (
            <p className={`text-sm md:text-base mt-2 font-semibold ${kontrakanInfo[selected].status === "Kosong" ? "text-green-600" : "text-red-600"}`}>
              Status: {kontrakanInfo[selected].status}
            </p>
          )}
        </div>

        {/* Galeri Foto */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {galleries[selected].map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] relative">
                {item.path.endsWith(".mp4") ? (
                  <video src={item.path} className="w-full h-full object-cover" muted autoPlay loop />
                ) : (
                  <div
                    style={{
                      backgroundImage: `url('${item.path}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
              </div>
              {/* Title and Description */}
              <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center p-2 md:p-4">
              <button
                onClick={closeLightbox}
                className="absolute top-2 md:top-4 right-2 md:right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="transition-opacity duration-300 max-w-full md:max-w-4xl max-h-full">
                <div className="relative aspect-video bg-gray-900 rounded overflow-hidden">
                  {galleries[selected][currentImageIndex].path.endsWith(".mp4") ? (
                    <video
                      src={galleries[selected][currentImageIndex].path}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                    />
                  ) : (
                    <img
                      src={galleries[selected][currentImageIndex].path}
                      alt={galleries[selected][currentImageIndex].title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tombol Kembali ke Menu Utama dengan Animasi */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => router.push("/")}
            className="group relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden"
          >
            <div className="absolute -left-4 w-16 h-16 rounded-full bg-blue-400 bg-opacity-30 transition-all duration-300 transform group-hover:scale-150"></div>
            <div className="absolute right-0 bottom-0 w-12 h-12 rounded-tl-full bg-blue-800 bg-opacity-20"></div>
            <span className="relative flex items-center gap-3 z-10">
              <Home className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-pulse" />
              <span className="text-sm md:text-base">Kembali ke Menu Utama</span>
              <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
