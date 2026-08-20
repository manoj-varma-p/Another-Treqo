'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ApplyModal from './ApplyModal';

export default function FinalCta() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="final-cta"
        style={{
          minHeight: '75vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: '#0A0A0A',
          color: '#FAF9F8',
          padding: '90px 80px 100px',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Subtle purple radial glow in background */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 70%)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
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
          {/* Eyebrow */}
          <div style={{ marginBottom: '20px' }}>
            <span
              style={{
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: '12.5px',
                fontWeight: 900,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.55)',
                display: 'inline-block',
              }}
            >
              YOUR TURN
            </span>
          </div>

          {/* 3-Line Stacked Headline (Centered & Scaled Down) */}
          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              margin: '0 0 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#777777' }}>
              READY TO
            </span>
            <span style={{ color: '#E0E0E0' }}>
              ACTUALLY DO
            </span>
            <span
              style={{
                color: '#8B5CF6',
                textShadow: '0 0 40px rgba(139, 92, 246, 0.45)',
              }}
            >
              MARKETING?
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(16px, 1.4vw, 20px)',
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '560px',
              margin: '0 auto 36px',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            Your first campaign starts here.
          </p>

          {/* Centered CTA Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setModalOpen(true)}
            style={{
              background: '#8B5CF6',
              color: '#0A0A0A',
              border: 'none',
              borderRadius: '999px',
              padding: '18px 44px',
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontWeight: 900,
              fontSize: '16px',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.35)',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#A78BFA';
              e.currentTarget.style.boxShadow = '0 0 45px rgba(167, 139, 250, 0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#8B5CF6';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.35)';
            }}
          >
            <span>APPLY TO TREQO</span>
            <span style={{ fontSize: '18px', fontWeight: 900 }}>→</span>
          </motion.button>
        </div>
      </section>
    </>
  );
}
