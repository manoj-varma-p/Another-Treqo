'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Clock,
  X,
  Flame,
} from 'lucide-react';
import { DoodleBadge, DoodleArrow } from './Doodles';

export default function HeroSection() {
  const [showPop, setShowPop] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Pops in from right bottom after 1.2 seconds
    const timer = setTimeout(() => {
      setShowPop(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        style={{
          background: '#E5DFD0',
          color: '#0A0A0A',
          padding: '110px 80px 80px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '620px',
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
            gridTemplateColumns: '1.2fr 0.8fr',
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
              RIGHT BOTTOM: Clean Rectangle Pop Coming from Right Bottom
          ══════════════════════════════════════════════════ */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '300px',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
          >
            <AnimatePresence>
              {showPop && !dismissed && (
                <motion.div
                  initial={{ opacity: 0, x: 120, y: 60, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 80, y: 40, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  whileHover={{ y: -4, boxShadow: '8px 8px 0px #6D28FF' }}
                  style={{
                    background: '#ffffff',
                    border: '2.5px solid #0A0A0A',
                    borderRadius: '18px',
                    padding: '22px 24px',
                    boxShadow: '6px 6px 0px #0A0A0A',
                    width: '100%',
                    maxWidth: '420px',
                    position: 'relative',
                    transition: 'box-shadow 0.2s ease',
                  }}
                >
                  {/* Top Bar: Category & Dismiss */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          background: '#6D28FF',
                          color: '#ffffff',
                          fontFamily: "var(--ff-mono, monospace)",
                          fontSize: '10.5px',
                          fontWeight: 900,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          border: '1px solid #0A0A0A',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                        }}
                      >
                        FOUNDER BLOG
                      </span>
                      <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", color: '#666666', fontWeight: 700 }}>
                        4 MIN READ
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDismissed(true);
                      }}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#888888',
                        cursor: 'pointer',
                        padding: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      title="Dismiss"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Title */}
                  <Link href="/how-it-works" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h4
                      style={{
                        fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                        fontSize: '18px',
                        fontWeight: 900,
                        color: '#0A0A0A',
                        margin: '0 0 6px',
                        lineHeight: 1.25,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      How Treqo Actually Works: The Death of Theory
                    </h4>

                    <p style={{ fontSize: '13px', color: '#555555', lineHeight: 1.45, margin: '0 0 16px', fontWeight: 500 }}>
                      An unfiltered essay on how students manage ₹50k live ad spend and land marketing roles.
                    </p>

                    {/* Bottom CTA Pill inside Rectangle */}
                    <div
                      style={{
                        background: '#0A0A0A',
                        color: '#ffffff',
                        border: '1.5px solid #0A0A0A',
                        borderRadius: '10px',
                        padding: '10px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                        fontSize: '12.5px',
                        fontWeight: 900,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        boxShadow: '2px 2px 0px #6D28FF',
                      }}
                    >
                      <span>Read Essay Breakdown</span>
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
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