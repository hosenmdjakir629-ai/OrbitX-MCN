import { motion } from 'motion/react';
import { Headset, Sparkles, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: <Headset className="w-8 h-8 text-purple-600" />,
    title: 'Dedicated Support Team',
    description: 'Get 24/7 access to a personal channel manager and a team of YouTube experts who are always ready to help you troubleshoot, strategize, and grow.',
    color: 'bg-purple-100',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
    title: 'Exclusive Tools',
    description: 'Unlock our proprietary suite of AI-driven analytics, SEO optimization tools, and thumbnail A/B testing platforms not available to the public.',
    color: 'bg-indigo-100',
  },
  {
    icon: <LineChart className="w-8 h-8 text-pink-600" />,
    title: 'Proven Track Record',
    description: 'Join a network that has successfully scaled thousands of channels, generating billions of views and maximizing revenue for creators worldwide.',
    color: 'bg-pink-100',
  }
];

export default function UniqueBenefits() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900"
          >
            Why Join OrbitX MCN?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 max-w-2xl mx-auto"
          >
            We don't just manage channels; we build digital empires. Here is what sets us apart from the rest of the industry.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-zinc-50 border border-zinc-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${benefit.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900">{benefit.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
