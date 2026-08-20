'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Play,
  Zap,
  TrendingUp,
  Target,
  CheckCircle2,
  MousePointer,
  Flame,
} from 'lucide-react';
import { DoodleBadge, DoodleArrow } from './Doodles';

export default function HeroSection() {
  const previewStages = [
    { num: '01', label: 'Pick Track', icon: Target, active: true },
    { num: '02', label: '₹50k Spend', icon: Zap, active: true },
    { num: '03', label: 'TAC Roasts', icon: Flame, active: true },
    { num: '04', label: 'Placement', icon: CheckCircle2, active: true },
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
          minHeight: '640px',
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
            gap: '52px',
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
              RIGHT: High-CTR Interactive Simulation Test-Drive Console
          ══════════════════════════════════════════════════ */}
          <div style={{ position: 'relative', width: '100%' }}>

            {/* Floating Top Sticker: 100% Interactive Tour */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [-3, 1, -3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-20px',
                right: '15px',
                zIndex: 30,
                background: '#FFE600',
                color: '#0A0A0A',
                border: '2px solid #0A0A0A',
                borderRadius: '10px',
                padding: '6px 14px',
                fontFamily: "var(--ff-mono, monospace)",
                fontSize: '11px',
                fontWeight: 900,
                boxShadow: '4px 4px 0px #0A0A0A',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                pointerEvents: 'none',
              }}
            >
              <Sparkles size={13} color="#0A0A0A" />
              <span>TEST-DRIVE IN 60 SECONDS</span>
            </motion.div>

            {/* Floating Bottom-Left Pill: Zero Sign-Up Needed */}
            <motion.div
              animate={{ y: [0, 6, 0], rotate: [2, -2, 2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: '-16px',
                left: '-15px',
                zIndex: 30,
                background: '#ffffff',
                border: '2px solid #0A0A0A',
                borderRadius: '10px',
                padding: '6px 14px',
                fontFamily: "var(--ff-mono, monospace)",
                fontSize: '11px',
                fontWeight: 900,
                boxShadow: '4px 4px 0px #6D28FF',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                pointerEvents: 'none',
              }}
            >
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }} />
              <span style={{ color: '#0A0A0A' }}>Interactive Simulation Ready</span>
            </motion.div>

            {/* The Main Clickable Simulator Console Card */}
            <Link
              href="/how-it-works"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: '14px 14px 0px #6D28FF' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: '#ffffff',
                  border: '3.5px solid #0A0A0A',
                  borderRadius: '28px',
                  padding: '30px 28px',
                  boxShadow: '10px 10px 0px #0A0A0A',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                }}
              >
                {/* Window Top Bar with macOS dots */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: '2px solid rgba(10,10,10,0.08)',
                    paddingBottom: '14px',
                    marginBottom: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FF5F56', border: '1px solid #E0443E' }} />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FFBD2E', border: '1px solid #DEA123' }} />
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27C93F', border: '1px solid #1AAB29' }} />
                    <span
                      style={{
                        fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                        fontSize: '11.5px',
                        fontWeight: 900,
                        color: '#555555',
                        marginLeft: '8px',
                      }}
                    >
                      treqo_operator_system.exe
                    </span>
                  </div>

                  <div
                    style={{
                      background: '#22C55E18',
                      color: '#16a34a',
                      border: '1px solid #16a34a',
                      borderRadius: '6px',
                      padding: '2px 8px',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontSize: '10px',
                      fontWeight: 900,
                    }}
                  >
                    ● LIVE OS
                  </div>
                </div>

                {/* Main Teaser Headline */}
                <h3
                  style={{
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: 'clamp(22px, 2.3vw, 30px)',
                    fontWeight: 900,
                    color: '#0A0A0A',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    margin: '0 0 8px',
                    textTransform: 'uppercase',
                  }}
                >
                  See How It <span style={{ color: '#6D28FF' }}>Actually Works</span>
                </h3>

                <p style={{ fontSize: '13.5px', color: '#555555', lineHeight: 1.5, margin: '0 0 20px', fontWeight: 500 }}>
                  Take a 60-second interactive test drive. Watch how you get real ad budgets, fix campaign unit economics, and build an undeniable portfolio.
                </p>

                {/* 4 Interactive Journey Stage Indicators */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '8px',
                    marginBottom: '24px',
                  }}
                >
                  {previewStages.map((st) => {
                    const StIcon = st.icon;
                    return (
                      <div
                        key={st.num}
                        style={{
                          background: '#FAF9F8',
                          border: '1.5px solid #0A0A0A',
                          borderRadius: '12px',
                          padding: '10px 8px',
                          textAlign: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--ff-mono, monospace)",
                            fontSize: '9.5px',
                            fontWeight: 900,
                            color: '#6D28FF',
                          }}
                        >
                          PHASE {st.num}
                        </span>
                        <StIcon size={16} color="#0A0A0A" />
                        <span
                          style={{
                            fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                            fontSize: '11px',
                            fontWeight: 900,
                            color: '#0A0A0A',
                            textTransform: 'uppercase',
                          }}
                        >
                          {st.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* ── THE GIANT MAGNETIC CTA BUTTON ── */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: '#0A0A0A',
                    color: '#ffffff',
                    border: '2px solid #0A0A0A',
                    borderRadius: '18px',
                    padding: '16px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '5px 5px 0px #6D28FF',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#6D28FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 12px rgba(109, 40, 255, 0.6)',
                      }}
                    >
                      <Play size={16} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                          fontSize: '14px',
                          fontWeight: 900,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: '#ffffff',
                        }}
                      >
                        Launch Interactive Simulator
                      </div>
                      <div
                        style={{
                          fontSize: '10.5px',
                          color: '#A78BFA',
                          fontFamily: "var(--ff-mono, monospace)",
                          fontWeight: 700,
                        }}
                      >
                        Tap to test drive · 60s walkthrough →
                      </div>
                    </div>
                  </div>

                  <ArrowRight size={20} color="#ffffff" />
                </motion.div>
              </motion.div>
            </Link>
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