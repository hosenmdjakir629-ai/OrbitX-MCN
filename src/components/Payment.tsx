import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Smartphone, Wallet, CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { JoinFormData } from '../types';

type PaymentMethod = 'bkash' | 'nagad' | 'rocket' | 'binance';

interface PaymentProps {
  applicantData?: JoinFormData;
}

export default function Payment({ applicantData: propData }: PaymentProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const applicantData = propData || location.state?.applicantData;
  
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('bkash');
  const [transactionId, setTransactionId] = useState('');
  const [senderNumber, setSenderNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const paymentDetails = {
    bkash: { number: '+8801927694437', type: 'Personal' },
    nagad: { number: '+8801927694437', type: 'Personal' },
    rocket: { number: '+8801927694437', type: 'Personal' },
    binance: { address: '0x3d434c9f0de3d867ee826adf4990b6b0e70fefe0', network: 'BSC BNB Smart Chain (BEP20)' }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId || !senderNumber) return;
    
    // Construct message for WhatsApp
    let message = `Payment Verification Request!
    
--- Payment Details ---
Method: ${selectedMethod.toUpperCase()}
Sender Number: ${senderNumber}
Transaction ID: ${transactionId}
Amount: $100 (Join Fee)`;

    if (applicantData) {
      message += `

--- Applicant Details ---
Name: ${applicantData.fullName}
Channel: ${applicantData.channelName}
Niche: ${applicantData.contentNiche}
Email: ${applicantData.email}
Country: ${applicantData.country}`;
    }

    const whatsappUrl = `https://wa.me/8801927694437?text=${encodeURIComponent(message)}`;
    
    // Automatic redirect
    window.location.href = whatsappUrl;

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-3xl shadow-xl border border-zinc-100 text-center max-w-lg mx-auto"
      >
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">{t('paymentSubmitted')}</h2>
        <p className="text-zinc-600 mb-8 leading-relaxed">
          We have opened WhatsApp with your payment details. Please send the message to our support team to complete the verification.
        </p>
        <div className="flex flex-col gap-3">
          <a 
            href="https://wa.me/8801927694437" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-4 px-8 rounded-2xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
          >
            {t('chatWhatsApp')}
          </a>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-zinc-400 hover:text-zinc-600 text-sm font-medium transition-colors"
          >
            Submit another transaction
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-zinc-100"
      >
        <h2 className="text-3xl font-bold text-zinc-900 mb-2 text-center">{t('completePayment')}</h2>
        <p className="text-zinc-500 text-center mb-10 font-medium">{t('total')}</p>

        {/* Payment Method Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {(['bkash', 'nagad', 'rocket', 'binance'] as PaymentMethod[]).map((method) => (
            <button
              key={method}
              onClick={() => setSelectedMethod(method)}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                selectedMethod === method 
                  ? 'border-purple-600 bg-purple-50 text-purple-600' 
                  : 'border-zinc-100 hover:border-zinc-200 text-zinc-500'
              }`}
            >
              {method === 'binance' ? <Wallet size={24} /> : <Smartphone size={24} />}
              <span className="text-xs font-bold uppercase tracking-wider">{t(method)}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMethod}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 mb-10"
          >
            {selectedMethod === 'binance' ? (
              <div className="space-y-4">
                <p className="text-sm font-medium text-zinc-600">{t('sendToBinance')}</p>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-zinc-200 group">
                  <code className="text-xs font-mono text-zinc-800 break-all flex-1">
                    {paymentDetails.binance.address}
                  </code>
                  <button 
                    onClick={() => handleCopy(paymentDetails.binance.address)}
                    className="p-2 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-400 hover:text-purple-600"
                    title="Copy Address"
                  >
                    {copied ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Copy size={18} />}
                  </button>
                </div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <span>Network: {paymentDetails.binance.network}</span>
                  <span className="text-purple-600">Manual Payment</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm font-medium text-zinc-600">
                  {t('sendTo', { method: t(selectedMethod) })}
                </p>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-zinc-200">
                  <span className="text-xl font-bold text-zinc-900 flex-1">
                    {(paymentDetails[selectedMethod as keyof typeof paymentDetails] as { number: string }).number}
                  </span>
                  <button 
                    onClick={() => handleCopy((paymentDetails[selectedMethod as keyof typeof paymentDetails] as { number: string }).number)}
                    className="p-2 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-400 hover:text-purple-600"
                    title="Copy Number"
                  >
                    {copied ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Copy size={18} />}
                  </button>
                </div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <span>Type: {(paymentDetails[selectedMethod as keyof typeof paymentDetails] as { type: string }).type}</span>
                  <span className="text-purple-600">Send Money</span>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Submission Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-zinc-700 mb-2">{t('senderNumber')}</label>
            <input
              type="text"
              required
              value={senderNumber}
              onChange={(e) => setSenderNumber(e.target.value)}
              placeholder="e.g. +88017XXXXXXXX"
              className="w-full p-4 border-2 border-zinc-100 rounded-2xl focus:border-purple-600 transition-colors outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-zinc-700 mb-2">{t('transactionId')}</label>
            <input
              type="text"
              required
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter your Transaction ID"
              className="w-full p-4 border-2 border-zinc-100 rounded-2xl focus:border-purple-600 transition-colors outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-5 rounded-2xl hover:shadow-lg hover:shadow-purple-900/20 transition-all mt-4"
          >
            {t('submit')}
          </button>
        </form>

        {selectedMethod === 'bkash' && (
          <div className="mt-8 text-center">
            <a 
              href="https://shop.bkash.com/orbitx-mcn/paymentlink/default-payment" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-600 font-bold hover:underline"
            >
              <ExternalLink size={18} />
              {t('payViaBkash')}
            </a>
          </div>
        )}
      </motion.div>
    </div>
  );
}
