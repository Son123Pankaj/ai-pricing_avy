import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import TrustedByMarquee from '../components/TrustedByMarquee';
import PlanCards from '../components/PlanCards';
import BusinessAiFeatures from '../components/BusinessAiFeatures';
import IndustryVoiceCrm from '../components/IndustryVoiceCrm';
import PanIndiaConnectivity from '../components/PanIndiaConnectivity';
import FaqSection from '../components/FaqSection';
import CtaSection from '../components/CtaSection';
import { 
  Award, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  TrendingUp, 
  Headphones,
  Bot,
  PhoneCall,
  Sparkles
} from 'lucide-react';

export default function HomePage({ onOpenTrial, navigateTo }) {
  return (
    <div className="home-page-view">
      {/* 1. Hero Carousel & Live Voice Simulator */}
      <HeroCarousel onOpenTrial={onOpenTrial} />

      {/* 2. Razor-Sharp Enterprise Client Marquee */}
      <TrustedByMarquee />

      {/* 3. Three Signature Pricing Plans (₹0.30/min) */}
      <section className="home-pricing-showcase-section">
        <div className="wrap">
          <div className="home-section-head">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>TRANSPARENT USAGE PRICING</span>
            </div>
            <h2 className="home-title">
              Simple, Predictable Pricing <span className="title-coral">Starting at ₹0.30/min</span>
            </h2>
            <p className="home-subtitle">
              No seat licenses. No agent limits. Billed strictly by the second with zero lock-in contracts.
            </p>
          </div>
        </div>
        <PlanCards onOpenTrial={onOpenTrial} />
        <div className="wrap" style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '45px' }}>
          <button 
            type="button" 
            onClick={() => navigateTo('/pricing')}
            className="btn-view-all-link"
            style={{ display: 'inline-flex', margin: '0 auto' }}
          >
            <span>Explore Voice Engines, Audio Samples &amp; ROI Calculator</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* 4. 14 Business AI Tools Showcase */}
      <section className="home-features-showcase-section">
        <div className="wrap">
          <div className="home-section-head">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>14 BUSINESS AI TOOLS</span>
            </div>
            <h2 className="home-title">
              Automate Inbound &amp; Outbound <span className="title-coral">Sales Pipelines</span>
            </h2>
            <p className="home-subtitle">
              From sub-500ms conversational turn-taking to multi-channel WhatsApp drips and automated CRM logging.
            </p>
          </div>
        </div>
        <BusinessAiFeatures onOpenTrial={onOpenTrial} hideHeader={true} />
      </section>

      {/* 5. 20 Pre-Configured Industry Templates & CRM (Image 1 Exact Match) */}
      <IndustryVoiceCrm onOpenTrial={onOpenTrial} />

      {/* 6. India's First Dialect-Native Voice AI Telephony Network (Image 2 Exact Match) */}
      <PanIndiaConnectivity onOpenTrial={onOpenTrial} />

      {/* 7. Turnkey BPO & Telephony Services Snapshot */}
      <section className="home-services-preview-section">
        <div className="wrap">
          <div className="preview-split-header">
            <div>
              <div className="pricing-badge-pro">
                <span className="badge-dot-coral"></span>
                <span>SERVICES SUITE</span>
              </div>
              <h2 className="home-title">
                Turnkey BPO &amp; <span className="title-coral">Telephony Solutions</span>
              </h2>
            </div>
            <button 
              type="button" 
              onClick={() => navigateTo('/services')} 
              className="btn-view-all-link"
            >
              <span>Explore All Services</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="home-services-grid">
            <div className="home-service-card" onClick={() => navigateTo('/services')}>
              <Building2 size={24} className="text-brand" />
              <h4>Setting Up Your BPO Services</h4>
              <p>Turnkey infrastructure, Asterisk PBX, GSM gateways, PRI/SIP trunks, and process consulting.</p>
              <span className="service-card-link">Learn More &rarr;</span>
            </div>

            <div className="home-service-card" onClick={() => navigateTo('/services')}>
              <TrendingUp size={24} className="text-good" />
              <h4>Surge in Call Centre Profit</h4>
              <p>360° real-time supervision, Vicidial + Avyukta dialer integration, cutting operational costs by 60%.</p>
              <span className="service-card-link">Learn More &rarr;</span>
            </div>

            <div className="home-service-card" onClick={() => navigateTo('/services')}>
              <Headphones size={24} className="text-brand" />
              <h4>Uninterrupted 24*6 Support</h4>
              <p>Proactive monitoring by senior VoIP engineers for continuous, zero-downtime dialer performance.</p>
              <span className="service-card-link">Learn More &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Core Pillars / Why Choose Avyukta Snapshot */}
      <section className="home-pillars-section">
        <div className="wrap">
          <div className="home-section-head">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>PIONEERING AI TELEPHONY</span>
            </div>
            <h2 className="home-title">
              Why Indian Enterprises Choose <span className="title-coral">Avyukta IntelliCall</span>
            </h2>
            <p className="home-subtitle">
              The only communication platform combining 19+ years of carrier-grade telecom infrastructure 
              with sub-500ms neural voice agents and Meta CRM automation.
            </p>
          </div>

          <div className="home-pillars-grid">
            <div className="home-pillar-card">
              <div className="pillar-icon-box" style={{ color: '#4f46e5', backgroundColor: 'rgba(79, 70, 229, 0.1)' }}>
                <Award size={24} />
              </div>
              <h3>19+ Years Telecom Heritage</h3>
              <p>
                Founded in May 2008 with 475+ contact center deployments. We own the underlying SIP trunks, 
                PRI gateways, and carrier interconnects for 99.99% uptime.
              </p>
              <ul className="pillar-checks">
                <li><CheckCircle2 size={15} className="text-good" /> 475+ BPO setups completed</li>
                <li><CheckCircle2 size={15} className="text-good" /> Direct carrier-grade termination</li>
              </ul>
            </div>

            <div className="home-pillar-card">
              <div className="pillar-icon-box" style={{ color: '#059669', backgroundColor: 'rgba(5, 150, 105, 0.1)' }}>
                <Zap size={24} />
              </div>
              <h3>Sub-500ms Voice Latency</h3>
              <p>
                Human-grade response times in Hindi, English, and regional Indic dialects. 
                Handles natural interruptions and pauses seamlessly without robot lag.
              </p>
              <ul className="pillar-checks">
                <li><CheckCircle2 size={15} className="text-good" /> 60+ expressive studio voices</li>
                <li><CheckCircle2 size={15} className="text-good" /> Dynamic interruptibility</li>
              </ul>
            </div>

            <div className="home-pillar-card">
              <div className="pillar-icon-box" style={{ color: '#d97706', backgroundColor: 'rgba(217, 119, 6, 0.1)' }}>
                <ShieldCheck size={24} />
              </div>
              <h3>Lowest Cost in India</h3>
              <p>
                Most competitive usage-based pricing starting from ₹0.30/min. Billed strictly by the second 
                with no user licenses, no seat fees, and zero setup charges.
              </p>
              <ul className="pillar-checks">
                <li><CheckCircle2 size={15} className="text-good" /> Prepaid wallet, zero lock-in</li>
                <li><CheckCircle2 size={15} className="text-good" /> Second-by-second billing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <FaqSection />

      {/* 10. High-Impact Closing Call-To-Action */}
      <CtaSection onOpenTrial={onOpenTrial} />
    </div>
  );
}
