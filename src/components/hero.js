import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 to-amber-700 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Background dengan efek overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-amber-900 bg-opacity-70"></div>
        
        {/* Konten Hero */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            Selamat Datang di Kerajaanku
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Saya adalah seorang pengembang perangkat lunak muda dengan jiwa seni dan semangat petualangan,
            membangun karya layaknya seorang pelukis istana dalam dunia digital.
          </p>
          <a 
            href="#projects" 
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Lihat Karya Saya
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
    </div>
  );
}