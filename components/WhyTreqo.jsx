'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { DoodleBadge } from './Doodles';

export default function StoryTransformation() {
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
      id="transformation"
      data-stage="WHY"
      style={{
        background: '#F3F0E7',
        color: '#0A0A0A',
        padding: '100px clamp(20px, 5vw, 64px)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '2px solid #0A0A0A',
        borderBottom: '2px solid #0A0A0A',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '16px' }}>
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
              <span>THE TREQO ADVANTAGE</span>
            </div>
            <DoodleBadge text="5 CORE PILLARS" rotate={1} highlight={true} />
          </div>

          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              margin: '0 0 14px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              lineHeight: 1.05,
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
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              color: '#555555',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Five core pillars that separate a TREQO growth leader from a certificate collector.
          </p>
        </div>

        {/* ── HORIZONTAL INTERACTIVE PILLS ROW ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          {cards.map((c, i) => {
            const isActive = i === activeIdx;
            return (
              <motion.button
                key={c.num}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveIdx(i)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: isActive ? '#6D28FF' : '#ffffff',
                  color: isActive ? '#ffffff' : '#0A0A0A',
                  border: '2px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  fontFamily: "var(--ff-body, 'Outfit', sans-serif)",
                  fontSize: '13px',
                  fontWeight: 800,
                  boxShadow: isActive ? '4px 4px 0px #0A0A0A' : '2px 2px 0px #0A0A0A',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                    fontSize: '10.5px',
                    fontWeight: 900,
                    opacity: isActive ? 1 : 0.6,
                    color: isActive ? '#ffffff' : '#6D28FF',
                  }}
                >
                  {c.num}
                </span>
                <span>{c.shortTitle}</span>
              </motion.button>
            );
          })}
        </div>

        {/* ── SHOWCASE CARD ── */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            background: '#ffffff',
            border: '3px solid #0A0A0A',
            borderRadius: '28px',
            boxShadow: '10px 10px 0px #0A0A0A',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Top purple accent line */}
          <div style={{ height: '5px', background: '#6D28FF' }} />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.num}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '48px clamp(24px, 4vw, 56px)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.95fr',
                gap: '48px',
                alignItems: 'center',
              }}
              className="why-card-inner-grid"
            >
              {/* LEFT SIDE: DETAILS & QUOTE */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                {/* Badges Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  <span
                    style={{
                      background: '#0A0A0A',
                      color: '#ffffff',
                      fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                      fontSize: '11px',
                      fontWeight: 900,
                      padding: '4px 10px',
                      borderRadius: '6px',
                    }}
                  >
                    PILLAR {current.num}
                  </span>
                  <span
                    style={{
                      background: '#ffffff',
                      color: '#6D28FF',
                      border: '1.5px solid #6D28FF',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontSize: '11px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {current.tag}
                  </span>
                  <DoodleBadge text={current.badge} rotate={-1} highlight={true} />
                </div>

                {/* Card Title */}
                <h3
                  style={{
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    fontWeight: 900,
                    color: '#0A0A0A',
                    lineHeight: 1.15,
                    margin: '0 0 16px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {current.title}
                </h3>

                {/* Card Description */}
                <p
                  style={{
                    fontSize: '15px',
                    color: '#444444',
                    lineHeight: 1.65,
                    margin: '0 0 24px',
                    fontWeight: 500,
                  }}
                >
                  {current.desc}
                </p>

                {/* Quote Box */}
                <div
                  style={{
                    background: '#F3F0E7',
                    borderLeft: '4px solid #6D28FF',
                    borderTop: '1.5px solid #0A0A0A',
                    borderRight: '1.5px solid #0A0A0A',
                    borderBottom: '1.5px solid #0A0A0A',
                    borderRadius: '0 14px 14px 0',
                    padding: '16px 20px',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontStyle: 'italic',
                      fontSize: '14.5px',
                      color: '#6D28FF',
                      lineHeight: 1.5,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE: 2x2 HIGHLIGHTS GRID */}
              <div
                style={{
                  background: '#F3F0E7',
                  border: '2px solid #0A0A0A',
                  borderRadius: '20px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                      fontSize: '10.5px',
                      fontWeight: 900,
                      color: '#6D28FF',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <span>⚡ KEY EXECUTION HIGHLIGHTS</span>
                  </div>

                  {/* 2x2 Highlights Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '12px',
                      marginBottom: '28px',
                    }}
                  >
                    {current.highlights.map((h, hIdx) => (
                      <motion.div
                        key={hIdx}
                        whileHover={{ translateY: -2 }}
                        style={{
                          background: '#ffffff',
                          border: '1.5px solid #0A0A0A',
                          borderRadius: '12px',
                          padding: '14px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          boxShadow: '2px 2px 0px #0A0A0A',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--ff-mono, monospace)",
                            fontSize: '10px',
                            fontWeight: 800,
                            color: '#6D28FF',
                            textTransform: 'uppercase',
                          }}
                        >
                          {h.label}
                        </span>
                        <strong
                          style={{
                            fontSize: '12.5px',
                            fontWeight: 800,
                            color: '#0A0A0A',
                            lineHeight: 1.35,
                          }}
                        >
                          {h.val}
                        </strong>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer Controls: Step Counter & Navigation */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1.5px solid rgba(10, 10, 10, 0.12)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span
                      style={{
                        fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                        fontSize: '16px',
                        fontWeight: 900,
                        color: '#6D28FF',
                      }}
                    >
                      0{activeIdx + 1}
                    </span>
                    <span style={{ fontSize: '13px', color: '#999' }}>/</span>
                    <span
                      style={{
                        fontFamily: "var(--ff-mono, monospace)",
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#666666',
                      }}
                    >
                      0{cards.length}
                    </span>
                  </div>

                  {/* Arrow Buttons */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrev}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: '#ffffff',
                        border: '2px solid #0A0A0A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '2px 2px 0px #0A0A0A',
                      }}
                      aria-label="Previous Pillar"
                    >
                      <ArrowLeft size={16} color="#0A0A0A" />
                    </motion.button>

                    <motion.button
                      type="button"
                      whileTap={{ scale: 0.9 }}
                      onClick={handleNext}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: '#6D28FF',
                        border: '2px solid #0A0A0A',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '2px 2px 0px #0A0A0A',
                      }}
                      aria-label="Next Pillar"
                    >
                      <ArrowRight size={16} color="#ffffff" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 880px) {
          .why-card-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
