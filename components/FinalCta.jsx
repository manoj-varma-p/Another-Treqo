'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, Sparkles, TrendingUp, Users } from 'lucide-react';
import ApplyModal from './ApplyModal';
import { DoodleArrow } from './Doodles';

export default function FinalCta() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="final-cta"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: '#E5DFD0',
          color: '#0A0A0A',
          padding: '40px 32px 50px',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Subtle Background Grid Pattern */}
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
            maxWidth: '1240px',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Admissions Pill */}
          <div style={{ marginBottom: '16px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1.5px solid #0A0A0A',
                color: '#0A0A0A',
                padding: '5px 16px',
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
              <span>YOUR TURN · COHORT ADMISSIONS OPEN 2026</span>
            </div>
          </div>

          {/* Wide Centered Headline Spanning the Screen */}
          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2.8rem, 5.8vw, 4.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              margin: '0 0 16px',
              maxWidth: '1100px',
            }}
          >
            READY TO ACTUALLY{' '}
            <span
              style={{
                background: '#6D28FF',
                color: '#ffffff',
                padding: '4px 22px',
                display: 'inline-block',
                border: '2.5px solid #0A0A0A',
                boxShadow: '3px 3px 0px #0A0A0A',
                transform: 'rotate(-1deg)',
                marginLeft: '4px',
              }}
            >
              DO MARKETING?
            </span>
          </h2>

          {/* Wide Subtitle */}
          <p
            style={{
              fontSize: 'clamp(15px, 1.25vw, 18.5px)',
              color: '#333333',
              maxWidth: '860px',
              margin: '0 auto 20px',
              fontWeight: 500,
              lineHeight: 1.55,
            }}
          >
            Deploy real budgets on Meta & Google, execute growth funnels, and build a verified hiring portfolio. Zero theory lectures.
          </p>

          {/* Horizontal Highlight Badges to Fill Left & Right Space */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '26px',
              maxWidth: '1000px',
            }}
          >
            {[
              '30+ Live Campaigns',
              'Real Ad Spend Deployed',
              '100% Placement Track',
              'Rolling Admissions',
            ].map((badge, idx) => (
              <div
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#ffffff',
                  border: '1.5px solid #0A0A0A',
                  borderRadius: '10px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#0A0A0A',
                  boxShadow: '2px 2px 0px #0A0A0A',
                  fontFamily: "var(--ff-mono, monospace)",
                }}
              >
                <CheckCircle2 size={13} color="#6D28FF" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* Centered CTA Buttons Group */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {/* Primary Apply Button */}
            <motion.button
              whileHover={{ y: -2, x: -2, boxShadow: '4px 4px 0px #0A0A0A' }}
              whileTap={{ y: 0, x: 0, boxShadow: '2px 2px 0px #0A0A0A' }}
              onClick={() => setModalOpen(true)}
              style={{
                background: '#6D28FF',
                color: '#ffffff',
                border: '2.5px solid #0A0A0A',
                borderRadius: '999px',
                padding: '15px 38px',
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontWeight: 900,
                fontSize: '14.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '3px 3px 0px #0A0A0A',
                transition: 'background 0.2s',
              }}
            >
              <span>APPLY TO TREQO</span>
              <ArrowRight size={17} />
            </motion.button>

            {/* Secondary Book a Demo Button */}
            <motion.button
              whileHover={{ y: -2, x: -2, boxShadow: '4px 4px 0px #0A0A0A', background: '#ffffff' }}
              whileTap={{ y: 0, x: 0, boxShadow: '2px 2px 0px #0A0A0A' }}
              onClick={() => setModalOpen(true)}
              style={{
                background: '#ffffff',
                color: '#0A0A0A',
                border: '2.5px solid #0A0A0A',
                borderRadius: '999px',
                padding: '15px 32px',
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontWeight: 900,
                fontSize: '14.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '3px 3px 0px #0A0A0A',
                transition: 'all 0.2s',
              }}
            >
              <Calendar size={16} color="#6D28FF" />
              <span>BOOK A DEMO</span>
            </motion.button>
          </div>

          {/* Handwritten Annotation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <DoodleArrow direction="right" color="#6D28FF" size={26} />
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '14px',
                color: '#6D28FF',
              }}
            >
              &ldquo;Your future portfolio is judging you.&rdquo;
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
