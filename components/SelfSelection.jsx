'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DoodleBadge } from './Doodles';

export default function SelfSelection() {
  const [activeRow, setActiveRow] = useState(2); // Default active on 3rd row

  const criteria = [
    {
      id: 0,
      question: 'Want only a certificate?',
      answer: 'NOPE.',
      isMatch: false,
    },
    {
      id: 1,
      question: 'Want to avoid real projects?',
      answer: 'NOPE.',
      isMatch: false,
    },
    {
      id: 2,
      question: 'Want to actually build stuff?',
      answer: 'NOW WE\'RE TALKING.',
      isMatch: true,
    },
  ];

  return (
    <section
      id="self-selection"
      data-stage="SELF_SELECTION"
      style={{
        background: '#F3F0E7',
        color: '#0A0A0A',
        padding: '60px clamp(20px, 4vw, 56px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* ── EYEBROW / TAG ── */}
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
            SELF-SELECTION
          </span>
        </div>

        {/* ── OVERSIZED STACKED TITLE ── */}
        <div style={{ marginBottom: '36px' }}>
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
              TREQO IS
            </span>
            <span
              style={{
                color: '#6D28FF',
                display: 'block',
                textShadow: '2px 2px 0px rgba(10, 10, 10, 0.1)',
              }}
            >
              NOT FOR EVERYONE.
            </span>
          </h2>
        </div>

        {/* ── 3 INTERACTIVE FILTER PILLS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {criteria.map((item, idx) => {
            const isSelected = activeRow === idx;
            const isHighlight = item.isMatch;

            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setActiveRow(idx)}
                style={{
                  background: isHighlight
                    ? '#6D28FF'
                    : isSelected
                    ? '#0A0A0A'
                    : '#ffffff',
                  color: isHighlight
                    ? '#ffffff'
                    : isSelected
                    ? '#ffffff'
                    : '#0A0A0A',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '20px clamp(20px, 3.5vw, 36px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: isHighlight
                    ? '5px 5px 0px #0A0A0A'
                    : isSelected
                    ? '4px 4px 0px #6D28FF'
                    : '3px 3px 0px #0A0A0A',
                  transition: 'background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
                  userSelect: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: 'clamp(16px, 1.4vw, 20px)',
                    fontWeight: 900,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.question}
                </span>

                <span
                  style={{
                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                    fontSize: 'clamp(15px, 1.3vw, 19px)',
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.answer}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
