import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-12 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-bold text-xl tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">OrbitX MCN</p>
          <p className="text-zinc-500 text-sm">© 2026 OrbitX MCN. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="https://www.facebook.com/share/1Darg8BtFF/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-500 transition-colors" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-zinc-400 hover:text-purple-400 transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-zinc-400 hover:text-pink-400 transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com/@orbitxmcn?si=rnWZIkYFchCx9HfE" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-red-400 transition-colors" aria-label="YouTube">
            <Youtube size={20} />
          </a>
        </div>
        <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
