import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import CreatorTestimonials from './components/CreatorTestimonials';
import Earnings from './components/Earnings';
import RequirementsPricing from './components/RequirementsPricing';
import JoinForm from './components/JoinForm';
import FAQ from './components/FAQ';
import Trust from './components/Trust';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import PaymentPage from './components/PaymentPage';
import LanguageSwitcher from './components/LanguageSwitcher';
import { JoinFormData } from './types';

export default function App() {
  const [joinFormData, setJoinFormData] = useState<JoinFormData | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <LanguageSwitcher />
      {joinFormData ? (
        <PaymentPage joinFormData={joinFormData} />
      ) : (
        <>
          <Hero />
          <Features />
          <CreatorTestimonials />
          <Earnings />
          <RequirementsPricing />
          <FAQ />
          <JoinForm onSubmitted={(data) => setJoinFormData(data)} />
          <Trust />
          <ScrollToTop />
        </>
      )}
      <Footer />
    </div>
  );
}
