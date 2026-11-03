import React from 'react';
import { Check } from 'lucide-react';

const FEATURES = [
  'Unlimited AI voice agents',
  'Inbound and outbound calling',
  'Website chat agents',
  'Knowledge base grounding',
  'Live human handoff',
  'Recording and full transcripts',
  'Sentiment and quality scoring',
  'Campaign dialling and callbacks',
  'CRM and webhook integrations',
  'Custom API tools',
  'Team seats and role controls',
  'Dialer seats for human agents',
];

export default function IncludedFeatures() {
  return (
    <section className="included-features-section" id="included-features">
      <div className="wrap">
        <div className="included-features-card">
          <div className="included-head">
            <div className="pricing-badge-pro" style={{ margin: '0 auto 14px auto' }}>
              <span className="badge-dot-coral"></span>
              <span>ALL-INCLUSIVE ARCHITECTURE</span>
            </div>
            <h2 className="included-title">Included in every plan</h2>
            <p className="included-subtitle">
              Nothing is held back for a higher tier. You pay for the voice, not the feature list.
            </p>
          </div>

          <div className="included-checklist-wrapper">
            <ul className="feat included-features-list">
              {FEATURES.map((feature, idx) => (
                <li key={idx}>
                  <div className="feat-check-bubble">
                    <Check size={14} color="#10b981" strokeWidth={3} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

