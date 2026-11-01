import React from 'react';
import BusinessAiFeatures from '../components/BusinessAiFeatures';
import IntegratedCrmSection from '../components/IntegratedCrmSection';
import IndustryVoiceCrm from '../components/IndustryVoiceCrm';
import BpaFlowDiagram from '../components/BpaFlowDiagram';
import IncludedFeatures from '../components/IncludedFeatures';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export default function FeaturesPage({ onOpenTrial }) {
  return (
    <div className="features-page-view">
      {/* Page Hero Banner with Image Showcase */}
      <section className="page-hero-banner features-hero-banner">
        <div className="wrap">
          <div className="features-hero-split">
            <div className="features-hero-text">
              <div className="pricing-badge-pro">
                <span className="badge-dot-coral"></span>
                <span>FEATURES &amp; CAPABILITIES</span>
              </div>
              <h1 className="page-hero-title">
                Enterprise AI Voice &amp; <span className="title-coral">Sales Pipeline Automation</span>
              </h1>
              <p className="page-hero-desc">
                From sub-500ms conversational turn-taking to multi-channel WhatsApp drips and industry-specific 
                CRM workflows — everything you need to scale inbound and outbound operations.
              </p>
              <div className="features-hero-actions" style={{ marginTop: '24px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
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
              </div>
            </div>

            <div className="features-hero-visual">
              <div className="features-visual-card">
                <img 
                  src={getAssetUrl('/features-automation.jpg')} 
                  alt="Enterprise AI Voice & Telephony Automation Network" 
                  className="features-showcase-img"
                />
                <div className="features-visual-badge">
                  <Sparkles size={16} className="text-brand" />
                  <span>Omnichannel Telephony &amp; Cloud Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Integrated Centralized CRM Suite (Service, Orders, Analysis, Marketing, Strategy, Sales, Support, Quality) */}
      <IntegratedCrmSection onOpenTrial={onOpenTrial} />

      {/* 2. 14 Business AI Features Grid */}
      <BusinessAiFeatures onOpenTrial={onOpenTrial} />

      {/* 3. 20 Pre-Configured Industry Templates & CRM */}
      <IndustryVoiceCrm onOpenTrial={onOpenTrial} />

      {/* 4. 5-Step Animated BPA Process Flow */}
      <BpaFlowDiagram />

      {/* 5. Included Platform Features Checklist */}
      <IncludedFeatures />
    </div>
  );
}

