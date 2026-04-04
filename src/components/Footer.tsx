import { Facebook, Instagram, Twitter, Youtube, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16 px-6 border-t border-zinc-800 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-bold text-2xl tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">OrbitX MCN</p>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Empowering creators to reach their full potential on YouTube with premium resources and growth support.
            </p>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-zinc-200 mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:support@orbitxmcn.com" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-purple-400 transition-colors group">
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">support@orbitxmcn.com</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/8801927694437" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-zinc-400 hover:text-emerald-400 transition-colors group">
                  <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+8801927694437</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-zinc-200 mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-6">
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
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs">© 2026 OrbitX MCN. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <Link to="/terms" className="text-zinc-500 hover:text-white text-xs transition-colors">
              Terms & Conditions
            </Link>
            <a href="#" className="text-zinc-500 hover:text-white text-xs transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
