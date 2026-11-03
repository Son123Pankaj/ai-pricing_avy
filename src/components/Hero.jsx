import React from 'react';
import { Check, Sparkles, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap">
        <div className="pricing-badge-pro" style={{ margin: '0 auto 16px' }}>
          <span className="badge-dot-coral"></span>
          <span>TRANSPARENT USAGE TELEPHONY</span>
        </div>
        <h1>
          Only pay for<br />
          <span className="g">what you converse</span>
        </h1>
        <p className="lede">
          Simple, transparent, second-by-second pricing for carrier-grade VoIP minutes and autonomous conversational AI voice agents.
          Zero setup fee, zero seat licenses, and zero long-term lock-in.
        </p>
        <div className="chips">
          <span className="chip">
            <Zap size={15} color="#10b981" strokeWidth={2.5} />
            Plans starting from ₹3.00/min
          </span>
          <span className="chip">
            <Clock size={15} color="#10b981" strokeWidth={2.5} />
            Billed by the exact second
          </span>
          <span className="chip">
            <Sparkles size={15} color="#10b981" strokeWidth={2.5} />
            AI Voice Engines from ₹5.00/min
          </span>
          <span className="chip">
            <ShieldCheck size={15} color="#10b981" strokeWidth={2.5} />
            Pan-India STD caller ID guarantee
          </span>
        </div>
      </div>
    </div>
  );
}

