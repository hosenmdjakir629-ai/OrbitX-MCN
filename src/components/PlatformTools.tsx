import { MonitorPlay, Headphones, Mic, Gem, Megaphone, Calendar, Sparkles, Wallet, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PlatformTools() {
  return (
    <section id="tools" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
          >
            Creator Ecosystem
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            The <span className="text-gradient-colorful">complete</span> toolkit.
          </motion.h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Everything you need to manage, distribute, and monetize your content in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/5">
          {[
            { icon: MonitorPlay, title: 'Video Distribution', desc: 'Distribute your videos across YouTube and Facebook', color: 'text-orbit-pink' },
            { icon: Headphones, title: 'Audio Distribution', desc: 'Share your music on 40+ platforms', color: 'text-orbit-cyan', badge: '+35' },
            { icon: Mic, title: 'Podcast Distribution', desc: 'Publish your podcasts to all major platforms', color: 'text-orbit-purple', badge: '+20' },
            { icon: Gem, title: 'Royalty NFT', desc: 'Create and manage royalty NFTs for your content', color: 'text-orbit-orange' },
            { icon: Megaphone, title: 'Brand Campaigns', desc: 'Apply for and manage your partnership campaigns', color: 'text-emerald-400' },
            { icon: Calendar, title: 'Campaign Calendar', desc: 'Schedule and manage your campaign deliverables', color: 'text-orbit-cyan' },
            { icon: Sparkles, title: 'AI Tools', desc: 'Enhance your content with AI-powered tools', color: 'text-orbit-pink' },
            { icon: Wallet, title: 'Finance Management', desc: 'Track earnings and payments', color: 'text-green-400' }
          ].map((tool, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-8 border-r border-b border-white/5 hover:bg-white/[0.05] transition-colors relative overflow-hidden glass-colorful"
            >
              <div className="flex items-center justify-between mb-8">
                <div className={`p-3 rounded-xl bg-white/5 ${tool.color} group-hover:scale-110 transition-transform duration-500`}>
                  <tool.icon size={24} />
                </div>
                {tool.badge && (
                  <span className="text-[10px] font-bold text-zinc-500 border border-white/10 px-2 py-1 rounded-md uppercase tracking-widest">
                    {tool.badge}
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-orbit-pink transition-colors">
                {tool.title}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                {tool.desc}
              </p>
              
              <div className="flex items-center gap-2 text-[10px] font-bold text-orbit-pink uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Access Tool <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
