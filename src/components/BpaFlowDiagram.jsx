import React, { useState } from 'react';
import BusinessEcosystemCoverage from './BusinessEcosystemCoverage';
import { 
  Workflow, 
  PhoneIncoming, 
  Cpu, 
  Share2, 
  UserCheck, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle,
  Database,
  Users,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const BPA_STAGES = [
  {
    step: '01',
    id: 'ingestion',
    title: 'Multi-Channel Ingestion',
    icon: PhoneIncoming,
    accent: '#4f46e5',
    tag: 'Instant Trigger',
    summary: 'Voice calls and omnichannel leads ingested with zero lag.',
    features: [
      'Inbound Calls (Pan-India STD CLI)',
      'Meta WhatsApp Business API',
      'Web Chat & Custom Portal Inquiries',
      'Automated High-Volume Outbound Dialing'
    ]
  },
  {
    step: '02',
    id: 'neural',
    title: 'Sub-500ms Voice AI Core',
    icon: Cpu,
    accent: '#06b6d4',
    tag: 'Ultra-Low Latency',
    summary: 'Neural speech recognition, reasoning, and synthesis.',
    features: [
      'Multilingual Indic Speech Recognition',
      'Context-Grounded Conversational LLM',
      'Natural Breath & Interruption Handling',
      'Studio Quality Neural Voice TTS'
    ]
  },
  {
    step: '03',
    id: 'crm',
    title: 'Meta CRM & Database Sync',
    icon: Share2,
    accent: '#10b981',
    tag: 'Real-Time Sync',
    summary: 'Bi-directional live data exchange with zero human effort.',
    features: [
      'Meta CRM & WhatsApp Instant Sync',
      'Real-Time Lead Qualification & Scoring',
      'Automated Payment Link & Document Dispatch',
      'Asterisk / Vicidial Database Webhooks'
    ]
  },
  {
    step: '04',
    id: 'handoff',
    title: 'Smart Human Fallback',
    icon: UserCheck,
    accent: '#a855f7',
    tag: 'Seamless Escalate',
    summary: '90%+ automated resolution with 1-click supervisor handoff.',
    features: [
      '92% First-Contact Automated Resolution',
      '1-Click Live Transfer to Human Agent',
      'Full Call Transcript & Context Passed',
      'Zero Customer Repetition Required'
    ]
  },
  {
    step: '05',
    id: 'analytics',
    title: '360° Analytics & MIS',
    icon: BarChart3,
    accent: '#f59e0b',
    tag: 'Actionable Insights',
    summary: 'Complete audit trail, recordings, and executive reporting.',
    features: [
      'Instant WhatsApp Summary to Customer',
      'Sentiment Analysis & Intent Tagging',
      'Carrier-Grade Call Audio Recording',
      '360° Supervisory MIS Dashboard'
    ]
  }
];

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

const WORKFLOW_STAGES = [
  {
    step: '01',
    id: 'intake',
    title: 'AI Call Intake',
    badge: 'Neural Ingestion',
    color: '#0284c7',
    desc: 'Sub-500ms voice turn-taking and dual-channel SIP trunk call ingestion.'
  },
  {
    step: '02',
    id: 'sync',
    title: 'CRM Data Sync',
    badge: 'Real-Time Hydration',
    color: '#16a34a',
    desc: 'Bi-directional caller identification, past ticket lookup and live disposition sync.'
  },
  {
    step: '03',
    id: 'routing',
    title: 'Dynamic Routing',
    badge: 'Multi-Branch Tree',
    color: '#ea580c',
    desc: 'Smart intent analysis routing callers to specialized AI agents or live agents.'
  },
  {
    step: '04',
    id: 'followup',
    title: 'Automated Follow-Up',
    badge: 'Omnichannel Drip',
    color: '#9333ea',
    desc: 'Instant WhatsApp summary, calendar invites, and auto-created CRM tickets.'
  }
];

export default function BpaFlowDiagram() {
  const [activeStage, setActiveStage] = useState(1);
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section className="bpa-section" id="bpa-flow">
      <div className="wrap">
        {/* Section Header */}
        <div className="bpa-head">
          <div className="pricing-badge-pro">
            <span className="badge-dot-coral"></span>
            <span>BUSINESS PROCESS AUTOMATION (BPA)</span>
          </div>

          <h2 className="bpa-main-title">
            Intelligent <span className="title-coral">BPA Flow Architecture</span>
          </h2>

          <p className="bpa-lead-text">
            See how Avyukta IntelliCall transforms complex contact center workflows into a seamless, 
            automated pipeline. From the first ring to CRM sync, dynamic routing, and multi-channel follow-up in under 500 milliseconds.
          </p>
        </div>

        {/* Animated & Responsive BPA Architecture Diagram Showcase (User Flow Diagram) */}
        <div className="bpa-diagram-showcase-container">
          <div className="bpa-diagram-frame">
            {/* Top Interactive Status Bar */}
            <div className="bpa-diagram-top-bar">
              <div className="bpa-status-chip">
                <span className="bpa-pulse-dot"></span>
                <span>Live Orchestration Pipeline</span>
              </div>
              <div className="bpa-turn-speed">
                <Sparkles size={13} className="text-coral" />
                <span>Sub-500ms Turn-Taking</span>
              </div>
            </div>

            {/* High-Resolution Diagram Canvas with Animated Flow Beam */}
            <div className="bpa-image-canvas">
              <img 
                src="/bpa-workflow.jpg" 
                alt="Avyukta BPA Architecture - AI Call Intake, CRM Data Sync, Dynamic Routing, and Automated Follow-Up" 
                className="bpa-workflow-img"
              />

              {/* Animated Continuous Energy Flow Beam */}
              <div className="bpa-flow-beam"></div>

              {/* Interactive Hover Guidance Overlay */}
              <div className="bpa-hover-hint-bar">
                <span>⚡ Interactive Pipeline: Hover or tap steps below to inspect stage logic</span>
              </div>
            </div>

            {/* 4 Interactive Process Steps Bar (Fully Responsive) */}
            <div className="bpa-interactive-steps-strip">
              {WORKFLOW_STAGES.map((s, i) => (
                <div 
                  key={s.id} 
                  className={`bpa-interactive-step-box ${hoveredStep === i ? 'highlighted' : ''}`}
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className="step-num-pill" style={{ color: s.color, backgroundColor: `${s.color}15`, borderColor: `${s.color}35` }}>
                    STEP {s.step}
                  </div>
                  <h4 className="step-box-title" style={{ color: hoveredStep === i ? s.color : 'inherit' }}>
                    {s.title}
                  </h4>
                  <span className="step-box-badge">{s.badge}</span>
                  <p className="step-box-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5-Step Visual Flow Diagram Detailed Breakdown */}
        <div className="bpa-flow-container">
          <div className="bpa-flow-steps-grid">
            {BPA_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStage === idx;
              return (
                <div 
                  key={stage.id} 
                  className={`bpa-flow-step-card ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                >
                  <div className="step-card-top">
                    <span className="step-number" style={{ color: stage.accent }}>
                      STEP {stage.step}
                    </span>
                    <span 
                      className="step-tag-pill" 
                      style={{ 
                        color: stage.accent, 
                        backgroundColor: `${stage.accent}18`,
                        borderColor: `${stage.accent}30` 
                      }}
                    >
                      {stage.tag}
                    </span>
                  </div>

                  <div className="step-icon-circle" style={{ backgroundColor: `${stage.accent}20`, color: stage.accent }}>
                    <Icon size={24} />
                  </div>

                  <h3 className="step-title">{stage.title}</h3>
                  <p className="step-summary">{stage.summary}</p>

                  <div className="step-features-list">
                    {stage.features.map((feat, fIdx) => (
                      <div key={fIdx} className="step-feat-item">
                        <CheckCircle2 size={13} style={{ color: stage.accent, flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {idx < BPA_STAGES.length - 1 && (
                    <div className="step-connector-arrow">
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 9 Stakeholders Business Ecosystem Coverage & Architecture Consultation */}
        <BusinessEcosystemCoverage />
      </div>
    </section>
  );
}

