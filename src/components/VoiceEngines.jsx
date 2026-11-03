import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  Sparkles, 
  Headphones, 
  Languages, 
  Award,
  Crown,
  CheckCircle2,
  Clock,
  PhoneCall,
  BarChart3,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Flame
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';

const ENGINES = [
  {
    id: 'silver',
    name: 'Avyukta AI Silver',
    tierName: 'Silver',
    themeClass: 'engine-silver',
    voiceGrade: 'A Grade Voice',
    latency: '> 200ms',
    roboticTone: '~20% Robotic Sounding',
    bundlePrice: '₹5.00',
    modularPrice: '₹3.00',
    title: 'Natural Conversational Voices',
    desc: 'A-Grade natural tone voice engine with standard latency (>200ms). Perfect for high-volume lead qualification, verification, reminders, and automated outreach.',
    voicesCount: '60+ HD Voices',
    badge: 'A Grade · Standard',
    icon: Headphones,
    tagColor: '#64748b',
    accentColor: '#94a3b8',
    samples: [
      { name: 'Achird', dialect: 'English (Neutral)', src: '/samples/silver-1.mp3' },
      { name: 'Aoede', dialect: 'English (US)', src: '/samples/silver-2.mp3' },
      { name: 'Charon', dialect: 'Hinglish (Casual)', src: '/samples/silver-3.mp3' },
      { name: 'Kore', dialect: 'English (Professional)', src: '/samples/silver-4.mp3' },
      { name: 'Leda', dialect: 'English (Warm)', src: '/samples/silver-5.mp3' },
      { name: 'Orus', dialect: 'Hinglish (Executive)', src: '/samples/silver-6.mp3' },
      { name: 'Achernar', dialect: 'English (Global)', src: '/samples/silver-7.mp3' },
      { name: 'Algenib', dialect: 'English (Friendly)', src: '/samples/silver-8.mp3' },
    ],
  },
  {
    id: 'gold',
    name: 'Avyukta AI Gold',
    tierName: 'Gold',
    themeClass: 'engine-gold',
    voiceGrade: 'A Grade Voice',
    latency: '< 200ms (Fast)',
    roboticTone: '~15% Robotic Sounding',
    bundlePrice: '₹7.00',
    modularPrice: '₹5.80',
    title: 'Sub-200ms Indic & Hinglish',
    desc: 'Ultra-low latency sub-200ms cadence with pure native Hindi, Hinglish, Marathi, Gujarati, and regional Indic inflections with instant interruption recovery.',
    voicesCount: '37 Native Indic Voices',
    badge: 'A Grade · Sub-200ms',
    icon: Languages,
    tagColor: '#ea580c',
    accentColor: '#f97316',
    samples: [
      { name: 'Aditya', dialect: 'Pure Hindi (Male)', src: '/samples/gold-1.mp3' },
      { name: 'Ritu', dialect: 'Hindi (Female Soft)', src: '/samples/gold-2.mp3' },
      { name: 'Ashutosh', dialect: 'Hinglish (Deep Tone)', src: '/samples/gold-3.mp3' },
      { name: 'Priya', dialect: 'Hindi (Sales Female)', src: '/samples/gold-4.mp3' },
      { name: 'Neha', dialect: 'Hindi (Support Female)', src: '/samples/gold-5.mp3' },
      { name: 'Rahul', dialect: 'Hinglish (Conversational)', src: '/samples/gold-6.mp3' },
      { name: 'Pooja', dialect: 'Hindi (Customer Care)', src: '/samples/gold-7.mp3' },
      { name: 'Rohan', dialect: 'Hindi (Consultative)', src: '/samples/gold-8.mp3' },
    ],
  },
  {
    id: 'diamond',
    name: 'Avyukta AI Diamond',
    tierName: 'Diamond',
    themeClass: 'engine-diamond',
    voiceGrade: 'A+ Grade Voice',
    latency: '< 200ms',
    roboticTone: '~5%-10% Robotic (Ultra-Human)',
    bundlePrice: '₹11.00',
    modularPrice: '₹10.00',
    title: 'Studio-Grade Ultra-Expressive HD',
    desc: 'Flagship studio-grade neural voice virtually indistinguishable from a senior human executive. Deep emotional inflection, bespoke cloning, and zero acoustic fatigue.',
    voicesCount: '47 Studio Ultra-Expressive',
    badge: 'A+ Grade · Studio HD',
    icon: Crown,
    tagColor: '#9333ea',
    accentColor: '#a855f7',
    samples: [
      { name: 'Indian Origin 3', dialect: 'Executive Indian', src: '/samples/platinum-1.mp3' },
      { name: 'Indian Origin 2', dialect: 'Diplomatic Indian', src: '/samples/platinum-2.mp3' },
      { name: 'Indian Origin', dialect: 'Senior Consultant', src: '/samples/platinum-3.mp3' },
      { name: 'Roger', dialect: 'Studio English (Male)', src: '/samples/platinum-4.mp3' },
      { name: 'Sarah', dialect: 'Studio English (Female)', src: '/samples/platinum-5.mp3' },
      { name: 'Laura', dialect: 'Executive US Accent', src: '/samples/platinum-6.mp3' },
      { name: 'Charlie', dialect: 'Natural UK Accent', src: '/samples/platinum-7.mp3' },
      { name: 'George', dialect: 'Authoritative Host', src: '/samples/platinum-8.mp3' },
    ],
  },
];

export default function VoiceEngines() {
  const [playingState, setPlayingState] = useState({
    engineId: null,
    sampleName: null,
    dialect: null,
    src: null,
    isPlaying: false,
    progress: 0,
  });

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setPlayingState((prev) => ({
          ...prev,
          progress: (audio.currentTime / audio.duration) * 100,
        }));
      }
    };

    const handleEnded = () => {
      setPlayingState((prev) => ({
        ...prev,
        isPlaying: false,
        progress: 0,
      }));
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handlePlayVoice = (engineId, sample) => {
    const audio = audioRef.current;
    if (!audio) return;

    const resolvedSrc = getAssetUrl(sample.src);

    // If already playing this voice, toggle pause/play
    if (playingState.src === resolvedSrc && playingState.isPlaying) {
      audio.pause();
      setPlayingState((prev) => ({ ...prev, isPlaying: false }));
      return;
    }

    if (playingState.src === resolvedSrc && !playingState.isPlaying) {
      audio.play().catch(() => {});
      setPlayingState((prev) => ({ ...prev, isPlaying: true }));
      return;
    }

    // New voice selected
    audio.src = resolvedSrc;
    audio.play().catch(() => {});
    setPlayingState({
      engineId,
      sampleName: sample.name,
      dialect: sample.dialect,
      src: resolvedSrc,
      isPlaying: true,
      progress: 0,
    });
  };

  return (
    <section className="voice-engines-pro-section" id="engines">
      {/* Hidden Master Audio Element */}
      <audio ref={audioRef} preload="none" />

      <div className="wrap plan-wide-wrap">
        
        {/* Section Header */}
        <div className="head">
          <div className="pricing-badge-pro">
            <span className="badge-dot-coral"></span>
            <span>VOICE ENGINE INTELLIGENCE</span>
          </div>

          <h2>
            Auditory Precision &amp; Latency Benchmark <span className="title-coral">Silver · Gold · Diamond</span>
          </h2>

          <p>
            Experience real-time sub-200ms latency, vocal grade benchmarks, and natural conversational cadence across English, Hindi, and regional Indic dialects.
          </p>
        </div>

        {/* 3 Pro Engine Cards Grid */}
        <div className="engines-pro-grid">
          {ENGINES.map((engine) => {
            const Icon = engine.icon;
            const isCardActive = playingState.engineId === engine.id && playingState.isPlaying;

            return (
              <div 
                key={engine.id} 
                className={`engine-pro-card ${engine.themeClass} ${isCardActive ? 'card-audio-active' : ''}`}
              >
                {/* Top Card Header */}
                <div className="engine-card-header">
                  <div className="engine-icon-pill">
                    <Icon size={20} />
                    <span>{engine.name}</span>
                  </div>
                  <span className="engine-badge-tag">{engine.badge}</span>
                </div>

                <h3 className="engine-title">{engine.title}</h3>
                
                {/* Dual Commercials Row: Case A Modular vs Case B Bundle */}
                <div className="engine-price-block">
                  <div className="engine-pricing-dual-row">
                    <div className="dual-price-item">
                      <span className="dual-label">Case A (Modular):</span>
                      <b className="dual-num">{engine.modularPrice}</b>
                      <span className="dual-unit">/ min</span>
                    </div>
                    <div className="dual-price-item secondary-price">
                      <span className="dual-label">Case B (Bundle):</span>
                      <b className="dual-num">{engine.bundlePrice}</b>
                      <span className="dual-unit">/ min</span>
                    </div>
                  </div>
                  <span className="price-gst-sub">excl. GST · per second billing · ₹0 setup</span>
                </div>

                {/* Micro-Specs Benchmarks (From Sir's Proposal) */}
                <div className="engine-benchmarks-strip">
                  <div className="bench-pill">
                    <Award size={12} className="text-coral" />
                    <span><b>{engine.voiceGrade}</b></span>
                  </div>
                  <div className="bench-pill">
                    <Clock size={12} />
                    <span>Latency: <b>{engine.latency}</b></span>
                  </div>
                  <div className="bench-pill">
                    <Sparkles size={12} />
                    <span>Realism: <b>{engine.roboticTone}</b></span>
                  </div>
                </div>

                <p className="engine-description">{engine.desc}</p>

                <div className="engine-voice-count-bar">
                  <Volume2 size={16} />
                  <span>{engine.voicesCount} Available</span>
                </div>

                {/* Voice Samples Audio Player Tray */}
                <div className="voice-samples-tray">
                  <div className="samples-tray-title">
                    <span>Click to preview neural vocal quality:</span>
                  </div>

                  <div className="voice-chips-cluster">
                    {engine.samples.map((sample) => {
                      const resolvedSrc = getAssetUrl(sample.src);
                      const isCurrent = playingState.src === resolvedSrc;
                      const isPlayingThis = isCurrent && playingState.isPlaying;

                      return (
                        <button
                          key={sample.name}
                          type="button"
                          className={`voice-sample-chip ${isCurrent ? 'selected' : ''} ${isPlayingThis ? 'playing' : ''}`}
                          onClick={() => handlePlayVoice(engine.id, sample)}
                          title={`${sample.name} (${sample.dialect})`}
                        >
                          <span className="chip-play-icon">
                            {isPlayingThis ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
                          </span>
                          <span className="chip-voice-name">{sample.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Audio Visualizer Bar */}
                  {playingState.engineId === engine.id && (
                    <div className="live-voice-player-bar">
                      <div className="player-left">
                        <button 
                          type="button" 
                          className="player-play-toggle"
                          onClick={() => {
                            if (audioRef.current) {
                              if (playingState.isPlaying) audioRef.current.pause();
                              else audioRef.current.play();
                              setPlayingState((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
                            }
                          }}
                        >
                          {playingState.isPlaying ? <Pause size={14} /> : <Play size={14} />}
                        </button>

                        <div className="player-details">
                          <span className="player-voice-title">{playingState.sampleName}</span>
                          <span className="player-dialect">{playingState.dialect}</span>
                        </div>
                      </div>

                      {/* Animated Sound Equalizer */}
                      <div className={`sound-equalizer ${playingState.isPlaying ? 'active' : ''}`}>
                        <span className="eq-bar eq-1"></span>
                        <span className="eq-bar eq-2"></span>
                        <span className="eq-bar eq-3"></span>
                        <span className="eq-bar eq-4"></span>
                        <span className="eq-bar eq-5"></span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            LIVE DEMOS & OFFICIAL REFERENCES BAR (From Sir's Proposal)
           ========================================================= */}
        <div className="engine-demos-references-banner">
          <div className="demos-left-info">
            <h4 className="demos-banner-title">
              <PhoneCall size={20} className="text-coral" />
              <span>Experience Avyukta AI In Action</span>
            </h4>
            <p className="demos-banner-sub">
              Test live turn-taking speech, interruption recovery, and inspect telephony telemetry dashboards with our telecom architects.
            </p>
          </div>

          <div className="demos-action-buttons">
            <a 
              href="https://ai.avyukta.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-demo-action btn-demo-live"
            >
              <PhoneCall size={16} />
              <span>Live AI Calling Demo</span>
              <ExternalLink size={14} />
            </a>

            <a 
              href="https://www.avyukta.in/architecture.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-demo-action btn-demo-walkthrough"
            >
              <BarChart3 size={16} />
              <span>Product Walkthrough &amp; Dashboard</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* 72-Hour Refund Guarantee Policy Pill */}
        <div className="refund-guarantee-pill-bar">
          <ShieldCheck size={18} className="text-emerald" />
          <span><b>⭐ 72-Hour Refund Policy:</b> Valid during Paid PoC phase for complete enterprise risk-free evaluation.</span>
        </div>

      </div>
    </section>
  );
}
