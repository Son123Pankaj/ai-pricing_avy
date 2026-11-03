import React, { useState } from 'react';
import { 
  MapPin, 
  Globe2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Radio, 
  TrendingUp,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

const DID_CARDS = [
  {
    code: '011',
    tier: 'metro',
    didNumber: '011 / 0120-XXXXXX',
    city: 'Delhi NCR',
    state: 'DELHI / GURGAON / NOIDA',
    pickupRate: '76%',
    dialects: 'Hindi, Hinglish, Corporate English',
    verticals: 'B2B SaaS, Healthcare, Auto Dealerships, BFSI',
    gradientBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08), transparent)',
    accent: '#6366f1'
  },
  {
    code: '022',
    tier: 'metro',
    didNumber: '022-XXXXXX',
    city: 'Mumbai',
    state: 'MAHARASHTRA',
    pickupRate: '78%',
    dialects: 'Marathi, Bambaiya Hindi, Corporate English',
    verticals: 'BFSI, NBFC Debt Recovery, FinTech, Real Estate',
    gradientBg: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), transparent)',
    accent: '#06b6d4'
  },
  {
    code: '033',
    tier: 'metro',
    didNumber: '033-XXXXXX',
    city: 'Kolkata',
    state: 'WEST BENGAL',
    pickupRate: '75%',
    dialects: 'Bengali, Hindi, Eastern Corporate English',
    verticals: 'FMCG, Tea & Jute Export, Retail, Education',
    gradientBg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08), transparent)',
    accent: '#ec4899'
  },
  {
    code: '079',
    tier: 'growth',
    didNumber: '079-XXXXXX',
    city: 'Ahmedabad',
    state: 'GUJARAT',
    pickupRate: '81%',
    dialects: 'Gujarati, Hindi, Kathiyawadi',
    verticals: 'Textiles, Chemicals, D2C Commerce, Trading',
    gradientBg: 'linear-gradient(135deg, rgba(168, 85, 247, 0.08), transparent)',
    accent: '#a855f7'
  },
  {
    code: '0744',
    tier: 'growth',
    didNumber: '0744-XXXXXX',
    city: 'Kota',
    state: 'RAJASTHAN',
    pickupRate: '77%',
    dialects: 'Hindi, Marwari, Hadoti, Rajasthani',
    verticals: 'Coaching Institutes, EdTech, Hostels, Real Estate',
    gradientBg: 'linear-gradient(135deg, rgba(249, 115, 22, 0.08), transparent)',
    accent: '#f97316'
  },
  {
    code: '080',
    tier: 'metro',
    didNumber: '080-XXXXXX',
    city: 'Bengaluru',
    state: 'KARNATAKA',
    pickupRate: '79%',
    dialects: 'Kannada, Tech English, Hindi',
    verticals: 'IT Services, EdTech Admissions, Startups, VC',
    gradientBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), transparent)',
    accent: '#10b981'
  },
  {
    code: '073',
    tier: 'growth',
    didNumber: '0731 / 073-XXXXXX',
    city: 'Indore',
    state: 'MADHYA PRADESH',
    pickupRate: '76%',
    dialects: 'Malwi, Hindi, Central Indian English',
    verticals: 'Pharma, D2C Food Processing, Software Hubs, Logistics',
    gradientBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), transparent)',
    accent: '#f59e0b'
  },
  {
    code: '0755',
    tier: 'growth',
    didNumber: '0755-XXXXXX',
    city: 'Bhopal',
    state: 'MADHYA PRADESH',
    pickupRate: '74%',
    dialects: 'Hindi, Bundelkhandi, English',
    verticals: 'Government Consulting, Higher Education, Manufacturing',
    gradientBg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), transparent)',
    accent: '#3b82f6'
  }
];

const GLOBAL_COUNTRIES = [
  { flag: '🇺🇸', name: 'USA', desc: 'Local Area Code DIDs across all 50 states', rate: 'Tier-1 SIP Trunk' },
  { flag: '🇬🇧', name: 'United Kingdom', desc: 'London 020 & UK National Geographics', rate: 'Ofcom Compliant' },
  { flag: '🇨🇦', name: 'Canada', desc: 'Toronto, Vancouver, Montreal local numbers', rate: 'CRTC Approved' },
  { flag: '🇵🇭', name: 'Philippines', desc: 'Manila 02 & Cebu BPO inbound routes', rate: 'Direct Interconnect' },
  { flag: '🇦🇺', name: 'Australia', desc: 'Sydney, Melbourne & National 1300/1800', rate: 'Low Latency Route' },
  { flag: '🇦🇪', name: 'UAE / Dubai', desc: 'Enterprise PBX SIP interconnects', rate: 'TRA Regulated' },
  { flag: '🇸🇬', name: 'Singapore', desc: 'Direct SIP routing for SE-Asia hubs', rate: 'Carrier Grade' },
  { flag: '🌐', name: '150+ More Countries', desc: 'Global two-way telephony & local caller IDs', rate: 'Global Coverage' }
];

export default function PanIndiaConnectivity({ onOpenTrial }) {
  const [activeTab, setActiveTab] = useState('india'); // 'india' or 'global'
  const [cityFilter, setCityFilter] = useState('all'); // 'all', 'metro', 'growth'

  const filteredDids = DID_CARDS.filter((item) => {
    if (cityFilter === 'metro') return item.tier === 'metro';
    if (cityFilter === 'growth') return item.tier === 'growth';
    return true;
  });

  return (
    <section className="dialect-telephony-section" id="connectivity">
      <div className="wrap">
        {/* Section Top Header (Matching user screenshot) */}
        <div className="dialect-head">
          <div className="pricing-badge-pro">
            <span className="badge-dot-coral"></span>
            <span>PAN-INDIA TELECOM INFRASTRUCTURE</span>
          </div>

          <h2 className="dialect-main-title home-title">
            India&apos;s First <span className="title-coral">Dialect-Native Voice AI</span> Telephony Network
          </h2>

          <p className="dialect-lead-text home-subtitle">
            Every Indian region communicates differently. <b>Avyukta IntelliCall</b> pairs local area-code smart DIDs 
            with neural regional language acoustic models to deliver up to <b>81% call pickup rates</b> and zero carrier spam flags.
          </p>

          {/* Tab Selector: Pan-India DIDs vs Global */}
          <div className="telephony-toggle-pills">
            <button
              type="button"
              className={`telephony-tab-pill ${activeTab === 'india' ? 'active' : ''}`}
              onClick={() => setActiveTab('india')}
            >
              <MapPin size={15} />
              <span>Pan-India Smart DIDs (011, 022, 080...)</span>
            </button>
            <button
              type="button"
              className={`telephony-tab-pill ${activeTab === 'global' ? 'active' : ''}`}
              onClick={() => setActiveTab('global')}
            >
              <Globe2 size={15} />
              <span>Global Connectivity (150+ Countries)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Pan-India 8 Smart DIDs with Vaan-Style Architecture */}
        {activeTab === 'india' && (
          <>
            {/* Quick Regional Filter Bar */}
            <div className="city-filter-strip">
              <button 
                type="button" 
                className={`city-filter-btn ${cityFilter === 'all' ? 'active' : ''}`}
                onClick={() => setCityFilter('all')}
              >
                <span>All Telecom Hubs (8 Cities)</span>
              </button>
              <button 
                type="button" 
                className={`city-filter-btn ${cityFilter === 'metro' ? 'active' : ''}`}
                onClick={() => setCityFilter('metro')}
              >
                <span>Tier-1 Metro Hubs (011, 022, 080, 033)</span>
              </button>
              <button 
                type="button" 
                className={`city-filter-btn ${cityFilter === 'growth' ? 'active' : ''}`}
                onClick={() => setCityFilter('growth')}
              >
                <span>High-Growth Commercial (079, 0744, 073, 0755)</span>
              </button>
            </div>

            <div className="dialect-cards-grid">
              {filteredDids.map((item) => (
                <div 
                  key={item.code} 
                  className="dialect-luxury-card vaani-city-card"
                  style={{
                    background: `var(--card) ${item.gradientBg}`,
                    '--card-accent': item.accent
                  }}
                >
                  {/* Card Top: State & Avg Pickup Rate with Mini Progress Meter */}
                  <div className="card-top-meta">
                    <div className="state-and-code-row">
                      <span className="card-std-badge">STD {item.code}</span>
                      <span className="card-state-tag">{item.state}</span>
                    </div>
                    <div className="card-pickup-block">
                      <div className="pickup-num-row">
                        <span className="pickup-label">AVG PICKUP</span>
                        <span className="pickup-pct" style={{ color: '#10b981' }}>
                          {item.pickupRate}
                        </span>
                      </div>
                      <div className="pickup-mini-meter">
                        <div 
                          className="pickup-mini-meter-fill" 
                          style={{ width: item.pickupRate, backgroundColor: item.accent }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* City Name with Styled Icon Frame */}
                  <div className="card-city-row">
                    <div 
                      className="city-icon-frame" 
                      style={{ 
                        color: item.accent, 
                        backgroundColor: `${item.accent}14`,
                        border: `1px solid ${item.accent}30` 
                      }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h3 className="city-title">{item.city}</h3>
                      <span className="city-tier-sub">
                        {item.tier === 'metro' ? 'Tier-1 Telecom Circle' : 'Commercial Growth Circle'}
                      </span>
                    </div>
                  </div>

                  {/* Metadata List: Smart DID, Native Dialects, Key Verticals */}
                  <div className="card-details-table">
                    <div className="detail-table-row">
                      <span className="detail-key">Smart Caller ID:</span>
                      <span className="detail-val did-badge">
                        {item.didNumber}
                      </span>
                    </div>

                    <div className="detail-table-row">
                      <span className="detail-key">Dialects:</span>
                      <span className="detail-val font-semibold">{item.dialects}</span>
                    </div>

                    <div className="detail-table-row">
                      <span className="detail-key">Key Verticals:</span>
                      <span className="detail-val text-muted">{item.verticals}</span>
                    </div>
                  </div>

                  {/* Bottom Playbook Link */}
                  <button
                    type="button"
                    onClick={onOpenTrial}
                    className="card-playbook-link vaani-playbook-btn"
                  >
                    <span>Reserve {item.city} Smart Line</span>
                    <ArrowRight size={14} className="link-arrow" />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Tab 2: Global Connectivity (USA, UK, Canada, Philippines, 150+ countries) */}
        {activeTab === 'global' && (
          <div className="global-grid-wrapper">
            <div className="global-countries-grid">
              {GLOBAL_COUNTRIES.map((ctry, idx) => (
                <div key={idx} className="global-country-card">
                  <div className="country-flag-icon">{ctry.flag}</div>
                  <div className="country-details">
                    <div className="country-header-row">
                      <h4 className="country-title">{ctry.name}</h4>
                      <span className="country-rate-badge">{ctry.rate}</span>
                    </div>
                    <p className="country-desc">{ctry.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="dialect-footer-banner">
          <div className="banner-text-block">
            <h4 className="banner-heading">Need dedicated PRI lines or custom STD code provisioning?</h4>
            <p className="banner-sub">
              Avyukta provides instant provisioning across all 22 telecom circles in India with zero spam score guarantee.
            </p>
          </div>
          <button 
            type="button" 
            onClick={onOpenTrial}
            className="btn-reserve-did"
          >
            <PhoneCall size={16} />
            <span>Reserve Your Smart DID Line</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
