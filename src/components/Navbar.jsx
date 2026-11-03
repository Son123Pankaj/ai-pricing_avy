import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight, Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Features', path: '/features' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' }
];

export default function Navbar({ currentPath, navigateTo, theme, toggleTheme, onOpenTrial }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (navigateTo) navigateTo(path);
  };

  const handleTrialClick = (e) => {
    setMobileMenuOpen(false);
    window.open('https://ai.avyukta.in/', '_blank');
  };

  return (
    <header className={`header-pro ${theme === 'dark' ? 'header-teal' : 'header-light'} ${scrolled ? 'header-scrolled' : ''}`}>
      {/* Top Coral/Orange Accent Stripe */}
      <div className="navbar-top-accent-stripe"></div>

      <div className="wrap nav-pro">
        {/* Brand Logo (Adaptive white on dark, dark on light) */}
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); handleNavClick('/'); }} 
          className="logo-pro-btn" 
          aria-label="Avyukta IntelliCall Home"
        >
          <img
            src={getAssetUrl(theme === 'dark' ? '/avyukta-dark.png' : '/avyukta-light.png')}
            alt="Avyukta IntelliCall"
            className="brand-logo-img"
          />
        </a>

        {/* Clean, Uncluttered 6-Page Navigation (No cramped clutter) */}
        <nav className="links-pro">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="nav-actions-pro">
          {/* Theme Toggle Switch */}
          <button
            type="button"
            className="theme-toggle-pro"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun size={17} className="text-amber-400 rotate-icon" />
            ) : (
              <Moon size={17} className="text-slate-700 rotate-icon" />
            )}
          </button>

          {/* Luxury Orange CTA Button */}
          <a 
            href="https://ai.avyukta.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleTrialClick} 
            className="btn-navbar-cta btn-cta-orange"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Sparkles size={14} className="sparkle-anim" />
            <span>Start Free Trial</span>
            <ArrowRight size={15} className="arrow-shift" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <div className={`mobile-nav-drawer ${theme === 'dark' ? 'mobile-drawer-teal' : 'mobile-drawer-light'} ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <nav className="mobile-nav-links">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.path); }}
                  className={`mobile-link ${isActive ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mobile-nav-footer">
            <a
              href="https://ai.avyukta.in/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-mobile-trial btn-cta-orange"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <PhoneCall size={16} />
              <span>Start Free AI Voice Trial</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
