import React, { useState } from 'react';
import { 
  Home, 
  Car, 
  Heart, 
  Shield, 
  GraduationCap, 
  ShoppingCart, 
  Dumbbell, 
  Utensils, 
  Plane, 
  Scale, 
  Laptop, 
  Landmark, 
  Package, 
  Gem, 
  Truck, 
  Rocket, 
  Scissors, 
  Wheat, 
  Sun, 
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock
} from 'lucide-react';

const INDUSTRIES = [
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Home,
    accent: '#ea580c',
    useCase: 'Site visit scheduling, NRI investor qualification, builder CRM stages',
    metrics: '+45% Site Visits',
    dialogue: '"Hello! Calling from Green Valley Properties. Would you be available this Saturday at 11 AM for a site visit of the 3 BHK sample flat?"'
  },
  {
    id: 'automobile',
    name: 'Automobile',
    icon: Car,
    accent: '#dc2626',
    useCase: 'Test drive bookings, annual service renewals, showroom lead qualification',
    metrics: '3.8x Test Drives',
    dialogue: '"Namaste Mr. Verma, your vehicle service is due this month. May I book a complimentary pick-and-drop slot for your car on Friday?"'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Heart,
    accent: '#e11d48',
    useCase: 'Doctor appointment bookings, OPD follow-ups, diagnostic lab alerts',
    metrics: '-60% No-Shows',
    dialogue: '"Hello! Confirming your appointment with Dr. Mehta tomorrow at 4:30 PM. Please press 1 to confirm or 2 to reschedule."'
  },
  {
    id: 'insurance',
    name: 'Insurance',
    icon: Shield,
    accent: '#059669',
    useCase: 'Policy renewals, term plan qualification, claims status inquiry',
    metrics: '88% Retention',
    dialogue: '"Good morning! Your motor insurance policy expires in 4 days. Would you like me to send the zero-dep renewal link on WhatsApp?"'
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    accent: '#2563eb',
    useCase: 'Admissions counseling, fee reminders, scholarship webinar invites',
    metrics: '+52% Enrollment',
    dialogue: '"Hi! We noticed you downloaded our Data Science syllabus. Are you looking for weekend or weekday batches?"'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    icon: ShoppingCart,
    accent: '#d97706',
    useCase: 'Order confirmation, COD verification calls, abandoned cart recovery',
    metrics: '-40% RTO Rate',
    dialogue: '"Namaste! This is regarding your cash-on-delivery order for Nike Shoes. Please say Yes to confirm dispatch to your Delhi address."'
  },
  {
    id: 'gym',
    name: 'Gym & Fitness',
    icon: Dumbbell,
    accent: '#7c3aed',
    useCase: 'Free trial session bookings, yearly renewals, personal trainer leads',
    metrics: '2.5x Signups',
    dialogue: '"Hey Rahul! Your free 3-day gym trial pass is active. Would you like to schedule your body composition analysis today?"'
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    icon: Utensils,
    accent: '#c026d3',
    useCase: 'Table reservations, party bookings, weekend dining confirmations',
    metrics: 'Instant Table Sync',
    dialogue: '"Good evening! Thank you for reserving a table for 4 at The Bistro tonight at 8 PM. We look forward to hosting you!"'
  },
  {
    id: 'travel',
    name: 'Travel',
    icon: Plane,
    accent: '#0284c7',
    useCase: 'Custom holiday package leads, flight inquiries, visa assistance',
    metrics: '+35% Closures',
    dialogue: '"Hello! Looking for a Dubai family holiday package? What is your preferred departure date in November?"'
  },
  {
    id: 'legal',
    name: 'Legal',
    icon: Scale,
    accent: '#b45309',
    useCase: 'Client case intake, consultation scheduling, document status follow-up',
    metrics: '100% Confidential',
    dialogue: '"Good day. Avyukta Legal desk here. I have recorded your corporate compliance inquiry. Our senior partner will connect at 3 PM."'
  },
  {
    id: 'it-saas',
    name: 'IT / SaaS',
    icon: Laptop,
    accent: '#4f46e5',
    useCase: 'Software demo booking, outbound SDR qualification, trial signups',
    metrics: '4x Demo Pipeline',
    dialogue: '"Hi Sarah, I see you signed up for our cloud telephony sandbox. Would you like a 10-minute walkthrough of the API integration?"'
  },
  {
    id: 'banking',
    name: 'Banking',
    icon: Landmark,
    accent: '#0f766e',
    useCase: 'Loan eligibility pre-screening, credit card follow-ups, KYC alerts',
    metrics: 'RBI Compliant',
    dialogue: '"Hello Mr. Kapoor, your pre-approved business loan of ₹25 Lakhs is ready for sanction. May I verify your GST number?"'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Package,
    accent: '#9a3412',
    useCase: 'B2B dealer inquiries, order dispatch notifications, vendor updates',
    metrics: 'Zero Order Delay',
    dialogue: '"Dear Dealer Partner, your consignment of 500 units has been dispatched via BlueDart. Tracking details sent to your registered email."'
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    icon: Gem,
    accent: '#ca8a04',
    useCase: 'Exclusive collection invitations, gold savings scheme reminders',
    metrics: 'Premium VIP CX',
    dialogue: '"Namaste! Festive diamond showcase opens this Friday at our showroom. We would love to reserve an exclusive preview slot for you."'
  },
  {
    id: 'logistics',
    name: 'Logistics',
    icon: Truck,
    accent: '#ea580c',
    useCase: 'Shipment tracking, delivery address verification, fleet booking',
    metrics: '99.2% First Attempt',
    dialogue: '"Your express shipment will arrive between 2 PM and 5 PM today. Will someone be available at the reception to receive it?"'
  },
  {
    id: 'interior-design',
    name: 'Interior Design',
    icon: Rocket,
    accent: '#db2777',
    useCase: 'Home design consultation bookings, floor plan inquiry, budget qualification',
    metrics: '+60% Consultations',
    dialogue: '"Hello! Are you looking for complete 3 BHK interior execution or modular kitchen design? What is your estimated possession date?"'
  },
  {
    id: 'beauty-salon',
    name: 'Beauty & Salon',
    icon: Scissors,
    accent: '#9333ea',
    useCase: 'Bridal bookings, salon service scheduling, loyalty package offers',
    metrics: 'Zero Idle Hours',
    dialogue: '"Hi Priya! Your favorite stylist Sneha has an open slot at 3 PM this Saturday. Would you like me to lock in your hair spa appointment?"'
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: Wheat,
    accent: '#65a30d',
    useCase: 'Mandi price updates, seed/fertilizer stock alerts, farmer advisories',
    metrics: 'Indic Regional Voice',
    dialogue: '"Kisan Bhai, aapke kshetra ki mandi me gehun ka taza bhav ₹2,450/quintal hai. Krishi salah sunne ke liye 1 dabayein."'
  },
  {
    id: 'solar-energy',
    name: 'Solar Energy',
    icon: Sun,
    accent: '#f59e0b',
    useCase: 'Rooftop subsidy qualification, bill savings estimation, site survey booking',
    metrics: '3.4x Survey Bookings',
    dialogue: '"Hello! Does your monthly electricity bill exceed ₹3,000? You qualify for a 40% government subsidy on rooftop solar installation."'
  },
  {
    id: 'staffing',
    name: 'Staffing',
    icon: Users,
    accent: '#0891b2',
    useCase: 'First-round candidate screening, interview availability check, resume updates',
    metrics: '500+ Screenings/Day',
    dialogue: '"Hi! Calling regarding your application for the Telecaller position. How many years of outbound calling experience do you have?"'
  }
];

export default function IndustryVoiceCrm({ onOpenTrial }) {
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0]);

  const SelectedIcon = selectedIndustry.icon;

  return (
    <section className="industry-voice-section" id="industries">
      <div className="wrap">
        {/* Section Header */}
        <div className="industry-head">
          <div className="pricing-badge-pro">
            <span className="badge-dot-coral"></span>
            <span>20 INDUSTRY BLUEPRINTS</span>
          </div>

          <h2 className="home-title industry-main-title">
            AI Voice Agents &amp; <span className="title-coral">CRM for Every Industry</span>
          </h2>

          <p className="home-subtitle industry-lead-text">
            Pre-configured AI calling bots and CRM templates with industry-specific deal stages, 
            lead sources, and sales automation for Indian businesses.
          </p>
        </div>

        {/* 20 Industries Interactive Chips Grid */}
        <div className="industry-chips-container">
          <div className="industry-chips-grid">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setSelectedIndustry(ind)}
                  className={`industry-chip-pill ${isSelected ? 'active' : ''}`}
                  style={{
                    '--chip-accent': ind.accent
                  }}
                >
                  <Icon size={16} className="chip-icon" style={{ color: ind.accent }} />
                  <span className="chip-name">{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Industry Showcase Card */}
        <div className="industry-preview-card">
          <div className="preview-top-bar">
            <div className="preview-industry-title">
              <div 
                className="preview-icon-circle"
                style={{ 
                  color: selectedIndustry.accent,
                  backgroundColor: `${selectedIndustry.accent}15`
                }}
              >
                <SelectedIcon size={22} />
              </div>
              <div>
                <h3 className="preview-name">{selectedIndustry.name} AI Agent Template</h3>
                <span className="preview-usecase">{selectedIndustry.useCase}</span>
              </div>
            </div>

            <div className="preview-metric-tag" style={{ color: selectedIndustry.accent, backgroundColor: `${selectedIndustry.accent}12` }}>
              <Sparkles size={13} />
              <span>{selectedIndustry.metrics}</span>
            </div>
          </div>

          {/* Sample AI Call Voice Dialogue */}
          <div className="preview-dialogue-box">
            <div className="dialogue-header">
              <PhoneCall size={14} className="text-good" />
              <span>Sample Autonomous Call Flow:</span>
            </div>
            <p className="dialogue-text">
              {selectedIndustry.dialogue}
            </p>
          </div>

          {/* Quick Features Row */}
          <div className="preview-features-row">
            <div className="preview-feat-item">
              <CheckCircle2 size={15} className="text-good" />
              <span>Custom Dialing Script &amp; Knowledge Base Included</span>
            </div>
            <div className="preview-feat-item">
              <CheckCircle2 size={15} className="text-good" />
              <span>Pre-built CRM Stages &amp; WhatsApp Templates</span>
            </div>
            <div className="preview-feat-item">
              <CheckCircle2 size={15} className="text-good" />
              <span>Local STD Caller ID (CLI) for High Answer Rates</span>
            </div>

            <button 
              type="button" 
              onClick={onOpenTrial}
              className="btn-preview-deploy"
            >
              <span>Deploy for {selectedIndustry.name}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

