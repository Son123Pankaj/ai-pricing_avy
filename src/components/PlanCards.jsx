import React from 'react';
import { Zap, Flame, Crown, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function PlanCards({ onOpenTrial }) {
  const handleTrial = (e) => {
    window.open('https://ai.avyukta.in/', '_blank');
  };

  return (
    <section className="pricing-plans-section" id="plans-section">
      <div className="wrap">
        <div className="plans-colorful-grid">
          {/* Plan 1: Pay-as-you-go */}
          <div className="plan-luxury-card plan-starter plan-emerald">
            <div className="plan-top-accent starter-accent emerald-accent"></div>
            <div className="card-shine-overlay"></div>
            
            <div className="plan-badge-header">
              <div className="plan-icon-wrap starter-icon emerald-icon">
                <Zap size={22} />
              </div>
              <span className="plan-type-pill starter-pill emerald-pill">Zero Lock-In</span>
            </div>

            <h3 className="plan-card-title">Pay-as-you-go</h3>
            <p className="plan-card-sub">Flexible prepaid wallet, top up anytime. Ideal for pilot testing and variable call volumes.</p>

            <div className="plan-price-row">
              <div className="price-number starter-price emerald-price">
                <span className="currency">₹</span>0.40
              </div>
              <div className="price-meta">
                <span className="unit">/ min · usage-based</span>
                <span className="tax">excl. GST · billed by second</span>
              </div>
            </div>

            <ul className="plan-features-list">
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal emerald-text" />
                <span>Prepaid wallet from ₹5,000 upward</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal emerald-text" />
                <span>Top up anytime, balance never expires</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal emerald-text" />
                <span>Unlimited AI voice agents &amp; campaigns</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal emerald-text" />
                <span>7-Day unconditioned wallet refund</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal emerald-text" />
                <span>Includes Webchat &amp; Meta WhatsApp bots</span>
              </li>
            </ul>

            <a 
              href="https://ai.avyukta.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-plan btn-plan-secondary btn-plan-emerald"
              style={{ textDecoration: 'none' }}
            >
              <span>Start Free Trial</span>
              <ArrowRight size={16} className="btn-plan-arrow" />
            </a>
          </div>

          {/* Plan 2: Committed Volume (Featured Hero Tier) */}
          <div className="plan-luxury-card plan-featured plan-purple featured-plan">
            <div className="plan-top-accent featured-accent purple-accent"></div>
            <div className="card-shine-overlay"></div>
            
            <div className="featured-ribbon">
              <Flame size={14} className="flame-icon" />
              <span>MOST POPULAR · SAVE UP TO 37%</span>
            </div>

            <div className="plan-badge-header">
              <div className="plan-icon-wrap featured-icon purple-icon">
                <Flame size={22} />
              </div>
              <span className="plan-type-pill featured-pill purple-pill">High Volume</span>
            </div>

            <h3 className="plan-card-title">Committed Volume</h3>
            <p className="plan-card-sub">Lower per-minute rate for predictable monthly volume, billed from your very first minute.</p>

            <div className="plan-price-row">
              <div className="price-number featured-price purple-price">
                <span className="currency">₹</span>0.30
              </div>
              <div className="price-meta">
                <span className="unit">/ min · from</span>
                <span className="tax">excl. GST · at 10L+ min/month</span>
              </div>
            </div>

            <ul className="plan-features-list">
              <li>
                <CheckCircle2 size={18} className="feat-icon check-coral purple-text" />
                <span><b>Rate fixed for month</b>, billed from minute one</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-coral purple-text" />
                <span><b>Up to 100+ concurrent calls</b> without queueing</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-coral purple-text" />
                <span>Sub-accounts for teams, branches &amp; clients</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-coral purple-text" />
                <span>Priority onboarding &amp; prompt engineering</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-coral purple-text" />
                <span>Dedicated Pan-India STD CLI Trunk mapping</span>
              </li>
            </ul>

            <a href="#volume" className="btn-plan btn-plan-primary btn-plan-purple">
              <span>Calculate Volume Savings</span>
              <ArrowRight size={16} className="btn-plan-arrow" />
            </a>
          </div>

          {/* Plan 3: Enterprise */}
          <div className="plan-luxury-card plan-enterprise plan-amber">
            <div className="plan-top-accent enterprise-accent amber-accent"></div>
            <div className="card-shine-overlay"></div>

            <div className="plan-badge-header">
              <div className="plan-icon-wrap enterprise-icon amber-icon">
                <Crown size={22} />
              </div>
              <span className="plan-type-pill enterprise-pill amber-pill">Custom Scale</span>
            </div>

            <h3 className="plan-card-title">Enterprise</h3>
            <p className="plan-card-sub">Custom voice models, dedicated infrastructure, tailored integrations &amp; 99.99% SLA.</p>

            <div className="plan-price-row">
              <div className="price-number enterprise-price amber-price">
                Custom
              </div>
              <div className="price-meta">
                <span className="unit">volume tier pricing</span>
                <span className="tax">sub-₹0.25 custom quote</span>
              </div>
            </div>

            <ul className="plan-features-list">
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal amber-text" />
                <span>Lowest custom rate at scale (&lt; ₹0.25/min)</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal amber-text" />
                <span>Custom Voice Clone &amp; Knowledge Base training</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal amber-text" />
                <span>Dedicated 24/7 Enterprise Account Director</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal amber-text" />
                <span>Carrier-grade 99.99% Telecom SLA with financial backing</span>
              </li>
              <li>
                <CheckCircle2 size={18} className="feat-icon check-teal amber-text" />
                <span>Full on-prem Asterisk or private cloud VPC</span>
              </li>
            </ul>

            <button 
              type="button" 
              onClick={handleTrial}
              className="btn-plan btn-plan-secondary btn-plan-amber"
            >
              <span>Talk to Enterprise Sales</span>
              <ArrowRight size={16} className="btn-plan-arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
