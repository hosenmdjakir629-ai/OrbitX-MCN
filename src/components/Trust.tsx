import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Trust() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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
          <p className="text-xl font-bold mb-2 text-yellow-400">Lifetime Free</p>
          <span className="text-zinc-400">All YouTube Channel Creators Join for Free</span>
        </motion.div>
      </div>

      <h3 className="text-3xl font-bold mb-12">Creator Testimonials</h3>
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
