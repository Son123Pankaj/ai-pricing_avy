import React from 'react';
import AboutMomentsShowcase from '../components/AboutMomentsShowcase';
import WhoWeAre from '../components/WhoWeAre';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Cpu, 
  Users, 
  Building2, 
  TrendingUp,
  FileCheck,
  PhoneCall,
  Zap
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

export default function AboutPage({ onOpenTrial }) {
  return (
    <div className="about-page-view">
      {/* 1. Page Hero Banner featuring 17+ Years Excellence Graphic - 100% Full Width */}
      <section className="about-hero-fullwidth-section">
        <h1 className="sr-only">
          17+ Years of Telecom Excellence Meets Next-Gen Voice AI - Avyukta IntelliCall
        </h1>

        <a 
          href="https://ai.avyukta.in/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Avyukta IntelliCall 17+ Years of Telecom Excellence - Start Free Trial"
          className="about-hero-fullwidth-link"
        >
          <img 
            src={getAssetUrl('/about-hero-banner.jpg')} 
            alt="17+ Years of Telecom Excellence Meets Next-Gen Voice AI - Avyukta IntelliCall" 
            className="about-hero-fullwidth-img"
          />
        </a>
      </section>

      {/* 2. Curated Moments & Infrastructure Showcase (Expanding Interactive Accordion) */}
      <AboutMomentsShowcase onOpenTrial={onOpenTrial} />

      {/* 3. Comprehensive Heritage, 8 Pillars, 11 Ecosystem Modules, Team Photo & Official Proposal Sign-off */}
      <WhoWeAre />

      {/* 4. Quality Promise & Reliability Banner */}
      <section className="quality-promise-section" style={{ padding: '40px 0 60px' }}>
        <div className="wrap plan-wide-wrap">
          <div className="quality-banner-box">
            <div className="quality-icon-wrap">
              <FileCheck size={32} className="text-good" />
            </div>
            <div>
              <h3>Zero False Promises &bull; Carrier-Grade Reliability</h3>
              <p>
                At Avyukta, what you see is what you get. No broken links, no hidden subscription traps, 
                and no &ldquo;coming soon&rdquo; feature hype. Every capability shown on this portal is live, tested, and battle-ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
