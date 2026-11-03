import React from 'react';
import Services from '../components/Services';
import PanIndiaConnectivity from '../components/PanIndiaConnectivity';
import { 
  Building2, 
  TrendingUp, 
  Headphones, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  HelpCircle, 
  PhoneCall, 
  Server, 
  Share2, 
  ShieldCheck, 
  ArrowRight,
  Radio,
  Sparkles
} from 'lucide-react';

const HARDWARE_PARTNERS = [
  'Dinstar', 'Synway', 'OpenVox', 'Fanvil', 'Grandstream', 
  'Matrix', 'Sangoma', 'Digium', 'Cloud Infotech'
];

const TELECOM_SERVICES = [
  {
    title: 'VoIP Minutes & SIP Termination',
    desc: 'Premium A2Z CLI and non-CLI voice routes. Carrier-grade termination for domestic Indian operations and global calling across 150+ countries.',
    icon: PhoneCall,
    accent: '#059669',
    features: ['Second-by-second billing', 'Direct Tier-1 carrier interconnects', 'Zero spam score guarantee']
  },
  {
    title: 'Hosted & Cloud Predictive Dialer',
    desc: 'High-throughput predictive, auto, and progressive dialers. Built on enhanced Vicidial and Avyukta engines with sub-second drop ratios.',
    icon: Server,
    accent: '#4f46e5',
    features: ['100+ concurrent channels', 'Automated answering machine detection', 'Real-time agent screen pops']
  },
  {
    title: 'Asterisk PBX & IPPBX Systems',
    desc: 'Custom Asterisk telephony servers deployed on-premise or in private cloud. Enterprise call routing, IVR trees, and call recording.',
    icon: Cpu,
    accent: '#0284c7',
    features: ['Custom IVR tree designer', 'Multi-tenant branch PBX', 'Full call recording with secure encryption']
  },
  {
    title: 'GSM Gateways & PRI/SIP Connectivity',
    desc: 'Supply, installation, and configuration of multi-port GSM gateways (4/8/16/32 ports) with leading global hardware partners.',
    icon: Radio,
    accent: '#d97706',
    features: ['Hardware partner certified', 'Seamless failover routing', 'Instant SIM balance monitoring']
  },
  {
    title: 'Customized CRM, MIS & ERP Sync',
    desc: 'Two-way integration between telephony and Meta WhatsApp, Zoho, Bitrix24, LeadSquared, Salesforce, and custom SQL databases.',
    icon: Share2,
    accent: '#7c3aed',
    features: ['Meta WhatsApp API webhook sync', 'Automated click-to-call triggers', 'Live MIS supervisory dashboards']
  },
  {
    title: 'WFH Architecture & WebRTC Dialer',
    desc: 'Empower remote agents to make and take calls directly from their browser without physical phones or VPN complexities.',
    icon: Headphones,
    accent: '#ea580c',
    features: ['Zero desktop software installation', 'Crystal clear WebRTC audio codec', 'Remote agent productivity tracking']
  }
];

export default function ServicesPage({ onOpenTrial }) {
  return (
    <div className="services-page-view">
      {/* 1. Next-Gen AI Voice & Telecom Services Component (Featuring AI Support Robot & Live HUD) */}
      <Services onOpenTrial={onOpenTrial} />

      {/* 2. 6 Core Telecom Services Grid */}
      <section className="services-grid-section">
        <div className="wrap">
          <div className="section-head text-center" style={{ maxWidth: '800px', margin: '0 auto 48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="pricing-badge-pro" style={{ display: 'inline-flex', margin: '0 auto 12px' }}>
              <span className="badge-dot-coral"></span>
              <span>CARRIER-GRADE TELECOM INFRASTRUCTURE</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '850', letterSpacing: '-0.025em', color: 'var(--text)', margin: '0 0 10px' }}>
              Carrier-Grade <span className="title-coral">Telecom Infrastructure</span> Suite
            </h2>
            <p style={{ color: 'var(--mute)', fontSize: '15px', marginTop: '8px' }}>
              Full-stack telephony hardware, software engines, and interconnect routes engineered over two decades.
            </p>
          </div>

          <div className="telecom-services-grid">
            {TELECOM_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className="telecom-service-card" style={{ '--srv-accent': srv.accent }}>
                  <div className="srv-icon-wrap" style={{ color: srv.accent, backgroundColor: `${srv.accent}14` }}>
                    <Icon size={24} />
                  </div>
                  <h3 className="srv-title">{srv.title}</h3>
                  <p className="srv-desc">{srv.desc}</p>
                  <ul className="srv-features-list">
                    {srv.features.map((f, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={14} style={{ color: srv.accent }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Pan-India 8 Smart DIDs & Global Carrier Termination */}
      <PanIndiaConnectivity onOpenTrial={onOpenTrial} />

      {/* 4. Certified Hardware & Telephony Alliances */}
      <section className="services-alliances-section">
        <div className="wrap">
          <div className="alliances-box">
            <h3 className="alliances-title">Certified Hardware &amp; Telephony Alliances</h3>
            <p className="alliances-desc">
              We collaborate with established global technology brands to provide tested, reliable hardware and gateways:
            </p>
            <div className="alliances-chips-row">
              {HARDWARE_PARTNERS.map((brand, i) => (
                <div key={i} className="alliance-chip-badge">
                  <Cpu size={14} className="text-orange" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Why Choose Us...." Deep Teal 3-Cards Block */}
      <section className="why-choose-us-teal-block">
        <div className="wrap">
          <div className="why-choose-head">
            <h2 className="why-choose-title">Commercial Flexibility &amp; Support</h2>
            <span className="orange-accent-bar centered"></span>
          </div>

          <div className="why-choose-three-grid">
            <div className="why-choose-teal-card">
              <div className="why-card-icon-circle">
                <Headphones size={22} className="text-orange" />
              </div>
              <h3 className="why-card-heading">Generic Customer Concerns</h3>
              <p className="why-card-desc">
                We provide 24*6 Customer Support by highly-trained telecom engineers who are ready to assist with SIP trunking, dialers, and audio latency.
              </p>
            </div>

            <div className="why-choose-teal-card">
              <div className="why-card-icon-circle">
                <HelpCircle size={22} className="text-orange" />
              </div>
              <h3 className="why-card-heading">Got Queries?</h3>
              <p className="why-card-desc">
                We operate on a lower than your lowest bidder policy to ensure you get direct enterprise pricing without middlemen margins.
              </p>
            </div>

            <div className="why-choose-teal-card">
              <div className="why-card-icon-circle">
                <Layers size={22} className="text-orange" />
              </div>
              <h3 className="why-card-heading">Techno-Commercial Models</h3>
              <p className="why-card-desc">
                We offer flexible Techno-Commercial options: Turnkey Bundle (Case B), A-La-Carte Modular (Case A), Purchase, Rental, and Hosted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Bar */}
      <section className="services-cta-bar">
        <div className="wrap">
          <div className="services-cta-inner">
            <div>
              <h3>Need a custom dialer architecture or hardware consultation?</h3>
              <p>Our senior telecom engineers are available 24*6 to design your contact center blueprint.</p>
            </div>
            <button type="button" onClick={onOpenTrial} className="btn-cta-orange">
              <span>Book Architecture Call</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
