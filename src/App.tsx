import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TermsAndConditions from './components/TermsAndConditions';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <LanguageSwitcher />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </div>
        <ScrollToTop />
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}
