import { Mail, MessageCircle, Phone, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Support() {
  const { t } = useTranslation();

  return (
    <section id="support" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.03)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
          >
            {t('support.subtitle')}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            We're here to <span className="text-gradient-colorful">help</span>.
          </motion.h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Our dedicated support team is available around the clock to assist you with any questions or technical issues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* WhatsApp Support */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-colorful p-10 rounded-[40px] border-white/5 hover:bg-white/[0.05] transition-all group"
          >
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <MessageCircle className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">{t('support.whatsapp.title')}</h3>
            <p className="text-zinc-300 mb-8 leading-relaxed text-sm">
              {t('support.whatsapp.description')}
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-zinc-400">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={14} className="text-emerald-500" />
                </div>
                <span className="font-bold text-sm text-zinc-200">+8801927694437</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Clock size={14} className="text-emerald-500" />
                </div>
                <span className="font-bold text-sm text-zinc-200">{t('support.whatsapp.responseTime')}</span>
              </div>
            </div>
            <a 
              href="https://wa.me/8801927694437" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-emerald-500 text-white font-bold py-4 rounded-2xl hover:bg-emerald-600 transition-all gap-3 group/btn"
            >
              <MessageCircle size={20} />
              {t('support.whatsapp.button')}
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Email Support */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-colorful p-10 rounded-[40px] border-white/5 hover:bg-white/[0.05] transition-all group"
          >
            <div className="w-16 h-16 bg-orbit-pink/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Mail className="w-8 h-8 text-orbit-pink" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">{t('support.email.title')}</h3>
            <p className="text-zinc-300 mb-8 leading-relaxed text-sm">
              {t('support.email.description')}
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 text-zinc-400">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail size={14} className="text-orbit-pink" />
                </div>
                <span className="font-bold text-sm text-zinc-200">support.orbitxmcn.digital@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Clock size={14} className="text-orbit-pink" />
                </div>
                <span className="font-bold text-sm text-zinc-200">{t('support.email.responseTime')}</span>
              </div>
            </div>
            <a 
              href="mailto:support.orbitxmcn.digital@gmail.com" 
              className="inline-flex items-center justify-center w-full bg-gradient-to-r from-orbit-pink to-orbit-purple text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-all gap-3 group/btn"
            >
              <Mail size={20} />
              {t('support.email.button')}
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
