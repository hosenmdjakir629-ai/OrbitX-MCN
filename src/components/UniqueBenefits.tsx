import { motion } from 'motion/react';
import { Headset, Sparkles, LineChart } from 'lucide-react';

export default function UniqueBenefits() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
            >
              The OrbitX Advantage
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            >
              Why join the <span className="text-gradient-colorful italic font-serif">elite</span>?
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-xs text-sm leading-relaxed"
          >
            We don't just manage channels; we build digital empires. Here is what sets us apart from the rest of the industry.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Headset,
              title: 'Dedicated Support Team',
              description: 'Get 24/7 access to a personal channel manager and a team of YouTube experts who are always ready to help you troubleshoot, strategize, and grow.',
              color: 'text-orbit-pink',
            },
            {
              icon: Sparkles,
              title: 'Exclusive Tools',
              description: 'Unlock our proprietary suite of AI-driven analytics, SEO optimization tools, and thumbnail A/B testing platforms not available to the public.',
              color: 'text-orbit-cyan',
            },
            {
              icon: LineChart,
              title: 'Proven Track Record',
              description: 'Join a network that has successfully scaled thousands of channels, generating billions of views and maximizing revenue for creators worldwide.',
              color: 'text-orbit-orange',
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-colorful p-10 rounded-[40px] hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700" />
              
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${benefit.color} group-hover:scale-110 transition-transform duration-500`}>
                <benefit.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
