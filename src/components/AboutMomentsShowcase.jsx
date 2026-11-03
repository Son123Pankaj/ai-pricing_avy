import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Server, 
  Cpu, 
  Bot, 
  Radio, 
  CheckCircle2, 
  Maximize2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const MOMENTS_ITEMS = [
  {
    id: 'telecom-noc',
    verticalLabel: 'TELECOM INFRASTRUCTURE',
    badge: 'CARRIER DATA CENTER & NOC',
    title: '20-Year Telecom Engineering & Server Infrastructure',
    desc: 'High-availability Asterisk PBX clusters, GSM gateway multi-port racks, and sub-second predictive dialer engines monitored 24*6 by senior telecom architects.',
    image: '/about-telecom-noc.jpg',
    color: '#0284c7',
    icon: Server,
    meta: '475+ Center Deployments'
  },
  {
    id: 'ecosystem-core',
    verticalLabel: 'AVYUKTA ECOSYSTEM',
    badge: 'CENTRALIZED ARCHITECTURE',
    title: 'Avyukta IntelliCall: The Central Nervous System',
    desc: 'Avyukta IntelliCall operates at the epicenter — synchronizing Customers, Partners, Suppliers, Dealers, Marketing, and Operations in one intelligent, real-time ecosystem.',
    image: '/about-ecosystem-avyukta.jpg',
    color: '#ea580c',
    icon: Layers,
    meta: 'Avyukta IntelliCall Core',
    isHero: true
  },
  {
    id: 'ai-receptionist',
    verticalLabel: 'AI RECEPTIONIST',
    badge: 'AUTONOMOUS CALL HANDLING',
    title: 'Always-On AI Receptionist & Multilingual Cloud',
    desc: 'Autonomous inbound call intake, instant appointment scheduling, and automated revenue recovery with human-grade warmth across 12+ dialects.',
    image: '/about-ai-receptionist.jpg',
    color: '#10b981',
    icon: Bot,
    meta: '24/7 Zero Queue Triage'
  },
  {
    id: 'neural-mic',
    verticalLabel: 'NEURAL VOICE CORE',
    badge: 'SPEECH INTELLIGENCE & HUD',
    title: 'Sub-500ms Turn-Taking & Holographic Waveform Engine',
    desc: 'Real-time conversational speech synthesis, dual-track stereo recording, and live supervisory telemetry tracking sentiment and latency.',
    image: '/about-neural-mic.jpg',
    color: '#a855f7',
    icon: Cpu,
    meta: 'Sub-500ms Latency'
  }
];

export default function AboutMomentsShowcase({ onOpenTrial }) {
  // Default to the Central Ecosystem card (index 1) as expanded, exactly like user reference image
  const [activeIdx, setActiveIdx] = useState(1);

  return (
    <section className="about-moments-section" id="curated-architecture">
      <div className="wrap">
        
        {/* Section Header (Curated Moments format matching user reference) */}
        <div className="moments-header-block">
          <div className="pricing-badge-pro">
            <span className="badge-dot-coral"></span>
            <span>CURATED ARCHITECTURE &amp; ECOSYSTEM</span>
          </div>

          <h2 className="moments-main-title">
            Curated <span className="title-coral">Moments &amp; Infrastructure</span>
          </h2>

          <p className="moments-lead-text">
            Explore the technological foundations of Avyukta IntelliCall — from carrier-grade telecom data centers 
            to our centralized business ecosystem and autonomous voice AI.
          </p>
        </div>

        {/* Expanding Horizontal Cards Accordion (Exact Match to User Reference UI) */}
        <div className="moments-accordion-wrap">
          <div className="moments-cards-strip">
            {MOMENTS_ITEMS.map((item, idx) => {
              const isActive = activeIdx === idx;
              const IconComp = item.icon;

              return (
                <div
                  key={item.id}
                  className={`moment-accordion-card ${isActive ? 'is-active' : 'is-collapsed'}`}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  style={{ '--card-accent': item.color }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-label={item.title}
                >
                  {/* Background High-Resolution Image */}
                  <div className="moment-card-bg-wrap">
                    <img 
                      src={getAssetUrl(item.image)} 
                      alt={item.title} 
                      className="moment-card-img"
                    />
                    <div className="moment-card-gradient-overlay"></div>
                  </div>

                  {/* Collapsed State: Vertical Text Label & Micro Icon */}
                  <div className="moment-collapsed-view">
                    <div className="collapsed-icon-pill" style={{ color: item.color }}>
                      <IconComp size={16} />
                    </div>
                    <span className="moment-vertical-text">
                      {item.verticalLabel}
                    </span>
                  </div>

                  {/* Expanded State: Full Content Overlay with Badge, Title, Desc & Action */}
                  <div className="moment-expanded-view">
                    
                    {/* Top Floating Badge */}
                    <div className="moment-top-row">
                      <span className="moment-badge-tag" style={{ color: item.color, borderColor: `${item.color}45`, backgroundColor: `${item.color}15` }}>
                        <IconComp size={13} />
                        <span>{item.badge}</span>
                      </span>
                      <span className="moment-meta-pill">
                        {item.meta}
                      </span>
                    </div>

                    {/* Bottom Narrative Box */}
                    <div className="moment-bottom-content">
                      <h3 className="moment-card-title">
                        {item.title}
                      </h3>
                      <p className="moment-card-desc">
                        {item.desc}
                      </p>

                      <div className="moment-card-actions">
                        <a
                          href="https://www.avyukta.in/architecture.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="btn-moment-action"
                          style={{ background: item.color, textDecoration: 'none' }}
                        >
                          <span>Explore Architecture</span>
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ecosystem Callout: Highlights Point 1 specifically (Avyukta IntelliCall at the Center) */}
        <div className="about-ecosystem-callout-card">
          <div className="ecosystem-callout-grid">
            <div className="ecosystem-callout-text">
              <div className="callout-pill-tag">
                <Sparkles size={13} className="text-coral" />
                <span>ECOSYSTEM BLUEPRINT</span>
              </div>
              <h3 className="ecosystem-callout-heading">
                Avyukta IntelliCall as the <span className="title-coral">Central Operational Core</span>
              </h3>
              <p className="ecosystem-callout-p">
                As illustrated in our ecosystem architecture diagram, <b>Avyukta IntelliCall</b> sits right at the center 
                circle — directly bridging Customers, Investors, Partners &amp; Suppliers, Marketing, Operations, 
                and Business Units with automated data pipelines.
              </p>
              <div className="ecosystem-benefits-row">
                <div className="eco-benefit-item">
                  <CheckCircle2 size={18} className="text-coral" />
                  <span>Zero Data Silos</span>
                </div>
                <div className="eco-benefit-item">
                  <CheckCircle2 size={18} className="text-coral" />
                  <span>Sub-Second Telemetry</span>
                </div>
                <div className="eco-benefit-item">
                  <CheckCircle2 size={18} className="text-coral" />
                  <span>100% Audit Compliance</span>
                </div>
              </div>

              <div className="ecosystem-callout-actions">
                <a
                  href="https://www.avyukta.in/architecture.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ecosystem-cta"
                  style={{ textDecoration: 'none' }}
                >
                  <Sparkles size={16} />
                  <span>Explore Core Ecosystem Architecture</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="ecosystem-callout-visual">
              <div className="mini-diagram-frame">
                <img 
                  src={getAssetUrl('/about-ecosystem-avyukta.jpg')} 
                  alt="Avyukta IntelliCall Centralized Ecosystem Architecture" 
                  className="mini-diagram-img"
                />
                <div className="mini-diagram-badge">
                  <span className="pulse-dot"></span>
                  <span>Avyukta IntelliCall Core Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

