import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-amber-800 mb-6">Hubungi Saya</h3>
      <p className="text-lg mb-6">
        Ingin berkolaborasi atau sekadar menyapa? Hubungi saya melalui media berikut:
      </p>
      <div className="flex justify-center gap-6 text-amber-800">
        <a href="mailto:hanifah@example.com" className="hover:text-amber-600"><Mail size={30} /></a>
        <a href="https://github.com" className="hover:text-amber-600"><Github size={30} /></a>
        <a href="https://linkedin.com" className="hover:text-amber-600"><Linkedin size={30} /></a>
      </div>
    </section>
  );
}
