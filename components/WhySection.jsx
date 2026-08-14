'use client';

import { useState } from 'react';

export default function WhySection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const cards = [
    {
      num: '01',
      tag: 'EXECUTION PROOF',
      shortTitle: 'Execution Proof',
      title: '0 → 1. From Idea to First Paying Customer',
      desc: 'Not theory. Not assignments. Revenue. At TREQO, you don’t graduate with notes, you graduate with verified proof that you can launch campaigns, test hypotheses, and generate real paying customers.',
      quote: 'Tools change every 6 months. Revenue-driven execution compounds forever.',
      badge: '30+ Live Campaigns',
      highlights: [
        { label: 'Real Spend', val: 'Live Budget Execution' },
        { label: 'Hypothesis Testing', val: 'A/B & Funnel Validation' },
        { label: 'Result', val: 'First Paying Customers' },
        { label: 'Proof', val: 'Verified Performance ROI' }
      ]
    },
    {
      num: '02',
      tag: 'STRATEGY FIRST',
      shortTitle: 'Strategy First',
      title: 'Not Tools-First. Strategic Thinking-First.',
      desc: 'Companies don’t hire you for basic software buttons, they hire you for strategic thinking: growth loops, CAC-to-LTV ratio math, retention funnel psychology, and channel scaling strategy.',
      quote: 'Anyone can click ad buttons. Strategists build profitable growth engines.',
      badge: 'Funnel & Unit Economics',
      highlights: [
        { label: 'Economics', val: 'CAC to LTV Modeling' },
        { label: 'Funnel Math', val: 'TOFU → BOFU Conversion' },
        { label: 'Retention', val: 'Lifecycle & LTV Loops' },
        { label: 'Scaling', val: 'Multi-Channel Strategy' }
      ]
    },
    {
      num: '03',
      tag: 'DAY 1 READY',
      shortTitle: 'Day 1 Ready',
      title: 'Real Brand Budgets. Verified Revenue Results.',
      desc: 'Textbooks teach theory. TREQO puts you behind real marketing spend and live brand accounts, so you walk into job interviews with verified ROI case studies instead of fake resumes.',
      quote: 'The job market isn’t broken. Generic preparation is.',
      badge: 'Verified Portfolio Output',
      highlights: [
        { label: 'Live Accounts', val: 'Active Brand Budgets' },
        { label: 'Case Studies', val: 'Verified ROI Records' },
        { label: 'Interview Ready', val: 'Proof of Execution' },
        { label: 'Resume Standard', val: 'Zero Fluff Portfolio' }
      ]
    },
    {
      num: '04',
      tag: 'GROWTH MENTORSHIP',
      shortTitle: 'Growth Mentorship',
      title: '1-on-1 Teardowns by Active Growth Founders & CMOs',
      desc: 'Learn directly from leaders who scale high-growth brands daily. Receive weekly 1-on-1 campaign teardowns, pitch deck reviews, and real-time optimization feedback on your live projects.',
      quote: 'Mentorship built around live performance data, not classroom lectures.',
      badge: 'Active Founder Teardowns',
      highlights: [
        { label: '1-on-1 Reviews', val: 'Weekly Teardowns' },
        { label: 'Mentors', val: 'CMOs & Growth Founders' },
        { label: 'Feedback', val: 'Real-Time Campaign Tweaks' },
        { label: 'Pitch Prep', val: 'Deck & Strategy Audits' }
      ]
    },
    {
      num: '05',
      tag: 'PLACEMENT GUARANTEE',
      shortTitle: 'Placement Support',
      title: 'A Proof-of-Work Portfolio That Commands Top Hiring',
      desc: 'By graduation, you hold a complete proof-of-work portfolio demonstrating 30+ completed brand projects. Sit directly with hiring partners with 100% dedicated placement support.',
      quote: 'Your real-world output speaks before your resume ever does.',
      badge: '100% Placement Support',
      highlights: [
        { label: 'Portfolio', val: '30+ Brand Projects' },
        { label: 'Hiring Partners', val: 'Direct Introductions' },
        { label: 'Interviewing', val: 'High-Salary Pitching' },
        { label: 'Career Support', val: 'Dedicated Placement' }
      ]
    }
  ];

  const current = cards[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="why-light-sec" id="why" data-stage="WHY">
      <div className="wrap">
        
        {/* HEADER */}
        <div className="why-light-header">
          <span className="why-light-eyebrow">THE TREQO ADVANTAGE</span>
          <h2 className="why-light-title">
            Why Choose <span className="purple-text">TREQO?</span>
          </h2>
          <p className="why-light-deck">
            Five core pillars that separate a TREQO growth leader from a certificate collector.
          </p>
        </div>

        {/* HORIZONTAL INTERACTIVE PILLS ROW */}
        <div className="why-tabs-bar">
          {cards.map((c, i) => (
            <button
              key={i}
              type="button"
              className={`why-tab-btn ${i === activeIdx ? 'active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              <span className="tab-num">{c.num}</span>
              <span className="tab-label">{c.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* SINGLE VIEWPORT SHOWCASE CARD (LIGHT THEME) */}
        <div className="why-light-card">
          <div className="why-card-grid">
            
            {/* LEFT SIDE: DETAILS & QUOTE */}
            <div className="why-card-left">
              <div className="why-badge-row">
                <span className="why-num-pill">{current.num}</span>
                <span className="why-tag-pill">{current.tag}</span>
                <span className="why-badge-pill">{current.badge}</span>
              </div>

              <h3 className="why-card-title">{current.title}</h3>
              <p className="why-card-desc">{current.desc}</p>

              <div className="why-quote-box">
                <p className="why-quote-text">&ldquo;{current.quote}&rdquo;</p>
              </div>
            </div>

            {/* RIGHT SIDE: 2x2 HIGHLIGHTS GRID & NAV CONTROLS */}
            <div className="why-card-right">
              <div className="why-highlights-title">KEY HIGHLIGHTS</div>
              <div className="why-highlights-grid">
                {current.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="highlight-item">
                    <span className="h-label">{h.label}</span>
                    <strong className="h-val">{h.val}</strong>
                  </div>
                ))}
              </div>

              {/* CARD FOOTER CONTROLS */}
              <div className="why-card-footer">
                <div className="why-step-indicator">
                  <span className="step-current">0{activeIdx + 1}</span>
                  <span className="step-sep">/</span>
                  <span className="step-total">0{cards.length}</span>
                </div>

                <div className="why-nav-group">
                  <button type="button" className="why-nav-arrow" onClick={handlePrev} aria-label="Previous">
                    ‹
                  </button>
                  <button type="button" className="why-nav-arrow active" onClick={handleNext} aria-label="Next">
                    ›
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
