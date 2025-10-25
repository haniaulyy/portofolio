export default function Projects() {
  const data = [
    { title: "Sistem K3LH Sekolah", desc: "Aplikasi penitipan & pengambilan barang berbasis web." },
    { title: "IoT Lampu Hotel", desc: "Proyek kontrol lampu otomatis menggunakan kartu RFID." },
    { title: "Website Pramuka", desc: "Portal kegiatan Pramuka SMK dengan tampilan elegan." },
  ];

  return (
    <section id="projects" className="py-16 bg-amber-200 px-8">
      <h3 className="text-3xl font-bold text-amber-900 text-center mb-10">Karya Pilihan</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((proj, idx) => (
          <div key={idx} className="bg-amber-50 p-6 rounded-2xl shadow-lg border border-amber-400 hover:shadow-2xl transition-all">
            <h4 className="text-xl font-semibold text-amber-800 mb-2">{proj.title}</h4>
            <p className="text-gray-700">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
