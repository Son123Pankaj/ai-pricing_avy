import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import TrustedByMarquee from '../components/TrustedByMarquee';
import BpaFlowDiagram from '../components/BpaFlowDiagram';
import PlanCards from '../components/PlanCards';
import CtaSection from '../components/CtaSection';
import { 
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
  Sparkles,
  Layers,
  Award,
  Globe2
} from 'lucide-react';

export default function HomePage({ onOpenTrial, navigateTo }) {
  return (
    <div className="home-page-view">
      {/* 1. Hero Carousel & Live Voice Simulator */}
      <HeroCarousel onOpenTrial={onOpenTrial} navigateTo={navigateTo} />

      {/* 2. Razor-Sharp Enterprise Client Marquee */}
      <TrustedByMarquee />

      {/* 3. 4 Core Value Pillars (Why Avyukta AI) */}
      <section className="home-pillars-section" style={{ padding: '60px 0 50px' }}>
        <div className="wrap">
          <div className="home-section-head">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>ENTERPRISE VALUE PROPOSITION</span>
            </div>
            <h2 className="home-title">
              Why Indian Enterprises Choose <span className="title-coral">Avyukta IntelliCall</span>
            </h2>
            <p className="home-subtitle">
              The single communication powerhouse combining 17+ years of telecom infrastructure with proprietary sub-200ms neural voice agents.
            </p>
          </div>

          <div className="home-pillars-grid">
            <div className="home-pillar-card">
              <div className="pillar-icon-box" style={{ color: '#0ea5e9', backgroundColor: 'rgba(14, 165, 233, 0.12)' }}>
                <Zap size={24} />
              </div>
              <h3>Sub-200ms Voice Latency</h3>
              <p>
                Real-time human pacing with dynamic interruption recovery in Hindi, English, and regional Indic dialects with zero robotic delay.
              </p>
              <ul className="pillar-checks">
                <li><CheckCircle2 size={15} className="text-good" /> Natural turn-taking pacing</li>
                <li><CheckCircle2 size={15} className="text-good" /> Interruption detection & recovery</li>
              </ul>
            </div>

            <div className="home-pillar-card">
              <div className="pillar-icon-box" style={{ color: '#f97316', backgroundColor: 'rgba(249, 115, 22, 0.12)' }}>
                <PhoneCall size={24} />
              </div>
              <h3>Carrier-Grade Telephony</h3>
              <p>
                Direct SIP termination, Pan-India STD Smart DIDs (011, 022, 080, 079), and cloud predictive dialers with 99.99% uptime.
              </p>
              <ul className="pillar-checks">
                <li><CheckCircle2 size={15} className="text-good" /> Pan-India STD DID caller IDs</li>
                <li><CheckCircle2 size={15} className="text-good" /> Second-by-second billing</li>
              </ul>
            </div>

            <div className="home-pillar-card">
              <div className="pillar-icon-box" style={{ color: '#8b5cf6', backgroundColor: 'rgba(139, 92, 246, 0.12)' }}>
                <Layers size={24} />
              </div>
              <h3>Omnichannel CRM &amp; Meta WABA</h3>
              <p>
                Automated multi-department CRM workflows, automated WhatsApp drip journeys, and seamless 2-way sync with your database.
              </p>
              <ul className="pillar-checks">
                <li><CheckCircle2 size={15} className="text-good" /> Official Meta WhatsApp API</li>
                <li><CheckCircle2 size={15} className="text-good" /> Real-time webhook &amp; MIS sync</li>
              </ul>
            </div>

            <div className="home-pillar-card">
              <div className="pillar-icon-box" style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.12)' }}>
                <ShieldCheck size={24} />
              </div>
              <h3>72-Hour Refund Guarantee</h3>
              <p>
                Commercial peace of mind with a full refund policy during the Paid PoC phase. ₹0 setup, ₹0 installation, and ₹0 training charges.
              </p>
              <ul className="pillar-checks">
                <li><CheckCircle2 size={15} className="text-good" /> Zero-risk PoC validation</li>
                <li><CheckCircle2 size={15} className="text-good" /> ₹0 rental on turnkey bundles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Intelligent BPA Workflow Journey */}
      <BpaFlowDiagram />

      {/* 5. Pricing Overview (Case B & Case A Luxury Cards) */}
      <section className="home-pricing-showcase-section" style={{ padding: '50px 0 30px' }}>
        <div className="wrap">
          <div className="home-section-head">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>TRANSPARENT USAGE PRICING</span>
            </div>
            <h2 className="home-title">
              Simple, Predictable Pricing <span className="title-coral">From ₹3.00/min</span>
            </h2>
            <p className="home-subtitle">
              Choose between Case B Turnkey All-in-One bundles or Case A Modular components. Billed strictly by the second.
            </p>
          </div>
        </div>

        {/* 2x2 Luxury Pricing Cards */}
        <PlanCards onOpenTrial={onOpenTrial} />

        {/* View Full Pricing Deep-Dive Link */}
        <div className="wrap" style={{ textAlign: 'center', marginTop: '28px', marginBottom: '36px' }}>
          <a 
            href="/pricing" 
            onClick={(e) => { e.preventDefault(); navigateTo('/pricing'); }}
            className="btn-cta-orange"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '15px', textDecoration: 'none' }}
          >
            <span>Explore Complete Pricing, BoM Breakdown &amp; Voice Audio Samples</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* 6. Quick Platform Discovery Links */}
      <section className="home-services-preview-section" style={{ padding: '50px 0 60px' }}>
        <div className="wrap">
          <div className="home-section-head">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>COMPLETE PLATFORM SUITE</span>
            </div>
            <h2 className="home-title">
              Explore Our <span className="title-coral">Dedicated Portals</span>
            </h2>
            <p className="home-subtitle">
              Deep dive into specialized telecom infrastructure, comprehensive AI feature sets, and corporate background.
            </p>
          </div>

          <div className="home-services-grid">
            <div className="home-service-card" onClick={() => navigateTo('/services')} style={{ cursor: 'pointer' }}>
              <Building2 size={26} className="text-brand" />
              <h4>Telecom &amp; BPO Services</h4>
              <p>Predictive dialers, carrier VoIP minutes, Asterisk PBX, GSM gateways, and 24*6 dedicated technical support.</p>
              <span className="service-card-link">View All Services &rarr;</span>
            </div>

            <div className="home-service-card" onClick={() => navigateTo('/features')} style={{ cursor: 'pointer' }}>
              <Bot size={26} className="text-good" />
              <h4>AI Voice &amp; CRM Features</h4>
              <p>20+ AI caller features, 14 business automation tools, centralized CRM modules, and 20 industry templates.</p>
              <span className="service-card-link">View All Features &rarr;</span>
            </div>

            <div className="home-service-card" onClick={() => navigateTo('/about')} style={{ cursor: 'pointer' }}>
              <Award size={26} style={{ color: '#ea580c' }} />
              <h4>17+ Years of Heritage</h4>
              <p>4,000+ enterprise deployments, 11 countries, hardware partner alliances, and leadership team overview.</p>
              <span className="service-card-link">Learn About Us &rarr;</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. High-Impact Closing Call-To-Action */}
      <CtaSection onOpenTrial={onOpenTrial} />
    </div>
  );
}
