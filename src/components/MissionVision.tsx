import { motion } from 'motion/react';
import { Target, Lightbulb, Award, ShieldCheck, TrendingUp } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto"
          >
            We are dedicated to elevating creators to new heights, providing the foundation and expertise needed to thrive in the competitive digital landscape.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
            <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Target className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-zinc-300 leading-relaxed relative z-10">
              To empower YouTube creators by providing strategic guidance, premium tools, and industry connections. We turn your passion into a thriving, sustainable business by handling the complexities of channel management so you can focus on what you do best: creating amazing content.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />
            <div className="bg-indigo-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10">
              <Lightbulb className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Vision</h3>
            <p className="text-zinc-300 leading-relaxed relative z-10">
              We envision a creator economy where talent is universally recognized and rewarded. OrbitX aims to stand as the premier global launchpad for the world's most influential digital voices, redefining creator success through innovation and transparent partnerships.
            </p>
          </motion.div>
        </div>

        {/* Team Expertise Section */}
        <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-4"
          >
            Backed by Industry Experts
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Founded by a team of YouTube Certified professionals, veteran creators, and digital strategists. We bring decades of combined experience to your channel.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Award className="w-6 h-6 text-yellow-400" />,
              title: "YouTube Certified",
              desc: "Our team holds official YouTube certifications in Audience Growth and Digital Rights Management."
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
              title: "Algorithm Masters",
              desc: "We analyze billions of data points to understand exactly what the YouTube algorithm favors today."
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
              title: "IP Protection",
              desc: "Fiercely dedicated to protecting your intellectual property from unauthorized re-uploads and piracy."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors"
            >
              <div className="mx-auto w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
