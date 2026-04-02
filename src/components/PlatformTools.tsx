import { MonitorPlay, Headphones, Mic, Gem, Megaphone, Calendar, Sparkles, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

const tools = [
  {
    icon: MonitorPlay,
    title: 'Video Distribution',
    desc: 'Distribute your videos across YouTube and Facebook',
    color: 'from-red-500 to-orange-500',
    badge: null
  },
  {
    icon: Headphones,
    title: 'Audio Distribution',
    desc: 'Share your music on 40+ platforms',
    color: 'from-blue-500 to-indigo-500',
    badge: '+35'
  },
  {
    icon: Mic,
    title: 'Podcast Distribution',
    desc: 'Publish your podcasts to all major platforms',
    color: 'from-purple-500 to-pink-500',
    badge: '+20'
  },
  {
    icon: Gem,
    title: 'Royalty NFT',
    desc: 'Create and manage royalty NFTs for your content',
    color: 'from-amber-400 to-yellow-500',
    badge: null
  },
  {
    icon: Megaphone,
    title: 'Brand Campaigns',
    desc: 'Apply for and manage your partnership campaigns',
    color: 'from-emerald-400 to-teal-500',
    badge: null
  },
  {
    icon: Calendar,
    title: 'Campaign Calendar',
    desc: 'Schedule and manage your campaign deliverables',
    color: 'from-cyan-400 to-blue-500',
    badge: null
  },
  {
    icon: Sparkles,
    title: 'AI Tools',
    desc: 'Enhance your content with AI-powered tools',
    color: 'from-violet-500 to-purple-500',
    badge: null
  },
  {
    icon: Wallet,
    title: 'Finance Management',
    desc: 'Track earnings and payments',
    color: 'from-green-500 to-emerald-600',
    badge: null
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -5, scale: 1.02 }
};

export default function PlatformTools() {
  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 tracking-tight text-zinc-900"
          >
            Platform Tools
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xl text-zinc-600 max-w-2xl mx-auto"
          >
            Everything you need to manage, distribute, and monetize your content in one place.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-200 hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0.1, scale: 1, rotate: 0 },
                  visible: { opacity: 0.1, scale: 1, rotate: 0 },
                  hover: { opacity: 0.2, scale: 1.2, rotate: -12, transition: { duration: 0.4 } }
                }}
                className="absolute top-0 right-0 p-4"
              >
                <tool.icon size={80} />
              </motion.div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <motion.div 
                    variants={{
                      hidden: { scale: 1, rotate: 0 },
                      visible: { scale: 1, rotate: 0 },
                      hover: { 
                        scale: [1, 1.2, 1.1], 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }
                    }}
                    className={`p-3 rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-md`}
                  >
                    <tool.icon size={24} />
                  </motion.div>
                  {tool.badge && (
                    <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-3 py-1 rounded-full">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-zinc-900">{tool.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
