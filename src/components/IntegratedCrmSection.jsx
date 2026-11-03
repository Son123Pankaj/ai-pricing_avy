import React, { useState } from 'react';
import { 
  Users, 
  PhoneCall, 
  MessageSquare, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Sparkles, 
  Headphones, 
  Database, 
  TrendingUp, 
  CheckSquare, 
  ArrowRight,
  RefreshCw,
  Target,
  FileCheck,
  Award,
  Bot
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export default function IntegratedCrmSection({ onOpenTrial }) {
  const [activeTab, setActiveTab] = useState('pillars');

  // The 8 Core Lifecycle Pillars directly from the user's architectural diagram
  const crmPillars = [
    {
      id: 'service',
      title: 'Service',
      subtitle: 'Omnichannel Customer Resolution',
      icon: Headphones,
      color: '#0284c7', // Sky Blue
      desc: 'Unified ticketing desk integrating inbound telephony, WhatsApp queries, and web forms into instant SLA-driven agent queues.',
      stats: '< 15s First Response',
      highlights: ['Automated Ticket Generation', 'SLA Escalation Matrix', 'Customer 360° History']
    },
    {
      id: 'orders',
      title: 'Orders',
      subtitle: 'Dispatch & Payment Lifecycles',
      icon: CheckSquare,
      color: '#16a34a', // Emerald Green
      desc: 'Trigger automated order confirmation voice calls, COD verification drips, and instant WhatsApp payment links with live CRM sync.',
      stats: '99.4% Order Validation',
      highlights: ['COD Voice Verification', 'Automated Tracking Drips', 'Payment Link Push']
    },
    {
      id: 'analysis',
      title: 'Analysis',
      subtitle: 'Speech & Sentiment Intelligence',
      icon: BarChart3,
      color: '#9333ea', // Purple
      desc: 'Real-time call transcription, customer sentiment scoring, talk-to-listen ratios, and automated conversion bottleneck discovery.',
      stats: '100% Calls Analyzed',
      highlights: ['Real-Time Transcription', 'Customer Sentiment Score', 'Agent Performance Scorecards']
    },
    {
      id: 'marketing',
      title: 'Marketing',
      subtitle: 'Omnichannel Drips & Campaigns',
      icon: MessageSquare,
      color: '#ea580c', // Coral Brand
      desc: 'Run targeted WhatsApp broadcast campaigns, automated SMS drip funnels, and voice drops with direct lead capture back into CRM pipelines.',
      stats: '4.2x Higher CTR',
      highlights: ['Official Meta Cloud API', 'Drip Follow-Up Cadence', 'Lead Tagging & Segmentation']
    },
    {
      id: 'strategy',
      title: 'Strategy',
      subtitle: 'Predictive Pipeline Forecasting',
      icon: TrendingUp,
      color: '#d97706', // Amber
      desc: 'AI-driven lead scoring prioritizes hot prospects, forecasts monthly revenue, and detects drop-off points in your conversion funnels.',
      stats: '+38% Deal Velocity',
      highlights: ['Dynamic Lead Scoring', 'Pipeline Stage Analytics', 'Deal Closure Probability']
    },
    {
      id: 'sales',
      title: 'Sales',
      subtitle: 'Auto-Dialer & Telephony CRM',
      icon: PhoneCall,
      color: '#2563eb', // Royal Blue
      desc: 'Inbuilt WebRTC 1-click dialer, predictive auto-dialing, instant call popups with complete caller context, and real-time disposition notes.',
      stats: '3.5x Daily Talk Time',
      highlights: ['1-Click WebRTC Call Pop', 'Predictive & Progressive Dialer', 'Call Disposition Logging']
    },
    {
      id: 'support',
      title: 'Support',
      subtitle: '24/7 AI Triage & Live Whisper',
      icon: Bot,
      color: '#0d9488', // Teal
      desc: 'Voice AI agents handle Tier-1 FAQs 24/7 in 12+ Indian and Global languages, seamlessly transferring warm leads to live human specialists.',
      stats: '24/7 Zero Queuing',
      highlights: ['Multilingual AI Agent Triage', 'Warm Live Transfer', 'Supervisor Whisper & Barge']
    },
    {
      id: 'quality',
      title: 'Quality',
      subtitle: 'Compliance & Audio Audits',
      icon: Award,
      color: '#dc2626', // Crimson Red
      desc: '100% stereo dual-channel call recording, keyword spotting, compliance monitoring, and automated QA grading for telephony teams.',
      stats: '100% Dual-Track Audio',
      highlights: ['Stereo Dual-Channel Audio', 'Keyword & Script Auditing', 'Automated QA Grading']
    }
  ];

  // CRM Integration capabilities
  const integrations = [
    { name: 'Meta WhatsApp Cloud', role: 'Official 2-Way Chatbot & Lead Sync', badge: 'Meta Verified' },
    { name: 'Zoho CRM', role: 'Bidirectional Contact & Call Log Sync', badge: 'Native Plugin' },
    { name: 'Bitrix24', role: 'Pipelines, Tasks & Lead Automation', badge: 'Native Plugin' },
    { name: 'Genesys Cloud', role: 'Carrier-Grade Contact Center Bridge', badge: 'Enterprise SIP' },
    { name: 'Salesforce', role: 'Enterprise Account & Opportunity Sync', badge: 'REST API' },
    { name: 'Custom Webhooks', role: 'Connect to any Internal ERP or MySQL', badge: 'Instant Webhooks' }
  ];

  return (
    <section className="integrated-crm-section" id="crm-suite">
      <div className="wrap">
        
        {/* Section Top Header */}
        <div className="section-head text-center" style={{ maxWidth: '860px', margin: '0 auto 48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="pricing-badge-pro" style={{ margin: '0 auto 14px auto' }}>
            <span className="badge-dot-coral"></span>
            <span>CENTRALIZED INTELLIGENT CRM</span>
          </div>
          <h2 className="section-title">
            All-In-One <span className="title-coral">Customer Relationship Management</span> Platform
          </h2>
          <p className="section-subtitle">
            Bridge AI Voice Agents, Meta WhatsApp automation, Pan-India telephony, and customer lifecycle 
            data into one unified, real-time CRM engine designed for maximum conversion.
          </p>
        </div>

        {/* Hero Visual Spotlight: User Architecture Image + 360° Value Summary */}
        <div className="crm-spotlight-card">
          <div className="crm-spotlight-grid">
            
            {/* Left Column: Handheld Smartphone CRM Architecture Visual */}
            <div className="crm-spotlight-image-col">
              <div className="crm-image-frame">
                <img 
                  src={getAssetUrl('/crm-overview.jpg')} 
                  alt="Avyukta CRM - Service, Orders, Analysis, Marketing, Strategy, Sales, Support, Quality" 
                  className="crm-featured-photo"
                />
                <div className="crm-badge-overlay">
                  <div className="crm-live-pulse-dot"></div>
                  <span>Real-Time Sync &bull; 8 Lifecycle Pillars</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Highlights & Value Proposition */}
            <div className="crm-spotlight-content-col">
              <div className="crm-sub-badge">
                <Sparkles size={14} className="text-coral" />
                <span>INTEGRATED TELEPHONY + META WHATSAPP CRM</span>
              </div>
              <h3 className="crm-spotlight-heading">
                Zero Data Fragmentation. <br />
                <span className="title-coral">Every Interaction Under One Screen.</span>
              </h3>
              <p className="crm-spotlight-text">
                Traditional CRMs force agents to switch between WhatsApp windows, softphone dialers, and separate ticket systems. 
                <b> Avyukta IntelliCall CRM</b> unifies every customer touchpoint into an automated lifecycle engine.
              </p>

              {/* 4 Architectural Cornerstones */}
              <div className="crm-cornerstones-list">
                <div className="crm-cornerstone-item">
                  <div className="cornerstone-icon-wrap" style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#ea580c' }}>
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <h4 className="cornerstone-title">Instant Telephony Call-Pop</h4>
                    <p className="cornerstone-desc">When a phone rings, the caller&apos;s full ticket history, past orders, and AI call summaries pop up before answering.</p>
                  </div>
                </div>

                <div className="crm-cornerstone-item">
                  <div className="cornerstone-icon-wrap" style={{ background: 'rgba(37, 211, 102, 0.12)', color: '#25d366' }}>
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <h4 className="cornerstone-title">Meta WhatsApp Official CRM Sync</h4>
                    <p className="cornerstone-desc">Automatic two-way sync between WhatsApp conversations, voice agent interactions, and agent task lists.</p>
                  </div>
                </div>

                <div className="crm-cornerstone-item">
                  <div className="cornerstone-icon-wrap" style={{ background: 'rgba(59, 130, 246, 0.12)', color: '#2563eb' }}>
                    <Database size={18} />
                  </div>
                  <div>
                    <h4 className="cornerstone-title">Auto-Logged Call Transcripts &amp; Audio</h4>
                    <p className="cornerstone-desc">100% stereo dual-track audio recordings and AI turn-by-turn transcripts saved directly in customer timelines.</p>
                  </div>
                </div>

                <div className="crm-cornerstone-item">
                  <div className="cornerstone-icon-wrap" style={{ background: 'rgba(168, 85, 247, 0.12)', color: '#9333ea' }}>
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="cornerstone-title">Automated BPA Triggers</h4>
                    <p className="cornerstone-desc">Trigger post-call SMS receipts, WhatsApp brochures, and dealer notifications without manual data entry.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="crm-actions-row">
                <a 
                  href="https://ai.avyukta.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-p"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Launch Free Trial</span>
                  <ArrowRight size={16} />
                </a>
                <button 
                  type="button" 
                  onClick={onOpenTrial} 
                  className="btn btn-s"
                >
                  Schedule CRM Demo
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 8 Core Lifecycle Pillars Bento Grid (Matching User Screenshot Nodes) */}
        <div className="crm-pillars-section-block">
          <div className="text-center" style={{ marginBottom: '36px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ fontSize: '26px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text)', textAlign: 'center' }}>
              The 8 Core Pillars of <span className="title-coral">Avyukta CRM Architecture</span>
            </h3>
            <p style={{ color: 'var(--mute)', fontSize: '15px', maxWidth: '680px', margin: '8px auto 0', textAlign: 'center' }}>
              Engineered to support modern enterprises from first lead discovery to post-sale loyalty and quality assurance.
            </p>
          </div>

          <div className="crm-pillars-grid">
            {crmPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.id} className="crm-pillar-card">
                  <div className="crm-pillar-top">
                    <div className="crm-pillar-icon-box" style={{ background: `${pillar.color}18`, color: pillar.color }}>
                      <IconComp size={22} />
                    </div>
                    <span className="crm-pillar-stat-pill" style={{ color: pillar.color, borderColor: `${pillar.color}35`, background: `${pillar.color}0a` }}>
                      {pillar.stats}
                    </span>
                  </div>

                  <h4 className="crm-pillar-title">{pillar.title}</h4>
                  <div className="crm-pillar-sub">{pillar.subtitle}</div>
                  <p className="crm-pillar-desc">{pillar.desc}</p>

                  <div className="crm-pillar-highlights">
                    {pillar.highlights.map((item, idx) => (
                      <div key={idx} className="crm-highlight-bullet">
                        <CheckCircle2 size={13} style={{ color: pillar.color, flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Omnichannel Contact Center & Multi-Channel Communication Showcase (Bitrix24 / Avyukta Contact Center) */}
        <div className="crm-channels-showcase-block">
          <div className="text-center" style={{ marginBottom: '32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="pricing-badge-pro" style={{ margin: '0 auto 12px auto' }}>
              <span className="badge-dot-coral"></span>
              <span>UNIFIED CONTACT CENTER</span>
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text)', textAlign: 'center' }}>
              Connect Every Conversation Channel in <span className="title-coral">One Unified CRM</span>
            </h3>
            <p style={{ color: 'var(--mute)', fontSize: '15px', maxWidth: '740px', margin: '8px auto 0', textAlign: 'center' }}>
              From inbound telephony and call tracking to official Meta WhatsApp, Instagram Direct, Facebook Lead Ads, 
              Telegram, and website live chat widgets — all streaming into a single agent inbox with zero context loss.
            </p>
          </div>

          <div className="crm-channels-frame">
            {/* Top Interactive Status Strip */}
            <div className="crm-channels-top-bar">
              <div className="crm-channels-status-left">
                <span className="crm-live-pulse-dot"></span>
                <span className="channels-status-title">Omnichannel Contact Center Active</span>
              </div>
              <div className="crm-channels-badges-right">
                <span className="channel-count-badge">18+ Pre-Integrated Channels</span>
                <span className="channel-speed-badge">Instant Event Routing</span>
              </div>
            </div>

            {/* High-Resolution Dashboard Canvas */}
            <div className="crm-channels-img-canvas">
              <img 
                src={getAssetUrl('/crm-contact-center-channels.jpg')} 
                alt="Bitrix24 and Avyukta Unified Omnichannel Contact Center Channels - Telephony, WhatsApp, Facebook, Instagram, Live Chat, and Mail" 
                className="crm-channels-dashboard-img"
              />
              <div className="crm-channels-hover-overlay">
                <span>⚡ Live Multi-Channel Ingestion &bull; Bidirectional Sync</span>
              </div>
            </div>

            {/* Responsive 4-Category Channels Grid Below */}
            <div className="crm-channel-categories-grid">
              <div className="channel-cat-card">
                <div className="channel-cat-header">
                  <span className="cat-dot" style={{ background: '#0284c7' }}></span>
                  <h5>Voice &amp; Telephony</h5>
                </div>
                <p>Inbound SIP Lines, Smart DIDs, Call Tracking, Automated IVR, and WebRTC Instant Callback.</p>
              </div>

              <div className="channel-cat-card">
                <div className="channel-cat-header">
                  <span className="cat-dot" style={{ background: '#22c55e' }}></span>
                  <h5>WhatsApp &amp; Chatbots</h5>
                </div>
                <p>Official Meta WhatsApp Cloud API, Instant WhatsApp Bots, Edna.io, Viber, and Telegram.</p>
              </div>

              <div className="channel-cat-card">
                <div className="channel-cat-header">
                  <span className="cat-dot" style={{ background: '#3b82f6' }}></span>
                  <h5>Meta &amp; Social DMs</h5>
                </div>
                <p>Instant Facebook Lead Ads sync, Facebook Messenger, Post Comments, and Instagram Direct.</p>
              </div>

              <div className="channel-cat-card">
                <div className="channel-cat-header">
                  <span className="cat-dot" style={{ background: '#ea580c' }}></span>
                  <h5>Web &amp; Digital Forms</h5>
                </div>
                <p>On-site Live Chat widgets, Apple Messages for Business, Lead Capture Forms, and Online Store CRM.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise CRM Ecosystem & 3rd-Party Sync Strip */}
        <div className="crm-integrations-bar">
          <div className="crm-integrations-header">
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: '750', color: 'var(--text)', margin: 0 }}>
                Seamless Bidirectional Sync with Your Existing Stack
              </h4>
              <p style={{ fontSize: '13.5px', color: 'var(--mute)', margin: '4px 0 0' }}>
                Deploy Avyukta CRM as your primary hub, or sync directly into enterprise systems in real time.
              </p>
            </div>
            <div className="crm-sync-speed-tag">
              <RefreshCw size={14} className="text-coral spin-slow" />
              <span>&lt; 200ms Webhook Sync</span>
            </div>
          </div>

          <div className="crm-integrations-chips-grid">
            {integrations.map((item, i) => (
              <div key={i} className="crm-integration-chip">
                <div className="chip-content">
                  <span className="chip-name">{item.name}</span>
                  <span className="chip-role">{item.role}</span>
                </div>
                <span className="chip-badge">{item.badge}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

