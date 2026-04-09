import { ShieldAlert, Copyright, Scale, RefreshCcw, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function CopyrightProtection() {
  return (
    <section id="copyright" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
            >
              Legal & Protection
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            >
              Your content, <span className="text-gradient-colorful italic font-serif">protected</span> everywhere.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-xs text-sm leading-relaxed"
          >
            OrbitX MCN provides enterprise-grade protection to ensure nobody steals your hard work or revenue.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 border-l border-t border-white/5">
          {[
            {
              icon: Copyright,
              title: 'YouTube Content ID',
              desc: 'Automatic scanning and claiming of re-uploads across YouTube. We register your original content in the Content ID system to ensure you get credited.',
              color: 'text-orbit-cyan'
            },
            {
              icon: ShieldAlert,
              title: 'Cross-Platform Takedowns',
              desc: 'Our legal team issues DMCA takedowns for piracy on other platforms like Facebook, TikTok, and Instagram to protect your brand.',
              color: 'text-orbit-pink'
            },
            {
              icon: Scale,
              title: 'Dispute Resolution',
              desc: 'We handle false copyright strikes and claims against your channel. Our experts negotiate and resolve disputes so you can focus on creating.',
              color: 'text-orbit-orange'
            },
            {
              icon: RefreshCcw,
              title: 'Revenue Recovery',
              desc: 'Instead of just taking down stolen videos, we can monetize them on your behalf and redirect the stolen revenue back into your pocket.',
              color: 'text-emerald-400'
            }
          ].map((policy, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-12 border-r border-b border-white/5 hover:bg-white/[0.05] transition-colors relative overflow-hidden glass-colorful"
            >
              <div className="flex items-start gap-8">
                <div className={`p-4 rounded-2xl bg-white/5 ${policy.color} group-hover:scale-110 transition-transform duration-500`}>
                  <policy.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-orbit-pink transition-colors">
                    {policy.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8">
                    {policy.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-orbit-pink uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
