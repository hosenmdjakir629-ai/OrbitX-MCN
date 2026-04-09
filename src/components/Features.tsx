import { ShieldCheck, Music, Users, DollarSign, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  { icon: DollarSign, title: 'Brand Deals & Sponsorships', desc: 'Work directly with brands and get paid promotions.', color: 'text-yellow-400' },
  { icon: ShieldCheck, title: 'Content ID Protection', desc: 'Protect your videos from copyright theft.', color: 'text-emerald-400' },
  { icon: Music, title: 'Premium Production Resources', desc: 'Access music, sound effects, and creator tools.', color: 'text-rose-400' },
  { icon: Users, title: 'Creator Collaboration', desc: 'Collaborate with other creators and grow together.', color: 'text-blue-400' },
  { icon: Zap, title: 'Monetization & Payment Support', desc: 'Fast and secure payments for creators.', color: 'text-amber-400' },
  { icon: TrendingUp, title: 'YouTube Growth & SEO Guidance', desc: 'Get expert help to grow your channel faster.', color: 'text-orbit-purple' },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
            >
              Platform Features
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            >
              Everything you need to <span className="text-gradient-colorful">scale</span> your channel.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-xs text-sm leading-relaxed"
          >
            We provide the tools, resources, and expertise to help you focus on what you do best: creating content.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 border-l border-t border-white/5">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 border-r border-b border-white/5 hover:bg-white/[0.05] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-orbit-pink to-orbit-cyan group-hover:h-full transition-all duration-500" />
              
              <div className={`mb-8 p-4 rounded-2xl bg-white/5 inline-block ${f.color} group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.05)]`}>
                <f.icon size={28} />
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-orbit-cyan transition-colors">
                {f.title}
              </h3>
              
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                {f.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
