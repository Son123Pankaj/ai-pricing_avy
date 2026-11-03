import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function BillingExplainer() {
  return (
    <section className="alt" id="billing">
      <div className="wrap">
        <div className="head">
          <h2>How billing works</h2>
          <p>
            Two meters, both usage-based. You hold a prepaid wallet and it draws down as you use the platform.
          </p>
        </div>

        <div className="bill">
          {/* Voice calls */}
          <div className="b">
            <div className="ic">
              <Phone size={22} color="#4f46e5" strokeWidth={2} />
            </div>
            <h3>Voice calls — per minute</h3>
            <p>
              Charged only on <b>connected</b> calls, at your plan's per-minute rate.
            </p>
            <div className="rows">
              <div className="row">
                <span>Unit</span>
                <b>Per minute of connected call</b>
              </div>
              <div className="row">
                <span>Minimum</span>
                <b>First 30 seconds</b>
              </div>
              <div className="row">
                <span>After that</span>
                <b>6-second increments</b>
              </div>
              <div className="row">
                <span>Unanswered / busy / failed</span>
                <b>Free</b>
              </div>
              <div className="row">
                <span>Voice Calling Rate</span>
                <b>From ₹3.00 / min (Modular) · ₹5.00 / min (Bundle)</b>
              </div>
            </div>

            <div className="ex">
              <div className="t">Example · a 2 min 42 s call on Silver Modular Plan</div>
              <table>
                <tbody>
                  <tr>
                    <td>Billable time (rounded to 6s)</td>
                    <td>2 min 42 s (2.7 min)</td>
                  </tr>
                  <tr>
                    <td>Silver Modular Rate</td>
                    <td>2.7 min × ₹3.00 / min</td>
                  </tr>
                  <tr className="tot">
                    <td>Total connected call cost</td>
                    <td>₹8.10 (Billed by the second)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Chat */}
          <div className="b">
            <div className="ic">
              <MessageSquare size={22} color="#4f46e5" strokeWidth={2} />
            </div>
            <h3>Chat — per AI reply</h3>
            <p>
              Charged per <b>reply your AI agent sends</b> — that is the only thing metered, with no per-message or per-session fee, and nothing at all once a human agent takes over. Your rate is set by the size of your knowledge base, since the agent re-reads it on every reply.
            </p>
            <div className="rows">
              <div className="row">
                <span>Unit</span>
                <b>
                  from ₹0.30 per AI reply
                  <br />
                  <span style={{ fontWeight: 500, color: 'var(--mute)' }}>
                    about ₹1.50 per minute of conversation
                  </span>
                </b>
              </div>
              <div className="row">
                <span>What is metered</span>
                <b>
                  AI replies only
                  <br />
                  <span style={{ fontWeight: 500, color: 'var(--mute)' }}>
                    no per-message or per-session fee
                  </span>
                </b>
              </div>
              <div className="row">
                <span>Replies from a human agent</span>
                <b>Free</b>
              </div>
              <div className="row">
                <span>Custom tools &amp; integrations</span>
                <b>Included</b>
              </div>
              <div className="row">
                <span>If the chat moves to voice</span>
                <b>Voice rate applies from that point</b>
              </div>
            </div>

            <div className="ex">
              <div className="t">Example · a typical 12-reply conversation</div>
              <table>
                <tbody>
                  <tr>
                    <td>AI replies</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>Rate</td>
                    <td>₹0.30 / reply</td>
                  </tr>
                  <tr className="tot">
                    <td>Conversation cost</td>
                    <td>₹3.60</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '15px' }}>
          Every charge appears line by line in your dashboard, against the call or conversation that created it —
          so the invoice can always be traced back to real usage.
        </p>
      </div>
    </section>
  );
}

