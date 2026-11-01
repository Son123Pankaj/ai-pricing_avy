import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQS_DATA = [
  {
    id: 'pricing-1',
    q: 'How does pay-as-you-go pricing work?',
    a: 'You add credit to a prepaid wallet and it draws down as you use the platform — per minute of connected call, and per AI chat reply. There is no monthly minimum and no contract. When the balance runs low you get a warning in the dashboard, and you top up whenever you like.'
  },
  {
    id: 'pricing-2',
    q: 'How do the volume rates work?',
    a: 'Your rate is set by the minutes you commit to for the month. Once a band is agreed you are billed at that rate from your very first minute — you do not have to reach the volume before the discount applies.'
  },
  {
    id: 'pricing-3',
    q: 'How exactly is a call measured?',
    a: 'Only connected calls are charged. Every call has a 30-second minimum, after which it bills in 6-second increments — so a 42-second call costs 42 seconds, not a full minute. Unanswered, busy and failed calls cost nothing.'
  },
  {
    id: 'pricing-4',
    q: 'How is chat billed?',
    a: 'From ₹0.30 per reply your AI agent sends — about ₹1.50 per minute of conversation. The rate depends on the size of your knowledge base, because that is what the agent re-reads on every reply; we confirm your rate before you start. Messages your customer types are free, and so are replies sent by a human agent after a handoff. Knowledge base grounding and custom tools are included. If a chat turns into a voice call, the voice rate applies from that point on.'
  },
  {
    id: 'pricing-5',
    q: 'Is telephony included in the per-minute rate?',
    a: 'No. The rate above covers the AI agent. Your SIP trunk or DID numbers are billed separately at cost, and we are happy to quote for them or work with a provider you already use.'
  },
  {
    id: 'pricing-6',
    q: 'Can I switch plans?',
    a: 'Yes — per agent and at any time. The voice changes on the next call and nothing else does. Your agents, knowledge bases, integrations and history are untouched.'
  },
  {
    id: 'pricing-7',
    q: 'What happens if I run out of credit?',
    a: 'Calls stop until you top up. You will have seen a low-balance warning in the dashboard well before that point, and you can set the threshold that triggers it.'
  },
  {
    id: 'pricing-8',
    q: 'Is there a free trial?',
    a: 'Yes. Create an account, build an agent, make a real call and read the transcript before you add any credit.'
  },
  {
    id: 'pricing-9',
    q: 'Can I get a refund?',
    a: 'Unused credit is refundable within 7 days of a top-up. Usage already consumed is not refundable. Full terms are in our Refund & Cancellation policy.'
  }
];

export default function FaqSection() {
  // BY DEFAULT NOTHING IS OPEN (Requirement: by default open nhi hona chahiye)
  const [openIds, setOpenIds] = useState([]);

  const toggleFaq = (id) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="faq-section-block" id="faq">
      <div className="wrap">
        
        {/* Section Header */}
        <div className="faq-head-center">
          <div className="pricing-badge-pro">
            <span className="badge-dot-coral"></span>
            <span>✦ HELP &amp; FAQ</span>
          </div>
          
          <h2 className="faq-main-title">
            Frequently Asked <span className="title-coral">Questions</span>
          </h2>

          <p className="faq-lead-desc">
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="mailto:sales@avyukta.in" className="faq-link-highlight">
              Contact our team
            </a>.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid (2 questions per row/section, by default closed) */}
        <div className="faq-cards-grid">
          {FAQS_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div 
                key={item.id} 
                className={`faq-card-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-card-header"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <h3 className="faq-card-q-text">{item.q}</h3>
                  <div className="faq-chevron-pill" aria-hidden="true">
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-card-body">
                    <div className="faq-card-divider"></div>
                    <p className="faq-card-a-text">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
