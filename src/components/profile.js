import React from 'react';

export default function Profile() {
  return (
    <section id="profile" className="py-24 bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(219, 39, 119) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 mb-4">
              Profil Saya
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-400/50"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-gradient-to-br from-blue-900/80 via-blue-800/80 to-blue-900/80 backdrop-blur-md rounded-2xl border border-cyan-300/20 p-8 md:p-10 shadow-2xl">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
              {/* Profile Image with Shell Frame */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/20 via-teal-300/20 to-cyan-300/20 rounded-full blur-xl transform transition-transform duration-500 group-hover:scale-110"></div>
                <div className="relative">
                  <div className="w-40 h-40 rounded-full border-4 border-cyan-300/30 overflow-hidden backdrop-blur-sm p-1">
                    <div className="w-full h-full rounded-full overflow-hidden border border-cyan-300/20">
                      <img 
                        src="https://avatars.githubusercontent.com/haniaulyy" 
                        alt="Profile"
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  {/* Decorative Shell Elements */}
                  <div className="absolute -inset-1 border-4 border-cyan-300/20 rounded-full transform rotate-45"></div>
                  <div className="absolute -inset-2 border-4 border-teal-300/10 rounded-full transform -rotate-45"></div>
                </div>
              </div>
              
              {/* Basic Info */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-teal-200 to-cyan-300 text-transparent bg-clip-text mb-3">
                  Hanifah Aulya Nur Aini
                </h3>
                <p className="text-lg text-cyan-100/90 mb-3 font-medium">Frontend Developer & UI/UX Designer</p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-200/60">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Probolinggo, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="grid md:grid-cols-2 gap-10 mt-12">
              {/* Personal Info */}
              <div className="bg-blue-950/30 rounded-xl p-6 backdrop-blur-sm border border-cyan-300/10 transform transition-all duration-300 hover:shadow-lg hover:shadow-cyan-300/5 hover:border-cyan-300/20">
                <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-200 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Informasi Pribadi
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-blue-900/30">
                    <span className="text-cyan-200/70 w-28 text-sm">Usia</span>
                    <span className="text-white/90 text-sm font-medium">16 Tahun</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-blue-900/30">
                    <span className="text-cyan-200/70 w-28 text-sm">Pendidikan</span>
                    <span className="text-white/90 text-sm font-medium">SMK Negeri 1 Probolinggo</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-blue-900/30">
                    <span className="text-cyan-200/70 w-28 text-sm">Jurusan</span>
                    <span className="text-white/90 text-sm font-medium">Rekayasa Perangkat Lunak</span>
                  </div>
                  <div className="flex items-center p-2 rounded-lg transition-colors duration-300 hover:bg-blue-900/30">
                    <span className="text-cyan-200/70 w-28 text-sm">Status</span>
                    <span className="text-white/90 text-sm font-medium">Pelajar Kelas 11</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-blue-950/30 rounded-xl p-6 backdrop-blur-sm border border-cyan-300/10 transform transition-all duration-300 hover:shadow-lg hover:shadow-cyan-300/5 hover:border-cyan-300/20">
                <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-200 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Keahlian
                </h4>
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-cyan-200/70">Frontend Development</span>
                      <span className="text-sm font-medium text-cyan-300">75%</span>
                    </div>
                    <div className="h-2 bg-blue-950/50 rounded-full overflow-hidden p-0.5">
                      <div className="h-full w-[85%] bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 rounded-full 
                                    animate-shimmer transform transition-all duration-300 group-hover:scale-105"></div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-cyan-200/70">UI/UX Design</span>
                      <span className="text-sm font-medium text-cyan-300">50%</span>
                    </div>
                    <div className="h-2 bg-blue-950/50 rounded-full overflow-hidden p-0.5">
                      <div className="h-full w-[80%] bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 rounded-full 
                                    animate-shimmer transform transition-all duration-300 group-hover:scale-105"></div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-cyan-200/70">HTML</span>
                      <span className="text-sm font-medium text-cyan-300">85%</span>
                    </div>
                    <div className="h-2 bg-blue-950/50 rounded-full overflow-hidden p-0.5">
                      <div className="h-full w-[85%] bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 rounded-full 
                                    animate-shimmer transform transition-all duration-300 group-hover:scale-105"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="mt-12 pt-8 border-t border-cyan-300/10">
              <div className="flex justify-center gap-6">
                <a 
                  href="https://github.com/haniaulyy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-blue-950/30 p-3 rounded-lg border border-cyan-300/10 transform transition-all duration-300 
                              group-hover:scale-110 group-hover:border-cyan-300/30 group-hover:shadow-lg group-hover:shadow-cyan-300/20">
                    <svg className="w-6 h-6 text-cyan-300/70 group-hover:text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                    </svg>
                  </div>
                </a>
                <a 
                  href="#"
                  className="group"
                >
                  <div className="bg-blue-950/30 p-3 rounded-lg border border-cyan-300/10 transform transition-all duration-300 
                              group-hover:scale-110 group-hover:border-cyan-300/30 group-hover:shadow-lg group-hover:shadow-cyan-300/20">
                    <svg className="w-6 h-6 text-cyan-300/70 group-hover:text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}