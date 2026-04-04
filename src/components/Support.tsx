import { Mail, MessageCircle, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export default function Support() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-zinc-50" id="support">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-600 font-bold text-sm tracking-widest uppercase mb-4 block"
          >
            {t('support.subtitle')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight"
          >
            {t('support.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp Support */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl hover:shadow-purple-500/5 transition-all group"
          >
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t('support.whatsapp.title')}</h3>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              {t('support.whatsapp.description')}
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-zinc-500">
                <Phone size={18} className="text-emerald-500" />
                <span className="font-medium">+8801927694437</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <Clock size={18} className="text-emerald-500" />
                <span className="font-medium">{t('support.whatsapp.responseTime')}</span>
              </div>
            </div>
            <a 
              href="https://wa.me/8801927694437" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-emerald-500 text-white font-bold py-4 rounded-2xl hover:bg-emerald-600 transition-all gap-2"
            >
              <MessageCircle size={20} />
              {t('support.whatsapp.button')}
            </a>
          </motion.div>

          {/* Email Support */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 hover:shadow-xl hover:shadow-purple-500/5 transition-all group"
          >
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t('support.email.title')}</h3>
            <p className="text-zinc-600 mb-8 leading-relaxed">
              {t('support.email.description')}
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-zinc-500">
                <Mail size={18} className="text-purple-500" />
                <span className="font-medium">support@orbitxmcn.com</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500">
                <Clock size={18} className="text-purple-500" />
                <span className="font-medium">{t('support.email.responseTime')}</span>
              </div>
            </div>
            <a 
              href="mailto:support@orbitxmcn.com" 
              className="inline-flex items-center justify-center w-full bg-purple-600 text-white font-bold py-4 rounded-2xl hover:bg-purple-700 transition-all gap-2"
            >
              <Mail size={20} />
              {t('support.email.button')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
