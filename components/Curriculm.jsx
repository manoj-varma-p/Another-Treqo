'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  BarChart2,
  Award,
  CheckCircle2,
  Briefcase,
  Wrench,
  Target
} from 'lucide-react';
import { DoodleBadge } from './Doodles';

const TERM_DATA = [
  {
    id: 1,
    title: "What Marketing Really Is",
    shortTitle: "Marketing 101",
    subtitle: "Build the base",
    duration: "2 weeks",
    projects: 3,
    level: "Beginner",
    industry: "Luxury",
    company: "Tanishq",
    tools: ["Google Trends", "ChatGPT", "Notion"],
    techniques: ["Market Research", "Customer Personas", "Brand Positioning", "Value Proposition"],
    outcome: "You'll walk away with a complete brand brief and a validated customer persona ready for real campaign use.",
  },
  {
    id: 2,
    title: "Customer & Market Understanding",
    shortTitle: "Customer Fit",
    subtitle: "Know your audience before you sell to them",
    duration: "2 weeks",
    projects: 3,
    level: "Beginner",
    industry: "Healthcare",
    company: "Apollo 24|7",
    tools: ["Google Forms", "Typeform", "Notion", "ChatGPT"],
    techniques: ["Customer Interviews & Surveys", "Trust Trigger Mapping", "Persona Building (Jobs, Pains, Gains)", "Market Segmentation"],
    outcome: "You'll build 3 detailed buyer personas with trust triggers — ready to plug into any campaign brief.",
  },
  {
    id: 3,
    title: "Funnels & Basic Metrics",
    shortTitle: "Funnel Leaks",
    subtitle: "Learn where the money leaks",
    duration: "2 weeks",
    projects: 3,
    level: "Beginner",
    industry: "Travel",
    company: "MakeMyTrip",
    tools: ["Google Analytics", "Sheets", "Funnelytics", "Notion"],
    techniques: ["Funnel Mapping (TOFU → BOFU)", "Drop-off Analysis", "Conversion Rate Basics", "Metric Dashboarding"],
    outcome: "You'll diagnose a real funnel, find the leak, and propose a fix — the exact skill performance marketers get paid for.",
  },
  {
    id: 4,
    title: "Idea Clarity & Problem Discovery",
    shortTitle: "Idea Clarity",
    subtitle: "Prove you can think before you execute",
    duration: "2 weeks",
    projects: 2,
    level: "Intermediate",
    industry: "EV / Auto",
    company: "Ola Electric",
    tools: ["Notion", "Miro", "ChatGPT", "Google Docs"],
    techniques: ["Problem-Solution Fit", "Fx|xU Filter Application", "Opportunity Sizing", "Go/No-Go Decision Framework"],
    outcome: "You'll apply the Fx|xU filter on a live business case and present a validated problem statement.",
  },
  {
    id: 5,
    title: "Idea to Market (0→1)",
    shortTitle: "0 → 1 Launch",
    subtitle: "Take something from zero to users",
    duration: "2 weeks",
    projects: 2,
    level: "Intermediate",
    industry: "Gaming",
    company: "Dream11",
    tools: ["Notion", "Figma", "Google Sheets", "ChatGPT"],
    techniques: ["GTM Strategy Design", "Channel-Market Fit", "Viral Loop Mechanics", "Launch Sequencing"],
    outcome: "You'll rebuild a GTM playbook from scratch.",
  },
  {
    id: 6,
    title: "Brand Strategy & Positioning",
    shortTitle: "Brand Strategy",
    subtitle: "Make them remember you",
    duration: "2 weeks",
    projects: 3,
    level: "Intermediate",
    industry: "FMCG",
    company: "Amul",
    tools: ["Canva", "Notion", "Google Trends", "ChatGPT"],
    techniques: ["Brand Archetype Mapping", "Positioning Frameworks", "Cultural Relevance Strategy", "Brand Voice"],
    outcome: "You'll build your own positioning doc — portfolio gold.",
  },
  {
    id: 7,
    title: "Media Strategy & Planning",
    shortTitle: "Media Planning",
    subtitle: "Decide where money goes",
    duration: "2 weeks",
    projects: 3,
    level: "Intermediate",
    industry: "Telecom",
    company: "Airtel",
    tools: ["Google Sheets", "Media Templates", "ChatGPT", "Notion"],
    techniques: ["Channel Selection", "Budget Allocation", "Reach vs Frequency", "Cross-channel Planning"],
    outcome: "You'll allocate a ₹100Cr+ media budget like a pro.",
  },
  {
    id: 8,
    title: "Search & Website Ecosystem",
    shortTitle: "SEO Engine",
    subtitle: "Own search results",
    duration: "2 weeks",
    projects: 3,
    level: "Advanced",
    industry: "InsurTech",
    company: "Policybazaar",
    tools: ["Ahrefs", "SEMrush", "Search Console", "Screaming Frog"],
    techniques: ["Technical SEO Audit", "Keyword Clustering", "Content Gap Analysis", "On-page SEO"],
    outcome: "You'll build a roadmap to own Page 1.",
  },
  {
    id: 9,
    title: "Google Ads Ecosystem",
    shortTitle: "Google Ads",
    subtitle: "Master Google machine",
    duration: "2 weeks",
    projects: 3,
    level: "Advanced",
    industry: "Home Services",
    company: "Urban Company",
    tools: ["Google Ads", "Keyword Planner", "Sheets", "Looker"],
    techniques: ["Search Campaigns", "YouTube Ads", "PMAX Setup", "Bid Optimization"],
    outcome: "You'll build a full Google Ads ecosystem.",
  },
  {
    id: 10,
    title: "Meta & Social Media",
    shortTitle: "Meta Ads",
    subtitle: "Crack the algorithm",
    duration: "2 weeks",
    projects: 3,
    level: "Intermediate",
    industry: "Food",
    company: "Zomato",
    tools: ["Meta Ads", "Canva", "Notion", "ChatGPT"],
    techniques: ["Content Strategy", "Audience Targeting", "Creative Testing", "Ad Funnel"],
    outcome: "You'll run Meta campaigns from scratch.",
  },
  {
    id: 11,
    title: "Owned Media & Retention",
    shortTitle: "Retention CRM",
    subtitle: "Turn users into lifers",
    duration: "2 weeks",
    projects: 3,
    level: "Advanced",
    industry: "Fitness",
    company: "Cult.fit",
    tools: ["Mailchimp", "WhatsApp", "Sheets", "Notion"],
    techniques: ["Email Lifecycle", "WhatsApp Automation", "Retention Loops", "CRM Segmentation"],
    outcome: "You'll design lifecycle systems that drive retention.",
  },
  {
    id: 12,
    title: "Content Marketing & Storytelling",
    shortTitle: "Content Engine",
    subtitle: "Build content flywheels",
    duration: "2 weeks",
    projects: 3,
    level: "Intermediate",
    industry: "Fintech",
    company: "Zerodha",
    tools: ["Notion", "WordPress", "Canva", "ChatGPT"],
    techniques: ["Content Strategy", "SEO Content", "Storytelling", "Distribution"],
    outcome: "You'll build a content engine for organic growth.",
  },
  {
    id: 13,
    title: "Media Buying & Performance",
    shortTitle: "Performance ROI",
    subtitle: "Scale campaigns",
    duration: "2 weeks",
    projects: 3,
    level: "Advanced",
    industry: "Sports",
    company: "Nike India",
    tools: ["Meta Ads", "Google Ads", "Sheets", "Looker"],
    techniques: ["Campaign Design", "ROAS Optimization", "Creative Testing", "Marketplace Strategy"],
    outcome: "You'll run multi-platform campaigns.",
  },
  {
    id: 14,
    title: "Revenue & Unit Economics",
    shortTitle: "Unit Economics",
    subtitle: "Understand money",
    duration: "2 weeks",
    projects: 2,
    level: "Advanced",
    industry: "Hospitality",
    company: "OYO",
    tools: ["Sheets", "Notion", "ChatGPT", "Looker"],
    techniques: ["CAC vs LTV", "Pricing", "Revenue Models", "Profitability"],
    outcome: "You'll evaluate if a business actually makes money.",
  },
  {
    id: 15,
    title: "Systems, Analytics & Scale",
    shortTitle: "Growth Systems",
    subtitle: "Build growth systems",
    duration: "2 weeks",
    projects: 3,
    level: "Advanced",
    industry: "Music/OTT",
    company: "Spotify India",
    tools: ["GA", "Looker", "Zapier", "Sheets"],
    techniques: ["Dashboards", "Automation", "KPI Tracking", "Growth Loops"],
    outcome: "You'll build scalable marketing systems.",
  },
  {
    id: 16,
    title: "Organic Growth & Leadership",
    shortTitle: "Leadership GTM",
    subtitle: "Become a marketing leader",
    duration: "2 weeks",
    projects: 3,
    level: "Advanced",
    industry: "F&B / Lifestyle",
    company: "Starbucks India",
    tools: ["Notion", "Trends", "Canva", "ChatGPT"],
    techniques: ["Community Growth", "Brand Loyalty", "Organic Strategy", "Personal Branding"],
    outcome: "You'll design a full organic growth playbook.",
  },
];

const levelBadge = {
  Beginner: { bg: "rgba(19, 115, 51, 0.12)", color: "#137333", border: "#137333" },
  Intermediate: { bg: "rgba(26, 115, 232, 0.12)", color: "#1A73E8", border: "#1A73E8" },
  Advanced: { bg: "rgba(197, 34, 31, 0.12)", color: "#C5221F", border: "#C5221F" },
};

export default function JourneyAndInterview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [candidateMode, setCandidateMode] = useState('treqo');

  const scrollTrackRef = useRef(null);
  const rightListRef = useRef(null);
  const titleRefs = useRef([]);
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef(null);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isClickScrolling.current) return;
    const rawIdx = Math.floor(latest * TERM_DATA.length);
    const newIdx = Math.min(TERM_DATA.length - 1, Math.max(0, rawIdx));
    if (newIdx !== activeIdx) {
      setActiveIdx(newIdx);
    }
  });

  // Smooth scroll sync for the right titles list
  useEffect(() => {
    const activeEl = titleRefs.current[activeIdx];
    if (activeEl && rightListRef.current) {
      const list = rightListRef.current;
      const targetTop = activeEl.offsetTop - list.offsetTop - (list.clientHeight / 2) + (activeEl.clientHeight / 2);
      list.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    }
  }, [activeIdx]);

  const handleTitleClick = useCallback((idx) => {
    setActiveIdx(idx);
    isClickScrolling.current = true;
    if (clickTimeout.current) clearTimeout(clickTimeout.current);

    if (scrollTrackRef.current) {
      const track = scrollTrackRef.current;
      const rect = track.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const trackTop = rect.top + scrollTop;
      const trackHeight = track.offsetHeight - window.innerHeight;
      const targetScroll = trackTop + (idx / TERM_DATA.length) * trackHeight + 20;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }

    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);
  }, []);

  const currentTerm = TERM_DATA[activeIdx] || TERM_DATA[0];

  return (
    <section
      id="journey"
      data-stage="JOURNEY"
      style={{
        background: '#F3F0E7',
        color: '#0A0A0A',
        position: 'relative',
      }}
    >
      {/* ══════════════════════════════════════════════════════════════
          PART 1: UNBOXED SCROLL-DRIVEN 16-TERM CURRICULUM
          Left: Pure, High-Readability Editorial Layout (No Enclosing Box)
          Right: Sleek Interactive Timeline Rail (No Boxes)
      ══════════════════════════════════════════════════════════════ */}
      <div
        ref={scrollTrackRef}
        style={{
          height: '420vh',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '65px 80px 24px',
            maxWidth: '1540px',
            margin: '0 auto',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          {/* Section Header Bar with Big Title */}
          <div style={{ marginBottom: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '10px' }}>
              <span
                style={{
                  fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#6D28FF',
                  background: '#ffffff',
                  border: '1.5px solid #6D28FF',
                  padding: '4px 14px',
                  borderRadius: '999px',
                  boxShadow: '2px 2px 0px rgba(109, 40, 255, 0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Sparkles size={12} color="#6D28FF" />
                CURRICULUM ARCHITECTURE
              </span>
              <span style={{ color: 'rgba(10, 10, 10, 0.25)', fontWeight: 800 }}>/</span>
              <DoodleBadge text={`PHASE ${currentTerm.id < 10 ? `0${currentTerm.id}` : currentTerm.id} OF 16`} rotate={-1} highlight={true} />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <h2
                style={{
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: 'clamp(2rem, 3.6vw, 3rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                  margin: 0,
                  color: '#0A0A0A',
                  lineHeight: 1.05,
                }}
              >
                What You&apos;ll Learn{' '}
                <span
                  style={{
                    background: '#6D28FF',
                    color: '#ffffff',
                    padding: '2px 14px',
                    display: 'inline-block',
                    border: '3px solid #0A0A0A',
                    boxShadow: '4px 4px 0px #0A0A0A',
                    transform: 'rotate(-1deg)',
                  }}
                >
                  Inside The System
                </span>
              </h2>

              {/* Step Progress Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontFamily: "var(--ff-mono, monospace)",
                  fontSize: '11.5px',
                  fontWeight: 800,
                  color: '#555555',
                }}
              >
                <span>{Math.round(((activeIdx + 1) / TERM_DATA.length) * 100)}% COMPLETED</span>
                <div
                  style={{
                    width: '70px',
                    height: '6px',
                    background: 'rgba(10, 10, 10, 0.12)',
                    borderRadius: '999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${((activeIdx + 1) / TERM_DATA.length) * 100}%`,
                      background: '#6D28FF',
                      transition: 'width 0.25s ease',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Main 2-Column Split: Left Display + Right Timeline */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 0.85fr)',
              gap: 'clamp(32px, 5vw, 70px)',
              height: 'calc(100vh - 200px)',
              maxHeight: '640px',
              alignItems: 'center',
            }}
            className="curriculum-main-grid"
          >
            {/* ── LEFT: PURE UNBOXED ACTIVE TERM CONTENT ── */}
            <div
              style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxSizing: 'border-box',
                paddingRight: '12px',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTerm.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '16px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  {/* Top: Metadata & Headings */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          background: '#0A0A0A',
                          color: '#ffffff',
                          fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                          fontSize: '11px',
                          fontWeight: 900,
                          padding: '4px 10px',
                          borderRadius: '6px',
                          letterSpacing: '0.08em',
                        }}
                      >
                        PHASE {currentTerm.id < 10 ? `0${currentTerm.id}` : currentTerm.id} / 16
                      </span>

                      <span
                        style={{
                          background: levelBadge[currentTerm.level]?.bg,
                          color: levelBadge[currentTerm.level]?.color,
                          border: `1.5px solid ${levelBadge[currentTerm.level]?.border}`,
                          fontFamily: "var(--ff-mono, monospace)",
                          fontSize: '11px',
                          fontWeight: 800,
                          padding: '3px 10px',
                          borderRadius: '6px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {currentTerm.level}
                      </span>

                      <span
                        style={{
                          background: '#ffffff',
                          color: '#0A0A0A',
                          border: '1.5px solid #0A0A0A',
                          fontFamily: "var(--ff-mono, monospace)",
                          fontSize: '11px',
                          fontWeight: 800,
                          padding: '3px 10px',
                          borderRadius: '6px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          boxShadow: '2px 2px 0px #0A0A0A',
                        }}
                      >
                        <Briefcase size={12} color="#6D28FF" />
                        {currentTerm.company} ({currentTerm.industry})
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                        fontSize: 'clamp(24px, 2.8vw, 36px)',
                        fontWeight: 900,
                        color: '#0A0A0A',
                        lineHeight: 1.12,
                        margin: '0 0 6px',
                        letterSpacing: '-0.03em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {currentTerm.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontSize: '16px',
                        color: '#555555',
                        fontStyle: 'italic',
                        margin: 0,
                        lineHeight: 1.4,
                      }}
                    >
                      &ldquo;{currentTerm.subtitle}&rdquo;
                    </p>
                  </div>

                  {/* Outcome Highlight Box */}
                  <div
                    style={{
                      background: '#ffffff',
                      borderLeft: '4px solid #6D28FF',
                      borderTop: '1.5px solid #0A0A0A',
                      borderRight: '1.5px solid #0A0A0A',
                      borderBottom: '1.5px solid #0A0A0A',
                      borderRadius: '0 12px 12px 0',
                      padding: '14px 18px',
                      boxShadow: '3px 3px 0px #0A0A0A',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '9.5px',
                        fontWeight: 900,
                        color: '#6D28FF',
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        fontFamily: "var(--ff-mono, monospace)",
                        display: 'block',
                        marginBottom: '3px',
                      }}
                    >
                      VERIFIED PRACTICAL OUTCOME
                    </span>
                    <p
                      style={{
                        fontSize: '14.5px',
                        color: '#111111',
                        lineHeight: 1.5,
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {currentTerm.outcome}
                    </p>
                  </div>

                  {/* Sprint Techniques Grid */}
                  <div>
                    <span
                      style={{
                        fontSize: '9.5px',
                        fontWeight: 900,
                        color: '#777777',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        fontFamily: "var(--ff-mono, monospace)",
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      CORE SPRINT TECHNIQUES
                    </span>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8px',
                      }}
                      className="techniques-subgrid"
                    >
                      {currentTerm.techniques.map((tech, i) => (
                        <div
                          key={i}
                          style={{
                            background: '#ffffff',
                            border: '1.5px solid #0A0A0A',
                            borderRadius: '8px',
                            padding: '8px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '12px',
                            fontWeight: 800,
                            color: '#0A0A0A',
                            boxShadow: '2px 2px 0px rgba(10, 10, 10, 0.8)',
                          }}
                        >
                          <div
                            style={{
                              width: '18px',
                              height: '18px',
                              borderRadius: '4px',
                              background: '#6D28FF',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '9px',
                              fontWeight: 900,
                              flexShrink: 0,
                            }}
                          >
                            {i + 1}
                          </div>
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Meta: Tools + Duration */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                      paddingTop: '8px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '10.5px', fontFamily: "var(--ff-mono, monospace)", fontWeight: 900, color: '#666666' }}>
                        TOOLS:
                      </span>
                      {currentTerm.tools.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: '#ffffff',
                            border: '1px solid #0A0A0A',
                            padding: '3px 8px',
                            borderRadius: '5px',
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#0A0A0A',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 800, color: '#0A0A0A' }}>
                        <Clock size={14} color="#6D28FF" />
                        {currentTerm.duration}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 800, color: '#0A0A0A' }}>
                        <BarChart2 size={14} color="#6D28FF" />
                        {currentTerm.projects} Live Projects
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── RIGHT: SLEEK TIMELINE RAIL WITH SPACIOUS TITLES (NO BOXES) ── */}
            <div
              ref={rightListRef}
              style={{
                height: '100%',
                overflowY: 'auto',
                paddingLeft: '16px',
                paddingRight: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                position: 'relative',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
                paddingTop: '24px',
                paddingBottom: '24px',
              }}
              className="timeline-titles-rail custom-scrollbar"
            >
              {/* Continuous Background Vertical Line */}
              <div
                style={{
                  position: 'absolute',
                  left: '27px',
                  top: '30px',
                  bottom: '30px',
                  width: '2px',
                  background: 'rgba(10, 10, 10, 0.12)',
                  zIndex: 0,
                }}
              />

              {TERM_DATA.map((t, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div
                    key={t.id}
                    ref={(el) => (titleRefs.current[idx] = el)}
                    onClick={() => handleTitleClick(idx)}
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '10px 0',
                      position: 'relative',
                      zIndex: 1,
                      transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                      opacity: isActive ? 1 : 0.4,
                      transform: isActive ? 'translateX(6px)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.opacity = '0.8';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.opacity = '0.4';
                    }}
                  >
                    {/* Timeline Node Bullet */}
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: isActive ? '#6D28FF' : '#F3F0E7',
                        border: isActive ? '2.5px solid #0A0A0A' : '2px solid rgba(10, 10, 10, 0.3)',
                        color: isActive ? '#ffffff' : '#555555',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "var(--ff-mono, monospace)",
                        fontSize: '9.5px',
                        fontWeight: 900,
                        flexShrink: 0,
                        boxShadow: isActive ? '2px 2px 0px #0A0A0A' : 'none',
                        transition: 'all 0.22s ease',
                      }}
                    >
                      {t.id < 10 ? `0${t.id}` : t.id}
                    </div>

                    {/* Title & Case Subline */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                          fontSize: isActive ? 'clamp(17px, 1.5vw, 20px)' : 'clamp(14px, 1.25vw, 16px)',
                          fontWeight: isActive ? 900 : 700,
                          color: isActive ? '#0A0A0A' : '#333333',
                          letterSpacing: '-0.02em',
                          lineHeight: 1.2,
                          textTransform: 'uppercase',
                          transition: 'all 0.22s ease',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {t.title}
                      </div>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 2 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{
                            fontSize: '11px',
                            color: '#6D28FF',
                            fontWeight: 700,
                            fontFamily: "var(--ff-mono, monospace)",
                            marginTop: '2px',
                          }}
                        >
                          Case: {t.company} · {t.level}
                        </motion.div>
                      )}
                    </div>

                    {/* Active Chevron Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeChevron"
                        style={{
                          color: '#6D28FF',
                          display: 'flex',
                          alignItems: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          PART 2: THE INTERVIEW SHOWDOWN (GENERIC VS TREQO GRADUATE)
      ══════════════════════════════════════════════════════════════ */}
      <div
        style={{
          padding: '70px 80px 50px',
          maxWidth: '1540px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '14px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1.5px solid #6D28FF',
                color: '#6D28FF',
                padding: '6px 16px',
                borderRadius: '999px',
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                boxShadow: '2px 2px 0px rgba(109, 40, 255, 0.25)',
              }}
            >
              <Award size={13} color="#6D28FF" />
              <span>THE HIRING MOMENT</span>
            </div>
            <DoodleBadge text="INTERACTIVE RECRUITER LAB" rotate={2} highlight={true} />
          </div>

          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 12px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              lineHeight: 1.1,
            }}
          >
            What Happens In The{' '}
            <span
              style={{
                background: '#6D28FF',
                color: '#ffffff',
                padding: '2px 14px',
                display: 'inline-block',
                border: '3px solid #0A0A0A',
                boxShadow: '4px 4px 0px #0A0A0A',
                transform: 'rotate(-1deg)',
              }}
            >
              Interview Room?
            </span>
          </h2>

          <p style={{ fontSize: '15px', color: '#555555', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.5 }}>
            Toggle between how generic candidates answer vs. how a TREQO graduate slates real revenue data on the table.
          </p>

          {/* Recruiter Switcher Toggle */}
          <div style={{ display: 'inline-flex', gap: '8px', background: '#ffffff', border: '2.5px solid #0A0A0A', borderRadius: '999px', padding: '6px', boxShadow: '4px 4px 0px #0A0A0A', marginBottom: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => setCandidateMode('generic')}
              style={{
                background: candidateMode === 'generic' ? '#0A0A0A' : 'transparent',
                color: candidateMode === 'generic' ? '#ffffff' : '#0A0A0A',
                border: 'none',
                borderRadius: '999px',
                padding: '10px 22px',
                fontSize: '11.5px',
                fontWeight: 900,
                cursor: 'pointer',
                fontFamily: "var(--ff-mono, monospace)",
                boxShadow: candidateMode === 'generic' ? '2px 2px 0px #6D28FF' : 'none',
                transition: 'all 0.2s',
              }}
            >
              GENERIC CANDIDATE
            </button>

            <button
              type="button"
              onClick={() => setCandidateMode('treqo')}
              style={{
                background: candidateMode === 'treqo' ? '#6D28FF' : 'transparent',
                color: candidateMode === 'treqo' ? '#ffffff' : '#0A0A0A',
                border: 'none',
                borderRadius: '999px',
                padding: '10px 22px',
                fontSize: '11.5px',
                fontWeight: 900,
                cursor: 'pointer',
                fontFamily: "var(--ff-mono, monospace)",
                boxShadow: candidateMode === 'treqo' ? '2px 2px 0px #0A0A0A' : 'none',
                transition: 'all 0.2s',
              }}
            >
              ⚡ THE TREQO REVENUE BUILDER
            </button>
          </div>

          {/* Interactive Interview Battleground Box */}
          <div
            style={{
              maxWidth: '820px',
              minHeight: '460px',
              margin: '0 auto',
              background: candidateMode === 'treqo' ? '#0A0A0A' : '#ffffff',
              color: candidateMode === 'treqo' ? '#FAF9F8' : '#0A0A0A',
              border: '3.5px solid #0A0A0A',
              borderRadius: '28px',
              padding: '36px clamp(20px, 4vw, 36px)',
              boxShadow: candidateMode === 'treqo' ? '12px 12px 0px #6D28FF' : '10px 10px 0px #0A0A0A',
              transition: 'background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
            }}
          >
            {/* Recruiter Question Speech Bubble */}
            <div
              style={{
                background: '#ffffff',
                color: '#0A0A0A',
                border: '2.5px solid #0A0A0A',
                borderRadius: '20px',
                padding: '14px 22px',
                fontSize: '16px',
                fontWeight: 800,
                maxWidth: '440px',
                margin: '0 auto 20px',
                boxShadow: '4px 4px 0px #0A0A0A',
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: '10.5px', display: 'block', color: '#6D28FF', fontWeight: 900, fontFamily: "var(--ff-mono, monospace)", marginBottom: 2 }}>
                RECRUITER QUESTION:
              </span>
              &ldquo;Have you ever managed real ad spend and delivered ROI?&rdquo;
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                {candidateMode === 'generic' ? (
                  <motion.div
                    key="generic"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between',
                      gap: '14px',
                    }}
                  >
                    {/* Candidate Weak Answer */}
                    <div
                      style={{
                        background: '#FAF9F8',
                        border: '2px dashed #BDBDBD',
                        borderRadius: '16px',
                        padding: '16px 20px',
                        color: '#666666',
                        fontStyle: 'italic',
                        fontSize: '14.5px',
                        lineHeight: 1.5,
                        textAlign: 'left',
                        minHeight: '74px',
                        display: 'flex',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      &ldquo;Well... I took a course and I know the concepts of CPC, CTR, and Facebook Ad Manager theoretically, but haven&apos;t run live budget yet...&rdquo;
                    </div>

                    {/* Generic Telemetry (Unverified/Zero) */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }} className="telemetry-grid">
                      {[
                        { label: 'MANAGED SPEND', val: '₹0 (None)' },
                        { label: 'ATTRIBUTED ROAS', val: '0.0X' },
                        { label: 'PROVEN REVENUE', val: '₹0 Theory' },
                      ].map((t, idx) => (
                        <div key={idx} style={{ background: '#F5F5F5', border: '1.5px dashed #CCCCCC', borderRadius: '12px', padding: '10px 8px' }}>
                          <div style={{ fontSize: '9.5px', color: '#888888', fontFamily: "var(--ff-mono, monospace)", fontWeight: 800 }}>{t.label}</div>
                          <div style={{ fontSize: '15px', fontWeight: 800, color: '#777777' }}>{t.val}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: '#EEEEEE', border: '1.5px solid #0A0A0A', borderRadius: '14px', padding: '12px', color: '#666666', fontWeight: 700, fontSize: '13px' }}>
                      Recruiter Outcome: &ldquo;We&apos;ll keep your profile on file...&rdquo; 😴 (Ghosted)
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="treqo"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between',
                      gap: '14px',
                    }}
                  >
                    {/* TREQO Slayer Portfolio Proof */}
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '2px solid #6D28FF',
                        borderRadius: '16px',
                        padding: '16px 20px',
                        color: '#ffffff',
                        fontSize: '14.5px',
                        fontWeight: 600,
                        textAlign: 'left',
                        lineHeight: 1.5,
                        minHeight: '74px',
                        display: 'flex',
                        alignItems: 'center',
                        boxSizing: 'border-box',
                      }}
                    >
                      &ldquo;Yes. Here is my live dashboard for a D2C beverage brand. I managed ₹1.2L in ad spend, optimized hook rates on 14 video creatives, reduced CAC to ₹290, and delivered ₹4.8L in revenue.&rdquo;
                    </div>

                    {/* Telemetry Numbers */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }} className="telemetry-grid">
                      {[
                        { label: 'MANAGED SPEND', val: '₹1,20,000' },
                        { label: 'CAC REDUCTION', val: '-53.2%' },
                        { label: 'ATTRIBUTED ROAS', val: '4.0X' },
                      ].map((t, idx) => (
                        <div key={idx} style={{ background: '#000000', border: '1.5px solid rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px 8px' }}>
                          <div style={{ fontSize: '9.5px', color: '#B497CF', fontFamily: "var(--ff-mono, monospace)", fontWeight: 800 }}>{t.label}</div>
                          <div style={{ fontSize: '16px', fontWeight: 900, color: '#ffffff' }}>{t.val}</div>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: 'rgba(109, 40, 255, 0.25)', border: '1.5px solid #6D28FF', borderRadius: '14px', padding: '12px', color: '#ffffff', fontWeight: 800, fontSize: '13px' }}>
                      Recruiter Outcome: &ldquo;Show me the work... That&apos;s insane. When can you start?&rdquo; 🎉 (Hired!)
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            PART 3: EXTRA PROOF: CERTIFICATIONS VS THE REAL FLEX
        ══════════════════════════════════════════════════════════════ */}
        <div
          style={{
            textAlign: 'center',
            padding: '30px 0 40px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Eyebrow */}
          <div style={{ marginBottom: '14px' }}>
            <span
              style={{
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: '11.5px',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#666666',
                display: 'inline-block',
              }}
            >
              EXTRA PROOF
            </span>
          </div>

          {/* Dual-Tone Stacked Heading */}
          <div style={{ marginBottom: '28px' }}>
            <h3
              style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              <span
                style={{
                  color: 'rgba(10, 10, 10, 0.18)',
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                YES, YOU&apos;LL GET
              </span>
              <span
                style={{
                  color: '#6D28FF',
                  display: 'block',
                  textShadow: '2px 2px 0px rgba(10, 10, 10, 0.08)',
                }}
              >
                CERTIFICATIONS.
              </span>
            </h3>
          </div>

          {/* 5 Centered & Spread Certification Badges Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '32px',
            }}
          >
            {['Google', 'Meta', 'HubSpot', 'SEMrush', 'TREQO'].map((c) => (
              <motion.div
                key={c}
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  background: '#ffffff',
                  color: '#0A0A0A',
                  border: '2.5px solid #0A0A0A',
                  borderRadius: '999px',
                  padding: '12px clamp(20px, 2.5vw, 32px)',
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: 'clamp(14px, 1.2vw, 17px)',
                  fontWeight: 900,
                  boxShadow: '4px 4px 0px #0A0A0A',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                  userSelect: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#6D28FF';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.boxShadow = '5px 5px 0px #0A0A0A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.color = '#0A0A0A';
                  e.currentTarget.style.boxShadow = '4px 4px 0px #0A0A0A';
                }}
              >
                {c}
              </motion.div>
            ))}
          </div>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: 'italic',
              fontSize: '17px',
              color: '#666666',
              margin: '0 0 8px',
              fontWeight: 500,
            }}
          >
            Nice to have.
          </p>

          {/* Punchline */}
          <h4
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              color: '#0A0A0A',
              margin: 0,
            }}
          >
            THE REAL FLEX IS THE WORK.
          </h4>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(10, 10, 10, 0.15);
          border-radius: 999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6D28FF;
        }

        @media (max-width: 960px) {
          .curriculum-main-grid {
            grid-template-columns: 1fr !important;
            height: auto !important;
            max-height: none !important;
            gap: 24px !important;
          }
          .timeline-titles-rail {
            max-height: 220px !important;
          }
          .techniques-subgrid {
            grid-template-columns: 1fr !important;
          }
          .telemetry-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
