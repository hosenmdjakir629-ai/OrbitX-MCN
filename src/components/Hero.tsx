import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-indigo-950 via-purple-950 to-zinc-950 text-white py-20 px-6 relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -150, 150, 0],
            y: [0, 150, -150, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 200, -200, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-pink-600/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
        <a href="https://www.facebook.com/share/1Ao6JrsC9Z/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://lh3.googleusercontent.com/a-/ALV-UjWufNRZwo6-tyucp2_FHTKH_l4ALZbK_MxsZQo0FyUn5wVw6gI=s360-w360-h360" 
            alt="OrbitX MCN Logo" 
            className="w-10 h-10 object-contain"
            referrerPolicy="no-referrer"
          />
        </a>
        <span className="font-bold text-xl tracking-tighter">OrbitX MCN</span>
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-emerald-300 to-cyan-300"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-200 mb-10"
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-zinc-100 mb-10"
        >
          {(t('hero.features', { returnObjects: true }) as string[]).map((item, i) => (
            <motion.span 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
            >
              ✔ {item}
            </motion.span>
          ))}
        </motion.div>
        <motion.a 
          href="#join-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 20px rgba(250, 204, 21, 0.5)", "0 0 0px rgba(250, 204, 21, 0)"]
          }}
          transition={{ 
            opacity: { delay: 0.6 },
            y: { delay: 0.6 },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 30px rgba(250, 204, 21, 0.8)" 
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 text-zinc-900 font-extrabold px-10 py-5 rounded-2xl text-xl inline-flex items-center justify-center gap-3 mx-auto transition-all group"
        >
          {t('hero.joinButton')}
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}
