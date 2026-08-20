'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#E5DFD0',
        color: '#0A0A0A',
        padding: '80px 80px 40px',
        borderTop: '2.5px solid #0A0A0A',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>

        {/* ── TOP SECTION: BRAND + NAV LINKS ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '48px',
            marginBottom: '60px',
          }}
          className="footer-grid-wrap"
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span
                style={{
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: '32px',
                  fontWeight: 900,
                  color: '#6D28FF',
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                }}
              >
                TREQO
              </span>
              <span
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#6D28FF',
                  display: 'inline-block',
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: '11px',
                fontWeight: 900,
                color: '#6D28FF',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              The Marketing School
            </p>

            <p
              style={{
                fontSize: '14px',
                color: '#444444',
                lineHeight: 1.55,
                maxWidth: '320px',
                marginBottom: '20px',
                fontWeight: 500,
              }}
            >
              India&apos;s most rigorous marketing school — built for thinkers who execute real revenue.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://www.instagram.com/treqo_?igsh=cjk0aTczYnhrcXRt"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  border: '1.5px solid #0A0A0A',
                  color: '#0A0A0A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '2px 2px 0px #0A0A0A',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.background = '#6D28FF';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#0A0A0A';
                }}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div>
            <h4
              style={{
                fontFamily: "var(--ff-mono, monospace)",
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#0A0A0A',
                marginBottom: '18px',
              }}
            >
              Program
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['Why TREQO', '#why'],
                ['Tracks & Systems', '#choose-system'],
                ['Training Model', '#training'],
                ['Live Projects', '#real-work'],
                ['How It Works (Blog)', '/how-it-works'],
              ].map(([lbl, href]) => (
                <a
                  key={lbl}
                  href={href}
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#444444',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#6D28FF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  {lbl}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column 2 */}
          <div>
            <h4
              style={{
                fontFamily: "var(--ff-mono, monospace)",
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#0A0A0A',
                marginBottom: '18px',
              }}
            >
              Curriculum
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                ['Cohort Sprints', '#choose-system'],
                ['Live Ad Spend Lab', '#master-system'],
                ['Certifications Proof', '#master-system'],
                ['Tutors & Mentors', '#master-system'],
              ].map(([lbl, href]) => (
                <a
                  key={lbl}
                  href={href}
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#444444',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#6D28FF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#444444')}
                >
                  {lbl}
                </a>
              ))}
            </div>
          </div>

          {/* Admissions & CTA Column */}
          <div>
            <h4
              style={{
                fontFamily: "var(--ff-mono, monospace)",
                fontSize: '11px',
                fontWeight: 900,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#0A0A0A',
                marginBottom: '18px',
              }}
            >
              Admissions
            </h4>

            {/* Live Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1.5px solid #0A0A0A',
                borderRadius: '999px',
                padding: '5px 14px',
                marginBottom: '14px',
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
              <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#0A0A0A', fontFamily: "var(--ff-mono, monospace)" }}>
                COHORT 2026 OPEN
              </span>
            </div>

            <p style={{ fontSize: '13px', color: '#555555', lineHeight: 1.5, marginBottom: '16px', fontWeight: 500 }}>
              Limited cohort seats. Selection based on problem-solving drive.
            </p>

            <a
              href="#top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#6D28FF',
                color: '#ffffff',
                border: '2px solid #0A0A0A',
                borderRadius: '10px',
                padding: '10px 18px',
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: '12.5px',
                fontWeight: 900,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '2px 2px 0px #0A0A0A',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '3px 3px 0px #0A0A0A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '2px 2px 0px #0A0A0A';
              }}
            >
              <span>Apply Now</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div
          style={{
            height: '1.5px',
            background: 'rgba(10, 10, 10, 0.15)',
            marginBottom: '28px',
          }}
        />

        {/* ── BOTTOM ROW: COPYRIGHT + LEGAL ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '12px',
            fontFamily: "var(--ff-mono, monospace)",
            color: '#666666',
            fontWeight: 700,
          }}
        >
          <div>
            © 2026 TREQO. All rights reserved. Zero slides. 100% proof.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: '#666666', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#666666', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#666666', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .footer-grid-wrap {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 560px) {
          .footer-grid-wrap {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
