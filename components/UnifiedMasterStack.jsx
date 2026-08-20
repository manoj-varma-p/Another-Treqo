'use client';

import React, { useState } from 'react';
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
  Clock,
  Briefcase,
  Target,
  BarChart2,
  Search,
  Globe,
  Star,
  Zap,
  Mail,
  Plus,
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
   DATA 1: MASTER MARKETING SYSTEM (16-Sprint Flagship Modules)
───────────────────────────────────────────────────────────── */
const SYSTEM_MODULES = [
  {
    phase: '01',
    title: 'Market Research & Brand Positioning',
    caseStudy: 'Tanishq (Luxury)',
    level: 'Beginner',
    duration: '2 Weeks',
    projects: '3 Live Briefs',
    tools: ['Google Trends', 'ChatGPT', 'Notion'],
    desc: 'Master customer empathy mapping, Jobs-To-Be-Done frameworks, and competitive positioning matrix before burning ad dollars.',
    deliverable: 'Complete Brand Positioning Deck & Validated Buyer Persona',
  },
  {
    phase: '02',
    title: 'Conversion Funnels & CRO Architecture',
    caseStudy: 'MakeMyTrip (Travel)',
    level: 'Beginner',
    duration: '2 Weeks',
    projects: '2 Funnel Audits',
    tools: ['Google Analytics 4', 'Sheets', 'Funnelytics'],
    desc: 'Map TOFU → BOFU journeys. Diagnose conversion drop-offs and engineer landing page architectures that convert cold traffic.',
    deliverable: 'Live Funnel Leak Audit & CRO Wireframe Proposal',
  },
  {
    phase: '03',
    title: 'Paid Meta & Social Ads Mastery',
    caseStudy: 'Mamaearth (D2C)',
    level: 'Intermediate',
    duration: '2 Weeks',
    projects: '5 Live Ad Sets',
    tools: ['Meta Ads Manager', 'Foreplay', 'Canva Pro'],
    desc: 'Structure high-converting creative fatigue loops, write video hooks, setup pixel events, and manage real live ad spend budgets.',
    deliverable: 'Live Meta Campaign Execution with Verified ROAS Metrics',
  },
  {
    phase: '04',
    title: 'Google Ads & High-Intent Search',
    caseStudy: 'Urban Company (Services)',
    level: 'Intermediate',
    duration: '2 Weeks',
    projects: '4 Search Campaigns',
    tools: ['Google Ads', 'Keyword Planner', 'SEMrush'],
    desc: 'Capture bottom-of-funnel search intent. Master Performance Max, exact match bidding, negative keyword pruning, and quality score boosting.',
    deliverable: 'PMax & Search Engine Campaign with ₹42 Target CAC',
  },
  {
    phase: '05',
    title: 'Content Marketing & Organic Flywheels',
    caseStudy: 'Zerodha (Fintech)',
    level: 'Intermediate',
    duration: '2 Weeks',
    projects: '3 Content Engines',
    tools: ['WordPress', 'Notion', 'ChatGPT', 'Ahrefs'],
    desc: 'Build compounding organic distribution channels. Write viral educational breakdowns, SEO cluster pillar pages, and newsletter loops.',
    deliverable: 'Full Organic Content Engine Playbook & Keyword Cluster Map',
  },
  {
    phase: '06',
    title: 'Unit Economics, CAC-to-LTV & Retention',
    caseStudy: 'OYO & Swiggy (Consumer)',
    level: 'Advanced',
    duration: '2 Weeks',
    projects: '2 Financial Models',
    tools: ['Sheets', 'Looker Studio', 'Zapier', 'Klaviyo'],
    desc: 'Calculate blended CAC, payback periods, cohort retention curves, and email lifecycle automation to make businesses profitable.',
    deliverable: 'Financial Growth Model & Retention Automation Workflow',
  },
];

/* ─────────────────────────────────────────────────────────────
   DATA 2: ACCORDION TUTORS DATA (The Treqo Masters)
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

/* ─────────────────────────────────────────────────────────────
   DATA 4: COMPLETE EXECUTION TOOLKIT
───────────────────────────────────────────────────────────── */
const TOOLKIT = [
  { name: 'Meta Ads Manager', category: 'Paid Acquisition', level: 'Expert', desc: 'Campaign structure, custom audiences & pixel attribution.' },
  { name: 'Google Ads & PMax', category: 'Paid Acquisition', level: 'Expert', desc: 'Search bidding algorithms, smart shopping & intent capture.' },
  { name: 'Google Analytics 4', category: 'Web Analytics', level: 'Advanced', desc: 'Event-based tracking, custom exploration reports & funnels.' },
  { name: 'SEMrush & Ahrefs', category: 'Organic SEO', level: 'Advanced', desc: 'Keyword gap analysis, backlink audits & site health.' },
  { name: 'Looker Studio', category: 'BI Dashboards', level: 'Advanced', desc: 'Automated executive KPI tracking and cross-channel reporting.' },
  { name: 'Zapier & Make', category: 'Growth Automation', level: 'Intermediate', desc: 'Zero-code webhook triggers, lead routing & CRM sync.' },
  { name: 'Klaviyo & Mailchimp', category: 'Retention Email', level: 'Advanced', desc: 'Browse abandonment flows, customer lifetime value loops.' },
  { name: 'Funnelytics', category: 'Conversion Math', level: 'Intermediate', desc: 'Visual funnel mapping, drop-off tracking and CRO testing.' },
];

export default function UnifiedMasterStack() {
  const [activeTab, setActiveTab] = useState('tutors');
  const [selectedModule, setSelectedModule] = useState(0);
  const [activeTutorId, setActiveTutorId] = useState(1);

  const TABS = [
    { id: 'tutors', label: 'Tutors & Mentors', icon: Users, count: 'The Masters' },
    { id: 'system', label: 'Master Marketing System', icon: Layers, count: '16 Sprints' },
    { id: 'certifications', label: 'Certifications & Proof', icon: Award, count: '6 Verified' },
    { id: 'toolkit', label: 'Execution Toolkit', icon: Wrench, count: '8 Core Tools' },
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
            Learn directly from active founders and mentors, explore the master curriculum, gain industry-recognized certifications, and master real production marketing software.
          </p>
        </div>

        {/* ── 4 SEGMENTED OPTION TABS ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
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
                SECTION 1: TUTORS & MENTORS (Interactive Horizontal Accordion)
            ══════════════════════════════════════════════════════════ */}
            {activeTab === 'tutors' && (
              <motion.div
                key="tutors"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header inside tutors */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#6D28FF', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                        MEET THE MASTERS
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 900, color: '#0A0A0A', margin: 0, textTransform: 'uppercase' }}>
                      The Treqo <span style={{ color: '#6D28FF' }}>Tutors</span>
                    </h3>
                  </div>

                  <div style={{ background: '#F3F0E7', border: '1.5px solid #0A0A0A', borderRadius: '999px', padding: '6px 16px', fontSize: '11.5px', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)", color: '#0A0A0A', boxShadow: '2px 2px 0px #0A0A0A' }}>
                    ⚡ Click any mentor to expand profile
                  </div>
                </div>

                {/* Horizontal Expandable Accordion */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '12px',
                    height: '490px',
                    width: '100%',
                  }}
                  className="tutor-accordion-container"
                >
                  {TUTOR_DATA.map((tutor) => {
                    const isActive = activeTutorId === tutor.id;

                    return (
                      <motion.div
                        key={tutor.id}
                        layout
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => setActiveTutorId(tutor.id)}
                        style={{
                          flex: isActive ? 6.5 : 1,
                          minWidth: isActive ? '320px' : '64px',
                          background: isActive ? '#FAF9F8' : '#0A0A0A',
                          border: '2.5px solid #0A0A0A',
                          borderRadius: '18px',
                          boxShadow: isActive ? '6px 6px 0px #6D28FF' : '3px 3px 0px #0A0A0A',
                          position: 'relative',
                          cursor: 'pointer',
                          overflow: 'hidden',
                          display: 'flex',
                          transition: 'background 0.25s ease',
                        }}
                      >
                        {/* COLLAPSED STATE (Slim Vertical Strip) */}
                        {!isActive && (
                          <div
                            style={{
                              position: 'absolute',
                              inset: 0,
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '24px 0',
                            }}
                          >
                            <span
                              style={{
                                color: 'rgba(255, 255, 255, 0.4)',
                                fontFamily: "var(--ff-mono, monospace)",
                                fontWeight: 900,
                                fontSize: '12px',
                              }}
                            >
                              0{tutor.id}
                            </span>

                            <p
                              style={{
                                color: '#ffffff',
                                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                                fontWeight: 900,
                                textTransform: 'uppercase',
                                letterSpacing: '0.22em',
                                transform: 'rotate(180deg)',
                                writingMode: 'vertical-lr',
                                fontSize: '11px',
                                opacity: 0.85,
                                margin: 0,
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {tutor.name}
                            </p>

                            <Plus size={16} color="rgba(255, 255, 255, 0.5)" />
                          </div>
                        )}

                        {/* EXPANDED STATE (Full Rich Details) */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.28 }}
                              style={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                padding: '20px',
                                gap: '24px',
                                alignItems: 'center',
                              }}
                              className="tutor-expanded-inner"
                            >
                              {/* Left: Image Box */}
                              <div
                                style={{
                                  position: 'relative',
                                  width: '42%',
                                  height: '100%',
                                  borderRadius: '14px',
                                  overflow: 'hidden',
                                  border: '2px solid #0A0A0A',
                                  flexShrink: 0,
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
                                  }}
                                />

                                <div
                                  style={{
                                    position: 'absolute',
                                    bottom: '12px',
                                    left: '12px',
                                    background: 'rgba(10, 10, 10, 0.85)',
                                    backdropFilter: 'blur(8px)',
                                    color: '#ffffff',
                                    border: '1.5px solid #6D28FF',
                                    padding: '4px 12px',
                                    borderRadius: '8px',
                                    fontSize: '11px',
                                    fontWeight: 900,
                                    fontFamily: "var(--ff-mono, monospace)",
                                  }}
                                >
                                  {tutor.company}
                                </div>
                              </div>

                              {/* Right: Content Details */}
                              <div
                                style={{
                                  flex: 1,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  paddingRight: '12px',
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                                  <Star size={14} color="#6D28FF" />
                                  <span
                                    style={{
                                      fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                                      fontSize: '11px',
                                      fontWeight: 900,
                                      color: '#6D28FF',
                                      letterSpacing: '0.1em',
                                      textTransform: 'uppercase',
                                    }}
                                  >
                                    {tutor.role}
                                  </span>
                                </div>

                                <h3
                                  style={{
                                    fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                                    fontSize: 'clamp(24px, 2.6vw, 34px)',
                                    fontWeight: 900,
                                    color: '#0A0A0A',
                                    margin: '0 0 10px',
                                    letterSpacing: '-0.02em',
                                  }}
                                >
                                  {tutor.name}
                                </h3>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px', flexWrap: 'wrap' }}>
                                  {tutor.experience && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                      <Briefcase size={14} color="#6D28FF" />
                                      <span style={{ fontSize: '13px', fontWeight: 800, color: '#333333', fontFamily: "var(--ff-mono, monospace)" }}>
                                        {tutor.experience}
                                      </span>
                                    </div>
                                  )}

                                  {tutor.linkedin !== '#' && (
                                    <a
                                      href={tutor.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        color: '#6D28FF',
                                        fontSize: '13px',
                                        fontWeight: 800,
                                        textDecoration: 'none',
                                        background: '#ffffff',
                                        border: '1.5px solid #6D28FF',
                                        padding: '3px 10px',
                                        borderRadius: '6px',
                                      }}
                                    >
                                      <LinkedinIcon size={13} />
                                      <span>LinkedIn Profile</span>
                                    </a>
                                  )}
                                </div>

                                <p
                                  style={{
                                    fontSize: '14px',
                                    color: '#444444',
                                    lineHeight: 1.55,
                                    margin: '0 0 20px',
                                    fontWeight: 500,
                                    maxWidth: '460px',
                                  }}
                                >
                                  {tutor.details}
                                </p>

                                <div>
                                  <a
                                    href="#transformation"
                                    style={{
                                      background: '#6D28FF',
                                      color: '#ffffff',
                                      border: '2px solid #0A0A0A',
                                      borderRadius: '10px',
                                      padding: '12px 22px',
                                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                                      fontSize: '13px',
                                      fontWeight: 900,
                                      letterSpacing: '0.04em',
                                      textTransform: 'uppercase',
                                      textDecoration: 'none',
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '8px',
                                      boxShadow: '3px 3px 0px #0A0A0A',
                                      transition: 'all 0.15s ease',
                                    }}
                                  >
                                    <span>View Case Studies</span>
                                    <ArrowRight size={14} />
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* ══════════════════════════════════════════════════════════
                SECTION 2: MASTER MARKETING SYSTEM VIEW
            ══════════════════════════════════════════════════════════ */}
            {activeTab === 'system' && (
              <motion.div
                key="system"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 1.35fr',
                  gap: '36px',
                  alignItems: 'stretch',
                }}
                className="master-split-grid"
              >
                {/* Left: Interactive Module Selector */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#6D28FF', letterSpacing: '0.12em' }}>
                      CURRICULUM SPRINT TRACKS
                    </span>
                    <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 800, color: '#777777' }}>
                      Select a sprint to view details
                    </span>
                  </div>

                  {SYSTEM_MODULES.map((mod, idx) => {
                    const isSelected = selectedModule === idx;
                    return (
                      <div
                        key={mod.phase}
                        onClick={() => setSelectedModule(idx)}
                        style={{
                          background: isSelected ? '#0A0A0A' : '#F3F0E7',
                          color: isSelected ? '#ffffff' : '#0A0A0A',
                          border: '2px solid #0A0A0A',
                          borderRadius: '12px',
                          padding: '12px 16px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          boxShadow: isSelected ? '4px 4px 0px #6D28FF' : '2px 2px 0px #0A0A0A',
                          transition: 'all 0.18s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span
                            style={{
                              fontFamily: "var(--ff-mono, monospace)",
                              fontSize: '11px',
                              fontWeight: 900,
                              color: isSelected ? '#6D28FF' : '#555555',
                            }}
                          >
                            {mod.phase}
                          </span>
                          <div>
                            <div style={{ fontSize: '13.5px', fontWeight: 900, fontFamily: "var(--ff-display, 'Outfit', sans-serif)", textTransform: 'uppercase' }}>
                              {mod.title}
                            </div>
                            <div style={{ fontSize: '11px', color: isSelected ? '#A78BFA' : '#666666', fontFamily: "var(--ff-mono, monospace)", fontWeight: 700 }}>
                              {mod.caseStudy}
                            </div>
                          </div>
                        </div>
                        <ChevronRight size={16} color={isSelected ? '#6D28FF' : '#888888'} />
                      </div>
                    );
                  })}
                </div>

                {/* Right: Detailed Active Module Deep Dive */}
                {(() => {
                  const currentMod = SYSTEM_MODULES[selectedModule];
                  return (
                    <div
                      style={{
                        background: '#FAF9F8',
                        border: '2.5px solid #0A0A0A',
                        borderRadius: '20px',
                        padding: '28px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '6px 6px 0px #0A0A0A',
                      }}
                    >
                      <div>
                        {/* Tags */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                          <span style={{ background: '#6D28FF', color: '#ffffff', fontSize: '11px', fontWeight: 900, padding: '4px 10px', borderRadius: '6px', fontFamily: "var(--ff-mono, monospace)" }}>
                            SPRINT {currentMod.phase}
                          </span>
                          <span style={{ background: '#ffffff', color: '#0A0A0A', border: '1.5px solid #0A0A0A', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', fontFamily: "var(--ff-mono, monospace)" }}>
                            {currentMod.caseStudy}
                          </span>
                          <span style={{ background: '#ffffff', color: '#0A0A0A', border: '1.5px solid #0A0A0A', fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', fontFamily: "var(--ff-mono, monospace)" }}>
                            {currentMod.level}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                            fontSize: '24px',
                            fontWeight: 900,
                            color: '#0A0A0A',
                            lineHeight: 1.2,
                            margin: '0 0 12px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {currentMod.title}
                        </h3>

                        <p style={{ fontSize: '15px', color: '#444444', lineHeight: 1.55, margin: '0 0 20px', fontWeight: 500 }}>
                          {currentMod.desc}
                        </p>

                        {/* Verified Deliverable Box */}
                        <div
                          style={{
                            background: '#ffffff',
                            borderLeft: '4px solid #6D28FF',
                            borderTop: '1.5px solid #0A0A0A',
                            borderRight: '1.5px solid #0A0A0A',
                            borderBottom: '1.5px solid #0A0A0A',
                            borderRadius: '0 12px 12px 0',
                            padding: '14px 16px',
                            marginBottom: '20px',
                          }}
                        >
                          <span style={{ fontSize: '10px', fontWeight: 900, color: '#6D28FF', fontFamily: "var(--ff-mono, monospace)", textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>
                            VERIFIED PORTFOLIO DELIVERABLE
                          </span>
                          <span style={{ fontSize: '14px', fontWeight: 800, color: '#0A0A0A', lineHeight: 1.4 }}>
                            {currentMod.deliverable}
                          </span>
                        </div>
                      </div>

                      {/* Footer Info & Tools */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1.5px solid rgba(10, 10, 10, 0.1)', paddingTop: '16px', flexWrap: 'wrap', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#666666' }}>
                            TOOLS:
                          </span>
                          {currentMod.tools.map((t, idx) => (
                            <span key={idx} style={{ background: '#ffffff', border: '1px solid #0A0A0A', padding: '3px 8px', borderRadius: '5px', fontSize: '11px', fontWeight: 800, color: '#0A0A0A' }}>
                              {t}
                            </span>
                          ))}
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '12px', fontWeight: 800, color: '#0A0A0A' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <Clock size={14} color="#6D28FF" />
                            {currentMod.duration}
                          </span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                            <BarChart2 size={14} color="#6D28FF" />
                            {currentMod.projects}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}

            {/* ══════════════════════════════════════════════════════════
                SECTION 3: CERTIFICATIONS & CREDENTIALS VIEW (50/50 Split)
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
                {/* ── LEFT: TREQO CERTIFICATION (50%) ── */}
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

                    {/* Certificate Image Frame */}
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

                {/* ── RIGHT: OTHER INDUSTRY CREDENTIALS WITH VERTICAL FLOWING MARQUEE (50%) ── */}
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

                    {/* Provider Badges Row */}
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

                    {/* ── VERTICAL FLOWING MARQUEE (UP & DOWN) ── */}
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
                      {/* Column 1: Flows Downward */}
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

                      {/* Column 2: Flows Upward */}
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
                SECTION 4: EXECUTION TOOLKIT VIEW
            ══════════════════════════════════════════════════════════ */}
            {activeTab === 'toolkit' && (
              <motion.div
                key="toolkit"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#6D28FF', letterSpacing: '0.12em', display: 'block', marginBottom: '4px' }}>
                      PRODUCTION TOOLSET
                    </span>
                    <h3 style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '24px', fontWeight: 900, color: '#0A0A0A', margin: 0, textTransform: 'uppercase' }}>
                      8 Industry-Standard Marketing Softwares
                    </h3>
                  </div>

                  <div style={{ background: '#F3F0E7', border: '1.5px solid #0A0A0A', borderRadius: '999px', padding: '6px 16px', fontSize: '12px', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)", color: '#0A0A0A' }}>
                    🛠️ Hands-On Campaign Drills & Real Account Access
                  </div>
                </div>

                {/* Toolkit Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '18px',
                  }}
                  className="toolkit-card-grid"
                >
                  {TOOLKIT.map((tool, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#FAF9F8',
                        border: '2px solid #0A0A0A',
                        borderRadius: '16px',
                        padding: '18px',
                        boxShadow: '4px 4px 0px #0A0A0A',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span
                            style={{
                              background: '#6D28FF',
                              color: '#ffffff',
                              fontSize: '10px',
                              fontWeight: 900,
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontFamily: "var(--ff-mono, monospace)",
                            }}
                          >
                            {tool.level}
                          </span>
                          <span style={{ fontSize: '10px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 800, color: '#666666' }}>
                            {tool.category}
                          </span>
                        </div>

                        <h4
                          style={{
                            fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                            fontSize: '15px',
                            fontWeight: 900,
                            color: '#0A0A0A',
                            margin: '0 0 8px',
                          }}
                        >
                          {tool.name}
                        </h4>

                        <p style={{ fontSize: '12px', color: '#444444', margin: 0, lineHeight: 1.45, fontWeight: 500 }}>
                          {tool.desc}
                        </p>
                      </div>

                      <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(10, 10, 10, 0.08)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 800, color: '#6D28FF' }}>
                        <CheckCircle2 size={12} />
                        <span>Live Account Certified</span>
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
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .master-split-grid {
            grid-template-columns: 1fr !important;
          }
          .tutor-accordion-container {
            flex-direction: column !important;
            height: auto !important;
          }
          .tutor-expanded-inner {
            flex-direction: column !important;
          }
          .cert-card-grid,
          .toolkit-card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .master-tabs-row {
            grid-template-columns: 1fr !important;
          }
          .cert-card-grid,
          .toolkit-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
