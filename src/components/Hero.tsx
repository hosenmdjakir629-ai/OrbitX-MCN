import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 px-6 relative overflow-hidden">
      <div className="absolute top-6 left-6 flex items-center gap-2">
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
      <div className="max-w-5xl mx-auto text-center">
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
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="bg-white text-purple-900 font-bold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 mx-auto transition-all"
        >
          {t('hero.joinButton')}
        </motion.a>
      </div>
    </section>
  );
}
