'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
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
          padding: '60px 40px 60px',
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
            maxWidth: '960px',
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
                padding: '5px 14px',
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
              <span>YOUR TURN · COHORT 2026</span>
            </div>
          </div>

          {/* 3-Line Stacked Headline in Neo-Brutalist Theme */}
          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              margin: '0 0 16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#0A0A0A' }}>
              READY TO
            </span>
            <span style={{ color: '#0A0A0A' }}>
              ACTUALLY DO
            </span>
            <span
              style={{
                background: '#6D28FF',
                color: '#ffffff',
                padding: '4px 22px',
                display: 'inline-block',
                border: '2.5px solid #0A0A0A',
                boxShadow: '3px 3px 0px #0A0A0A',
                transform: 'rotate(-1deg)',
                marginTop: '6px',
              }}
            >
              MARKETING?
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 18px)',
              color: '#333333',
              maxWidth: '580px',
              margin: '0 auto 24px',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            Your first live campaign starts here. Zero theory lectures, real budgets, and verified placement support.
          </p>

          {/* CTA Buttons Group */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
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
                padding: '15px 34px',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 18 }}>
            <DoodleArrow direction="right" color="#6D28FF" size={28} />
            <span
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: '14.5px',
                color: '#6D28FF',
              }}
            >
              Admissions reviewed on a rolling basis.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
