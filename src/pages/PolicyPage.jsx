import React, { useEffect } from 'react';
import { ShieldCheck, FileText, RefreshCw, ArrowLeft, PhoneCall, Mail } from 'lucide-react';

const POLICY_DATA = {
  privacy: {
    title: 'Privacy Policy',
    badge: 'Data Protection & Security',
    icon: ShieldCheck,
    updated: 'January 2026',
    sections: [
      {
        heading: 'Information We Collect',
        content: 'Avyukta IntelliCall collects account credentials, business billing contact information, telecom call detail records (CDR), and AI conversation telemetry strictly required to process and bill real-time voice and message sessions.'
      },
      {
        heading: 'Call Audio & Data Security',
        content: 'Enterprise call recordings and transcripts are encrypted in transit via TLS 1.3 and at rest with AES-256 encryption. We adhere strictly to Indian Department of Telecommunications (DoT) and TRAI data residency norms.'
      },
      {
        heading: 'No Third-Party Data Sale',
        content: 'Avyukta IntelliCall never sells, monetizes, or shares client contact databases, call recordings, or customer prompts with third-party advertisers or unauthorized LLM trainers.'
      },
      {
        heading: 'Data Retention & Deletion',
        content: 'Call logs and transcripts are retained according to your account configuration (30 to 365 days) and can be permanently deleted upon request via our support desk.'
      }
    ]
  },
  terms: {
    title: 'Terms of Service',
    badge: 'Legal Agreement',
    icon: FileText,
    updated: 'January 2026',
    sections: [
      {
        heading: 'Service Scope',
        content: 'Avyukta IntelliCall Consulting Private Limited provides cloud-hosted predictive dialers, carrier-grade VoIP termination minutes, conversational AI voice bots, and CRM automation tooling under valid telecom carrier licenses.'
      },
      {
        heading: 'Fair Usage & Regulatory Compliance',
        content: 'Subscribers agree to abide by TRAI / DoT telemarketing regulations, DND registry scrubs, and anti-spam protocols. Transmission of illegal, fraudulent, or unsolicited robocall traffic is strictly prohibited.'
      },
      {
        heading: 'Billing & Second-by-Second Pulses',
        content: 'All usage is metered on a second-by-second basis (30s initial pulse followed by 6s increments). Unanswered, failed, or busy attempts are billed at ₹0.00.'
      },
      {
        heading: 'Uptime Commitment',
        content: 'We maintain 99.99% high-availability core telecom infrastructure across multi-redundant SIP trunk carriers with 24*6 senior VoIP engineer support.'
      }
    ]
  },
  refund: {
    title: 'Refund & Cancellation Policy',
    badge: 'Wallet Protection',
    icon: RefreshCw,
    updated: 'January 2026',
    sections: [
      {
        heading: '7-Day Unconditional Wallet Refund',
        content: 'Any unused prepaid wallet balance can be fully refunded to your original payment source within 7 days of deposit upon written request to salesat@dialerpune.in.'
      },
      {
        heading: 'Consumed Usage',
        content: 'Minutes, AI tokens, and SMS/WhatsApp messages already consumed and delivered through carrier routes are non-refundable once connected.'
      },
      {
        heading: 'Zero Cancellation Lock-In',
        content: 'There are no annual contracts, seat lock-ins, or cancellation penalty fees. You may pause or discontinue campaigns at any moment without penalty.'
      },
      {
        heading: 'Dispute Resolution',
        content: 'Billing queries or CDR discrepancies are investigated within 24 business hours by our billing audit desk in Jaipur, Rajasthan.'
      }
    ]
  }
};

export default function PolicyPage({ type = 'privacy', navigateTo }) {
  const policy = POLICY_DATA[type] || POLICY_DATA.privacy;
  const IconComponent = policy.icon;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [type]);

  return (
    <div className="policy-page-wrapper" style={{ padding: '60px 0 80px', minHeight: '80vh', background: 'var(--bg, #f8fafc)' }}>
      <div className="wrap" style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Back Link */}
        <div style={{ marginBottom: '28px' }}>
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); if (navigateTo) navigateTo('/'); }} 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#f97316', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </a>
        </div>

        {/* Header Card */}
        <div style={{ background: '#0e3745', borderRadius: '16px', padding: '36px 32px', color: '#ffffff', marginBottom: '32px', boxShadow: '0 10px 30px rgba(14, 55, 69, 0.15)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.12)', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>
            <IconComponent size={15} style={{ color: '#f97316' }} />
            <span>{policy.badge}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, margin: '0 0 10px', color: '#ffffff' }}>
            {policy.title}
          </h1>
          <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8' }}>
            Last Updated: {policy.updated} &bull; Avyukta IntelliCall Consulting Private Limited
          </p>
        </div>

        {/* Content Sections */}
        <div style={{ background: 'var(--card, #ffffff)', borderRadius: '16px', padding: '36px 32px', border: '1px solid var(--line, #e2e8f0)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}>
          {policy.sections.map((sec, idx) => (
            <div key={idx} style={{ marginBottom: idx === policy.sections.length - 1 ? 0 : '28px', paddingBottom: idx === policy.sections.length - 1 ? 0 : '24px', borderBottom: idx === policy.sections.length - 1 ? 'none' : '1px solid var(--line, #f1f5f9)' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink, #091b48)', marginBottom: '10px' }}>
                {idx + 1}. {sec.heading}
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--body, #475569)', margin: 0 }}>
                {sec.content}
              </p>
            </div>
          ))}

          {/* Contact Box */}
          <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '2px dashed var(--line, #e2e8f0)', background: 'rgba(249, 115, 22, 0.04)', borderRadius: '12px', padding: '20px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink, #091b48)', marginBottom: '8px' }}>
              Questions regarding our policies?
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--body, #64748b)', margin: '0 0 14px' }}>
              Our compliance and legal desk is available to answer questions regarding DoT/TRAI adherence and billing security.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '13.5px', fontWeight: 600 }}>
              <a href="mailto:salesat@dialerpune.in" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f97316', textDecoration: 'none' }}>
                <Mail size={15} />
                <span>salesat@dialerpune.in</span>
              </a>
              <a href="tel:+918560000600" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0e3745', textDecoration: 'none' }}>
                <PhoneCall size={15} />
                <span>+91-856-0000-600</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

