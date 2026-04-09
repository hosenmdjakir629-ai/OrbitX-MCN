import { Facebook, Instagram, Twitter, Youtube, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-24 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orbit-pink to-transparent opacity-50" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orbit-pink via-orbit-purple to-orbit-blue p-[1px]">
                <div className="w-full h-full bg-orbit-black rounded-[7px] flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/a-/ALV-UjWufNRZwo6-tyucp2_FHTKH_l4ALZbK_MxsZQo0FyUn5wVw6gI=s360-w360-h360" 
                    alt="OrbitX Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">OrbitX MCN</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              The premier YouTube Multi-Channel Network for creators who demand more. Growth, protection, and premium resources.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/share/1Darg8BtFF/', color: 'hover:text-blue-500' },
                { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
                { icon: Youtube, href: 'https://youtube.com/@orbitxmcn?si=rnWZIkYFchCx9HfE', color: 'hover:text-red-500' }
              ].map((social, i) => (
                <a key={i} href={social.href} className={`w-10 h-10 rounded-full glass-colorful flex items-center justify-center text-zinc-400 ${social.color} hover:border-white/20 transition-all`}>
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-8 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="space-y-4">
              {['Features', 'Creators', 'Pricing', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-zinc-500 hover:text-orbit-pink text-sm transition-colors flex items-center gap-2 group">
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-white mb-8 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-6">
              <li>
                <a href="mailto:support.orbitxmcn.digital@gmail.com" className="group block">
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Email Us</p>
                  <div className="flex items-center gap-2 text-zinc-400 group-hover:text-orbit-pink transition-colors">
                    <Mail size={16} />
                    <span className="text-sm">support.orbitxmcn.digital@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/8801927694437" target="_blank" rel="noopener noreferrer" className="group block">
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">WhatsApp</p>
                  <div className="flex items-center gap-2 text-zinc-400 group-hover:text-emerald-400 transition-colors">
                    <MessageCircle size={16} />
                    <span className="text-sm">+8801927694437</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-display font-bold text-white mb-8 uppercase tracking-widest text-xs">Join the Network</h4>
            <p className="text-zinc-500 text-sm mb-6">Ready to take your channel to the next level?</p>
            <Link to="/payment" className="inline-flex items-center gap-2 bg-gradient-to-r from-orbit-pink to-orbit-purple text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all text-sm">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <p className="text-zinc-600 text-xs">© 2026 OrbitX MCN. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-zinc-600 hover:text-white text-xs transition-colors">Terms</Link>
              <a href="#" className="text-zinc-600 hover:text-white text-xs transition-colors">Privacy</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Powered by</p>
            <span className="text-orbit-pink font-display font-bold tracking-tighter">YouTube Certified</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

import { ArrowRight } from 'lucide-react';
