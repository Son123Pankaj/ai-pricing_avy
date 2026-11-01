import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';

// Dedicated Core Pages & Dynamic Route Targets
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import PolicyPage from './pages/PolicyPage';

const ROUTE_CONFIG = {
  '/': { title: 'Avyukta IntelliCall | AI Voice & Cloud Telephony', page: 'home', hash: null },
  '/services': { title: 'Telephony & BPO Dialer Services | Avyukta IntelliCall', page: 'services', hash: null },
  '/cloud-dialer': { title: 'Cloud Predictive Dialers | Avyukta IntelliCall', page: 'services', hash: 'cloud-dialer' },
  '/voip-minutes': { title: 'Carrier-Grade VoIP Minutes | Avyukta IntelliCall', page: 'services', hash: 'voip-minutes' },
  '/std-did': { title: 'Pan-India STD DID Numbers | Avyukta IntelliCall', page: 'services', hash: 'std-did' },
  '/ippbx': { title: 'Enterprise IPPBX & Asterisk PBX | Avyukta IntelliCall', page: 'services', hash: 'ippbx' },
  '/features': { title: 'AI Features & CRM Integration | Avyukta IntelliCall', page: 'features', hash: null },
  '/ai-caller': { title: 'AI Voice Caller & Agents | Avyukta IntelliCall', page: 'features', hash: 'ai-caller' },
  '/whatsapp-crm': { title: 'Meta WhatsApp & CRM Integration | Avyukta IntelliCall', page: 'features', hash: 'meta-crm' },
  '/business-automation': { title: '9-Stakeholder BPA Consulting | Avyukta IntelliCall', page: 'home', hash: 'business-ecosystem' },
  '/pricing': { title: 'Transparent Pricing (₹0.30/m) | Avyukta IntelliCall', page: 'pricing', hash: null },
  '/rate-calculator': { title: 'Volume Rate Calculator | Avyukta IntelliCall', page: 'pricing', hash: 'volume' },
  '/about': { title: 'About Us - 19+ Years Heritage | Avyukta IntelliCall', page: 'about', hash: null },
  '/faq': { title: 'FAQ & Telecom Support | Avyukta IntelliCall', page: 'home', hash: 'faq' },
  '/contact': { title: 'Contact Us - Jaipur HQ | Avyukta IntelliCall', page: 'contact', hash: null },
  '/privacy': { title: 'Privacy Policy | Avyukta IntelliCall', page: 'privacy', hash: null },
  '/terms': { title: 'Terms of Service | Avyukta IntelliCall', page: 'terms', hash: null },
  '/refund': { title: 'Refund & Cancellation Policy | Avyukta IntelliCall', page: 'refund', hash: null }
};

export default function App() {
  // Client-Side Page Router (Clean, fast, SEO-friendly)
  const [currentPath, setCurrentPath] = useState(() => {
    const p = window.location.pathname;
    return ROUTE_CONFIG[p] ? p : '/';
  });

  // Theme state: light or dark with persistence
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // Trial Modal state (Sir's Point 9)
  const [isTrialOpen, setIsTrialOpen] = useState(false);

  // Sync document title, canonical link, and auto-scroll per route
  useEffect(() => {
    const cfg = ROUTE_CONFIG[currentPath] || ROUTE_CONFIG['/'];
    document.title = cfg.title;

    try {
      const fullUrl = window.location.origin + (currentPath === '/' ? '/' : currentPath);
      let canonical = document.querySelector("link[rel='canonical']");
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = fullUrl;

      let ogUrl = document.querySelector("meta[property='og:url']");
      if (ogUrl) {
        ogUrl.setAttribute('content', fullUrl);
      }
    } catch {
      // Non-browser fallback
    }

    if (cfg.hash) {
      setTimeout(() => {
        const el = document.getElementById(cfg.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [currentPath]);

  // Handle browser back/forward history buttons
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      setCurrentPath(ROUTE_CONFIG[p] ? p : '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Theme attribute sync
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navigateTo = (path) => {
    const [basePath, hashPart] = path.split('#');
    const target = ROUTE_CONFIG[basePath] ? basePath : '/';
    setCurrentPath(target);
    try {
      window.history.pushState({}, '', path);
    } catch {
      // ignore
    }
    const targetHash = hashPart || (ROUTE_CONFIG[basePath] && ROUTE_CONFIG[basePath].hash);
    if (targetHash) {
      setTimeout(() => {
        const el = document.getElementById(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openTrialModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    window.open('https://ai.avyukta.in/', '_blank');
  };

  const closeTrialModal = () => {
    setIsTrialOpen(false);
  };

  // Render current active page
  const renderCurrentPage = () => {
    const cfg = ROUTE_CONFIG[currentPath] || ROUTE_CONFIG['/'];
    switch (cfg.page) {
      case 'services':
        return <ServicesPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case 'features':
        return <FeaturesPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case 'pricing':
        return <PricingPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case 'privacy':
      case 'terms':
      case 'refund':
        return <PolicyPage type={cfg.page} onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case 'home':
      default:
        return <HomePage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen app-shell">
      {/* 1. Clean, Uncluttered 6-Page Navigation Header */}
      <Navbar 
        currentPath={currentPath}
        navigateTo={navigateTo}
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenTrial={openTrialModal} 
      />

      {/* 2. Page Content View */}
      <main id="main-content">
        {renderCurrentPage()}
      </main>

      {/* 3. Deep Teal Branded Footer */}
      <Footer onOpenTrial={openTrialModal} navigateTo={navigateTo} />

      {/* 4. Instant Trial Activation Modal */}
      <TrialModal 
        isOpen={isTrialOpen} 
        onClose={closeTrialModal} 
      />
    </div>
  );
}
