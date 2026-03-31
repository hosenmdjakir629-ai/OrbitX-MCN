import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

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
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-zinc-200 rounded-2xl overflow-hidden hover:border-purple-300 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-6 text-left font-semibold hover:bg-purple-50 transition-colors"
            >
              {faq.question}
              <ChevronDown className={`transition-transform duration-300 text-purple-600 ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-zinc-600 bg-purple-50/50"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
