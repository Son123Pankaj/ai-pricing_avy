import React from 'react';
import Hero from '../components/Hero';
import PlanCards from '../components/PlanCards';
import BomBreakdown from '../components/BomBreakdown';
import VoiceEngines from '../components/VoiceEngines';
import VolumeCalculator from '../components/VolumeCalculator';
import BillingExplainer from '../components/BillingExplainer';
import FaqSection from '../components/FaqSection';

export default function PricingPage({ onOpenTrial }) {
  return (
    <div className="pricing-page-view">
      {/* 1. Pricing Main Hero */}
      <Hero />

      {/* 2. Luxury 2x2 Pricing Cards & Model Switcher */}
      <PlanCards onOpenTrial={onOpenTrial} />

      {/* 3. Modular Bill of Materials (BoM 2 SIP & BoM 3 Meta/WABA) */}
      <BomBreakdown />

      {/* 4. Voice Engines Showcase with Live Audio Players */}
      <VoiceEngines />

      {/* 5. Real-Time Volume Rate & Savings Calculator */}
      <VolumeCalculator onOpenTrial={onOpenTrial} />

      {/* 6. Second-by-Second Transparent Billing Explainer */}
      <BillingExplainer />

      {/* 7. Pricing & Refund FAQs */}
      <FaqSection />
    </div>
  );
}

