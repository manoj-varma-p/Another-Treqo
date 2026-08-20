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
   DATA 2: MASTER MARKETING SYSTEM (8 Ecosystems — Automation Excluded)
───────────────────────────────────────────────────────────── */
const MARKETING_ECOSYSTEMS = [
  {
    name: 'Google Ecosystem',
    category: 'Core Platform',
    icon: Globe,
    color: '#4285F4',
    desc: "Master the world's most powerful advertising and analytics ecosystem — from search intent to conversion tracking, all under one roof.",
    level: 'Core',
    tags: ['Google Ads', 'Google Analytics 4', 'Google Tag Manager', 'Google Search Console', 'Google Merchant Center', 'Performance Max'],
  },
  {
    name: 'Meta Ecosystem',
    category: 'Paid Social',
    icon: Target,
    color: '#0082FB',
    desc: 'Run full-funnel campaigns across Facebook & Instagram. Earn Meta Blueprint certifications that recruiters and agencies actively seek.',
    level: 'Core',
    tags: ['Meta Certified Media Buyer', 'Meta Certified Creative Strategy', 'Meta Ads Manager', 'Blueprint: Lead Gen', 'Blueprint: E-Commerce', 'Blueprint: Awareness'],
  },
  {
    name: 'SEO Ecosystem',
    category: 'SEO Strategy',
    icon: Search,
    color: '#7C3AED',
    desc: 'Rank on Page 1 with a complete SEO command center — from technical audits and keyword research to the emerging frontiers of AEO and GEO.',
    level: 'Advanced',
    tags: ['SEMrush', 'SE Optimize', 'AEO', 'GEO', 'Google Keyword Planner', 'Screaming Frog', 'Ahrefs'],
  },
  {
    name: 'HubSpot Hub',
    category: 'CRM & Inbound',
    icon: ShoppingBag,
    color: '#FF7A59',
    desc: "Build, nurture, and close leads with HubSpot's all-in-one CRM. From pipeline management to automated nurture sequences and reporting dashboards.",
    level: 'Intermediate',
    tags: ['HubSpot CRM', 'Marketing Hub', 'Sales Hub', 'Email Sequences', 'Landing Pages', 'Lead Scoring', 'HubSpot Academy'],
  },
  {
    name: 'Omnichannel Ecosystem',
    category: 'Engagement',
    icon: MessageSquare,
    color: '#10B981',
    desc: 'Reach your audience wherever they are — across WhatsApp, email, SMS, push notifications, and in-app messaging with unified data.',
    level: 'Advanced',
    tags: ['WhatsApp Marketing', 'Email Marketing', 'SMS Campaigns', 'Push Notifications', 'In-App Messaging', 'Klaviyo', 'MoEngage'],
  },
  {
    name: 'AI in Marketing',
    category: 'AI Strategy',
    icon: Bot,
    color: '#8B5CF6',
    desc: 'Harness the power of AI to write faster, research smarter, and build campaigns that outperform — using the tools shaping the future of marketing.',
    level: 'Advanced',
    tags: ['Claude AI', 'ChatGPT', 'Perplexity AI', 'Gemini', 'Copy.ai', 'Jasper', 'AI Prompting'],
  },
  {
    name: 'LinkedIn Hub',
    category: 'B2B Growth',
    icon: Link2,
    color: '#0A66C2',
    desc: 'Turn LinkedIn into your highest-ROI B2B channel — with organic thought leadership, Sales Navigator prospecting, and precision-targeted LinkedIn Ads.',
    level: 'Intermediate',
    tags: ['LinkedIn Ads', 'Sales Navigator', 'Thought Leadership', 'Lead Gen Forms', 'LinkedIn Analytics', 'Personal Branding', 'Company Pages'],
  },
  {
    name: 'AI Image & Editing',
    category: 'Creative AI',
    icon: ImageIcon,
    color: '#EC4899',
    desc: 'Create scroll-stopping visuals, ad creatives, and video content at scale using the latest AI image and editing platforms.',
    level: 'Intermediate',
    tags: ['Kling AI', 'Grok (Aurora)', 'Nano Banana', 'Midjourney', 'Adobe Firefly', 'Canva AI', 'RunwayML'],
  },
];

const levelColors = {
  Core: { bg: 'rgba(22, 163, 74, 0.12)', text: '#16a34a', border: '#16a34a' },
  Intermediate: { bg: 'rgba(217, 119, 6, 0.12)', text: '#d97706', border: '#d97706' },
  Advanced: { bg: 'rgba(109, 40, 255, 0.12)', text: '#6D28FF', border: '#6D28FF' },
};

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
  const [hoveredTool, setHoveredTool] = useState(null);

  useEffect(() => {
    if (isHovering || activeTab !== 'tutors') return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TUTOR_DATA.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [index, isHovering, activeTab]);

  const TABS = [
    { id: 'tutors', label: 'Tutors & Mentors', icon: Users, count: 'The Masters' },
    { id: 'certifications', label: 'Certifications & Proof', icon: Award, count: '6 Verified' },
    { id: 'system', label: 'Master Marketing System', icon: Layers, count: '8 Ecosystems' },
  ];

  return (
    <section
      id="master-system"
      data-stage="MASTER_SYSTEM"
      style={{
        background: '#F3F0E7',
        color: '#0A0A0A',
        padding: '80px 80px 90px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1540px', margin: '0 auto' }}>

        {/* ── SECTION HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
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
                        height: '320px',
                        overflow: 'hidden',
                        position: 'relative',
                        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 12,
                        background: '#FAF9F8',
                        border: '2px solid #0A0A0A',
                        borderRadius: '16px',
                        padding: '12px',
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
                SECTION 3: MASTER MARKETING SYSTEM (8 Ecosystems — No Automation)
            ══════════════════════════════════════════════════════════ */}
            {activeTab === 'system' && (
              <motion.div
                key="system"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#6D28FF', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      CURRICULUM STACK
                    </span>
                    <h3 style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 900, color: '#0A0A0A', margin: 0, textTransform: 'uppercase' }}>
                      Master The <span style={{ color: '#6D28FF' }}>Marketing System</span>
                    </h3>
                  </div>

                  <p style={{ fontSize: '13.5px', color: '#555555', margin: 0, maxWidth: '460px', fontWeight: 500, lineHeight: 1.45 }}>
                    Master the exact professional toolkit used by global growth operators to architect high-performance digital campaigns.
                  </p>
                </div>

                {/* 8 Ecosystems Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '16px',
                  }}
                  className="ecosystem-cards-grid"
                >
                  {MARKETING_ECOSYSTEMS.map((tool, i) => {
                    const isHov = hoveredTool === i;
                    const lvl = levelColors[tool.level];
                    const ToolIcon = tool.icon;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        onMouseEnter={() => setHoveredTool(i)}
                        onMouseLeave={() => setHoveredTool(null)}
                        style={{
                          position: 'relative',
                          borderRadius: '18px',
                          background: isHov ? '#ffffff' : '#FAF9F8',
                          border: '2px solid #0A0A0A',
                          padding: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          minHeight: '260px',
                          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                          transform: isHov ? 'translateY(-4px)' : 'none',
                          boxShadow: isHov ? '5px 5px 0px #6D28FF' : '3px 3px 0px #0A0A0A',
                          cursor: 'default',
                        }}
                      >
                        {/* Top: Icon + Level Badge + Arrow */}
                        <div>
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
                            <div
                              style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '12px',
                                background: isHov ? tool.color : '#0A0A0A',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1.5px solid #0A0A0A',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              <ToolIcon size={20} />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span
                                style={{
                                  fontSize: '10px',
                                  fontWeight: 900,
                                  color: lvl.text,
                                  background: lvl.bg,
                                  border: `1px solid ${lvl.border}`,
                                  borderRadius: '6px',
                                  padding: '2px 7px',
                                  fontFamily: "var(--ff-mono, monospace)",
                                  textTransform: 'uppercase',
                                }}
                              >
                                {tool.level}
                              </span>
                              <ArrowUpRight size={16} color={isHov ? '#6D28FF' : '#888888'} />
                            </div>
                          </div>

                          <div style={{ marginBottom: '6px' }}>
                            <span style={{ fontSize: '10px', fontWeight: 900, color: '#6D28FF', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: "var(--ff-mono, monospace)" }}>
                              {tool.category}
                            </span>
                          </div>

                          <h4
                            style={{
                              margin: '0 0 8px',
                              fontSize: '17px',
                              fontWeight: 900,
                              color: '#0A0A0A',
                              letterSpacing: '-0.02em',
                              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                              textTransform: 'uppercase',
                            }}
                          >
                            {tool.name}
                          </h4>

                          <p
                            style={{
                              margin: '0 0 14px',
                              fontSize: '12.5px',
                              color: '#444444',
                              lineHeight: 1.5,
                              fontWeight: 500,
                            }}
                          >
                            {tool.desc}
                          </p>
                        </div>

                        {/* Keyword Tags (Unboxed Clean Modern Highlight) */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 8px', marginTop: 'auto', paddingTop: '8px' }}>
                          {tool.tags.map((tag, t) => (
                            <span
                              key={t}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '5px',
                                fontSize: '11px',
                                fontWeight: 800,
                                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                                color: isHov ? '#0A0A0A' : '#444444',
                                background: isHov ? `${tool.color}18` : 'rgba(10, 10, 10, 0.04)',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              <span
                                style={{
                                  width: '5px',
                                  height: '5px',
                                  borderRadius: '50%',
                                  background: tool.color,
                                  flexShrink: 0,
                                  boxShadow: isHov ? `0 0 6px ${tool.color}` : 'none',
                                }}
                              />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Strip */}
                <div
                  style={{
                    marginTop: '28px',
                    padding: '16px 24px',
                    borderRadius: '16px',
                    background: '#FAF9F8',
                    border: '2px solid #0A0A0A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '16px',
                    boxShadow: '4px 4px 0px #0A0A0A',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a', boxShadow: '0 0 8px #16a34a' }} />
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#0A0A0A', fontFamily: "var(--ff-display, 'Outfit', sans-serif)" }}>
                      Enterprise standard tools included in your fee. Full live account access provided.
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 900, color: '#6D28FF', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "var(--ff-mono, monospace)" }}>
                      Industry Certified Stack
                    </span>
                    <Zap size={14} color="#6D28FF" fill="#6D28FF" />
                  </div>
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
