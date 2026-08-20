'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Clock,
  ArrowUpRight,
  TrendingUp,
  Flame,
  Bookmark,
} from 'lucide-react';
import { DoodleBadge, DoodleArrow } from './Doodles';

export default function HeroSection() {
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
            gridTemplateColumns: '1.15fr 0.85fr',
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
              RIGHT: Featured High-Engagement Blog Essay Card
          ══════════════════════════════════════════════════ */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>

            {/* Floating Trending Sticker */}
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-18px',
                right: '10px',
                zIndex: 30,
                background: '#FFE600',
                color: '#0A0A0A',
                border: '2px solid #0A0A0A',
                borderRadius: '10px',
                padding: '6px 14px',
                fontFamily: "var(--ff-mono, monospace)",
                fontSize: '11px',
                fontWeight: 900,
                boxShadow: '3px 3px 0px #0A0A0A',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                pointerEvents: 'none',
              }}
            >
              <Flame size={14} color="#EA580C" />
              <span>MUST-READ ESSAY</span>
            </motion.div>

            {/* The Main Clickable Blog Teaser Card */}
            <Link
              href="/how-it-works"
              style={{ textDecoration: 'none', color: 'inherit', width: '100%', maxWidth: '490px', display: 'block' }}
            >
              <motion.div
                whileHover={{ y: -8, boxShadow: '14px 14px 0px #6D28FF' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: '#ffffff',
                  border: '3.5px solid #0A0A0A',
                  borderRadius: '26px',
                  padding: '30px 28px',
                  boxShadow: '9px 9px 0px #0A0A0A',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                }}
              >
                {/* Blog Category & Reading Time Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#6D28FF',
                      color: '#ffffff',
                      borderRadius: '8px',
                      padding: '4px 12px',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontSize: '11px',
                      fontWeight: 900,
                      letterSpacing: '0.06em',
                      border: '1.5px solid #0A0A0A',
                    }}
                  >
                    <BookOpen size={13} />
                    <span>FOUNDER ESSAY</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#666666', fontSize: '11.5px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 700 }}>
                    <Clock size={13} />
                    <span>4 MIN READ</span>
                  </div>
                </div>

                {/* Blog Headline */}
                <h3
                  style={{
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: 'clamp(22px, 2.3vw, 28px)',
                    fontWeight: 900,
                    color: '#0A0A0A',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.18,
                    margin: '0 0 12px',
                    textTransform: 'uppercase',
                  }}
                >
                  How Treqo Actually Works: <span style={{ color: '#6D28FF' }}>The Death of Marketing Theory</span>
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: '14px',
                    color: '#444444',
                    lineHeight: 1.55,
                    margin: '0 0 20px',
                    fontWeight: 500,
                  }}
                >
                  We spent 7 years running performance agencies. Here is the unfiltered blueprint of how our students manage ₹50k live ad spend, fix unit economics, and build proof that gets them hired.
                </p>

                {/* Author Info & Read CTA Row */}
                <div
                  style={{
                    borderTop: '2px solid rgba(10,10,10,0.08)',
                    paddingTop: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  {/* Author Avatar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                      alt="Lokesh Dama"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        border: '1.5px solid #0A0A0A',
                        objectFit: 'cover',
                      }}
                    />
                    <div>
                      <div style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '13px', fontWeight: 900, color: '#0A0A0A' }}>
                        Lokesh Dama
                      </div>
                      <div style={{ fontSize: '10.5px', fontFamily: "var(--ff-mono, monospace)", color: '#777777', fontWeight: 600 }}>
                        Founder @ TAC
                      </div>
                    </div>
                  </div>

                  {/* Read Article Pill */}
                  <div
                    style={{
                      background: '#0A0A0A',
                      color: '#ffffff',
                      borderRadius: '10px',
                      padding: '8px 16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      fontSize: '12.5px',
                      fontWeight: 900,
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      boxShadow: '3px 3px 0px #6D28FF',
                    }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
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