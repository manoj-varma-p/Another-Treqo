'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Award,
  Layers,
  Wrench,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Target,
  BarChart2,
  Search,
  Globe,
  Star,
  Zap,
  Mail,
  Plus,
  ArrowUpRight,
  ShoppingBag,
  MessageSquare,
  Bot,
  Link2,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { DoodleBadge } from './Doodles';

const LinkedinIcon = ({ size = 14, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   DATA 1: ACCORDION TUTORS DATA (The Treqo Masters)
───────────────────────────────────────────────────────────── */
const TUTOR_DATA = [
  {
    id: 1,
    name: 'Lokesh Dama',
    role: 'Product Management',
    experience: 'Founder',
    details: 'Founder of TAC. Teaches product thinking, execution, and scaling digital products.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    company: 'TAC',
    linkedin: 'https://www.linkedin.com/in/lokeshdama2030',
  },
  {
    id: 2,
    name: 'Valli Sayyad',
    role: 'Digital Marketing',
    experience: '7 Years',
    details: 'Chief Growth Officer at TAC. Expert in performance marketing and scaling brands.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    company: 'TAC',
    linkedin: 'https://www.linkedin.com/in/vali-sayyad-895402160',
  },
  {
    id: 3,
    name: 'Durga Sai Vasagiri',
    role: 'AI in Marketing',
    experience: 'Co-Founder',
    details: 'Co-founder of TAC. Focuses on AI-driven marketing strategies and automation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    company: 'TAC',
    linkedin: 'https://www.linkedin.com/in/durgasaiv',
  },
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: i + 4,
    name: 'Coming Soon',
    role: 'Expert Mentor',
    experience: 'Industry Leader',
    details: 'New elite practitioner mentors from high-growth unicorns will be revealed soon.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    company: 'TAC',
    linkedin: '#',
  })),
];

/* ─────────────────────────────────────────────────────────────
   DATA 2: DASHBOARD FEED & CHARTS
───────────────────────────────────────────────────────────── */
const DASHBOARD_FEED = [
  { dot: '#22C55E', msg: 'Meta Ads · 1,240 leads synced · CTR 8.4% · ROAS 4.2x' },
  { dot: '#3B82F6', msg: 'GA4 · 12,841 sessions · Bounce 28% · CVR 4.2%' },
  { dot: '#EC4899', msg: 'SEMrush · 87 SEO issues fixed · Domain Rating 42' },
  { dot: '#EAB308', msg: 'Zapier · 340 zaps triggered · 0 errors · 99.9% uptime' },
  { dot: '#8B5CF6', msg: 'Google Ads PMAX · Impression share 68% · CPC ₹12.4' },
  { dot: '#22C55E', msg: 'Klaviyo · 42% open rate · 8.1% CTR · ₹3.2L revenue' },
  { dot: '#3B82F6', msg: 'LinkedIn Ads · 220 B2B leads · CPL ₹184 · CTR 1.8%' },
];

const DASHBOARD_BARS = [32, 48, 42, 62, 55, 70, 58, 78, 64, 85, 72, 91];

/* ─────────────────────────────────────────────────────────────
   DATA 3: INDUSTRY CERTIFICATIONS
───────────────────────────────────────────────────────────── */
const CERTIFICATIONS = [
  {
    provider: 'Google',
    name: 'Google Analytics 4 (GA4) Certification',
    category: 'Analytics & Attribution',
    color: '#4285F4',
    icon: BarChart2,
    badge: 'Industry Standard',
    value: 'Included Free',
  },
  {
    provider: 'Google',
    name: 'Google Ads Search & Performance Max',
    category: 'Search Engine Marketing',
    color: '#EA4335',
    icon: Search,
    badge: 'High Intent',
    value: 'Included Free',
  },
  {
    provider: 'Meta',
    name: 'Meta Certified Media Buying Professional',
    category: 'Social Paid Ads',
    color: '#0082FB',
    icon: Target,
    badge: 'Meta Pro Level',
    value: '$150 Value Free',
  },
  {
    provider: 'Meta',
    name: 'Meta Certified Creative Strategy Pro',
    category: 'Creative Fatigue & Hooks',
    color: '#0082FB',
    icon: Sparkles,
    badge: 'Creative Engine',
    value: '$150 Value Free',
  },
  {
    provider: 'HubSpot',
    name: 'Inbound & Lifecycle Marketing Certified',
    category: 'CRM & Email Automation',
    color: '#FF7A59',
    icon: Mail,
    badge: 'Retention Core',
    value: 'Included Free',
  },
  {
    provider: 'SEMrush',
    name: 'Technical SEO & Keyword Authority Pro',
    category: 'Organic Growth',
    color: '#FF642D',
    icon: Globe,
    badge: 'SEO Master',
    value: 'Included Free',
  },
];

export default function UnifiedMasterStack() {
  const [activeTab, setActiveTab] = useState('tutors');
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [feedIdx, setFeedIdx] = useState(0);
  const [metricTick, setMetricTick] = useState(0);

  useEffect(() => {
    if (isHovering || activeTab !== 'tutors') return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TUTOR_DATA.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [index, isHovering, activeTab]);

  useEffect(() => {
    const f = setInterval(() => setFeedIdx((i) => (i + 1) % DASHBOARD_FEED.length), 2200);
    const m = setInterval(() => setMetricTick((t) => t + 1), 3000);
    return () => {
      clearInterval(f);
      clearInterval(m);
    };
  }, []);

  const liveMetrics = [
    { label: 'CTR', value: metricTick % 2 === 0 ? '8.4%' : '9.1%', up: true },
    { label: 'ROAS', value: metricTick % 2 === 0 ? '4.2x' : '4.7x', up: true },
    { label: 'CPL', value: metricTick % 2 === 0 ? '₹184' : '₹171', up: false },
    { label: 'CVR', value: metricTick % 2 === 0 ? '4.2%' : '4.9%', up: true },
  ];

  const TABS = [
    { id: 'tutors', label: 'Tutors & Mentors', icon: Users, count: 'The Masters' },
    { id: 'certifications', label: 'Certifications & Proof', icon: Award, count: '6 Verified' },
    { id: 'system', label: 'Master Marketing System', icon: Layers, count: 'Live OS' },
  ];

  return (
    <section
      id="master-system"
      data-stage="MASTER_SYSTEM"
      style={{
        background: '#E5DFD0',
        color: '#0A0A0A',
        padding: '50px 80px 50px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1540px', margin: '0 auto' }}>

        {/* ── SECTION HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '12px' }}>
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
              <Sparkles size={13} color="#6D28FF" />
              <span>THE COMPLETE ECOSYSTEM</span>
            </div>
            <DoodleBadge text="ZERO FLUFF · 100% REVENUE" rotate={-2} highlight={true} />
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
            EVERYTHING INSIDE{' '}
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
              THE SYSTEM
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              color: '#444444',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.45,
              fontWeight: 500,
            }}
          >
            Learn directly from active founders and mentors, earn industry-recognized certifications, and master production-grade marketing systems.
          </p>
        </div>

        {/* ── 3 SEGMENTED OPTION TABS ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
            marginBottom: '32px',
          }}
          className="master-tabs-row"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                style={{
                  background: isActive ? '#0A0A0A' : '#ffffff',
                  color: isActive ? '#ffffff' : '#0A0A0A',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: isActive ? '5px 5px 0px #6D28FF' : '3px 3px 0px #0A0A0A',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: isActive ? '#6D28FF' : '#F3F0E7',
                      color: isActive ? '#ffffff' : '#0A0A0A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1.5px solid #0A0A0A',
                      flexShrink: 0,
                    }}
                  >
                    <TabIcon size={16} />
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                        fontSize: '14px',
                        fontWeight: 900,
                        textTransform: 'uppercase',
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {tab.label}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontFamily: "var(--ff-mono, monospace)",
                        color: isActive ? '#A78BFA' : '#666666',
                        fontWeight: 800,
                        marginTop: '2px',
                      }}
                    >
                      {tab.count}
                    </div>
                  </div>
                </div>

                {isActive && <CheckCircle2 size={18} color="#6D28FF" />}
              </motion.button>
            );
          })}
        </div>

        {/* ── UNIFIED DYNAMIC INNER SECTION CONTAINER ── */}
        <div
          style={{
            background: '#ffffff',
            border: '3px solid #0A0A0A',
            borderRadius: '28px',
            boxShadow: '10px 10px 0px #0A0A0A',
            padding: '36px clamp(20px, 3.5vw, 44px)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '600px',
          }}
        >
          <AnimatePresence mode="wait">

            {/* ══════════════════════════════════════════════════════════
                SECTION 1: TUTORS & MENTORS (3D Perspective Coverflow Carousel)
            ══════════════════════════════════════════════════════════ */}
            {activeTab === 'tutors' && (
              <motion.div
                key="tutors"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#6D28FF', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      MEET THE MASTERS
                    </span>
                    <h3 style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 900, color: '#0A0A0A', margin: 0, textTransform: 'uppercase' }}>
                      The Treqo <span style={{ color: '#6D28FF' }}>Tutors</span>
                    </h3>
                  </div>

                  <div style={{ background: '#F3F0E7', border: '1.5px solid #0A0A0A', borderRadius: '999px', padding: '6px 16px', fontSize: '11.5px', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)", color: '#0A0A0A', boxShadow: '2px 2px 0px #0A0A0A' }}>
                    ⚡ 3D Interactive Mentorship Carousel
                  </div>
                </div>

                {/* 3D Perspective Carousel Container */}
                <div
                  style={{
                    position: 'relative',
                    height: '420px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    perspective: '1200px',
                    margin: '10px auto 20px',
                    width: '100%',
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Navigation Buttons */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 10px',
                      zIndex: 50,
                      pointerEvents: 'none',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setIndex((prev) => (prev - 1 + TUTOR_DATA.length) % TUTOR_DATA.length)}
                      style={{
                        pointerEvents: 'auto',
                        background: '#ffffff',
                        color: '#0A0A0A',
                        border: '2px solid #0A0A0A',
                        padding: '12px',
                        borderRadius: '50%',
                        boxShadow: '4px 4px 0px #0A0A0A',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#6D28FF';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.color = '#0A0A0A';
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setIndex((prev) => (prev + 1) % TUTOR_DATA.length)}
                      style={{
                        pointerEvents: 'auto',
                        background: '#ffffff',
                        color: '#0A0A0A',
                        border: '2px solid #0A0A0A',
                        padding: '12px',
                        borderRadius: '50%',
                        boxShadow: '4px 4px 0px #0A0A0A',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.15s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#6D28FF';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.color = '#0A0A0A';
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* 3D Cards */}
                  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {TUTOR_DATA.map((tutor, i) => {
                      const total = TUTOR_DATA.length;
                      const diff = (i - index + total) % total;
                      const isActive = diff === 0;

                      let animStyle = {
                        x: 0,
                        scale: 1,
                        opacity: 1,
                        filter: 'blur(0px)',
                        zIndex: 10,
                        rotateY: 0,
                      };

                      if (diff === 1) {
                        animStyle = {
                          x: 400,
                          scale: 0.82,
                          opacity: 0.55,
                          filter: 'blur(3px)',
                          zIndex: 5,
                          rotateY: -12,
                        };
                      } else if (diff === total - 1) {
                        animStyle = {
                          x: -400,
                          scale: 0.82,
                          opacity: 0.55,
                          filter: 'blur(3px)',
                          zIndex: 5,
                          rotateY: 12,
                        };
                      } else if (diff !== 0) {
                        animStyle = {
                          x: diff > 1 ? 540 : -540,
                          scale: 0.6,
                          opacity: 0,
                          zIndex: 0,
                          filter: 'blur(10px)',
                          rotateY: 0,
                        };
                      }

                      return (
                        <motion.div
                          key={tutor.id}
                          animate={animStyle}
                          transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
                          style={{
                            position: 'absolute',
                            cursor: 'pointer',
                            zIndex: animStyle.zIndex,
                            transformStyle: 'preserve-3d',
                          }}
                          onClick={() => setIndex(i)}
                        >
                          <motion.div
                            whileHover={isActive ? { y: -8 } : {}}
                            style={{
                              width: '560px',
                              maxWidth: '85vw',
                              height: '350px',
                              borderRadius: '24px',
                              overflow: 'hidden',
                              border: '3px solid #0A0A0A',
                              boxShadow: isActive ? '10px 10px 0px #0A0A0A' : '4px 4px 0px #0A0A0A',
                              position: 'relative',
                              background: '#0A0A0A',
                            }}
                          >
                            <img
                              src={tutor.image}
                              alt={tutor.name}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                              }}
                              draggable={false}
                            />

                            <div
                              style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '24px',
                                textAlign: 'left',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                                <Star size={12} color="#6D28FF" fill="#6D28FF" />
                                <span
                                  style={{
                                    fontFamily: "var(--ff-mono, monospace)",
                                    fontSize: '11px',
                                    fontWeight: 900,
                                    color: '#A78BFA',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                  }}
                                >
                                  {tutor.role}
                                </span>
                              </div>

                              <h3
                                style={{
                                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                                  fontSize: '26px',
                                  fontWeight: 900,
                                  color: '#ffffff',
                                  margin: '0 0 4px',
                                  letterSpacing: '-0.02em',
                                }}
                              >
                                {tutor.name}
                              </h3>

                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span
                                  style={{
                                    background: '#6D28FF',
                                    color: '#ffffff',
                                    fontFamily: "var(--ff-mono, monospace)",
                                    fontSize: '10.5px',
                                    fontWeight: 800,
                                    padding: '3px 8px',
                                    borderRadius: '5px',
                                    border: '1px solid #0A0A0A',
                                  }}
                                >
                                  {tutor.company}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Indicators */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px', gap: '8px' }}>
                  {TUTOR_DATA.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      style={{
                        height: '6px',
                        width: i === index ? '48px' : '12px',
                        background: i === index ? '#6D28FF' : '#0A0A0A',
                        opacity: i === index ? 1 : 0.25,
                        border: 'none',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ══════════════════════════════════════════════════════════
                SECTION 2: CERTIFICATIONS & CREDENTIALS VIEW (50/50 Split)
            ══════════════════════════════════════════════════════════ */}
            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '36px',
                  alignItems: 'stretch',
                }}
                className="cert-split-grid"
              >
                {/* Left: TREQO Certification (50%) */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
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
                        fontSize: '24px',
                        fontWeight: 900,
                        color: '#0A0A0A',
                        margin: '0 0 6px',
                        textTransform: 'uppercase',
                      }}
                    >
                      TREQO Certification
                    </h3>

                    <p style={{ fontSize: '13.5px', color: '#444444', margin: '0 0 16px', lineHeight: 1.5, fontWeight: 500 }}>
                      Awarded on completion of your capstone project — a real campaign, built &amp; launched with real numbers attached.
                    </p>

                    <div
                      style={{
                        background: '#FAF9F8',
                        border: '2.5px solid #0A0A0A',
                        borderRadius: '18px',
                        padding: '14px',
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
                          borderRadius: '10px',
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
                          marginTop: '10px',
                          fontSize: '11.5px',
                          fontFamily: "var(--ff-mono, monospace)",
                          fontWeight: 800,
                          color: '#6D28FF',
                        }}
                      >
                        <CheckCircle2 size={13} />
                        <span>Shareable on LinkedIn &amp; verified by hiring managers</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Dual Flowing Vertical Marquee (50%) */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span
                        style={{
                          background: '#E5DFD0',
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
                        fontSize: '24px',
                        fontWeight: 900,
                        color: '#0A0A0A',
                        margin: '0 0 6px',
                        textTransform: 'uppercase',
                      }}
                    >
                      Other Industry Certification
                    </h3>

                    <p style={{ fontSize: '13.5px', color: '#444444', margin: '0 0 12px', lineHeight: 1.5, fontWeight: 500 }}>
                      From Google &amp; Meta to HubSpot &amp; SEMrush — graduate with 30+ credentials recruiters look for.
                    </p>

                    <div style={{ display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' }}>
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
                            gap: 5,
                            background: p.bg,
                            border: `1.5px solid ${p.text}`,
                            borderRadius: '999px',
                            padding: '2px 8px',
                          }}
                        >
                          <span style={{ fontSize: '10px', fontWeight: 900, color: p.text, fontFamily: "var(--ff-mono, monospace)" }}>
                            {p.name}
                          </span>
                          <span style={{ fontSize: '9.5px', fontWeight: 800, color: '#555555', fontFamily: "var(--ff-mono, monospace)" }}>
                            {p.count}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Vertical Flowing Marquee */}
                    <div
                      style={{
                        height: '380px',
                        overflow: 'hidden',
                        position: 'relative',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 72%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 72%, transparent 100%)',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 12,
                        background: '#FAF9F8',
                        border: '2px solid #0A0A0A',
                        borderRadius: '16px',
                        padding: '16px 12px 28px',
                        boxShadow: '4px 4px 0px #0A0A0A',
                      }}
                    >
                      <div style={{ overflow: 'hidden', height: '100%' }}>
                        <motion.div
                          animate={{ y: ['-33.33%', '0%'] }}
                          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                        >
                          {[...CERTIFICATIONS, ...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, i) => (
                            <div
                              key={i}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width: '100%',
                                background: '#ffffff',
                                border: '1.5px solid #0A0A0A',
                                borderRadius: '12px',
                                padding: '10px 12px',
                                boxShadow: '2px 2px 0px #0A0A0A',
                                marginBottom: '10px',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                                <span
                                  style={{
                                    fontSize: '9px',
                                    fontWeight: 900,
                                    color: cert.color,
                                    border: `1px solid ${cert.color}`,
                                    borderRadius: '4px',
                                    padding: '1px 5px',
                                    fontFamily: "var(--ff-mono, monospace)",
                                  }}
                                >
                                  {cert.provider}
                                </span>
                                <span style={{ fontSize: '9px', fontWeight: 800, color: '#6D28FF', fontFamily: "var(--ff-mono, monospace)" }}>
                                  {cert.value}
                                </span>
                              </div>
                              <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: 800, color: '#0A0A0A', lineHeight: 1.2, fontFamily: "var(--ff-display, 'Outfit', sans-serif)" }}>
                                {cert.name}
                              </p>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9px', color: '#6D28FF', fontWeight: 800 }}>
                                <span>Verified</span>
                                <CheckCircle2 size={10} color="#6D28FF" />
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>

                      <div style={{ overflow: 'hidden', height: '100%' }}>
                        <motion.div
                          animate={{ y: ['0%', '-33.33%'] }}
                          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                        >
                          {[...CERTIFICATIONS.slice().reverse(), ...CERTIFICATIONS.slice().reverse(), ...CERTIFICATIONS.slice().reverse()].map((cert, i) => (
                            <div
                              key={i}
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width: '100%',
                                background: '#ffffff',
                                border: '1.5px solid #0A0A0A',
                                borderRadius: '12px',
                                padding: '10px 12px',
                                boxShadow: '2px 2px 0px #0A0A0A',
                                marginBottom: '10px',
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                                <span
                                  style={{
                                    fontSize: '9px',
                                    fontWeight: 900,
                                    color: cert.color,
                                    border: `1px solid ${cert.color}`,
                                    borderRadius: '4px',
                                    padding: '1px 5px',
                                    fontFamily: "var(--ff-mono, monospace)",
                                  }}
                                >
                                  {cert.provider}
                                </span>
                                <span style={{ fontSize: '9px', fontWeight: 800, color: '#6D28FF', fontFamily: "var(--ff-mono, monospace)" }}>
                                  {cert.value}
                                </span>
                              </div>
                              <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: 800, color: '#0A0A0A', lineHeight: 1.2, fontFamily: "var(--ff-display, 'Outfit', sans-serif)" }}>
                                {cert.name}
                              </p>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9px', color: '#6D28FF', fontWeight: 800 }}>
                                <span>Verified</span>
                                <CheckCircle2 size={10} color="#6D28FF" />
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ══════════════════════════════════════════════════════════
                SECTION 3: MASTER MARKETING SYSTEM (Live Laptop Showcase OS in Treqo Theme)
            ══════════════════════════════════════════════════════════ */}
            {activeTab === 'system' && (
              <motion.div
                key="system"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                {/* ── Top Header & Title ── */}
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <h3
                    style={{
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      fontSize: 'clamp(22px, 2.6vw, 34px)',
                      fontWeight: 900,
                      color: '#0A0A0A',
                      margin: '0 0 6px',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                    }}
                  >
                    Your Dashboard,{' '}
                    <span
                      style={{
                        background: '#6D28FF',
                        color: '#ffffff',
                        padding: '2px 14px',
                        display: 'inline-block',
                        border: '2px solid #0A0A0A',
                        boxShadow: '3px 3px 0px #0A0A0A',
                        transform: 'rotate(-1deg)',
                      }}
                    >
                      From Day One.
                    </span>
                  </h3>

                  <p
                    style={{
                      fontSize: '13px',
                      color: '#555555',
                      lineHeight: 1.45,
                      maxWidth: '620px',
                      margin: '0 auto',
                      fontWeight: 500,
                    }}
                  >
                    Every metric you see below is what you'll move — live campaigns, real spend, real results. Not theory. Execution.
                  </p>
                </div>

                {/* ── Laptop Chassis & Interactive SVG Screen ── */}
                <div
                  style={{
                    position: 'relative',
                    maxWidth: '780px',
                    margin: '0 auto 16px',
                  }}
                >
                  {/* Floating badge top-right */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      right: '4%',
                      zIndex: 30,
                      background: '#ffffff',
                      border: '2px solid #0A0A0A',
                      borderRadius: '12px',
                      padding: '8px 14px',
                      boxShadow: '4px 4px 0px #6D28FF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <TrendingUp size={16} color="#6D28FF" />
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 900, color: '#0A0A0A', fontFamily: "var(--ff-mono, monospace)" }}>
                        ROAS 4.2x ↑
                      </div>
                      <div style={{ fontSize: '9px', color: '#6D28FF', fontWeight: 900, letterSpacing: '0.08em', fontFamily: "var(--ff-mono, monospace)" }}>
                        LIVE CAMPAIGN
                      </div>
                    </div>
                  </div>

                  {/* Floating badge bottom-left */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '50px',
                      left: '3%',
                      zIndex: 30,
                      background: '#0A0A0A',
                      border: '2px solid #22C55E',
                      borderRadius: '12px',
                      padding: '8px 14px',
                      boxShadow: '4px 4px 0px #0A0A0A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E' }} />
                    <div style={{ fontSize: '11px', fontWeight: 900, color: '#ffffff', fontFamily: "var(--ff-mono, monospace)" }}>
                      Meta Campaign Live
                    </div>
                  </div>

                  {/* ── REALISTIC LAPTOP SVG ── */}
                  <svg
                    viewBox="0 0 900 580"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '100%', display: 'block', filter: 'drop-shadow(0 20px 30px rgba(10,10,10,0.15))' }}
                  >
                    <defs>
                      <linearGradient id="lidTop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2A2A2E" />
                        <stop offset="100%" stopColor="#1A1A1E" />
                      </linearGradient>
                      <linearGradient id="lidSide" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#111113" />
                        <stop offset="100%" stopColor="#222226" />
                      </linearGradient>
                      <linearGradient id="baseTop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2E2E32" />
                        <stop offset="100%" stopColor="#222226" />
                      </linearGradient>
                      <linearGradient id="baseFront" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1A1A1E" />
                        <stop offset="100%" stopColor="#111113" />
                      </linearGradient>
                      <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0D0622" />
                        <stop offset="100%" stopColor="#0A0418" />
                      </linearGradient>
                      <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6D28FF" />
                        <stop offset="100%" stopColor="#4C1D95" />
                      </linearGradient>
                      <clipPath id="screenClip">
                        <rect x="72" y="26" width="756" height="454" rx="6" />
                      </clipPath>
                    </defs>

                    {/* LID BACK */}
                    <path d="M60 18 Q450 8 840 18 L830 26 Q450 16 70 26 Z" fill="#111113" />
                    {/* LID FACE */}
                    <rect x="60" y="18" width="780" height="466" rx="10" fill="url(#lidTop)" />
                    <rect x="60" y="18" width="780" height="80" rx="10" fill="rgba(255,255,255,0.03)" />
                    {/* LID EDGES */}
                    <path d="M60 18 L50 26 L50 492 L60 484 Z" fill="url(#lidSide)" />
                    <path d="M840 18 L850 26 L850 492 L840 484 Z" fill="url(#lidSide)" />
                    {/* SCREEN BEZEL */}
                    <rect x="68" y="22" width="764" height="462" rx="8" fill="#111113" />
                    {/* SCREEN SURFACE */}
                    <rect x="72" y="26" width="756" height="454" rx="6" fill="url(#screenGrad)" />

                    {/* ══ SCREEN CONTENT ══════════════════════════════ */}
                    <g clipPath="url(#screenClip)">
                      {/* Top bar */}
                      <rect x="72" y="26" width="756" height="32" fill="#160935" />
                      {/* Traffic lights */}
                      <circle cx="96" cy="42" r="5.5" fill="#FF5F57" />
                      <circle cx="114" cy="42" r="5.5" fill="#FFBD2E" />
                      <circle cx="132" cy="42" r="5.5" fill="#28CA42" />
                      {/* URL bar */}
                      <rect x="240" y="33" width="360" height="18" rx="9" fill="rgba(255,255,255,0.06)" />
                      <text x="420" y="45.5" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle" fontFamily="monospace">
                        dashboard.treqo.com/live-campaigns
                      </text>

                      {/* SIDEBAR */}
                      <rect x="72" y="58" width="80" height="422" fill="#0A0320" />
                      <rect x="88" y="72" width="48" height="14" rx="4" fill="#6D28FF" />
                      {[0, 1, 2, 3, 4, 5].map((i) => (
                        <g key={i}>
                          <rect
                            x="84"
                            y={102 + i * 52}
                            width="48"
                            height="36"
                            rx="8"
                            fill={i === 0 ? 'rgba(109,40,255,0.35)' : 'rgba(255,255,255,0.03)'}
                          />
                          <rect
                            x="92"
                            y={115 + i * 52}
                            width="16"
                            height="10"
                            rx="3"
                            fill={i === 0 ? '#6D28FF' : 'rgba(255,255,255,0.1)'}
                          />
                        </g>
                      ))}

                      {/* MAIN CONTENT AREA */}
                      <text x="168" y="80" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                        Campaign Performance Overview
                      </text>
                      <text x="168" y="93" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">
                        Last updated: just now · Auto-refreshing 30s
                      </text>

                      {/* METRIC CARDS ROW */}
                      {liveMetrics.map((m, i) => (
                        <g key={m.label}>
                          <rect
                            x={168 + i * 147}
                            y="104"
                            width="133"
                            height="68"
                            rx="10"
                            fill="rgba(109,40,255,0.15)"
                            stroke="rgba(109,40,255,0.35)"
                            strokeWidth="0.8"
                          />
                          <rect x={168 + i * 147} y="104" width="133" height="3" rx="2" fill="#6D28FF" opacity="0.8" />
                          <text x={178 + i * 147} y="122" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">
                            {m.label}
                          </text>
                          <text x={178 + i * 147} y="147" fill="white" fontSize="18" fontWeight="bold" fontFamily="monospace">
                            {m.value}
                          </text>
                          <text x={278 + i * 147} y="147" fill={m.up ? '#22C55E' : '#F87171'} fontSize="9" fontFamily="monospace">
                            {m.up ? '↑' : '↓'}
                          </text>
                        </g>
                      ))}

                      {/* BAR CHART */}
                      <rect x="168" y="184" width="330" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                      <text x="180" y="201" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">
                        Conversions · Last 30 days
                      </text>
                      {[0, 1, 2, 3].map((i) => (
                        <line key={i} x1="180" y1={316 - i * 34} x2="488" y2={316 - i * 34} stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
                      ))}
                      {DASHBOARD_BARS.map((h, i) => {
                        const barH = h * 1.05;
                        return (
                          <g key={i}>
                            <rect
                              x={182 + i * 25}
                              y={316 - barH}
                              width="18"
                              height={barH}
                              rx="4"
                              fill={i === DASHBOARD_BARS.length - 1 ? 'url(#barGrad)' : `rgba(109,40,255,${0.28 + i * 0.055})`}
                            />
                            {i === DASHBOARD_BARS.length - 1 && (
                              <rect x={182 + i * 25} y={316 - barH} width="18" height="4" rx="2" fill="#A78BFA" opacity="0.8">
                                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
                              </rect>
                            )}
                          </g>
                        );
                      })}

                      {/* DONUT CHART */}
                      <rect x="508" y="184" width="164" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                      <text x="520" y="201" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">
                        Channel Mix
                      </text>
                      <circle cx="590" cy="280" r="42" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="18" />
                      <circle cx="590" cy="280" r="42" fill="none" stroke="#6D28FF" strokeWidth="18" strokeDasharray="88 176" strokeDashoffset="44" />
                      <circle cx="590" cy="280" r="42" fill="none" stroke="#3B82F6" strokeWidth="18" strokeDasharray="52 176" strokeDashoffset="-44" />
                      <circle cx="590" cy="280" r="42" fill="none" stroke="#22C55E" strokeWidth="18" strokeDasharray="36 176" strokeDashoffset="-96" />
                      <text x="590" y="276" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        50%
                      </text>
                      <text x="590" y="287" fill="rgba(255,255,255,0.4)" fontSize="7" textAnchor="middle" fontFamily="monospace">
                        Meta
                      </text>
                      {[
                        ['#6D28FF', 'Meta', '50%'],
                        ['#3B82F6', 'Google', '30%'],
                        ['#22C55E', 'Email', '20%'],
                      ].map(([c, l, v], i) => (
                        <g key={l}>
                          <rect x="520" y={300 + i * 13} width="8" height="8" rx="2" fill={c} />
                          <text x="532" y={308 + i * 13} fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">
                            {l} {v}
                          </text>
                        </g>
                      ))}

                      {/* LIVE ACTIVITY FEED */}
                      <rect x="168" y="354" width="504" height="96" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
                      <text x="180" y="371" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">
                        Live Activity Feed
                      </text>
                      <circle cx="516" cy="368" r="3" fill="#22C55E">
                        <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
                      </circle>
                      <text x="522" y="372" fill="#22C55E" fontSize="7" fontFamily="monospace">
                        LIVE
                      </text>

                      {DASHBOARD_FEED.slice(0, 4).map((item, i) => (
                        <g key={i}>
                          <circle cx="184" cy={388 + i * 16} r="3" fill={item.dot} />
                          <text
                            x="194"
                            y={392 + i * 16}
                            fill={i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)'}
                            fontSize="8"
                            fontFamily="monospace"
                          >
                            {item.msg}
                          </text>
                        </g>
                      ))}

                      {/* Blinking cursor */}
                      <rect x="656" y="434" width="2" height="10" rx="1" fill="#6D28FF">
                        <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
                      </rect>
                    </g>

                    {/* CAMERA & BASE */}
                    <circle cx="450" cy="22" r="3.5" fill="#0A0320" />
                    <circle cx="450" cy="22" r="1.5" fill="#1a1a2e" />
                    <rect x="50" y="484" width="800" height="10" rx="3" fill="#111113" />
                    <rect x="50" y="484" width="800" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
                    <path d="M18 494 Q450 490 882 494 L900 520 Q450 516 0 520 Z" fill="url(#baseTop)" />
                    <rect x="340" y="496" width="220" height="130" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                    {[0, 1, 2, 3].map((row) =>
                      Array.from({ length: row === 0 ? 13 : row === 3 ? 6 : 12 }).map((_, col) => (
                        <rect
                          key={`${row}-${col}`}
                          x={row === 3 ? 270 + col * 60 : 90 + col * 57 + row * 4}
                          y={502 + row * 22}
                          width={row === 3 ? 52 : 48}
                          height="16"
                          rx="4"
                          fill="rgba(255,255,255,0.05)"
                          stroke="rgba(255,255,255,0.07)"
                          strokeWidth="0.5"
                        />
                      ))
                    )}
                    <path d="M0 520 Q450 516 900 520 L900 540 Q450 538 0 540 Z" fill="url(#baseFront)" />
                    <path d="M0 540 Q450 538 900 540 L890 548 Q450 546 10 548 Z" fill="#0D0D10" />
                    <ellipse cx="450" cy="555" rx="380" ry="12" fill="rgba(109,40,255,0.15)" />
                  </svg>
                </div>

                {/* ── Bottom Channel Badges in Treqo Theme ── */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '14px',
                    flexWrap: 'wrap',
                  }}
                >
                  {[
                    { icon: Target, label: 'Meta Ads', val: 'ROAS 4.2x', color: '#0082FB' },
                    { icon: Search, label: 'Technical SEO', val: 'DR 42 ↑', color: '#6D28FF' },
                    { icon: Mail, label: 'Retention Email', val: '42% Open', color: '#10B981' },
                    { icon: BarChart2, label: 'GA4 Attribution', val: '12k Sessions', color: '#F59E0B' },
                  ].map(({ icon: Icon, label, val, color }) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: '#FAF9F8',
                        borderRadius: '14px',
                        padding: '12px 18px',
                        boxShadow: '3px 3px 0px #0A0A0A',
                        border: '2px solid #0A0A0A',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: color + '18',
                          border: `1.5px solid ${color}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={16} color={color} />
                      </div>
                      <div>
                        <div style={{ fontSize: '10px', fontWeight: 900, color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "var(--ff-mono, monospace)" }}>
                          {label}
                        </div>
                        <div style={{ fontSize: '13.5px', fontWeight: 900, color: '#0A0A0A', fontFamily: "var(--ff-display, 'Outfit', sans-serif)" }}>
                          {val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .master-tabs-row {
            grid-template-columns: 1fr !important;
          }
          .tutor-accordion-container {
            flex-direction: column !important;
            height: auto !important;
          }
          .tutor-expanded-inner {
            flex-direction: column !important;
          }
          .cert-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
