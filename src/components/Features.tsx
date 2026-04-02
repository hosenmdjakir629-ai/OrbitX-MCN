import { ShieldCheck, Music, Users, DollarSign, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  { icon: DollarSign, title: 'Brand Deals & Sponsorships', desc: 'Work directly with brands and get paid promotions.', color: 'from-yellow-400 to-orange-500' },
  { icon: ShieldCheck, title: 'Content ID Protection', desc: 'Protect your videos from copyright theft.', color: 'from-emerald-400 to-teal-500' },
  { icon: Music, title: 'Premium Production Resources', desc: 'Access music, sound effects, and creator tools.', color: 'from-pink-400 to-rose-500' },
  { icon: Users, title: 'Creator Collaboration', desc: 'Collaborate with other creators and grow together.', color: 'from-blue-400 to-indigo-500' },
  { icon: DollarSign, title: 'Monetization & Payment Support', desc: 'Fast and secure payments for creators.', color: 'from-green-400 to-emerald-500' },
  { icon: TrendingUp, title: 'YouTube Growth & SEO Guidance', desc: 'Get expert help to grow your channel faster.', color: 'from-purple-400 to-violet-500' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section className="py-20 px-6 bg-zinc-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 tracking-tight"
        >
          Why Creators Choose OrbitX MCN
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-zinc-100 hover:shadow-2xl transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`inline-block mb-6 p-4 rounded-2xl bg-gradient-to-br ${f.color} text-white`}
              >
                <f.icon size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-zinc-600">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
