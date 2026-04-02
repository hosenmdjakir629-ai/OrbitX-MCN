import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-medium">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Terms and Conditions</h2>
          <p className="text-zinc-600">Please read these terms carefully before joining OrbitX MCN.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm text-left"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">1. Introduction</h3>
              <p className="text-zinc-600 leading-relaxed">
                Welcome to OrbitX MCN. By applying to join our network, you agree to be bound by these Terms and Conditions. These terms govern your relationship with OrbitX MCN and the services we provide to enhance, monetize, and protect your YouTube channel.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">2. Services Provided</h3>
              <p className="text-zinc-600 leading-relaxed">
                OrbitX MCN provides channel management, audience growth strategies, digital rights management (DRM), and monetization optimization. We do not claim ownership of your content; you retain 100% of your intellectual property rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">3. Revenue Share</h3>
              <p className="text-zinc-600 leading-relaxed">
                Revenue share agreements are determined on a case-by-case basis depending on channel size, niche, and the specific services rendered. All revenue splits will be clearly outlined in your final partnership contract before onboarding.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">4. Content Guidelines</h3>
              <p className="text-zinc-600 leading-relaxed">
                Partners must adhere to YouTube's Community Guidelines and Terms of Service. OrbitX MCN reserves the right to terminate the partnership if a creator repeatedly violates these guidelines, engages in copyright infringement, or produces harmful content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">5. Termination</h3>
              <p className="text-zinc-600 leading-relaxed">
                Either party may terminate the agreement with a standard 30-day written notice, subject to the terms of the specific partnership contract signed during onboarding.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
