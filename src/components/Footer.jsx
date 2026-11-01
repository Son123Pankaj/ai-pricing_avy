import React from 'react';
import { 
  MapPin, 
  Mail, 
  Clock, 
  ExternalLink, 
  MessageCircle,
  PhoneCall
} from 'lucide-react';

// Crisp Inline Social SVGs (100% Reliable & Retina Sharp)
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

// Circular Flag SVGs (Crisp & Authentic across all devices)
const UsFlagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" style={{ borderRadius: '50%', flexShrink: 0 }}>
    <clipPath id="us-flag-round"><circle cx="16" cy="16" r="16"/></clipPath>
    <g clipPath="url(#us-flag-round)">
      <path fill="#b22234" d="M0 0h32v32H0z"/>
      <path stroke="#fff" strokeWidth="2.46" d="M0 3.7h32M0 8.6h32M0 13.5h32M0 18.5h32M0 23.4h32M0 28.3h32"/>
      <path fill="#3c3b6e" d="M0 0h16v16H0z"/>
      <circle cx="4" cy="4" r="1" fill="#fff"/>
      <circle cx="8" cy="4" r="1" fill="#fff"/>
      <circle cx="12" cy="4" r="1" fill="#fff"/>
      <circle cx="6" cy="8" r="1" fill="#fff"/>
      <circle cx="10" cy="8" r="1" fill="#fff"/>
      <circle cx="4" cy="12" r="1" fill="#fff"/>
      <circle cx="8" cy="12" r="1" fill="#fff"/>
      <circle cx="12" cy="12" r="1" fill="#fff"/>
    </g>
  </svg>
);

const IndiaFlagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" style={{ borderRadius: '50%', flexShrink: 0 }}>
    <clipPath id="in-flag-round"><circle cx="16" cy="16" r="16"/></clipPath>
    <g clipPath="url(#in-flag-round)">
      <path fill="#ff9933" d="M0 0h32v10.7H0z"/>
      <path fill="#ffffff" d="M0 10.7h32v10.6H0z"/>
      <path fill="#128807" d="M0 21.3h32v10.7H0z"/>
      <circle cx="16" cy="16" r="3.5" fill="none" stroke="#000080" strokeWidth="0.9"/>
      <circle cx="16" cy="16" r="0.8" fill="#000080"/>
    </g>
  </svg>
);

export default function Footer({ onOpenTrial, navigateTo }) {
  const handleNav = (path) => {
    if (navigateTo) {
      navigateTo(path);
    }
  };

  return (
    <>
      {/* Floating Side "CALL US" Badge (Exact Match to User Image Left Edge) */}
      <a 
        href="tel:+918560000600" 
        className="floating-call-us-tab"
        aria-label="Call Avyukta Sales & Support"
        title="Call +91-856-0000-600"
      >
        <PhoneCall size={14} className="call-tab-icon" />
        <span className="call-tab-text">CALL US</span>
      </a>

      {/* Floating Bottom-Right WhatsApp AI + Human Bot Widget */}
      <a 
        href="https://wa.me/918560000600?text=Hello%20Avyukta%20IntelliCall,%20I%20am%20interested%20in%20AI%20Voice%20Agents" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp-widget"
        aria-label="Chat with Avyukta WhatsApp AI + Human Bot"
      >
        <img 
          src="/whatsapp-bot-badge.png" 
          alt="Avyukta WhatsApp AI + Human BoT" 
          className="floating-whatsapp-badge-img" 
        />
      </a>

      {/* Main Footer Container (Deep Teal Theme from Reference Image) */}
      <footer className="avyukta-teal-footer" id="footer">
        {/* Top Coral/Orange Accent Stripe */}
        <div className="footer-top-accent-stripe"></div>

        <div className="footer-content-wrap">
          <div className="footer-cards-grid">
            {/* ==============================================================
                Column 1: Follow Us (Solutions, Brochures & Social Links)
                ============================================================== */}
            <div className="footer-col-card col-follow-us">
              <div className="footer-card-heading">
                <h3>Follow Us</h3>
                <span className="orange-accent-line"></span>
              </div>

              {/* 2-Subcolumn Links Layout */}
              <div className="follow-us-links-grid">
                <ul className="footer-subcol-list">
                  <li><button type="button" onClick={() => handleNav('/services')} className="footer-link-btn">Dialer Snapshots</button></li>
                  <li><button type="button" onClick={() => handleNav('/about')} className="footer-link-btn">Avyukta-E-Brochure</button></li>
                  <li><button type="button" onClick={() => handleNav('/services')} className="footer-link-btn">IPPBX</button></li>
                  <li><button type="button" onClick={() => handleNav('/features')} className="footer-link-btn">Avyukta CRM Software</button></li>
                  <li><button type="button" onClick={() => handleNav('/pricing')} className="footer-link-btn">A2Z Ratesheet</button></li>
                  <li><button type="button" onClick={() => handleNav('/contact')} className="footer-link-btn">International</button></li>
                  <li><button type="button" onClick={() => handleNav('/features')} className="footer-link-btn">AI Caller</button></li>
                  <li><button type="button" onClick={() => handleNav('/contact')} className="footer-link-btn">Avyukta Dubai Contact Centre Solutions</button></li>
                </ul>

                <ul className="footer-subcol-list">
                  <li><button type="button" onClick={() => handleNav('/features')} className="footer-link-btn">Feature List</button></li>
                  <li><button type="button" onClick={() => handleNav('/features')} className="footer-link-btn">CRM requirement</button></li>
                  <li><button type="button" onClick={() => handleNav('/services')} className="footer-link-btn">WFH-Architecture</button></li>
                  <li><button type="button" onClick={() => handleNav('/pricing')} className="footer-link-btn">Avyukta WebRTC Prices</button></li>
                  <li><button type="button" onClick={() => handleNav('/contact')} className="footer-link-btn">Domestic</button></li>
                  <li><button type="button" onClick={() => handleNav('/features')} className="footer-link-btn">Digital Marketing</button></li>
                  <li><button type="button" onClick={() => handleNav('/features')} className="footer-link-btn">Avyukta WhatsApp Solutions</button></li>
                </ul>
              </div>

              {/* Social Media Buttons */}
              <div className="footer-social-row">
                <a 
                  href="https://facebook.com/avyuktaintellicall" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn" 
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a 
                  href="https://twitter.com/avyuktaintelli" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn" 
                  aria-label="Twitter / X"
                >
                  <TwitterIcon />
                </a>
                <a 
                  href="https://linkedin.com/company/avyukta-intellicall" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn" 
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
                <a 
                  href="https://instagram.com/avyuktaintellicall" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-btn" 
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/* ==============================================================
                Column 2: Quick Links (Exact to Reference Screenshot)
                ============================================================== */}
            <div className="footer-col-card col-quick-links">
              <div className="footer-card-heading">
                <h3>Links</h3>
                <span className="orange-accent-line"></span>
              </div>

              <ul className="footer-single-list links-spaced-list">
                <li><button type="button" onClick={() => handleNav('/services')} className="footer-link-btn">Services</button></li>
                <li><button type="button" onClick={() => handleNav('/about')} className="footer-link-btn">About</button></li>
                <li><button type="button" onClick={() => handleNav('/pricing')} className="footer-link-btn">Prices</button></li>
                <li><button type="button" onClick={() => handleNav('/features')} className="footer-link-btn">Tutorial</button></li>
                <li><button type="button" onClick={() => handleNav('/features')} className="footer-link-btn">Architecture</button></li>
                <li><button type="button" onClick={() => handleNav('/contact')} className="footer-link-btn">Contact Us</button></li>
              </ul>
            </div>

            {/* ==============================================================
                Column 3: Contact Info (Exact Reference Image Details)
                ============================================================== */}
            <div className="footer-col-card col-contact-info">
              <div className="footer-card-heading">
                <h3>Contact Info</h3>
                <span className="orange-accent-line"></span>
              </div>

              <div className="contact-boxes-column">
                {/* Address Box */}
                <div className="contact-box-item address-box">
                  <MapPin size={18} className="contact-icon text-orange" />
                  <p className="contact-box-text">
                    A-26, Laxminarayan Vihar , Between Mahadev Mandir and Kirana , Near Kotecha Building , Vande Mataram Road , Bharat Mata Circle , Jaipur , 302020 Rajasthan, India.
                  </p>
                </div>

                {/* US Phone */}
                <a href="tel:+14084262726" className="contact-box-item link-box">
                  <UsFlagIcon />
                  <span className="contact-box-text">US +1-408-426-2726</span>
                </a>

                {/* India Phone */}
                <a href="tel:+918560000600" className="contact-box-item link-box">
                  <IndiaFlagIcon />
                  <span className="contact-box-text">INDIA +91-856-0000-600</span>
                </a>

                {/* Email Address */}
                <a href="mailto:salesat@dialerpune.in" className="contact-box-item link-box">
                  <Mail size={16} className="contact-icon text-orange" />
                  <span className="contact-box-text email-text">salesat@dialerpune.in</span>
                </a>

                {/* Working Hours */}
                <div className="contact-box-item hours-box">
                  <Clock size={16} className="contact-icon text-orange" />
                  <span className="contact-box-text">24*6 open</span>
                </div>
              </div>
            </div>

            {/* ==============================================================
                Column 4: Google Maps & Our Channel Partner
                ============================================================== */}
            <div className="footer-col-card col-map-partners">
              {/* Google Maps Embed Card */}
              <div className="footer-map-container">
                <div className="map-top-bar">
                  <a 
                    href="https://maps.google.com/?q=Avyukta+Intellicall+Consulting+Private+Limited+Jaipur" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="open-in-maps-btn"
                  >
                    <span>Open In Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Interactive Map Iframe */}
                <div className="map-iframe-wrap">
                  <iframe
                    title="Avyukta IntelliCall Jaipur Location"
                    src="https://maps.google.com/maps?q=Avyukta+Intellicall+Consulting+Private+Limited,+A-26,+Laxminarayan+Vihar,+Jaipur,+Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Our Channel Partner Section (Exact match to reference screenshot) */}
              <div className="channel-partners-block">
                <div className="partners-heading-row">
                  <h4>Our Channel Partner</h4>
                  <span className="orange-accent-line centered"></span>
                </div>

                {/* 3 Partner Logo Pills */}
                <div className="partners-badges-row">
                  {/* Zoho / 4 Squares Badge */}
                  <div className="partner-logo-pill" title="Zoho CRM Partner">
                    <div className="partner-squares-icon">
                      <span className="sq red"></span>
                      <span className="sq green"></span>
                      <span className="sq blue"></span>
                      <span className="sq yellow"></span>
                    </div>
                    <span className="partner-name-text">ZOHO</span>
                  </div>

                  {/* Genesys Badge */}
                  <div className="partner-logo-pill" title="Genesys Telecom Cloud">
                    <span className="genesys-symbol">O</span>
                    <span className="partner-name-text genesys">GENESYS</span>
                  </div>

                  {/* Bitrix24 Badge */}
                  <div className="partner-logo-pill" title="Bitrix24 CRM Partner">
                    <span className="partner-name-text bitrix">Bitrix<b>24</b></span>
                    <Clock size={12} className="text-sky-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="footer-copyright-bar">
          <div className="wrap">
            <p className="copyright-text">
              &copy; Copyright 2026 All Rights Reserved By <b>Avyukta Intellicall</b>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
