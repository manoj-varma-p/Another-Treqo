"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, Terminal, ArrowRight, Zap, Clock, Users, BarChart2 } from "lucide-react";

const TERM_DATA = [
  {
    id: 1,
    title: "What Marketing Really Is",
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

const levelColor = {
  "Beginner": "#34D399",
  "Intermediate": "#60A5FA",
  "Advanced": "#F472B6",
  "All Levels": "#FBBF24",
};

export default function LearningSystem() {
  const [activeTerm, setActiveTerm] = useState(TERM_DATA[0]);

  return (
    <section id="system" data-stage="SYSTEM" style={{
      background: "#0A0A0C",
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Outfit', sans-serif",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      padding: "80px 0 100px",
    }}>

      {/* TOP HARMONIOUS GLOW */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "220px",
        background: "radial-gradient(ellipse at top, rgba(109, 40, 255, 0.22) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* GRID BACKGROUND */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.08 }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(to right, rgba(180,151,207,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(180,151,207,0.2) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }} />
      </div>

      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: "1440px", width: "100%",
        margin: "0 auto", padding: "0 4%",
        boxSizing: "border-box",
        flex: 1, display: "flex", flexDirection: "column", minHeight: 0,
      }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "36px", flexShrink: 0 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(180, 151, 207, 0.12)", border: "1px solid rgba(180, 151, 207, 0.28)",
            borderRadius: "999px", padding: "6px 16px", marginBottom: "16px",
          }}>
            <Sparkles size={11} color="#B497CF" />
            <span style={{ fontSize: "10px", fontWeight: 800, color: "#B497CF", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Curriculum Stack
            </span>
          </div>

          <h2 style={{ margin: "0 auto 12px", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            <span style={{
              display: "block", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 900, color: "#ffffff"
            }}>
              What You'll Learn
            </span>
            <span style={{
              display: "block", fontSize: "clamp(36px, 4.5vw, 60px)", fontWeight: 400, color: "#B497CF", fontStyle: "italic", fontFamily: "'Playfair Display', Georgia, serif"
            }}>
              Inside The System
            </span>
          </h2>

          <p style={{ fontSize: "15px", color: "rgba(250, 249, 248, 0.7)", fontWeight: 500, maxWidth: "480px", margin: "0 auto", lineHeight: 1.6 }}>
            Each term is engineered to build high-performance execution skills through a unified growth framework.
          </p>
        </div>

        {/* MAIN LAYOUT DASHBOARD BOX */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          borderRadius: "32px",
          overflow: "hidden",
          border: "1px solid rgba(180, 151, 207, 0.22)",
          background: "rgba(14, 11, 26, 0.95)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 40px 100px rgba(0, 0, 0, 0.7)",
          flex: 1,
          minHeight: 0,
        }}>

          {/* ── LEFT PANEL ── */}
          <div style={{
            background: "rgba(10, 8, 18, 0.8)",
            borderRight: "1px solid rgba(180, 151, 207, 0.15)",
            display: "flex", flexDirection: "column", minHeight: 0,
          }}>

            {/* Panel header */}
            <div style={{ padding: "24px 24px 18px", borderBottom: "1px solid rgba(180, 151, 207, 0.12)", flexShrink: 0 }}>
              <p style={{ margin: "0 0 4px", fontSize: "9px", fontWeight: 800, color: "#B497CF", textTransform: "uppercase", letterSpacing: "0.25em" }}>Program Timeline</p>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 900, color: "white", letterSpacing: "-0.02em" }}>PHASES</h3>
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#B497CF", letterSpacing: "0.1em" }}>16 TERMS</span>
              </div>
            </div>

            {/* Scrollable list */}
            <div style={{ position: "relative", flexShrink: 0 }}>
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "48px",
                background: "linear-gradient(to top, rgba(14, 11, 26, 0.95), transparent)",
                pointerEvents: "none", zIndex: 2,
              }} />
              <div style={{
                overflowY: "auto",
                maxHeight: "504px",
                padding: "14px 14px",
                display: "flex", flexDirection: "column", gap: "8px",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(180, 151, 207, 0.3) transparent",
              }}>
                {TERM_DATA.map((term) => {
                  const isActive = term.id === activeTerm.id;
                  return (
                    <button
                      key={term.id}
                      onClick={() => setActiveTerm(term)}
                      style={{
                        display: "flex", alignItems: "center", gap: "14px",
                        width: "100%", padding: "15px 18px",
                        borderRadius: "16px", textAlign: "left",
                        background: isActive ? "#B497CF" : "rgba(255, 255, 255, 0.03)",
                        border: `1px solid ${isActive ? "#B497CF" : "rgba(180, 151, 207, 0.12)"}`,
                        boxShadow: isActive ? "0 8px 25px rgba(180, 151, 207, 0.35)" : "none",
                        cursor: "pointer",
                        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{
                        fontSize: "13px", fontWeight: 900, minWidth: "24px",
                        color: isActive ? "#0A0A0C" : "#B497CF",
                      }}>
                        {term.id < 10 ? `0${term.id}` : term.id}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{
                          margin: "0 0 2px", fontSize: "12px", fontWeight: 800,
                          color: isActive ? "#0A0A0C" : "rgba(250, 249, 248, 0.9)",
                          textTransform: "uppercase", letterSpacing: "0.04em",
                          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                        }}>
                          {term.title}
                        </p>
                        <p style={{
                          margin: 0, fontSize: "11px", fontWeight: 500,
                          color: isActive ? "rgba(10, 10, 12, 0.75)" : "rgba(250, 249, 248, 0.5)",
                          fontStyle: "italic",
                        }}>
                          {term.subtitle}
                        </p>
                      </div>
                      {isActive && <Terminal size={13} color="#0A0A0C" opacity={0.8} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Keywords Section */}
            <div style={{
              padding: "16px",
              flexShrink: 0,
              borderTop: "1px solid rgba(180, 151, 207, 0.12)"
            }}>
              <p style={{
                fontSize: "10px",
                fontWeight: 800,
                color: "#B497CF",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "10px"
              }}>
                Keywords
              </p>

              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px"
              }}>
                {activeTerm.techniques.slice(0, 4).map((tag, i) => (
                  <span key={i} style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "6px 12px",
                    borderRadius: "999px",
                    background: "rgba(180, 151, 207, 0.1)",
                    border: "1px solid rgba(180, 151, 207, 0.2)",
                    color: "rgba(250, 249, 248, 0.85)"
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div style={{
            overflowY: "auto", display: "flex", flexDirection: "column",
            padding: "44px 56px", gap: "32px",
          }}>

            {/* Heading + level + meta */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6D28FF", boxShadow: "0 0 12px #6D28FF" }} />
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#B497CF", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  Term {activeTerm.id < 10 ? `0${activeTerm.id}` : activeTerm.id}
                </span>
                <div style={{
                  marginLeft: "auto", padding: "5px 14px", borderRadius: "999px",
                  background: `${levelColor[activeTerm.level]}18`,
                  border: `1px solid ${levelColor[activeTerm.level]}44`,
                  fontSize: "10px", fontWeight: 800, color: levelColor[activeTerm.level],
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>
                  {activeTerm.level}
                </div>
              </div>

              <h2 style={{ margin: "0 0 6px", fontSize: "clamp(32px, 3.5vw, 44px)", fontWeight: 900, color: "white", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                {activeTerm.title}
              </h2>
              <p style={{ margin: "0 0 20px", fontSize: "15px", color: "rgba(250, 249, 248, 0.65)", fontWeight: 500, fontStyle: "italic" }}>
                {activeTerm.subtitle}
              </p>

              {/* Meta chips */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[
                  { icon: Clock, label: activeTerm.duration },
                  { icon: BarChart2, label: `${activeTerm.projects} Projects` },
                  { icon: Users, label: "Mentor-Led" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    padding: "8px 16px", borderRadius: "12px",
                    background: "rgba(180, 151, 207, 0.08)", border: "1px solid rgba(180, 151, 207, 0.18)",
                  }}>
                    <Icon size={13} color="#B497CF" />
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "rgba(250, 249, 248, 0.85)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <BarChart2 size={14} color="#B497CF" />
                <h3 style={{
                  margin: 0,
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#B497CF",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em"
                }}>
                  Industry
                </h3>
                <div style={{ flex: 1, height: "1px", background: "rgba(180, 151, 207, 0.12)" }} />
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <div style={{
                  padding: "11px 22px",
                  borderRadius: "14px",
                  background: "rgba(180, 151, 207, 0.08)",
                  border: "1px solid rgba(180, 151, 207, 0.18)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "white",
                }}>
                  {activeTerm.industry}
                </div>

                <div style={{
                  padding: "11px 22px",
                  borderRadius: "14px",
                  background: "rgba(180, 151, 207, 0.08)",
                  border: "1px solid rgba(180, 151, 207, 0.18)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "white",
                }}>
                  {activeTerm.company}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <Zap size={14} color="#B497CF" />
                <h3 style={{ margin: 0, fontSize: "11px", fontWeight: 800, color: "#B497CF", textTransform: "uppercase", letterSpacing: "0.2em" }}>Tech Stack</h3>
                <div style={{ flex: 1, height: "1px", background: "rgba(180, 151, 207, 0.12)" }} />
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {activeTerm.tools.map((tool, i) => (
                  <div key={i} style={{
                    padding: "11px 22px", borderRadius: "14px",
                    background: "rgba(180, 151, 207, 0.08)", border: "1px solid rgba(180, 151, 207, 0.18)",
                    fontSize: "13px", fontWeight: 700, color: "white",
                  }}>
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Methodology */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <CheckCircle2 size={14} color="#B497CF" />
                <h3 style={{ margin: 0, fontSize: "11px", fontWeight: 800, color: "#B497CF", textTransform: "uppercase", letterSpacing: "0.2em" }}>Core Methodology</h3>
                <div style={{ flex: 1, height: "1px", background: "rgba(180, 151, 207, 0.12)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {activeTerm.techniques.map((tech, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: "16px",
                    padding: "20px 24px", borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(180, 151, 207, 0.15)",
                  }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "10px", flexShrink: 0,
                      background: "#6D28FF", display: "flex", alignItems: "center",
                      justifyContent: "center", fontSize: "11px", fontWeight: 900, color: "#ffffff",
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ margin: 0, fontSize: "13px", fontWeight: 800, color: "white", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Term Outcome */}
            <div style={{
              flexShrink: 0,
              padding: "24px 28px", borderRadius: "22px",
              background: "rgba(109, 40, 255, 0.14)", border: "1px solid rgba(109, 40, 255, 0.3)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6D28FF", boxShadow: "0 0 10px #6D28FF" }} />
                <span style={{ fontSize: "10px", fontWeight: 800, color: "#B497CF", textTransform: "uppercase", letterSpacing: "0.2em" }}>Term Outcome</span>
              </div>
              <p style={{ margin: 0, fontSize: "14px", color: "rgba(250, 249, 248, 0.88)", lineHeight: 1.7, fontWeight: 500 }}>
                {activeTerm.outcome}
              </p>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { width: 4px; }
        div::-webkit-scrollbar-track { background: transparent; }
        div::-webkit-scrollbar-thumb { background: rgba(180, 151, 207, 0.3); border-radius: 99px; }
        div::-webkit-scrollbar-thumb:hover { background: rgba(180, 151, 207, 0.5); }
      `}</style>
    </section>
  );
}
