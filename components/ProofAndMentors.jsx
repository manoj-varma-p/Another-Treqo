'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DoodleBadge } from './Doodles';
import ApplyModal from './ApplyModal';

const testimonials = [
  { quote: '“I stopped saying I learned marketing. I started saying I ran this ₹18.5k campaign and brought 247 leads.”', author: 'Ananya R.', role: 'Growth Marketer @ D2C Brand' },
  { quote: '“In my interview, I opened my GA4 attribution dashboard instead of my resume. Got the offer in 20 minutes.”', author: 'Karan V.', role: 'Performance Marketer @ Swiggy Partner Agency' },
  { quote: '“Before TREQO, I had 5 certificates and 0 callbacks. After TREQO, I had 30+ real projects.”', author: 'Siddharth M.', role: 'SEO & Content Strategist' },
  { quote: '“They literally make you put real ad budget on live companies. You can’t fake these numbers.”', author: 'Pooja T.', role: 'Growth Associate @ Zepto Partner' },
];

const mentors = [
  { name: 'Arjun Mehta', role: 'Head of Growth', company: 'Ex-Zomato, Cult.fit', exp: '₹12Cr+ Ad Spend' },
  { name: 'Neha Sharma', role: 'Performance Lead', company: 'Ex-Policybazaar', exp: 'Scaled Meta to 5.2x ROAS' },
  { name: 'Vikram Reddy', role: 'SEO & Attribution Director', company: 'Ex-MakeMyTrip', exp: '2M+ Monthly Organic' },
  { name: 'Priya Nair', role: 'Brand Strategist', company: 'Ex-Ogilvy & Tanishq', exp: '0-to-1 Brand Launches' },
  { name: 'Rohan Gupta', role: 'Paid Media Specialist', company: 'Google & Meta Certified Trainer', exp: '500+ Campaigns' },
];

const certLogos = ['GOOGLE ADS', 'META BLUEPRINT', 'HUBSPOT ACADEMY', 'SEMRUSH PRO', 'TREQO REVENUE CERT'];

export default function ProofAndMentors() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="mentors"
        style={{
          background: '#F3F0E7',
          color: '#0A0A0A',
          padding: '60px clamp(20px, 4vw, 56px) 60px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

          {/* ── SECTION 11: NOT FOR EVERYONE ── */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '14px' }}>
              <DoodleBadge text="UNFILTERED REALITY" highlight={true} rotate={-1} />
            </div>

            <h2 style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 10px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              lineHeight: 1.1,
            }}>
              TREQO IS NOT FOR EVERYONE.
            </h2>

            {/* 3 Filter Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              textAlign: 'left',
              marginTop: '40px',
            }}
            className="filter-grid"
            >
              {[
                {
                  for: 'NOT FOR YOU IF',
                  isWarning: true,
                  points: [
                    'You want a passive certificate to put on LinkedIn',
                    'You are uncomfortable with real numbers & public accountability',
                    'You think marketing is just Canva templates & social posts',
                  ],
                },
                {
                  for: 'PERFECT FOR YOU IF',
                  isWarning: false,
                  points: [
                    'You want to see a live ad spend ₹18.5k and know why it converted',
                    'You want to build a portfolio of 30+ real deliverables',
                    'You want to learn directly from active practitioners, not retired professors',
                  ],
                },
                {
                  for: 'THE REAL DEAL',
                  isWarning: false,
                  points: [
                    '9 months of high-intensity execution & live campaigns',
                    'You will fail in week 3 and learn why in week 4',
                    'You will leave with proof no generic candidate can touch',
                  ],
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: c.isWarning ? '#FAF9F8' : '#ffffff',
                    border: '2.5px solid #0A0A0A',
                    borderRadius: '20px',
                    padding: '30px 24px',
                    boxShadow: '6px 6px 0px #0A0A0A',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span style={{
                      fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                      fontSize: '11px',
                      fontWeight: 900,
                      color: c.isWarning ? '#666666' : '#6D28FF',
                      display: 'block',
                      marginBottom: '16px',
                      letterSpacing: '0.08em',
                    }}>
                      {c.for}
                    </span>
                    <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {c.points.map((p, idx) => (
                        <li key={idx} style={{ fontSize: '13.5px', color: '#333333', lineHeight: 1.5, fontWeight: 600 }}>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 12: SOCIAL PROOF TICKER ── */}
          <div style={{ marginBottom: '60px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    border: '2px solid #0A0A0A',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '4px 4px 0px #0A0A0A',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <p style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#0A0A0A',
                    margin: '0 0 16px',
                  }}>
                    {t.quote}
                  </p>
                  <div>
                    <strong style={{ fontSize: '13px', display: 'block', color: '#0A0A0A' }}>{t.author}</strong>
                    <span style={{ fontSize: '11.5px', color: '#6D28FF', fontWeight: 700 }}>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 13: MENTORS RAIL ── */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '14px' }}>
              <DoodleBadge text="INDUSTRY LEADERS" highlight={true} rotate={1} />
            </div>

            <h2 style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 10px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              lineHeight: 1.1,
            }}>
              LEARN FROM PEOPLE WHO DO IT DAILY.
            </h2>
            <p style={{ fontSize: '15px', color: '#555555', maxWidth: '520px', margin: '0 auto 40px' }}>
              No retired professors. Every mentor is currently building and scaling high-growth brands.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '16px',
            }}>
              {mentors.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    border: '2px solid #0A0A0A',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    boxShadow: '4px 4px 0px #0A0A0A',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#6D28FF',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "var(--ff-display, sans-serif)",
                    fontSize: '20px',
                    fontWeight: 900,
                    margin: '0 auto 14px',
                    border: '2px solid #0A0A0A',
                  }}>
                    {m.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 900, margin: '0 0 4px', color: '#0A0A0A' }}>{m.name}</h3>
                  <p style={{ fontSize: '12px', color: '#6D28FF', margin: '0 0 4px', fontWeight: 700 }}>{m.role}</p>
                  <span style={{ fontSize: '11px', color: '#666666' }}>{m.company}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTION 14: CERTIFICATIONS TICKER BEHIND THE REAL FLEX ── */}
          <div style={{ textAlign: 'center', position: 'relative', padding: '40px 0' }}>
            {/* Background Moving Marquee */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              transform: 'translateY(-50%)',
              overflow: 'hidden',
              opacity: 0.12,
              pointerEvents: 'none',
            }}>
              <motion.div
                animate={{ x: ['-50%', '0%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{
                  display: 'flex',
                  gap: '40px',
                  fontSize: '44px',
                  fontWeight: 900,
                  fontFamily: "var(--ff-mono, monospace)",
                  whiteSpace: 'nowrap',
                  color: '#6D28FF',
                }}
              >
                {[...certLogos, ...certLogos, ...certLogos].map((c, i) => (
                  <span key={i}>★ {c}</span>
                ))}
              </motion.div>
            </div>

            {/* Foreground Typography */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <span style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '18px',
                color: '#6D28FF',
                display: 'block',
                marginBottom: '8px',
              }}>
                Nice to have.
              </span>
              <h2 style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                margin: 0,
                textTransform: 'uppercase',
                color: '#0A0A0A',
              }}>
                THE REAL FLEX <br />
                IS THE WORK.
              </h2>
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .filter-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
