import React from 'react';
import { 
  Bot, 
  PhoneForwarded, 
  FileText, 
  Target, 
  Send, 
  Layers, 
  Calendar, 
  Building2, 
  Headphones, 
  Database, 
  Store, 
  Mail, 
  UserCheck, 
  Sparkles, 
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const FEATURES_DATA = [
  {
    id: 1,
    category: 'voice',
    title: 'AI Voice Agent (Hindi + English)',
    desc: 'Deploy human-like AI agents that speak naturally in English, Hindi, or Hinglish. Trained on your products, services, and sales scripts.',
    icon: Bot,
    accent: '#4f46e5',
    badge: null
  },
  {
    id: 2,
    category: 'voice',
    title: 'Automated Outbound Calling',
    desc: 'AI-powered outbound call automation that reaches hundreds of leads daily, qualifies prospects, books meetings, and updates your CRM.',
    icon: PhoneForwarded,
    accent: '#059669',
    badge: null
  },
  {
    id: 3,
    category: 'voice',
    title: 'AI Call Transcript & Analysis',
    desc: 'Every call is transcribed and analyzed with AI. Auto-detect buyer intent, objection handling, and trigger follow-up workflows.',
    icon: FileText,
    accent: '#0284c7',
    badge: null
  },
  {
    id: 4,
    category: 'crm',
    title: 'AI Lead Scoring & Qualification',
    desc: 'Real-time AI lead scoring based on call outcome, engagement frequency, and buying signals — never miss a hot lead.',
    icon: Target,
    accent: '#8b5cf6',
    badge: null
  },
  {
    id: 5,
    category: 'crm',
    title: 'Multi-Channel Follow-ups',
    desc: 'Send personalized WhatsApp, RCS, SMS, and email follow-ups from approved templates — triggered automatically on call outcomes.',
    icon: Send,
    accent: '#f59e0b',
    badge: null
  },
  {
    id: 6,
    category: 'crm',
    title: 'Lead Sequences & Drip Campaigns',
    desc: 'Build multi-step sequences across calls, WhatsApp, and email with delays, conditions, and exit rules — enroll leads in one click.',
    icon: Layers,
    accent: '#ec4899',
    badge: null
  },
  {
    id: 7,
    category: 'crm',
    title: 'Google Sheets & Calendar Sync',
    desc: 'Auto-import leads from Google Sheets, push call outcomes in real-time, and sync booked meetings to Google Calendar with zero delay.',
    icon: Calendar,
    accent: '#10b981',
    badge: null
  },
  {
    id: 8,
    category: 'crm',
    title: 'Industry-Specific Sales CRM',
    desc: 'Pre-built CRM for industries like Real Estate, Healthcare, Education, Insurance and Solar — pipelines, deals, and contacts ready to use.',
    icon: Building2,
    accent: '#6366f1',
    badge: null
  },
  {
    id: 9,
    category: 'voice',
    title: 'Live Monitor & Human Transfer',
    desc: 'Listen in on live AI calls, whisper to coach, barge in when needed, or route seamlessly to a human agent on the same call.',
    icon: Headphones,
    accent: '#d97706',
    badge: null
  },
  {
    id: 10,
    category: 'crm',
    title: 'AI Knowledge Base',
    desc: 'Upload product brochures, FAQs, and sales documents. Your AI calling agent uses them to give accurate, context-aware responses on every call.',
    icon: Database,
    accent: '#0ea5e9',
    badge: null
  },
  {
    id: 11,
    category: 'addons',
    title: 'Add-On Marketplace',
    desc: 'Includes price for what you need — Bulk Email, WhatsApp API engagement, Social Media AI, Dedicated DIDs, Incoming Calls and more. Pay as you grow.',
    icon: Store,
    accent: '#10b981',
    badge: 'FREE'
  },
  {
    id: 12,
    category: 'addons',
    title: 'Bulk Email Campaigns',
    desc: 'Send personalized marketing emails to your leads using your own email provider. Includes scheduling, tracking, and unsubscribe management.',
    icon: Mail,
    accent: '#a855f7',
    badge: 'ADD-ON'
  },
  {
    id: 13,
    category: 'addons',
    title: 'AI Bulk Candidate Screening',
    desc: 'Automated first-round interviews via voice and rank candidates against job criteria. Push results straight to your hiring team.',
    icon: UserCheck,
    accent: '#3b82f6',
    badge: 'ADD-ON'
  },
  {
    id: 14,
    category: 'addons',
    title: 'AI Social Media Studio',
    desc: 'AI-generated social posts with an editorial calendar and auto-publish to Instagram & Facebook — built on your brand voice.',
    icon: Sparkles,
    accent: '#ec4899',
    badge: 'ADD-ON'
  }
];

const OFFICIAL_AI_CALLER_FEATURES = [
  'Human-Like Conversations, Context Awareness & Contextual Callbacks',
  'Lead Qualification, Objection Handling & Customer Verification',
  'Live Transfer, Warm Transfer & Queue Based Routing',
  'Interruption Detection & Interruption Recovery',
  'Auto Language Migration',
  'Custom Voice Selection',
  '15+ Premium Voices',
  '10+ Regional Languages',
  '10+ International Languages',
  'Mixed Language Conversations (Hinglish etc.)',
  'Real-Time Transcription, Summaries & Call Analytics',
  'Intent Detection & Sentiment Analysis',
  'Call Recording & Complete Call Logs',
  'Live Monitoring Dashboard',
  'Listen, Barge & Whisper Options',
  'Knowledge Base (Website, PDF, FAQ & SOP Learning)',
  'Visual Flow Builder & No-Code Workflow Builder',
  'Custom DB Triggers, APIs & Webhooks',
  'CRM, ERP, WhatsApp, SMS & Email Integrations',
  'Auto CRM Updates, Lead Creation, Stage, Status, Disposition & Sub-Disposition'
];

export default function BusinessAiFeatures({ onOpenTrial, hideHeader = false }) {
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredFeatures = FEATURES_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="business-ai-features-section" id="business-features">
      <div className="wrap plan-wide-wrap">
        {/* Section Header */}
        {!hideHeader && (
          <div className="biz-features-head">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>ENTERPRISE AI CAPABILITIES</span>
            </div>

            <h2 className="biz-main-title home-title">
              Business AI Features to <span className="title-coral">Close More Deals</span>
            </h2>

            <p className="biz-lead-text home-subtitle">
              From human-grade voice calling to CRM pipeline automation — <b>Avyukta IntelliCall</b> provides 
              a unified, production-grade intelligence suite for modern contact centers.
            </p>

            {/* Vaan-Inspired Capability Filter Pills */}
            <div className="city-filter-strip" style={{ marginTop: '24px', marginBottom: '10px' }}>
              <button 
                type="button" 
                className={`city-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                <span>All Capabilities (14)</span>
              </button>
              <button 
                type="button" 
                className={`city-filter-btn ${activeCategory === 'voice' ? 'active' : ''}`}
                onClick={() => setActiveCategory('voice')}
              >
                <span>Voice &amp; Speech Intelligence</span>
              </button>
              <button 
                type="button" 
                className={`city-filter-btn ${activeCategory === 'crm' ? 'active' : ''}`}
                onClick={() => setActiveCategory('crm')}
              >
                <span>CRM &amp; Lead Pipelines</span>
              </button>
              <button 
                type="button" 
                className={`city-filter-btn ${activeCategory === 'addons' ? 'active' : ''}`}
                onClick={() => setActiveCategory('addons')}
              >
                <span>Enterprise Growth Add-Ons</span>
              </button>
            </div>
          </div>
        )}

        {/* 14 Features Grid */}
        <div className="biz-features-grid">
          {filteredFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="biz-feature-card"
                style={{ '--accent-color': item.accent }}
              >
                {/* Top Row: Icon + Optional Badge */}
                <div className="biz-card-top-row">
                  <div 
                    className="biz-icon-box"
                    style={{ 
                      color: item.accent, 
                      backgroundColor: `${item.accent}14`,
                      borderColor: `${item.accent}25`
                    }}
                  >
                    <Icon size={20} strokeWidth={2.2} />
                  </div>

                  {item.badge && (
                    <span 
                      className={`biz-card-badge ${item.badge === 'FREE' ? 'badge-free' : 'badge-addon'}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="biz-card-title">{item.title}</h3>

                {/* Card Description */}
                <p className="biz-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Visual Infrastructure Spotlight Banner */}
        <div className="features-ecosystem-banner">
          <div className="ecosystem-banner-image-wrap">
            <img 
              src={getAssetUrl('/features-automation.jpg')} 
              alt="Multi-Channel AI Telephony Network" 
              className="ecosystem-banner-img"
            />
            <div className="ecosystem-overlay-glow"></div>
          </div>
          <div className="ecosystem-banner-content">
            <div className="pricing-badge-pro ecosystem-content-badge">
              <span className="badge-dot-coral"></span>
              <span>OMNICHANNEL CONNECTIVITY</span>
            </div>
            <h3>Unified Multi-Device Telephony &amp; CRM Infrastructure</h3>
            <p>
              Connect VoIP SIP trunks, mobile smart DIDs, webchat bots, and enterprise CRMs seamlessly into one unified 
              neural turn-taking voice cloud.
            </p>
            <div className="ecosystem-pills">
              <span>Cloud PBX</span>
              <span>CRM Webhooks</span>
              <span>GSM Gateway</span>
              <span>Smart DIDs</span>
              <span>WhatsApp API</span>
            </div>
          </div>
        </div>

        {/* Official 20 AI Caller Features Checklist from Sir's Proposal */}
        <div className="official-ai-features-matrix-card">
          <div className="matrix-header-strip">
            <div className="header-left">
              <span className="matrix-badge-pop">OFFICIAL PROPOSAL SPECIFICATIONS</span>
              <h3 className="matrix-main-heading">Complete AI Caller Feature Checklist</h3>
              <p className="matrix-sub-heading">Included with every Avyukta IntelliCall deployment — zero feature restrictions.</p>
            </div>
            
            <div className="free-cost-badges-group">
              <span className="free-pill">✅ ₹0 AI Platform Rental</span>
              <span className="free-pill">✅ ₹0 Setup Charges</span>
              <span className="free-pill">✅ ₹0 Installation</span>
              <span className="free-pill">✅ ₹0 Training Charges</span>
            </div>
          </div>

          <div className="matrix-checklist-grid">
            {OFFICIAL_AI_CALLER_FEATURES.map((feat, index) => (
              <div key={index} className="checklist-feature-item">
                <CheckCircle2 size={16} className="text-good feat-icon" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Conversion Banner */}
        <div className="biz-features-footer">
          <div className="footer-left">
            <span className="footer-lead-text">
              Ready to automate your inbound &amp; outbound sales pipeline?
            </span>
            <span className="footer-sub-text">
              Zero setup fees • 100 free test minutes • Live onboarding support
            </span>
          </div>

          <a 
            href="https://ai.avyukta.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-biz-cta"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            <span>Start Free Trial Today</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

