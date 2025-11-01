import React from 'react';

export default function Projects() {
  const data = [
    {
      title: "ACP #1",
      desc: "Sertifikasi ACP 1 - Hardware Fundamental.",
      tech: ["Hardware", "Produk Axioo", "Spesifikasi Teknologi"],
      image: "/images/sertifikat.png"
    },
    {
      title: "IoT Lampu Hotel",
      desc: "Proyek kontrol lampu otomatis menggunakan kartu RFID.",
      tech: ["Arduino", "RFID", "IoT"],
      image: "/images/iot.jpg"
    },
    {
      title: "Website Sekolah",
      desc: "Proyek membuat tampilan sebuah website sekolah menggunakan html dan notedpluss.",
      tech: ["html", "php", "notedpluss"],
      image: "/images/SMKN 1.webp"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projek Saya
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kumpulan proyek terbaik yang telah saya kerjakan dengan penuh dedikasi
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-pink-500 hover:text-purple-500 transition-colors"
                >
                  Lihat Detail
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
          >
            Lihat Semua Karya
          </a>
        </div>
      </div>
    </section>
  );
}
