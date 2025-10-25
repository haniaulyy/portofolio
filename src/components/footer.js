import { useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-amber-900 text-amber-50 py-4 text-center border-t border-amber-700">
      <p>© {year} Hanifah’s Royal Portfolio — Dibangun dengan 👑 React + Tailwind</p>
    </footer>
  );
}
