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
    <section>
      <div className="wrap">
        <div className="head">
          <h2>Included in every plan</h2>
          <p>
            Nothing is held back for a higher tier. You pay for the voice, not the feature list.
          </p>
        </div>

        <ul className="feat">
          {FEATURES.map((feature, idx) => (
            <li key={idx}>
              <Check size={16} color="#059669" strokeWidth={3} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

