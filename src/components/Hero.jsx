import React from 'react';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <span className="eyebrow">Pricing</span>
        <h1>
          Only pay for<br />
          <span className="g">what you use</span>
        </h1>
        <p className="lede">
          Simple, transparent, usage-based pricing for voice calls and chat.
          No subscription, no seat licences, no setup fee.
        </p>
        <div className="chips">
          <span className="chip">
            <Check size={16} color="#059669" strokeWidth={3} />
            Prepaid wallet, no lock-in
          </span>
          <span className="chip">
            <Check size={16} color="#059669" strokeWidth={3} />
            Billed by the second
          </span>
          <span className="chip">
            <Check size={16} color="#059669" strokeWidth={3} />
            Every feature in every plan
          </span>
        </div>
      </div>
    </div>
  );
}

