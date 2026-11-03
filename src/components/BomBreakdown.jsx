import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Boxes, 
  Info, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Smartphone
} from 'lucide-react';

export default function BomBreakdown() {
  const [channels, setChannels] = useState(10); // Default 10 channels (recommended)

  // Calculations for BoM 2 SIP Infrastructure
  const channelRate = 1100;
  const monthlyRental = channels * channelRate;
  const advancePayment = monthlyRental;
  const securityDeposit = monthlyRental * 2;
  const netSipInitial = advancePayment + securityDeposit;

  // BoM 3 Meta/WABA Platform
  const metaMonthly = 6000;
  const aiTokensIncluded = 2000;

  // Total Case A Net Initial (AI ₹10k + SIP + Meta ₹6k)
  const aiRecharge = 10000;
  const totalCaseAInitial = aiRecharge + netSipInitial + metaMonthly;
  const totalCaseAFixedMonthly = monthlyRental + metaMonthly;

  return (
    <section className="bom-section" id="bom-breakdown">
      <div className="wrap plan-wide-wrap">
        
        {/* Section Header */}
        <div className="bom-head">
          <div className="pricing-badge-pro">
            <span className="badge-dot-coral"></span>
            <span>MODULAR BILL OF MATERIALS (BOM)</span>
          </div>

          <h2 className="bom-title">
            Infrastructure &amp; Platform Commercials <span className="title-coral">BoM 2 &amp; BoM 3</span>
          </h2>

          <p className="bom-lead-text">
            Transparent enterprise telephony trunking and WhatsApp Business API commercials for clients choosing the Modular Pricing Model (Case A).
          </p>
        </div>

        {/* 2-Column High-Impact Cards: BoM 2 (SIP) & BoM 3 (Meta/WABA) */}
        <div className="bom-cards-grid">
          
          {/* =========================================================
              CARD 1: BoM 2 - SIP INFRASTRUCTURE
             ========================================================= */}
          <div className="bom-card bom-sip-card">
            <div className="bom-card-accent sip-accent"></div>
            
            <div className="bom-card-top-header">
              <div className="bom-icon-badge sip-icon-badge">
                <PhoneCall size={20} />
              </div>
              <span className="bom-pill sip-pill">BoM 2 · Telephony Infrastructure</span>
            </div>

            <div className="bom-card-body-head">
              <h3 className="bom-card-title">SIP Infrastructure</h3>
              <p className="bom-card-desc">
                High-throughput, carrier-grade SIP channels with dedicated DID numbers and multi-tenant telephony routing.
              </p>
            </div>

            {/* Base Pricing Highlight */}
            <div className="bom-pricing-strip">
              <div className="bom-price-large">
                <span className="currency">₹</span>1,100
                <span className="unit-label">/ channel / month</span>
              </div>
              <div className="bom-recommend-badge">
                <Sparkles size={13} />
                <span>Includes 2 DIDs / Channel</span>
              </div>
            </div>

            {/* Interactive Channel Scale Selector */}
            <div className="bom-channel-selector-box">
              <div className="channel-selector-top">
                <span className="selector-label">Configure Telephony Channels:</span>
                <span className="channel-count-display"><b>{channels} Channels</b> ({channels * 2} DIDs)</span>
              </div>
              <div className="channel-preset-buttons">
                {[5, 10, 20, 30, 50].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`btn-channel-chip ${channels === num ? 'active' : ''}`}
                    onClick={() => setChannels(num)}
                  >
                    {num} Ch {num === 10 ? '(Rec.)' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Financial Breakdown Table */}
            <div className="bom-math-breakdown-table">
              <div className="math-row">
                <span>Monthly Rental ({channels} × ₹1,100):</span>
                <b>₹{monthlyRental.toLocaleString('en-IN')} / mo</b>
              </div>
              <div className="math-row">
                <span>1 Month Advance Payment:</span>
                <b>₹{advancePayment.toLocaleString('en-IN')}</b>
              </div>
              <div className="math-row">
                <span>2 Months Security Deposit (Refundable):</span>
                <b>₹{securityDeposit.toLocaleString('en-IN')}</b>
              </div>
              <div className="math-row total-highlight-row">
                <span>Net Initial SIP Payment:</span>
                <b className="text-teal">₹{netSipInitial.toLocaleString('en-IN')} + GST</b>
              </div>
            </div>

            {/* CLI Routing Options Box */}
            <div className="bom-cli-options-box">
              <h4 className="cli-box-heading">
                <Smartphone size={14} className="text-coral" />
                <span>Pan-India CLI Routing Options:</span>
              </h4>
              <div className="cli-chips-row">
                <div className="cli-chip">
                  <span className="cli-tag promo">Promotional</span>
                  <span className="cli-val">080 Series / Customer GSM CLI</span>
                </div>
                <div className="cli-chip">
                  <span className="cli-tag tx">Transactional / Opt-In</span>
                  <span className="cli-val">079 / 0612 / 0731 / 0744 / VMN</span>
                </div>
              </div>
              <p className="cli-footnote">
                * Note: VMN &amp; Premium Transactional CLIs @ 10% higher commercials and 1 DID/Channel.
              </p>
            </div>
          </div>

          {/* =========================================================
              CARD 2: BoM 3 - META / WABA PLATFORM
             ========================================================= */}
          <div className="bom-card bom-meta-card">
            <div className="bom-card-accent meta-accent"></div>

            <div className="bom-card-top-header">
              <div className="bom-icon-badge meta-icon-badge">
                <MessageSquare size={20} />
              </div>
              <span className="bom-pill meta-pill">BoM 3 · Official Meta Platform</span>
            </div>

            <div className="bom-card-body-head">
              <h3 className="bom-card-title">Meta / WABA WhatsApp Platform</h3>
              <p className="bom-card-desc">
                Official Meta WhatsApp Business Cloud API with conversational AI chatbot, automated drip journeys &amp; audio notes.
              </p>
            </div>

            {/* Pricing Highlight */}
            <div className="bom-pricing-strip">
              <div className="bom-price-large text-emerald">
                <span className="currency">₹</span>6,000
                <span className="unit-label">/ month</span>
              </div>
              <div className="bom-recommend-badge token-highlight">
                <Sparkles size={13} />
                <span>₹2,000 AI Tokens Included</span>
              </div>
            </div>

            {/* 12 Feature Checkpoints (2 Columns) */}
            <ul className="bom-features-grid-2col">
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span><b>Official Meta WhatsApp Business API</b></span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span>Conversational AI WhatsApp Chatbot</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span>WhatsApp Journey &amp; Drip Automation</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span>Broadcasts &amp; Template Messaging</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span>No-Code Flow Builder &amp; Knowledge Base</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span>Bi-Directional CRM &amp; Database Sync</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span><b>Voice Note AI Responses (Interactive)</b></span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span>AI Generated Audio Voice Notes</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span><b>Recorded WhatsApp Voice Calls</b></span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span>Automated Lead Nurturing &amp; Retargeting</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span>Custom DB Triggers, APIs &amp; Webhooks</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="feat-icon check-meta" />
                <span>Executive Telemetry &amp; Analytics Dashboard</span>
              </li>
            </ul>

            {/* Value Callout Box */}
            <div className="meta-value-callout-box">
              <div className="callout-icon">
                <CheckCircle2 size={18} className="text-emerald" />
              </div>
              <div className="callout-text">
                <b>Zero Human Fatigue · 24/7 Lead Capturing</b>
                <p>Engage inbound inquiries instantly over WhatsApp while AI Voice Agents handle live telephone calls simultaneously.</p>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================
            COMPARISON MATRIX BANNER: CASE A (MODULAR) VS CASE B (BUNDLE)
           ========================================================= */}
        <div className="bom-comparison-matrix-card">
          <div className="matrix-card-header">
            <h3 className="matrix-title">
              <Layers size={20} className="text-coral" />
              <span>Investment Comparison: Case A (Modular) vs Case B (All-in-One Bundle)</span>
            </h3>
            <span className="matrix-badge">Official Commercial Policy</span>
          </div>

          <div className="matrix-grid-two-col">
            {/* Case A: Modular A-La-Carte */}
            <div className="matrix-plan-col case-a-col">
              <div className="matrix-col-top">
                <span className="matrix-tier-pill neutral-pill">Case A : Modular Model</span>
                <h4 className="matrix-col-title">A-La-Carte Architecture</h4>
                <p className="matrix-col-sub">Separate infrastructure components for enterprises with existing SIP or CRM contracts.</p>
              </div>

              <div className="matrix-key-stat">
                <span className="stat-label">Net Initial Investment:</span>
                <span className="stat-value text-teal">₹{totalCaseAInitial.toLocaleString('en-IN')} + GST</span>
                <span className="stat-sub">(AI ₹10k + SIP ₹{netSipInitial.toLocaleString('en-IN')} + Meta ₹6k)</span>
              </div>

              <div className="matrix-points-list">
                <div className="matrix-point-item">
                  <CheckCircle2 size={16} className="text-teal" />
                  <span><b>₹0 AI Platform Rental</b> &amp; ₹0 Installation Fees</span>
                </div>
                <div className="matrix-point-item">
                  <CheckCircle2 size={16} className="text-teal" />
                  <span><b>SIP Advance &amp; Security:</b> ₹{netSipInitial.toLocaleString('en-IN')} (for {channels} channels)</span>
                </div>
                <div className="matrix-point-item">
                  <CheckCircle2 size={16} className="text-teal" />
                  <span><b>Meta/WABA Platform:</b> ₹6,000 / month (Includes ₹2,000 tokens)</span>
                </div>
                <div className="matrix-point-item">
                  <CheckCircle2 size={16} className="text-teal" />
                  <span><b>Monthly Fixed Recurring:</b> ₹{totalCaseAFixedMonthly.toLocaleString('en-IN')} + GST + AI Usage</span>
                </div>
              </div>
            </div>

            {/* Case B: All-in-One Turnkey */}
            <div className="matrix-plan-col case-b-col">
              <div className="matrix-col-top">
                <span className="matrix-tier-pill pop-pill">Case B : Turnkey Bundle</span>
                <h4 className="matrix-col-title">All-in-One Solution</h4>
                <p className="matrix-col-sub">AI Caller + SIP + CRM + Meta/WABA all bundled into one transparent minute rate.</p>
              </div>

              <div className="matrix-key-stat">
                <span className="stat-label">Net Initial Activation:</span>
                <span className="stat-value text-emerald">₹10,000 + GST</span>
                <span className="stat-sub">(100% usable as calling recharge)</span>
              </div>

              <div className="matrix-points-list">
                <div className="matrix-point-item">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span><b>₹0 Platform Rental</b>, Setup &amp; Installation</span>
                </div>
                <div className="matrix-point-item">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span><b>₹0 Telephony Security Deposit</b> (Included in min rate)</span>
                </div>
                <div className="matrix-point-item">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span><b>Meta / WABA WhatsApp Platform</b> (Fully Included)</span>
                </div>
                <div className="matrix-point-item">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span><b>Monthly Fixed Overhead:</b> ₹0 (Pay only for minutes used)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Commercial Conditions Line */}
          <div className="matrix-bottom-bar">
            <span>Minimum Monthly Commitment: <b>100,000 Minutes+ / Month</b></span>
            <span className="divider-dot">·</span>
            <span>Commercials Valid Pan-India</span>
            <span className="divider-dot">·</span>
            <span>Applicable GST Extra</span>
          </div>
        </div>

      </div>
    </section>
  );
}

