import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Smartphone, Wallet, CheckCircle2, Copy, ExternalLink, Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { JoinFormData } from '../types';

type PaymentMethod = 'bkash' | 'nagad' | 'rocket' | 'binance' | 'card';
type Currency = 'USD' | 'EUR' | 'GBP';

interface PaymentProps {
  applicantData?: JoinFormData;
}

const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79
};

const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  GBP: '£'
};

export default function Payment({ applicantData: propData }: PaymentProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const applicantData = propData || location.state?.applicantData;
  
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('bkash');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [transactionId, setTransactionId] = useState('');
  const [senderNumber, setSenderNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const baseAmount = 100;
  const convertedAmount = (baseAmount * EXCHANGE_RATES[currency]).toFixed(2);
  const displayAmount = `${CURRENCY_SYMBOLS[currency]}${convertedAmount}`;

  const paymentDetails = {
    bkash: { number: '+8801927694437', type: 'Personal' },
    nagad: { number: '+8801927694437', type: 'Personal' },
    rocket: { number: '+8801927694437', type: 'Personal' },
    binance: { address: '0x3d434c9f0de3d867ee826adf4990b6b0e70fefe0', network: 'BSC BNB Smart Chain (BEP20)' },
    card: { link: 'https://buy.stripe.com/test_6oE7sC0X98Yk97W6oo', type: 'Card/Global' }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    // Header
    doc.setFontSize(24);
    doc.setTextColor(124, 58, 237); // Purple-600
    doc.text('OrbitX MCN', 105, 20, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setTextColor(156, 163, 175); // Gray-400
    doc.text('Official Payment Receipt', 105, 28, { align: 'center' });
    
    // Line
    doc.setDrawColor(244, 244, 245);
    doc.line(20, 35, 190, 35);
    
    // Info
    doc.setFontSize(10);
    doc.setTextColor(113, 113, 122); // Gray-500
    doc.text('RECEIPT FOR', 20, 45);
    doc.text('DATE PAID', 190, 45, { align: 'right' });
    
    doc.setFontSize(12);
    doc.setTextColor(24, 24, 27); // Zinc-900
    doc.text(applicantData?.fullName || 'Creator', 20, 52);
    doc.text(date, 190, 52, { align: 'right' });
    
    doc.setFontSize(10);
    doc.setTextColor(113, 113, 122);
    doc.text(applicantData?.email || '', 20, 58);
    
    // Table
    autoTable(doc, {
      startY: 70,
      head: [['Description', 'Amount']],
      body: [
        ['OrbitX MCN Joining Fee\nOne-time channel integration and growth support fee.', displayAmount]
      ],
      headStyles: {
        fillColor: [249, 250, 251],
        textColor: [113, 113, 122],
        fontSize: 10,
        fontStyle: 'bold',
        halign: 'left'
      },
      columnStyles: {
        1: { halign: 'right' }
      },
      styles: {
        fontSize: 11,
        cellPadding: 8
      },
      theme: 'plain'
    });
    
    // Total
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const finalY = (doc as any).lastAutoTable?.finalY || 100;
    doc.setDrawColor(244, 244, 245);
    doc.setLineWidth(0.5);
    doc.line(20, finalY + 5, 190, finalY + 5);
    
    doc.setFontSize(12);
    doc.setTextColor(24, 24, 27);
    doc.text('Total Paid', 20, finalY + 15);
    
    doc.setFontSize(16);
    doc.setTextColor(124, 58, 237);
    doc.text(displayAmount, 190, finalY + 15, { align: 'right' });
    
    // Transaction Details Box
    doc.setFillColor(249, 250, 251);
    doc.roundedRect(20, finalY + 30, 170, 35, 3, 3, 'F');
    
    doc.setFontSize(9);
    doc.setTextColor(113, 113, 122);
    doc.text('TRANSACTION DETAILS', 30, finalY + 40);
    
    doc.setFontSize(10);
    doc.setTextColor(113, 113, 122);
    doc.text('Payment Method', 30, finalY + 50);
    doc.text('Transaction ID', 110, finalY + 50);
    
    doc.setTextColor(24, 24, 27);
    doc.text(selectedMethod.toUpperCase(), 30, finalY + 57);
    doc.text(transactionId, 110, finalY + 57);
    
    // Footer
    doc.setFontSize(9);
    doc.setTextColor(161, 161, 170);
    doc.text('© 2026 OrbitX MCN. All rights reserved.', 105, 280, { align: 'center' });
    doc.text('This is an automated receipt. No signature required.', 105, 285, { align: 'center' });
    
    doc.save(`OrbitX_Receipt_${transactionId}.pdf`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transactionId || !senderNumber) return;

    setIsSendingEmail(true);
    
    // Send confirmation email
    if (applicantData?.email) {
      try {
        await fetch('/api/send-confirmation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: applicantData.email,
            name: applicantData.fullName,
            method: selectedMethod,
            transactionId,
            amount: displayAmount
          })
        });
      } catch (error) {
        console.error('Failed to send confirmation email:', error);
      }
    }

    setIsSendingEmail(false);
    setShowSuccess(true);

    // Brief delay to show success animation
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Construct message for WhatsApp
    let message = `Payment Verification Request!
    
--- Payment Details ---
Method: ${selectedMethod.toUpperCase()}
Sender Number: ${senderNumber}
Transaction ID: ${transactionId}
Amount: ${displayAmount} (Join Fee)`;

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
          <button 
            onClick={generatePDF}
            className="bg-zinc-900 text-white font-bold py-4 px-8 rounded-2xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
          >
            <Download size={20} />
            {t('downloadReceipt')}
          </button>
          <a 
            href="https://wa.me/8801927694437" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-4 px-8 rounded-2xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
          >
            {t('chatWhatsApp')}
          </a>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setShowSuccess(false);
              setTransactionId('');
              setSenderNumber('');
            }}
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
        
        <div className="flex flex-col items-center mb-10">
          <p className="text-zinc-500 font-medium mb-4">
            {t('totalAmount', { amount: displayAmount })}
          </p>
          <div className="flex bg-zinc-100 p-1 rounded-xl">
            {(['USD', 'EUR', 'GBP'] as Currency[]).map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                  currency === cur 
                    ? 'bg-white text-purple-600 shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-700'
                }`}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {(['bkash', 'nagad', 'rocket', 'binance', 'card'] as PaymentMethod[]).map((method) => (
            <button
              key={method}
              onClick={() => setSelectedMethod(method)}
              className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                selectedMethod === method 
                  ? 'border-purple-600 bg-purple-50 text-purple-600' 
                  : 'border-zinc-100 hover:border-zinc-200 text-zinc-500'
              }`}
            >
              {method === 'binance' ? (
                <Wallet size={24} />
              ) : method === 'card' ? (
                <img 
                  src="https://www.nicepng.com/png/full/87-870350_credit-cards-all-credit-card-logos.png" 
                  alt="Card" 
                  className="h-6 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <Smartphone size={24} />
              )}
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
            ) : selectedMethod === 'card' ? (
              <div className="space-y-4">
                <p className="text-sm font-medium text-zinc-600">{t('payViaCard')}</p>
                <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-zinc-200">
                  <span className="text-sm font-bold text-zinc-900 flex-1 truncate">
                    {paymentDetails.card.link}
                  </span>
                  <a 
                    href={paymentDetails.card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-zinc-100 rounded-lg transition-colors text-zinc-400 hover:text-purple-600"
                    title="Open Payment Link"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <span>Type: {paymentDetails.card.type}</span>
                  <span className="text-purple-600">Global Payment</span>
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
        <div className="pt-6 border-t border-zinc-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900">Verify Transaction</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative group">
              <label className="block text-sm font-bold text-zinc-700 mb-2 ml-1">
                {t('senderNumber')}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-purple-600 transition-colors">
                  <Smartphone size={20} />
                </div>
                <input
                  type="text"
                  required
                  value={senderNumber}
                  onChange={(e) => setSenderNumber(e.target.value)}
                  placeholder="e.g. +88017XXXXXXXX"
                  className="w-full pl-12 pr-4 py-4 bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:border-purple-600 focus:bg-white transition-all outline-none text-zinc-900 font-medium"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block text-sm font-bold text-zinc-700 mb-2 ml-1">
                {t('transactionId')}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-purple-600 transition-colors">
                  <Wallet size={20} />
                </div>
                <input
                  type="text"
                  required
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Enter your Transaction ID"
                  className="w-full pl-12 pr-4 py-4 bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:border-purple-600 focus:bg-white transition-all outline-none text-zinc-900 font-medium"
                />
              </div>
            </div>

            <div className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 flex items-start gap-3 mb-2">
              <div className="mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed font-medium">
                Your payment is secure. After submission, our team will verify the transaction and activate your account within 1-2 hours.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSendingEmail || showSuccess}
              className={`w-full font-bold py-5 rounded-2xl transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                showSuccess 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl hover:shadow-purple-500/20 active:scale-[0.98]'
              }`}
            >
              {isSendingEmail ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Processing...
                </>
              ) : showSuccess ? (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 size={24} />
                  <span>Success!</span>
                </motion.div>
              ) : (
                <>
                  <span>{t('submit')}</span>
                  <ExternalLink size={18} className="opacity-50" />
                </>
              )}
            </button>
          </form>
        </div>

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
