'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Award,
  BadgeCheck,
  Star,
  Sparkles,
  ArrowRight,
  BarChart2,
  Search,
  Mail,
  Globe,
  Target,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { DoodleBadge } from './Doodles';

/* ─────────────────────────────────────────────
   CERTIFICATE DATA  — grouped by provider
───────────────────────────────────────────── */
const semrush = [
  { name: 'PPC Fundamentals', provider: 'SEMrush', icon: <Target size={14} />, color: '#FF642D' },
  { name: 'SEO Fundamentals', provider: 'SEMrush', icon: <Search size={14} />, color: '#FF642D' },
  { name: 'Social Media', provider: 'SEMrush', icon: <Star size={14} />, color: '#FF642D' },
  { name: 'Content Marketing', provider: 'SEMrush', icon: <Award size={14} />, color: '#FF642D' },
];

const hubspot = [
  { name: 'SEO Certification', provider: 'HubSpot', icon: <Search size={14} />, color: '#FF7A59' },
  { name: 'Digital Marketing', provider: 'HubSpot', icon: <Globe size={14} />, color: '#FF7A59' },
  { name: 'Social Media Marketing', provider: 'HubSpot', icon: <Star size={14} />, color: '#FF7A59' },
  { name: 'Email Marketing', provider: 'HubSpot', icon: <Mail size={14} />, color: '#FF7A59' },
  { name: 'Inbound Marketing', provider: 'HubSpot', icon: <Zap size={14} />, color: '#FF7A59' },
  { name: 'Content Marketing', provider: 'HubSpot', icon: <Award size={14} />, color: '#FF7A59' },
];

const google = [
  { name: 'Google My Business', provider: 'Google', icon: <Globe size={14} />, color: '#34A853' },
  { name: 'Google Analytics (GA4)', provider: 'Google', icon: <BarChart2 size={14} />, color: '#4285F4' },
  { name: 'Google Ads Shopping', provider: 'Google', icon: <Target size={14} />, color: '#EA4335' },
  { name: 'Performance Max', provider: 'Google', icon: <Zap size={14} />, color: '#FBBC04' },
  { name: 'Google Ads Video', provider: 'Google', icon: <Star size={14} />, color: '#EA4335' },
  { name: 'Google Ads Display', provider: 'Google', icon: <Award size={14} />, color: '#34A853' },
  { name: 'Fundamentals of Digital Mkt', provider: 'Google', icon: <Globe size={14} />, color: '#4285F4' },
  { name: 'Google Ads Search', provider: 'Google', icon: <Search size={14} />, color: '#FBBC04' },
];

const meta = [
  { name: 'Community Manager', provider: 'Meta', price: '$99', icon: <Star size={14} />, color: '#0082FB' },
  { name: 'Creative Strategy Pro', provider: 'Meta', price: '$150', icon: <Sparkles size={14} />, color: '#0082FB' },
  { name: 'Media Planning Pro', provider: 'Meta', price: '$150', icon: <BarChart2 size={14} />, color: '#0082FB' },
  { name: 'Marketing Science Pro', provider: 'Meta', price: '$150', icon: <Award size={14} />, color: '#0082FB' },
  { name: 'Digital Marketing Assoc.', provider: 'Meta', price: '$99', icon: <BadgeCheck size={14} />, color: '#0082FB' },
  { name: 'Media Buying Pro', provider: 'Meta', price: '$150', icon: <Target size={14} />, color: '#0082FB' },
];

const providerBadge = {
  SEMrush: { bg: 'rgba(255,100,45,0.12)', text: '#FF642D', border: '#FF642D' },
  HubSpot: { bg: 'rgba(255,122,89,0.12)', text: '#FF7A59', border: '#FF7A59' },
  Google: { bg: 'rgba(66,133,244,0.12)', text: '#4285F4', border: '#4285F4' },
  Meta: { bg: 'rgba(0,130,251,0.12)', text: '#0082FB', border: '#0082FB' },
};

/* ─────────────────────────────────────────────
   COMPACT NEO-BRUTALIST VERTICAL CARD
───────────────────────────────────────────── */
export function CertCardNeo({ cert }) {
  const badge = providerBadge[cert.provider] || { bg: '#F3F0E7', text: '#6D28FF', border: '#6D28FF' };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        background: '#ffffff',
        border: '1.5px solid #0A0A0A',
        borderRadius: '14px',
        padding: '13px 15px',
        boxShadow: '3px 3px 0px #0A0A0A',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        marginBottom: '12px',
      }}
    >
      {/* Icon + Provider */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: '#0A0A0A',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {cert.icon}
        </div>
        <div
          style={{
            fontSize: '9.5px',
            fontWeight: 900,
            background: badge.bg,
            color: badge.text,
            border: `1px solid ${badge.border}`,
            borderRadius: '6px',
            padding: '2px 8px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: "var(--ff-mono, monospace)",
          }}
        >
          {cert.provider}
        </div>
      </div>

      {/* Name */}
      <p
        style={{
          margin: '0 0 8px',
          fontSize: '12px',
          fontWeight: 800,
          color: '#0A0A0A',
          lineHeight: 1.3,
          fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
          textTransform: 'uppercase',
        }}
      >
        {cert.name}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {cert.price ? (
          <span
            style={{
              fontSize: '10px',
              fontWeight: 900,
              color: '#6D28FF',
              background: '#F3F0E7',
              border: '1px solid #0A0A0A',
              borderRadius: '4px',
              padding: '2px 6px',
              fontFamily: "var(--ff-mono, monospace)",
            }}
          >
            {cert.price} voucher
          </span>
        ) : (
          <span
            style={{
              fontSize: '9.5px',
              fontWeight: 800,
              color: '#666666',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontFamily: "var(--ff-mono, monospace)",
            }}
          >
            Included Free
          </span>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            color: '#6D28FF',
            fontSize: '10px',
            fontWeight: 900,
            textTransform: 'uppercase',
            fontFamily: "var(--ff-mono, monospace)",
          }}
        >
          <span>Verified</span>
          <CheckCircle2 size={11} color="#6D28FF" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VERTICAL INFINITE MARQUEE COLUMN
───────────────────────────────────────────── */
export function VerticalInfiniteColNeo({ certs, direction = 'down', speed = 25 }) {
  const loop = [...certs, ...certs, ...certs];
  return (
    <div style={{ overflow: 'hidden', height: '100%' }}>
      <motion.div
        animate={{ y: direction === 'down' ? ['-33.33%', '0%'] : ['0%', '-33.33%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((cert, i) => (
          <CertCardNeo key={i} cert={cert} />
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT IN TREQO THEME
───────────────────────────────────────────── */
export default function CertificationSection() {
  const col1Certs = [...google, ...meta];
  const col2Certs = [...hubspot, ...semrush];

  return (
    <section
      id="certs"
      data-stage="CERTS"
      style={{
        padding: '80px 80px',
        background: '#F3F0E7',
        color: '#0A0A0A',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1540, margin: '0 auto' }}>

        {/* ── HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1.5px solid #6D28FF',
                color: '#6D28FF',
                padding: '5px 14px',
                borderRadius: '999px',
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                boxShadow: '2px 2px 0px rgba(109, 40, 255, 0.25)',
              }}
            >
              <ShieldCheck size={13} color="#6D28FF" />
              <span>PROOF THAT TRAVELS</span>
            </div>
            <DoodleBadge text="INDUSTRY VERIFIED" rotate={-2} />
          </div>

          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              margin: '0 0 12px',
              color: '#0A0A0A',
            }}
          >
            CREDENTIALS BUILT FOR THE{' '}
            <span
              style={{
                color: '#ffffff',
                background: '#6D28FF',
                padding: '2px 14px',
                display: 'inline-block',
                border: '2.5px solid #0A0A0A',
                boxShadow: '4px 4px 0px #0A0A0A',
                transform: 'rotate(-1deg)',
              }}
            >
              REAL MARKET
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              color: '#444444',
              maxWidth: 580,
              margin: '0 auto',
              lineHeight: 1.45,
              fontWeight: 500,
            }}
          >
            Graduate with official revenue capstone validation, plus 30+ industry credentials recruiters actively search for.
          </p>
        </div>

        {/* ── 50/50 SPLIT GRID CONTAINER ── */}
        <div
          style={{
            background: '#ffffff',
            border: '3px solid #0A0A0A',
            borderRadius: '28px',
            boxShadow: '10px 10px 0px #0A0A0A',
            padding: '36px clamp(20px, 3.5vw, 40px)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'stretch',
          }}
          className="cert-split-grid"
        >
          {/* ── LEFT SIDE: TREQO CERTIFICATION (50%) ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span
                  style={{
                    background: '#6D28FF',
                    color: '#ffffff',
                    fontFamily: "var(--ff-mono, monospace)",
                    fontSize: '11px',
                    fontWeight: 900,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    letterSpacing: '0.08em',
                    border: '1.5px solid #0A0A0A',
                  }}
                >
                  CAPSTONE REVENUE PROOF
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: 'clamp(22px, 2.4vw, 30px)',
                  fontWeight: 900,
                  color: '#0A0A0A',
                  margin: '0 0 8px',
                  textTransform: 'uppercase',
                }}
              >
                TREQO Certification
              </h3>

              <p style={{ fontSize: '14px', color: '#444444', margin: '0 0 20px', lineHeight: 1.5, fontWeight: 500 }}>
                Awarded on completion of your capstone project — a real campaign, built &amp; launched with real numbers attached.
              </p>

              {/* Certificate Image Frame in Neo-Brutalist Frame */}
              <div
                style={{
                  background: '#FAF9F8',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '20px',
                  padding: '16px',
                  boxShadow: '5px 5px 0px #0A0A0A',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/treqo-certificate.jpg"
                  alt="TREQO Official Certificate of Completion"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    border: '1.5px solid #0A0A0A',
                    display: 'block',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    marginTop: '12px',
                    fontSize: '12px',
                    fontFamily: "var(--ff-mono, monospace)",
                    fontWeight: 800,
                    color: '#6D28FF',
                  }}
                >
                  <CheckCircle2 size={14} />
                  <span>Shareable on LinkedIn &amp; verified by hiring managers</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDE: OTHER INDUSTRY CERTIFICATIONS (50%) ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <span
                  style={{
                    background: '#F3F0E7',
                    color: '#6D28FF',
                    fontFamily: "var(--ff-mono, monospace)",
                    fontSize: '11px',
                    fontWeight: 900,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    letterSpacing: '0.08em',
                    border: '1.5px solid #0A0A0A',
                  }}
                >
                  GLOBAL CREDENTIALS
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: 'clamp(22px, 2.4vw, 30px)',
                  fontWeight: 900,
                  color: '#0A0A0A',
                  margin: '0 0 8px',
                  textTransform: 'uppercase',
                }}
              >
                Other Industry Certification
              </h3>

              <p style={{ fontSize: '14px', color: '#444444', margin: '0 0 14px', lineHeight: 1.5, fontWeight: 500 }}>
                From Google &amp; Meta to HubSpot &amp; SEMrush — graduate with 30+ credentials recruiters look for.
              </p>

              {/* Provider Badges Row */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
                {[
                  { name: 'Google', bg: 'rgba(66,133,244,0.12)', text: '#4285F4', count: '8 certs' },
                  { name: 'Meta', bg: 'rgba(0,130,251,0.12)', text: '#0082FB', count: '6 certs' },
                  { name: 'HubSpot', bg: 'rgba(255,122,89,0.12)', text: '#FF7A59', count: '6 certs' },
                  { name: 'SEMrush', bg: 'rgba(255,100,45,0.12)', text: '#FF642D', count: '4 certs' },
                ].map((p) => (
                  <div
                    key={p.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      background: p.bg,
                      border: `1.5px solid ${p.text}`,
                      borderRadius: '999px',
                      padding: '3px 10px',
                    }}
                  >
                    <span style={{ fontSize: '11px', fontWeight: 900, color: p.text, fontFamily: "var(--ff-mono, monospace)" }}>
                      {p.name}
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#555555', fontFamily: "var(--ff-mono, monospace)" }}>
                      {p.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* ── VERTICAL FLOWING MARQUEE (UP & DOWN) ── */}
              <div
                style={{
                  height: '350px',
                  overflow: 'hidden',
                  position: 'relative',
                  maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 14,
                  background: '#FAF9F8',
                  border: '2px solid #0A0A0A',
                  borderRadius: '18px',
                  padding: '14px',
                  boxShadow: '4px 4px 0px #0A0A0A',
                }}
              >
                {/* Column 1: Flows Downward */}
                <VerticalInfiniteColNeo certs={col1Certs} direction="down" speed={24} />

                {/* Column 2: Flows Upward */}
                <VerticalInfiniteColNeo certs={col2Certs} direction="up" speed={20} />
              </div>

              {/* Footer Note */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#F3F0E7',
                  border: '1.5px solid #0A0A0A',
                  borderRadius: '10px',
                  padding: '6px 14px',
                  marginTop: '14px',
                  boxShadow: '2px 2px 0px #0A0A0A',
                }}
              >
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#16a34a' }} />
                <span style={{ fontSize: '11.5px', color: '#111111', fontWeight: 800, fontFamily: "var(--ff-mono, monospace)" }}>
                  Google, HubSpot &amp; SEMrush certifications included in fee.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .cert-split-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
