import { Sparkles, Wand2, Search, Lightbulb, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const aiFeatures = [
  {
    icon: Wand2,
    title: 'Content Enhancement',
    desc: 'Automatically upscale video quality, remove background noise, and master your audio tracks with our one-click AI processing.',
    prompt: '“Remove background wind noise and enhance vocal clarity for this outdoor vlog.”',
    color: 'from-violet-400 to-purple-500'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Generate high-ranking titles, tags, and descriptions, suggest trending keywords, and analyze competitor SEO strategies to maximize your organic reach.',
    prompt: '“Analyze top-ranking videos for \'budget travel tips\' and generate 5 optimized titles and trending tags.”',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Lightbulb,
    title: 'Idea & Script Generation',
    desc: 'Never run out of content ideas. Our AI analyzes trending topics in your niche to generate viral video concepts and full scripts.',
    prompt: '“Write a 5-minute YouTube script about \'The History of AI\' with a highly engaging hook.”',
    color: 'from-amber-400 to-orange-500'
  }
];

export default function AITools() {
  return (
    <section className="py-24 px-6 bg-zinc-950 text-white relative overflow-hidden border-t border-zinc-900">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium mb-6">
              <Sparkles size={18} />
              <span>Next-Gen Creator Tools</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Supercharge your workflow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">OrbitX AI</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Stop spending hours on tedious tasks. Our proprietary suite of AI tools is designed specifically for creators to automate SEO, generate viral ideas, and enhance production quality in seconds.
            </p>
            <motion.a 
              href="#join-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-zinc-950 font-bold px-8 py-4 rounded-2xl hover:bg-zinc-200 transition-colors"
            >
              Learn More about AI Tools
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          {/* Right Grid */}
          <div className="grid gap-6">
            {aiFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.02, x: -5 }}
                className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 hover:border-purple-500/50 transition-all flex gap-6 items-start group"
              >
                <div className={`shrink-0 p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">{feature.desc}</p>
                  <div className="bg-zinc-950/50 rounded-xl p-3 border border-zinc-800/50">
                    <p className="text-xs text-zinc-500 font-mono mb-1">Example Prompt:</p>
                    <p className="text-sm text-zinc-300 italic">{feature.prompt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
