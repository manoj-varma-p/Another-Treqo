'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TreqoDoodle, DoodleBadge, DoodleArrow } from './Doodles';
import ApplyModal from './ApplyModal';

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const floatingTags = [
    { label: 'META ADS', icon: '⚡', color: '#6D28FF', bg: '#ffffff', x: -130, y: -90, delay: 0 },
    { label: 'SEO 186%+', icon: '📈', color: '#6D28FF', bg: '#ffffff', x: 130, y: -80, delay: 0.3 },
    { label: 'ROAS 3.8×', icon: '🎯', color: '#6D28FF', bg: '#ffffff', x: -140, y: 30, delay: 0.6 },
    { label: '247 LEADS', icon: '🔥', color: '#6D28FF', bg: '#ffffff', x: 140, y: 40, delay: 0.9 },
    { label: 'GOOGLE ADS', icon: '🔍', color: '#6D28FF', bg: '#ffffff', x: -90, y: 120, delay: 1.2 },
    { label: 'CAMPAIGN LIVE', icon: '🟣', color: '#6D28FF', bg: '#ffffff', x: 90, y: 130, delay: 1.5 },
    { label: 'REVENUE ₹18.5k', icon: '💰', color: '#ffffff', bg: '#6D28FF', x: 0, y: -150, delay: 1.8 },
  ];

  return (
    <>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="hero"
        data-stage="HERO"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#F3F0E7',
          color: '#0A0A0A',
          padding: '105px clamp(20px, 4vw, 56px) 50px',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(rgba(10, 10, 10, 0.08) 1.2px, transparent 1.2px)`,
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1280px',
            width: '100%',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '48px',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
          className="hero-grid-layout"
        >
          {/* LEFT: Typography in #F3F0E7 & Purple */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Top Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#0A0A0A',
                  color: '#ffffff',
                  padding: '7px 16px',
                  borderRadius: '999px',
                  fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6D28FF', animation: 'pulse 1.5s infinite' }} />
                <span>TREQO · THE MARKETING SCHOOL</span>
              </div>
              <DoodleBadge text="COHORT 2026 OPEN" rotate={-2} highlight={true} />
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                fontWeight: 900,
                color: '#0A0A0A',
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                margin: '0 0 18px',
                textTransform: 'uppercase',
              }}
            >
              DON&apos;T JUST <br />
              LEARN MARKETING. <br />
              <span
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  padding: '2px 16px',
                  display: 'inline-block',
                  border: '3px solid #0A0A0A',
                  boxShadow: '6px 6px 0px #0A0A0A',
                  transform: 'rotate(-1deg)',
                }}
              >
                DO IT.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(16px, 1.35vw, 19px)',
                color: '#333333',
                lineHeight: 1.6,
                maxWidth: '580px',
                margin: '0 0 28px',
                fontWeight: 500,
              }}
            >
              Learn marketing the way founders, strategists, and growth leaders do. <br />
              <strong style={{ color: '#6D28FF', fontWeight: 800 }}>30+ live projects</strong>, <strong style={{ color: '#0A0A0A', fontWeight: 800 }}>100% placement support</strong>, and a training model built around real revenue — not theory.
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setModalOpen(true)}
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '18px 40px',
                  fontWeight: 900,
                  fontSize: '15px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
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
                <span>Apply Now</span>
                <ArrowRight size={19} />
              </button>

              <a
                href="#transformation"
                style={{
                  background: '#ffffff',
                  color: '#0A0A0A',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '18px 32px',
                  fontWeight: 800,
                  fontSize: '15px',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: '5px 5px 0px #0A0A0A',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '7px 7px 0px #0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '5px 5px 0px #0A0A0A';
                }}
              >
                <span>See How It Works</span>
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Handwritten Note Annotation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 24 }}>
              <DoodleArrow direction="right" color="#6D28FF" size={34} />
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: '#6D28FF',
                }}
              >
                &ldquo;Your future portfolio is judging you.&rdquo;
              </span>
            </div>
          </div>

          {/* RIGHT: Floating Marketing Universe in #F3F0E7 */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '460px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Central Doodle Character */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', zIndex: 10 }}
            >
              <TreqoDoodle state="confused" size={190} />
            </motion.div>

            {/* Orbiting Floating Pills */}
            {floatingTags.map((item, idx) => (
              <motion.div
                key={idx}
                animate={{
                  x: [item.x, item.x + (idx % 2 === 0 ? 10 : -10), item.x],
                  y: [item.y, item.y + (idx % 2 === 0 ? -12 : 12), item.y],
                  rotate: [idx % 2 === 0 ? -3 : 3, idx % 2 === 0 ? 3 : -3, idx % 2 === 0 ? -3 : 3],
                }}
                transition={{
                  duration: 4 + (idx % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: item.delay,
                }}
                style={{
                  position: 'absolute',
                  background: item.bg,
                  color: item.color,
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '14px',
                  padding: '10px 18px',
                  fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                  fontSize: '13px',
                  fontWeight: 900,
                  boxShadow: '4px 4px 0px #0A0A0A',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  whiteSpace: 'nowrap',
                  zIndex: 12,
                  pointerEvents: 'none',
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </>
  );
}
