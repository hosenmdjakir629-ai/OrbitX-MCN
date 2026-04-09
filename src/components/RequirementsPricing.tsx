import { motion } from 'motion/react';
import { CheckCircle2, Zap, ShieldCheck, Users, Globe, DollarSign, ArrowRight } from 'lucide-react';

export default function RequirementsPricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(236,72,153,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
          >
            Join the Network
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Simple requirements. <span className="text-gradient-colorful">Unlimited</span> growth.
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-colorful p-12 rounded-[40px] border-white/5 flex flex-col"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8">Join Requirements</h3>
            <div className="space-y-6 flex-grow">
              {[
                { text: '1,000+ Subscribers', desc: 'A baseline for serious creators' },
                { text: 'Original Content', desc: 'You must own the rights to your work' },
                { text: 'No Active Strikes', desc: 'Clean standing with YouTube' },
                { text: 'Monetized Channel', desc: 'Ready to scale your revenue' }
              ].map((req, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 shrink-0 text-orbit-pink group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{req.text}</p>
                    <p className="text-zinc-400 text-xs">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-zinc-400 text-xs leading-relaxed">
                * Exceptions can be made for high-quality channels with strong growth potential. Contact our support team for a manual review.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orbit-pink via-orbit-purple to-orbit-blue p-12 rounded-[40px] text-white relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap size={120} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-2">OrbitX Creator Plan</h3>
              <p className="text-white/60 text-sm mb-8 uppercase tracking-widest font-bold">The Premium Standard</p>
              
              <div className="mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-display font-bold">$100</span>
                  <span className="text-white/60 font-bold uppercase tracking-widest text-xs">One-time Join Fee</span>
                </div>
                <p className="text-white/70 text-sm mt-2 font-medium italic">No monthly subscriptions. No hidden costs.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: DollarSign, text: 'Brand Deals' },
                  { icon: ShieldCheck, text: 'Content ID' },
                  { icon: Globe, text: 'Global Reach' },
                  { icon: Zap, text: 'Instant Payouts' },
                  { icon: Users, text: 'Collabs' },
                  { icon: Zap, text: 'SEO Strategy' }
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <feat.icon size={16} className="text-white/60" />
                    <span className="text-sm font-bold">{feat.text}</span>
                  </div>
                ))}
              </div>

              <a href="#join-form" className="inline-flex items-center justify-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-2xl w-full hover:bg-zinc-200 transition-all shadow-xl shadow-black/20 group">
                Apply to Join <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
