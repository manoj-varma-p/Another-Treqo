'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TreqoDoodle, DoodleBadge } from './Doodles';
import ApplyModal from './ApplyModal';

export default function FinalCta() {
  const [modalOpen, setModalOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="final-cta"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          background: '#0A0A0A',
          color: '#FAF9F8',
          padding: '60px clamp(20px, 4vw, 56px)',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Glow ambient background in Treqo Purple */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(109, 40, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '880px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '20px' }}>
            <DoodleBadge text="FINAL ADMISSIONS CALL" highlight={true} rotate={-2} />
          </div>

          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              margin: '0 0 20px',
              textTransform: 'uppercase',
              color: '#F3F0E7',
            }}
          >
            BECOME THE MARKETER <br />
            <span
              style={{
                color: '#6D28FF',
                textShadow: '0 0 40px rgba(109, 40, 255, 0.4)',
              }}
            >
              COMPANIES FIGHT FOR.
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              color: 'rgba(243, 240, 231, 0.8)',
              maxWidth: '520px',
              margin: '0 auto 36px',
              lineHeight: 1.6,
            }}
          >
            Don&apos;t spend another 6 months collecting theoretical certificates. Build and deploy live revenue campaigns with Hyderabad&apos;s top growth leaders.
          </p>

          {/* Interactive Unfolding Portfolio Demonstration */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setPortfolioOpen(!portfolioOpen)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1.5px solid #6D28FF',
                borderRadius: '16px',
                padding: '12px 24px',
                boxShadow: '4px 4px 0px #6D28FF',
              }}
            >
              <TreqoDoodle state="holding_portfolio" size={48} />
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", color: '#ffffff', fontWeight: 800, textTransform: 'uppercase' }}>
                  Click to {portfolioOpen ? 'Close' : 'Inspect'} Portfolio
                </span>
                <strong style={{ display: 'block', fontSize: '14px', color: '#6D28FF' }}>
                  Rahul&apos;s Capstone Vault (30+ Projects)
                </strong>
              </div>
            </motion.div>

            {portfolioOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  marginTop: '16px',
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {['Meta 247 Leads', 'Google ₹42 CAC', 'SEO +186% Traffic', 'Brand 0-to-1', 'Retention CRM'].map((p, i) => (
                  <span
                    key={i}
                    style={{
                      background: '#6D28FF',
                      color: '#ffffff',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontSize: '11px',
                      fontWeight: 900,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    ✓ {p}
                  </span>
                ))}
              </motion.div>
            )}
          </div>

          {/* Primary Action Button */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={() => setModalOpen(true)}
              style={{
                background: '#6D28FF',
                color: '#ffffff',
                border: '3px solid #ffffff',
                borderRadius: '999px',
                padding: '18px 48px',
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontWeight: 900,
                fontSize: '16px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                boxShadow: '8px 8px 0px #ffffff',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-3px, -3px)';
                e.currentTarget.style.boxShadow = '12px 12px 0px #ffffff';
                e.currentTarget.style.background = '#581bd6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '8px 8px 0px #ffffff';
                e.currentTarget.style.background = '#6D28FF';
              }}
            >
              <span>APPLY TO TREQO 2026</span>
              <ArrowRight size={20} />
            </button>

            <span
              style={{
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: '11.5px',
                color: 'rgba(243, 240, 231, 0.65)',
                letterSpacing: '0.08em',
              }}
            >
              Cohort 2026 · Applications Currently Open · 45-Second Fast Apply
            </span>
          </div>

        </div>
      </section>
    </>
  );
}
