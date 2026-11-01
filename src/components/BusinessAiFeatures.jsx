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
    title: 'AI Voice Agent (Hindi + English)',
    desc: 'Deploy human-like AI agents that speak naturally in English, Hindi, or Hinglish. Trained on your products, services, and sales scripts.',
    icon: Bot,
    accent: '#4f46e5',
    badge: null
  },
  {
    id: 2,
    title: 'Automated Outbound Calling',
    desc: 'AI-powered outbound call automation that reaches hundreds of leads daily, qualifies prospects, books meetings, and updates your CRM.',
    icon: PhoneForwarded,
    accent: '#059669',
    badge: null
  },
  {
    id: 3,
    title: 'AI Call Transcript & Analysis',
    desc: 'Every call is transcribed and analyzed with AI. Auto-detect buyer intent, objection handling, and trigger follow-up workflows.',
    icon: FileText,
    accent: '#0284c7',
    badge: null
  },
  {
    id: 4,
    title: 'AI Lead Scoring & Qualification',
    desc: 'Real-time AI lead scoring based on call outcome, engagement frequency, and buying signals — never miss a hot lead.',
    icon: Target,
    accent: '#8b5cf6',
    badge: null
  },
  {
    id: 5,
    title: 'Multi-Channel Follow-ups',
    desc: 'Send personalized WhatsApp, RCS, SMS, and email follow-ups from approved templates — triggered automatically on call outcomes.',
    icon: Send,
    accent: '#f59e0b',
    badge: null
  },
  {
    id: 6,
    title: 'Lead Sequences & Drip Campaigns',
    desc: 'Build multi-step sequences across calls, WhatsApp, and email with delays, conditions, and exit rules — enroll leads in one click.',
    icon: Layers,
    accent: '#ec4899',
    badge: null
  },
  {
    id: 7,
    title: 'Google Sheets & Calendar Sync',
    desc: 'Auto-import leads from Google Sheets, push call outcomes in real-time, and sync booked meetings to Google Calendar with zero delay.',
    icon: Calendar,
    accent: '#10b981',
    badge: null
  },
  {
    id: 8,
    title: 'Industry-Specific Sales CRM',
    desc: 'Pre-built CRM for industries like Real Estate, Healthcare, Education, Insurance and Solar — pipelines, deals, and contacts ready to use.',
    icon: Building2,
    accent: '#6366f1',
    badge: null
  },
  {
    id: 9,
    title: 'Live Monitor & Human Transfer',
    desc: 'Listen in on live AI calls, whisper to coach, barge in when needed, or route seamlessly to a human agent on the same call.',
    icon: Headphones,
    accent: '#d97706',
    badge: null
  },
  {
    id: 10,
    title: 'AI Knowledge Base',
    desc: 'Upload product brochures, FAQs, and sales documents. Your AI calling agent uses them to give accurate, context-aware responses on every call.',
    icon: Database,
    accent: '#0ea5e9',
    badge: null
  },
  {
    id: 11,
    title: 'Add-On Marketplace',
    desc: 'Includes price for what you need — Bulk Email, WhatsApp API engagement, Social Media AI, Dedicated DIDs, Incoming Calls and more. Pay as you grow.',
    icon: Store,
    accent: '#10b981',
    badge: 'FREE'
  },
  {
    id: 12,
    title: 'Bulk Email Campaigns',
    desc: 'Send personalized marketing emails to your leads using your own email provider. Includes scheduling, tracking, and unsubscribe management.',
    icon: Mail,
    accent: '#a855f7',
    badge: 'ADD-ON'
  },
  {
    id: 13,
    title: 'AI Bulk Candidate Screening',
    desc: 'Automated first-round interviews via voice and rank candidates against job criteria. Push results straight to your hiring team.',
    icon: UserCheck,
    accent: '#3b82f6',
    badge: 'ADD-ON'
  },
  {
    id: 14,
    title: 'AI Social Media Studio',
    desc: 'AI-generated social posts with an editorial calendar and auto-publish to Instagram & Facebook — built on your brand voice.',
    icon: Sparkles,
    accent: '#ec4899',
    badge: 'ADD-ON'
  }
];

export default function BusinessAiFeatures({ onOpenTrial, hideHeader = false }) {
  return (
    <section className="business-ai-features-section" id="business-features">
      <div className="wrap">
        {/* Section Header */}
        {!hideHeader && (
          <div className="biz-features-head">
            <div className="pricing-badge-pro">
              <span className="badge-dot-coral"></span>
              <span>14 BUSINESS AI TOOLS</span>
            </div>

            <h2 className="biz-main-title home-title">
              Business AI Features to <span className="title-coral">Close More Deals</span>
            </h2>

            <p className="biz-lead-text home-subtitle">
              From AI voice calling to CRM pipeline automation — <b>Avyukta IntelliCall</b> is the all-in-one 
              AI calling software for Indian businesses.
            </p>
          </div>
        )}

        {/* 14 Features Grid (Exact Match to User Screenshot) */}
        <div className="biz-features-grid">
          {FEATURES_DATA.map((item) => {
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
            <div className="pricing-badge-pro" style={{ margin: '0 0 14px 0' }}>
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

