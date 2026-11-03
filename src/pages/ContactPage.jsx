import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink, 
  MessageCircle, 
  AlertCircle,
  Building2,
  Globe2,
  Headphones,
  Award
} from 'lucide-react';

export default function ContactPage({ onOpenTrial }) {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    const trimmed = (value || '').trim();

    if (name === 'name') {
      if (!trimmed) {
        error = 'Full name is required';
      } else if (trimmed.length < 2) {
        error = 'Name must be at least 2 characters';
      } else if (/\d/.test(trimmed)) {
        error = 'Name cannot contain numbers';
      } else if (!/^[a-zA-Z\s'.]+$/.test(trimmed)) {
        error = 'Name can only contain letters and spaces';
      }
    }

    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
      if (!trimmed) {
        error = 'Corporate email is required';
      } else if (!emailRegex.test(trimmed)) {
        error = 'Please enter a valid corporate email (e.g. name@company.com)';
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
      }
    }

    if (name === 'company') {
      if (!trimmed) {
        error = 'Company or BPO name is required';
      } else if (trimmed.length < 2) {
        error = 'Company name must be at least 2 characters';
      }
    }

    return error;
  };

  const validateAll = () => {
    const newErrors = {};
    const fields = ['name', 'email', 'phone', 'company'];
    fields.forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === 'name') {
      sanitizedValue = value.replace(/[^a-zA-Z\s'.]/g, '');
    } else if (name === 'phone') {
      sanitizedValue = value.replace(/[^0-9+\- ]/g, '');
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));

    if (errors[name]) {
      const err = validateField(name, sanitizedValue);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) {
      Swal.fire({
        icon: 'error',
        title: 'Please check form errors',
        text: 'Kindly fill in all required fields accurately.',
        confirmButtonColor: '#ea580c'
      });
      return;
    }

    const waMsg = `Hello Avyukta Team,\n\nNew Inquiry:\n👤 Name: ${formData.name}\n🏢 Company: ${formData.company}\n📞 Phone: ${formData.phone}\n✉️ Email: ${formData.email}\n📝 Details: ${formData.message || 'I would like to discuss AI voice bots and SIP telephony.'}`;
    const waUrl = `https://wa.me/917240001056?text=${encodeURIComponent(waMsg)}`;

    try {
      window.open(waUrl, '_blank');
    } catch {
      // ignore
    }

    Swal.fire({
      icon: 'success',
      title: 'Inquiry Dispatched!',
      html: `
        <div style="text-align: left; font-size: 14px; line-height: 1.6; color: #1e293b;">
          <p style="margin-bottom: 8px;">Dear <b>${formData.name}</b>,</p>
          <p style="margin-bottom: 12px;">Your details have been registered. Our senior solution architect will connect with you within 30 minutes.</p>
          <div style="background: #f8fafc; border-left: 4px solid #ea580c; padding: 10px 14px; border-radius: 6px; margin-bottom: 12px;">
            <b>Direct Line:</b> +91 72400 01056 / +91 85600 00600<br/>
            <b>Email:</b> sales@avyukta.in<br/>
            <b>Desk:</b> 24*6 Operating NOC
          </div>
        </div>
      `,
      confirmButtonText: 'Great, Thanks!',
      confirmButtonColor: '#ea580c'
    });

    setFormSent(true);
  };

  return (
    <div className="contact-page-view">
      {/* 1. Page Hero Banner */}
      <section className="page-hero-banner">
        <div className="wrap plan-wide-wrap">
          <div className="pricing-badge-pro" style={{ margin: '0 0 12px 0' }}>
            <span className="badge-dot-coral"></span>
            <span>GET IN TOUCH WITH AVYUKTA</span>
          </div>
          <h1 className="page-hero-title">
            Connect With Our <span className="title-coral">Telecom &amp; AI Voice Architects</span>
          </h1>
          <p className="page-hero-desc">
            Whether you need turnkey AI Voice Agents, Pan-India Smart DID caller IDs, high-throughput cloud dialers, 
            or bespoke enterprise integrations — our senior engineering desk is at your service 24*6.
          </p>
        </div>
      </section>

      {/* 2. Contact Cards & Inquiry Form Split Grid */}
      <section className="contact-main-section" style={{ padding: '20px 0 60px' }}>
        <div className="wrap plan-wide-wrap">
          <div className="contact-split-grid">
            
            {/* Left Column: Direct Info, Official Proposal Contacts & Map */}
            <div className="contact-info-col">
              <h2 className="contact-col-title">Corporate Headquarters &amp; Desk</h2>
              <span className="orange-accent-bar"></span>

              <div className="contact-cards-stack">
                {/* Director / Proposal Desk */}
                <div className="contact-luxury-card" style={{ borderLeft: '4px solid #ea580c' }}>
                  <div className="contact-card-icon-wrap" style={{ backgroundColor: 'rgba(234, 88, 12, 0.12)', color: '#ea580c' }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h4>Official Proposal &amp; Enterprise Desk</h4>
                    <p style={{ margin: '3px 0 2px' }}>
                      <b>Anurag Sharma</b> &bull; Managing Director
                    </p>
                    <p style={{ margin: '0' }}>
                      Direct: <a href="tel:+917240001056" style={{ color: '#ea580c', fontWeight: '700' }}>+91 72400 01056</a><br />
                      Email: <a href="mailto:sales@avyukta.in" style={{ color: 'var(--brand)', fontWeight: '600' }}>sales@avyukta.in</a><br />
                      Portal: <a href="https://www.avyukta.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)' }}>www.avyukta.in</a>
                    </p>
                  </div>
                </div>

                {/* Headquarters Address */}
                <div className="contact-luxury-card">
                  <div className="contact-card-icon-wrap" style={{ backgroundColor: 'rgba(14, 165, 233, 0.12)', color: '#0ea5e9' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4>Jaipur Office (HQ)</h4>
                    <p style={{ margin: '2px 0 0' }}>
                      A-26, Laxminarayan Vihar, Near Bharat Mata Circle, Jaipur, 302020 Rajasthan, India.
                    </p>
                  </div>
                </div>

                {/* Technical NOC & Dialers Desk */}
                <div className="contact-luxury-card">
                  <div className="contact-card-icon-wrap" style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4>Technical NOC &amp; Telephony Desk</h4>
                    <p style={{ margin: '2px 0 0' }}>
                      India: <a href="tel:+918560000600"><b>+91-856-0000-600</b></a><br />
                      USA: <a href="tel:+14084262726"><b>+1 408 426 2726</b></a><br />
                      Technical Desk: <a href="mailto:salesat@dialerpune.in"><b>salesat@dialerpune.in</b></a>
                    </p>
                  </div>
                </div>

                {/* Hours & SLA */}
                <div className="contact-luxury-card">
                  <div className="contact-card-icon-wrap" style={{ backgroundColor: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6' }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4>Operating Desk Hours</h4>
                    <p style={{ margin: '2px 0 0' }}>
                      <b>24*6 Operating Engineering Desk</b><br />
                      Sunday on-call monitoring for mission-critical carrier trunks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="contact-page-map-wrap" style={{ marginTop: '24px' }}>
                <div className="map-card-head">
                  <span>Avyukta Headquarters Location</span>
                  <a 
                    href="https://maps.google.com/?q=Avyukta+Intellicall+Consulting+Private+Limited+Jaipur" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="open-in-maps-btn"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <iframe
                  title="Avyukta IntelliCall Headquarters Jaipur"
                  src="https://maps.google.com/maps?q=Avyukta+Intellicall+Consulting+Private+Limited,+A-26,+Laxminarayan+Vihar,+Jaipur,+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '14px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Direct Inquiry Form */}
            <div className="contact-form-col">
              <div className="inquiry-form-card">
                <h3 className="inquiry-form-title">Send a Direct Inquiry</h3>
                <p className="inquiry-form-sub">
                  Fill in your requirements and an Avyukta senior solution architect will contact you within 30 minutes.
                </p>

                {!formSent ? (
                  <form onSubmit={handleSubmit} className="inquiry-form" noValidate>
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        maxLength={50}
                        placeholder="Rajesh Kumar"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                      />
                      {errors.name && (
                        <span className="form-error-msg">
                          <AlertCircle size={13} />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Corporate Email *</label>
                      <input
                        type="email"
                        name="email"
                        maxLength={80}
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                      />
                      {errors.email && (
                        <span className="form-error-msg">
                          <AlertCircle size={13} />
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        maxLength={16}
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                      />
                      {errors.phone && (
                        <span className="form-error-msg">
                          <AlertCircle size={13} />
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Company / BPO Name *</label>
                      <input
                        type="text"
                        name="company"
                        maxLength={100}
                        placeholder="Avyukta Solutions Ltd."
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`form-input ${errors.company ? 'input-error' : ''}`}
                      />
                      {errors.company && (
                        <span className="form-error-msg">
                          <AlertCircle size={13} />
                          {errors.company}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message / Requirement Details</label>
                      <textarea
                        name="message"
                        rows="3"
                        maxLength={1000}
                        placeholder="I am interested in Case B Turnkey Gold AI Voice plan with 10 channels SIP..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-cta-orange btn-full-width">
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </button>

                    <div className="form-security-note">
                      <ShieldCheck size={14} className="text-good" />
                      <span>100% Confidential. Zero spam. Direct engineer callback.</span>
                    </div>
                  </form>
                ) : (
                  <div className="inquiry-success-box">
                    <CheckCircle2 size={54} className="text-good" />
                    <h4>Inquiry Sent Successfully!</h4>
                    <p>Thank you, <b>{formData.name}</b>. Your details have been delivered to our engineering and sales desks.</p>
                    <div style={{ margin: '12px 0 16px', fontSize: '13px', color: 'var(--mute)' }}>
                      <span>✅ Direct Director Desk: +91 72400 01056</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '280px', margin: '0 auto' }}>
                      <a 
                        href={`https://wa.me/917240001056?text=${encodeURIComponent(`Hello Anurag ji,\n\nNew Website Inquiry:\n👤 Name: ${formData.name}\n🏢 Company: ${formData.company}\n📞 Phone: ${formData.phone}\n✉️ Email: ${formData.email}\n📝 Details: ${formData.message || 'I would like to discuss telephony and AI voice solutions.'}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta-orange"
                        style={{ backgroundColor: '#25d366', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 18px', fontSize: '14.5px', fontWeight: '700', borderRadius: '12px', color: '#ffffff' }}
                      >
                        <MessageCircle size={18} />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <button type="button" onClick={() => setFormSent(false)} className="btn-return-form">
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
