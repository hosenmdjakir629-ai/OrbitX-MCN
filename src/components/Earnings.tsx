import { motion } from 'motion/react';

export default function Earnings() {
  return (
    <section className="py-20 px-6 bg-zinc-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-12 text-white shadow-2xl border border-zinc-700"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Creator Earnings Example</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-zinc-400">Without MCN</h3>
            <p className="text-4xl font-bold text-white mb-4">$1000/month</p>
            <p className="text-zinc-300">Creator keeps: $1000</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-2xl shadow-lg shadow-emerald-900/50"
          >
            <h3 className="text-xl font-semibold mb-4 text-emerald-50">With OrbitX MCN</h3>
            <p className="text-4xl font-bold text-white mb-4">$1500+/month</p>
            <p className="text-emerald-100">Creator keeps: $850 – $900</p>
            <p className="text-emerald-100 mt-2 font-medium">Plus: Brand Deals, Growth, Copyright Protection</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
