import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Monitor, 
  Phone, 
  Mail, 
  Database,
  ArrowRight,
  Globe2,
  Clock
} from 'lucide-react';

export default function TrialModal({ isOpen, onClose }) {
  const [region, setRegion] = useState('india'); // 'india' or 'international'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    stdCode: '011 - Delhi NCR',
    country: 'United States',
    crm: 'Meta / WhatsApp & Custom Webhook'
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div className="modal-dialog-box" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close Trial Window"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Modal Header */}
            <div className="modal-header-block">
              <div className="modal-badge-pill">
                <Sparkles size={13} className="text-brand" />
                <span>INSTANT SANDBOX ACCESS</span>
              </div>
              <h3 className="modal-title">
                Start Your <span className="title-coral">Free AI Voice Trial</span>
              </h3>
              <p className="modal-subtitle">
                No credit card required. Experience sub-500ms conversational voice agents with live telephony.
              </p>
            </div>

            {/* Region Selector Tabs (Sir's Point 9) */}
            <div className="modal-region-tabs">
              <button
                type="button"
                className={`region-tab-btn ${region === 'india' ? 'active' : ''}`}
                onClick={() => setRegion('india')}
              >
                <span>🇮🇳 Domestic (India)</span>
              </button>
              <button
                type="button"
                className={`region-tab-btn ${region === 'international' ? 'active' : ''}`}
                onClick={() => setRegion('international')}
              >
                <span>🌍 International / Global</span>
              </button>
            </div>

            {/* Minimum Requirements Checklist Box (Sir's Point 9) */}
            <div className="modal-reqs-card">
              <div className="reqs-header">
                <ShieldCheck size={16} className="text-good" />
                <span className="reqs-heading">
                  Minimum Requirements Before Trial Activation:
                </span>
              </div>

              {region === 'india' ? (
                <div className="reqs-items-row">
                  <div className="req-item-pill">
                    <Monitor size={14} className="text-brand" />
                    <span><b>PC / Laptop</b> with Chrome / Edge</span>
                  </div>
                  <div className="req-item-pill">
                    <Phone size={14} className="text-good" />
                    <span><b>Phone Number (PN)</b> for verification</span>
                  </div>
                  <div className="req-item-pill">
                    <Mail size={14} className="text-cyan" />
                    <span><b>Email Address</b> for portal access</span>
                  </div>
                </div>
              ) : (
                <div className="reqs-items-row">
                  <div className="req-item-pill">
                    <Mail size={14} className="text-brand" />
                    <span><b>Business Email</b> for SIP authentication</span>
                  </div>
                  <div className="req-item-pill">
                    <Database size={14} className="text-good" />
                    <span><b>CRM Entry / Webhook</b> for live lead sync</span>
                  </div>
                </div>
              )}
            </div>

            {/* Trial Registration Form */}
            <form onSubmit={handleSubmit} className="modal-form-grid">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Work Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Company / BPO Name *</label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Avyukta Solutions Ltd."
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {region === 'india' ? (
                <div className="form-group full-width">
                  <label className="form-label">Preferred Local STD Caller ID (CLI)</label>
                  <select
                    name="stdCode"
                    value={formData.stdCode}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="011 - Delhi NCR">011 - Delhi NCR</option>
                    <option value="022 - Mumbai">022 - Mumbai</option>
                    <option value="080 - Bengaluru">080 - Bengaluru</option>
                    <option value="079 - Ahmedabad">079 - Ahmedabad</option>
                    <option value="033 - Kolkata">033 - Kolkata</option>
                    <option value="0744 - Kota">0744 - Kota</option>
                    <option value="0731 - Indore">0731 - Indore</option>
                    <option value="0755 - Bhopal">0755 - Bhopal</option>
                  </select>
                </div>
              ) : (
                <div className="form-group full-width">
                  <label className="form-label">Destination Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="United States">🇺🇸 United States (US)</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom (UK)</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="Philippines">🇵🇭 Philippines</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="UAE / Dubai">🇦🇪 United Arab Emirates</option>
                    <option value="Other">🌐 Other (150+ Countries)</option>
                  </select>
                </div>
              )}

              <button type="submit" className="btn-modal-submit">
                <span>Activate Free Sandbox &amp; Portal Login</span>
                <ArrowRight size={17} />
              </button>

              <div className="form-security-note">
                <Clock size={13} className="text-good" />
                <span>Instant provisioning: Credentials sent to your email in &lt; 15 minutes.</span>
              </div>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="modal-success-box">
            <div className="success-icon-wrap">
              <CheckCircle2 size={54} className="text-good" />
            </div>

            <h3 className="success-title">Trial Activation Initiated!</h3>

            <p className="success-message">
              Thank you, <b>{formData.name}</b>. We have queued your portal setup for <b>{formData.company}</b>.
            </p>

            <div className="success-credentials-card">
              <div className="cred-row">
                <span className="cred-lbl">Assigned Region:</span>
                <span className="cred-val">{region === 'india' ? '🇮🇳 Pan-India (CLI: ' + formData.stdCode + ')' : '🌍 Global (' + formData.country + ')'}</span>
              </div>
              <div className="cred-row">
                <span className="cred-lbl">Portal Access Email:</span>
                <span className="cred-val">{formData.email}</span>
              </div>
              <div className="cred-row">
                <span className="cred-lbl">Test Wallet Balance:</span>
                <span className="cred-val highlight">100 Free Test Minutes Included</span>
              </div>
            </div>

            <button type="button" onClick={handleReset} className="btn-modal-done">
              <span>Return to Overview</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

