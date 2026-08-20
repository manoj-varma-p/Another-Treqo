'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  CheckCircle2,
  Bell,
  MessageSquare,
  DollarSign,
  Play,
  Flame,
  MousePointer,
} from 'lucide-react';
import { DoodleBadge, DoodleArrow } from './Doodles';

export default function HeroSection() {
  const [activeHover, setActiveHover] = useState(null);

  const notifications = [
    {
      id: 1,
      type: 'founder',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      name: 'Lokesh Dama',
      role: 'Founder @ TAC',
      time: 'Just now',
      tag: 'DIRECT PING',
      message: '“Stop watching 40-hour lecture slides. We loaded ₹50k live ad spend into your dashboard. Ready to see how you manage it?”',
      badgeColor: '#6D28FF',
      actionText: 'See How It Works',
    },
    {
      id: 2,
      type: 'metric',
      icon: TrendingUp,
      name: 'TREQO Live Attribution Engine',
      role: 'Real Spend Tracker',
      time: '2m ago',
      tag: 'REVENUE VERIFIED',
      message: 'Campaign scaled past 4.2x ROAS with ₹18,490 verified revenue generated.',
      badgeColor: '#16a34a',
      stats: [
        { label: 'ROAS', val: '4.2x 🚀' },
        { label: 'Spend', val: '₹12.4k' },
        { label: 'Revenue', val: '₹18.5k 💰' },
      ],
    },
    {
      id: 3,
      type: 'prompt',
      icon: Sparkles,
      name: 'Interactive Simulator',
      role: '4-Phase Operator Walkthrough',
      time: 'Click to launch',
      tag: 'NEW EXPERIENCE',
      message: 'Tap here to simulate how a complete beginner transforms into a hired performance operator.',
      badgeColor: '#6D28FF',
      highlight: true,
    },
  ];

  return (
    <>
      <section
        style={{
          background: '#E5DFD0',
          color: '#0A0A0A',
          padding: '110px 80px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Background Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(10, 10, 10, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(10, 10, 10, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: '1540px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '56px',
            alignItems: 'center',
          }}
          className="hero-grid-layout"
        >
          {/* ══════════════════════════════════════════════════
              LEFT: Hero Copy & Value Proposition
          ══════════════════════════════════════════════════ */}
          <div>
            {/* Live Admissions Chip */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#ffffff',
                  border: '1.5px solid #0A0A0A',
                  color: '#0A0A0A',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  boxShadow: '2px 2px 0px #0A0A0A',
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 8px #22C55E',
                  }}
                />
                <span>COHORT ADMISSIONS OPEN · 2026</span>
              </div>
              <DoodleBadge text="ZERO SLIDES · 100% PROOF" rotate={-2} highlight={false} />
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(3rem, 5.5vw, 5.2rem)',
                fontWeight: 900,
                color: '#0A0A0A',
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                margin: '0 0 20px',
                textTransform: 'uppercase',
              }}
            >
              DON&apos;T JUST <br />
              LEARN MARKETING. <br />
              <span
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  padding: '4px 20px',
                  display: 'inline-block',
                  border: '3.5px solid #0A0A0A',
                  boxShadow: '7px 7px 0px #0A0A0A',
                  transform: 'rotate(-1deg)',
                  marginTop: '6px',
                }}
              >
                DO IT.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                color: '#2A2A2A',
                lineHeight: 1.55,
                maxWidth: '720px',
                margin: '0 0 32px',
                fontWeight: 500,
              }}
            >
              Learn marketing the way founders, strategists, and growth leaders do. <br />
              <strong style={{ color: '#6D28FF', fontWeight: 900 }}>30+ live projects</strong>, <strong style={{ color: '#0A0A0A', fontWeight: 900 }}>100% placement support</strong>, and a training model built around real revenue — not theory.
            </p>

            {/* Primary CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                href="/how-it-works"
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '20px 48px',
                  fontWeight: 900,
                  fontSize: '16px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  boxShadow: '6px 6px 0px #0A0A0A',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '8px 8px 0px #0A0A0A';
                  e.currentTarget.style.background = '#581bd6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '6px 6px 0px #0A0A0A';
                  e.currentTarget.style.background = '#6D28FF';
                }}
              >
                <span>See How It Works</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Handwritten Note Annotation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 26 }}>
              <DoodleArrow direction="right" color="#6D28FF" size={36} />
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#6D28FF',
                }}
              >
                &ldquo;Your future portfolio is judging you.&rdquo;
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════
              RIGHT: Attention-Grabbing Notification / Message Stream
          ══════════════════════════════════════════════════ */}
          <div style={{ position: 'relative', width: '100%' }}>

            {/* Top Stream Status Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
                padding: '0 8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#6D28FF',
                    boxShadow: '0 0 10px #6D28FF',
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                    fontSize: '11.5px',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#0A0A0A',
                  }}
                >
                  LIVE SYSTEM INBOX · (3 NEW)
                </span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '11px',
                  fontFamily: "var(--ff-mono, monospace)",
                  fontWeight: 800,
                  color: '#6D28FF',
                }}
              >
                <MousePointer size={12} />
                <span>TAP ANY TO EXPLORE</span>
              </div>
            </div>

            {/* Stacked Interactive Notification Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              {/* ── CARD 1: Founder Voice Direct Ping ── */}
              <Link href="/how-it-works" style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: -6, y: -2, boxShadow: '6px 6px 0px #6D28FF' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: '#ffffff',
                    border: '2.5px solid #0A0A0A',
                    borderRadius: '18px',
                    padding: '18px 20px',
                    boxShadow: '4px 4px 0px #0A0A0A',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s ease',
                    position: 'relative',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    {/* Founder Avatar with Live Dot */}
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      <img
                        src={notifications[0].avatar}
                        alt="Lokesh Dama"
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          border: '2px solid #0A0A0A',
                          objectFit: 'cover',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          right: '-2px',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: '#22C55E',
                          border: '2px solid #ffffff',
                        }}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <div>
                          <span style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '14px', fontWeight: 900, color: '#0A0A0A' }}>
                            {notifications[0].name}
                          </span>
                          <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", color: '#6D28FF', fontWeight: 800, marginLeft: '6px' }}>
                            {notifications[0].role}
                          </span>
                        </div>
                        <span style={{ fontSize: '10.5px', fontFamily: "var(--ff-mono, monospace)", color: '#777777', fontWeight: 700 }}>
                          {notifications[0].time}
                        </span>
                      </div>

                      <p style={{ fontSize: '13px', color: '#333333', lineHeight: 1.45, margin: '0 0 10px', fontWeight: 500 }}>
                        {notifications[0].message}
                      </p>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: '#6D28FF',
                          color: '#ffffff',
                          border: '1.5px solid #0A0A0A',
                          borderRadius: '6px',
                          padding: '3px 10px',
                          fontSize: '11px',
                          fontWeight: 900,
                          fontFamily: "var(--ff-mono, monospace)",
                          letterSpacing: '0.04em',
                        }}
                      >
                        <span>⚡ Tap to see the system in action</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* ── CARD 2: Live System Attribution Notification ── */}
              <Link href="/how-it-works" style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: -6, y: -2, boxShadow: '6px 6px 0px #0A0A0A' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: '#FAF9F8',
                    border: '2.5px solid #0A0A0A',
                    borderRadius: '18px',
                    padding: '16px 20px',
                    boxShadow: '4px 4px 0px #0A0A0A',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '8px',
                          background: '#22C55E',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <TrendingUp size={14} />
                      </div>
                      <span style={{ fontFamily: "var(--ff-mono, monospace)", fontSize: '11.5px', fontWeight: 900, color: '#0A0A0A', textTransform: 'uppercase' }}>
                        TREQO ATTRIBUTION ENGINE
                      </span>
                    </div>

                    <span
                      style={{
                        background: '#22C55E18',
                        color: '#16a34a',
                        border: '1px solid #16a34a',
                        borderRadius: '5px',
                        padding: '1px 6px',
                        fontSize: '9.5px',
                        fontFamily: "var(--ff-mono, monospace)",
                        fontWeight: 900,
                      }}
                    >
                      LIVE PROOF
                    </span>
                  </div>

                  <p style={{ fontSize: '12.5px', color: '#444444', margin: '0 0 10px', lineHeight: 1.4, fontWeight: 500 }}>
                    Real live numbers your capstone campaign generates before graduation:
                  </p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {notifications[1].stats.map((st) => (
                      <div
                        key={st.label}
                        style={{
                          background: '#ffffff',
                          border: '1.5px solid #0A0A0A',
                          borderRadius: '8px',
                          padding: '4px 10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '11px',
                          fontFamily: "var(--ff-mono, monospace)",
                        }}
                      >
                        <span style={{ color: '#777777', fontWeight: 800 }}>{st.label}:</span>
                        <span style={{ color: '#0A0A0A', fontWeight: 900 }}>{st.val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Link>

              {/* ── CARD 3: Master Interactive Walkthrough Trigger Card ── */}
              <Link href="/how-it-works" style={{ textDecoration: 'none', color: 'inherit' }}>
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: -8, y: -4, boxShadow: '8px 8px 0px #6D28FF' }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: '#0A0A0A',
                    color: '#ffffff',
                    border: '2.5px solid #0A0A0A',
                    borderRadius: '20px',
                    padding: '20px 22px',
                    boxShadow: '5px 5px 0px #6D28FF',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '8px',
                          background: '#6D28FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Sparkles size={14} color="#ffffff" />
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--ff-mono, monospace)",
                          fontSize: '11.5px',
                          fontWeight: 900,
                          color: '#A78BFA',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                        }}
                      >
                        STEP-BY-STEP SIMULATOR
                      </span>
                    </div>

                    <div
                      style={{
                        background: '#6D28FF',
                        color: '#ffffff',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        fontSize: '10px',
                        fontWeight: 900,
                        fontFamily: "var(--ff-mono, monospace)",
                      }}
                    >
                      INTERACTIVE
                    </div>
                  </div>

                  <h4
                    style={{
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      fontSize: '18px',
                      fontWeight: 900,
                      color: '#ffffff',
                      margin: '0 0 6px',
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                    }}
                  >
                    See How It Works: 4 Evolution Stages
                  </h4>

                  <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.7)', margin: '0 0 14px', lineHeight: 1.45, fontWeight: 500 }}>
                    Track Selection → Live Spend Engine → Founder Roasts → Capstone Job Placement.
                  </p>

                  <div
                    style={{
                      background: '#ffffff',
                      color: '#0A0A0A',
                      borderRadius: '12px',
                      padding: '10px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontWeight: 900,
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      fontSize: '13px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      boxShadow: '2px 2px 0px rgba(109, 40, 255, 0.4)',
                    }}
                  >
                    <span>Launch 60s Interactive Tour</span>
                    <ArrowRight size={16} color="#6D28FF" />
                  </div>
                </motion.div>
              </Link>

            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        @media (max-width: 1024px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}