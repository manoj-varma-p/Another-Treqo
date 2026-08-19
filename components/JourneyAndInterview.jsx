'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Layers, 
  Radio, 
  Users, 
  BarChart2, 
  SlidersHorizontal, 
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { DoodleBadge } from './Doodles';

const actionRows = [
  {
    id: 'research',
    title: 'Research',
    badge: 'WHO?',
    icon: Search,
    detail: 'Customer interviews, competitor positioning teardowns & target persona mapping before touching ad spend.',
    metric: '50+ Real User Interviews',
  },
  {
    id: 'build',
    title: 'Build',
    badge: 'WHAT?',
    icon: Layers,
    detail: 'High-converting landing pages, value props, creative angle scripts, and offer hooks designed to convert.',
    metric: '3-Day Rapid Prototyping',
  },
  {
    id: 'ads',
    title: 'Run Ads',
    badge: 'LIVE',
    icon: Radio,
    detail: 'Deploying real campaign ad budgets on Meta, Google & LinkedIn Ads Manager with structured A/B testing.',
    metric: 'Real Budget Deployed',
  },
  {
    id: 'leads',
    title: 'Get Leads',
    badge: '247',
    icon: Users,
    detail: 'Capturing verified, high-intent buyer inquiries piped directly into real CRM pipelines.',
    metric: '247 Verified Inquiries',
  },
  {
    id: 'numbers',
    title: 'Check Numbers',
    badge: '₹57 CAC',
    icon: BarChart2,
    detail: 'Tracking hook rates, hold rates, CTR, CPA, customer acquisition cost (CAC) and lifetime value (LTV).',
    metric: '₹57 Optimized CAC',
  },
  {
    id: 'fix',
    title: 'Fix Campaign',
    badge: '+18%',
    icon: SlidersHorizontal,
    detail: 'Kill losing ad creatives, double down on winning hooks, and iterate funnels to lift conversion rates by +18%.',
    metric: '+18% Funnel Lift',
  },
  {
    id: 'results',
    title: 'Get Results',
    badge: '3.8× ROAS',
    icon: TrendingUp,
    detail: 'Attributed client revenue, positive return on ad spend, and proof you present to CMOs and recruiters.',
    metric: '3.8× Attributed ROAS',
  },
];

export default function JourneyAndInterview() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      id="journey"
      data-stage="JOURNEY"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#F3F0E7',
        color: '#0A0A0A',
        padding: '55px clamp(20px, 4vw, 56px) 60px',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto', width: '100%' }}>

        {/* ── EYEBROW / BADGES ── */}
        <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: 10 }}>
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
            WHAT YOU ACTUALLY DO
          </span>
          <DoodleBadge text="ZERO BORING LECTURES" rotate={-1} highlight={true} />
        </div>

        {/* ── OVERSIZED DUAL-TONE HEADING ── */}
        <div style={{ marginBottom: '40px' }}>
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
                color: 'rgba(10, 10, 10, 0.16)',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              YOU DON&apos;T JUST
            </span>
            <span
              style={{
                color: '#6D28FF',
                display: 'block',
              }}
            >
              SIT IN CLASS.
            </span>
          </h2>
        </div>

        {/* ── ACTION ROWS CONTAINER ── */}
        <div
          style={{
            borderTop: '2px solid #0A0A0A',
            borderBottom: '2px solid #0A0A0A',
            background: '#FAF9F8',
            borderRadius: '20px',
            border: '2.5px solid #0A0A0A',
            boxShadow: '6px 6px 0px #0A0A0A',
            overflow: 'hidden',
          }}
        >
          {actionRows.map((row, idx) => {
            const isHovered = hoveredIdx === idx;
            const IconComp = row.icon;
            const isLast = idx === actionRows.length - 1;

            return (
              <motion.div
                key={row.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  borderBottom: isLast ? 'none' : '1.5px solid rgba(10, 10, 10, 0.12)',
                  background: isHovered ? '#ffffff' : 'transparent',
                  padding: '18px clamp(20px, 3.5vw, 36px)',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  position: 'relative',
                }}
              >
                {/* Main Row Content */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Left: Icon & Title */}
                  <motion.div
                    animate={{ x: isHovered ? 6 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isHovered ? '#6D28FF' : '#F3F0E7',
                        color: isHovered ? '#ffffff' : '#0A0A0A',
                        border: '1.5px solid #0A0A0A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <IconComp size={16} />
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                        fontSize: 'clamp(18px, 1.8vw, 24px)',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        color: isHovered ? '#6D28FF' : '#0A0A0A',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {row.title}
                    </span>
                  </motion.div>

                  {/* Right: Badge */}
                  <motion.div
                    animate={{ scale: isHovered ? 1.08 : 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    style={{
                      background: isHovered ? '#6D28FF' : '#ffffff',
                      color: isHovered ? '#ffffff' : '#0A0A0A',
                      border: '2px solid #0A0A0A',
                      borderRadius: '999px',
                      padding: '8px clamp(16px, 2vw, 24px)',
                      fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                      fontSize: 'clamp(12.5px, 1.1vw, 15px)',
                      fontWeight: 900,
                      letterSpacing: '0.04em',
                      boxShadow: isHovered ? '3px 3px 0px #0A0A0A' : '2px 2px 0px #0A0A0A',
                      transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                    }}
                  >
                    {row.badge}
                  </motion.div>
                </div>

                {/* Expanded Micro Detail On Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        overflow: 'hidden',
                        paddingLeft: '46px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '13.5px',
                          color: '#555555',
                          margin: 0,
                          lineHeight: 1.5,
                          fontWeight: 500,
                          maxWidth: '620px',
                        }}
                      >
                        {row.detail}
                      </p>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          background: '#F3F0E7',
                          border: '1px solid #0A0A0A',
                          borderRadius: '6px',
                          padding: '4px 10px',
                          fontFamily: "var(--ff-mono, monospace)",
                          fontSize: '11px',
                          fontWeight: 800,
                          color: '#6D28FF',
                        }}
                      >
                        <CheckCircle2 size={13} color="#6D28FF" />
                        <span>{row.metric}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
