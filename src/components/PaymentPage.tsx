import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { JoinFormData } from '../types';

export default function PaymentPage({ joinFormData }: { joinFormData: JoinFormData }) {
  const { t } = useTranslation();
  const [method, setMethod] = useState<'bkash' | 'nagad' | 'rocket' | 'binance'>('bkash');
  const [transactionId, setTransactionId] = useState('');
  const [senderNumber, setSenderNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const accounts = {
    bkash: '01927694437',
    nagad: '01927694437',
    rocket: '01703583523',
    binance: '0x3d434c9f0de3d867ee826adf4990b6b0e70fefe0'
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (transactionId && senderNumber) {
      setSubmitted(true);
      
      const message = `New Creator Application & Payment!
      
      --- Application Details ---
      Name: ${joinFormData.fullName}
      Channel: ${joinFormData.channelName}
      Link: ${joinFormData.youtubeLink}
      Subscribers: ${joinFormData.subscribers}
      Email: ${joinFormData.email}
      Country: ${joinFormData.country}
      
      --- Payment Details ---
      Method: ${method.toUpperCase()}
      Transaction ID: ${transactionId}
      Sender Number: ${senderNumber}`;
      
      const whatsappUrl = `https://wa.me/8801927694437?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (submitted) {
    return (
      <section className="py-20 px-6 max-w-2xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-zinc-100"
        >
          <h2 className="text-3xl font-bold mb-4 text-emerald-600">{t('paymentSubmitted')}</h2>
          <p className="text-zinc-600 mb-8">{t('verificationMessage')}</p>
          <a 
            href="https://wa.me/8801927694437" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-green-600 transition-all"
          >
            {t('chatWhatsApp')}
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-12">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          src="https://lh3.googleusercontent.com/a-/ALV-UjWufNRZwo6-tyucp2_FHTKH_l4ALZbK_MxsZQo0FyUn5wVw6gI=s360-w360-h360"
          alt="OrbitX Logo"
          className="h-16 md:h-20 mb-4 object-contain rounded-full"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg font-semibold text-zinc-600 mb-6"
        >
          OrbitX Global Payment Gateway
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        >
          {t('completePayment')}
        </motion.h2>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100"
      >
        <p className="text-xl font-semibold mb-6">{t('total')}</p>
        
        <div className="space-y-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            {(['bkash', 'nagad', 'rocket', 'binance'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`p-4 rounded-2xl border-2 font-bold capitalize transition-all ${method === m ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-zinc-200 hover:border-purple-200'}`}
              >
                {t(m)}
              </button>
            ))}
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 text-center">
            <p className="text-sm text-zinc-500 mb-2">
              {method === 'binance' ? t('sendToBinance') : t('sendTo', { method: method.toUpperCase() })}
            </p>
            <p className="text-2xl font-bold text-zinc-900">{accounts[method]}</p>
            {method === 'bkash' && (
              <a 
                href="https://shop.bkash.com/online-shop01978481393/paymentlink/default-payment"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-pink-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-pink-700 transition-all"
              >
                {t('payViaBkash')}
              </a>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder={t('transactionId')}
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="w-full p-4 border-2 rounded-2xl focus:border-purple-500 transition-colors"
            required
          />
          <input 
            type="text" 
            placeholder={t('senderNumber')} 
            value={senderNumber}
            onChange={(e) => setSenderNumber(e.target.value)}
            className="w-full p-4 border-2 rounded-2xl focus:border-purple-500 transition-colors"
            required
          />
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold p-4 rounded-2xl transition-all"
          >
            {t('submit')}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
