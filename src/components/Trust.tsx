import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';

export default function Trust() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-20 px-6 bg-zinc-950 text-white text-center">
      <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Trusted by Creators</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-emerald-500 transition-colors"
        >
          <p className="italic text-zinc-400 mb-4">“OrbitX MCN helped me get my first brand deal worth $500.”</p>
          <span className="font-semibold text-emerald-400">Creator Success Story</span>
        </motion.div>
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-purple-500 transition-colors"
        >
          <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">137</p>
          <span className="text-zinc-400">Creators Already Joined</span>
        </motion.div>
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-yellow-500 transition-colors"
        >
          <p className="text-xl font-bold mb-2 text-yellow-400">Limited Offer</p>
          <span className="text-zinc-400">First 100 Creators Join for $50</span>
        </motion.div>
      </div>

      <h3 className="text-3xl font-bold mb-12">Creator Testimonials</h3>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex-[0_0_100%] md:flex-[0_0_33.33%] bg-zinc-900 p-4 rounded-3xl border border-zinc-800 hover:border-white/20 transition-colors"
            >
              <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-zinc-500">Video Placeholder {i}</span>
              </div>
              <p className="font-semibold">Creator Name {i}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
