import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

const data = [
  {
    name: 'Without MCN',
    revenue: 1000,
    takeHome: 1000,
    color: '#52525b',
    breakdown: [
      { label: 'Base AdSense', value: 1000 },
      { label: 'Brand Deals', value: 0 },
      { label: 'MCN Fee', value: 0 },
      { label: 'Take-home', value: 1000, highlight: true }
    ]
  },
  {
    name: 'With OrbitX',
    revenue: 1800,
    takeHome: 1080,
    color: '#7c3aed',
    breakdown: [
      { label: 'Base AdSense', value: 1000 },
      { label: 'Growth Boost (80%)', value: 800 },
      { label: 'Gross Revenue', value: 1800, highlight: true },
      { label: 'MCN Fee (40%)', value: -720 },
      { label: 'Take-home', value: 1080, highlight: true }
    ]
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const chartData = payload[0].payload;
    return (
      <div className="glass p-5 rounded-2xl min-w-[240px] border-white/10">
        <h4 className="font-display font-bold text-white mb-3 border-b border-white/5 pb-2 text-sm">{label}</h4>
        <div className="space-y-2 text-[11px]">
          {chartData.breakdown.map((item: { label: string; value: number; highlight?: boolean }, idx: number) => (
            <div 
              key={idx} 
              className={`flex justify-between gap-6 ${
                item.highlight ? 'font-bold text-white pt-2 mt-2 border-t border-white/5' : 'text-zinc-500'
              }`}
            >
              <span className="uppercase tracking-wider">{item.label}</span>
              <span className={item.value < 0 ? 'text-red-400' : item.highlight ? 'text-orbit-emerald' : 'text-zinc-300'}>
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
    <section id="earnings" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
            >
              Revenue Optimization
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white leading-tight"
            >
              Maximize your <span className="text-gradient-colorful italic font-serif">earnings</span> potential.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-xs text-sm leading-relaxed"
          >
            We don't just take a cut; we grow the pie. See how our growth strategies actually put more money in your pocket.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-colorful p-8 rounded-[40px] border-white/5">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display font-bold text-white text-xl">Revenue Comparison</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Gross Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orbit-cyan" />
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Creator Take-home</span>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#71717a', fontSize: 12, fontWeight: 600 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#71717a', fontSize: 10 }} 
                    tickFormatter={(val) => `$${val}`}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                  <Bar dataKey="revenue" fill="#27272a" radius={[12, 12, 0, 0]} barSize={60} />
                  <Bar dataKey="takeHome" fill="#06b6d4" radius={[12, 12, 0, 0]} barSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-colorful p-8 rounded-[40px] border-white/5 flex-grow"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-orbit-pink mb-6">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-xl font-display font-bold text-white mb-4">The Growth Factor</h4>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Our creators see an average of <span className="text-white font-bold">80% revenue growth</span> within the first 6 months through optimized SEO and brand deals.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-orbit-pink uppercase tracking-widest">
                View Case Studies <ArrowUpRight size={12} />
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-orbit-pink via-orbit-purple to-orbit-blue p-8 rounded-[40px] text-white flex-grow shadow-[0_20px_50px_rgba(236,72,153,0.3)]"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <DollarSign size={24} />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">Ready to Earn More?</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Join the network that prioritizes your growth. Apply today and get a free channel audit.
              </p>
              <a href="#join-form" className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-zinc-200 transition-all text-sm w-full justify-center">
                Apply Now <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
