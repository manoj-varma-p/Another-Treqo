'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, RefreshCw } from 'lucide-react';
import { TreqoDoodle, DoodleBadge, DoodleArrow } from './Doodles';
import ApplyModal from './ApplyModal';

const FLOATING_TAGS = [
  {
    id: 'revenue',
    label: 'REVENUE ₹18.5k',
    icon: '💰',
    color: '#ffffff',
    bg: '#6D28FF',
    x: 0,
    y: -190,
    delay: 0,
    characterState: 'revenue',
    speech: 'Real Attributed Revenue! 💰',
  },
  {
    id: 'meta',
    label: 'META ADS',
    icon: '⚡',
    color: '#6D28FF',
    bg: '#ffffff',
    x: -165,
    y: -110,
    delay: 0.2,
    characterState: 'meta_ads',
    speech: 'Meta Ad Ninja! ⚡ 14 Hooks Tested',
  },
  {
    id: 'seo',
    label: 'SEO 186%+',
    icon: '📈',
    color: '#6D28FF',
    bg: '#ffffff',
    x: 165,
    y: -100,
    delay: 0.4,
    characterState: 'seo',
    speech: 'Organic Growth Leader! 📈 +186% Lift',
  },
  {
    id: 'roas',
    label: 'ROAS 3.8×',
    icon: '🎯',
    color: '#6D28FF',
    bg: '#ffffff',
    x: -185,
    y: 35,
    delay: 0.6,
    characterState: 'roas',
    speech: 'Precision Target! 🎯 3.8X ROAS',
  },
  {
    id: 'leads',
    label: '247 LEADS',
    icon: '🔥',
    color: '#6D28FF',
    bg: '#ffffff',
    x: 185,
    y: 50,
    delay: 0.8,
    characterState: 'leads',
    speech: 'Growth Engine on Fire! 🔥 247 Leads',
  },
  {
    id: 'google',
    label: 'GOOGLE ADS',
    icon: '🔍',
    color: '#6D28FF',
    bg: '#ffffff',
    x: -115,
    y: 160,
    delay: 1.0,
    characterState: 'google_ads',
    speech: 'Search Intent Captured! 🔍 ₹42 CAC',
  },
  {
    id: 'campaign',
    label: 'CAMPAIGN LIVE',
    icon: '🟣',
    color: '#6D28FF',
    bg: '#ffffff',
    x: 115,
    y: 170,
    delay: 1.2,
    characterState: 'campaign_live',
    speech: 'All Systems Live! 🟣 Revenue Flowing',
  },
];

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [equippedSkills, setEquippedSkills] = useState([]);
  const [characterState, setCharacterState] = useState('confused');
  const [activeSpeech, setActiveSpeech] = useState(null);
  const [isOverDropZone, setIsOverDropZone] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const containerRef = useRef(null);

  // Equip a skill onto the character
  const equipSkill = (tag) => {
    if (!equippedSkills.includes(tag.id)) {
      const nextSkills = [...equippedSkills, tag.id];
      setEquippedSkills(nextSkills);
      setCharacterState(tag.characterState);
      setActiveSpeech(`${tag.speech} (Level ${nextSkills.length}/7)`);
    } else {
      setCharacterState(tag.characterState);
      setActiveSpeech(tag.speech);
    }
  };

  // Click on character -> Reset back to base beginner state & options go back to their places
  const resetCharacter = () => {
    setEquippedSkills([]);
    setCharacterState('confused');
    setActiveSpeech(null);
    setResetKey((prev) => prev + 1);
  };

  // Progressive growth scale based on how many skills have been equipped
  const growthScale = 1 + equippedSkills.length * 0.08;

  return (
    <>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="hero"
        data-stage="HERO"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#F3F0E7',
          color: '#0A0A0A',
          padding: '110px 80px 50px',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(rgba(10, 10, 10, 0.08) 1.2px, transparent 1.2px)`,
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1540px',
            width: '100%',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.9fr',
            gap: 'clamp(32px, 4vw, 64px)',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
          className="hero-grid-layout"
        >
          {/* LEFT: Enhanced Typography in #F3F0E7 & Purple */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {/* Top Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#0A0A0A',
                  color: '#ffffff',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6D28FF', animation: 'pulse 1.5s infinite' }} />
                <span>TREQO · THE MARKETING SCHOOL</span>
              </div>
              <DoodleBadge text="COHORT 2026 OPEN" rotate={-2} highlight={true} />
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(3rem, 5.5vw, 5.2rem)',
                fontWeight: 900,
                color: '#0A0A0A',
                lineHeight: 1.0,
                letterSpacing: '-0.04em',
                margin: '0 0 20px',
                textTransform: 'uppercase',
              }}
            >
              DON&apos;T JUST <br />
              LEARN MARKETING. <br />
              <span
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  padding: '4px 20px',
                  display: 'inline-block',
                  border: '3.5px solid #0A0A0A',
                  boxShadow: '7px 7px 0px #0A0A0A',
                  transform: 'rotate(-1deg)',
                  marginTop: '6px',
                }}
              >
                DO IT.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                color: '#2A2A2A',
                lineHeight: 1.55,
                maxWidth: '720px',
                margin: '0 0 32px',
                fontWeight: 500,
              }}
            >
              Learn marketing the way founders, strategists, and growth leaders do. <br />
              <strong style={{ color: '#6D28FF', fontWeight: 900 }}>30+ live projects</strong>, <strong style={{ color: '#0A0A0A', fontWeight: 900 }}>100% placement support</strong>, and a training model built around real revenue — not theory.
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setModalOpen(true)}
                style={{
                  background: '#6D28FF',
                  color: '#ffffff',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '20px 44px',
                  fontWeight: 900,
                  fontSize: '16px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  boxShadow: '6px 6px 0px #0A0A0A',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '8px 8px 0px #0A0A0A';
                  e.currentTarget.style.background = '#581bd6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '6px 6px 0px #0A0A0A';
                  e.currentTarget.style.background = '#6D28FF';
                }}
              >
                <span>Apply Now</span>
                <ArrowRight size={20} />
              </button>

              <a
                href="#choose-system"
                style={{
                  background: '#ffffff',
                  color: '#0A0A0A',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '20px 36px',
                  fontWeight: 800,
                  fontSize: '16px',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: '5px 5px 0px #0A0A0A',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '7px 7px 0px #0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '5px 5px 0px #0A0A0A';
                }}
              >
                <span>See How It Works</span>
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Handwritten Note Annotation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 26 }}>
              <DoodleArrow direction="right" color="#6D28FF" size={36} />
              <span
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                  fontSize: '16px',
                  color: '#6D28FF',
                }}
              >
                &ldquo;Your future portfolio is judging you.&rdquo;
              </span>
            </div>
          </div>

          {/* RIGHT: Fixed Floating & Interactive Marketing Universe */}
          <div
            ref={containerRef}
            style={{
              position: 'relative',
              width: '100%',
              height: '540px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Ambient Concentric Orbit Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '430px',
                height: '430px',
                borderRadius: '50%',
                border: isOverDropZone ? '2.5px dashed #6D28FF' : '1.5px dashed rgba(10, 10, 10, 0.15)',
                transition: 'border 0.2s ease',
                pointerEvents: 'none',
              }}
            />

            {/* Central Target Character (Grows as skills are added) */}
            <div
              onClick={resetCharacter}
              style={{
                position: 'relative',
                zIndex: 10,
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                userSelect: 'none',
              }}
              title={equippedSkills.length > 0 ? "Click character to reset all options back to their places!" : "Drag skills here to grow character!"}
            >
              {/* Dynamic Speech Notification */}
              <AnimatePresence mode="wait">
                {activeSpeech && (
                  <motion.div
                    key={activeSpeech}
                    initial={{ opacity: 0, y: 10, scale: 0.88 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.88 }}
                    transition={{ duration: 0.22 }}
                    style={{
                      position: 'absolute',
                      top: '-68px',
                      background: '#ffffff',
                      color: '#0A0A0A',
                      border: '2.5px solid #0A0A0A',
                      borderRadius: '16px',
                      padding: '8px 16px',
                      boxShadow: '4px 4px 0px #6D28FF',
                      fontSize: '12.5px',
                      fontWeight: 900,
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      whiteSpace: 'nowrap',
                      zIndex: 30,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span>{activeSpeech}</span>
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
                )}
              </AnimatePresence>

              {/* Character Visual: Scales Up with Every Equipped Skill */}
              <motion.div
                animate={{
                  scale: growthScale,
                  y: [0, -10, 0],
                }}
                transition={{
                  scale: { type: 'spring', stiffness: 280, damping: 18 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                style={{
                  filter: equippedSkills.length === 7 ? 'drop-shadow(0 0 24px #6D28FF)' : 'none',
                }}
              >
                <TreqoDoodle state={characterState} size={230} />
              </motion.div>

              {/* Status Hint Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  marginTop: '12px',
                  background: equippedSkills.length > 0 ? '#6D28FF' : '#ffffff',
                  color: equippedSkills.length > 0 ? '#ffffff' : '#0A0A0A',
                  border: '1.5px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '4px 14px',
                  fontSize: '11px',
                  fontFamily: "var(--ff-mono, monospace)",
                  fontWeight: 900,
                  boxShadow: '2px 2px 0px #0A0A0A',
                  whiteSpace: 'nowrap',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                }}
              >
                {equippedSkills.length > 0 ? (
                  <>
                    <RefreshCw size={12} />
                    <span>Level {equippedSkills.length}/7 · Click to Reset!</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={12} color="#6D28FF" />
                    <span>Drag skills onto character to grow!</span>
                  </>
                )}
              </motion.div>
            </div>

            {/* Orbiting Fixed Floating Skill Pills */}
            {FLOATING_TAGS.map((item, idx) => {
              const isEquipped = equippedSkills.includes(item.id);

              return (
                <motion.div
                  key={`orbit-${item.id}-${resetKey}`}
                  animate={{
                    x: [item.x, item.x + (idx % 2 === 0 ? 12 : -12), item.x],
                    y: [item.y, item.y + (idx % 2 === 0 ? -14 : 14), item.y],
                    rotate: [idx % 2 === 0 ? -3 : 3, idx % 2 === 0 ? 3 : -3, idx % 2 === 0 ? -3 : 3],
                  }}
                  transition={{
                    duration: 4 + (idx % 3),
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: item.delay,
                  }}
                  style={{
                    position: 'absolute',
                    zIndex: isEquipped ? 25 : 12,
                  }}
                >
                  <motion.div
                    drag
                    dragSnapToOrigin={true}
                    dragElastic={0.2}
                    whileDrag={{
                      scale: 1.2,
                      zIndex: 60,
                      cursor: 'grabbing',
                      boxShadow: '8px 8px 0px #6D28FF',
                    }}
                    onDragStart={() => setIsOverDropZone(true)}
                    onDragEnd={(e, info) => {
                      setIsOverDropZone(false);
                      const finalDist = Math.hypot(info.offset.x + item.x, info.offset.y + item.y);
                      if (finalDist < 140 || Math.hypot(info.offset.x, info.offset.y) > 40) {
                        equipSkill(item);
                      }
                    }}
                    onClick={() => equipSkill(item)}
                    whileHover={{ scale: 1.14, cursor: 'grab' }}
                    whileTap={{ scale: 0.93 }}
                    style={{
                      background: isEquipped ? '#6D28FF' : item.bg,
                      color: isEquipped ? '#ffffff' : item.color,
                      border: '2.5px solid #0A0A0A',
                      borderRadius: '16px',
                      padding: '11px 20px',
                      fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                      fontSize: '13.5px',
                      fontWeight: 900,
                      boxShadow: isEquipped ? '5px 5px 0px #0A0A0A' : '4px 4px 0px #0A0A0A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      whiteSpace: 'nowrap',
                      userSelect: 'none',
                      touchAction: 'none',
                    }}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }
      `}</style>
    </>
  );
}