import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(219, 39, 119, 0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Profile Image */}
        <div className="relative z-10 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="w-48 h-48 rounded-full border-4 border-white bg-white overflow-hidden shadow-2xl mb-6 mx-auto relative">
              <img 
                src="https://avatars.githubusercontent.com/haniaulyy" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Konten Hero */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
            Hanifah Aulya
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-normal text-gray-600">
            Haloo! Saya Hanifah Aulya, pelajar SMKN 1 Probolinggo dengan Kopetensi Keahlian Pengembangan Perangkat Lunak dan Gim (PPLG). 
            Perjalanan awal saya dimulai dari ketertarikan pada psikologi, namun pesatnya perkembangan teknologi membawa saya ke dunia pengembangan software. 
            Dengan semangat belajar yang tinggi, saya terus mengembangkan keterampilan di bidang ini.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <p className="text-pink-500 font-medium">Frontend Development</p>
            </div>
            <div className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <p className="text-purple-500 font-medium">UI/UX Design</p>
            </div>
            <div className="px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
              <p className="text-rose-500 font-medium">Creative Solutions</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-24">
            <a 
              href="#profile" 
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium px-8 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Lihat Profile Saya
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll untuk melihat</span>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
