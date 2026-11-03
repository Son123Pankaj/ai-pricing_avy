import React, { useState } from 'react';
import { 
  Flame, 
  Crown, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Boxes, 
  Zap, 
  Clock, 
  Volume2, 
  ShieldCheck,
  Building2,
  PhoneCall,
  Info
} from 'lucide-react';

export default function PlanCards({ onOpenTrial }) {
  // 'modular' (Case A: Modular Pricing) or 'bundle' (Case B: All-in-One Turnkey)
  const [model, setModel] = useState('modular');

  const handleTrial = (e) => {
    window.open('https://ai.avyukta.in/', '_blank');
  };

  const handleContact = (e) => {
    window.location.href = 'tel:+917240001056';
  };

  return (
    <section className="pricing-plans-section" id="plans-section">
      <div className="wrap plan-wide-wrap">
        
        {/* Model Switcher: Case A (Modular Pricing) vs Case B (All-in-One Turnkey Bundle) */}
        <div className="pricing-model-switcher-wrap">
          <div className="pricing-model-pill-tabs">
            <button
              type="button"
              className={`model-tab-btn ${model === 'modular' ? 'active' : ''}`}
              onClick={() => setModel('modular')}
            >
              <Layers size={18} className="tab-icon" />
              <div className="tab-text-group">
                <span className="tab-title">Case A : Modular Model</span>
                <span className="tab-subtitle">A-La-Carte (Pay Per Component)</span>
              </div>
              <span className="tab-badge-neutral">BoM 1 · BoM 2 · BoM 3</span>
            </button>

            <button
              type="button"
              className={`model-tab-btn ${model === 'bundle' ? 'active' : ''}`}
              onClick={() => setModel('bundle')}
            >
              <Boxes size={18} className="tab-icon" />
              <div className="tab-text-group">
                <span className="tab-title">Case B : All-in-One Bundle</span>
                <span className="tab-subtitle">Turnkey (AI + SIP + CRM + Meta/WABA)</span>
              </div>
              <span className="tab-badge-pop">RECOMMENDED</span>
            </button>
          </div>

          {/* Model Explainer Banner */}
          <div className="model-explainer-banner">
            {model === 'modular' ? (
              <p className="model-desc-text">
                <span className="desc-highlight">Case A Modular:</span> Independent unbundled pricing for enterprise flexibility. 
                BoM 1 (AI Caller) + BoM 2 (SIP ₹1,100/ch) + BoM 3 (Meta ₹6,000/mo). 
                <b> Net Initial: ₹49,000 + GST</b> | <b>Monthly Fixed: ₹17,000 + GST + AI Usage</b>.
              </p>
            ) : (
              <p className="model-desc-text">
                <span className="desc-highlight">Case B Turnkey:</span> Unified rate covering AI Caller, SIP Telephony, CRM Platform &amp; Meta/WABA WhatsApp. 
                <b> Net Initial Payment: ₹10,000 + GST</b> with <b>₹0 Setup, ₹0 Installation &amp; ₹0 Training</b>.
              </p>
            )}
          </div>
        </div>

        {/* 2x2 Widescreen Compact Luxury Pricing Grid */}
        <div className="plans-colorful-grid plans-widescreen-grid">
          
          {/* =========================================================
              TIER 1: AVYUKTA AI SILVER
             ========================================================= */}
          <div className="plan-luxury-card plan-silver-tier plan-compact-wide">
            <div className="plan-top-accent silver-accent"></div>
            <div className="card-shine-overlay"></div>
            
            <div className="plan-badge-header">
              <div className="plan-icon-wrap silver-icon">
                <Zap size={20} />
              </div>
              <span className="plan-type-pill silver-pill">A Grade Voice</span>
            </div>

            <div className="plan-card-heading-box">
              <h3 className="plan-card-title">Avyukta AI Silver</h3>
              <p className="plan-card-sub">
                {model === 'bundle' 
                  ? 'All-inclusive entry bundle for high-volume customer service, qualification & reminders.' 
                  : 'Modular AI caller platform with standard latency and zero platform rental.'}
              </p>
            </div>

            {/* Price & Voice Specs side-by-side */}
            <div className="plan-pricing-meta-strip">
              <div className="plan-price-row">
                <div className="price-number silver-price">
                  <span className="currency">₹</span>
                  {model === 'bundle' ? '5.00' : '3.00'}
                </div>
                <div className="price-meta">
                  <span className="unit">per / minute</span>
                  <span className="tax">excl. GST · billed by second</span>
                </div>
              </div>

              <div className="voice-specs-chip-box">
                <div className="v-spec-item">
                  <Clock size={13} />
                  <span>Latency <b>&gt; 200ms</b></span>
                </div>
                <div className="v-spec-item">
                  <Volume2 size={13} />
                  <span>Voice <b>~20% Robotic</b></span>
                </div>
              </div>
            </div>

            {/* Features in 2 Columns */}
            <ul className="plan-features-list plan-features-2col">
              <li>
                <CheckCircle2 size={16} className="feat-icon check-silver" />
                <span><b>A Grade Voice Engine</b> for natural tone</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-silver" />
                <span>
                  {model === 'bundle' 
                    ? 'All-In-One: SIP, CRM & Meta/WABA Included' 
                    : 'BoM 1 Platform Only (SIP & Meta separate)'}
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-silver" />
                <span>Interruption Detection &amp; Context Recovery</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-silver" />
                <span>Lead Qualification, Verification &amp; Follow-up</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-silver" />
                <span>Real-Time Transcription &amp; Call Analytics</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-silver" />
                <span><b>₹0 AI Platform Rental &amp; ₹0 Setup Fee</b></span>
              </li>
            </ul>

            <button 
              type="button"
              onClick={handleTrial}
              className="btn-plan btn-plan-secondary btn-plan-silver"
            >
              <span>Start Free Trial</span>
              <ArrowRight size={16} className="btn-plan-arrow" />
            </button>
          </div>

          {/* =========================================================
              TIER 2: AVYUKTA AI GOLD (Featured Hero Tier)
             ========================================================= */}
          <div className="plan-luxury-card plan-featured plan-gold-tier featured-plan plan-compact-wide">
            <div className="plan-top-accent gold-accent"></div>
            <div className="card-shine-overlay"></div>
            
            <div className="featured-ribbon">
              <Flame size={14} className="flame-icon" />
              <span>MOST POPULAR · SUB-200MS</span>
            </div>

            <div className="plan-badge-header">
              <div className="plan-icon-wrap gold-icon">
                <Flame size={20} />
              </div>
              <span className="plan-type-pill gold-pill">A Grade · Ultra-Fast</span>
            </div>

            <div className="plan-card-heading-box">
              <h3 className="plan-card-title">Avyukta AI Gold</h3>
              <p className="plan-card-sub">
                {model === 'bundle'
                  ? 'High-speed conversational intelligence with sub-200ms latency and turnkey ecosystem.'
                  : 'Modular AI caller platform with sub-200ms latency and high conversational speed.'}
              </p>
            </div>

            {/* Price & Voice Specs side-by-side */}
            <div className="plan-pricing-meta-strip">
              <div className="plan-price-row">
                <div className="price-number gold-price">
                  <span className="currency">₹</span>
                  {model === 'bundle' ? '7.00' : '5.80'}
                </div>
                <div className="price-meta">
                  <span className="unit">per / minute</span>
                  <span className="tax">excl. GST · sub-200ms cadence</span>
                </div>
              </div>

              <div className="voice-specs-chip-box gold-specs-box">
                <div className="v-spec-item highlight-spec">
                  <Clock size={13} />
                  <span>Latency <b>&lt; 200ms (Fast)</b></span>
                </div>
                <div className="v-spec-item highlight-spec">
                  <Volume2 size={13} />
                  <span>Voice <b>~15% Robotic</b></span>
                </div>
              </div>
            </div>

            {/* Features in 2 Columns */}
            <ul className="plan-features-list plan-features-2col">
              <li>
                <CheckCircle2 size={16} className="feat-icon check-gold" />
                <span><b>Sub-200ms Latency</b> for real-time human pacing</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-gold" />
                <span>
                  {model === 'bundle'
                    ? 'All-In-One: SIP, CRM & Meta/WABA Included'
                    : 'BoM 1 Platform Only (SIP & Meta separate)'}
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-gold" />
                <span>Live Transfer, Warm Transfer &amp; Queue Routing</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-gold" />
                <span>Mixed Language (Hinglish) &amp; Regional Languages</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-gold" />
                <span>Listen, Barge &amp; Whisper Supervisor Console</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-gold" />
                <span><b>₹0 Setup, ₹0 Installation &amp; ₹0 Training</b></span>
              </li>
            </ul>

            <button 
              type="button"
              onClick={handleTrial}
              className="btn-plan btn-plan-primary btn-plan-gold"
            >
              <span>Deploy Gold AI</span>
              <ArrowRight size={16} className="btn-plan-arrow" />
            </button>
          </div>

          {/* =========================================================
              TIER 3: AVYUKTA AI DIAMOND (A+ Studio Grade)
             ========================================================= */}
          <div className="plan-luxury-card plan-diamond-tier plan-compact-wide">
            <div className="plan-top-accent diamond-accent"></div>
            <div className="card-shine-overlay"></div>

            <div className="plan-badge-header">
              <div className="plan-icon-wrap diamond-icon">
                <Crown size={20} />
              </div>
              <span className="plan-type-pill diamond-pill">A+ Studio Grade</span>
            </div>

            <div className="plan-card-heading-box">
              <h3 className="plan-card-title">Avyukta AI Diamond</h3>
              <p className="plan-card-sub">
                {model === 'bundle'
                  ? 'Flagship ultra-human neural voice with sub-200ms response & complete omnichannel suite.'
                  : 'Studio-grade bespoke voice model with near-human acoustics and modular control.'}
              </p>
            </div>

            {/* Price & Voice Specs side-by-side */}
            <div className="plan-pricing-meta-strip">
              <div className="plan-price-row">
                <div className="price-number diamond-price">
                  <span className="currency">₹</span>
                  {model === 'bundle' ? '11.00' : '10.00'}
                </div>
                <div className="price-meta">
                  <span className="unit">per / minute</span>
                  <span className="tax">excl. GST · A+ Studio HD</span>
                </div>
              </div>

              <div className="voice-specs-chip-box diamond-specs-box">
                <div className="v-spec-item diamond-spec">
                  <Clock size={13} />
                  <span>Latency <b>&lt; 200ms</b></span>
                </div>
                <div className="v-spec-item diamond-spec">
                  <Sparkles size={13} />
                  <span>Voice <b>~5%-10% Robotic</b></span>
                </div>
              </div>
            </div>

            {/* Features in 2 Columns */}
            <ul className="plan-features-list plan-features-2col">
              <li>
                <CheckCircle2 size={16} className="feat-icon check-diamond" />
                <span><b>A+ Grade Studio Voice</b> (~5%-10% robotic only)</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-diamond" />
                <span>
                  {model === 'bundle'
                    ? 'All-In-One: SIP, CRM & Meta/WABA Included'
                    : 'BoM 1 Platform Only (SIP & Meta separate)'}
                </span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-diamond" />
                <span>Custom Voice Clone &amp; Knowledge Base Training</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-diamond" />
                <span>Dedicated Account Manager &amp; Priority SLA Support</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-diamond" />
                <span>Full Telephony Trunking &amp; Real-Time Analytics</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-diamond" />
                <span><b>₹0 Platform Rental, ₹0 Setup &amp; ₹0 Installation</b></span>
              </li>
            </ul>

            <button 
              type="button" 
              onClick={handleTrial}
              className="btn-plan btn-plan-secondary btn-plan-diamond"
            >
              <span>Deploy Diamond</span>
              <ArrowRight size={16} className="btn-plan-arrow" />
            </button>
          </div>

          {/* =========================================================
              TIER 4: AVYUKTA AI CUSTOM (Enterprise Bespoke)
             ========================================================= */}
          <div className="plan-luxury-card plan-custom-tier plan-compact-wide">
            <div className="plan-top-accent custom-accent"></div>
            <div className="card-shine-overlay"></div>

            <div className="plan-badge-header">
              <div className="plan-icon-wrap custom-icon">
                <Building2 size={20} />
              </div>
              <span className="plan-type-pill custom-pill">Bespoke Custom</span>
            </div>

            <div className="plan-card-heading-box">
              <h3 className="plan-card-title">Avyukta AI Custom</h3>
              <p className="plan-card-sub">
                {model === 'bundle'
                  ? 'Tailored enterprise architecture with bespoke models, custom integrations & private VPC.'
                  : 'Custom engineered telephony & AI deployment built specifically to your enterprise specifications.'}
              </p>
            </div>

            {/* Price & Voice Specs side-by-side */}
            <div className="plan-pricing-meta-strip">
              <div className="plan-price-row">
                <div className="price-number custom-price">
                  Custom
                </div>
                <div className="price-meta">
                  <span className="unit">tailored volume pricing</span>
                  <span className="tax">custom enterprise quote</span>
                </div>
              </div>

              <div className="voice-specs-chip-box custom-specs-box">
                <div className="v-spec-item custom-spec">
                  <Clock size={13} />
                  <span>Latency <b>Custom SLA</b></span>
                </div>
                <div className="v-spec-item custom-spec">
                  <Sparkles size={13} />
                  <span>Voice <b>Bespoke Neural Clone</b></span>
                </div>
              </div>
            </div>

            {/* Features in 2 Columns */}
            <ul className="plan-features-list plan-features-2col">
              <li>
                <CheckCircle2 size={16} className="feat-icon check-custom" />
                <span><b>Custom Negotiated Rates</b> tailored to high volume</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-custom" />
                <span>Custom Voice Cloning &amp; Dedicated Knowledge Base</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-custom" />
                <span>Dedicated 24/7 Enterprise Director &amp; 99.99% SLA</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-custom" />
                <span>Full On-Prem Asterisk PBX or Private Cloud VPC</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-custom" />
                <span>Custom DB Triggers, Webhooks &amp; Legacy Bridges</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-custom" />
                <span><b>Zero Setup Overhead &amp; Tailored PoC Period</b></span>
              </li>
            </ul>

            <button 
              type="button" 
              onClick={handleContact}
              className="btn-plan btn-plan-secondary btn-plan-custom"
            >
              <span>Contact Enterprise Sales</span>
              <ArrowRight size={16} className="btn-plan-arrow" />
            </button>
          </div>

        </div>

        {/* Commercial Conditions & Net Initial Payment Information Bar */}
        <div className="commercial-conditions-strip">
          <div className="cond-item">
            <span className="cond-dot"></span>
            <span><b>Minimum Initial Recharge:</b> ₹10,000</span>
          </div>
          <div className="cond-item">
            <span className="cond-dot"></span>
            <span><b>Minimum Monthly Commitment:</b> 100,000 Minutes+ / Month</span>
          </div>
          <div className="cond-item">
            <span className="cond-dot"></span>
            <span><b>Zero Overheads:</b> ₹0 Rental · ₹0 Setup · ₹0 Training</span>
          </div>
          <div className="cond-item">
            <span className="cond-dot"></span>
            <span><b>Taxes:</b> GST Extra</span>
          </div>
        </div>

        {/* Modular Cost Breakdown Banner if Case A is Selected */}
        {model === 'modular' && (
          <div className="modular-summary-alert">
            <div className="modular-alert-content">
              <div className="modular-alert-title">
                <Info size={18} className="text-coral" />
                <b>Case A Commercials Summary:</b>
              </div>
              <p className="modular-alert-desc">
                <b>Net Initial Payment:</b> ₹49,000 + GST (AI Recharge ₹10,000 + SIP Advance &amp; Security ₹33,000 + Meta/WABA ₹6,000).<br />
                <b>Monthly Fixed Recurring:</b> ₹17,000 + GST (SIP ₹11,000 + Meta ₹6,000) + AI Per-Minute Usage.
              </p>
            </div>
            <a href="#bom-breakdown" className="btn-inspect-bom">
              <span>View BoM Breakdown</span>
              <ArrowRight size={14} />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
