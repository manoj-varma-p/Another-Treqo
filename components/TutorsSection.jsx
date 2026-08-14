'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Target, Wrench, CheckCircle2, Sparkles } from 'lucide-react';

/* ─── shared panel wrapper ─── */
const Panel = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -18 }}
    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    style={{ width: "100%", maxWidth: 1280, margin: "0 auto" }}
  >
    {children}
  </motion.div>
);

/* ─── shared sub-header ─── */
const SubHeader = ({ icon, badge, title, right }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
    <div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(79,38,210,0.08)", border: "1px solid rgba(79,38,210,0.16)", padding: "4px 12px", borderRadius: 999, marginBottom: 8 }}>
        {icon}
        <span style={{ fontSize: 10, fontWeight: 800, color: "#4F26D2", letterSpacing: "0.14em", textTransform: "uppercase" }}>{badge}</span>
      </div>
      <h3 style={{ fontSize: "clamp(18px,2.2vw,26px)", fontWeight: 800, color: "#140B30", margin: 0, letterSpacing: "-0.02em" }}>{title}</h3>
    </div>
    {right}
  </div>
);

export default function TutorsSection() {
  const [activeTab, setActiveTab] = useState('tutors');
  const [activeToolCat, setActiveToolCat] = useState('All');

  const tabs = [
    { id: 'tutors',    label: 'Tutors'    },
    { id: 'framework', label: 'Framework' },
    { id: 'toolkit',   label: 'Toolkit'   },
  ];

  const tutorsList = [
    { name: "Mohit Geat",      role: "Consultant",              company: "McKinsey & Company", sessions: "1220", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop&crop=faces" },
    { name: "Geetika Bajaj",   role: "Head – Corporate Channel", company: "MakeMyTrip",        sessions: "423",  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop&crop=faces" },
    { name: "Megha Punjabi",   role: "Growth Consultant",       company: "American Express",    sessions: "239",  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop&crop=faces" },
    { name: "Akshit Aggarwal", role: "Senior Associate",        company: "American Express",    sessions: "184",  img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop&crop=faces" },
    { name: "Prabhav Narang",  role: "Associate Lead",          company: "EY Parthenon",        sessions: "512",  img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop&crop=faces" },
  ];

  const frameworks = [
    { num: "01", tag: "INDUSTRY FIRST",  icon: "📖", title: "Learn",     desc: "Master what the industry actually needs — not what textbooks say. Focus on high-impact skills that drive immediate results in today's market.", pills: ["Market Realities", "Core Execution", "Strategy"] },
    { num: "02", tag: "ACTION ORIENTED", icon: "🎯", title: "Apply",     desc: "Use real tools on real problems — learning by doing, not just watching. Bridge the gap between theory and practical application.", pills: ["Live Tools", "Problem Solving", "Agility"] },
    { num: "03", tag: "PROOF OF WORK",   icon: "🚀", title: "Build",     desc: "Create a portfolio that speaks before you do. Develop a body of work that demonstrates your expertise to global employers.", pills: ["Asset Building", "Portfolio", "Case Studies"] },
    { num: "04", tag: "INDUSTRY ENTRY",  icon: "💼", title: "Get Hired", desc: "Enter the room with proof, not just a degree. Secure your spot in the industry with direct hiring partner access and interview mastery.", pills: ["Placements", "Networking", "Career Launch"] },
  ];

  const tools = [
    { name: "Google Analytics 4",  cat: "Analytics", level: "Advanced", desc: "Event tracking & attribution"     },
    { name: "Meta Ads Manager",    cat: "Ads",        level: "Expert",   desc: "CBO & Scaling campaigns"          },
    { name: "Google Ads",          cat: "Ads",        level: "Expert",   desc: "PMax & Search Bidding"            },
    { name: "SEMrush",             cat: "SEO",        level: "Advanced", desc: "Keyword research & audit"         },
    { name: "Shopify",             cat: "Funnel",     level: "Master",   desc: "D2C storefront & checkout"        },
    { name: "Framer",              cat: "Funnel",     level: "Master",   desc: "High-speed landing pages"         },
    { name: "Notion AI",           cat: "AI",         level: "Advanced", desc: "Prompt workflow automation"       },
    { name: "Klaviyo",             cat: "Retention",  level: "Expert",   desc: "Automated email sequences"        },
    { name: "PostHog",             cat: "Analytics",  level: "Advanced", desc: "Product analytics & heatmaps"     },
    { name: "Looker Studio",       cat: "Analytics",  level: "Expert",   desc: "Custom reporting dashboards"      },
  ];

  const filteredTools = activeToolCat === 'All' ? tools : tools.filter(t => t.cat === activeToolCat);

  return (
    <section
      id="tutors"
      data-stage="TUTORS"
      style={{
        background: "#F5F2FB",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      }}
    >

      {/* ══ TOP: fixed header + pill nav ══ */}
      <div style={{
        padding: "72px 5% 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>

        {/* Section headline */}
        <div style={{ textAlign: "center", marginBottom: 36, maxWidth: 640 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(79,38,210,0.08)", border: "1px solid rgba(79,38,210,0.18)",
            borderRadius: 999, padding: "5px 16px", marginBottom: 14,
          }}>
            <Sparkles size={11} color="#4F26D2" />
            <span style={{ fontSize: 10, fontWeight: 800, color: "#4F26D2", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              The Execution Ecosystem
            </span>
          </div>

          <h2 style={{ margin: "0 0 10px", lineHeight: 1.12, letterSpacing: "-0.03em" }}>
            <span style={{ display: "block", fontSize: "clamp(28px, 3.8vw, 46px)", fontWeight: 900, color: "#140B30" }}>
              Everything You Need For
            </span>
            <span style={{
              display: "inline-block",
              fontSize: "clamp(28px, 3.8vw, 46px)",
              fontWeight: 900,
              fontStyle: "italic",
              fontFamily: "'Playfair Display', Georgia, serif",
              background: "linear-gradient(90deg, #4F26D2, #8B5CF6)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}>
              Real Market Scale
            </span>
          </h2>

          <p style={{ fontSize: 14, color: "#6B5F85", margin: 0, lineHeight: 1.7, fontWeight: 500 }}>
            Explore who teaches, our 4-stage framework, and the industry stack you&apos;ll master.
          </p>
        </div>

        {/* Pill nav */}
        <div style={{ display: "flex", gap: 10, marginBottom: 0, flexWrap: "wrap", justifyContent: "center" }}>
          {tabs.map(tab => {
            const on = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                padding: "11px 30px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                cursor: "pointer",
                outline: "none",
                transition: "all 0.28s cubic-bezier(0.16,1,0.3,1)",
                background: on ? "linear-gradient(90deg,#4F26D2,#6D28FF)" : "#fff",
                border: on ? "1.5px solid #4F26D2" : "1.5px solid rgba(79,38,210,0.18)",
                color: on ? "#fff" : "#140B30",
                boxShadow: on ? "0 6px 22px rgba(79,38,210,0.28)" : "0 2px 10px rgba(26,13,75,0.04)",
                letterSpacing: "-0.01em",
              }}>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ══ PANEL AREA — no wrapper box, full width ══ */}
      <div style={{ padding: "48px 5% 80px" }}>
        <AnimatePresence mode="wait">

          {/* ─── TUTORS ─── */}
          {activeTab === 'tutors' && (
            <Panel key="tutors">
              <SubHeader
                icon={<ShieldCheck size={12} color="#4F26D2" />}
                badge="Practitioners Only"
                title="Taught By Active Growth Leads & Strategy Partners"
                right={
                  <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#fff", border: "1px solid rgba(79,38,210,0.14)", padding: "6px 14px", borderRadius: 24 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 8px #4ADE80" }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#140B30" }}>Online For 1-on-1 Sessions</span>
                  </div>
                }
              />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 20 }}>
                {tutorsList.map((t, i) => (
                  <motion.div key={i}
                    whileHover={{ y: -6, boxShadow: "0 24px 56px rgba(79,38,210,0.15)" }}
                    transition={{ duration: 0.22 }}
                    style={{
                      background: "#13082E",
                      border: "1px solid rgba(139,92,246,0.22)",
                      borderRadius: 22,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}>

                    {/* Portrait */}
                    <div style={{ height: 220, background: "linear-gradient(145deg,#EDE5FE,#D8C8FC)", overflow: "hidden", position: "relative" }}>
                      <div style={{ position: "absolute", top: -24, right: -24, width: 100, height: 100, borderRadius: "50%", background: "rgba(79,38,210,0.18)" }} />
                      <img
                        src={t.img} alt={t.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                      />
                    </div>

                    {/* Info */}
                    <div style={{ padding: "14px 15px 13px" }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 3 }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", fontStyle: "italic", fontFamily: "'Playfair Display',Georgia,serif", marginBottom: 6 }}>{t.role}</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#A78BFA", marginBottom: 10 }}>{t.company}</div>
                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 9, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>Successful Sessions</span>
                        <span style={{ fontSize: 13, fontWeight: 900, color: "#fff" }}>{t.sessions}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Panel>
          )}

          {/* ─── FRAMEWORK ─── */}
          {activeTab === 'framework' && (
            <Panel key="framework">
              <SubHeader
                icon={<Target size={12} color="#4F26D2" />}
                badge="Our Learning Execution Framework"
                title="Four Stages That Turn Learners Into Operators"
              />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
                {frameworks.map((card, i) => (
                  <motion.div key={i}
                    whileHover={{ y: -6, boxShadow: "0 24px 56px rgba(79,38,210,0.13)" }}
                    transition={{ duration: 0.22 }}
                    style={{
                      background: "#fff",
                      border: "1.5px solid rgba(79,38,210,0.1)",
                      borderRadius: 22,
                      padding: "28px 24px 22px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      position: "relative",
                      overflow: "hidden",
                    }}>

                    {/* Watermark number */}
                    <span style={{
                      position: "absolute", top: 16, right: 20,
                      fontSize: 64, fontWeight: 900,
                      color: "rgba(79,38,210,0.06)",
                      lineHeight: 1, userSelect: "none",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                    }}>{card.num}</span>

                    <div style={{ flex: 1 }}>
                      {/* Icon */}
                      <div style={{
                        width: 46, height: 46, borderRadius: 14,
                        background: "rgba(79,38,210,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 22, marginBottom: 16,
                      }}>{card.icon}</div>

                      <div style={{ fontSize: 10, fontWeight: 800, color: "#4F26D2", letterSpacing: "0.13em", textTransform: "uppercase", marginBottom: 8 }}>
                        {card.tag}
                      </div>
                      <div style={{ fontSize: 26, fontWeight: 800, color: "#140B30", marginBottom: 12, letterSpacing: "-0.025em" }}>
                        {card.title}
                      </div>
                      <p style={{ fontSize: 13, color: "#6B5F85", lineHeight: 1.65, margin: 0, fontFamily: "'Inter',sans-serif" }}>
                        {card.desc}
                      </p>
                    </div>

                    {/* Keyword pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 20 }}>
                      {card.pills.map((pill, pi) => (
                        <span key={pi} style={{
                          fontSize: 11, fontWeight: 700, color: "#4F26D2",
                          background: "rgba(79,38,210,0.07)",
                          border: "1px solid rgba(79,38,210,0.15)",
                          padding: "4px 10px", borderRadius: 8,
                        }}>{pill}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Panel>
          )}

          {/* ─── TOOLKIT ─── */}
          {activeTab === 'toolkit' && (
            <Panel key="toolkit">
              <SubHeader
                icon={<Wrench size={12} color="#4F26D2" />}
                badge="Industry Stack"
                title="The Toolkit You'll Master Hands-On"
                right={
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {["All", "Ads", "Analytics", "Funnel", "SEO", "AI", "Retention"].map(c => (
                      <button key={c} onClick={() => setActiveToolCat(c)} style={{
                        padding: "5px 13px", borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: "pointer",
                        border: "1.5px solid rgba(79,38,210,0.16)",
                        background: activeToolCat === c ? "#4F26D2" : "#fff",
                        color: activeToolCat === c ? "#fff" : "#140B30",
                        transition: "all 0.2s",
                      }}>{c}</button>
                    ))}
                  </div>
                }
              />

              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }}>
                {filteredTools.map((t, i) => (
                  <motion.div key={i}
                    whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(79,38,210,0.12)", borderColor: "#8B5CF6" }}
                    transition={{ duration: 0.2 }}
                    style={{
                      background: "#fff",
                      border: "1.5px solid rgba(79,38,210,0.1)",
                      borderRadius: 18,
                      padding: "20px 18px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}>
                    <div>
                      <span style={{ fontSize: 10, fontWeight: 800, color: "#4F26D2", background: "rgba(79,38,210,0.08)", padding: "3px 8px", borderRadius: 7 }}>{t.cat}</span>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#140B30", margin: "10px 0 5px", lineHeight: 1.2 }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: "#9D8FC0", fontFamily: "'Inter',sans-serif", lineHeight: 1.5 }}>{t.desc}</div>
                    </div>
                    <div style={{ paddingTop: 12, marginTop: 12, borderTop: "1px solid rgba(79,38,210,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#4F26D2" }}>{t.level}</span>
                      <Sparkles size={12} color="#8B5CF6" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Panel>
          )}

        </AnimatePresence>
      </div>

    </section>
  );
}
