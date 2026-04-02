import { useCallback, useEffect, useState } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function AnimatedCounter({ value, label, formatter, colorClass }: { value: number, label: string, formatter: (val: number) => string, colorClass: string }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => formatter(latest));

  useEffect(() => {
    if (value > 0) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [value, count]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`bg-zinc-900 p-8 rounded-3xl border border-zinc-800 transition-colors hover:border-${colorClass.split('-')[1]}-500`}
    >
      <motion.p className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorClass} mb-2`}>
        {display}
      </motion.p>
      <span className="text-zinc-400 text-lg font-medium">{label}</span>
    </motion.div>
  );
}

export default function Trust() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [liveStats, setLiveStats] = useState({ activeChannels: 0, totalViews: 0 });

  useEffect(() => {
    // Mock API call to fetch live stats
    const fetchStats = async () => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1200));
      setLiveStats({
        activeChannels: 138,
        totalViews: 10000000 // 10 Million
      });
    };
    fetchStats();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 px-6 bg-zinc-950 text-white text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
      >
        Trusted by Creators
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        <AnimatedCounter 
          value={liveStats.activeChannels} 
          label="Active Channels" 
          formatter={(val) => Math.round(val).toLocaleString() + '+'}
          colorClass="from-purple-400 to-blue-400"
        />
        <AnimatedCounter 
          value={liveStats.totalViews} 
          label="Total Views Generated" 
          formatter={(val) => {
            if (val >= 1000000000) return (val / 1000000000).toFixed(1) + 'B+';
            if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M+';
            return Math.round(val).toLocaleString() + '+';
          }}
          colorClass="from-emerald-400 to-cyan-400"
        />
      </div>

      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12"
      >
        Creator Testimonials
      </motion.h3>
      <div className="relative max-w-6xl mx-auto px-12">
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
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src={`/testimonial-${i}.png`} 
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/seed/creator${i}/400/225`;
                    }}
                    alt={`Creator ${i}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="font-semibold">Creator Name {i}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-700 p-3 rounded-full text-white transition-colors z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-700 p-3 rounded-full text-white transition-colors z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-3 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex ? 'bg-emerald-500 w-6' : 'bg-zinc-700 hover:bg-zinc-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
