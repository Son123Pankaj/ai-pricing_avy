import React from 'react';
import AboutMomentsShowcase from '../components/AboutMomentsShowcase';
import BusinessEcosystemCoverage from '../components/BusinessEcosystemCoverage';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Cpu, 
  Users, 
  Building2, 
  Workflow, 
  TrendingUp,
  FileCheck,
  PhoneCall,
  Zap
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const ECOSYSTEM_ENTITIES = [
  { name: 'Prospects', role: 'Inbound Lead Qualification & Nurturing' },
  { name: 'Clients', role: '24/7 Account Servicing & Renewals' },
  { name: 'Employees', role: 'Automated HR Desk & Attendance Alerts' },
  { name: 'Companies', role: 'Enterprise Telecom & Cloud PBX Infrastructure' },
  { name: 'Vendors', role: 'Procurement Inquiries & Dispatch Updates' },
  { name: 'Dealers', role: 'Stock Notifications & Quick Order Booking' },
  { name: 'Franchisees', role: 'Standardized SOP Guidance & Support' },
  { name: 'Partners', role: 'Commission Tracking & API Integration' },
  { name: 'Management', role: 'Live 360° MIS Dashboards & Revenue Tracking' }
];

export default function AboutPage({ onOpenTrial }) {
  return (
    <div className="about-page-view">
      {/* 1. Page Hero Banner featuring Custom 19+ Years Excellence Graphic */}
      <section className="about-hero-graphic-section">
        <div className="wrap">
          
          {/* Accessible Screen-Reader Semantic Heading for SEO */}
          <h1 className="sr-only">
            19+ Years of Telecom Excellence Meets Next-Gen Voice AI - Avyukta IntelliCall
          </h1>

          <div className="about-hero-graphic-frame">
            <img 
              src={getAssetUrl('/about-hero-banner.jpg')} 
              alt="19+ Years of Telecom Excellence Meets Next-Gen Voice AI - Avyukta IntelliCall" 
              className="about-hero-banner-img"
            />
            
            {/* Quick Action & Value Indicators Strip */}
            <div className="about-hero-actions-bar">
              <div className="about-hero-stats-row">
                <div className="about-hero-stat-pill">
                  <Clock size={14} className="text-coral" />
                  <span>19+ Years Experience (May 2008)</span>
                </div>
                <div className="about-hero-stat-pill">
                  <PhoneCall size={14} className="text-coral" />
                  <span>Carrier-Grade VoIP</span>
                </div>
                <div className="about-hero-stat-pill">
                  <Zap size={14} className="text-coral" />
                  <span>Sub-500ms Response</span>
                </div>
                <div className="about-hero-stat-pill">
                  <ShieldCheck size={14} className="text-coral" />
                  <span>Trusted by Businesses</span>
                </div>
              </div>

              <div className="about-hero-cta-buttons">
                <a 
                  href="https://ai.avyukta.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-p"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Start Free Trial</span>
                  <ArrowRight size={15} />
                </a>
                <button 
                  type="button" 
                  onClick={onOpenTrial} 
                  className="btn btn-s"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curated Moments & Infrastructure Showcase (Expanding Accordion Format matching User Image Reference) */}
      <AboutMomentsShowcase onOpenTrial={onOpenTrial} />

      {/* 3. Main Story & Team Photo ("We Provide Best Service") */}
      <section className="we-provide-service-block">
        <div className="wrap">
          <div className="service-two-col-layout">
            {/* Left Column: Heading & Narrative */}
            <div className="service-content-col">
              <div className="service-heading-box">
                <h2 className="service-main-title">We Provide Best Service</h2>
                <span className="orange-accent-bar"></span>
              </div>

              {/* Orange Bordered Box */}
              <div className="journey-callout-box">
                <p className="journey-callout-text">
                  The journey began in May 2008 and has a long way to go. By 2024 the company&apos;s vision includes 
                  completing 475+ center setups and setting up a quality-oriented product application, software, and 
                  CRM development unit.
                </p>
              </div>

              {/* Narrative */}
              <div className="service-body-narrative">
                <p>
                  We are one of the leading providers of <b>Unlimited or Retail VoIP minutes + Hosted Dialer / Cloud Dialer</b>, 
                  Predictive / Auto dialer Software, Customized CRM / MIS / ERP integrations, IVR / IP PBX. Support services 
                  provided by a vendor play a vital role when you buy a hosted VoIP dialer. We take care of this thing and 
                  always focus on satisfying our customers at every point in time whenever you need us.
                </p>
                <p style={{ marginTop: '12px' }}>
                  Not only reactive measures but <b>proactive monitoring</b> is what strives us to be the best value-for-money 
                  vendor across the globe. We provide <b>24*6 Customer Support</b> by highly-trained engineers to help you configure 
                  and solve your issues as soon as possible.
                </p>
                <p className="sales-highlight-quote" style={{ marginTop: '14px' }}>
                  &ldquo;Never lose a 100 $ Sale for that 1% difference in VoIP prices.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: Founders Team Photo */}
            <div className="service-photo-col">
              <div className="team-photo-frame">
                <img 
                  src={getAssetUrl('/avyukta-team.jpg')} 
                  alt="Avyukta IntelliCall Leadership Team" 
                  className="team-photo-img"
                  loading="lazy"
                />
                <div className="photo-caption-bar">
                  <div className="caption-text-block">
                    <span className="caption-title">Avyukta Leadership &amp; Engineering</span>
                    <span className="caption-sub">Pioneering Telecom &amp; AI Telephony Since May 2008</span>
                  </div>
                  <div className="caption-badge">
                    <span>19+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete End-to-End Business Ecosystem Coverage & Consultation */}
      <section className="bpa-ecosystem-section-wrap">
        <div className="wrap">
          <BusinessEcosystemCoverage />
        </div>
      </section>

      {/* Quality Promise & Reliability Banner (Sir's Point 6 & 7) */}
      <section className="quality-promise-section">
        <div className="wrap">
          <div className="quality-banner-box">
            <div className="quality-icon-wrap">
              <FileCheck size={32} className="text-good" />
            </div>
            <div>
              <h3>Zero False Promises &bull; Carrier-Grade Reliability</h3>
              <p>
                At Avyukta, what you see is what you get. No broken links, no hidden subscription traps, 
                and no &ldquo;coming soon&rdquo; feature hype. Every capability shown on this portal is live, tested, and battle-ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

