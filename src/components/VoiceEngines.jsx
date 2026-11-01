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
  CheckCircle2
} from 'lucide-react';

const ENGINES = [
  {
    id: 'silver',
    name: 'Silver',
    themeClass: 'engine-silver',
    title: 'Natural HD Voices',
    price: '₹5.00',
    desc: 'English and Hinglish conversational voices at the lowest cost per minute. Ideal for general outbound campaigns, appointment reminders, and lead qualification.',
    voicesCount: '60+ HD Voices',
    badge: 'Standard HD',
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
    name: 'Gold',
    themeClass: 'engine-gold',
    title: 'Best for Indic Languages',
    price: '₹7.00',
    desc: 'Hindi, Marathi, Gujarati, Punjabi, Tamil, Telugu, and more — where regional accent accuracy and native inflection decide whether the customer trusts the call.',
    voicesCount: '37 Native Indic Voices',
    badge: 'Popular for India',
    icon: Languages,
    tagColor: '#d97706',
    accentColor: '#f59e0b',
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
    id: 'platinum',
    name: 'Platinum',
    themeClass: 'engine-platinum',
    title: 'Most Expressive Studio Voices',
    price: '₹15.00',
    desc: 'Brand-critical enterprise customer experiences where the AI voice must be virtually indistinguishable from a senior human executive with emotional nuance.',
    voicesCount: '47 Studio Ultra-Expressive',
    badge: 'Studio Ultra-HD',
    icon: Crown,
    tagColor: '#8b5cf6',
    accentColor: '#c084fc',
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
  const [activeEngine, setActiveEngine] = useState('gold');
  const [playingState, setPlayingState] = useState({
    engineId: null,
    sampleName: null,
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

    // If already playing this voice, toggle pause/play
    if (playingState.src === sample.src && playingState.isPlaying) {
      audio.pause();
      setPlayingState((prev) => ({ ...prev, isPlaying: false }));
      return;
    }

    if (playingState.src === sample.src && !playingState.isPlaying) {
      audio.play().catch(() => {});
      setPlayingState((prev) => ({ ...prev, isPlaying: true }));
      return;
    }

    // New voice selected
    audio.src = sample.src;
    audio.play().catch(() => {});
    setPlayingState({
      engineId,
      sampleName: sample.name,
      dialect: sample.dialect,
      src: sample.src,
      isPlaying: true,
      progress: 0,
    });
  };

  return (
    <section className="voice-engines-pro-section" id="engines">
      {/* Hidden Master Audio Element */}
      <audio ref={audioRef} preload="none" />

      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Voice Engines</span>
          <h2>Pick the voice, not the feature list</h2>
          <p>
            All three tiers include every platform feature, unlimited agents, and CRM sync. 
            The tier you pick simply decides the vocal realism, language accuracy, and emotional depth.
          </p>
        </div>

        {/* 3 Pro Engine Cards */}
        <div className="engines-pro-grid">
          {ENGINES.map((engine) => {
            const Icon = engine.icon;
            const isCardActive = playingState.engineId === engine.id && playingState.isPlaying;

            return (
              <div 
                key={engine.id} 
                className={`engine-pro-card ${engine.themeClass} ${isCardActive ? 'card-audio-active' : ''}`}
              >
                {/* Top Header */}
                <div className="engine-card-header">
                  <div className="engine-icon-pill">
                    <Icon size={20} />
                    <span>{engine.name}</span>
                  </div>
                  <span className="engine-badge-tag">{engine.badge}</span>
                </div>

                <h3 className="engine-title">{engine.title}</h3>
                
                {/* Price Display */}
                <div className="engine-price-block">
                  <div className="price-amount">
                    <b>{engine.price}</b>
                    <span className="price-unit">/ min · from</span>
                  </div>
                  <span className="price-gst-sub">excl. GST · per second billing</span>
                </div>

                <p className="engine-description">{engine.desc}</p>

                <div className="engine-voice-count-bar">
                  <Volume2 size={16} />
                  <span>{engine.voicesCount}</span>
                </div>

                {/* Voice Samples Audio Player Section */}
                <div className="voice-samples-tray">
                  <div className="samples-tray-title">
                    <span>Click to hear live sample:</span>
                  </div>

                  <div className="voice-chips-cluster">
                    {engine.samples.map((sample) => {
                      const isCurrent = playingState.src === sample.src;
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

                      {/* Equalizer animation bars */}
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
      </div>
    </section>
  );
}
