'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { DoodleBadge } from './Doodles';

const projects = [
  {
    tag: 'META ADS',
    metric: '247 LEADS',
    sub: '₹18,500 SPEND · 3.8× ROAS',
    company: 'D2C Apparel Brand',
    color: '#ffffff',
    rotate: -1.5,
    details: 'Custom lookalike audiences + dynamic catalog retargeting campaign with 4.2% CTR.'
  },
  {
    tag: 'GOOGLE ADS',
    metric: '₹42 CAC',
    sub: 'PMAX + SEARCH INTENT',
    company: 'Fintech App Launch',
    color: '#F3F0E7',
    rotate: 1.5,
    details: 'Targeted high-intent bottom-funnel queries with exact-match negative keyword scrubbing.'
  },
  {
    tag: 'SEO ENGINE',
    metric: '+186% TRAFFIC',
    sub: 'ORGANIC REVENUE SCALE',
    company: 'Healthtech Platform',
    color: '#ffffff',
    rotate: -1,
    details: 'Programmatic SEO clusters & technical schema audit ranking for 140+ commercial keywords.'
  },
  {
    tag: 'BRAND GTM',
    metric: '0-TO-1 LAUNCH',
    sub: 'FIRST 1,000 CUSTOMERS',
    company: 'Specialty Beverage',
    color: '#F3F0E7',
    rotate: 2,
    details: 'Hyperlocal micro-influencer seeding + WhatsApp drip funnel with 32% repurchase rate.'
  },
  {
    tag: 'CONTENT REVENUE',
    metric: '₹1.2M REVENUE',
    sub: 'ORGANIC GROWTH FUNNEL',
    company: 'EdTech Academy',
    color: '#ffffff',
    rotate: -2,
    details: 'Viral case study breakdowns converting organic impressions directly into admissions.'
  },
];

export default function RealWorkConveyor() {
  const [isPaused, setIsPaused] = useState(false);
  const loopProjects = [...projects, ...projects, ...projects];

  return (
    <section
      id="work"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#E5DFD0',
        color: '#0A0A0A',
        padding: '55px 0 60px',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '36px', padding: '0 80px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '14px' }}>
          <DoodleBadge text="BEHANCE / IG STYLE FEED" highlight={true} rotate={-1} />
        </div>

        <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 10px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              lineHeight: 1.1,
            }}
          >
          REAL WORK <span style={{ color: '#ffffff', background: '#6D28FF', padding: '0 12px', display: 'inline-block', border: '2px solid #0A0A0A' }}>&gt;</span> HOMEWORK
        </h2>

        <p style={{
          fontSize: '15px',
          color: '#555555',
          maxWidth: '520px',
          margin: '0 auto',
          fontWeight: 500,
        }}>
          Real agency client briefs. Real ad money. Real customer acquisition data you own and showcase.
        </p>
      </div>

      {/* Horizontal Sliding Conveyor */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          padding: '20px 0',
        }}
      >
        <motion.div
          animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{
            display: 'flex',
            gap: '28px',
            width: 'max-content',
            paddingLeft: '20px',
          }}
        >
          {loopProjects.map((item, idx) => (
            <div
              key={idx}
              style={{
                width: '320px',
                background: item.color,
                border: '2.5px solid #0A0A0A',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '6px 6px 0px #0A0A0A',
                transform: `rotate(${item.rotate}deg)`,
                transition: 'transform 0.25s, box-shadow 0.25s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexShrink: 0,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04) rotate(0deg)';
                e.currentTarget.style.boxShadow = '10px 10px 0px #6D28FF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${item.rotate}deg)`;
                e.currentTarget.style.boxShadow = '6px 6px 0px #0A0A0A';
              }}
            >
              {/* Top Meta */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{
                  fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                  fontSize: '10px',
                  fontWeight: 900,
                  background: '#6D28FF',
                  color: '#ffffff',
                  padding: '3px 9px',
                  borderRadius: '4px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {item.tag}
                </span>
                <ArrowUpRight size={18} color="#6D28FF" />
              </div>

              {/* Huge Metric */}
              <div>
                <h3 style={{
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: '28px',
                  fontWeight: 900,
                  margin: '0 0 4px',
                  color: '#0A0A0A',
                  letterSpacing: '-0.02em',
                }}>
                  {item.metric}
                </h3>
                <span style={{
                  fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                  fontSize: '10.5px',
                  fontWeight: 800,
                  color: '#6D28FF',
                  letterSpacing: '0.06em',
                }}>
                  {item.sub}
                </span>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '12.5px',
                color: '#555555',
                margin: '14px 0',
                lineHeight: 1.45,
                fontWeight: 500,
                borderTop: '1px solid rgba(10, 10, 10, 0.1)',
                paddingTop: '12px',
              }}>
                {item.details}
              </p>

              {/* Bottom Client */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '11px',
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontWeight: 700,
                color: '#666666',
              }}>
                <span>CASE: {item.company}</span>
                <span style={{ color: '#6D28FF', fontWeight: 900 }}>PROVED ✓</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
