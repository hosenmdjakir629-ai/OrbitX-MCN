import { motion } from 'motion/react';

export default function CreatorTestimonials() {
  return (
    <section className="py-20 px-6 bg-zinc-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Creator Testimonials
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            className="w-full h-full object-cover"
            src="/testimonial-photo.png"
            onError={(e) => {
              e.currentTarget.src = "https://picsum.photos/seed/orbitx/800/450";
            }}
            alt="Creator Testimonial"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
