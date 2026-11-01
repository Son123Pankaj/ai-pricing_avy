import React from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  Languages, 
  Award, 
  Globe2, 
  ShieldCheck, 
  Cpu, 
  Network, 
  CheckCircle2,
  TrendingDown
} from 'lucide-react';

const STD_CODES = [
  { city: 'Delhi', code: '011' },
  { city: 'Mumbai', code: '022' },
  { city: 'Kolkata', code: '033' },
  { city: 'Ahmedabad', code: '079' },
  { city: 'Bengaluru', code: '080' },
  { city: 'Kota', code: '0744' },
  { city: 'Indore', code: '0731' },
  { city: 'Bhopal', code: '0755' }
];

const GLOBAL_COUNTRIES = ['USA', 'UK', 'Canada', 'Philippines', '150+ More Countries'];

export default function AvyuktaFeatures() {
  return (
    <section className="avyukta-features-section" id="features">
      <div className="wrap">
        {/* Section Header */}
        <div className="head">
          <span className="eyebrow" style={{ marginBottom: '14px' }}>
            Avyukta Advantages
          </span>
          <h2>Why Leading Businesses Choose Avyukta</h2>
          <p>
            Combining <b>2 Decades of Deep Telecom Engineering</b> with cutting-edge AI Voice, 
            Omnichannel CRM Integration, and Transparent Second-by-Second Billing.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="features-showcase-grid">
          {/* Card 1: 2 Decades of Telco Experience */}
          <div className="feature-luxury-card highlight-card">
            <div className="feature-card-header">
              <div className="feature-icon-badge" style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>
                <Award size={24} color="#fff" />
              </div>
              <span className="feature-status-tag">Proven Heritage</span>
            </div>
            <h3>2 Decades of Telecom Experience</h3>
            <p>
              Over 20+ years of mission-critical telecom infrastructure management. 
              We own the carrier-grade routing, SIP trunks, and low-latency voice pipelines 
              required for enterprise reliability.
            </p>
            <ul className="feature-points-list">
              <li>
                <CheckCircle2 size={16} className="text-good" />
                <span>99.99% Carrier-grade telecom uptime</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-good" />
                <span>Up to 100+ concurrent calls without latency degradation</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-good" />
                <span>Direct SIP &amp; DID trunking integration</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Voice, Text & Multi-Language AI Agents */}
          <div className="feature-luxury-card">
            <div className="feature-card-header">
              <div className="feature-icon-badge" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                <Languages size={24} color="#fff" />
              </div>
              <span className="feature-status-tag" style={{ color: '#059669', borderColor: '#05966944' }}>
                Omnichannel AI
              </span>
            </div>
            <h3>Voice, Text &amp; Multi-Language Support</h3>
            <p>
              Unified conversational agents across voice calling and digital text chat. 
              Ground your agents on your business data with natural speech synthesis in 60+ Indic and global accents.
            </p>
            <ul className="feature-points-list">
              <li>
                <CheckCircle2 size={16} className="text-good" />
                <span>Native Hindi, Hinglish, Marathi, Tamil, Telugu, Gujarati</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-good" />
                <span>Sub-500ms conversational turn-taking</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-good" />
                <span>Instant sentiment analysis &amp; live call transcripts</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Pan-India CLI/DID & Global Reach */}
          <div className="feature-luxury-card">
            <div className="feature-card-header">
              <div className="feature-icon-badge" style={{ background: 'linear-gradient(135deg, #0284c7, #06b6d4)' }}>
                <Globe2 size={24} color="#fff" />
              </div>
              <span className="feature-status-tag" style={{ color: '#0284c7', borderColor: '#0284c744' }}>
                Pan-India &amp; Global
              </span>
            </div>
            <h3>Pan-India CLI/DID &amp; Global Connectivity</h3>
            <p>
              Make your calls recognizable with localized caller ID (CLI) and direct inward dialing (DID) 
              across all major Indian commercial hubs and 150+ countries.
            </p>
            
            {/* STD Codes Badges */}
            <div className="std-codes-box">
              <div className="box-label">Domestic STD Codes:</div>
              <div className="std-chips-grid">
                {STD_CODES.map((item, idx) => (
                  <span key={idx} className="std-chip">
                    <b>{item.code}</b> ({item.city})
                  </span>
                ))}
              </div>
            </div>

            <div className="global-reach-bar">
              <b>Global Coverage:</b> {GLOBAL_COUNTRIES.join(' · ')}
            </div>
          </div>

          {/* Card 4: Integrated CRM & Free BPA Consulting */}
          <div className="feature-luxury-card">
            <div className="feature-card-header">
              <div className="feature-icon-badge" style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)' }}>
                <Cpu size={24} color="#fff" />
              </div>
              <span className="feature-status-tag" style={{ color: '#d97706', borderColor: '#d9770644' }}>
                BPA Automation
              </span>
            </div>
            <h3>Meta CRM Sync &amp; Free BPA Consulting</h3>
            <p>
              Seamless integration with Meta WhatsApp Business, Lead CRM, and Webhooks. 
              We offer complimentary Business Process Automation (BPA) consulting to transform your entire workflow.
            </p>
            <ul className="feature-points-list">
              <li>
                <CheckCircle2 size={16} className="text-good" />
                <span>Meta WhatsApp &amp; Omnichannel CRM Synchronization</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-good" />
                <span>Free BPA Consulting for Prospect-to-Client Pipelines</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="text-good" />
                <span>1-Click Live Human Agent Handoff</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Quality Guarantee Strip (Point 6 & 7: No broken links, No false promises, Simple terms) */}
        <div className="quality-promise-banner">
          <div className="promise-item">
            <ShieldCheck size={20} color="#059669" />
            <div>
              <b>No Broken Links &amp; Zero False Promises</b>
              <p>Every feature shown is fully tested, working, and immediately deployable today.</p>
            </div>
          </div>

          <div className="promise-item">
            <TrendingDown size={20} color="#4f46e5" />
            <div>
              <b>Lowest Cost Guaranteed</b>
              <p>Pay only for connected call seconds and verified AI replies. No setup fees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

