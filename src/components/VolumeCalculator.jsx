import React, { useState } from 'react';
import { Calculator, TrendingDown, Sparkles, PhoneCall, ArrowRight, Check } from 'lucide-react';

const BANDS = [
  { minMinutes: 10000, label: 'Up to 20K', band: 'Up to 20,000 min / month', s: 8.0, g: 12.0, p: 25.0, callsEst: '10 - 20 concurrent' },
  { minMinutes: 50000, label: '20K – 1L', band: '20,001 – 1,00,000 min / month', s: 7.0, g: 10.5, p: 21.5, callsEst: '20 - 40 concurrent' },
  { minMinutes: 200000, label: '1L – 3L', band: '1,00,001 – 3,00,000 min / month', s: 6.0, g: 9.0, p: 18.5, callsEst: '40 - 70 concurrent' },
  { minMinutes: 500000, label: '3L – 10L', band: '3,00,001 – 10,00,000 min / month', s: 5.5, g: 8.0, p: 16.5, callsEst: '70 - 100 concurrent' },
  { minMinutes: 1000000, label: '10L+', band: 'Above 10,00,000 min / month', s: 5.0, g: 7.0, p: 15.0, callsEst: '100+ Enterprise channels' },
];

export default function VolumeCalculator() {
  const [selectedIdx, setSelectedIdx] = useState(1); // default 20K - 1L
  const [minutesInput, setMinutesInput] = useState(60000);

  const baseBand = BANDS[0];
  const currentBand = BANDS[selectedIdx];

  const savingsPct = Math.round((1 - currentBand.s / baseBand.s) * 100);
  const monthlySpendSilver = (minutesInput * currentBand.s).toLocaleString('en-IN');
  const baseSpendSilver = (minutesInput * baseBand.s);
  const currentSpendSilver = (minutesInput * currentBand.s);
  const monthlyRupeeSavings = Math.max(0, baseSpendSilver - currentSpendSilver).toLocaleString('en-IN');

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setMinutesInput(val);
    if (val <= 20000) setSelectedIdx(0);
    else if (val <= 100000) setSelectedIdx(1);
    else if (val <= 300000) setSelectedIdx(2);
    else if (val <= 1000000) setSelectedIdx(3);
    else setSelectedIdx(4);
  };

  const handleTierClick = (idx) => {
    setSelectedIdx(idx);
    setMinutesInput(BANDS[idx].minMinutes);
  };

  return (
    <section className="volume-calc-pro-section" id="volume">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Interactive Volume Calculator</span>
          <h2>AI Voice Engine Volume Savings</h2>
          <p>
            Your per-minute rate steps down automatically as your monthly call volume grows. 
            Drag the slider or pick a committed band to calculate your exact conversational AI engine rates (starting from ₹3/min on committed plans).
          </p>
        </div>

        <div className="calc-pro-card">
          {/* Top Tiers Pills */}
          <div className="calc-tiers-nav">
            {BANDS.map((item, idx) => (
              <button
                key={item.label}
                type="button"
                className={`calc-tier-btn ${selectedIdx === idx ? 'active' : ''}`}
                onClick={() => handleTierClick(idx)}
              >
                <span>{item.label}</span>
                {idx > 0 && <span className="tier-discount-badge">-{Math.round((1 - item.s / baseBand.s) * 100)}%</span>}
              </button>
            ))}
          </div>

          {/* Interactive Range Slider */}
          <div className="calc-slider-block">
            <div className="slider-label-row">
              <span className="slider-heading">Estimated Monthly Minutes:</span>
              <span className="slider-live-value">{minutesInput.toLocaleString('en-IN')} min</span>
            </div>

            <input
              type="range"
              min="10000"
              max="1200000"
              step="10000"
              value={minutesInput}
              onChange={handleSliderChange}
              className="calc-range-input"
            />

            <div className="slider-scale-markers">
              <span>10K min</span>
              <span>250K min</span>
              <span>500K min</span>
              <span>1M+ min</span>
            </div>
          </div>

          {/* Rate Cards Grid */}
          <div className="calc-results-grid">
            {/* Silver Rate */}
            <div className="calc-result-box box-silver">
              <div className="box-tier-name">Silver HD</div>
              <div className="box-rate-val">
                ₹{currentBand.s.toFixed(2)}
                <small>/min</small>
              </div>
              <div className="box-total-est">Est: ₹{monthlySpendSilver}/mo</div>
            </div>

            {/* Gold Rate */}
            <div className="calc-result-box box-gold">
              <div className="box-tier-name">Gold Indic</div>
              <div className="box-rate-val">
                ₹{currentBand.g.toFixed(2)}
                <small>/min</small>
              </div>
              <div className="box-total-est">37 Indic Dialects</div>
            </div>

            {/* Platinum Rate */}
            <div className="calc-result-box box-platinum">
              <div className="box-tier-name">Platinum Studio</div>
              <div className="box-rate-val">
                ₹{currentBand.p.toFixed(2)}
                <small>/min</small>
              </div>
              <div className="box-total-est">47 Studio Voices</div>
            </div>

            {/* Savings Highlight */}
            <div className="calc-result-box box-savings">
              <div className="box-tier-name">Volume Savings</div>
              <div className="box-rate-val text-good">
                {savingsPct > 0 ? `${savingsPct}%` : 'Standard'}
              </div>
              <div className="box-total-est text-good">
                {savingsPct > 0 ? `Save ~₹${monthlyRupeeSavings}/mo` : 'Entry Level'}
              </div>
            </div>
          </div>

          {/* Info Banner at Bottom */}
          <div className="calc-band-footer">
            <div className="footer-meta-pill">
              <b>Active Tier:</b> {currentBand.band}
            </div>
            <div className="footer-meta-pill">
              <PhoneCall size={14} className="text-brand" />
              <span>Supports up to <b>{currentBand.callsEst}</b></span>
            </div>
            <div className="footer-meta-note">
              Rates exclude GST · Billed by the second from minute one
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
