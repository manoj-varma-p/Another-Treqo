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
  TrendingUp,
  Zap,
} from 'lucide-react';
import { DoodleBadge, DoodleArrow } from './Doodles';

export default function HeroSection() {
  const [showPop, setShowPop] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Pops in from screen bottom right after 1.5 seconds
    const timer = setTimeout(() => {
      setShowPop(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        style={{
          background: '#E5DFD0',
          color: '#0A0A0A',
          padding: '120px 80px 100px',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '660px',
          display: 'flex',
          alignItems: 'center',
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
            maxWidth: '1440px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
            width: '100%',
          }}
        >
          {/* ══════════════════════════════════════════════════
              HERO CONTENT (Clean, Focused, High-Impact)
          ══════════════════════════════════════════════════ */}
          <div style={{ maxWidth: '880px' }}>
            {/* Live Admissions Chip */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
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
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
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
                  padding: '4px 22px',
                  display: 'inline-block',
                  border: '3px solid #0A0A0A',
                  boxShadow: '3px 3px 0px #0A0A0A',
                  transform: 'rotate(-1deg)',
                  marginTop: '8px',
                }}
              >
                DO IT.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(14px, 1.1vw, 17px)',
                color: '#2A2A2A',
                lineHeight: 1.55,
                maxWidth: '680px',
                margin: '0 0 28px',
                fontWeight: 500,
              }}
            >
              Learn marketing the way founders, strategists, and growth leaders do. <br />
              <strong style={{ color: '#6D28FF', fontWeight: 900 }}>30+ live projects</strong>, <strong style={{ color: '#0A0A0A', fontWeight: 900 }}>100% placement support</strong>, and a training model built around real revenue — not theory.
            </p>

            {/* Primary CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/how-it-works" style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ y: -2, x: -2, boxShadow: '4px 4px 0px #0A0A0A' }}
                  whileTap={{ y: 0, x: 0, boxShadow: '2px 2px 0px #0A0A0A' }}
                  style={{
                    background: 'transparent',
                    color: '#0A0A0A',
                    border: '2px solid #0A0A0A',
                    borderRadius: '999px',
                    padding: '14px 36px',
                    fontWeight: 900,
                    fontSize: '13.5px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: '3px 3px 0px #0A0A0A',
                    cursor: 'pointer',
                  }}
                >
                  <span>See How It Works</span>
                  <ArrowRight size={16} />
                </motion.div>
              </Link>
            </div>

            {/* Handwritten Note Annotation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
              <DoodleArrow direction="right" color="#6D28FF" size={28} />
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: '13px',
                  color: '#6D28FF',
                }}
              >
                &ldquo;Your future portfolio is judging you.&rdquo;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FIXED BOTTOM-RIGHT RECTANGLE POP-UP
      ══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {showPop && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 80, x: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, x: 30, scale: 0.9 }}
            transition={{
              type: 'spring',
              stiffness: 220,
              damping: 20,
              mass: 0.9,
            }}
            whileHover={{ y: -2, boxShadow: '3px 3px 0px #6D28FF' }}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 9999,
              background: '#ffffff',
              border: '2px solid #0A0A0A',
              borderRadius: '14px',
              padding: '14px 18px',
              boxShadow: '2px 2px 0px #0A0A0A',
              width: 'calc(100vw - 40px)',
              maxWidth: '580px',
              transition: 'box-shadow 0.2s ease',
            }}
          >
            {/* Top Bar: Category Pill & Dismiss Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span
                  style={{
                    background: '#6D28FF',
                    color: '#ffffff',
                    fontFamily: "var(--ff-mono, monospace)",
                    fontSize: '9px',
                    fontWeight: 900,
                    padding: '2px 6px',
                    borderRadius: '5px',
                    border: '1px solid #0A0A0A',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  FOUNDER BLOG
                </span>
                <span style={{ fontSize: '10px', fontFamily: "var(--ff-mono, monospace)", color: '#777777', fontWeight: 700 }}>
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
                <X size={14} />
              </button>
            </div>

            {/* Clickable Card Body (Horizontal Split) */}
            <Link
              href="/how-it-works"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '1 1 300px' }}>
                <h4
                  style={{
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: '13.5px',
                    fontWeight: 900,
                    color: '#0A0A0A',
                    margin: '0 0 3px',
                    lineHeight: 1.22,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                  }}
                >
                  How Treqo Actually Works: The Death of Theory
                </h4>

                <p style={{ fontSize: '11.5px', color: '#555555', lineHeight: 1.35, margin: 0, fontWeight: 500 }}>
                  An unfiltered breakdown on managing ₹50k live ad spend and landing jobs.
                </p>
              </div>

              {/* Action Button */}
              <div
                style={{
                  background: '#0A0A0A',
                  color: '#ffffff',
                  border: '1.5px solid #0A0A0A',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: '11px',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  boxShadow: '2px 2px 0px #6D28FF',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>Read Breakdown</span>
                <ArrowRight size={13} />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}