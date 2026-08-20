'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, TrendingUp, CheckCircle2, Play, MousePointer, Target } from 'lucide-react';
import { DoodleBadge, DoodleArrow } from './Doodles';

export default function HeroSection() {
  const [hoveredStep, setHoveredStep] = useState(0);

  const steps = [
    { num: '01', title: 'Pick Specialized Track', desc: 'Performance, SEO, or AI Creative Growth', icon: Target },
    { num: '02', title: 'Deploy Real Ad Spend', desc: 'Live Meta & Google budgets provided', icon: Zap },
    { num: '03', title: 'TAC Founder Teardowns', desc: 'Weekly live audits to scale ROAS past 4.0x', icon: TrendingUp },
    { num: '04', title: 'Capstone Revenue Proof', desc: 'Graduate with 30+ certs & job intros', icon: CheckCircle2 },
  ];

  return (
    <>
      <section
        style={{
          background: '#F3F0E7',
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
            gridTemplateColumns: '1.15fr 0.95fr',
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
              RIGHT: High-Impact Animated "See How It Works" Pop Card
          ══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: '100%',
            }}
          >
            {/* Floating Top-Left Revenue Pill */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-15px',
                zIndex: 30,
                background: '#ffffff',
                border: '2px solid #0A0A0A',
                borderRadius: '12px',
                padding: '8px 14px',
                boxShadow: '4px 4px 0px #6D28FF',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
              <span style={{ fontSize: '11px', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)", color: '#0A0A0A' }}>
                ₹18.5k Attributed Revenue
              </span>
            </motion.div>

            {/* Floating Bottom-Right ROAS Pill */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [2, -1, 2] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: '-18px',
                right: '10px',
                zIndex: 30,
                background: '#0A0A0A',
                color: '#ffffff',
                border: '2px solid #6D28FF',
                borderRadius: '12px',
                padding: '8px 14px',
                boxShadow: '4px 4px 0px #0A0A0A',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <TrendingUp size={14} color="#6D28FF" />
              <span style={{ fontSize: '11px', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)" }}>
                4.2x ROAS Scaling
              </span>
            </motion.div>

            {/* The Main Interactive Showcase Box */}
            <Link
              href="/how-it-works"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <motion.div
                whileHover={{ y: -6, boxShadow: '14px 14px 0px #6D28FF' }}
                whileTap={{ y: 0 }}
                style={{
                  background: '#ffffff',
                  border: '3.5px solid #0A0A0A',
                  borderRadius: '28px',
                  padding: '36px 32px',
                  boxShadow: '10px 10px 0px #0A0A0A',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.25s ease',
                }}
              >
                {/* Top Badge & Interactive Hint */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#F3F0E7',
                      border: '1.5px solid #0A0A0A',
                      borderRadius: '8px',
                      padding: '4px 10px',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontSize: '10.5px',
                      fontWeight: 900,
                      color: '#6D28FF',
                    }}
                  >
                    <Sparkles size={12} color="#6D28FF" />
                    <span>INTERACTIVE SYSTEM PREVIEW</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6D28FF', fontSize: '11px', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)" }}>
                    <MousePointer size={13} />
                    <span>CLICK TO LAUNCH</span>
                  </div>
                </div>

                {/* Pop Title */}
                <h3
                  style={{
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: 'clamp(24px, 2.6vw, 34px)',
                    fontWeight: 900,
                    color: '#0A0A0A',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    margin: '0 0 8px',
                    textTransform: 'uppercase',
                  }}
                >
                  See How It <span style={{ color: '#6D28FF' }}>Works</span>
                </h3>

                <p style={{ fontSize: '13.5px', color: '#555555', margin: '0 0 20px', lineHeight: 1.45, fontWeight: 500 }}>
                  Take a 4-step interactive walkthrough: from zero experience to managing real spend, getting TAC founder teardowns, and landing full-time roles.
                </p>

                {/* 4 Interactive Step Preview Tiles */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {steps.map((step, idx) => {
                    const isHov = hoveredStep === idx;
                    const StepIcon = step.icon;

                    return (
                      <div
                        key={step.num}
                        onMouseEnter={() => setHoveredStep(idx)}
                        style={{
                          background: isHov ? '#FAF9F8' : 'rgba(10,10,10,0.02)',
                          border: isHov ? '1.5px solid #6D28FF' : '1.5px solid rgba(10,10,10,0.1)',
                          borderRadius: '12px',
                          padding: '10px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'all 0.18s ease',
                          transform: isHov ? 'translateX(4px)' : 'none',
                        }}
                      >
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '8px',
                            background: isHov ? '#6D28FF' : '#0A0A0A',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            fontSize: '11px',
                            fontWeight: 900,
                            fontFamily: "var(--ff-mono, monospace)",
                            transition: 'background 0.18s ease',
                          }}
                        >
                          {step.num}
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '13px', fontWeight: 900, color: '#0A0A0A', textTransform: 'uppercase' }}>
                            {step.title}
                          </div>
                          <div style={{ fontSize: '11.5px', color: '#666666', fontWeight: 500 }}>
                            {step.desc}
                          </div>
                        </div>

                        <StepIcon size={16} color={isHov ? '#6D28FF' : '#888888'} />
                      </div>
                    );
                  })}
                </div>

                {/* Big Launch Banner Ribbon Inside Card */}
                <div
                  style={{
                    background: '#0A0A0A',
                    color: '#ffffff',
                    borderRadius: '16px',
                    padding: '14px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '4px 4px 0px #6D28FF',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#6D28FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Play size={14} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '13px', fontWeight: 900, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        Launch Walkthrough
                      </div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', fontFamily: "var(--ff-mono, monospace)" }}>
                        Interactive 4-Phase Simulation
                      </div>
                    </div>
                  </div>

                  <ArrowRight size={18} color="#ffffff" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
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