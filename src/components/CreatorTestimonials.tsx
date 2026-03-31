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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-3xl shadow-lg mb-8 flex items-center gap-4"
        >
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQI7XG__Cny8EbPIE_PeyPuJwDsytjvSsBh6Zoq_e0GA2CmCdv2O0aktU&s=10" 
            alt="CBC News: The National" 
            className="w-16 h-16 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
          <h3 className="text-2xl font-semibold">CBC News: The National</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/phh0j_qWTLo"
            title="Creator Testimonial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
