'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, Flame, Sparkles, Trophy } from 'lucide-react';
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
          background: '#E5DFD0',
          color: '#0A0A0A',
          padding: '40px 40px 60px',
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

        {/* Wide Framed Card to fill left and right horizontal space */}
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            width: '100%',
            background: '#ffffff',
            border: '2.5px solid #0A0A0A',
            borderRadius: '24px',
            padding: '50px 48px 44px',
            boxShadow: '3px 3px 0px #0A0A0A',
            position: 'relative',
            zIndex: 2,
            boxSizing: 'border-box',
          }}
        >
          {/* Top Bar with Status and Quick Metrics */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              borderBottom: '1.5px solid rgba(10, 10, 10, 0.1)',
              paddingBottom: '20px',
              marginBottom: '36px',
            }}
          >
            {/* Live Admissions Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#E5DFD0',
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
              <span>COHORT ADMISSIONS OPEN · 2026</span>
            </div>

            {/* Quick Guarantees / Highlights across the width */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                fontFamily: "var(--ff-mono, monospace)",
                fontSize: '11.5px',
                fontWeight: 800,
                color: '#444444',
                textTransform: 'uppercase',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={14} color="#6D28FF" /> 30+ Live Projects
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={14} color="#6D28FF" /> 100% Placement Support
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={14} color="#6D28FF" /> Zero Theory Slides
              </span>
            </div>
          </div>

          {/* Main 2-Column / Split Layout filling horizontal space */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: '40px',
              alignItems: 'center',
            }}
            className="final-cta-grid"
          >
            {/* Left: Bold Stacked Headline */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  margin: '0 0 14px',
                  color: '#0A0A0A',
                }}
              >
                READY TO <br />
                ACTUALLY DO <br />
                <span
                  style={{
                    background: '#6D28FF',
                    color: '#ffffff',
                    padding: '3px 20px',
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
            </div>

            {/* Right: Subtitle, Action Buttons, and Annotation */}
            <div>
              <p
                style={{
                  fontSize: 'clamp(15px, 1.2vw, 17.5px)',
                  color: '#444444',
                  lineHeight: 1.55,
                  margin: '0 0 24px',
                  fontWeight: 500,
                }}
              >
                Deploy real ad budgets on Meta & Google, execute growth funnels, and build a verified hiring portfolio that speaks for itself.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '18px' }}>
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
                    padding: '14px 34px',
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontWeight: 900,
                    fontSize: '14px',
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
                  whileHover={{ y: -2, x: -2, boxShadow: '4px 4px 0px #0A0A0A', background: '#F8F6F0' }}
                  whileTap={{ y: 0, x: 0, boxShadow: '2px 2px 0px #0A0A0A' }}
                  onClick={() => setModalOpen(true)}
                  style={{
                    background: '#ffffff',
                    color: '#0A0A0A',
                    border: '2.5px solid #0A0A0A',
                    borderRadius: '999px',
                    padding: '14px 30px',
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontWeight: 900,
                    fontSize: '14px',
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
                  <Calendar size={15} color="#6D28FF" />
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
                  Admissions reviewed on a rolling basis.
                </span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 900px) {
            .final-cta-grid {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
