import React from 'react';

export default function CtaSection() {
  return (
    <section style={{ paddingTop: '20px' }}>
      <div className="cta">
        <h2>Start with a free trial</h2>
        <p>
          Build an agent, make a real call and read the transcript — before you add any credit.
        </p>
        <div className="r">
          <a href="https://ai.avyukta.in/" target="_blank" rel="noopener noreferrer" className="btn btn-p">
            Start Free Trial
          </a>
          <a href="mailto:sales@avyukta.in" className="btn btn-g">
            Talk to our team
          </a>
        </div>
        <div className="cta-share-container" style={{ marginTop: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 600 }}>Share Avyukta with your team:</span>
          <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap' }}>
            <a 
              href="https://api.whatsapp.com/send?text=Check%20out%20Avyukta%20IntelliCall%20-%20AI%20Voice%20Agents%2C%20Cloud%20Dialers%20%26%20VoIP%20Minutes%3A%20https%3A%2F%2Fwww.avyukta.in%2F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-share-pill"
              title="Share via WhatsApp"
              aria-label="Share via WhatsApp"
            >
              WhatsApp
            </a>
            <a 
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.avyukta.in%2F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-share-pill"
              title="Share on LinkedIn"
              aria-label="Share on LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com/intent/tweet?text=Check%20out%20Avyukta%20IntelliCall%20-%20AI%20Voice%20Agents%2C%20Cloud%20Dialers%20%26%20VoIP%20Minutes&url=https%3A%2F%2Fwww.avyukta.in%2F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-share-pill"
              title="Share on X"
              aria-label="Share on X"
            >
              X / Twitter
            </a>
            <a 
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.avyukta.in%2F" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-share-pill"
              title="Share on Facebook"
              aria-label="Share on Facebook"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

