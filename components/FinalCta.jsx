'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
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
          height: '100vh',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: '#E5DFD0',
          color: '#0A0A0A',
          padding: '0 40px',
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
            maxWidth: '1320px',
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
          <div style={{ marginBottom: '22px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1.5px solid #0A0A0A',
                color: '#0A0A0A',
                padding: '7px 20px',
                borderRadius: '999px',
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: '11.5px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                boxShadow: '2px 2px 0px #0A0A0A',
              }}
            >
              <div
                style={{
                  width: 7.5,
                  height: 7.5,
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
              fontSize: 'clamp(3.2rem, 6.2vw, 5.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.04,
              textTransform: 'uppercase',
              margin: '0 0 20px',
              maxWidth: '1180px',
            }}
          >
            READY TO ACTUALLY{' '}
            <span
              style={{
                background: '#6D28FF',
                color: '#ffffff',
                padding: '6px 26px',
                display: 'inline-block',
                border: '3px solid #0A0A0A',
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
              fontSize: 'clamp(17px, 1.4vw, 21px)',
              color: '#333333',
              maxWidth: '880px',
              margin: '0 auto 34px',
              fontWeight: 500,
              lineHeight: 1.55,
            }}
          >
            Deploy real budgets on Meta & Google, execute growth funnels, and build a verified hiring portfolio. Zero theory lectures.
          </p>

          {/* Centered CTA Buttons Group */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '22px' }}>
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
                padding: '18px 46px',
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontWeight: 900,
                fontSize: '15.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                boxShadow: '3px 3px 0px #0A0A0A',
                transition: 'background 0.2s',
              }}
            >
              <span>APPLY TO TREQO</span>
              <ArrowRight size={18} />
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
                padding: '18px 40px',
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontWeight: 900,
                fontSize: '15.5px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                boxShadow: '3px 3px 0px #0A0A0A',
                transition: 'all 0.2s',
              }}
            >
              <Calendar size={17} color="#6D28FF" />
              <span>BOOK A DEMO</span>
            </motion.button>
          </div>

          {/* Handwritten Annotation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <DoodleArrow direction="right" color="#6D28FF" size={30} />
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '15.5px',
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
