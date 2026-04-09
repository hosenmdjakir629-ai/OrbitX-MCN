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
  },
  {
    name: 'ISO 9001:2015 Certified',
    logo: 'https://validmfg.com/wp-content/uploads/valid-iso-9001-2015-certification.jpg',
  },
  {
    name: 'Certification',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9mOgoB4kk3avZOJbbjS3eUcq8e0eFQuex31YmWh-AfkAEZGUrcVEYqlk&s=10',
  },
  {
    name: 'YouTube Certified',
    logo: 'https://e8y9s4x2.delivery.rocketcdn.me/wp-content/uploads/2023/01/Youtube-Certified.png',
  },
  {
    name: 'Credly Certification',
    logo: 'https://images.credly.com/images/644368a1-1c75-4e63-bf52-3e366807f213/twitter_thumb_201604_image.png',
  }
];

export default function Partners() {
  return (
    <section className="py-12 bg-transparent border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em]">
          Official Platform Partners & Certifications
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center py-4"
        >
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex-shrink-0 group relative">
              <div className="absolute inset-0 bg-orbit-pink/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              <img
                src={partner.logo}
                alt={`${partner.name} Logo`}
                className="h-8 md:h-12 object-contain grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 brightness-200 relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-orbit-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-orbit-black to-transparent z-10" />
      </div>
    </section>
  );
}
