import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('orbitx-cookie-consent');
    if (!consent) {
      // Small delay so it doesn't pop up instantly on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('orbitx-cookie-consent', 'true');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    // Optionally, you can also set a flag for dismissal without accepting
    // localStorage.setItem('orbitx-cookie-consent', 'dismissed');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 50, x: '-50%' }}
          className="fixed bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-4xl bg-zinc-900 text-white p-5 md:p-6 rounded-2xl shadow-2xl z-50 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8"
        >
          <div className="flex items-start gap-4 pr-6 md:pr-0">
            <div className="bg-zinc-800 p-2.5 rounded-full shrink-0 hidden sm:block">
              <Cookie className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 sm:hidden">Cookie Consent</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                <a href="#" className="text-white underline hover:text-purple-400 transition-colors font-medium">
                  Privacy Policy
                </a>{' '}
                for more information.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
            <button
              onClick={handleDismiss}
              className="flex-1 md:flex-none px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-white text-zinc-900 font-bold px-6 py-2.5 rounded-xl hover:bg-zinc-200 transition-colors whitespace-nowrap"
            >
              Accept All
            </button>
          </div>

          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-1 text-zinc-500 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
