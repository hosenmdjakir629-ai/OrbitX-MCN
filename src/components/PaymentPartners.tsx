import { motion } from 'motion/react';

const paymentPartners = [
  {
    name: 'bKash',
    logo: 'https://static.vecteezy.com/system/resources/thumbnails/068/706/001/small_2x/bkash-logo-horizontal-bangla-mobile-banking-app-icon-free-png.png',
  },
  {
    name: 'Nagad',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7x4tqkMqhSTJP70NjbamU4GjWZhAc1eSCwQPrqeJ7Dw&s=10',
  },
  {
    name: 'Rocket',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2APF2IQCnTbtXIXzcGXy1suMqUMAq-P2swrZwb4UGAg&s=10',
  },
  {
    name: 'Binance',
    logo: 'https://download.logo.wine/logo/Binance/Binance-Logo.wine.png',
  },
  {
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/960px-PayPal.svg.png',
  },
];

export default function PaymentPartners() {
  return (
    <section className="py-12 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-zinc-400 text-sm font-bold uppercase tracking-widest mb-8"
        >
          Supported Payment Partners
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {paymentPartners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
