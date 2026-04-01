import { motion } from 'motion/react';

export default function RequirementsPricing() {
  return (
    <section className="py-20 px-6 bg-zinc-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-zinc-100"
        >
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Join Requirements</h2>
          <ul className="space-y-4 text-zinc-700">
            {['1000+ Subscribers', 'Original Content', 'No Active Copyright Strike', 'Monetized YouTube Channel'].map((req, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-purple-500">✔</span> {req}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-500 to-teal-600 p-10 rounded-3xl text-white shadow-xl shadow-emerald-900/20"
        >
          <h2 className="text-3xl font-bold mb-8">OrbitX MCN Creator Plan</h2>
          <p className="text-5xl font-bold mb-6">Lifetime <span className="text-xl font-normal text-emerald-100">Free Access</span></p>
          <ul className="space-y-4 text-emerald-50">
            {['Brand Deal Opportunities', 'Content ID Protection', 'Premium Resources', 'YouTube Growth Strategy', 'Creator Collaboration', 'Fast Payment System'].map((feat, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-emerald-300">✔</span> {feat}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
