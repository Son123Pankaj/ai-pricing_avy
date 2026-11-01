import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';

// Dedicated 6 Core Pages (As Specified by User)
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

const SEO_TITLES = {
  '/': 'Avyukta IntelliCall | AI Voice Agents & Cloud Telephony',
  '/services': 'Telephony & BPO Dialer Services | Avyukta IntelliCall',
  '/about': 'About Us - 16+ Years Telecom Heritage | Avyukta IntelliCall',
  '/features': '14 Business AI Features & CRM | Avyukta IntelliCall',
  '/pricing': 'Transparent Pricing Plans (₹0.30/min) | Avyukta IntelliCall',
  '/contact': 'Contact Us - Jaipur HQ & Pan-India DIDs | Avyukta IntelliCall'
};

export default function App() {
  // Client-Side Page Router (Clean, fast, SEO-friendly)
  const [currentPath, setCurrentPath] = useState(() => {
    const p = window.location.pathname;
    return SEO_TITLES[p] ? p : '/';
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

  // Sync document title and meta per page
  useEffect(() => {
    const title = SEO_TITLES[currentPath] || SEO_TITLES['/'];
    document.title = title;
  }, [currentPath]);

  // Handle browser back/forward history buttons
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      setCurrentPath(SEO_TITLES[p] ? p : '/');
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
    const target = SEO_TITLES[path] ? path : '/';
    setCurrentPath(target);
    try {
      window.history.pushState({}, '', target);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    switch (currentPath) {
      case '/services':
        return <ServicesPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case '/about':
        return <AboutPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case '/features':
        return <FeaturesPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case '/pricing':
        return <PricingPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case '/contact':
        return <ContactPage onOpenTrial={openTrialModal} navigateTo={navigateTo} />;
      case '/':
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
