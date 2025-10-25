export default function Navbar() {
  return (
    <nav className="bg-amber-900 text-amber-50 py-4 shadow-lg fixed w-full top-0 z-50 border-b border-amber-700">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo / Judul */}
        <h1 className="text-2xl font-bold tracking-wide font-serif">
          👑 Urlovynauve’s Kingdom
        </h1>

        {/* Navigasi */}
        <ul className="flex gap-8 font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-yellow-300 transition-all"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-yellow-300 transition-all"
            >
              Karya
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-yellow-300 transition-all"
            >
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
