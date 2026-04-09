import { motion } from 'motion/react';

const networkPartners = [
  {
    name: 'Freedom!',
    logo: 'https://variety.com/wp-content/uploads/2016/10/freedom.jpg',
  },
  {
    name: 'Network Partner',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDGjt1p9At0q9yYCOayNy2GDmElPCk20LvGEPMyb2BxAcKNgghZWMoAXR&s=10',
  },
  {
    name: 'Yoola',
    logo: 'https://cdn.prod.website-files.com/63501ecab68481497dd3cf44/636beae076342c7aeec05d4d_banner%20for%20social%20Yoola.jpg',
  },
  {
    name: 'Network Partner',
    logo: 'https://cdn.sanity.io/images/w5wicj01/production/4fb70eeaca8c6c23cfdecb27403042d5e9241bad-1628x1590.jpg',
  },
  {
    name: 'ScaleLab',
    logo: 'https://image4.owler.com/logo/scalelab_owler_20190110_214256_original.png',
  },
  {
    name: 'Network Partner',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJtFvARcNInByoDWuBraW92jug2NIfcVBqTR7aHJ_6g&s=10',
  },
  {
    name: 'Hashtag Network',
    logo: 'https://www.hashtagnetwork.net/assets/files/hashtag-network-logo.png',
  }
];

export default function NetworkPartners() {
  return (
    <section className="py-16 bg-transparent border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-12"
        >
          OrbitX MCN Network Partners
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {networkPartners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-orbit-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-10 md:h-12 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 rounded-lg relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
