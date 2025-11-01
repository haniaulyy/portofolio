import { Mail, Github } from "lucide-react";

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
            href="mailto:aulyaaini281@gmail.com" 
            className="group flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-100 to-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Gmail</h3>
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
            href="https://instagram.com/hana_aulyy" 
            className="group flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-100 to-purple-100 mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Instagram</h3>
            <p className="text-gray-600">@hana_aulyy</p>
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
