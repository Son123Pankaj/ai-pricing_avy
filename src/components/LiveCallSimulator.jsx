import React, { useState, useEffect, useRef } from 'react';
import { 
  PhoneCall, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

const SCENARIOS = [
  {
    id: 'inbound',
    label: 'Inbound Sales Lead',
    caller: 'Customer Inquiry · BPO Automation',
    sampleAudio: '/samples/gold-1.mp3',
    latency: '360ms',
    transcript: 'Namaste! Welcome to Avyukta IntelliCall. I understand you are exploring sub-second conversational AI voice agents for your contact center. Shall I walk you through our ₹3.00/min committed volume plan?',
    intent: 'Pricing & Demo Request',
    confidence: '99.4%'
  },
  {
    id: 'outbound',
    label: 'Outbound Payment Alert',
    caller: 'Automated Account Renewal',
    sampleAudio: '/samples/gold-2.mp3',
    latency: '390ms',
    transcript: 'Good morning Mr. Sharma, this is your automated billing assistant. Your enterprise dialer subscription renews in 2 days. Would you like me to send a WhatsApp payment link via Meta integration right now?',
    intent: 'Payment Confirmation',
    confidence: '98.8%'
  },
  {
    id: 'support',
    label: '24/7 BPO Support',
    caller: 'SIP Trunk & DID Assistance',
    sampleAudio: '/samples/gold-3.mp3',
    latency: '410ms',
    transcript: 'Hello, Avyukta 24/7 technical desk here. I see your Delhi 011 DID trunk has successfully routed 1,420 concurrent calls today. All Asterisk gateways are operating at 100% capacity.',
    intent: 'Gateway Status Check',
    confidence: '99.1%'
  }
];

export default function LiveCallSimulator() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [callDuration, setCallDuration] = useState(102); // 01:42
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const scenario = SCENARIOS[activeTab];

  // Timer simulation for live call duration
  useEffect(() => {
    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toggleAudio = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = scenario.sampleAudio;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleScenarioChange = (idx) => {
    setActiveTab(idx);
    if (isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const onAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="live-call-card-container">
      {/* Hidden Audio Element for Genuine Voice Samples */}
      <audio 
        ref={audioRef} 
        onEnded={onAudioEnded} 
        onError={onAudioEnded}
      />

      {/* Main Glassmorphic Call Box */}
      <div className="live-call-box">
        {/* Call Header */}
        <div className="call-box-header">
          <div className="call-live-indicator">
            <span className="live-pulsing-dot"></span>
            <span className="call-live-text">CALL IN PROGRESS</span>
          </div>

          <div className="call-time-badge">
            <span className="timer-digits">{formatTime(callDuration)}</span>
          </div>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="scenario-tabs-row">
          {SCENARIOS.map((sc, idx) => (
            <button
              key={sc.id}
              type="button"
              className={`scenario-pill-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => handleScenarioChange(idx)}
            >
              {sc.label}
            </button>
          ))}
        </div>

        {/* Agent Profile Banner */}
        <div className="call-agent-profile">
          <div className="agent-avatar-wrap">
            <div className="agent-icon-circle">
              <PhoneCall size={18} className="text-white" />
            </div>
            <span className="agent-online-beacon"></span>
          </div>

          <div className="agent-meta-info">
            <div className="agent-name-row">
              <span className="agent-name">Avyukta AI Agent</span>
              <span className="agent-tech-pill">Neural Voice v2.4</span>
            </div>
            <span className="agent-subtext">{scenario.caller}</span>
          </div>

          <button 
            type="button"
            className="call-mute-toggle"
            onClick={() => setIsMuted(!isMuted)}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

        {/* Live Audio Visualizer Equalizer */}
        <div className="call-visualizer-container">
          <div className="visualizer-label-row">
            <span className="vis-label">REAL-TIME SPEECH SYNTHESIS</span>
            <span className="vis-latency">
              <Zap size={12} className="text-amber-400" />
              {scenario.latency}
            </span>
          </div>

          <div className="waveform-equalizer-bars">
            {[35, 60, 95, 45, 80, 100, 75, 90, 50, 85, 65, 40, 70, 30].map((h, i) => (
              <span
                key={i}
                className={`eq-bar ${isPlaying ? 'animating' : 'idle'}`}
                style={{
                  height: isPlaying ? undefined : `${h * 0.45}%`,
                  animationDelay: `${(i % 5) * 120}ms`,
                  animationDuration: `${0.8 + (i % 3) * 0.3}s`
                }}
              ></span>
            ))}
          </div>
        </div>

        {/* Real-time Dynamic AI Transcript Preview */}
        <div className="call-transcript-panel">
          <div className="transcript-header">
            <MessageSquare size={13} className="text-brand" />
            <span>AI Voice Stream (Natural Interruptions Ready)</span>
          </div>
          <p className="transcript-text">
            &ldquo;{scenario.transcript}&rdquo;
          </p>
        </div>

        {/* Live Action Buttons */}
        <div className="call-footer-actions">
          <button 
            type="button" 
            className={`btn-test-voice ${isPlaying ? 'playing' : ''}`}
            onClick={toggleAudio}
          >
            {isPlaying ? (
              <>
                <Pause size={15} fill="currentColor" />
                <span>Pause Live Audio</span>
              </>
            ) : (
              <>
                <Play size={15} fill="currentColor" />
                <span>Hear Live AI Voice</span>
              </>
            )}
          </button>

          <div className="call-stat-item">
            <ShieldCheck size={14} className="text-emerald" />
            <span>Intent: <b>{scenario.intent}</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}

