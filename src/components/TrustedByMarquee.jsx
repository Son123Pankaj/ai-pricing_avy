import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Globe2, 
  Award, 
  Building2,
  TrendingUp,
  Cpu,
  Layers,
  GraduationCap,
  Users,
  Briefcase
} from 'lucide-react';

// 13 Elite Client Brands from Avyukta's Enterprise Portfolio
const CLIENTS = [
  { 
    id: 1, 
    name: 'Analytics Group', 
    subtitle: 'Data & Intelligence',
    icon: TrendingUp,
    accent: '#6366f1'
  },
  { 
    id: 2, 
    name: 'Ebhaiya Services', 
    subtitle: 'Digital Commerce',
    icon: Building2,
    accent: '#10b981'
  },
  { 
    id: 3, 
    name: 'FirstMeridian®', 
    subtitle: 'Workforce Solutions',
    icon: Users,
    accent: '#0284c7'
  },
  { 
    id: 4, 
    name: 'PM Industries', 
    subtitle: 'Enterprise Telecom',
    icon: Cpu,
    accent: '#a855f7'
  },
  { 
    id: 5, 
    name: "D'Verve Media", 
    subtitle: 'AdTech & Growth',
    icon: Layers,
    accent: '#ec4899'
  },
  { 
    id: 6, 
    name: 'Media Tech Temple', 
    subtitle: 'Content & Tech',
    icon: Sparkles,
    accent: '#f59e0b'
  },
  { 
    id: 7, 
    name: 'KCPC Shahjahanpur', 
    subtitle: 'Regional Powerhouse',
    icon: Briefcase,
    accent: '#3b82f6'
  },
  { 
    id: 8, 
    name: 'Edvice', 
    subtitle: 'Smart Counseling',
    icon: GraduationCap,
    accent: '#14b8a6'
  },
  { 
    id: 9, 
    name: 'BookMyBai', 
    subtitle: 'On-Demand Services',
    icon: Users,
    accent: '#f97316'
  },
  { 
    id: 10, 
    name: 'StarTek Global', 
    subtitle: 'Omnichannel BPO',
    icon: PhoneCall,
    accent: '#8b5cf6'
  },
  { 
    id: 11, 
    name: 'Armor Security', 
    subtitle: 'Enterprise Safety',
    icon: ShieldCheck,
    accent: '#06b6d4'
  },
  { 
    id: 12, 
    name: 'Humanary Health', 
    subtitle: 'Healthcare Telephony',
    icon: Award,
    accent: '#ef4444'
  },
  { 
    id: 13, 
    name: 'TIPS-G Global', 
    subtitle: 'International SIP',
    icon: Globe2,
    accent: '#84cc16'
  },
];

export default function TrustedByMarquee() {
  return (
    <section className="trusted-marquee-section">
      <div className="wrap">
        {/* Header with Trust Badges */}
        <div className="trusted-header-block">
          <div className="trusted-badge-tag">
            <Sparkles size={14} className="badge-sparkle" />
            <span>ENTERPRISE PROVEN TELECOM BACKBONE</span>
          </div>

          <h3 className="trusted-main-title">
            Trusted by 500+ Leading Businesses &amp; High-Volume Contact Centers
          </h3>

          <p className="trusted-sub-caption">
            From India&apos;s fastest growing consumer startups to multi-national BPOs handling 
            millions of inbound &amp; outbound interactions every month.
          </p>

          <div className="trust-metrics-row">
            <span className="trust-metric-pill">
              <Award size={14} className="metric-icon text-indigo" />
              <b>20+ Years</b> Telecom Pioneer
            </span>
            <span className="trust-metric-pill">
              <PhoneCall size={14} className="metric-icon text-emerald" />
              <b>50M+</b> Monthly Voice Mins
            </span>
            <span className="trust-metric-pill">
              <ShieldCheck size={14} className="metric-icon text-cyan" />
              <b>99.99%</b> Carrier Uptime SLA
            </span>
            <span className="trust-metric-pill">
              <Globe2 size={14} className="metric-icon text-amber" />
              <b>Pan-India</b> STD CLI &amp; 150+ Countries
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Seamless Scrolling Marquee */}
      <div className="marquee-wrapper">
        <div className="marquee-fade-left"></div>
        <div className="marquee-fade-right"></div>

        <div className="marquee-container">
          {/* Track 1 */}
          <div className="marquee-track">
            {CLIENTS.map((client, idx) => {
              const Icon = client.icon;
              return (
                <div key={`a-${idx}`} className="client-luxury-card" title={`${client.name} - ${client.subtitle}`}>
                  <div className="client-card-icon" style={{ color: client.accent, backgroundColor: `${client.accent}15` }}>
                    <Icon size={18} />
                  </div>
                  <div className="client-card-text">
                    <span className="client-card-name">{client.name}</span>
                    <span className="client-card-sub">{client.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Track 2 (Duplicate for infinite seamless loop) */}
          <div className="marquee-track" aria-hidden="true">
            {CLIENTS.map((client, idx) => {
              const Icon = client.icon;
              return (
                <div key={`b-${idx}`} className="client-luxury-card" title={`${client.name} - ${client.subtitle}`}>
                  <div className="client-card-icon" style={{ color: client.accent, backgroundColor: `${client.accent}15` }}>
                    <Icon size={18} />
                  </div>
                  <div className="client-card-text">
                    <span className="client-card-name">{client.name}</span>
                    <span className="client-card-sub">{client.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Track 3 (Extra duplicate for 4k / ultrawide screens) */}
          <div className="marquee-track" aria-hidden="true">
            {CLIENTS.map((client, idx) => {
              const Icon = client.icon;
              return (
                <div key={`c-${idx}`} className="client-luxury-card" title={`${client.name} - ${client.subtitle}`}>
                  <div className="client-card-icon" style={{ color: client.accent, backgroundColor: `${client.accent}15` }}>
                    <Icon size={18} />
                  </div>
                  <div className="client-card-text">
                    <span className="client-card-name">{client.name}</span>
                    <span className="client-card-sub">{client.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
