import { motion } from 'motion/react';

export default function CreatorTestimonials() {
  return (
    <section id="testimonials-video" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
          >
            Success Stories
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            See how creators <span className="text-gradient-colorful">thrive</span> with OrbitX.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.15)] border border-white/10 glass-colorful"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/phh0j_qWTLo?autoplay=0&controls=1&rel=0"
            title="OrbitX MCN Testimonial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Avg. Growth', value: '+140%', color: 'text-orbit-pink' },
            { label: 'Retention', value: '98%', color: 'text-orbit-cyan' },
            { label: 'Support', value: '24/7', color: 'text-orbit-purple' },
            { label: 'Payouts', value: 'Instant', color: 'text-orbit-orange' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className={`text-2xl font-display font-bold mb-1 ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
