import { ShieldAlert, Copyright, Scale, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';

const policies = [
  {
    icon: Copyright,
    title: 'YouTube Content ID',
    desc: 'Automatic scanning and claiming of re-uploads across YouTube. We register your original content in the Content ID system to ensure you get credited.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShieldAlert,
    title: 'Cross-Platform Takedowns',
    desc: 'Our legal team issues DMCA takedowns for piracy on other platforms like Facebook, TikTok, and Instagram to protect your brand.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Scale,
    title: 'Dispute Resolution',
    desc: 'We handle false copyright strikes and claims against your channel. Our experts negotiate and resolve disputes so you can focus on creating.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: RefreshCcw,
    title: 'Revenue Recovery',
    desc: 'Instead of just taking down stolen videos, we can monetize them on your behalf and redirect the stolen revenue back into your pocket.',
    color: 'from-emerald-500 to-teal-500'
  }
];

export default function CopyrightProtection() {
  return (
    <section className="py-20 px-6 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          >
            Complete Copyright Protection
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Your content is your most valuable asset. OrbitX MCN provides enterprise-grade protection to ensure nobody steals your hard work.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col sm:flex-row gap-6 items-start"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: [0.5, 1.2, 1], opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`shrink-0 p-4 rounded-2xl bg-gradient-to-br ${policy.color} text-white shadow-lg`}
              >
                <policy.icon size={32} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-zinc-100">{policy.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{policy.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
