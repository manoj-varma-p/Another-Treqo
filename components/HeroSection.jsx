'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowUpRight, MessageCircle } from 'lucide-react';
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
              RIGHT: ONE Single Eye-Catching Notification Message
          ══════════════════════════════════════════════════ */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Link
              href="/how-it-works"
              style={{ textDecoration: 'none', color: 'inherit', width: '100%', maxWidth: '480px', display: 'block' }}
            >
              <motion.div
                initial={{ opacity: 0, x: 70, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: -6, y: -4, boxShadow: '10px 10px 0px #6D28FF' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: '#ffffff',
                  border: '3px solid #0A0A0A',
                  borderRadius: '24px',
                  padding: '28px 28px',
                  boxShadow: '6px 6px 0px #0A0A0A',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s ease',
                  position: 'relative',
                }}
              >
                {/* Notification Top Meta */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Avatar with Live Indicator */}
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                        alt="Lokesh Dama"
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '14px',
                          border: '2px solid #0A0A0A',
                          objectFit: 'cover',
                        }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '-2px',
                          right: '-2px',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: '#22C55E',
                          border: '2px solid #ffffff',
                        }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '16px', fontWeight: 900, color: '#0A0A0A' }}>
                          Lokesh Dama
                        </span>
                        <span
                          style={{
                            background: '#6D28FF18',
                            color: '#6D28FF',
                            border: '1px solid #6D28FF',
                            borderRadius: '4px',
                            padding: '1px 6px',
                            fontSize: '10px',
                            fontWeight: 900,
                            fontFamily: "var(--ff-mono, monospace)",
                          }}
                        >
                          FOUNDER @ TAC
                        </span>
                      </div>
                      <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", color: '#777777', fontWeight: 700 }}>
                        Just now · Live Ping 🟢
                      </span>
                    </div>
                  </div>

                  <span
                    style={{
                      background: '#22C55E',
                      color: '#ffffff',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontSize: '10px',
                      fontWeight: 900,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      letterSpacing: '0.06em',
                      border: '1.5px solid #0A0A0A',
                    }}
                  >
                    NEW
                  </span>
                </div>

                {/* Message Body Content */}
                <div
                  style={{
                    background: '#F3F0E7',
                    border: '1.5px solid #0A0A0A',
                    borderRadius: '16px',
                    padding: '16px 18px',
                    marginBottom: '18px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '14.5px',
                      color: '#0A0A0A',
                      lineHeight: 1.5,
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    “Curious how our students manage <span style={{ color: '#6D28FF', fontWeight: 900 }}>₹50k live ad spend</span>, get weekly founder teardowns, and land high-paying roles?”
                  </p>
                </div>

                {/* Actionable Prompt Button inside the Message */}
                <div
                  style={{
                    background: '#6D28FF',
                    color: '#ffffff',
                    border: '2px solid #0A0A0A',
                    borderRadius: '14px',
                    padding: '12px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '3px 3px 0px #0A0A0A',
                    fontWeight: 900,
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: '14px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span>See How It Works [Interactive]</span>
                  <ArrowRight size={18} />
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