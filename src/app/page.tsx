'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Star, Phone, MapPin, Home, Info, Check, Menu, X, ArrowRight } from 'lucide-react';

export default function RentalPromotion() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverK1, setHoverK1] = useState(false);
  const [hoverK2, setHoverK2] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen relative bg-gray-900 font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{
            backgroundImage: "url('/k2/3.jpg')",
            backgroundSize: "cover",
            filter: "brightness(0.4)"
          }}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black/80 z-0"></div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/70 backdrop-blur-md">
        <div className="flex justify-between items-center p-3">
          <span className="text-lg font-bold text-white flex items-center">
            Kontrakan <span className="text-blue-400 ml-1">AA</span>
          </span>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-blue-600/20 text-white focus:outline-none"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-black/90 backdrop-blur-lg p-3 animate-slideDown">
            <div className="space-y-2">
              <button onClick={() => router.push('/gallery?k=K1')} 
                className="w-full text-left py-2 px-3 rounded-lg bg-blue-600/20 text-white flex items-center hover:bg-blue-600/40 transition-colors">
                <Home className="w-4 h-4 mr-2" />
                <span className="text-sm">Kontrakan K1</span>
              </button>
              <button onClick={() => router.push('/gallery?k=K2')} 
                className="w-full text-left py-2 px-3 rounded-lg bg-green-600/20 text-white flex items-center hover:bg-green-600/40 transition-colors">
                <Home className="w-4 h-4 mr-2" />
                <span className="text-sm">Kontrakan K2</span>
              </button>
              <button className="w-full text-left py-2 px-3 rounded-lg bg-purple-600/20 text-white flex items-center hover:bg-purple-600/40 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">Hubungi Kami</span>
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-3 pt-20 md:pt-16 pb-12 flex flex-col items-center">
        {/* Header with Animation */}
        <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-2">
            Kontrakan <span className="text-blue-400">AA</span>
          </h1>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          <p className="text-base sm:text-xl text-blue-100 text-center max-w-2xl mx-auto mb-6 sm:mb-10 px-2">
            Hunian nyaman, strategis dan terjangkau di Tri Tunggal Jaya, Banjar Margo, Lampung
          </p>
        </div>
        
        {/* Featured Card */}
        <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 max-w-4xl w-full mb-6 sm:mb-12 shadow-2xl border border-white/20 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col md:flex-row gap-5 md:gap-8">
            {/* Image Placeholder */}
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
              <div className="relative h-52 sm:h-72 md:h-full bg-gray-700 rounded-lg overflow-hidden">
                <div style={{
                  backgroundImage: "url('k2/3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%"
                }} />
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Tersedia Sekarang!
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 mr-0.5" />
                  <Star className="w-4 h-4 text-yellow-400 mr-0.5" />
                  <Star className="w-4 h-4 text-yellow-400 mr-0.5" />
                  <Star className="w-4 h-4 text-yellow-400 mr-0.5" />
                  <Star className="w-4 h-4 text-yellow-400 mr-0.5" />
                  <span className="text-gray-300 ml-2 text-xs">Kualitas Terbaik</span>
                </div>
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Kontrakan Modern & Nyaman</h2>
                <div className="space-y-2 sm:space-y-4 mb-4">
                  <div className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-xs sm:text-base">Bangunan kokoh dengan desain modern</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-xs sm:text-base">Lokasi strategis, dekat dengan fasilitas umum</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-xs sm:text-base">Lingkungan aman dan nyaman</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-xs sm:text-base">Harga terjangkau dengan kualitas terbaik</p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg mx-auto mt-8">
                <button
                  onClick={() => router.push('/gallery?k=K1')}
                  onMouseEnter={() => setHoverK1(true)}
                  onMouseLeave={() => setHoverK1(false)}
                  className="relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 sm:px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden group w-full"
                >
                  <div className="absolute -left-4 w-16 h-16 rounded-full bg-blue-400 bg-opacity-30 transition-all duration-300 transform group-hover:scale-150"></div>
                  <div className="absolute right-0 bottom-0 w-12 h-12 rounded-tl-full bg-blue-800 bg-opacity-20"></div>
                  <span className="relative flex items-center gap-3 z-10">
                    <Home className={`w-6 h-6 ${hoverK1 ? "animate-pulse" : ""}`} />
                    <span className="text-base sm:text-lg">Lihat Kontrakan K1</span>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoverK1 ? "translate-x-1" : ""}`} />
                  </span>
                </button>
                
                <button
                  onClick={() => router.push('/gallery?k=K2')}
                  onMouseEnter={() => setHoverK2(true)}
                  onMouseLeave={() => setHoverK2(false)}
                  className="relative bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-6 sm:px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden group w-full"
                >
                  <div className="absolute -left-4 w-16 h-16 rounded-full bg-green-400 bg-opacity-30 transition-all duration-300 transform group-hover:scale-150"></div>
                  <div className="absolute right-0 bottom-0 w-12 h-12 rounded-tl-full bg-green-800 bg-opacity-20"></div>
                  <span className="relative flex items-center gap-3 z-10">
                    <Home className={`w-6 h-6 ${hoverK2 ? "animate-pulse" : ""}`} />
                    <span className="text-base sm:text-lg">Lihat Kontrakan K2</span>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoverK2 ? "translate-x-1" : ""}`} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Cards - Changed to grid-cols-2 for mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 w-full max-w-4xl mb-6 sm:mb-12">
          {/* Card 1 */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-white/10 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-blue-600/20 p-2 sm:p-3 rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mb-3">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Lokasi Strategis</h3>
            <p className="text-gray-300 text-xs sm:text-base">Terletak di area yang mudah diakses, dekat dengan pasar, warung, sekolah, dan fasilitas publik.</p>
          </div>
          
          {/* Card 2 */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-white/10 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-green-600/20 p-2 sm:p-3 rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mb-3">
              <Home className="w-4 h-4 sm:w-6 sm:h-6 text-green-400" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Kualitas Terbaik</h3>
            <p className="text-gray-300 text-xs sm:text-base">Dibangun dengan material berkualitas, desain yang nyaman, dan perawatan rutin.</p>
          </div>
          
          {/* Card 3 - Now spans 2 columns on mobile too */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-white/10 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} col-span-2 md:col-span-1`}>
            <div className="bg-purple-600/20 p-2 sm:p-3 rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center mb-3">
              <Info className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400" />
            </div>
            <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">Harga Terjangkau</h3>
            <p className="text-gray-300 text-xs sm:text-base">Hanya Rp450.000 per bulan nikmati hunian berkualitas dengan harga yang bersahabat untuk keluarga Anda.</p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 sm:p-8 w-full max-w-4xl text-center shadow-xl transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">Tertarik? Hubungi Kami Sekarang!</h2>
          <p className="text-blue-100 text-xs sm:text-base mb-4 sm:mb-6">Jangan lewatkan kesempatan untuk mendapatkan hunian nyaman dengan harga terbaik</p>
          <a href="tel:+6289532069508" className="inline-flex bg-white text-blue-700 hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold items-center justify-center mx-auto transition-transform hover:scale-105">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-base">Hubungi: 0895-3206-95308</span>
          </a>
        </div>
        
        {/* Floating Contact Button (Mobile Only) */}
        <a href="tel:+6289532069508" className="md:hidden fixed bottom-4 right-4 z-30 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-xl transition-transform hover:scale-105 animate-pulse">
          <Phone className="w-5 h-5" />
        </a>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 2s infinite ease-in-out;
        }
      `}</style>
    </main>
  );
}