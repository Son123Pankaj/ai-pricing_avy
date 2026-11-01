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
      </div>
    </section>
  );
}

