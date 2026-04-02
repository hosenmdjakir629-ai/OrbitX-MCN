import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  {
    name: 'Without MCN',
    'Total Revenue': 1000,
    'Creator Take-home': 1000,
    breakdown: [
      { label: 'Base AdSense', value: 1000 },
      { label: 'Brand Deals & Sponsorships', value: 0 },
      { label: 'MCN Fee', value: 0 },
      { label: 'Creator Take-home', value: 1000, highlight: true }
    ]
  },
  {
    name: 'With OrbitX MCN',
    'Total Revenue': 1500,
    'Creator Take-home': 900,
    breakdown: [
      { label: 'Base AdSense', value: 1000 },
      { label: 'OrbitX Growth Boost (50%)', value: 500 },
      { label: 'Gross Revenue', value: 1500, highlight: true },
      { label: 'MCN Fee (40%)', value: -600 },
      { label: 'Creator Take-home', value: 900, highlight: true }
    ]
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const chartData = payload[0].payload;
    return (
      <div className="bg-zinc-900 border border-zinc-700 p-5 rounded-xl shadow-2xl min-w-[250px]">
        <h4 className="font-bold text-white mb-3 border-b border-zinc-800 pb-2">{label}</h4>
        <div className="space-y-2 text-sm">
          {chartData.breakdown.map((item: { label: string; value: number; highlight?: boolean }, idx: number) => (
            <div 
              key={idx} 
              className={`flex justify-between gap-6 ${
                item.highlight ? 'font-bold text-white pt-2 mt-2 border-t border-zinc-800' : 'text-zinc-400'
              }`}
            >
              <span>{item.label}</span>
              <span className={item.value < 0 ? 'text-red-400' : item.highlight ? 'text-emerald-400' : 'text-white'}>
                {item.value < 0 ? '-' : ''}${Math.abs(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export default function Earnings() {
  return (
    <section className="py-20 px-6 bg-zinc-950">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-12 text-white shadow-2xl border border-zinc-700"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Creator Earnings Example</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-4 text-zinc-400">Without MCN</h3>
              <p className="text-4xl font-bold text-white mb-4">$1000/month</p>
              <p className="text-zinc-300">Creator keeps: $1000</p>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-2xl shadow-lg shadow-emerald-900/50 flex flex-col h-full"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-4 text-emerald-50">With OrbitX MCN</h3>
              <p className="text-4xl font-bold text-white mb-4">$1500+/month</p>
              <p className="text-emerald-100">Creator keeps: $850 – $900</p>
              <p className="text-emerald-100 mt-2 font-medium">Plus: Brand Deals, Growth, Copyright Protection</p>
            </div>
            <a 
              href="#join-form" 
              className="mt-6 block w-full text-center bg-white text-emerald-700 font-bold py-3 px-6 rounded-xl hover:bg-zinc-100 transition-colors shadow-sm"
            >
              Apply Now
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-80 bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" stroke="#a1a1aa" tick={{ fill: '#a1a1aa' }} />
              <YAxis stroke="#a1a1aa" tickFormatter={(value) => `$${value}`} tick={{ fill: '#a1a1aa' }} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#27272a' }} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="Total Revenue" fill="#52525b" radius={[6, 6, 0, 0]} />
              <Bar dataKey="Creator Take-home" fill="#10b981" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>
    </section>
  );
}
