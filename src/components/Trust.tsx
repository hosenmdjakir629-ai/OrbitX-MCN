import { useCallback, useEffect, useState } from 'react';
import { motion, animate, useMotionValue, useTransform } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react';

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
      className="glass p-8 rounded-[32px] relative overflow-hidden group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      <motion.p className={`text-6xl font-display font-bold text-white mb-2`}>
        {display}
      </motion.p>
      <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}

export default function Trust() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [liveStats, setLiveStats] = useState({ activeChannels: 0, totalViews: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setLiveStats({
        activeChannels: 138,
        totalViews: 10000000
      });
    };
    fetchStats();
  }, []);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.03)_0%,transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
          >
            Proven Results
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Trusted by the world's <span className="text-gradient-colorful">top creators</span>.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          <AnimatedCounter 
            value={liveStats.activeChannels} 
            label="Active Channels" 
            formatter={(val) => Math.round(val).toLocaleString() + '+'}
            colorClass="from-orbit-pink to-orbit-purple"
          />
          <AnimatedCounter 
            value={liveStats.totalViews} 
            label="Total Views Generated" 
            formatter={(val) => {
              if (val >= 1000000000) return (val / 1000000000).toFixed(1) + 'B+';
              if (val >= 1000000) return (val / 1000000).toFixed(1) + 'M+';
              return Math.round(val).toLocaleString() + '+';
            }}
            colorClass="from-orbit-cyan to-orbit-blue"
          />
        </div>

        <div className="relative mb-24">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {[
                { name: 'NDTV', image: 'https://yt3.ggpht.com/ytc/AIdro_lcj8idHNsaTiTITY2vWQD6gaxZ6ITkpQPaLVskaDMyiml9=s48-c-k-c0x00ffffff-no-rj', quote: 'OrbitX MCN is an excellent platform for content creators looking to grow fast. Their support system, monetization guidance, and collaboration opportunities are truly impressive. Highly recommended for serious YouTubers!' },
                { name: 'ISSEI / いっせい', image: 'https://yt3.ggpht.com/WQJfAcYaEL-sQ7LcF86SHG-T4u9zjiSScvdFxh73GCFJKleVcTakwZaqMhsGdZ64gfccQ2gn4Q=s176-c-k-c0x00ffffff-no-rj-mo', quote: 'The level of transparency and support we get from OrbitX is refreshing. They actually care about our long-term success.' },
                { name: 'Gaming Central', image: 'https://picsum.photos/seed/gaming/100/100', quote: 'Joining OrbitX was the best decision for our channel. Their monetization tools have significantly boosted our revenue.' },
                { name: 'Lifestyle Daily', image: 'https://picsum.photos/seed/life/100/100', quote: 'The community and networking opportunities at OrbitX are incredible. We\'ve collaborated with so many amazing creators.' },
                { name: 'Global News', image: 'https://picsum.photos/seed/news/100/100', quote: 'Professional, reliable, and innovative. OrbitX MCN is the partner every serious creator needs.' }
              ].map((testimonial, i) => (
                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_40%] lg:flex-[0_0_30%]">
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="glass-colorful p-6 rounded-[32px] h-full flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800 ring-2 ring-orbit-pink/20">
                        <img src={testimonial.image} alt={testimonial.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-white">{testimonial.name}</p>
                        <div className="flex gap-1 text-orbit-pink">
                          {[...Array(5)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                        </div>
                      </div>
                    </div>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Verified Creator</span>
                      <CheckCircle2 size={16} className="text-orbit-cyan" />
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button onClick={scrollPrev} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollNext} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="pt-24 border-t border-white/5">
          <p className="text-center text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-12">
            Verified Security & Trust
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'ScamAdviser', logo: 'https://www.scamadviser.com/images/static/logo/logo.svg', link: 'https://www.scamadviser.com/check-website/orbitxmcn.digital', score: '100% Trust Score' },
              { name: 'Get Safe Online', logo: 'https://www.getsafeonline.org/wp-content/uploads/2021/05/gso.org_rgb_2.png', link: 'https://check.getsafeonline.org/check/www.orbitxmcn.digital', score: 'Verified Safe', dark: true },
              { name: 'Trustpilot', logo: 'https://images.seeklogo.com/logo-png/47/1/trustpilot-stars-logo-png_seeklogo-477110.png', link: 'https://www.trustpilot.com/review/orbitxmcn.digital', score: '5-Star Rated' }
            ].map((badge, i) => (
              <motion.a 
                key={i}
                href={badge.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="glass-colorful p-6 rounded-2xl flex flex-col items-center gap-4 hover:border-orbit-pink/50 transition-all group"
              >
                <div className={`h-8 flex items-center justify-center ${badge.dark ? 'bg-white rounded px-2' : ''}`}>
                  <img src={badge.logo} alt={badge.name} className="h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-orbit-cyan">
                  <span className="w-2 h-2 rounded-full bg-orbit-cyan animate-pulse" />
                  {badge.score}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
