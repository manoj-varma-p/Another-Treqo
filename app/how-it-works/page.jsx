'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Clock,
  CheckCircle2,
  TrendingUp,
  Zap,
  Target,
  DollarSign,
  Share2,
  Bookmark,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TreqoDoodle, DoodleBadge, DoodleArrow } from '@/components/Doodles';

const STAGES = [
  {
    step: '01',
    title: 'Track Genesis & Specialization',
    tag: 'PHASE 01',
    desc: 'You select a focused track: Paid Performance, SEO Systems, or AI-Driven Growth.',
    characterState: 'idle',
    speech: "I'm ready to build! 🚀",
  },
  {
    step: '02',
    title: 'Real Budget & Live Ad Engine Allocation',
    tag: 'PHASE 02',
    desc: 'No simulations. You manage live accounts and real campaign budgets.',
    characterState: 'meta',
    speech: 'Running live Meta & Google campaigns! ⚡',
  },
  {
    step: '03',
    title: 'Weekly Founder Teardowns',
    tag: 'PHASE 03',
    desc: 'Active CMOs audit your hooks, CAC, and ROAS numbers.',
    characterState: 'roas',
    speech: 'ROAS is up to 4.2x! 📈',
  },
  {
    step: '04',
    title: 'Verified Revenue Proof & Placement',
    tag: 'PHASE 04',
    desc: 'Graduate with 30+ certs and attributed revenue proof.',
    characterState: 'revenue',
    speech: '₹18.5k revenue generated! 💰🎓',
  },
];

export default function HowItWorksBlogPage() {
  const [activeStage, setActiveStage] = useState(0);
  const current = STAGES[activeStage];

  return (
    <>
      <Navbar />

      <main
        style={{
          background: '#E5DFD0',
          color: '#0A0A0A',
          minHeight: '100vh',
          padding: '120px 80px 100px',
          position: 'relative',
        }}
        className="blog-main"
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>

          {/* ── TOP NAV BAR ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#0A0A0A',
                border: '2px solid #0A0A0A',
                borderRadius: '999px',
                padding: '10px 20px',
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: '13px',
                fontWeight: 900,
                textDecoration: 'none',
                boxShadow: '3px 3px 0px #0A0A0A',
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Homepage</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  border: '1.5px solid #0A0A0A',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontFamily: "var(--ff-mono, monospace)",
                  fontSize: '11px',
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                FOUNDER ESSAY · 4 MIN READ
              </div>
            </div>
          </div>

          {/* ── ARTICLE HEADER ── */}
          <header style={{ marginBottom: '44px' }}>
            <h1
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
                textTransform: 'uppercase',
                margin: '0 0 20px',
                color: '#0A0A0A',
              }}
            >
              How Treqo Actually Works: <br />
              <span
                style={{
                  color: '#ffffff',
                  background: '#6D28FF',
                  padding: '2px 16px',
                  display: 'inline-block',
                  border: '2.5px solid #0A0A0A',
                  boxShadow: '5px 5px 0px #0A0A0A',
                  transform: 'rotate(-1deg)',
                  marginTop: '8px',
                }}
              >
                The Death of Marketing Theory
              </span>
            </h1>

            {/* Author Byline Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '2px solid rgba(10,10,10,0.12)',
                borderBottom: '2px solid rgba(10,10,10,0.12)',
                padding: '16px 0',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                  alt="Lokesh Dama"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: '2px solid #0A0A0A',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <div style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '15px', fontWeight: 900, color: '#0A0A0A' }}>
                    Lokesh Dama
                  </div>
                  <div style={{ fontSize: '12px', fontFamily: "var(--ff-mono, monospace)", color: '#666666', fontWeight: 600 }}>
                    Founder @ TAC · Published 2026
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '12px', fontFamily: "var(--ff-mono, monospace)", color: '#666666', fontWeight: 700 }}>
                  <Clock size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                  4 min read
                </span>
              </div>
            </div>
          </header>

          {/* ── ARTICLE EDITORIAL CONTENT ── */}
          <article
            style={{
              background: '#ffffff',
              border: '3px solid #0A0A0A',
              borderRadius: '28px',
              padding: 'clamp(28px, 4vw, 52px)',
              boxShadow: '10px 10px 0px #0A0A0A',
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#222222',
            }}
          >
            {/* Section 1 */}
            <p style={{ fontSize: '20px', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.5, margin: '0 0 24px' }}>
              The modern marketing education industry is broken. Millions of students watch 80-hour slide decks, memorize 4Ps of marketing, pass multiple-choice quizzes, and end up with zero job offers.
            </p>

            <p style={{ margin: '0 0 24px' }}>
              Why? Because <strong>companies do not hire people who know definitions</strong>. They hire operators who can deploy ad spend, analyze customer acquisition cost (CAC), fix broken attribution pixels, and scale ROAS past 4.0x.
            </p>

            {/* Pull Quote Box */}
            <div
              style={{
                background: '#E5DFD0',
                borderLeft: '4px solid #6D28FF',
                border: '2px solid #0A0A0A',
                borderLeftWidth: '6px',
                borderRadius: '16px',
                padding: '20px 24px',
                margin: '32px 0',
                boxShadow: '4px 4px 0px #0A0A0A',
              }}
            >
              <p
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                &ldquo;Your resume says you learned marketing. Your portfolio should prove that you generated revenue.&rdquo;
              </p>
            </div>

            <h2
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: '28px',
                fontWeight: 900,
                color: '#0A0A0A',
                textTransform: 'uppercase',
                margin: '40px 0 16px',
              }}
            >
              The 4-Phase Treqo Operating System
            </h2>

            <p style={{ margin: '0 0 20px' }}>
              We rebuilt our entire curriculum from the ground up around four distinct phases of execution:
            </p>

            {/* Interactive Step Preview Inside Blog */}
            <div
              style={{
                background: '#FAF9F8',
                border: '2px solid #0A0A0A',
                borderRadius: '20px',
                padding: '24px',
                margin: '28px 0 36px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Sparkles size={16} color="#6D28FF" />
                <span style={{ fontFamily: "var(--ff-mono, monospace)", fontSize: '11px', fontWeight: 900, color: '#6D28FF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  INTERACTIVE PHASE VIEWER (TAP TO PREVIEW)
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }} className="stage-selector-grid">
                {STAGES.map((s, idx) => (
                  <button
                    key={s.step}
                    onClick={() => setActiveStage(idx)}
                    style={{
                      background: activeStage === idx ? '#0A0A0A' : '#ffffff',
                      color: activeStage === idx ? '#ffffff' : '#0A0A0A',
                      border: '1.5px solid #0A0A0A',
                      borderRadius: '10px',
                      padding: '10px 8px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontFamily: "var(--ff-mono, monospace)",
                      fontSize: '11px',
                      fontWeight: 900,
                      boxShadow: activeStage === idx ? '2px 2px 0px #6D28FF' : 'none',
                    }}
                  >
                    PHASE {s.step}
                  </button>
                ))}
              </div>

              <div style={{ background: '#ffffff', border: '1.5px solid #0A0A0A', borderRadius: '14px', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <TreqoDoodle state={current.characterState} size={80} />
                <div>
                  <h4 style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '18px', fontWeight: 900, margin: '0 0 4px', textTransform: 'uppercase' }}>
                    {current.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#555555', margin: 0 }}>
                    {current.desc}
                  </p>
                </div>
              </div>
            </div>

            <h2
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: '28px',
                fontWeight: 900,
                color: '#0A0A0A',
                textTransform: 'uppercase',
                margin: '40px 0 16px',
              }}
            >
              Why We Put Real Money Behind Every Student
            </h2>

            <p style={{ margin: '0 0 20px' }}>
              Simulated dashboards make people complacent. When you know you are spending real ad money on Meta and Google, every hook, every headline, and every landing page friction point suddenly matters.
            </p>

            <p style={{ margin: '0 0 28px' }}>
              You learn how to diagnose why a campaign has a 1.2% CTR, rewrite the creative angles, fix the audience targeting, and turn it into a 4.2x ROAS profit driver.
            </p>

            {/* Bottom Callout in Blog */}
            <div
              style={{
                background: '#0A0A0A',
                color: '#ffffff',
                borderRadius: '20px',
                padding: '32px 36px',
                marginTop: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <div>
                <h3 style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '22px', fontWeight: 900, margin: '0 0 6px', textTransform: 'uppercase' }}>
                  Ready to experience real execution?
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  Explore our curated learning tracks and apply for the upcoming cohort.
                </p>
              </div>

              <Link
                href="/"
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: '14px',
                  fontWeight: 900,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '4px 4px 0px #ffffff',
                }}
              >
                <span>Return to Tracks & Apply</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </article>

        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .blog-main {
              padding: 100px 24px 60px !important;
            }
            .stage-selector-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
