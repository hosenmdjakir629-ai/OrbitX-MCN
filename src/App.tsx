import Hero from './components/Hero';
import Partners from './components/Partners';
import Features from './components/Features';
import PlatformTools from './components/PlatformTools';
import AITools from './components/AITools';
import CreatorTestimonials from './components/CreatorTestimonials';
import Earnings from './components/Earnings';
import CopyrightProtection from './components/CopyrightProtection';
import RequirementsPricing from './components/RequirementsPricing';
import JoinForm from './components/JoinForm';
import FAQ from './components/FAQ';
import Trust from './components/Trust';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <LanguageSwitcher />
      <Hero />
      <Partners />
      <Features />
      <PlatformTools />
      <AITools />
      <CreatorTestimonials />
      <Earnings />
      <CopyrightProtection />
      <RequirementsPricing />
      <FAQ />
      <JoinForm />
      <Trust />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
