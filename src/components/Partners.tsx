import { motion } from 'motion/react';

const partners = [
  {
    name: 'YouTube',
    logo: 'https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo.jpg',
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/1280px-Meta-Logo.png',
  },
  {
    name: 'Google Certified Partner',
    logo: 'https://theseoptimist.net/wp-content/uploads/2018/04/Google-certified-partner-badge.png',
  }
];

export default function Partners() {
  return (
    <section className="py-12 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-8">
          Official Platform Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300 mix-blend-multiply opacity-80 hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
