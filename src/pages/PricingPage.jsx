import React from 'react';
import Hero from '../components/Hero';
import PlanCards from '../components/PlanCards';
import VoiceEngines from '../components/VoiceEngines';
import VolumeCalculator from '../components/VolumeCalculator';
import BillingExplainer from '../components/BillingExplainer';
import FaqSection from '../components/FaqSection';

export default function PricingPage({ onOpenTrial }) {
  return (
    <div className="pricing-page-view">
      {/* 1. Pricing Main Hero */}
      <Hero />

      {/* 2. Three Colorful Luxury Pricing Cards */}
      <PlanCards onOpenTrial={onOpenTrial} />

      {/* 3. Voice Engines Showcase with Live Audio Players */}
      <VoiceEngines />

      {/* 4. Real-Time Volume Rate & Savings Calculator */}
      <VolumeCalculator onOpenTrial={onOpenTrial} />

      {/* 5. Second-by-Second Transparent Billing Explainer */}
      <BillingExplainer />

      {/* 6. Pricing & Refund FAQs */}
      <FaqSection />
    </div>
  );
}

