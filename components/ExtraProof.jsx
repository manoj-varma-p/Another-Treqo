'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ExtraProof() {
  const certs = ['Google', 'Meta', 'HubSpot', 'SEMrush', 'TREQO'];

  return (
    <section
      id="extra-proof"
      data-stage="EXTRA_PROOF"
      style={{
        background: '#F3F0E7',
        color: '#0A0A0A',
        padding: '60px clamp(20px, 4vw, 56px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        {/* ── EYEBROW ── */}
        <div style={{ marginBottom: '14px' }}>
          <span
            style={{
              fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#666666',
              display: 'inline-block',
            }}
          >
            EXTRA PROOF
          </span>
        </div>

        {/* ── DUAL-TONE STACKED HEADING ── */}
        <div style={{ marginBottom: '28px' }}>
          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            <span
              style={{
                color: 'rgba(10, 10, 10, 0.18)',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              YES, YOU&apos;LL GET
            </span>
            <span
              style={{
                color: '#6D28FF',
                display: 'block',
                textShadow: '2px 2px 0px rgba(10, 10, 10, 0.1)',
              }}
            >
              CERTIFICATIONS.
            </span>
          </h2>
        </div>

        {/* ── 5 CERTIFICATION BADGES ROW ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          {certs.map((c, i) => (
            <motion.div
              key={c}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: '#ffffff',
                color: '#0A0A0A',
                border: '2.5px solid #0A0A0A',
                borderRadius: '999px',
                padding: '12px clamp(18px, 2.5vw, 28px)',
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(15px, 1.3vw, 18px)',
                fontWeight: 900,
                boxShadow: '3px 3px 0px #0A0A0A',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                userSelect: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#6D28FF';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.boxShadow = '4px 4px 0px #0A0A0A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#0A0A0A';
                e.currentTarget.style.boxShadow = '3px 3px 0px #0A0A0A';
              }}
            >
              {c}
            </motion.div>
          ))}
        </div>

        {/* ── NICE TO HAVE ── */}
        <p
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontStyle: 'italic',
            fontSize: '17px',
            color: '#666666',
            margin: '0 0 10px',
            fontWeight: 500,
          }}
        >
          Nice to have.
        </p>

        {/* ── PUNCHLINE ── */}
        <h3
          style={{
            fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
            fontSize: 'clamp(2.2rem, 4.4vw, 3.8rem)',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            textTransform: 'uppercase',
            color: '#0A0A0A',
            margin: 0,
          }}
        >
          THE REAL FLEX IS THE WORK.
        </h3>

      </div>
    </section>
  );
}
