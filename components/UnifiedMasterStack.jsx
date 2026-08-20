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
  BadgeCheck,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { DoodleBadge } from './Doodles';

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
    desc: 'Calculate blended CAC, payback periods, cohort retention retention curves, and email lifecycle automation to make businesses profitable.',
    deliverable: 'Financial Growth Model & Retention Automation Workflow',
  },
];

/* ─────────────────────────────────────────────────────────────
   DATA 2: TUTORS & INDUSTRY MENTORS
───────────────────────────────────────────────────────────── */
const TUTORS = [
  {
    name: 'Mohit Geat',
    role: 'Growth Consultant',
    company: 'McKinsey & Company',
    experience: '8+ Years',
    sessions: '1,220+ Sessions',
    expertise: 'GTM Strategy & Enterprise Growth',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop&crop=faces',
    badge: 'Strategy Mentor',
  },
  {
    name: 'Geetika Bajaj',
    role: 'Head – Corporate Channel',
    company: 'MakeMyTrip',
    experience: '7+ Years',
    sessions: '420+ Sessions',
    expertise: 'Funnel Optimization & Partnerships',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop&crop=faces',
    badge: 'Channel Lead',
  },
  {
    name: 'Megha Punjabi',
    role: 'Senior Growth Consultant',
    company: 'American Express',
    experience: '6+ Years',
    sessions: '240+ Sessions',
    expertise: 'Performance Marketing & Unit Economics',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop&crop=faces',
    badge: 'Unit Economics',
  },
  {
    name: 'Prabhav Narang',
    role: 'Associate Lead',
    company: 'EY Parthenon',
    experience: '5+ Years',
    sessions: '510+ Sessions',
    expertise: 'Market Sizing & Commercial Due Diligence',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop&crop=faces',
    badge: 'Commercial Due Diligence',
  },
  {
    name: 'Akshit Aggarwal',
    role: 'Senior Marketing Associate',
    company: 'American Express',
    experience: '5+ Years',
    sessions: '190+ Sessions',
    expertise: 'Retention Loops & Lifecycle Automation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop&crop=faces',
    badge: 'Retention Mentor',
  },
  {
    name: 'Rohan Deshmukh',
    role: 'Lead Performance Marketer',
    company: 'Razorpay',
    experience: '6+ Years',
    sessions: '380+ Sessions',
    expertise: 'Paid Acquisition & Multi-Touch Attribution',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop&crop=faces',
    badge: 'Paid Ads Specialist',
  },
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
  const [activeTab, setActiveTab] = useState('system');
  const [selectedModule, setSelectedModule] = useState(0);

  const TABS = [
    { id: 'system', label: 'Master Marketing System', icon: Layers, count: '16 Sprints' },
    { id: 'tutors', label: 'Tutors & Mentors', icon: Users, count: '6+ Leaders' },
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
            Explore our curriculum architecture, learn directly from top growth leaders, gain industry-recognized certifications, and master production-grade marketing tools.
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
            padding: '36px clamp(24px, 4vw, 48px)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '560px',
          }}
        >
          <AnimatePresence mode="wait">

            {/* ══════════════════════════════════════════════════════════
                SECTION 1: MASTER MARKETING SYSTEM VIEW
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
                SECTION 2: TUTORS & MENTORS VIEW
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
                    <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#6D28FF', letterSpacing: '0.12em', display: 'block', marginBottom: '4px' }}>
                      PRACTITIONER-LED SESSIONS
                    </span>
                    <h3 style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '24px', fontWeight: 900, color: '#0A0A0A', margin: 0, textTransform: 'uppercase' }}>
                      Learn Directly From Leaders In The Game
                    </h3>
                  </div>

                  <div style={{ background: '#F3F0E7', border: '1.5px solid #0A0A0A', borderRadius: '999px', padding: '6px 16px', fontSize: '12px', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)", color: '#0A0A0A' }}>
                    ⚡ 1-on-1 Weekly Teardowns & Live Strategy Audits
                  </div>
                </div>

                {/* 6 Mentor Cards Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px',
                  }}
                  className="tutors-card-grid"
                >
                  {TUTORS.map((tutor, idx) => (
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                          <img
                            src={tutor.image}
                            alt={tutor.name}
                            style={{
                              width: '54px',
                              height: '54px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '2px solid #0A0A0A',
                            }}
                          />
                          <div>
                            <div style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '16px', fontWeight: 900, color: '#0A0A0A' }}>
                              {tutor.name}
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: '#6D28FF' }}>
                              {tutor.role}
                            </div>
                            <div style={{ fontSize: '11px', fontWeight: 800, color: '#555555', fontFamily: "var(--ff-mono, monospace)" }}>
                              {tutor.company}
                            </div>
                          </div>
                        </div>

                        <div style={{ background: '#ffffff', border: '1px solid #0A0A0A', borderRadius: '8px', padding: '8px 10px', marginBottom: '12px' }}>
                          <span style={{ fontSize: '10px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#6D28FF', display: 'block' }}>
                            CORE EXPERTISE:
                          </span>
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#111111' }}>
                            {tutor.expertise}
                          </span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(10, 10, 10, 0.1)', paddingTop: '10px', fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 800 }}>
                        <span style={{ color: '#666666' }}>{tutor.experience}</span>
                        <span style={{ color: '#6D28FF' }}>{tutor.sessions}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ══════════════════════════════════════════════════════════
                SECTION 3: CERTIFICATIONS & CREDENTIALS VIEW
            ══════════════════════════════════════════════════════════ */}
            {activeTab === 'certifications' && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#6D28FF', letterSpacing: '0.12em', display: 'block', marginBottom: '4px' }}>
                      GLOBAL RECOGNITION
                    </span>
                    <h3 style={{ fontFamily: "var(--ff-display, 'Outfit', sans-serif)", fontSize: '24px', fontWeight: 900, color: '#0A0A0A', margin: 0, textTransform: 'uppercase' }}>
                      Industry-Standard Certifications & Proof Badges
                    </h3>
                  </div>

                  <div style={{ background: '#6D28FF', color: '#ffffff', border: '1.5px solid #0A0A0A', borderRadius: '999px', padding: '6px 16px', fontSize: '12px', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)" }}>
                    🏆 All Official Exam Vouchers Covered Inside Cohort
                  </div>
                </div>

                {/* Certifications Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '20px',
                  }}
                  className="cert-card-grid"
                >
                  {CERTIFICATIONS.map((cert, idx) => {
                    const CertIcon = cert.icon;
                    return (
                      <div
                        key={idx}
                        style={{
                          background: '#FAF9F8',
                          border: '2px solid #0A0A0A',
                          borderRadius: '16px',
                          padding: '20px',
                          boxShadow: '4px 4px 0px #0A0A0A',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                            <span
                              style={{
                                background: '#ffffff',
                                border: '1.5px solid #0A0A0A',
                                padding: '4px 10px',
                                borderRadius: '6px',
                                fontSize: '11px',
                                fontWeight: 900,
                                color: cert.color,
                                fontFamily: "var(--ff-mono, monospace)",
                              }}
                            >
                              {cert.provider}
                            </span>
                            <span style={{ fontSize: '10.5px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 800, color: '#6D28FF' }}>
                              {cert.value}
                            </span>
                          </div>

                          <h4
                            style={{
                              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                              fontSize: '16px',
                              fontWeight: 900,
                              color: '#0A0A0A',
                              margin: '0 0 8px',
                              lineHeight: 1.25,
                            }}
                          >
                            {cert.name}
                          </h4>

                          <p style={{ fontSize: '12.5px', color: '#555555', margin: '0 0 14px', fontWeight: 600 }}>
                            {cert.category}
                          </p>
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: '#ffffff',
                            border: '1px solid #0A0A0A',
                            borderRadius: '8px',
                            padding: '6px 10px',
                            fontSize: '11px',
                            fontFamily: "var(--ff-mono, monospace)",
                            fontWeight: 800,
                            color: '#0A0A0A',
                          }}
                        >
                          <CheckCircle2 size={13} color="#6D28FF" />
                          <span>{cert.badge}</span>
                        </div>
                      </div>
                    );
                  })}
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
          .tutors-card-grid,
          .cert-card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .toolkit-card-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .master-tabs-row {
            grid-template-columns: 1fr !important;
          }
          .tutors-card-grid,
          .cert-card-grid,
          .toolkit-card-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
