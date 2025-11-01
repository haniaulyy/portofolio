import { useState } from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 py-8 border-t border-pink-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Made with</span>
            <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
            <span className="text-gray-600">using</span>
            <span className="font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              React + Tailwind
            </span>
          </div>
          
          <p className="text-gray-600 text-sm">
            © {year} Hanifah Aulya. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Privacy Policy</a>
            <span className="text-gray-400">•</span>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
