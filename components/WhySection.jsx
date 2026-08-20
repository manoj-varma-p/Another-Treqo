'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { DoodleBadge } from './Doodles';

export default function WhySection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const cards = [
    {
      num: '01',
      tag: 'EXECUTION PROOF',
      shortTitle: '0 → 1 Execution',
      title: '0 → 1',
      desc: "Don't leave with just a certificate. By the time you're done, you should have work you can actually put your name on.",
      quote: 'Your resume says you learned marketing. Your portfolio should prove it.',
      badge: '30+ Live Campaigns',
      highlights: [
        { label: '30+ LIVE CAMPAIGNS', val: 'Not classroom exercises.' },
        { label: 'REAL MONEY', val: 'Work with actual budgets.' },
        { label: 'REAL RESULTS', val: 'Numbers you can show.' },
        { label: 'REAL PROOF', val: 'Something better than “I completed a course.”' }
      ]
    },
    {
      num: '02',
      tag: 'STRATEGY FIRST',
      shortTitle: 'Strategy First',
      title: 'Tools get you started. Thinking takes you further.',
      desc: 'Anyone can learn the tool. Good marketers know how to use it.',
      quote: 'Tools can be replaced. Good marketers can’t.',
      badge: 'Strategic Thinking',
      highlights: [
        { label: 'NO TOOL COLLECTING', val: "You don't need 20 tools on your resume." },
        { label: 'NO BUTTON PUSHING', val: "Knowing where to click isn't marketing." },
        { label: 'REAL THINKING', val: "Know what you're doing and why." },
        { label: 'GOOD MARKETERS', val: 'Think first. Execute second.' }
      ]
    },
    {
      num: '03',
      tag: 'DAY 1 READY',
      shortTitle: 'Day 1 Ready',
      title: 'No “I’ll learn once I join.” Start solving from Day 1.',
      desc: 'Understand the problem before jumping to solutions. Take ownership and solve real problems without waiting to be spoonfed.',
      quote: "Your first day shouldn't be your first time solving problems.",
      badge: 'Day 1 Problem Solver',
      highlights: [
        { label: 'THINK LIKE A MARKETER', val: 'Understand the problem before jumping to solutions.' },
        { label: 'TAKE OWNERSHIP', val: "Don't wait to be told every next step." },
        { label: 'FIGURE IT OUT', val: "Don't freeze when you don't have the answer. Know how to find it." }
      ]
    },
    {
      num: '04',
      tag: 'GROWTH MENTORSHIP',
      shortTitle: 'Growth Mentorship',
      title: "Learn from people who've done it.",
      desc: 'Not just teachers. People in the game.',
      quote: "Don't just learn from a curriculum. Learn from people who've lived it.",
      badge: 'People In The Game',
      highlights: [
        { label: 'REAL EXPERIENCE', val: "Learn from founders and CMOs who've built and scaled." },
        { label: 'REAL CONVERSATIONS', val: 'Ask questions. Challenge ideas. Get unstuck.' },
        { label: 'REAL FEEDBACK', val: 'Get a second opinion when it actually matters.' }
      ]
    },
    {
      num: '05',
      tag: 'PLACEMENT SUPPORT',
      shortTitle: 'Placement Support',
      title: "We don't just prepare you. We help you get hired.",
      desc: 'Because learning marketing is only half the journey.',
      quote: 'From learning marketing to landing the job.',
      badge: 'Dedicated Placement',
      highlights: [
        { label: 'JOB READY', val: 'Get your resume, portfolio and interview game ready.' },
        { label: 'HIRING ACCESS', val: 'Get opportunities with companies hiring marketing talent.' },
        { label: 'PLACEMENT SUPPORT', val: 'Get guidance through applications, interviews and the hiring process.' }
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
    <section
      id="why"
      data-stage="WHY"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#F3F0E7',
        color: '#0A0A0A',
        padding: '70px 80px',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1540px', margin: '0 auto', width: '100%' }}>

        {/* ── SECTION HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '14px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1.5px solid #6D28FF',
                color: '#6D28FF',
                padding: '6px 16px',
                borderRadius: '999px',
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                boxShadow: '2px 2px 0px rgba(109, 40, 255, 0.25)',
              }}
            >
              <Sparkles size={13} color="#6D28FF" />
              <span>THE 5 CORE PILLARS</span>
            </div>
            <DoodleBadge text="WHY CHOOSE TREQO" rotate={-1} highlight={true} />
          </div>

          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 12px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              lineHeight: 1.1,
            }}
          >
            Why Choose{' '}
            <span
              style={{
                background: '#6D28FF',
                color: '#ffffff',
                padding: '2px 14px',
                display: 'inline-block',
                border: '3px solid #0A0A0A',
                boxShadow: '4px 4px 0px #0A0A0A',
                transform: 'rotate(-1deg)',
              }}
            >
              TREQO?
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(14.5px, 1.2vw, 16.5px)',
              color: '#555555',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            We engineered an educational system around live revenue, verifiable proof, and active founder mentorship.
          </p>
        </div>

        {/* ── 5 PILLARS BUTTON DECK ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px',
            marginBottom: '28px',
          }}
          className="pillars-nav-grid"
        >
          {cards.map((card, idx) => {
            const isActive = idx === activeIdx;
            const isParchmentBox = card.num === '02' || card.num === '05';

            return (
              <motion.button
                key={card.num}
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveIdx(idx)}
                style={{
                  background: isActive
                    ? '#6D28FF'
                    : isParchmentBox
                    ? '#F3F0E7'
                    : '#ffffff',
                  color: isActive ? '#ffffff' : '#0A0A0A',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '16px',
                  padding: '14px 12px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: isActive ? '4px 4px 0px #0A0A0A' : '2px 2px 0px #0A0A0A',
                  transform: isActive ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.18s ease',
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                    fontSize: '11px',
                    fontWeight: 900,
                    color: isActive ? '#ffffff' : '#6D28FF',
                  }}
                >
                  {card.num}
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {card.shortTitle}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* ── SHOWCASE INTERACTIVE PILLAR CARD ── */}
        <div
          style={{
            background: '#ffffff',
            border: '3px solid #0A0A0A',
            borderRadius: '28px',
            boxShadow: '10px 10px 0px #0A0A0A',
            padding: '36px clamp(24px, 4vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Progress Indicator */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '5px',
              background: '#6D28FF',
              width: `${((activeIdx + 1) / cards.length) * 100}%`,
              transition: 'width 0.35s ease',
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.85fr',
                gap: '36px',
                alignItems: 'center',
              }}
              className="pillar-card-grid"
            >
              {/* Left Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span
                    style={{
                      background: '#6D28FF',
                      color: '#ffffff',
                      fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                      fontSize: '11px',
                      fontWeight: 900,
                      padding: '4px 12px',
                      borderRadius: '6px',
                      letterSpacing: '0.08em',
                      border: '1.5px solid #0A0A0A',
                    }}
                  >
                    PILLAR {current.num}
                  </span>

                  <span
                    style={{
                      background: '#F3F0E7',
                      color: '#6D28FF',
                      border: '1.5px solid #0A0A0A',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '6px',
                    }}
                  >
                    {current.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: 'clamp(22px, 2.6vw, 32px)',
                    fontWeight: 900,
                    color: '#0A0A0A',
                    lineHeight: 1.15,
                    margin: '0 0 14px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {current.title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    color: '#444444',
                    lineHeight: 1.6,
                    margin: '0 0 20px',
                    fontWeight: 500,
                  }}
                >
                  {current.desc}
                </p>

                {/* Quote Box */}
                <div
                  style={{
                    borderLeft: '4px solid #6D28FF',
                    background: '#FAF9F8',
                    borderTop: '1px solid rgba(10, 10, 10, 0.1)',
                    borderRight: '1px solid rgba(10, 10, 10, 0.1)',
                    borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                    borderRadius: '0 12px 12px 0',
                    padding: '12px 16px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontStyle: 'italic',
                      fontSize: '14px',
                      color: '#6D28FF',
                      margin: 0,
                      lineHeight: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right: Highlights Matrix in #F3F0E7 */}
              <div
                style={{
                  background: '#F3F0E7',
                  color: '#0A0A0A',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: '6px 6px 0px #6D28FF',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontWeight: 900,
                      color: '#6D28FF',
                      letterSpacing: '0.1em',
                    }}
                  >
                    VERIFIED DELIVERABLES
                  </span>

                  <span
                    style={{
                      background: '#6D28FF',
                      color: '#ffffff',
                      fontSize: '10px',
                      fontWeight: 900,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1.5px solid #0A0A0A',
                    }}
                  >
                    {current.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {current.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        background: '#ffffff',
                        border: '1.5px solid #0A0A0A',
                        borderRadius: '12px',
                        padding: '11px 14px',
                        boxShadow: '2px 2px 0px #0A0A0A',
                      }}
                    >
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '8px',
                          background: '#0A0A0A',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <Sparkles size={13} color="#ffffff" />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span
                          style={{
                            fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                            fontSize: '11px',
                            fontWeight: 900,
                            color: '#6D28FF',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {h.label}
                        </span>
                        <span
                          style={{
                            fontSize: '13px',
                            fontWeight: 700,
                            color: '#0A0A0A',
                            lineHeight: 1.4,
                          }}
                        >
                          {h.val}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Left/Right Controls */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
                  <button
                    type="button"
                    onClick={handlePrev}
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '10px',
                      background: '#ffffff',
                      color: '#0A0A0A',
                      border: '2px solid #0A0A0A',
                      fontWeight: 800,
                      fontSize: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                    }}
                  >
                    <ArrowLeft size={14} />
                    <span>Prev</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '10px',
                      background: '#6D28FF',
                      color: '#ffffff',
                      border: '2px solid #0A0A0A',
                      fontWeight: 800,
                      fontSize: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                    }}
                  >
                    <span>Next</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .pillars-nav-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .pillar-card-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 600px) {
          .pillars-nav-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
