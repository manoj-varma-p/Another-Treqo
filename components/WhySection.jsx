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
        { label: 'REAL THINKING', val: "Know what you're doing and why." }
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
      id="transformation"
      data-stage="TRANSFORMATION"
      style={{
        background: '#F3F0E7',
        color: '#0A0A0A',
        padding: '70px 80px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1540px', margin: '0 auto' }}>

        {/* ── SECTION EYEBROW & HEADLINE ── */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '12px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1.5px solid #6D28FF',
                color: '#6D28FF',
                padding: '5px 14px',
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
              <span>THE 5 TREQO PILLARS</span>
            </div>
            <DoodleBadge text="PROOF OVER THEORY" rotate={2} highlight={false} />
          </div>

          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              margin: '0 0 10px',
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
              fontSize: 'clamp(15px, 1.2vw, 17px)',
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

        {/* ── 5 INTERACTIVE PILLAR TABS ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px',
            marginBottom: '28px',
          }}
          className="pillar-tabs-row"
        >
          {cards.map((card, idx) => {
            const isActive = idx === activeIdx;
            return (
              <motion.button
                key={card.num}
                type="button"
                onClick={() => setActiveIdx(idx)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                style={{
                  background: isActive ? '#0A0A0A' : '#ffffff',
                  color: isActive ? '#ffffff' : '#0A0A0A',
                  border: '2px solid #0A0A0A',
                  borderRadius: '14px',
                  padding: '14px 16px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: isActive ? '4px 4px 0px #6D28FF' : '3px 3px 0px #0A0A0A',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                      fontSize: '11px',
                      fontWeight: 900,
                      color: isActive ? '#6D28FF' : '#666666',
                    }}
                  >
                    0{idx + 1}
                  </span>
                  {isActive && <CheckCircle2 size={14} color="#6D28FF" />}
                </div>

                <div
                  style={{
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: '13px',
                    fontWeight: 900,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.2,
                    textTransform: 'uppercase',
                    color: isActive ? '#ffffff' : '#0A0A0A',
                  }}
                >
                  {card.shortTitle}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ── SHOWCASE COMPACT PILLAR CARD ── */}
        <div
          style={{
            background: '#ffffff',
            border: '2.5px solid #0A0A0A',
            borderRadius: '24px',
            boxShadow: '8px 8px 0px #0A0A0A',
            padding: '30px clamp(20px, 3vw, 36px)',
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
              height: '4px',
              background: '#6D28FF',
              width: `${((activeIdx + 1) / cards.length) * 100}%`,
              transition: 'width 0.35s ease',
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.95fr',
                gap: '32px',
                alignItems: 'center',
                width: '100%',
              }}
              className="pillar-card-grid"
            >
              {/* Left Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                      background: '#F3F0E7',
                      color: '#6D28FF',
                      border: '1.5px solid #0A0A0A',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '6px',
                    }}
                  >
                    {current.tag}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      fontSize: 'clamp(20px, 2.2vw, 28px)',
                      fontWeight: 900,
                      color: '#0A0A0A',
                      lineHeight: 1.15,
                      margin: '0 0 10px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {current.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14.5px',
                      color: '#333333',
                      lineHeight: 1.5,
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {current.desc}
                  </p>
                </div>

                {/* Quote Box */}
                <div
                  style={{
                    borderLeft: '3.5px solid #6D28FF',
                    background: '#FAF9F8',
                    borderTop: '1px solid rgba(10, 10, 10, 0.1)',
                    borderRight: '1px solid rgba(10, 10, 10, 0.1)',
                    borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                    borderRadius: '0 10px 10px 0',
                    padding: '10px 14px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontStyle: 'italic',
                      fontSize: '13.5px',
                      color: '#6D28FF',
                      margin: 0,
                      lineHeight: 1.45,
                      fontWeight: 600,
                    }}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right: Highlights Matrix in #F3F0E7 (Exactly 3 Cards) */}
              <div
                style={{
                  background: '#F3F0E7',
                  color: '#0A0A0A',
                  border: '2px solid #0A0A0A',
                  borderRadius: '18px',
                  padding: '20px',
                  boxShadow: '5px 5px 0px #6D28FF',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      fontSize: '10.5px',
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
                      padding: '3px 9px',
                      borderRadius: '6px',
                      border: '1.5px solid #0A0A0A',
                    }}
                  >
                    {current.badge}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {current.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        background: '#ffffff',
                        border: '1.5px solid #0A0A0A',
                        borderRadius: '10px',
                        padding: '9px 12px',
                        boxShadow: '2px 2px 0px #0A0A0A',
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '6px',
                          background: '#0A0A0A',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '1px',
                        }}
                      >
                        <Sparkles size={12} color="#ffffff" />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                        <span
                          style={{
                            fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                            fontSize: '10px',
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
                            fontSize: '12.5px',
                            fontWeight: 700,
                            color: '#0A0A0A',
                            lineHeight: 1.35,
                          }}
                        >
                          {h.val}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Left/Right Controls */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={handlePrev}
                    style={{
                      flex: 1,
                      padding: '9px',
                      borderRadius: '8px',
                      background: '#ffffff',
                      color: '#0A0A0A',
                      border: '1.5px solid #0A0A0A',
                      fontWeight: 800,
                      fontSize: '11.5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                      boxShadow: '2px 2px 0px #0A0A0A',
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0A0A0A';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                      e.currentTarget.style.color = '#0A0A0A';
                    }}
                  >
                    <ArrowLeft size={13} />
                    <span>Prev</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    style={{
                      flex: 1,
                      padding: '9px',
                      borderRadius: '8px',
                      background: '#6D28FF',
                      color: '#ffffff',
                      border: '1.5px solid #0A0A0A',
                      fontWeight: 800,
                      fontSize: '11.5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 4,
                      boxShadow: '2px 2px 0px #0A0A0A',
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#581bd6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#6D28FF';
                    }}
                  >
                    <span>Next</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .pillar-tabs-row {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .pillar-card-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .pillar-tabs-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
