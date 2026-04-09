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
    logo: 'https://www.logo.wine/a/logo/Binance/Binance-Vertical2-Dark-Background-Logo.wine.svg',
  },
  {
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/960px-PayPal.svg.png',
  },
  {
    name: 'Card',
    logo: 'https://www.nicepng.com/png/full/87-870350_credit-cards-all-credit-card-logos.png',
  },
];

export default function PaymentPartners() {
  return (
    <section className="py-16 bg-transparent border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] mb-12"
        >
          Supported Payment Partners
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {paymentPartners.map((partner) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-orbit-pink/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 object-contain relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
