import { useLocation, Navigate } from 'react-router-dom';
import Payment from '../components/Payment';
import { motion } from 'motion/react';

export default function PaymentPage() {
  const location = useLocation();
  const applicantData = location.state?.applicantData;

  // If no applicant data, redirect back to home (or join form)
  if (!applicantData) {
    return <Navigate to="/#join-form" replace />;
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
          Complete Your Payment
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Thank you for your application, <span className="text-purple-600 font-bold">{applicantData.fullName}</span>! 
          Please complete the joining fee to activate your OrbitX MCN account.
        </p>
      </motion.div>
      
      <Payment applicantData={applicantData} />
      
      <div className="mt-12 text-center text-zinc-400 text-sm">
        <p>© 2026 OrbitX MCN. All rights reserved.</p>
        <p className="mt-2">Secure Payment Gateway • 256-bit Encryption</p>
      </div>
    </div>
  );
}
