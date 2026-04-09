import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What exactly does OrbitX MCN do for creators?",
    answer: "We provide comprehensive support, including brand deal acquisition, copyright protection, premium resource access, and strategic growth consulting to help you scale your channel efficiently."
  },
  {
    question: "How does the partnership process work?",
    answer: "After submitting your application, our team reviews your channel's performance and potential. If you're a good fit, we'll reach out to schedule a discovery call to discuss your goals and how we can best support you."
  },
  {
    question: "Are there any upfront costs to join?",
    answer: "No, we don't charge upfront fees. Our partnership is based on a revenue-share model, meaning we only succeed when you succeed."
  },
  {
    question: "Can I still manage my own brand deals?",
    answer: "Absolutely. We work with you to augment your efforts, not replace them. We can handle the outreach and negotiation for deals you don't have time for, or provide support for deals you've already secured."
  },
  {
    question: "Do I keep full ownership of my channel and content?",
    answer: "100%. You retain full creative control and ownership of your channel and all the content you produce. We are here to support and amplify your work, not take it over."
  },
  {
    question: "Am I locked into a long-term contract?",
    answer: "No, we offer flexible agreements. We believe in earning your partnership every month, so you aren't locked into restrictive, multi-year contracts."
  },
  {
    question: "How and when do I get paid?",
    answer: "We process payments monthly via bank transfer, PayPal, or crypto, depending on your preference. Our transparent dashboard lets you track your earnings and upcoming payouts in real-time."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.03)_0%,transparent_70%)]" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-orbit-pink mx-auto mb-6"
          >
            <HelpCircle size={24} />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Common <span className="text-gradient-colorful">Questions</span>.
          </motion.h2>
          <p className="text-zinc-500">Everything you need to know about partnering with OrbitX.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`glass-colorful rounded-2xl overflow-hidden border-white/5 transition-all duration-300 ${openIndex === index ? 'border-orbit-pink/30 bg-white/[0.05]' : 'hover:border-white/10'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left font-display font-bold text-white transition-colors group"
              >
                <span className="group-hover:text-orbit-pink transition-colors">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-500 text-zinc-500 group-hover:text-orbit-pink ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 text-zinc-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
