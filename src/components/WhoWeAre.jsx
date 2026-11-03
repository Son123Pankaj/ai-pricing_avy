import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Headphones, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ArrowRight, 
  PhoneCall, 
  Clock, 
  Sparkles,
  Award,
  Globe2,
  Users,
  Zap,
  Boxes,
  MessageSquare,
  Bot,
  FileText,
  Workflow,
  BarChart3,
  HelpCircle,
  ExternalLink,
  Mail
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const HARDWARE_PARTNERS = [
  'Dinstar', 'Synway', 'OpenVox', 'Fanvil', 'Grandstream', 
  'Matrix', 'Sangoma', 'Digium', 'Cloud Infotech'
];

const WHY_US_PILLARS = [
  {
    icon: Award,
    title: '17+ Years Of Omni-Channel Expertise',
    desc: 'Founded in May 2008, delivering battle-tested telephony, VoIP dialers, and conversational AI.'
  },
  {
    icon: Building2,
    title: '4,000+ Successful Installations',
    desc: 'Trusted by over 4,000 call centers, BPOs, and enterprises across 11 countries worldwide.'
  },
  {
    icon: ShieldCheck,
    title: '72-Hour Refund Guarantee Policy',
    desc: 'Zero-risk trial during the Paid PoC Phase — complete commercial confidence.'
  },
  {
    icon: Layers,
    title: 'Everything Under A Single Roof',
    desc: 'Single vendor coordination for AI + SIP Telephony + CRM + WhatsApp Business API + 24/7 Support.'
  },
  {
    icon: Cpu,
    title: 'Own Proprietary AI Stack',
    desc: 'In-house speech synthesis, Indic LLM reasoning, and sub-200ms ultra-low latency voice engines.'
  },
  {
    icon: TrendingUp,
    title: 'Lower Than Your Lowest Bidder',
    desc: 'Unmatched commercials that eliminate multi-vendor markups and high telephony overheads.'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment & Faster Go-Live',
    desc: 'Pre-configured SIP trunks, ready-to-deploy knowledge bases, and same-week onboarding.'
  },
  {
    icon: Globe2,
    title: 'Presence Across 11 Countries',
    desc: 'Pan-India STD CLIs and international telecom gateways covering global time zones.'
  }
];

const ECOSYSTEM_MODULES = [
  { name: 'AI Caller', desc: 'Sub-200ms turn-taking voice agents', icon: PhoneCall },
  { name: 'AI Chat', desc: 'Omnichannel website & app bot', icon: Bot },
  { name: 'Omnichannel CRM', desc: 'Lead stages & automated pipeline', icon: Layers },
  { name: 'Cloud Dialer', desc: 'Predictive & progressive telephony', icon: Cpu },
  { name: 'WhatsApp Business', desc: 'Official Meta WABA & drip journeys', icon: MessageSquare },
  { name: 'Ticketing Platform', desc: 'Tier-1 to Tier-3 support resolution', icon: CheckCircle2 },
  { name: 'Workflow Automation', desc: 'Visual no-code logic builder', icon: Workflow },
  { name: 'Knowledge Base', desc: 'Website, PDF, FAQ & SOP learning', icon: FileText },
  { name: 'Reporting Dashboard', desc: 'Live supervisory telemetries & logs', icon: BarChart3 },
  { name: 'Telephony Trunking', desc: 'Carrier-grade PRI & SIP lines', icon: Zap },
  { name: 'Analytics Suite', desc: 'Sentiment & speech transcription', icon: TrendingUp },
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
          Part 1: "We Provide Best Service" & Leadership Narrative
          ============================================================== */}
      <div className="we-provide-service-block">
        <div className="wrap plan-wide-wrap">
          <div className="service-two-col-layout">
            {/* Left Column: Heading & Narrative */}
            <div className="service-content-col">
              <div className="service-heading-box">
                <div className="pricing-badge-pro" style={{ margin: '0 0 10px 0' }}>
                  <span className="badge-dot-coral"></span>
                  <span>17+ YEARS OF TELECOM EXCELLENCE</span>
                </div>
                <h2 className="service-main-title">Pioneering Telecom &amp; AI Telephony</h2>
                <span className="orange-accent-bar"></span>
              </div>

              {/* Orange Bordered Box (Journey Began in May 2008) */}
              <div className="journey-callout-box">
                <p className="journey-callout-text">
                  The journey began in <b>May 2008</b> and has crossed <b>4,000+ enterprise installations</b> across <b>11 countries</b>. 
                  Avyukta IntelliCall bridges carrier-grade telecom engineering with next-generation autonomous AI Voice Agents.
                </p>
              </div>

              {/* Detailed Operational Philosophy Paragraph */}
              <div className="service-body-narrative">
                <p>
                  We are one of India&apos;s foremost providers of <b>Unlimited or Retail VoIP minutes + Hosted Dialer / Cloud Dialer</b>, 
                  Predictive Auto-Dialers, Customized CRM / ERP integrations, and carrier-grade PBX infrastructure.
                </p>
                <p style={{ marginTop: '12px' }}>
                  <b>Single Vendor Coordination:</b> Eliminate multi-vendor finger-pointing. We manage your AI Voice models, SIP trunks, 
                  CRM databases, and Meta WhatsApp Business API under one single SLA backed by 24*7 engineering support.
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
                    <span>17+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==============================================================
          Part 2: "⭐ WHY US ?" (Official 8 Pillars from Proposal)
          ============================================================== */}
      <div className="why-us-official-proposal-block">
        <div className="wrap plan-wide-wrap">
          <div className="why-choose-head">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>ENTERPRISE VALUE PROPOSITION</span>
            </div>
            <h2 className="why-choose-title">
              Why Indian Enterprises Choose <span className="title-coral">Avyukta IntelliCall</span>
            </h2>
            <p className="why-choose-subtitle">
              From our own proprietary AI stack to single-vendor coordination — here is why top call centers and enterprises trust us.
            </p>
          </div>

          <div className="why-us-pillars-grid">
            {WHY_US_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="why-pillar-card">
                  <div className="pillar-icon-box">
                    <Icon size={20} className="text-coral" />
                  </div>
                  <div className="pillar-text-box">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Refund Policy Banner */}
          <div className="poc-refund-callout-banner">
            <div className="poc-refund-left">
              <ShieldCheck size={28} className="text-emerald" />
              <div className="poc-refund-text">
                <b>⭐ 72-Hour Refund Policy (During Paid PoC Phase)</b>
                <p>Evaluate Avyukta AI Voice Agents and SIP routing in your live environment with zero financial risk.</p>
              </div>
            </div>
            <a 
              href="https://ai.avyukta.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-poc-trial"
            >
              <span>Start Risk-Free PoC</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ==============================================================
          Part 3: "🌐 COMPLETE ECOSYSTEM INCLUDED" (11 Modules Grid)
          ============================================================== */}
      <div className="complete-ecosystem-strip-block">
        <div className="wrap plan-wide-wrap">
          <div className="ecosystem-section-header">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>ALL-IN-ONE SOLUTION</span>
            </div>
            <h3 className="ecosystem-heading">Complete Unified Ecosystem Included</h3>
            <p className="ecosystem-sub">No multi-vendor dependency. Everything integrated and synchronized in real time.</p>
          </div>

          <div className="ecosystem-modules-grid">
            {ECOSYSTEM_MODULES.map((mod, i) => {
              const ModIcon = mod.icon;
              return (
                <div key={i} className="ecosystem-module-card">
                  <div className="mod-icon-wrap">
                    <ModIcon size={18} />
                  </div>
                  <div className="mod-info">
                    <span className="mod-name">{mod.name}</span>
                    <span className="mod-desc">{mod.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ==============================================================
          Part 4: 3 Core Business Cards (BPO Setup, ROI Surge, 24/7 SLA)
          ============================================================== */}
      <div className="who-cards-wrapper-block">
        <div className="wrap plan-wide-wrap">
          <div className="who-cards-grid">
            {CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.id} className="who-card">
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

          {/* ==============================================================
              Part 5: Official Proposal Submission Sign-off Card
              ============================================================== */}
          <div className="official-proposal-signoff-card">
            <div className="signoff-left">
              <div className="signoff-avatar">
                <span>AS</span>
              </div>
              <div className="signoff-details">
                <span className="signoff-label">PROPOSAL SUBMITTED BY</span>
                <h4 className="signoff-name">Anurag Sharma</h4>
                <p className="signoff-company">Avyukta Intellicall Consulting Pvt. Ltd.</p>
                <p className="signoff-tagline">&ldquo;Empowering Conversations Through AI&rdquo;</p>
              </div>
            </div>

            <div className="signoff-right-contacts">
              <a href="tel:+917240001056" className="signoff-contact-item">
                <PhoneCall size={16} className="text-coral" />
                <span>+91 72400 01056</span>
              </a>
              <a href="mailto:sales@avyukta.in" className="signoff-contact-item">
                <Mail size={16} className="text-coral" />
                <span>sales@avyukta.in</span>
              </a>
              <a href="https://www.avyukta.in" target="_blank" rel="noopener noreferrer" className="signoff-contact-item">
                <Globe2 size={16} className="text-coral" />
                <span>www.avyukta.in</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
