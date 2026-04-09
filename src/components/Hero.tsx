import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play, Users, Globe } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent pt-20">
      {/* Background Atmosphere */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-orbit-pink/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orbit-cyan/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05)_0%,transparent_70%)]" />
      </motion.div>

      {/* Navigation / Logo */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orbit-pink via-orbit-purple to-orbit-cyan p-[1px]">
            <div className="w-full h-full bg-orbit-black rounded-[11px] flex items-center justify-center overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/a-/ALV-UjWufNRZwo6-tyucp2_FHTKH_l4ALZbK_MxsZQo0FyUn5wVw6gI=s360-w360-h360" 
                alt="OrbitX Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-white">OrbitX MCN</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Creators</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#join-form" className="bg-gradient-to-r from-orbit-pink to-orbit-purple text-white px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all">Join Now</a>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            style={{ y: yText, opacity: opacityText }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-orbit-cyan mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orbit-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orbit-cyan"></span>
              </span>
              Official YouTube Certified Network
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 text-white">
              {t('hero.title').split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-4">
                  {word === 'OrbitX' ? <span className="text-gradient-colorful">OrbitX</span> : word}
                </span>
              ))}
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a 
                href="#join-form"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-orbit-pink via-orbit-purple to-orbit-blue text-white font-bold px-8 py-4 rounded-2xl text-lg inline-flex items-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
              >
                {t('hero.joinButton')}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-8 py-4 rounded-2xl border border-white/10 text-white font-bold flex items-center gap-3 transition-all"
              >
                <Play className="w-5 h-5 fill-white" />
                Watch Demo
              </motion.button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-white/5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-orbit-black overflow-hidden bg-zinc-800">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Creator" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-white">10,000+ Creators</p>
                <p className="text-xs text-zinc-500">Growing with OrbitX every day</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-colorful rounded-[40px] p-8 aspect-square flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orbit-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Revenue Growth</p>
                  <h3 className="text-4xl font-display font-bold text-gradient-colorful">+240%</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-orbit-pink/20 flex items-center justify-center text-orbit-pink">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              
              <div className="flex-grow flex items-center justify-center py-12">
                <div className="w-full h-32 flex items-end gap-2">
                  {[40, 60, 45, 70, 55, 90, 80, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="flex-grow bg-gradient-to-t from-orbit-pink via-orbit-purple to-orbit-cyan rounded-t-lg opacity-80"
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-end relative z-10">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Global Reach</p>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-orbit-cyan" />
                    <span className="text-lg font-bold">190+ Countries</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Status</p>
                  <p className="text-orbit-cyan font-bold">Active</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orbit-cyan/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orbit-pink/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
