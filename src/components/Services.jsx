import React, { useState } from 'react';
import { 
  Bot, 
  PhoneCall, 
  Server, 
  Cpu, 
  Share2, 
  Headphones, 
  Radio, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingDown, 
  Activity, 
  ShieldCheck, 
  Zap, 
  BarChart3,
  Layers,
  Users
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const SERVICE_CATEGORIES = [
  {
    id: 'ai-voice',
    name: 'AI Voice Agents',
    icon: Bot,
    tag: 'Autonomous Turn-Taking',
    color: '#0284c7',
    headline: 'Autonomous 24/7 Inbound & Outbound AI Support',
    desc: 'Empower your enterprise with intelligent voice agents that converse with human-grade warmth, understand 12+ Indian and Global dialects, and resolve over 85% of tier-1 support inquiries autonomously.',
    metrics: [
      { label: 'Latency', value: '< 500ms' },
      { label: 'First-Call Resolution', value: '88%' },
      { label: 'Cost Reduction', value: '65%' }
    ],
    features: [
      'Natural interruption handling and breathing pauses',
      'Context-aware reasoning powered by enterprise knowledge bases',
      'Seamless 1-click live warm transfer to human supervisors',
      'Automated post-call WhatsApp summaries and CRM logging'
    ]
  },
  {
    id: 'dialers',
    name: 'Cloud Dialers',
    icon: Server,
    tag: 'High Throughput',
    color: '#ea580c',
    headline: 'Carrier-Grade Hosted & Predictive Dialing Engines',
    desc: 'Deploy robust predictive, auto, progressive, and WebRTC dialers powered by enhanced Vicidial and Asterisk clusters. Boost agent talk-time from 20 minutes to 48+ minutes per hour with zero hardware lock-in.',
    metrics: [
      { label: 'Concurrent Channels', value: '100+' },
      { label: 'Agent Talk Time', value: '3.8x' },
      { label: 'Drop Ratio', value: '< 1%' }
    ],
    features: [
      'Sub-second Answering Machine Detection (AMD)',
      'WebRTC browser dialer — zero software installation needed',
      'Dynamic multi-campaign lead recycling and priority pacing',
      'Supervisory live listen, whisper, and barge-in controls'
    ]
  },
  {
    id: 'sip-did',
    name: 'VoIP & Pan-India DIDs',
    icon: PhoneCall,
    tag: 'Guaranteed CLI',
    color: '#16a34a',
    headline: 'True Local Presence with 8 Metro STD Codes & Global Termination',
    desc: 'Access carrier-grade SIP termination across India (011 Delhi, 022 Mumbai, 080 Bengaluru, and more) and 150+ international destinations with second-by-second billing and zero spam scores.',
    metrics: [
      { label: 'Indian Metro DIDs', value: '8 STD Codes' },
      { label: 'Global Coverage', value: '150+ Countries' },
      { label: 'Billing Precision', value: '1-Sec Pulse' }
    ],
    features: [
      'Verified Pan-India CLI ensuring 40%+ higher pick-up rates',
      'Redundant multi-carrier failover routing with 99.99% uptime',
      'Direct Tier-1 carrier interconnects for crystal-clear audio',
      'Instant DID provisioning via self-service portal'
    ]
  },
  {
    id: 'ippbx-crm',
    name: 'IPPBX & Meta CRM',
    icon: Share2,
    tag: 'Full Stack Telecom',
    color: '#9333ea',
    headline: 'Multi-Tenant PBX, GSM Gateways & Meta WhatsApp Sync',
    desc: 'From on-premise hardware GSM gateways (Dinstar, Synway, Matrix) to bidirectional Meta WhatsApp Cloud API webhooks and Zoho/Bitrix24 CRM sync, unify your entire communication pipeline.',
    metrics: [
      { label: 'Hardware Alliances', value: '9+ Partners' },
      { label: 'CRM Sync Delay', value: '< 200ms' },
      { label: 'Support SLA', value: '24*6 Operating' }
    ],
    features: [
      'Multi-port GSM gateways (4/8/16/32 ports) with certified failover',
      'Official Meta WhatsApp Business Cloud API integration',
      'Native 2-way sync with Zoho, Bitrix24, Salesforce & LeadSquared',
      'Stereo dual-channel audio recording stored securely for audits'
    ]
  }
];

export default function Services({ onOpenTrial }) {
  const [activeTab, setActiveTab] = useState('ai-voice');
  const currentService = SERVICE_CATEGORIES.find(s => s.id === activeTab) || SERVICE_CATEGORIES[0];

  return (
    <section className="services-suite-section" id="services-suite">
      <div className="wrap">
        
        {/* Section Top Header */}
        <div className="section-head text-center" style={{ maxWidth: '860px', margin: '0 auto 48px' }}>
          <div className="pricing-badge-pro">
            <span className="badge-dot-coral"></span>
            <span>ENTERPRISE TELEPHONY &amp; AI SERVICES</span>
          </div>
          <h2 className="section-title">
            Next-Gen AI Voice &amp; <span className="title-coral">Telecom Infrastructure Services</span>
          </h2>
          <p className="section-subtitle">
            Deploy autonomous conversational AI agents, high-throughput cloud dialers, and carrier-grade 
            VoIP infrastructure designed for modern enterprises and high-scale contact centers.
          </p>
        </div>

        {/* Hero Spotlight: User's AI Voice Support Robot & Human Interaction Visual */}
        <div className="services-spotlight-card">
          <div className="services-spotlight-grid">
            
            {/* Left Column: High-Tech Robot & Customer HUD Image */}
            <div className="services-spotlight-image-col">
              <div className="services-image-frame">
                <img 
                  src={getAssetUrl('/services-ai-agent.jpg')} 
                  alt="Avyukta AI Voice Support Specialist with Live Soundwave HUD and Analytics" 
                  className="services-featured-photo"
                />
                
                {/* Floating Live Status Badge */}
                <div className="services-badge-overlay">
                  <div className="services-live-pulse-dot"></div>
                  <span>AI Agent Live &bull; Sub-500ms Turn-Taking</span>
                </div>

                {/* Micro Analytics Indicator */}
                <div className="services-chart-tag">
                  <TrendingDown size={14} className="text-emerald-400" />
                  <span>65% Telecom Cost Drop</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Narrative & Core Benefits */}
            <div className="services-spotlight-content-col">
              <div className="services-sub-badge">
                <Sparkles size={14} className="text-coral" />
                <span>HUMAN-GRADE CONVERSATIONAL INTELLIGENCE</span>
              </div>
              <h3 className="services-spotlight-heading">
                Intelligent Voice Agents. <br />
                <span className="title-coral">Real-Time Waveform Telephony HUD.</span>
              </h3>
              <p className="services-spotlight-text">
                Bridge the gap between robotic IVRs and expensive human call centers. Avyukta AI Voice Agents 
                listen, comprehend, and converse with sub-second latency while supervisory dashboards track sentiment, 
                turn-taking latency, and cost curves in real time.
              </p>

              {/* 4 Pillars directly visualized in the artwork */}
              <div className="services-features-quad">
                <div className="service-quad-item">
                  <div className="quad-icon-box" style={{ background: 'rgba(2, 132, 199, 0.12)', color: '#0284c7' }}>
                    <Activity size={18} />
                  </div>
                  <div>
                    <h4 className="quad-title">Real-Time Voice HUD</h4>
                    <p className="quad-desc">Live soundwave analysis, instant sentiment recognition, and turn-taking cadence.</p>
                  </div>
                </div>

                <div className="service-quad-item">
                  <div className="quad-icon-box" style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#ea580c' }}>
                    <Bot size={18} />
                  </div>
                  <div>
                    <h4 className="quad-title">Autonomous Triage</h4>
                    <p className="quad-desc">Handles over 85% of tier-1 support queries with zero queues and zero human fatigue.</p>
                  </div>
                </div>

                <div className="service-quad-item">
                  <div className="quad-icon-box" style={{ background: 'rgba(22, 163, 74, 0.12)', color: '#16a34a' }}>
                    <TrendingDown size={18} />
                  </div>
                  <div>
                    <h4 className="quad-title">Drastic Cost Savings</h4>
                    <p className="quad-desc">Slash telephony operating expenditure from ₹4.50/min to starting at ₹0.30/min.</p>
                  </div>
                </div>

                <div className="service-quad-item">
                  <div className="quad-icon-box" style={{ background: 'rgba(147, 51, 234, 0.12)', color: '#9333ea' }}>
                    <Headphones size={18} />
                  </div>
                  <div>
                    <h4 className="quad-title">1-Click Live Transfer</h4>
                    <p className="quad-desc">Graceful warm handoff to human specialists with complete live transcripts passed.</p>
                  </div>
                </div>
              </div>

              {/* CTA Action Row */}
              <div className="services-actions-row">
                <a 
                  href="https://ai.avyukta.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-p"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Start Free Trial</span>
                  <ArrowRight size={16} />
                </a>
                <button 
                  type="button" 
                  onClick={onOpenTrial} 
                  className="btn btn-s"
                >
                  Schedule Telecom Consultation
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Services Category Explorer */}
        <div className="services-explorer-block">
          
          {/* Tab Navigation Buttons */}
          <div className="services-tabs-nav">
            {SERVICE_CATEGORIES.map((cat) => {
              const IconComp = cat.icon;
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`services-tab-btn ${isSelected ? 'active' : ''}`}
                  style={{ '--tab-accent': cat.color }}
                >
                  <IconComp size={18} className="tab-btn-icon" />
                  <span>{cat.name}</span>
                  <span className="tab-tag-pill">{cat.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Showcase Card */}
          <div className="services-tab-content-card" style={{ borderColor: `${currentService.color}40` }}>
            <div className="tab-content-grid">
              
              <div className="tab-text-side">
                <div className="tab-badge-strip" style={{ color: currentService.color, background: `${currentService.color}12`, borderColor: `${currentService.color}30` }}>
                  <currentService.icon size={15} />
                  <span>{currentService.tag}</span>
                </div>
                <h3 className="tab-headline">{currentService.headline}</h3>
                <p className="tab-desc">{currentService.desc}</p>

                <div className="tab-features-list">
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className="tab-feature-item">
                      <CheckCircle2 size={15} style={{ color: currentService.color, flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tab-metrics-side">
                <h4 className="metrics-side-title">Service Benchmarks</h4>
                <div className="tab-metrics-stack">
                  {currentService.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="tab-metric-box">
                      <div className="metric-val" style={{ color: currentService.color }}>{m.value}</div>
                      <div className="metric-lbl">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="tab-cta-wrap">
                  <a 
                    href="https://ai.avyukta.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-tab-launch"
                    style={{ background: currentService.color }}
                  >
                    <span>Deploy {currentService.name}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

