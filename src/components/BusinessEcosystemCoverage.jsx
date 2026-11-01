import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  X, 
  UserPlus, 
  Users, 
  UserCheck, 
  Building2, 
  Truck, 
  Store, 
  Network, 
  Handshake, 
  LineChart,
  Bot,
  PhoneCall,
  MessageSquare,
  Database,
  Calendar,
  Send,
  AlertCircle,
  HelpCircle,
  Clock,
  Layers,
  Check
} from 'lucide-react';
import Swal from 'sweetalert2';

// 9 Business Stakeholders Data Structure with features and step-by-step workflows
export const STAKEHOLDERS_DATA = [
  {
    id: 'prospects',
    name: 'Prospects',
    shortDesc: 'Inbound Lead Qualification & Nurturing',
    fullDesc: 'Automate first-contact discovery, immediate lead qualification, and multi-channel nurture drips so no qualified enquiry goes cold.',
    icon: UserPlus,
    color: '#3b82f6', // Blue
    features: [
      'Inbound Lead Capture',
      'AI Voice Calling',
      'Lead Qualification',
      'Automated Follow-ups',
      'Lead Nurturing'
    ],
    workflow: [
      { step: '01', title: 'New Enquiry', desc: 'Captured via web form, WhatsApp or missed call' },
      { step: '02', title: 'CRM Lead Capture', desc: 'Instant profile hydration and duplicate checking' },
      { step: '03', title: 'AI Voice Interaction', desc: 'Sub-500ms conversational qualification bot call' },
      { step: '04', title: 'Lead Qualification', desc: 'Budget, authority, and need tagged in CRM' },
      { step: '05', title: 'Sales Follow-up', desc: 'Warm transfer to account executive with context' }
    ]
  },
  {
    id: 'clients',
    name: 'Clients',
    shortDesc: '24/7 Account Servicing & Renewals',
    fullDesc: 'Deliver round-the-clock tier-1 customer support, automated renewal reminders, and proactive account health check-ins.',
    icon: Users,
    color: '#10b981', // Emerald
    features: [
      'Customer Support',
      'Automated Notifications',
      'Account Servicing',
      'Renewal Reminders',
      'Customer Follow-ups'
    ],
    workflow: [
      { step: '01', title: 'Customer Request', desc: 'Inbound ticket or service query received' },
      { step: '02', title: 'AI Voice/Text Interaction', desc: 'Instant multilingual resolution or FAQ triage' },
      { step: '03', title: 'CRM Update', desc: 'Live ticket history and status logging' },
      { step: '04', title: 'Resolution', desc: 'First-contact resolution or escalated to engineer' },
      { step: '05', title: 'Renewal Reminder', desc: 'Automated policy or contract expiry notifications' }
    ]
  },
  {
    id: 'employees',
    name: 'Employees',
    shortDesc: 'Automated HR Desk & Attendance Alerts',
    fullDesc: 'Streamline internal workforce operations, candidate interview scheduling, attendance alerts, and policy broadcasts.',
    icon: UserCheck,
    color: '#8b5cf6', // Purple
    features: [
      'HR Desk Automation',
      'Attendance Notifications',
      'Interview Scheduling',
      'Employee Communication',
      'HR Follow-ups'
    ],
    workflow: [
      { step: '01', title: 'Employee Request', desc: 'Leave inquiry, payslip or interview request' },
      { step: '02', title: 'HR System', desc: 'Logged into workforce management portal' },
      { step: '03', title: 'Automated Notification', desc: 'WhatsApp or voice reminder dispatched' },
      { step: '04', title: 'HR Follow-up', desc: 'Approval workflow and calendar confirmation' },
      { step: '05', title: 'Status Update', desc: 'Direct employee confirmation with reference' }
    ]
  },
  {
    id: 'companies',
    name: 'Companies',
    shortDesc: 'Enterprise Telecom & Cloud PBX Infrastructure',
    fullDesc: 'Carrier-grade PBX infrastructure, multi-branch call management, centralized routing, and secure telephony interconnects.',
    icon: Building2,
    color: '#06b6d4', // Cyan
    features: [
      'Enterprise Telephony',
      'Cloud PBX',
      'Business Communication',
      'CRM Integration',
      'Call Management'
    ],
    workflow: [
      { step: '01', title: 'Company Setup', desc: 'Branch locations, DID mapping and trunk provisioning' },
      { step: '02', title: 'Telephony Integration', desc: 'Asterisk, SIP trunking and WebRTC dialer deployment' },
      { step: '03', title: 'Team Communication', desc: 'Multi-tenant extensions and IVR menu routing' },
      { step: '04', title: 'Call Management', desc: 'Concurrent channel scaling and queue prioritization' },
      { step: '05', title: 'Reporting', desc: 'Executive MIS telemetry and call recording audits' }
    ]
  },
  {
    id: 'vendors',
    name: 'Vendors',
    shortDesc: 'Procurement Inquiries & Dispatch Updates',
    fullDesc: 'Coordinate supplier purchase orders, automated dispatch status alerts, invoice confirmations, and delivery updates.',
    icon: Truck,
    color: '#f59e0b', // Amber
    features: [
      'Procurement Enquiries',
      'Vendor Notifications',
      'Order Updates',
      'Dispatch Tracking',
      'Automated Follow-ups'
    ],
    workflow: [
      { step: '01', title: 'Purchase Request', desc: 'Procurement PO generated from inventory threshold' },
      { step: '02', title: 'Vendor Notification', desc: 'Automated WhatsApp/Email RFQ dispatch' },
      { step: '03', title: 'Order Confirmation', desc: 'Supplier acceptance and timeline agreement' },
      { step: '04', title: 'Dispatch Update', desc: 'Real-time airway bill or tracking milestone' },
      { step: '05', title: 'Delivery Status', desc: 'Warehouse receipt verification and payment release' }
    ]
  },
  {
    id: 'dealers',
    name: 'Dealers',
    shortDesc: 'Stock Notifications & Quick Order Booking',
    fullDesc: 'Empower dealer networks with automated inventory alerts, 1-click WhatsApp order booking, and real-time delivery notifications.',
    icon: Store,
    color: '#ea580c', // Coral Orange
    features: [
      'Stock Notifications',
      'Quick Order Booking',
      'Order Confirmation',
      'Dealer Communication',
      'Delivery Updates'
    ],
    workflow: [
      { step: '01', title: 'Stock Alert', desc: 'Low SKU alert or seasonal inventory arrival broadcast' },
      { step: '02', title: 'Dealer Notification', desc: 'Interactive WhatsApp order catalog sent to dealer' },
      { step: '03', title: 'Order Request', desc: 'Dealer selects quantity and delivery branch' },
      { step: '04', title: 'Confirmation', desc: 'Commercial invoice and payment link generated' },
      { step: '05', title: 'Delivery Update', desc: 'Dispatch tracking sent with expected ETA' }
    ]
  },
  {
    id: 'franchisees',
    name: 'Franchisees',
    shortDesc: 'Standardized SOP Guidance & Support',
    fullDesc: 'Ensure franchise brand consistency with automated SOP guidance, compliance reminders, and centralized operational support.',
    icon: Network,
    color: '#ec4899', // Pink
    features: [
      'SOP Guidance',
      'Franchise Onboarding',
      'Automated Reminders',
      'Operational Support',
      'Performance Updates'
    ],
    workflow: [
      { step: '01', title: 'Franchise Registration', desc: 'Application intake and KYC document upload' },
      { step: '02', title: 'Onboarding', desc: 'Telephony PBX setup and CRM portal training' },
      { step: '03', title: 'SOP Guidance', desc: 'AI bot provides instant operational manual answers' },
      { step: '04', title: 'Automated Reminders', desc: 'Royalty, inventory, and audit compliance alerts' },
      { step: '05', title: 'Performance Monitoring', desc: 'Regional benchmark comparison and growth reviews' }
    ]
  },
  {
    id: 'partners',
    name: 'Partners',
    shortDesc: 'Commission Tracking & API Integration',
    fullDesc: 'Manage channel partners, affiliate referral commissions, webhook API integrations, and tier advancement analytics.',
    icon: Handshake,
    color: '#6366f1', // Indigo
    features: [
      'Commission Tracking',
      'Partner Notifications',
      'API Integration',
      'Performance Updates',
      'Partner Communication'
    ],
    workflow: [
      { step: '01', title: 'Partner Registration', desc: 'Partner portal sign-up and API token issuance' },
      { step: '02', title: 'CRM Entry', desc: 'Attributed leads and referrals mapped in CRM' },
      { step: '03', title: 'Commission Tracking', desc: 'Automated revenue calculation per closed deal' },
      { step: '04', title: 'Notifications', desc: 'Instant payout status and tier-upgrade alerts' },
      { step: '05', title: 'Reports', desc: 'Monthly affiliate statements and performance metrics' }
    ]
  },
  {
    id: 'management',
    name: 'Management',
    shortDesc: 'Live 360° MIS Dashboards & Revenue Tracking',
    fullDesc: 'Executive-level supervisory visibility, cross-departmental telephony analytics, churn forecasting, and real-time revenue telemetry.',
    icon: LineChart,
    color: '#14b8a6', // Teal
    features: [
      'MIS Dashboards',
      'Revenue Tracking',
      'Business Reports',
      'Performance Analytics',
      'Management Notifications'
    ],
    workflow: [
      { step: '01', title: 'Business Data', desc: 'Aggregated calls, leads, orders, and tickets' },
      { step: '02', title: 'CRM/System', desc: 'Real-time ETL pipeline normalizes all events' },
      { step: '03', title: 'Analytics', desc: 'Sentiment, agent talk-time, and pipeline velocity' },
      { step: '04', title: 'MIS Dashboard', desc: 'Live visual KPIs displayed on executive screens' },
      { step: '05', title: 'Management Decisions', desc: 'Data-driven resource allocation and scaling' }
    ]
  }
];

// High-Level Global BPA Workflow Steps (Section 5 of prompt)
const GLOBAL_WORKFLOW_PIPELINE = [
  { step: '01', label: 'Customer Enquiry', icon: MessageSquare, desc: 'Omnichannel Voice, WhatsApp or Web form' },
  { step: '02', label: 'Lead Capture', icon: Database, desc: 'Instant CRM profile hydration & attribution' },
  { step: '03', label: 'AI Voice / Text Interaction', icon: Bot, desc: 'Sub-500ms conversational qualification' },
  { step: '04', label: 'CRM Integration', icon: Layers, desc: 'Bidirectional sync across all pipelines' },
  { step: '05', label: 'Automated Follow-up', icon: Clock, desc: 'SLA-driven WhatsApp, Email or callback drip' },
  { step: '06', label: 'Business Outcome', icon: CheckCircle2, desc: 'Higher conversion, zero dropped leads' }
];

export default function BusinessEcosystemCoverage() {
  // Modal states
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreselect, setConsultationPreselect] = useState('Prospects');

  // Consultation Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    country: 'India (+91)',
    businessArea: 'Prospects',
    requirements: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close modals on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedStakeholder(null);
        setIsConsultationOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Open stakeholder modal
  const handleCardClick = (stakeholder) => {
    setSelectedStakeholder(stakeholder);
  };

  // Switch from Stakeholder Modal to Consultation Modal
  const handleOpenConsultation = (businessAreaName) => {
    if (businessAreaName) {
      setConsultationPreselect(businessAreaName);
      setFormData(prev => ({ ...prev, businessArea: businessAreaName }));
    }
    setSelectedStakeholder(null);
    setIsConsultationOpen(true);
  };

  // Comprehensive Field-Level Validator
  const validateField = (name, value) => {
    let error = '';
    const trimmed = (value || '').trim();

    if (name === 'fullName') {
      if (!trimmed) {
        error = 'Full Name is required';
      } else if (trimmed.length < 2) {
        error = 'Full Name must be at least 2 characters';
      } else if (/\d/.test(trimmed)) {
        error = 'Full Name cannot contain numbers';
      } else if (!/^[a-zA-Z\s'.]+$/.test(trimmed)) {
        error = 'Full Name can only contain letters and spaces';
      }
    }

    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
      if (!trimmed) {
        error = 'Business Email is required';
      } else if (!emailRegex.test(trimmed)) {
        error = 'Please enter a valid corporate email (e.g. name@company.com)';
      }
    }

    if (name === 'companyName') {
      if (!trimmed) {
        error = 'Company Name is required';
      } else if (trimmed.length < 2) {
        error = 'Company Name must be at least 2 characters';
      } else if (/^\d+$/.test(trimmed)) {
        error = 'Company Name cannot be numbers only';
      }
    }

    if (name === 'phone') {
      const digitsOnly = trimmed.replace(/\D/g, '');
      if (!trimmed) {
        error = 'Phone / WhatsApp number is required';
      } else if (/[a-zA-Z]/.test(trimmed)) {
        error = 'Phone number cannot contain letters';
      } else if (digitsOnly.length < 10) {
        error = 'Phone number must have at least 10 digits';
      } else if (digitsOnly.length > 15) {
        error = 'Phone number cannot exceed 15 digits';
      } else if (/^(\d)\1{9,}$/.test(digitsOnly)) {
        error = 'Please enter a valid phone number (not repeated digits)';
      }
    }

    if (name === 'requirements') {
      if (!trimmed) {
        error = 'Please describe your business requirements';
      } else if (trimmed.length < 10) {
        error = 'Requirement description must be at least 10 characters';
      } else if (/^(.)\1{8,}$/.test(trimmed.replace(/\s/g, ''))) {
        error = 'Please enter a meaningful requirement description';
      }
    }

    return error;
  };

  // Validate All Fields
  const validateAll = () => {
    const newErrors = {};
    const fields = ['fullName', 'email', 'companyName', 'phone', 'requirements'];
    fields.forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form input changes with keystroke sanitization
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    // Keystroke-level sanitization:
    if (name === 'fullName') {
      // Disallow typing numbers in name
      sanitizedValue = value.replace(/[^a-zA-Z\s'.]/g, '');
    } else if (name === 'phone') {
      // Disallow typing letters in phone & limit length
      sanitizedValue = value.replace(/[^0-9+\- ]/g, '').slice(0, 16);
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));

    // Dynamically clear/update error as user corrects the field
    if (formErrors[name]) {
      const err = validateField(name, sanitizedValue);
      setFormErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  // On blur validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: err }));
  };

  // Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = validateAll();
    if (!isValid) {
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        html: `
          <div style="text-align: left; font-size: 14px; line-height: 1.6; color: #475569; margin-top: 8px;">
            <p style="margin-bottom: 6px; font-weight: 600;">Please correct the highlighted fields:</p>
            <ul style="color: #dc2626; padding-left: 20px; margin: 0; font-size: 13px;">
              ${validateField('fullName', formData.fullName) ? `<li><b>Full Name:</b> ${validateField('fullName', formData.fullName)}</li>` : ''}
              ${validateField('email', formData.email) ? `<li><b>Business Email:</b> ${validateField('email', formData.email)}</li>` : ''}
              ${validateField('companyName', formData.companyName) ? `<li><b>Company Name:</b> ${validateField('companyName', formData.companyName)}</li>` : ''}
              ${validateField('phone', formData.phone) ? `<li><b>Phone:</b> ${validateField('phone', formData.phone)}</li>` : ''}
              ${validateField('requirements', formData.requirements) ? `<li><b>Requirements:</b> ${validateField('requirements', formData.requirements)}</li>` : ''}
            </ul>
          </div>
        `,
        confirmButtonColor: '#f97316',
        confirmButtonText: 'Correct Details',
        customClass: {
          popup: 'swal2-avyukta-popup',
          title: 'swal2-avyukta-title'
        }
      });
      return;
    }

    setIsSubmitting(true);

    // Save lead record in localStorage audit log
    const consultationRecord = {
      id: 'BPA-' + Date.now().toString().slice(-6),
      timestamp: new Date().toISOString(),
      ...formData
    };

    try {
      const existing = JSON.parse(localStorage.getItem('avyukta_bpa_leads') || '[]');
      existing.unshift(consultationRecord);
      localStorage.setItem('avyukta_bpa_leads', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    // Build WhatsApp message for Avyukta official desk (+91 85600 00600)
    const waMessage = encodeURIComponent(
      `Hello Avyukta Team,\n\nI just filled the BPA Consultation Form to discuss the *${formData.businessArea}* Workflow Architecture:\n\n👤 *Name:* ${formData.fullName.trim()}\n🏢 *Company:* ${formData.companyName.trim()}\n📌 *Stakeholder Focus:* ${formData.businessArea}\n📞 *Phone:* ${formData.phone.trim()}\n✉️ *Email:* ${formData.email.trim()}\n🌐 *Country:* ${formData.country}\n📝 *Requirements:* ${formData.requirements.trim()}\n\nRef: #${consultationRecord.id}`
    );
    const waUrl = `https://wa.me/918560000600?text=${waMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsConsultationOpen(false);

      // Instantly open WhatsApp on Avyukta's official number (+91 85600 00600)
      window.open(waUrl, '_blank');

      // SweetAlert2 confirmation
      Swal.fire({
        icon: 'success',
        title: 'Redirecting to WhatsApp...',
        html: `
          <div style="font-size: 14.5px; line-height: 1.6; color: #475569; text-align: left; margin-top: 10px;">
            <p>Thank you, <b>${formData.fullName}</b>! Your <b>${formData.businessArea}</b> workflow consultation request has been sent to Avyukta's WhatsApp desk (<b>+91-856-0000-600</b>).</p>
            <p style="margin: 8px 0;">Reference: <b style="color: #ea580c;">#${consultationRecord.id}</b></p>
            <p style="font-size: 13px; color: #64748b;">If WhatsApp did not open automatically in a new tab, click the button below to continue:</p>
          </div>
        `,
        confirmButtonText: 'Open WhatsApp Chat',
        confirmButtonColor: '#25d366',
        showCancelButton: true,
        cancelButtonText: 'Done',
        cancelButtonColor: '#0e3745',
        customClass: {
          popup: 'swal2-avyukta-popup',
          title: 'swal2-avyukta-title'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(waUrl, '_blank');
        }
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        country: 'India (+91)',
        businessArea: 'Prospects',
        requirements: ''
      });
    }, 600);
  };

  return (
    <div className="business-ecosystem-block" id="business-ecosystem">
      <div className="ecosystem-inner-wrap">
        
        {/* Section Header */}
        <div className="ecosystem-section-header text-center">
          <div className="pricing-badge-pro">
            <span className="badge-dot-coral"></span>
            <span>✦ FREE BPA CONSULTING INCLUDED</span>
          </div>

          <h2 className="ecosystem-section-title">
            Complete End-to-End <span className="title-coral">Business Ecosystem Coverage</span>
          </h2>

          <p className="ecosystem-section-desc">
            We don&apos;t just provide communication solutions — we help businesses streamline their operational workflows. 
            Our telecom experts provide Business Process Automation consulting across all 9 business stakeholders.
          </p>
        </div>

        {/* 9 Interactive Stakeholder Cards Responsive Grid */}
        <div className="ecosystem-stakeholders-grid">
          {STAKEHOLDERS_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="stakeholder-interactive-card"
                onClick={() => handleCardClick(item)}
                style={{ '--stakeholder-accent': item.color }}
                role="button"
                tabIndex={0}
                aria-label={`View workflow for ${item.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(item);
                  }
                }}
              >
                <div className="stakeholder-card-top">
                  <div className="stakeholder-icon-pill" style={{ backgroundColor: `${item.color}15`, color: item.color, borderColor: `${item.color}35` }}>
                    <Icon size={20} />
                  </div>
                  <span className="stakeholder-click-hint" style={{ color: item.color }}>
                    <span>Workflow</span>
                    <ArrowRight size={13} className="arrow-shift" />
                  </span>
                </div>

                <h3 className="stakeholder-name">{item.name}</h3>
                <p className="stakeholder-desc">{item.shortDesc}</p>

                <div className="stakeholder-features-preview">
                  {item.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="preview-feat-item">
                      <span className="feat-bullet" style={{ background: item.color }}></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                  {item.features.length > 3 && (
                    <span className="more-feat-pill">+{item.features.length - 3} more capabilities</span>
                  )}
                </div>

                <div className="stakeholder-card-footer">
                  <span className="btn-view-workflow-text" style={{ color: item.color }}>
                    Click to view full workflow &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Level Visual BPA Workflow Pipeline (Section 5 of prompt) */}
        <div className="global-bpa-pipeline-block">
          <div className="pipeline-block-head text-center">
            <h4 className="pipeline-title">
              How Avyukta BPA Transforms <span className="title-coral">End-to-End Business Operations</span>
            </h4>
            <p className="pipeline-desc">
              Every customer touchpoint connects seamlessly through our automated telephony, CRM, and task orchestration layers.
            </p>
          </div>

          <div className="pipeline-steps-flow">
            {GLOBAL_WORKFLOW_PIPELINE.map((pipe, pIdx) => {
              const StepIcon = pipe.icon;
              return (
                <React.Fragment key={pipe.step}>
                  <div className="pipeline-node-card">
                    <div className="pipeline-node-number">STEP {pipe.step}</div>
                    <div className="pipeline-node-icon">
                      <StepIcon size={22} className="text-coral" />
                    </div>
                    <h5 className="pipeline-node-label">{pipe.label}</h5>
                    <p className="pipeline-node-desc">{pipe.desc}</p>
                  </div>
                  {pIdx < GLOBAL_WORKFLOW_PIPELINE.length - 1 && (
                    <div className="pipeline-flow-connector" aria-hidden="true">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Free BPA Consulting CTA Banner (Section 6 of prompt) */}
        <div className="bpa-cta-consulting-banner">
          <div className="bpa-cta-inner-grid">
            <div className="bpa-cta-text-side">
              <div className="bpa-cta-badge">
                <Sparkles size={14} className="text-amber-400" />
                <span>COMPLIMENTARY ARCHITECTURE SESSION</span>
              </div>
              <h3 className="bpa-cta-title">
                Ready to Architect Your Complete Business Ecosystem?
              </h3>
              <p className="bpa-cta-desc">
                Get expert guidance to streamline your business workflows. Personalized workflow recommendations 
                from our telecom experts with 19+ years of contact center engineering experience.
              </p>
              <div className="bpa-trust-tags">
                <div className="trust-tag">
                  <ShieldCheck size={15} className="text-good" />
                  <span>Zero Sales Pressure</span>
                </div>
                <div className="trust-tag">
                  <Check size={15} className="text-good" />
                  <span>Custom Workflow Blueprint in 24h</span>
                </div>
                <div className="trust-tag">
                  <Clock size={15} className="text-good" />
                  <span>Direct Senior Telecom Architect Call</span>
                </div>
              </div>
            </div>

            <div className="bpa-cta-button-side">
              <button 
                type="button" 
                onClick={() => handleOpenConsultation('Prospects')}
                className="btn-claim-bpa"
              >
                <span>Claim Free BPA Architecture Session</span>
                <ArrowRight size={18} />
              </button>
              <span className="bpa-button-sub">
                ⚡ 100% Free consultation &bull; No credit card required
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ======================================================================
          MODAL 1: Interactive Stakeholder Detail & Step-by-Step Workflow Modal
          ====================================================================== */}
      {selectedStakeholder && (
        <div 
          className="bpa-modal-backdrop" 
          onClick={() => setSelectedStakeholder(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="stakeholder-modal-title"
        >
          <div 
            className="bpa-modal-window stakeholder-modal-window" 
            onClick={(e) => e.stopPropagation()}
            style={{ '--modal-accent': selectedStakeholder.color }}
          >
            {/* Modal Header */}
            <div className="bpa-modal-header">
              <div className="modal-title-row">
                <div 
                  className="modal-icon-badge" 
                  style={{ backgroundColor: `${selectedStakeholder.color}15`, color: selectedStakeholder.color, borderColor: `${selectedStakeholder.color}35` }}
                >
                  <selectedStakeholder.icon size={26} />
                </div>
                <div>
                  <div className="modal-stakeholder-tag" style={{ color: selectedStakeholder.color }}>
                    STAKEHOLDER ARCHITECTURE
                  </div>
                  <h3 id="stakeholder-modal-title" className="modal-stakeholder-title">
                    {selectedStakeholder.name}
                  </h3>
                </div>
              </div>

              <button 
                type="button" 
                onClick={() => setSelectedStakeholder(null)} 
                className="btn-modal-close"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="bpa-modal-body">
              <p className="modal-stakeholder-desc">
                {selectedStakeholder.fullDesc}
              </p>

              {/* 5 Core Features Grid */}
              <div className="modal-features-section">
                <h4 className="modal-section-heading">Core Operational Features</h4>
                <div className="modal-features-grid">
                  {selectedStakeholder.features.map((feat, idx) => (
                    <div key={idx} className="modal-feature-pill">
                      <CheckCircle2 size={16} style={{ color: selectedStakeholder.color, flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Visual Workflow (Section 3 & 4 of prompt) */}
              <div className="modal-workflow-section">
                <h4 className="modal-section-heading">
                  Standard {selectedStakeholder.name} Automation Workflow
                </h4>
                
                <div className="modal-workflow-track">
                  {selectedStakeholder.workflow.map((wStep, wIdx) => (
                    <div key={wStep.step} className="modal-workflow-step-card">
                      <div className="workflow-step-badge" style={{ backgroundColor: `${selectedStakeholder.color}18`, color: selectedStakeholder.color }}>
                        STEP {wStep.step}
                      </div>
                      <h5 className="workflow-step-title">{wStep.title}</h5>
                      <p className="workflow-step-desc">{wStep.desc}</p>
                      
                      {wIdx < selectedStakeholder.workflow.length - 1 && (
                        <div className="workflow-step-arrow" aria-hidden="true" style={{ color: selectedStakeholder.color }}>
                          &darr;
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-disclaimer-note">
                <AlertCircle size={14} className="text-coral" />
                <span>Proposed workflow architecture customized to your existing software stack and telephony lines.</span>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="bpa-modal-footer">
              <button 
                type="button" 
                onClick={() => setSelectedStakeholder(null)} 
                className="btn btn-s"
              >
                Close
              </button>

              {/* Direct Quick WhatsApp Chat Button */}
              <a
                href={`https://wa.me/918560000600?text=${encodeURIComponent(`Hello Avyukta Team,\n\nI want to discuss the *${selectedStakeholder.name}* Automation Workflow Architecture for my business.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-s"
                style={{ backgroundColor: 'rgba(37, 211, 102, 0.12)', color: '#16a34a', borderColor: 'rgba(37, 211, 102, 0.35)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                title="Chat directly with Avyukta telecom architect on WhatsApp (+91-856-0000-600)"
              >
                <MessageSquare size={16} />
                <span>Quick WhatsApp Chat</span>
              </a>

              <button 
                type="button" 
                onClick={() => handleOpenConsultation(selectedStakeholder.name)}
                className="btn btn-p"
                style={{ backgroundColor: selectedStakeholder.color }}
              >
                <span>Discuss Your {selectedStakeholder.name} Workflow</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================
          MODAL 2: Free BPA Architecture Consultation Lead Generation Form
          ====================================================================== */}
      {isConsultationOpen && (
        <div 
          className="bpa-modal-backdrop" 
          onClick={() => setIsConsultationOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-modal-title"
        >
          <div 
            className="bpa-modal-window consultation-modal-window" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bpa-modal-header">
              <div>
                <div className="pricing-badge-pro" style={{ marginBottom: '6px' }}>
                  <span className="badge-dot-coral"></span>
                  <span>FREE BPA CONSULTING</span>
                </div>
                <h3 id="consultation-modal-title" className="modal-stakeholder-title">
                  Claim Free BPA Architecture Session
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--mute)', margin: '4px 0 0' }}>
                  Personalized workflow recommendations from our telecom and automation experts.
                </p>
              </div>

              <button 
                type="button" 
                onClick={() => setIsConsultationOpen(false)} 
                className="btn-modal-close"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form Body */}
            <form onSubmit={handleFormSubmit} noValidate className="bpa-consultation-form">
              <div className="form-grid-two-col">
                
                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text"
                    name="fullName"
                    maxLength={60}
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    onBlur={handleBlur}
                    className={`form-input ${formErrors.fullName ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.fullName && (
                    <span className="form-error-msg"><AlertCircle size={13} />{formErrors.fullName}</span>
                  )}
                </div>

                {/* Business Email */}
                <div className="form-group">
                  <label className="form-label">Business Email *</label>
                  <input 
                    type="email"
                    name="email"
                    maxLength={80}
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    onBlur={handleBlur}
                    className={`form-input ${formErrors.email ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.email && (
                    <span className="form-error-msg"><AlertCircle size={13} />{formErrors.email}</span>
                  )}
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <label className="form-label">Company Name *</label>
                  <input 
                    type="text"
                    name="companyName"
                    maxLength={100}
                    placeholder="e.g. Apex Global Solutions"
                    value={formData.companyName}
                    onChange={handleFormChange}
                    onBlur={handleBlur}
                    className={`form-input ${formErrors.companyName ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.companyName && (
                    <span className="form-error-msg"><AlertCircle size={13} />{formErrors.companyName}</span>
                  )}
                </div>

                {/* Country */}
                <div className="form-group">
                  <label className="form-label">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleFormChange}
                    className="form-input form-select"
                    disabled={isSubmitting}
                  >
                    <option value="India (+91)">India (+91)</option>
                    <option value="USA (+1)">USA (+1)</option>
                    <option value="UK (+44)">United Kingdom (+44)</option>
                    <option value="UAE (+971)">United Arab Emirates (+971)</option>
                    <option value="Canada (+1)">Canada (+1)</option>
                    <option value="Philippines (+63)">Philippines (+63)</option>
                    <option value="Australia (+61)">Australia (+61)</option>
                    <option value="Singapore (+65)">Singapore (+65)</option>
                    <option value="Other">Other International</option>
                  </select>
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel"
                    name="phone"
                    maxLength={16}
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleFormChange}
                    onBlur={handleBlur}
                    className={`form-input ${formErrors.phone ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.phone && (
                    <span className="form-error-msg"><AlertCircle size={13} />{formErrors.phone}</span>
                  )}
                </div>

                {/* Business Area (All 9 Stakeholders Dropdown) */}
                <div className="form-group">
                  <label className="form-label">Primary Business Area / Stakeholder *</label>
                  <select
                    name="businessArea"
                    value={formData.businessArea}
                    onChange={handleFormChange}
                    className="form-input form-select"
                    disabled={isSubmitting}
                  >
                    {STAKEHOLDERS_DATA.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} — {s.shortDesc}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Describe Requirements */}
              <div className="form-group" style={{ marginTop: '6px' }}>
                <label className="form-label">Describe Your Business Requirements &amp; Current Workflow *</label>
                <textarea
                  name="requirements"
                  rows="3"
                  maxLength={1000}
                  placeholder="Tell us about your current call volume, CRM systems (Zoho/Salesforce/Bitrix24), and what workflow you wish to automate..."
                  value={formData.requirements}
                  onChange={handleFormChange}
                  onBlur={handleBlur}
                  className={`form-input ${formErrors.requirements ? 'input-error' : ''}`}
                  disabled={isSubmitting}
                ></textarea>
                {formErrors.requirements && (
                  <span className="form-error-msg"><AlertCircle size={13} />{formErrors.requirements}</span>
                )}
              </div>

              {/* Form Security & Privacy Note */}
              <div className="form-security-banner">
                <ShieldCheck size={16} className="text-good" />
                <span>100% Confidential. Your data is never shared. Direct callback from a certified telecom consultant.</span>
              </div>

              {/* Submit Buttons */}
              <div className="bpa-modal-footer" style={{ padding: '16px 0 0', borderTop: '1px solid var(--line)' }}>
                <button 
                  type="button" 
                  onClick={() => setIsConsultationOpen(false)} 
                  className="btn btn-s"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>

                <button 
                  type="submit" 
                  className="btn btn-p"
                  disabled={isSubmitting}
                  style={{ minWidth: '280px', justifyContent: 'center', backgroundColor: '#25d366', color: '#ffffff', border: 'none', boxShadow: '0 8px 22px rgba(37, 211, 102, 0.35)' }}
                >
                  {isSubmitting ? (
                    <span>Opening WhatsApp &amp; Submitting...</span>
                  ) : (
                    <>
                      <MessageSquare size={16} />
                      <span>Send to WhatsApp &amp; Discuss Workflow</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
