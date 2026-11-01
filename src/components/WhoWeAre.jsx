import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Headphones, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  HelpCircle,
  Layers,
  ArrowRight,
  PhoneCall,
  Clock,
  Sparkles
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const HARDWARE_PARTNERS = [
  'Dinstar', 'Synway', 'OpenVox', 'Fanvil', 'Grandstream', 
  'Matrix', 'Sangoma', 'Digium', 'Cloud Infotech'
];

const CARDS = [
  {
    id: 1,
    image: '/bpo-setup.jpg',
    title: 'Setting Up Your BPO Services',
    subtitle: 'End-to-End Infrastructure & Consulting',
    desc: 'Complete turnkey setup for outbound and inbound contact centers. From telecom PRI/SIP trunks to Asterisk architecture, cloud servers, and CRM workflows.',
    highlights: [
      'Technology & Cloud Infrastructure Deployment',
      'Strategic & Process Consulting (BPA)',
      'GSM Gateways, PRI, SIP Trunks & IP Phones',
      'Legal & Telecom Compliance Guidance'
    ],
    badge: 'Turnkey Setup',
    icon: Building2,
    accent: '#4f46e5'
  },
  {
    id: 2,
    image: '/call-center-profit.jpg',
    title: 'Get Surge In Call Centre Profit',
    subtitle: 'Maximize Agent Utilization & Cut Costs',
    desc: 'Cut operational telecom costs by up to 60%. Supercharge agent productivity with 360-degree real-time supervisory dashboards, intelligent dialers, and CRM sync.',
    highlights: [
      '360° Real-Time Analytics & Live Supervision',
      'Vicidial, Avyukta & Custom CRM Integrations',
      'Predictive Dialing with Sub-Second Drop Ratios',
      'Flexible Purchase, EMI, Rental & Hosted Options'
    ],
    badge: 'Maximized ROI',
    icon: TrendingUp,
    accent: '#10b981'
  },
  {
    id: 3,
    image: '/customer-support.jpg',
    title: 'Uninterrupted Customer Support',
    subtitle: '24/7/365 Dedicated Engineering SLA',
    desc: 'True enterprise peace of mind. Round-the-clock phone, email, and live chat technical support to keep your mission-critical dialers running without a single hiccup.',
    highlights: [
      '24/7/365 Phone, Email & Remote Desk Support',
      'Instant IVR, Asterisk & Dialer Troubleshooting',
      'Carrier-Grade 99.99% Telecom Uptime Guarantee',
      'Proactive Trunk Monitoring & Failover Routing'
    ],
    badge: '24/7 Engineering SLA',
    icon: Headphones,
    accent: '#0284c7'
  }
];

export default function WhoWeAre() {
  return (
    <section className="who-we-are-parent-section" id="who-we-are">
      {/* ==============================================================
          Part 1: "We Provide Best Service" (Exact Match to User Screenshot)
          ============================================================== */}
      <div className="we-provide-service-block">
        <div className="wrap">
          <div className="service-two-col-layout">
            {/* Left Column: Heading & Narrative */}
            <div className="service-content-col">
              <div className="service-heading-box">
                <h2 className="service-main-title">We Provide Best Service</h2>
                <span className="orange-accent-bar"></span>
              </div>

              {/* Orange Bordered Box (The Journey Began in May 2008) */}
              <div className="journey-callout-box">
                <p className="journey-callout-text">
                  The journey began in May 2008 and has a long way to go. By 2024 the company&apos;s vision includes 
                  completing 475+ center setups and setting up a quality-oriented product application, software, and 
                  CRM development unit.
                </p>
              </div>

              {/* Detailed Operational Philosophy Paragraph */}
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

              {/* Hardware Partners Row */}
              <div className="service-hardware-partners">
                <span className="hardware-label">CERTIFIED HARDWARE &amp; SIP ALLIANCES:</span>
                <div className="hardware-chips-list">
                  {HARDWARE_PARTNERS.map((brand, i) => (
                    <span key={i} className="hardware-pill">{brand}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Framed Founders & Leadership Team Photo */}
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
      </div>

      {/* ==============================================================
          Part 2: "Why Choose us...." (Deep Teal Section with 3 Cards)
          ============================================================== */}
      <div className="why-choose-us-teal-block">
        <div className="wrap">
          <div className="why-choose-head">
            <h2 className="why-choose-title">Why Choose us....</h2>
            <span className="orange-accent-bar centered"></span>
          </div>

          <div className="why-choose-three-grid">
            {/* Card 1: Generic Customer Concerns */}
            <div className="why-choose-teal-card">
              <div className="why-card-icon-circle">
                <Headphones size={22} className="text-orange" />
              </div>
              <h3 className="why-card-heading">Generic Customer Concerns</h3>
              <p className="why-card-desc">
                We provide 24*6 Customer Support by highly-trained engineers who are ready to answer your questions.
              </p>
            </div>

            {/* Card 2: Got Queries ? */}
            <div className="why-choose-teal-card">
              <div className="why-card-icon-circle">
                <HelpCircle size={22} className="text-orange" />
              </div>
              <h3 className="why-card-heading">Got Queries ?</h3>
              <p className="why-card-desc">
                We operate on a lower than your lowest bidder policy just to avoid that apple-orange comparison.
              </p>
            </div>

            {/* Card 3: Techno-Commercial Models */}
            <div className="why-choose-teal-card">
              <div className="why-card-icon-circle">
                <Layers size={22} className="text-orange" />
              </div>
              <h3 className="why-card-heading">Techno-Commercial Models</h3>
              <p className="why-card-desc">
                We offer various Techno-Commercial Options such as - Purchase, Rental, EMI, Hosted.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==============================================================
          Part 3: 3 Feature Cards (BPO Setup, ROI Surge, 24/7 SLA)
          ============================================================== */}
      <div className="who-cards-wrapper-block">
        <div className="wrap">
          <div className="who-cards-grid">
            {CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.id} className="who-card">
                  {/* Card Top Image Container */}
                  <div 
                    className="who-card-image-wrap"
                    style={{ 
                      backgroundImage: `url("${getAssetUrl(card.image)}")`,
                    }}
                  >
                    <div className="who-image-overlay"></div>
                    <span className="who-card-tag" style={{ backgroundColor: card.accent }}>
                      {card.badge}
                    </span>
                    <div className="who-card-icon-floating">
                      <Icon size={20} color="#fff" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="who-card-body">
                    <span className="who-card-subtitle">{card.subtitle}</span>
                    <h3 className="who-card-title">{card.title}</h3>
                    <p className="who-card-desc">{card.desc}</p>

                    <div className="who-card-checklist">
                      {card.highlights.map((h, i) => (
                        <div key={i} className="who-check-item">
                          <CheckCircle2 size={16} className="check-icon text-good" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
