import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <span className="text-white font-bold">H</span>
          </div>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hanifah Aulya
          </h1>
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#profile"
              className="text-gray-600 hover:text-pink-500 font-medium text-sm transition-colors duration-300 px-2 py-1 rounded-md hover:bg-pink-50"
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-600 hover:text-pink-500 font-medium text-sm transition-colors duration-300 px-2 py-1 rounded-md hover:bg-pink-50"
            >
              Pengalaman
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-600 hover:text-pink-500 font-medium text-sm transition-colors duration-300 px-2 py-1 rounded-md hover:bg-pink-50"
            >
              Karya
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="ml-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hubungi Saya
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
