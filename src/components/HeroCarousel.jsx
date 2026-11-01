import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Play,
  PhoneForwarded,
  Layers,
  ShieldCheck
} from 'lucide-react';
import LiveCallSimulator from './LiveCallSimulator';

const SLIDES = [
  {
    id: 1,
    tag: 'Complete Telephony Solutions',
    tagColor: '#f97316',
    accentClass: 'text-glow-orange',
    titlePrefix: 'Dialer India – ',
    titleAccent: 'Complete Telephony Solutions',
    titleSuffix: ' along with bridging your customer solutions.',
    desc: 'Deploy carrier-grade cloud dialers and conversational AI voice agents that speak naturally, handle human interruptions, and integrate directly with Meta & your CRM.',
    badge: '19+ Years Heritage',
    liveStatus: 'Sub-500ms Voice Engine',
    image: '/carousel-slide1.jpg',
    highlights: ['Dialer & Telephony Solutions', 'Sub-500ms Response Time', 'Meta CRM & WhatsApp Ready', 'Zero Setup Cost'],
    primaryBtn: { text: 'Start Free Trial', link: 'https://ai.avyukta.in/' },
    secondaryBtn: { text: 'Explore Voice Plans', link: '#plans' }
  },
  {
    id: 2,
    tag: 'Multilingual & Indic Accents',
    tagColor: '#f97316',
    accentClass: 'text-glow-orange',
    titlePrefix: 'Native Indic Dialects – ',
    titleAccent: 'Smart Local DIDs',
    titleSuffix: ' with 60+ Studio Expressive Voices.',
    desc: 'Engage customers in Hindi, Hinglish, Marathi, Gujarati, Tamil, Telugu, and English. Natural accents and emotion modeling that build immediate customer trust.',
    badge: 'Pan-India STD CLI',
    liveStatus: 'Multi-Dialect Neural TTS',
    image: '/carousel-slide2.jpg',
    highlights: ['011, 022, 080 Local DIDs', 'Hindi, Hinglish & 10+ Dialects', 'Emotional Expressiveness', 'Carrier Uptime 99.99%'],
    primaryBtn: { text: 'Hear Voice Engines', link: '#engines' },
    secondaryBtn: { text: 'See Volume Rates', link: '#volume' }
  },
  {
    id: 3,
    tag: 'Enterprise AI Telecom & CRM',
    tagColor: '#10b981',
    accentClass: 'text-glow-emerald',
    titlePrefix: 'Enterprise BPO Dialing – ',
    titleAccent: 'AI Voice Automation',
    titleSuffix: ' & Live Human Handoff.',
    desc: 'Effortlessly scale up to 100+ concurrent calls with Pan-India STD CLI. Grounded in your custom knowledge base with 1-click fallback to human supervisors.',
    badge: '100+ Concurrent Channels',
    liveStatus: 'Enterprise Telecom Cloud',
    image: '/carousel-slide3.jpg',
    highlights: ['Vicidial + Avyukta Integration', '1-Click Agent Handoff', 'Second-by-Second Billing', 'Free BPA Consulting'],
    primaryBtn: { text: 'Calculate Pricing', link: '#volume' },
    secondaryBtn: { text: 'View BPA Flow', link: '#bpa-flow' }
  }
];

export default function HeroCarousel({ onOpenTrial }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const total = SLIDES.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const goToSlide = (idx) => {
    setCurrent(idx);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, isPaused]);

  const slide = SLIDES[current];

  return (
    <section 
      id="solutions" 
      className="premium-hero-carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Full-Width Edge-to-Edge Banner Container */}
      <div className="full-width-slider">
        {/* Dynamic Background Slide with Dark Backdrop & Ambient Mesh */}
        <div 
          className="full-slider-bg"
          style={{ 
            backgroundImage: `url(${slide.image})`,
          }}
        >
          {/* Multi-layered cinematic gradient overlays */}
          <div className="cinematic-gradient-left"></div>
          <div className="cinematic-gradient-bottom"></div>
          <div className="cinematic-gradient-top"></div>
          <div className="cinematic-ambient-glow"></div>

          {/* Centered High-End Two-Column Content Container */}
          <div className="slider-inner-container">
            <div className="slider-two-col-layout">
              {/* Left Column: Hero Copy & CTA */}
              <div className="slider-content-box">
                {/* Badges Row */}
                <div className="slider-badge-row">
                  <span 
                    className="premium-pill"
                    style={{ 
                      borderColor: `${slide.tagColor}55`,
                      backgroundColor: `${slide.tagColor}20`,
                      color: '#ffffff'
                    }}
                  >
                    <span className="live-pulse-dot" style={{ backgroundColor: slide.tagColor }}></span>
                    <Sparkles size={13} style={{ marginRight: 6, color: slide.tagColor }} />
                    {slide.tag}
                  </span>

                  <span className="slider-status-chip">
                    <span className="status-ping-dot"></span>
                    {slide.liveStatus}
                  </span>

                  <span className="slider-metric-chip">{slide.badge}</span>
                </div>

                {/* Title with Gradient Text Accent */}
                <h1 className="slider-main-title">
                  {slide.titlePrefix}
                  <span className={`gradient-accent ${slide.accentClass}`}>
                    {slide.titleAccent}
                  </span>
                  {slide.titleSuffix}
                </h1>

                {/* Description */}
                <p className="slider-description">{slide.desc}</p>

                {/* Feature Highlights Pills */}
                <div className="slider-features-row">
                  {slide.highlights.map((item, idx) => (
                    <div key={idx} className="slider-feature-pill">
                      <CheckCircle2 size={16} className="text-emerald" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons with Links */}
                <div className="slider-buttons-row">
                  <a 
                    href={slide.primaryBtn.link} 
                    target={slide.primaryBtn.link.startsWith('http') ? '_blank' : undefined}
                    rel={slide.primaryBtn.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="btn-luxury-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>{slide.primaryBtn.text}</span>
                    <ArrowRight size={17} />
                  </a>

                  <a href={slide.secondaryBtn.link} className="btn-luxury-glass">
                    <Play size={14} fill="currentColor" />
                    <span>{slide.secondaryBtn.text}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Live Call Simulator (Vapi / ElevenLabs style) */}
              <div className="slider-simulator-col">
                <LiveCallSimulator />
              </div>
            </div>
          </div>

          {/* Floating Luxury Navigation Arrows */}
          <button 
            type="button" 
            className="slider-arrow-btn prev"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            type="button" 
            className="slider-arrow-btn next"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Bottom Floating Navigation Bar with < > Arrows (Exact Reference Image Match) */}
          <div className="slider-bottom-bar">
            {/* Center Navigation Arrows (< >) */}
            <div className="slider-center-nav-btns">
              <button 
                type="button" 
                className="carousel-nav-btn prev"
                onClick={prevSlide}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                type="button" 
                className="carousel-nav-btn next"
                onClick={nextSlide}
                aria-label="Next Slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Slide Index Counter */}
            <div className="slider-counter">
              <span className="current-num">0{current + 1}</span>
              <span className="divider">/</span>
              <span className="total-num">0{total}</span>
            </div>

            {/* Interactive Progress Indicators */}
            <div className="slider-progress-pills">
              {SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  className={`slider-pill-indicator ${current === idx ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <span className="pill-fill"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
