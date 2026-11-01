import React, { useState } from 'react';
import Swal from 'sweetalert2';
import PanIndiaConnectivity from '../components/PanIndiaConnectivity';
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
  AlertCircle
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

    // Keystroke-level sanitization:
    if (name === 'name') {
      // Disallow typing numbers in name
      sanitizedValue = value.replace(/[^a-zA-Z\s'.]/g, '');
    } else if (name === 'phone') {
      // Disallow typing letters in phone
      sanitizedValue = value.replace(/[^0-9+\- ]/g, '');
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));

    // Dynamically clear/update error as user corrects the field
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

    // Check all fields
    const isValid = validateAll();
    if (!isValid) {
      const errorList = Object.values(errors).filter(Boolean);
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        html: `
          <div style="text-align: left; font-size: 14px; line-height: 1.6; color: #475569; margin-top: 8px;">
            <p style="margin-bottom: 6px;">Kripya form ki details ko check karein:</p>
            <ul style="color: #dc2626; padding-left: 20px; margin: 0; font-size: 13px;">
              ${validateField('name', formData.name) ? `<li><b>Name:</b> ${validateField('name', formData.name)}</li>` : ''}
              ${validateField('email', formData.email) ? `<li><b>Email:</b> ${validateField('email', formData.email)}</li>` : ''}
              ${validateField('phone', formData.phone) ? `<li><b>Phone:</b> ${validateField('phone', formData.phone)}</li>` : ''}
              ${validateField('company', formData.company) ? `<li><b>Company:</b> ${validateField('company', formData.company)}</li>` : ''}
            </ul>
          </div>
        `,
        confirmButtonColor: '#f97316',
        confirmButtonText: 'Correct Details'
      });
      return;
    }

    // 1. Format the detailed message for Avyukta WhatsApp (+91-856-0000-600)
    const messageLines = [
      '🚀 *NEW WEBSITE INQUIRY | Avyukta IntelliCall*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `👤 *Name:* ${formData.name.trim()}`,
      `🏢 *Company:* ${formData.company.trim()}`,
      `📞 *Phone / WhatsApp:* ${formData.phone.trim()}`,
      `✉️ *Email:* ${formData.email.trim()}`,
      `📝 *Requirement:* ${formData.message.trim() || 'Interested in AI Telephony & Cloud Dialer solutions.'}`,
      '━━━━━━━━━━━━━━━━━━━━━',
      `⏰ *Submitted:* ${new Date().toLocaleString('en-IN')}`,
      '🌐 *Source:* Direct Contact Form (ai.avyukta.in)'
    ];

    const waText = encodeURIComponent(messageLines.join('\n'));
    const waUrl = `https://wa.me/918560000600?text=${waText}`;

    // 2. Persist in browser LocalStorage as permanent audit log
    const newInquiry = {
      id: Date.now(),
      submittedAt: new Date().toLocaleString(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      message: formData.message.trim() || 'General inquiry'
    };

    try {
      const existingInquiries = JSON.parse(localStorage.getItem('avyukta_inquiries') || '[]');
      existingInquiries.unshift(newInquiry);
      localStorage.setItem('avyukta_inquiries', JSON.stringify(existingInquiries));
      console.log('✅ New Inquiry Saved to LocalStorage:', newInquiry);
    } catch (err) {
      console.error('Error saving to localStorage:', err);
    }

    // 3. Automatically trigger WhatsApp directly in a new tab/app
    window.open(waUrl, '_blank');

    // 4. Fire SweetAlert2 Popup with direct WhatsApp confirmation
    Swal.fire({
      icon: 'success',
      title: 'Inquiry Sent to WhatsApp!',
      html: `
        <div style="text-align: left; font-size: 14px; line-height: 1.6; color: #334155; margin-top: 10px;">
          <p style="margin-bottom: 8px;">
            Thank you, <b style="color: #0e3745;">${formData.name}</b>! Aapki inquiry direct <b>Avyukta ke official WhatsApp (+91-856-0000-600)</b> par forward ho rahi hai.
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px 16px; margin: 12px 0;">
            <div style="margin-bottom: 4px;"><b>👤 Name:</b> ${formData.name}</div>
            <div style="margin-bottom: 4px;"><b>🏢 Company:</b> ${formData.company}</div>
            <div style="margin-bottom: 4px;"><b>📞 Phone:</b> ${formData.phone}</div>
            <div><b>✉️ Email:</b> ${formData.email}</div>
          </div>
          <p style="margin: 0; font-size: 13px; color: #166534; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 8px 12px; border-radius: 8px;">
            💬 WhatsApp par pre-filled inquiry open ho chuki hai. Agar auto-open na hua ho toh niche green button dabayein.
          </p>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Open WhatsApp Now',
      confirmButtonColor: '#25d366',
      cancelButtonText: 'Done / Close',
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

    setFormSent(true);
  };

  return (
    <div className="contact-page-view">
      {/* Page Hero Banner */}
      <section className="page-hero-banner">
        <div className="wrap">
          <span className="page-badge-pill">GET IN TOUCH</span>
          <h1 className="page-hero-title">
            Connect With Our <span className="title-coral">Telecom &amp; AI Voice Architects</span>
          </h1>
          <p className="page-hero-desc">
            Whether you need Pan-India Smart DID caller IDs, high-throughput cloud dialers, 
            or an end-to-end voice bot implementation, our engineering desk is ready 24*6.
          </p>
        </div>
      </section>

      {/* Contact Cards & Inquiry Form Grid */}
      <section className="contact-main-section">
        <div className="wrap">
          <div className="contact-split-grid">
            {/* Left Column: Direct Info & Map */}
            <div className="contact-info-col">
              <h2 className="contact-col-title">Corporate Headquarters</h2>
              <span className="orange-accent-bar"></span>

              <div className="contact-cards-stack">
                {/* Address Box */}
                <div className="contact-luxury-card">
                  <div className="contact-card-icon-wrap">
                    <MapPin size={22} className="text-orange" />
                  </div>
                  <div>
                    <h4>Jaipur Office (HQ)</h4>
                    <p>A-26, Laxminarayan Vihar, Near Bharat Mata Circle, Jaipur, 302020 Rajasthan, India.</p>
                  </div>
                </div>

                {/* Phones */}
                <div className="contact-luxury-card">
                  <div className="contact-card-icon-wrap">
                    <Phone size={22} className="text-good" />
                  </div>
                  <div>
                    <h4>Direct Telephony Desk</h4>
                    <p>
                      India: <a href="tel:+918560000600"><b>+91-856-0000-600</b></a><br />
                      USA: <a href="tel:+14084262726"><b>+1 408 426 2726</b></a>
                    </p>
                  </div>
                </div>

                {/* Email & Hours */}
                <div className="contact-luxury-card">
                  <div className="contact-card-icon-wrap">
                    <Mail size={22} className="text-sky-500" />
                  </div>
                  <div>
                    <h4>Email &amp; Support Hours</h4>
                    <p>
                      Email: <a href="mailto:salesat@dialerpune.in"><b>salesat@dialerpune.in</b></a><br />
                      Hours: <b>24*6 Operating Desk</b>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed Container */}
              <div className="contact-page-map-wrap">
                <div className="map-card-head">
                  <span>Avyukta IntelliCall Location</span>
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
                  Fill in your requirements and an Avyukta solution architect will contact you within 30 minutes.
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
                        placeholder="I am interested in 011 Delhi Smart DID and sub-500ms voice bot integration..."
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
                    <h4>Inquiry Sent to WhatsApp!</h4>
                    <p>Thank you, <b>{formData.name}</b>. Your details have been prepared for direct dispatch to Avyukta&apos;s WhatsApp desk.</p>
                    <div style={{ margin: '12px 0 16px', fontSize: '13px', color: 'var(--mute)' }}>
                      <span>✅ Stored securely in records &bull; Ref #{Date.now().toString().slice(-6)}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '280px', margin: '0 auto' }}>
                      <a 
                        href={`https://wa.me/918560000600?text=${encodeURIComponent(`Hello Avyukta Team,\n\nNew Website Inquiry:\n👤 Name: ${formData.name}\n🏢 Company: ${formData.company}\n📞 Phone: ${formData.phone}\n✉️ Email: ${formData.email}\n📝 Details: ${formData.message || 'I would like to discuss telephony and AI voice solutions.'}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta-orange"
                        style={{ backgroundColor: '#25d366', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 18px', fontSize: '14.5px', fontWeight: '700', borderRadius: '12px', color: '#ffffff' }}
                      >
                        <MessageCircle size={18} />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <button type="button" onClick={() => setFormSent(false)} className="btn-return-form">
                        Submit Another Message
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India 8 Smart DIDs & Global Termination (Point 8 on Sir's Roadmap) */}
      <PanIndiaConnectivity onOpenTrial={onOpenTrial} />
    </div>
  );
}

