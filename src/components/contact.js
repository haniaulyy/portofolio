import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-rose-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hubungi Saya
          </h2>
          <p className="text-gray-600 text-lg">
            Ingin berkolaborasi atau sekadar menyapa? Hubungi saya melalui media berikut:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a 
            href="mailto:hanifah@example.com" 
            className="group flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-100 to-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">aulyaaini281@gmail.com</p>
          </a>

          <a 
            href="https://github.com" 
            className="group flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-100 to-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Github className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
            <p className="text-gray-600">@haniaulyy</p>
          </a>

          <a 
            href="https://linkedin.com" 
            className="group flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-100 to-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
            <p className="text-gray-600">Hanifah Aulya</p>
          </a>
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
          >
            Kirim Pesan
          </a>
        </div>
      </div>
    </section>
  );
}
