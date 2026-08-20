'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { DoodleBadge } from './Doodles';

export default function WhyTreqo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);

  const cards = [
    {
      num: '01',
      tag: 'EXECUTION PROOF',
      shortTitle: '0 → 1 Execution',
      headline: '0 → 1 Execution: Work You Can Actually Put Your Name On',
      desc: "Don't leave with just a certificate. By the time you're done, you should have work you can actually put your name on.",
      quote: 'Your resume says you learned marketing. Your portfolio should prove it.',
      badge: '30+ Live Campaigns',
      highlights: [
        { label: '30+ LIVE CAMPAIGNS', val: 'Not classroom simulations or fake exercises.' },
        { label: 'REAL AD MONEY', val: 'Manage actual ad spend and live attribution.' },
        { label: 'PROVABLE WORK', val: 'Something 100x better than “I completed a course.”' },
      ],
    },
    {
      num: '02',
      tag: 'STRATEGY FIRST',
      shortTitle: 'Strategy First',
      headline: 'Tools Get You Started. Strategic Thinking Takes You Further.',
      desc: 'Anyone can click buttons inside an ad dashboard. Elite marketers know how to construct hooks, diagnose churn, and scale retention.',
      quote: 'Tools can be replaced by AI in 6 months. Strategic marketers cannot.',
      badge: 'Strategic Thinking',
      highlights: [
        { label: 'NO TOOL COLLECTING', val: "You don't need 20 tools listed on your resume." },
        { label: 'NO BUTTON PUSHING', val: "Knowing where to click isn't performance marketing." },
        { label: 'DEEP UNIT ECONOMICS', val: "Know your CAC, LTV, and payback windows inside out." },
      ],
    },
    {
      num: '03',
      tag: 'DAY 1 READY',
      shortTitle: 'Day 1 Ready',
      headline: 'No “I’ll Learn Once I Join.” Start Solving from Day 1.',
      desc: 'Understand the problem before jumping to solutions. Take complete ownership and solve real problems without waiting to be spoonfed.',
      quote: "Your first day at a high-growth company shouldn't be your first time solving problems.",
      badge: 'Day 1 Problem Solver',
      highlights: [
        { label: 'THINK LIKE AN OPERATOR', val: 'Deconstruct marketing bottlenecks before touching ad spend.' },
        { label: 'TAKE OWNERSHIP', val: "Don't wait for your manager to tell you every next step." },
        { label: 'FIGURE IT OUT MUSCLE', val: "Don't freeze when data dips. Know how to audit and fix it." },
      ],
    },
    {
      num: '04',
      tag: 'GROWTH MENTORSHIP',
      shortTitle: 'Growth Mentorship',
      headline: 'Learn Directly From People Who Have Scaled Real Brands.',
      desc: 'Not retired professors or theoretical instructors. Active founders, CMOs, and growth leads currently driving 8-figure revenues.',
      quote: "Don't learn from a textbook written 5 years ago. Learn from active practitioners.",
      badge: 'People In The Game',
      highlights: [
        { label: 'ACTIVE FOUNDERS', val: "Learn from TAC leaders who've built and scaled digital brands." },
        { label: 'WEEKLY TEARDOWNS', val: 'Ask questions, challenge assumptions, and get unstuck fast.' },
        { label: 'TACTICAL FEEDBACK', val: 'Get brutal, candid critiques on your live campaigns.' },
      ],
    },
    {
      num: '05',
      tag: 'PLACEMENT SUPPORT',
      shortTitle: 'Placement Support',
      headline: 'We Don’t Just Train You. We Help You Land The Role.',
      desc: 'Because learning marketing is only half the battle. We build your live proof portfolio, rehearse your case interviews, and connect you to hiring partners.',
      quote: 'From learning marketing to landing a high-trajectory career.',
      badge: 'Dedicated Placement',
      highlights: [
        { label: 'LIVE PORTFOLIO', val: 'Show live dashboards, CAC numbers, and ad creatives.' },
        { label: 'HIRING PARTNER ACCESS', val: 'Direct referrals to fast-growing startups and agencies.' },
        { label: 'OFFER NEGOTIATION', val: 'Guidance through compensation, interviews, and closing offers.' },
      ],
    },
  ];

  const current = cards[activeIdx];

  // Scroll Progress Tracker for Seamless Scroll Stacking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Map scroll progress cleanly across the 5 pillars
    const rawStep = Math.floor(latest * cards.length);
    const clampedStep = Math.max(0, Math.min(rawStep, cards.length - 1));
    setActiveIdx(clampedStep);
  });

  return (
    <section
      id="transformation"
      data-stage="TRANSFORMATION"
      ref={sectionRef}
      style={{
        background: '#E5DFD0',
        color: '#0A0A0A',
        position: 'relative',
        height: '320vh', // Provides generous, smooth scroll distance
      }}
    >
      {/* ── STICKY VIEWPORT CONTAINER ── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 80px',
          overflow: 'hidden',
        }}
        className="why-sticky-container"
      >
        <div style={{ maxWidth: '1440px', width: '100%', margin: '0 auto' }}>

          {/* ── SECTION HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '10px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#ffffff',
                  border: '1.5px solid #6D28FF',
                  color: '#6D28FF',
                  padding: '4px 14px',
                  borderRadius: '999px',
                  fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  boxShadow: '2px 2px 0px rgba(109, 40, 255, 0.25)',
                }}
              >
                <Sparkles size={12} color="#6D28FF" />
                <span>THE 5 TREQO PILLARS</span>
              </div>
              <DoodleBadge text="SCROLL TO EXPLORE" rotate={2} highlight={false} />
            </div>

            <h2
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(2.2rem, 3.8vw, 3.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                textTransform: 'uppercase',
                margin: '0 0 8px',
                color: '#0A0A0A',
              }}
            >
              WHY LEARN WITH{' '}
              <span
                style={{
                  color: '#ffffff',
                  background: '#6D28FF',
                  padding: '2px 14px',
                  display: 'inline-block',
                  border: '2.5px solid #0A0A0A',
                  boxShadow: '4px 4px 0px #0A0A0A',
                  transform: 'rotate(-1deg)',
                }}
              >
                TREQO?
              </span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(14px, 1.1vw, 16px)',
                color: '#444444',
                maxWidth: '680px',
                margin: '0 auto',
                lineHeight: 1.45,
                fontWeight: 500,
              }}
            >
              We threw away standard college slide decks and rebuilt marketing education around live budgets, real ROAS targets, and proven founder execution.
            </p>
          </div>

          {/* ── UNBOXED 2-COLUMN LAYOUT (EQUAL HORIZONTAL ALIGNMENT) ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '64px',
              alignItems: 'center',
            }}
            className="why-unboxed-grid"
          >

            {/* ══════════════════════════════════════════════════
                LEFT SIDE: ACTIVE PILLAR CONTENT (Smoothly Changes on Scroll)
            ══════════════════════════════════════════════════ */}
            <div style={{ position: 'relative', minHeight: '360px', display: 'flex', alignItems: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '100%' }}
                >
                  {/* Pillar Eyebrow */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        background: '#6D28FF',
                        color: '#ffffff',
                        fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                        fontSize: '11px',
                        fontWeight: 900,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        letterSpacing: '0.08em',
                        border: '1.5px solid #0A0A0A',
                      }}
                    >
                      PILLAR {current.num}
                    </span>

                    <span
                      style={{
                        fontFamily: "var(--ff-mono, monospace)",
                        fontSize: '11px',
                        fontWeight: 900,
                        color: '#6D28FF',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {current.tag}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h3
                    style={{
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      fontSize: 'clamp(24px, 2.6vw, 36px)',
                      fontWeight: 900,
                      color: '#0A0A0A',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.15,
                      margin: 0,
                    }}
                  >
                    {current.headline}
                  </h3>

                  {/* Descriptive Body */}
                  <p
                    style={{
                      fontSize: '15.5px',
                      color: '#333333',
                      lineHeight: 1.55,
                      margin: 0,
                      fontWeight: 500,
                      maxWidth: '620px',
                    }}
                  >
                    {current.desc}
                  </p>

                  {/* Quote Block */}
                  <div
                    style={{
                      borderLeft: '3.5px solid #6D28FF',
                      paddingLeft: '16px',
                      margin: '2px 0 6px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontStyle: 'italic',
                        fontSize: '16px',
                        color: '#1A0B35',
                        lineHeight: 1.5,
                        margin: 0,
                        fontWeight: 600,
                      }}
                    >
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </div>

                  {/* 3 Key Deliverables Checklist (Unboxed & Clear) */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {current.highlights.map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#6D28FF',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <CheckCircle2 size={13} />
                        </div>

                        <div>
                          <span
                            style={{
                              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                              fontSize: '13px',
                              fontWeight: 900,
                              color: '#0A0A0A',
                              letterSpacing: '0.03em',
                              textTransform: 'uppercase',
                              marginRight: '6px',
                            }}
                          >
                            {item.label}:
                          </span>
                          <span
                            style={{
                              fontSize: '13.5px',
                              color: '#555555',
                              lineHeight: 1.4,
                              fontWeight: 500,
                            }}
                          >
                            {item.val}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ══════════════════════════════════════════════════
                RIGHT SIDE: TITLES SWITCHING ON SCROLL (Generous Space)
            ══════════════════════════════════════════════════ */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '26px',
                paddingLeft: '16px',
              }}
            >
              {cards.map((card, idx) => {
                const isActive = idx === activeIdx;

                return (
                  <div
                    key={card.num}
                    onClick={() => setActiveIdx(idx)}
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      paddingLeft: isActive ? '18px' : '0px',
                      borderLeft: isActive ? '3.5px solid #6D28FF' : '3.5px solid transparent',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    {/* Number */}
                    <span
                      style={{
                        fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                        fontSize: '15px',
                        fontWeight: 900,
                        color: isActive ? '#6D28FF' : 'rgba(10, 10, 10, 0.25)',
                        transition: 'color 0.25s ease',
                        marginTop: '2px',
                      }}
                    >
                      0{idx + 1}
                    </span>

                    {/* Title & Tag */}
                    <div>
                      <h4
                        style={{
                          fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                          fontSize: 'clamp(20px, 1.8vw, 26px)',
                          fontWeight: 900,
                          color: isActive ? '#0A0A0A' : 'rgba(10, 10, 10, 0.3)',
                          margin: '0 0 3px',
                          letterSpacing: '-0.02em',
                          textTransform: 'uppercase',
                          transition: 'color 0.25s ease',
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.color = '#0A0A0A';
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.color = 'rgba(10, 10, 10, 0.3)';
                        }}
                      >
                        {card.shortTitle}
                      </h4>

                      <span
                        style={{
                          fontSize: '11px',
                          fontFamily: "var(--ff-mono, monospace)",
                          fontWeight: 800,
                          color: isActive ? '#6D28FF' : 'rgba(10, 10, 10, 0.2)',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          transition: 'color 0.25s ease',
                        }}
                      >
                        {card.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .why-sticky-container {
            padding: 0 24px !important;
          }
          .why-unboxed-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
