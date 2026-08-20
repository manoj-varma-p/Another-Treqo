'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  BarChart2,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  Award,
  Bot,
  Globe,
  Star,
  RefreshCw,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TreqoDoodle, DoodleBadge, DoodleArrow } from '@/components/Doodles';

const STAGES = [
  {
    step: '01',
    title: 'Character Genesis & Track Selection',
    tag: 'SPAWN POINT',
    desc: 'You begin with raw curiosity. Choose your specialized operator track — Performance Marketing, SEO Architecture, or AI-Driven Creative Growth.',
    characterState: 'idle',
    speech: "I'm ready to build! Pick my track. 🚀",
    color: '#6D28FF',
    badge: 'STAGE 1: GENESIS',
  },
  {
    step: '02',
    title: 'Real Budget & Live Ad Engine Allocation',
    tag: 'LIVE SPEND',
    desc: 'No simulations. You are handed actual ad budgets and live accounts to configure conversion tracking, pixels, and creative hooks.',
    characterState: 'meta',
    speech: 'Running live Meta & Google campaigns! ⚡',
    color: '#0082FB',
    badge: 'STAGE 2: EXECUTION',
  },
  {
    step: '03',
    title: 'Direct Apprenticeship with TAC Founders',
    tag: '1-ON-1 ROASTS',
    desc: 'Lokesh, Valli, and Durga tear down your live campaigns every week. Fix CAC, optimize creative fatigue, and scale ROAS past 4.0x.',
    characterState: 'roas',
    speech: 'ROAS is up to 4.2x! Scaling spend. 📈',
    color: '#16a34a',
    badge: 'STAGE 3: APPRENTICESHIP',
  },
  {
    step: '04',
    title: 'Capstone Revenue Proof & Placement',
    tag: 'GLOBAL GRADUATION',
    desc: 'Graduate with 30+ verified industry certifications, real attributed revenue on your dashboard, and direct intros to top unicorn hiring partners.',
    characterState: 'revenue',
    speech: '₹18.5k verified revenue generated! 💰🎓',
    color: '#FF7A59',
    badge: 'STAGE 4: VICTORY',
  },
];

export default function HowItWorksPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [clicks, setClicks] = useState(0);

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
          overflow: 'hidden',
        }}
        className="how-it-works-main"
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

          {/* ── TOP BACK BUTTON & BADGE ── */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
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
                transition: 'all 0.15s ease',
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #6D28FF',
                  color: '#6D28FF',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontFamily: "var(--ff-mono, monospace)",
                  fontSize: '11px',
                  fontWeight: 900,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                🎮 INTERACTIVE HOW IT WORKS WALKTHROUGH
              </div>
              <DoodleBadge text="CLICK TO EVOLVE" rotate={-2} />
            </div>
          </div>

          {/* ── HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h1
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                textTransform: 'uppercase',
                margin: '0 0 16px',
                color: '#0A0A0A',
              }}
            >
              HOW THE SYSTEM{' '}
              <span
                style={{
                  color: '#ffffff',
                  background: '#6D28FF',
                  padding: '2px 16px',
                  display: 'inline-block',
                  border: '2.5px solid #0A0A0A',
                  boxShadow: '5px 5px 0px #0A0A0A',
                  transform: 'rotate(-1deg)',
                }}
              >
                ACTUALLY WORKS
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(15px, 1.3vw, 18px)',
                color: '#444444',
                maxWidth: '680px',
                margin: '0 auto',
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              Watch your character evolve from a beginner to a high-earning performance growth operator through 4 live phases.
            </p>
          </div>

          {/* ── INTERACTIVE 2-COLUMN EXPERIENCE ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '40px',
              alignItems: 'center',
              marginBottom: '60px',
            }}
            className="how-it-works-grid"
          >
            {/* Left: Step Selection Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {STAGES.map((stage, idx) => {
                const isActive = activeStage === idx;

                return (
                  <motion.div
                    key={stage.step}
                    whileHover={{ x: 6 }}
                    onClick={() => setActiveStage(idx)}
                    style={{
                      background: isActive ? '#ffffff' : '#FAF9F8',
                      border: isActive ? '3px solid #0A0A0A' : '2px solid #0A0A0A',
                      borderRadius: '20px',
                      padding: '22px 26px',
                      boxShadow: isActive ? '6px 6px 0px #6D28FF' : '3px 3px 0px #0A0A0A',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span
                          style={{
                            background: isActive ? '#6D28FF' : '#0A0A0A',
                            color: '#ffffff',
                            fontFamily: "var(--ff-mono, monospace)",
                            fontSize: '12px',
                            fontWeight: 900,
                            padding: '4px 10px',
                            borderRadius: '8px',
                          }}
                        >
                          STAGE {stage.step}
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontFamily: "var(--ff-mono, monospace)",
                            fontWeight: 900,
                            color: stage.color,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                          }}
                        >
                          {stage.tag}
                        </span>
                      </div>

                      {isActive && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6D28FF', fontWeight: 900, fontSize: '12px', fontFamily: "var(--ff-mono, monospace)" }}>
                          <span>ACTIVE PHASE</span>
                          <CheckCircle2 size={16} />
                        </div>
                      )}
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                        fontSize: '20px',
                        fontWeight: 900,
                        color: '#0A0A0A',
                        margin: '0 0 6px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {stage.title}
                    </h3>

                    <p style={{ fontSize: '13.5px', color: '#555555', margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                      {stage.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Character Visual Station */}
            <div
              style={{
                background: '#ffffff',
                border: '3px solid #0A0A0A',
                borderRadius: '28px',
                padding: '44px 32px',
                boxShadow: '10px 10px 0px #0A0A0A',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: '520px',
                textAlign: 'center',
              }}
            >
              {/* Dynamic Speech Bubble */}
              <motion.div
                key={current.speech + clicks}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                style={{
                  background: '#FAF9F8',
                  border: '2px solid #0A0A0A',
                  borderRadius: '16px',
                  padding: '10px 20px',
                  boxShadow: '4px 4px 0px #6D28FF',
                  fontSize: '14px',
                  fontWeight: 900,
                  color: '#0A0A0A',
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  marginBottom: '28px',
                  position: 'relative',
                }}
              >
                <span>{current.speech}</span>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-7px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '7px solid transparent',
                    borderRight: '7px solid transparent',
                    borderTop: '7px solid #0A0A0A',
                  }}
                />
              </motion.div>

              {/* Character Animated Avatar */}
              <motion.div
                key={current.characterState}
                animate={{ y: [0, -12, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                onClick={() => {
                  setClicks((c) => c + 1);
                  setActiveStage((s) => (s + 1) % STAGES.length);
                }}
                style={{ cursor: 'pointer', marginBottom: '24px' }}
                title="Click character to cycle evolution stage!"
              >
                <TreqoDoodle state={current.characterState} size={240} />
              </motion.div>

              {/* Bottom Character Info Tag */}
              <div
                style={{
                  background: '#E5DFD0',
                  border: '2px solid #0A0A0A',
                  borderRadius: '12px',
                  padding: '8px 18px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '2px 2px 0px #0A0A0A',
                }}
              >
                <Sparkles size={14} color="#6D28FF" />
                <span style={{ fontSize: '12px', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)", color: '#0A0A0A' }}>
                  Click character to fast-forward phase ({activeStage + 1} / {STAGES.length})
                </span>
              </div>
            </div>
          </div>

          {/* ── BOTTOM RANDOM PLAYGROUND CALLOUT ── */}
          <div
            style={{
              background: '#0A0A0A',
              color: '#ffffff',
              border: '3px solid #0A0A0A',
              borderRadius: '24px',
              padding: '36px 44px',
              boxShadow: '8px 8px 0px #6D28FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Zap size={18} color="#22C55E" />
                <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#22C55E', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  WORK IN PROGRESS LAB
                </span>
              </div>
              <h4 style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '24px', fontWeight: 900, margin: '0 0 6px', textTransform: 'uppercase' }}>
                Ready to architect your own campaigns?
              </h4>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', margin: 0, maxWidth: '520px' }}>
                Explore the full curriculum and apply before the next cohort seats fill up.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                href="/"
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  borderRadius: '12px',
                  padding: '14px 26px',
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
                <span>Return to Main Experience</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .how-it-works-main {
              padding: 100px 24px 60px !important;
            }
            .how-it-works-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}
