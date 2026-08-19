'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { DoodleBadge, DoodleArrow } from './Doodles';
import ApplyModal from './ApplyModal';

const roles = [
  { title: 'GROWTH MARKETER', salary: '₹8–16 LPA', desc: 'Owns user acquisition, funnel optimization & conversion modeling end-to-end.' },
  { title: 'PERFORMANCE MARKETER', salary: '₹7–14 LPA', desc: 'Runs high-scale paid media campaigns across Meta, Google & Amazon DSP.' },
  { title: 'SEO SPECIALIST', salary: '₹6–12 LPA', desc: 'Builds programmatic organic revenue engines and technical schema architecture.' },
  { title: 'MARKETING ANALYST', salary: '₹8–15 LPA', desc: 'Audits GA4 cohorts, multi-touch attribution and unit economics.' },
  { title: 'BRAND STRATEGIST', salary: '₹9–18 LPA', desc: 'Crafts 0-to-1 go-to-market positioning and commercial narrative.' },
  { title: 'GROWTH ASSOCIATE', salary: '₹5–10 LPA', desc: 'Executes rapid revenue sprints, campaign QA and creative testing.' },
];

const programs = [
  {
    id: 'student',
    title: 'THE FOUNDER SEMESTER',
    badge: 'STUDENT ON CAMPUS',
    format: 'On Campus & Hybrid · Madhapur, Hyderabad',
    duration: '9 Months (Intensive)',
    highlight: '30+ Live Industry Projects',
    benefit: 'Walk into interviews with an active revenue portfolio and verified campaign metrics.',
    cta: 'Explore Campus Track',
    color: '#6D28FF',
    textColor: '#ffffff',
  },
  {
    id: 'online',
    title: 'NEW AGE DIGITAL MARKETING',
    badge: '100% ONLINE WEEKEND',
    format: 'Live Interactive Cohort + LMS',
    duration: '5 Months (Weekend Batch)',
    highlight: '100% Placement Support',
    benefit: 'Built for working professionals and graduates switching directly into top agency roles.',
    cta: 'Explore Online Track',
    color: '#ffffff',
    textColor: '#0A0A0A',
  },
  {
    id: 'growth',
    title: 'FOUNDER GROWTH & SALES',
    badge: 'EXECUTIVE TRACK',
    format: 'Hybrid Mastermind & Studio',
    duration: '4 Months (Cohort)',
    highlight: 'CAC-to-LTV Modeling',
    benefit: 'Designed with active CMOs to scale profitable customer acquisition for real startups.',
    cta: 'Join Executive Waitlist',
    color: '#F3F0E7',
    textColor: '#0A0A0A',
  },
];

const curriculumPhases = [
  { id: 'foundation', label: '01 FOUNDATION', skills: ['Customer Persona Deep-Dive', 'Market Sizing & TAM', 'Funnel Unit Economics', 'Pricing Logic'] },
  { id: 'build', label: '02 BUILD', skills: ['Brand Positioning & Narrative', 'High-Converting Copy', 'Creative Asset Studio', 'Lander Wireframing'] },
  { id: 'launch', label: '03 LAUNCH', skills: ['Google Ads (PMax & Search)', 'Meta Ads Manager & CBO', 'Programmatic SEO', 'WhatsApp Automation'] },
  { id: 'grow', label: '04 GROW', skills: ['GA4 & Attribution Tracking', 'Retention & Churn Control', 'Scaling Ad Spend 3x', 'Revenue Operations'] },
];

export default function InteractiveTracks() {
  const [activeRoleIdx, setActiveRoleIdx] = useState(0);
  const [activeProgIdx, setActiveProgIdx] = useState(0);
  const [activeCurriculumPhase, setActiveCurriculumPhase] = useState('foundation');
  const [modalOpen, setModalOpen] = useState(false);

  const nextProg = () => setActiveProgIdx((prev) => (prev + 1) % programs.length);
  const prevProg = () => setActiveProgIdx((prev) => (prev === 0 ? programs.length - 1 : prev - 1));

  return (
    <>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="tracks"
        data-stage="TRACKS"
        style={{
          background: '#F3F0E7',
          color: '#0A0A0A',
          padding: '60px clamp(20px, 4vw, 56px) 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* ── SECTION 07: CAREER ROLE ROULETTE ── */}
          <div style={{ textAlign: 'center', marginBottom: '90px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '14px' }}>
              <DoodleBadge text="CAREER ROLES" highlight={true} rotate={-1} />
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
              WHAT COULD YOU BECOME?
            </h2>

            {/* Role roulette switcher */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              maxWidth: '780px',
              margin: '0 auto 28px',
            }}>
              {roles.map((r, i) => (
                <button
                  key={i}
                  onClick={() => setActiveRoleIdx(i)}
                  style={{
                    background: activeRoleIdx === i ? '#6D28FF' : '#ffffff',
                    color: activeRoleIdx === i ? '#ffffff' : '#0A0A0A',
                    border: '2px solid #0A0A0A',
                    borderRadius: '999px',
                    padding: '8px 18px',
                    fontFamily: "var(--ff-mono, monospace)",
                    fontSize: '11px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: activeRoleIdx === i ? '3px 3px 0px #0A0A0A' : '2px 2px 0px #0A0A0A',
                    transform: activeRoleIdx === i ? 'translateY(-2px)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {r.title}
                </button>
              ))}
            </div>

            {/* Selected Role Card */}
            <div
              style={{
                maxWidth: '620px',
                margin: '0 auto',
                background: '#ffffff',
                border: '3px solid #0A0A0A',
                borderRadius: '20px',
                padding: '28px 32px',
                boxShadow: '8px 8px 0px #0A0A0A',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontFamily: "var(--ff-mono, monospace)", fontSize: '10.5px', fontWeight: 800, color: '#6D28FF' }}>
                  TARGET TRAJECTORY
                </span>
                <DoodleBadge text={`COMP: ${roles[activeRoleIdx].salary}`} highlight={true} />
              </div>

              <h3 style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: '26px',
                fontWeight: 900,
                margin: '0 0 8px',
                color: '#0A0A0A',
              }}>
                {roles[activeRoleIdx].title}
              </h3>

              <p style={{ fontSize: '13.5px', color: '#555555', margin: '0 0 16px', lineHeight: 1.5 }}>
                {roles[activeRoleIdx].desc}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6D28FF', fontWeight: 800, fontSize: '12px' }}>
                <DoodleArrow direction="right" color="#6D28FF" size={24} />
                <span>Start here with your 30+ project portfolio.</span>
              </div>
            </div>
          </div>

          {/* ── SECTION 08: 3-CARD PROGRAM DECK ── */}
          <div style={{ textAlign: 'center', marginBottom: '90px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '14px' }}>
              <DoodleBadge text="SELECT YOUR FORMAT" highlight={false} rotate={2} />
            </div>

            <h2 style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 36px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
            }}>
              THREE LEARNING TRACKS. ONE STANDARD.
            </h2>

            {/* Overlapping 3-Card Deck */}
            <div style={{ position: 'relative', maxWidth: '680px', height: '340px', margin: '0 auto 28px' }}>
              {programs.map((prog, idx) => {
                const offset = (idx - activeProgIdx + programs.length) % programs.length;
                const isFront = offset === 0;

                return (
                  <motion.div
                    key={prog.id}
                    animate={{
                      scale: isFront ? 1 : 0.94 - offset * 0.03,
                      y: isFront ? 0 : offset * 14,
                      zIndex: 30 - offset,
                      opacity: isFront ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: prog.color,
                      color: prog.textColor,
                      border: '3px solid #0A0A0A',
                      borderRadius: '24px',
                      padding: '32px clamp(20px, 3vw, 36px)',
                      boxShadow: '8px 8px 0px #0A0A0A',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{
                          background: prog.color === '#6D28FF' ? '#ffffff' : '#6D28FF',
                          color: prog.color === '#6D28FF' ? '#6D28FF' : '#ffffff',
                          fontFamily: "var(--ff-mono, monospace)",
                          fontSize: '10px',
                          fontWeight: 900,
                          padding: '4px 10px',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                        }}>
                          {prog.badge}
                        </span>
                        <span style={{ fontSize: '11px', fontWeight: 800, fontFamily: "var(--ff-mono, monospace)", color: prog.color === '#6D28FF' ? '#ffffff' : '#6D28FF' }}>
                          {prog.duration}
                        </span>
                      </div>

                      <h3 style={{
                        fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                        fontSize: '24px',
                        fontWeight: 900,
                        margin: '0 0 6px',
                        letterSpacing: '-0.02em',
                      }}>
                        {prog.title}
                      </h3>

                      <p style={{ fontSize: '12px', color: prog.color === '#6D28FF' ? '#ffffff' : '#555555', margin: '0 0 14px', fontWeight: 600 }}>
                        {prog.format} · <strong style={{ color: prog.color === '#6D28FF' ? '#ffffff' : '#0A0A0A' }}>{prog.highlight}</strong>
                      </p>

                      <p style={{ fontSize: '13.5px', color: prog.color === '#6D28FF' ? 'rgba(255,255,255,0.95)' : '#333333', margin: 0, lineHeight: 1.45, fontWeight: 500 }}>
                        {prog.benefit}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '16px',
                      borderTop: prog.color === '#6D28FF' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(10, 10, 10, 0.1)',
                    }}>
                      <button
                        onClick={() => setModalOpen(true)}
                        style={{
                          background: prog.color === '#6D28FF' ? '#ffffff' : '#6D28FF',
                          color: prog.color === '#6D28FF' ? '#6D28FF' : '#ffffff',
                          border: '2px solid #0A0A0A',
                          borderRadius: '999px',
                          padding: '10px 24px',
                          fontWeight: 900,
                          fontSize: '12px',
                          textTransform: 'uppercase',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          boxShadow: '3px 3px 0px #0A0A0A',
                        }}
                      >
                        <span>{prog.cta}</span>
                        <ArrowRight size={14} />
                      </button>

                      <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 800, color: prog.color === '#6D28FF' ? '#ffffff' : '#6D28FF' }}>
                        {idx + 1} / {programs.length}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Flip Deck Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <button
                onClick={prevProg}
                style={{
                  background: '#ffffff',
                  border: '2px solid #0A0A0A',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '3px 3px 0px #0A0A0A',
                }}
                aria-label="Previous Program"
              >
                <ArrowLeft size={16} color="#0A0A0A" />
              </button>

              <button
                onClick={nextProg}
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  border: '2px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '10px 22px',
                  fontWeight: 900,
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: '3px 3px 0px #0A0A0A',
                }}
              >
                <span>NEXT TRACK</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* ── SECTION 09: CURRICULUM (GIANT 16 TERMS SLIDER) ── */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '14px' }}>
              <DoodleBadge text="CURRICULUM ARCHITECTURE" highlight={true} rotate={-1} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
              <span style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(3.6rem, 7vw, 6rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                color: '#6D28FF',
              }}>
                16
              </span>
              <div style={{ textAlign: 'left' }}>
                <strong style={{ display: 'block', fontSize: '18px', fontWeight: 900, color: '#0A0A0A' }}>TERMS &amp; STACKS</strong>
                <span style={{ fontSize: '12px', color: '#555555', fontFamily: "var(--ff-mono, monospace)" }}>
                  FROM 0-TO-1 TO REVENUE SCALE
                </span>
              </div>
            </div>

            {/* 4-Phase Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '28px',
            }}>
              {curriculumPhases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setActiveCurriculumPhase(phase.id)}
                  style={{
                    background: activeCurriculumPhase === phase.id ? '#6D28FF' : '#ffffff',
                    color: activeCurriculumPhase === phase.id ? '#ffffff' : '#0A0A0A',
                    border: '2px solid #0A0A0A',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontFamily: "var(--ff-mono, monospace)",
                    fontSize: '11px',
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: activeCurriculumPhase === phase.id ? '3px 3px 0px #0A0A0A' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {phase.label}
                </button>
              ))}
            </div>

            {/* Active Phase Skills Box */}
            <div style={{
              maxWidth: '680px',
              margin: '0 auto',
              background: '#ffffff',
              border: '2.5px solid #0A0A0A',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '6px 6px 0px #0A0A0A',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              textAlign: 'left',
            }}>
              {curriculumPhases.find((p) => p.id === activeCurriculumPhase)?.skills.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', fontWeight: 700, color: '#0A0A0A' }}>
                  <CheckCircle2 size={16} color="#6D28FF" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
