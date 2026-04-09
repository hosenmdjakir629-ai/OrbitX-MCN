import { motion } from 'motion/react';
import { Target, Lightbulb, Award, ShieldCheck, TrendingUp } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-32 bg-transparent text-white relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-orbit-pink/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-orbit-cyan/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-6">Our Purpose</p>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
              Redefining the <span className="text-gradient-colorful italic font-serif">Creator</span> Economy.
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
              OrbitX MCN isn't just a network; it's a launchpad for the next generation of digital icons. We combine data-driven strategy with human-centric support.
            </p>
          </motion.div>

          <div className="grid gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To empower YouTube creators by providing strategic guidance, premium tools, and industry connections. We turn passion into sustainable business.",
                color: "text-orbit-pink"
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                desc: "A creator economy where talent is universally recognized and rewarded. We aim to be the premier global launchpad for influential voices.",
                color: "text-orbit-cyan"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-colorful p-10 rounded-[40px] relative overflow-hidden group"
              >
                <div className="flex items-start gap-8">
                  <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Backed by <span className="text-gradient-colorful italic font-serif">Industry Experts</span>
          </motion.h3>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Our leadership team consists of YouTube Certified professionals and veteran creators with a proven track record of success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "YouTube Certified",
              desc: "Official certifications in Audience Growth and Digital Rights Management.",
              color: "text-orbit-orange"
            },
            {
              icon: TrendingUp,
              title: "Algorithm Masters",
              desc: "Deep data analysis to understand exactly what the algorithm favors today.",
              color: "text-orbit-pink"
            },
            {
              icon: ShieldCheck,
              title: "IP Protection",
              desc: "Fierce dedication to protecting your intellectual property from piracy.",
              color: "text-orbit-cyan"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 hover:bg-white/[0.05] transition-colors text-center glass-colorful"
            >
              <div className={`mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 ${item.color}`}>
                <item.icon size={28} />
              </div>
              <h4 className="text-xl font-display font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
