"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video, Palette, Megaphone, Target,
  Users, Zap, Briefcase, Layout, ArrowRight,
  Sparkles, CheckCircle2, Terminal, Layers,
  Compass, Search, BarChart2, Globe, ShieldCheck, TrendingUp, BookOpen
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "What Marketing Really Is",
    heading: "Build The Base",
    description: "Deconstruct what marketing actually accomplishes in high-revenue companies. Move past superficial social media posts and learn the fundamental psychology of positioning, value creation, and market dynamics.",
    whatYouLearn: ["Market Research Fundamentals", "Customer Persona Architecture", "Brand Positioning Frameworks", "Value Proposition Design"],
    project: "Complete Brand Brief & Validated Persona",
    benefit: "Foundation for Live Campaigns",
    roadmap: ["Industry: Luxury", "Case Study: Tanishq", "Duration: 2 Weeks", "Level: Beginner"],
    tools: ["Google Trends", "ChatGPT", "Notion"],
    icon: Compass,
  },
  {
    id: 2,
    title: "Customer & Market Understanding",
    heading: "Know Your Audience Before You Sell",
    description: "Install deep customer empathy through quantitative and qualitative research methods. Discover trust triggers, map jobs-to-be-done, and segment markets to ensure message-market fit.",
    whatYouLearn: ["Customer Interviews & Surveys", "Trust Trigger Mapping", "Jobs, Pains & Gains Framework", "Precision Market Segmentation"],
    project: "3 Detailed Buyer Personas with Trust Triggers",
    benefit: "Plug Directly Into Any Campaign Brief",
    roadmap: ["Industry: Healthcare", "Case Study: Apollo 24|7", "Duration: 2 Weeks", "Level: Beginner"],
    tools: ["Google Forms", "Typeform", "Notion", "ChatGPT"],
    icon: Users,
  },
  {
    id: 3,
    title: "Funnels & Basic Metrics",
    heading: "Learn Where The Money Leaks",
    description: "Understand conversion architecture from top-of-funnel awareness down to bottom-of-funnel conversion. Diagnose drop-offs, compute acquisition unit economics, and build metric dashboards.",
    whatYouLearn: ["Full-Funnel Mapping (TOFU → BOFU)", "Funnel Drop-Off Diagnosis", "Conversion Rate Optimization (CRO)", "Metric Dashboarding & Analytics"],
    project: "Funnel Audit & Leak Fix Proposal",
    benefit: "High-Demand Marketer Skillset",
    roadmap: ["Industry: Travel", "Case Study: MakeMyTrip", "Duration: 2 Weeks", "Level: Beginner"],
    tools: ["Google Analytics", "Sheets", "Funnelytics", "Notion"],
    icon: BarChart2,
  },
  {
    id: 4,
    title: "Idea Clarity & Problem Discovery",
    heading: "Prove You Can Think Before You Execute",
    description: "Apply rigorous filtering frameworks to evaluate business ideas, size market opportunities, and establish problem-solution fit before burning marketing dollars.",
    whatYouLearn: ["Problem-Solution Fit Testing", "Fx|xU Filter Application", "Addressable Market Opportunity Sizing", "Go/No-Go Decision Frameworks"],
    project: "Validated Problem Statement & Pitch",
    benefit: "Founder-Level Strategic Thinking",
    roadmap: ["Industry: EV / Auto", "Case Study: Ola Electric", "Duration: 2 Weeks", "Level: Intermediate"],
    tools: ["Notion", "Miro", "ChatGPT", "Google Docs"],
    icon: Target,
  },
  {
    id: 5,
    title: "Idea to Market (0→1)",
    heading: "Take Something From Zero To Users",
    description: "Design comprehensive Go-To-Market playbooks. Select primary growth channels, engineer viral loop mechanics, and execute launch sequences for zero-to-one traction.",
    whatYouLearn: ["GTM Strategy Blueprinting", "Channel-Market Fit Identification", "Viral Loop Mechanics Design", "Launch Sequence Execution"],
    project: "0→1 GTM Launch Playbook",
    benefit: "Full Launch Execution Capability",
    roadmap: ["Industry: Gaming", "Case Study: Dream11", "Duration: 2 Weeks", "Level: Intermediate"],
    tools: ["Notion", "Figma", "Google Sheets", "ChatGPT"],
    icon: Zap,
  },
  {
    id: 6,
    title: "Brand Strategy & Positioning",
    heading: "Make Them Remember You",
    description: "Architect brand identities that command premium positioning. Build brand archetype maps, establish distinct brand tone of voice, and leverage cultural relevance for brand equity.",
    whatYouLearn: ["Brand Archetype Mapping", "Competitive Positioning Matrix", "Cultural Relevance Strategy", "Brand Voice & Guidelines"],
    project: "Complete Portfolio Positioning Doc",
    benefit: "Stand Out In Any Market",
    roadmap: ["Industry: FMCG", "Case Study: Amul", "Duration: 2 Weeks", "Level: Intermediate"],
    tools: ["Canva", "Notion", "Google Trends", "ChatGPT"],
    icon: Palette,
  },
  {
    id: 7,
    title: "Media Strategy & Planning",
    heading: "Decide Where Money Goes",
    description: "Master multi-channel media allocation. Learn to balance reach vs. frequency, manage large ad budgets, and build performance forecasts across organic and paid channels.",
    whatYouLearn: ["Channel Selection Matrix", "Budget Allocation Modeling", "Reach vs Frequency Optimization", "Cross-Channel Campaign Planning"],
    project: "₹100Cr+ Media Budget Plan",
    benefit: "Enterprise Media Planning Skills",
    roadmap: ["Industry: Telecom", "Case Study: Airtel", "Duration: 2 Weeks", "Level: Intermediate"],
    tools: ["Google Sheets", "Media Templates", "ChatGPT", "Notion"],
    icon: Megaphone,
  },
  {
    id: 8,
    title: "Search & Website Ecosystem",
    heading: "Own Search Results",
    description: "Dominate organic search engine results pages. Conduct deep technical SEO audits, build keyword clusters, fix content gaps, and optimize site hierarchy for maximum authority.",
    whatYouLearn: ["Technical SEO Site Audits", "Semantic Keyword Clustering", "Content Gap Analysis", "On-Page & Technical Optimization"],
    project: "Page 1 Organic SEO Roadmap",
    benefit: "Drive High-Intent Organic Traffic",
    roadmap: ["Industry: InsurTech", "Case Study: Policybazaar", "Duration: 2 Weeks", "Level: Advanced"],
    tools: ["Ahrefs", "SEMrush", "Search Console", "Screaming Frog"],
    icon: Search,
  },
  {
    id: 9,
    title: "Google Ads Ecosystem",
    heading: "Master The Google Machine",
    description: "Engineered search campaigns, Performance Max (PMAX), YouTube video ads, and dynamic bid optimization strategies to capture high-intent buyers on Google.",
    whatYouLearn: ["Google Search Campaign Setup", "Performance Max (PMAX) Strategy", "YouTube Video Ad Funnels", "Automated Bid Optimization"],
    project: "Full-Funnel Google Ads Setup",
    benefit: "High ROAS Search Performance",
    roadmap: ["Industry: Home Services", "Case Study: Urban Company", "Duration: 2 Weeks", "Level: Advanced"],
    tools: ["Google Ads", "Keyword Planner", "Sheets", "Looker"],
    icon: Layout,
  },
  {
    id: 10,
    title: "Meta & Social Media",
    heading: "Crack The Algorithm",
    description: "Build high-performing ad creatives and campaign structures for Meta Ads. Test ad hooks, scale winning audiences, and optimize social media acquisition funnels.",
    whatYouLearn: ["Meta Ads Campaign Structure", "Creative Hook & Angle Testing", "Custom & Lookalike Audiences", "Social Ad Funnel Optimization"],
    project: "Live Meta Campaign Architecture",
    benefit: "Scale Paid Social ROAS",
    roadmap: ["Industry: Food / QSR", "Case Study: Zomato", "Duration: 2 Weeks", "Level: Intermediate"],
    tools: ["Meta Ads", "Canva", "Notion", "ChatGPT"],
    icon: Video,
  },
  {
    id: 11,
    title: "Owned Media & Retention",
    heading: "Turn Users Into Lifers",
    description: "Unlock compounding growth through CRM automation, email lifecycle sequences, WhatsApp flows, and retention loops that maximize customer lifetime value (LTV).",
    whatYouLearn: ["Email Lifecycle Sequences", "WhatsApp Automation Workflows", "Customer Retention Loops", "CRM Segmented Marketing"],
    project: "Lifecycle Retention System",
    benefit: "Maximize Customer LTV",
    roadmap: ["Industry: Fitness", "Case Study: Cult.fit", "Duration: 2 Weeks", "Level: Advanced"],
    tools: ["Mailchimp", "WhatsApp", "Sheets", "Notion"],
    icon: ShieldCheck,
  },
  {
    id: 12,
    title: "Content Marketing & Storytelling",
    heading: "Build Content Flywheels",
    description: "Craft magnetic narrative arcs that build audience trust at scale. Produce SEO-optimized content assets, establish editorial flywheels, and master multi-platform distribution.",
    whatYouLearn: ["Content Engine Architecture", "SEO Copywriting & Storytelling", "Brand Editorial Calendar", "Multi-Platform Distribution"],
    project: "Organic Content Engine Blueprint",
    benefit: "Build Compounding Authority",
    roadmap: ["Industry: Fintech", "Case Study: Zerodha", "Duration: 2 Weeks", "Level: Intermediate"],
    tools: ["Notion", "WordPress", "Canva", "ChatGPT"],
    icon: BookOpen,
  },
  {
    id: 13,
    title: "Media Buying & Scale",
    heading: "Scale Paid Campaigns",
    description: "Master advanced media buying tactics for multi-million budget scaling. Implement aggressive creative iterations, manage multi-touch attribution, and sustain high ROAS.",
    whatYouLearn: ["Omnichannel Ad Buying", "Aggressive Creative Testing", "ROAS & Attribution Modeling", "Marketplace & Retargeting"],
    project: "Multi-Platform Scaling Blueprint",
    benefit: "High-Budget Campaign Control",
    roadmap: ["Industry: Sports", "Case Study: Nike India", "Duration: 2 Weeks", "Level: Advanced"],
    tools: ["Meta Ads", "Google Ads", "Sheets", "Looker"],
    icon: TrendingUp,
  },
  {
    id: 14,
    title: "Revenue & Unit Economics",
    heading: "Understand The Money",
    description: "Gain financial fluency in marketing. Model CAC vs LTV ratios, analyze payback periods, optimize pricing models, and evaluate net contribution margins.",
    whatYouLearn: ["CAC vs LTV Financial Modeling", "Payback Period Optimization", "Pricing & Monetization Models", "Contribution Margin Analysis"],
    project: "Unit Economics Financial Model",
    benefit: "P&L Marketer Executive Mindset",
    roadmap: ["Industry: Hospitality", "Case Study: OYO", "Duration: 2 Weeks", "Level: Advanced"],
    tools: ["Sheets", "Notion", "ChatGPT", "Looker"],
    icon: Briefcase,
  },
  {
    id: 15,
    title: "Systems, Analytics & Scale",
    heading: "Build Growth Systems",
    description: "Automate growth operations and data tracking. Connect automated dashboards, configure conversion tracking, and construct scalable growth loops.",
    whatYouLearn: ["Looker & GA4 Dashboarding", "Zapier & Webhook Automations", "Growth KPI Measurement", "Automated Reporting Systems"],
    project: "Scalable Growth Analytics Dashboard",
    benefit: "Automate Growth Operations",
    roadmap: ["Industry: Music / OTT", "Case Study: Spotify India", "Duration: 2 Weeks", "Level: Advanced"],
    tools: ["GA4", "Looker", "Zapier", "Sheets"],
    icon: Layers,
  },
  {
    id: 16,
    title: "Organic Growth & Leadership",
    heading: "Become A Growth Leader",
    description: "Step into senior marketing leadership. Build personal brand leverage, engineer community flywheels, nurture brand loyalty, and lead cross-functional growth teams.",
    whatYouLearn: ["Community-Led Growth", "Brand Loyalty & Advocacy", "Executive Personal Branding", "Marketing Team Leadership"],
    project: "Full Organic Growth Playbook",
    benefit: "Lead Growth Operations",
    roadmap: ["Industry: F&B / Lifestyle", "Case Study: Starbucks India", "Duration: 2 Weeks", "Level: Advanced"],
    tools: ["Notion", "Trends", "Canva", "ChatGPT"],
    icon: Globe,
  }
];

export default function LearningSystem() {
  const [active, setActive] = useState(1);
  const selected = courses.find((c) => c.id === active) || courses[0];
  const IconComponent = selected.icon;

  return (
    <section id="system" data-stage="SYSTEM" className="learning-hub-sec">
      
      {/* Glow Aura */}
      <div className="hub-glow-overlay" />

      <div className="hub-container">
        
        {/* REFINED HEADER */}
        <div className="hub-header">
          <div className="hub-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span className="badge-text">CURATED LEARNING PATH</span>
          </div>
          
          <h2 className="hub-main-heading">
            Inside the <span className="highlight-purple">16 Module</span> Curriculum Stack
          </h2>
          
          <p className="hub-sub-heading">
            A unified ecosystem engineered to install high-performance, job-ready 
            execution skills through real studio scenarios and live revenue campaigns.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="hub-main-layout" style={{ gap: 40 }}>
          
          {/* NAVIGATION SIDEBAR */}
          <div className="hub-sidebar">
            <div className="sidebar-scroll-box">
              {courses.map((course) => {
                const CourseIcon = course.icon;
                const isActive = active === course.id;
                return (
                  <button
                    key={course.id}
                    onClick={() => setActive(course.id)}
                    className={`sidebar-nav-btn ${isActive ? 'active' : ''}`}
                  >
                    <div className={`icon-wrapper ${isActive ? 'icon-active' : ''}`}>
                      <CourseIcon size={18} />
                    </div>
                    <div className="btn-text-meta">
                      <p className="mod-num">Module {course.id < 10 ? `0${course.id}` : course.id}</p>
                      <p className={`mod-title ${isActive ? 'text-active' : ''}`}>
                        {course.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CONTENT CARD WITH ANIMATE PRESENCE */}
          <div className="hub-content-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="hub-content-card"
                style={{
                  background: '#ffffff',
                  color: '#0A0A0C',
                  borderRadius: '32px',
                  padding: 'clamp(28px, 3.5vw, 44px)',
                  boxShadow: '0 25px 70px rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  minHeight: '620px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                {/* TOP HEADER ROW */}
                <div className="card-top-row">
                  <div className="card-left-info">
                    <div className="syllabus-tag-row">
                      <span className="syllabus-tag">Course Syllabus</span>
                      <div className="live-dot-pulse" />
                    </div>
                    <h3 className="card-title" style={{ color: '#0A0A0C' }}>{selected?.title}</h3>
                    <p className="card-sub-heading" style={{ color: '#6D28FF' }}>{selected?.heading}</p>
                    <p className="card-description" style={{ color: '#4A4556' }}>
                      {selected?.description}
                    </p>
                  </div>

                  {/* PRO STACK TOOLS SIDE BOX */}
                  <div className="tools-card-box">
                    <h4 className="tools-box-title" style={{ color: '#6D28FF' }}>
                      <Terminal size={12} /> Pro Stack
                    </h4>
                    <div className="tools-pills-wrap">
                      {selected?.tools.map((tool, i) => (
                        <span key={i} className="tool-pill" style={{ color: '#0A0A0C' }}>{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3-COLUMN DETAILS GRID */}
                <div className="card-details-grid">
                  
                  {/* Core Curriculum Checklist */}
                  <div className="grid-section">
                    <h4 className="section-col-label" style={{ color: '#6D28FF' }}>Core Curriculum</h4>
                    <ul className="checklist-ul">
                      {selected?.whatYouLearn.map((item, i) => (
                        <li key={i} className="check-item" style={{ color: '#0A0A0C' }}>
                          <div className="check-icon-circle">
                            <CheckCircle2 size={12} color="#ffffff" />
                          </div>
                          <span style={{ color: '#0A0A0C' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strategic Roadmap */}
                  <div className="grid-section">
                    <h4 className="section-col-label" style={{ color: '#6D28FF' }}>Strategic Roadmap</h4>
                    <div className="roadmap-steps-list">
                      {selected?.roadmap.map((step, i) => (
                        <div key={i} className="roadmap-step-row">
                          <span className="step-num" style={{ color: '#6D28FF' }}>0{i+1}</span>
                          <span className="step-text" style={{ color: '#4A4556' }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Primary Outcome Feature Card */}
                  <div className="grid-section">
                    <h4 className="section-col-label" style={{ color: '#6D28FF' }}>Primary Outcome</h4>
                    <div className="outcome-banner-card">
                      <Layers className="bg-watermark-icon" size={100} />
                      <h4 className="outcome-banner-tag" style={{ color: '#B497CF' }}>Hands-on Project</h4>
                      <p className="outcome-project-title">{selected?.project}</p>
                      <div className="outcome-benefit-chip">
                        <p className="benefit-text">{selected?.benefit}</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* BOTTOM ACTION BAR */}
                <div className="card-action-footer">
                  <a href="#demo" className="btn-primary-apply">
                    Start Learning Module <ArrowRight size={18} />
                  </a>
                  <div className="footer-suite-tag">
                    <span className="suite-tag-text" style={{ color: '#8A7EB0' }}>Part of the Treqo Learning System</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style jsx>{`
        .learning-hub-sec {
          padding: 80px 0 100px;
          background: linear-gradient(180deg, #0A0A0C 0%, #130A2E 50%, #0A0A0C 100%);
          color: #ffffff;
          font-family: var(--ff-body, 'Outfit', 'Plus Jakarta Sans', sans-serif);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .hub-glow-overlay {
          position: absolute;
          top: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 950px;
          height: 550px;
          border-radius: 50%;
          background: radial-gradient(ellipse at top, rgba(109, 40, 255, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .hub-container {
          max-width: 1320px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(20px, 5vw, 64px);
          position: relative;
          z-index: 10;
          box-sizing: border-box;
        }

        /* HEADER */
        .hub-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .hub-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(180, 151, 207, 0.12);
          border: 1px solid rgba(180, 151, 207, 0.28);
          padding: 6px 18px;
          border-radius: 999px;
          margin-bottom: 16px;
        }

        .badge-sparkle {
          color: #B497CF;
        }

        .badge-text {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #B497CF;
          font-family: var(--ff-mono, 'JetBrains Mono', monospace);
        }

        .hub-main-heading {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0 0 10px;
          font-family: var(--ff-display, 'Outfit', sans-serif);
        }

        .highlight-purple {
          color: #B497CF;
          font-style: italic;
          font-weight: 600;
          font-family: 'Fraunces', Georgia, serif;
        }

        .hub-sub-heading {
          max-width: 680px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.75);
          font-size: clamp(14.5px, 1.2vw, 16.5px);
          line-height: 1.6;
          font-weight: 400;
          font-family: var(--ff-body, 'Outfit', 'Inter', sans-serif);
        }

        /* MAIN LAYOUT */
        .hub-main-layout {
          display: flex;
          flex-direction: row;
          gap: 40px;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          .hub-main-layout {
            flex-direction: column;
          }
        }

        /* SIDEBAR */
        .hub-sidebar {
          width: 320px;
          flex-shrink: 0;
          background: rgba(18, 12, 38, 0.85);
          border: 1px solid rgba(180, 151, 207, 0.2);
          border-radius: 28px;
          padding: 14px;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          position: sticky;
          top: 100px;
        }

        @media (max-width: 1024px) {
          .hub-sidebar {
            width: 100%;
            position: static;
          }
        }

        .sidebar-scroll-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: 580px;
          overflow-y: auto;
          padding-right: 4px;
          scrollbar-width: thin;
          scrollbar-color: rgba(180, 151, 207, 0.3) transparent;
        }

        .sidebar-nav-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          border-radius: 18px;
          border: 1px solid rgba(180, 151, 207, 0.1);
          background: rgba(255, 255, 255, 0.03);
          cursor: pointer;
          transition: all 0.25s;
          text-align: left;
          width: 100%;
        }

        .sidebar-nav-btn:hover {
          background: rgba(180, 151, 207, 0.12);
          border-color: rgba(180, 151, 207, 0.25);
        }

        .sidebar-nav-btn.active {
          background: #6D28FF !important;
          border-color: #6D28FF !important;
          box-shadow: 0 10px 30px rgba(109, 40, 255, 0.4);
          transform: scale(1.02);
        }

        .icon-wrapper {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.25s;
          flex-shrink: 0;
        }

        .icon-wrapper.icon-active {
          background: rgba(255, 255, 255, 0.2) !important;
          color: #ffffff !important;
        }

        .btn-text-meta {
          flex: 1;
          min-width: 0;
        }

        .mod-num {
          font-size: 9px;
          font-weight: 800;
          color: #B497CF;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          margin: 0 0 2px;
          font-family: var(--ff-mono, 'JetBrains Mono', monospace);
        }

        .sidebar-nav-btn.active .mod-num {
          color: #ffffff !important;
          font-weight: 900 !important;
        }

        .mod-title {
          font-size: 13px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.25s;
          font-family: var(--ff-body, 'Outfit', sans-serif);
        }

        .sidebar-nav-btn.active .mod-title {
          color: #ffffff !important;
          font-weight: 800 !important;
        }

        /* CONTENT CONTAINER */
        .hub-content-container {
          flex: 1;
          width: 100%;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .hub-content-card {
          background: #ffffff;
          color: #0A0A0C;
          border-radius: 32px;
          padding: clamp(28px, 3.5vw, 44px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(180, 151, 207, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          min-height: 620px;
          box-sizing: border-box;
          font-family: var(--ff-body, 'Outfit', sans-serif);
        }

        /* TOP ROW */
        .card-top-row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          gap: 28px;
          margin-bottom: 28px;
        }

        @media (max-width: 900px) {
          .card-top-row {
            flex-direction: column;
          }
        }

        .card-left-info {
          max-width: 640px;
        }

        .syllabus-tag-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .syllabus-tag {
          padding: 4px 12px;
          background: rgba(109, 40, 255, 0.08);
          color: #6D28FF;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          border-radius: 6px;
          border: 1px solid rgba(109, 40, 255, 0.2);
          letter-spacing: 0.12em;
          font-family: var(--ff-mono, 'JetBrains Mono', monospace);
        }

        .live-dot-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #6D28FF;
          box-shadow: 0 0 10px #6D28FF;
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .card-title {
          font-size: clamp(1.8rem, 2.8vw, 2.4rem);
          font-weight: 800;
          color: #0A0A0C;
          margin: 0 0 4px;
          letter-spacing: -0.02em;
          line-height: 1.15;
          font-family: var(--ff-display, 'Outfit', sans-serif);
        }

        .card-sub-heading {
          color: #6D28FF;
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: 20px;
          margin: 0 0 12px;
          font-weight: 600;
        }

        .card-description {
          color: #4A4556;
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
          margin: 0;
          font-family: var(--ff-body, 'Outfit', 'Inter', sans-serif);
        }

        /* TOOLS SIDE BOX */
        .tools-card-box {
          width: 240px;
          flex-shrink: 0;
          padding: 18px 20px;
          background: #F6F3FA;
          border-radius: 20px;
          border: 1.5px solid rgba(109, 40, 255, 0.15);
        }

        @media (max-width: 900px) {
          .tools-card-box {
            width: 100%;
          }
        }

        .tools-box-title {
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #6D28FF;
          margin: 0 0 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--ff-mono, 'JetBrains Mono', monospace);
        }

        .tools-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tool-pill {
          font-size: 11px;
          font-weight: 700;
          background: #ffffff;
          color: #0A0A0C;
          padding: 5px 12px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(109, 40, 255, 0.18);
          font-family: var(--ff-body, 'Outfit', sans-serif);
        }

        /* 3-COLUMN DETAILS GRID */
        .card-details-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 28px;
          flex: 1;
        }

        @media (max-width: 900px) {
          .card-details-grid {
            grid-template-columns: 1fr;
          }
        }

        .grid-section {
          display: flex;
          flex-direction: column;
        }

        .section-col-label {
          font-size: 10.5px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #6D28FF;
          border-bottom: 2px solid #EFEAF8;
          padding-bottom: 8px;
          margin: 0 0 16px;
          font-family: var(--ff-mono, 'JetBrains Mono', monospace);
        }

        .checklist-ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13.5px;
          font-weight: 600;
          color: #0A0A0C;
          line-height: 1.4;
          font-family: var(--ff-body, 'Outfit', sans-serif);
        }

        .check-icon-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6D28FF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffffff;
        }

        .roadmap-steps-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .roadmap-step-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .step-num {
          font-size: 11px;
          font-weight: 900;
          color: #6D28FF;
          font-family: var(--ff-mono, 'JetBrains Mono', monospace);
        }

        .step-text {
          font-size: 13.5px;
          font-weight: 600;
          color: #4A4556;
          font-family: var(--ff-body, 'Outfit', sans-serif);
        }

        /* OUTCOME BANNER */
        .outcome-banner-card {
          padding: 20px 22px;
          background: linear-gradient(135deg, #4F26D2 0%, #1c0a3e 100%);
          color: #ffffff;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(79, 38, 210, 0.28);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .bg-watermark-icon {
          position: absolute;
          right: -14px;
          bottom: -14px;
          color: rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .outcome-banner-tag {
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.85;
          margin: 0 0 10px;
          color: #B497CF;
          font-family: var(--ff-mono, 'JetBrains Mono', monospace);
        }

        .outcome-project-title {
          font-size: 15.5px;
          font-weight: 800;
          line-height: 1.4;
          margin: 0 0 16px;
          position: relative;
          z-index: 2;
          color: #ffffff;
          font-family: var(--ff-display, 'Outfit', sans-serif);
        }

        .outcome-benefit-chip {
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(8px);
          padding: 7px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          display: inline-block;
          width: fit-content;
        }

        .benefit-text {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0;
          color: #ffffff;
          font-family: var(--ff-mono, 'JetBrains Mono', monospace);
        }

        /* BOTTOM ACTION BAR */
        .card-action-footer {
          display: flex;
          flex-direction: row;
          gap: 16px;
          align-items: center;
          padding-top: 20px;
          border-top: 1.5px solid #F0ECF5;
        }

        @media (max-width: 640px) {
          .card-action-footer {
            flex-direction: column;
            align-items: stretch;
          }
        }

        .btn-primary-apply {
          padding: 13px 30px;
          background: #6D28FF;
          color: #ffffff;
          border-radius: 14px;
          font-weight: 800;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.25s;
          box-shadow: 0 8px 24px rgba(109, 40, 255, 0.35);
          text-decoration: none;
          font-family: var(--ff-body, 'Outfit', sans-serif);
        }

        .btn-primary-apply:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(109, 40, 255, 0.48);
          background: #4F26D2;
        }

        .footer-suite-tag {
          margin-left: auto;
          display: flex;
          align-items: center;
        }

        @media (max-width: 900px) {
          .footer-suite-tag {
            margin-left: 0;
          }
        }

        .suite-tag-text {
          font-size: 10.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #8A7EB0;
          font-style: italic;
          font-family: var(--ff-body, 'Outfit', sans-serif);
        }
      `}</style>
    </section>
  );
}
