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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Partners() {
  return (
    <section className="py-12 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-8">
          Official Platform Partners & Certifications
        </p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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
        </motion.div>
      </div>
    </section>
  );
}
