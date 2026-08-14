"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck, Star, Sparkles, ArrowRight, BarChart2, Search, Mail, Globe, Target, Zap, CheckCircle2 } from "lucide-react";

/* ─────────────────────────────────────────────
   CERTIFICATE DATA  — grouped by provider
───────────────────────────────────────────── */
const semrush = [
  { name: "PPC Fundamentals",           provider: "SEMrush", icon: <Target size={15} />,    color: "#FF642D" },
  { name: "SEO Fundamentals",           provider: "SEMrush", icon: <Search size={15} />,    color: "#FF642D" },
  { name: "Social Media",               provider: "SEMrush", icon: <Star size={15} />,      color: "#FF642D" },
  { name: "Content Marketing",          provider: "SEMrush", icon: <Award size={15} />,     color: "#FF642D" },
];

const hubspot = [
  { name: "SEO Certification",                  provider: "HubSpot", icon: <Search size={15} />,    color: "#FF7A59" },
  { name: "Digital Marketing",                  provider: "HubSpot", icon: <Globe size={15} />,     color: "#FF7A59" },
  { name: "Social Media Marketing",             provider: "HubSpot", icon: <Star size={15} />,      color: "#FF7A59" },
  { name: "Email Marketing",                    provider: "HubSpot", icon: <Mail size={15} />,      color: "#FF7A59" },
  { name: "Inbound Marketing",                  provider: "HubSpot", icon: <Zap size={15} />,       color: "#FF7A59" },
  { name: "Content Marketing",                  provider: "HubSpot", icon: <Award size={15} />,     color: "#FF7A59" },
];

const google = [
  { name: "Google My Business",            provider: "Google", icon: <Globe size={15} />,     color: "#34A853" },
  { name: "Google Analytics (GA4)",        provider: "Google", icon: <BarChart2 size={15} />, color: "#4285F4" },
  { name: "Google Ads Shopping",           provider: "Google", icon: <Target size={15} />,    color: "#EA4335" },
  { name: "Performance Max",               provider: "Google", icon: <Zap size={15} />,       color: "#FBBC04" },
  { name: "Google Ads Video",              provider: "Google", icon: <Star size={15} />,      color: "#EA4335" },
  { name: "Google Ads Display",            provider: "Google", icon: <Award size={15} />,     color: "#34A853" },
  { name: "Fundamentals of Digital Mkt",  provider: "Google", icon: <Globe size={15} />,     color: "#4285F4" },
  { name: "Google Ads Search",             provider: "Google", icon: <Search size={15} />,    color: "#FBBC04" },
];

const meta = [
  { name: "Community Manager",         provider: "Meta", price: "$99",  icon: <Star size={15} />,       color: "#0082FB" },
  { name: "Creative Strategy Pro",     provider: "Meta", price: "$150", icon: <Sparkles size={15} />,   color: "#0082FB" },
  { name: "Media Planning Pro",        provider: "Meta", price: "$150", icon: <BarChart2 size={15} />,  color: "#0082FB" },
  { name: "Marketing Science Pro",     provider: "Meta", price: "$150", icon: <Award size={15} />,      color: "#0082FB" },
  { name: "Digital Marketing Assoc.",  provider: "Meta", price: "$99",  icon: <BadgeCheck size={15} />, color: "#0082FB" },
  { name: "Media Buying Pro",          provider: "Meta", price: "$150", icon: <Target size={15} />,     color: "#0082FB" },
];

const providerBadge = {
  SEMrush: { bg: "rgba(255,100,45,0.15)",  text: "#FF642D" },
  HubSpot: { bg: "rgba(255,122,89,0.15)",  text: "#FF7A59" },
  Google:  { bg: "rgba(66,133,244,0.15)",  text: "#4285F4" },
  Meta:    { bg: "rgba(0,130,251,0.15)",   text: "#0082FB" },
};

/* ─────────────────────────────────────────────
   COMPACT VERTICAL CARD
───────────────────────────────────────────── */
function CertCard({ cert }) {
  const badge = providerBadge[cert.provider] || { bg: "rgba(167,139,250,0.15)", text: "#A78BFA" };
  return (
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      width: "100%",
      background: "rgba(255,255,255,0.03)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: 16,
      padding: "16px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
      marginBottom: 14,
    }}>
      {/* subtle top accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, ${cert.color}, transparent)` }} />

      {/* icon + provider */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 10,
          background: cert.color + "18",
          border: `1px solid ${cert.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: cert.color,
        }}>
          {cert.icon}
        </div>
        <div style={{
          fontSize: 9, fontWeight: 800,
          background: badge.bg, color: badge.text,
          borderRadius: 999, padding: "2px 8px",
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          {cert.provider}
        </div>
      </div>

      {/* name */}
      <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 800, color: "white", lineHeight: 1.3 }}>
        {cert.name}
      </p>

      {/* footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {cert.price ? (
          <span style={{ fontSize: 9, fontWeight: 800, color: cert.color, background: cert.color + "15", borderRadius: 4, padding: "2px 6px" }}>
            {cert.price} exam
          </span>
        ) : (
          <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Included
          </span>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 2, color: cert.color, fontSize: 9, fontWeight: 800, textTransform: "uppercase" }}>
          <span>View</span><ArrowRight size={9} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VERTICAL INFINITE MARQUEE COLUMN
───────────────────────────────────────────── */
function VerticalInfiniteCol({ certs, direction = "down", speed = 25 }) {
  const loop = [...certs, ...certs, ...certs]; // triple for seamless loop
  return (
    <div style={{ overflow: "hidden", height: "100%" }}>
      <motion.div
        animate={{ y: direction === "down" ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((cert, i) => <CertCard key={i} cert={cert} />)}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function CertificationSection() {
  const col1Certs = [...google, ...meta];
  const col2Certs = [...hubspot, ...semrush];

  return (
    <section id="certs" data-stage="CERTS" style={{
      padding: "90px 4% 90px",
      background: "#0F0A1F",
      color: "white",
      overflow: "hidden",
      borderTop: "1px solid rgba(139,92,246,0.12)",
      borderBottom: "1px solid rgba(139,92,246,0.12)",
      fontFamily: "'DM Sans','Segoe UI',system-ui,sans-serif",
      position: "relative",
    }}>
      {/* ambient background glow */}
      <div style={{ position: "absolute", top: "10%", left: "30%", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* ── MAIN SECTION HEADER ── */}
      <div style={{ textAlign: "center", marginBottom: 54, position: "relative", zIndex: 2 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.28)",
          borderRadius: 999, padding: "6px 18px", marginBottom: 18,
        }}>
          <ShieldCheck size={12} color="#A78BFA" />
          <span style={{ fontSize: 10, fontWeight: 800, color: "#A78BFA", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Proof That Travels
          </span>
        </div>

        <h2 style={{ margin: "0 0 14px", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
          <span style={{ display: "block", fontSize: "clamp(34px, 4.8vw, 56px)", fontWeight: 900, color: "white" }}>
            Credentials Built For The
          </span>
          <span style={{
            display: "inline-block", fontSize: "clamp(34px, 4.8vw, 56px)", fontWeight: 900, fontStyle: "italic",
            fontFamily: "'Playfair Display', Georgia, serif",
            background: "linear-gradient(90deg, #A78BFA 0%, #7C3AED 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Real Market
          </span>
        </h2>

        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", maxWidth: 520, margin: "0 auto", lineHeight: 1.65, fontWeight: 500 }}>
          Graduate with official revenue capstone validation, plus 30+ industry credentials recruiters actively search for.
        </p>
      </div>

      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "48px", alignItems: "flex-start", position: "relative", zIndex: 2
      }}>

        {/* ── LEFT SIDE (50%): TREQO CERTIFICATION ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
          
          {/* Header Info Left */}
          <div style={{ marginBottom: 20 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: 999, padding: "5px 14px", marginBottom: 12,
            }}>
              <ShieldCheck size={12} color="#A78BFA" />
              <span style={{ fontSize: 10, fontWeight: 800, color: "#A78BFA", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                CAPSTONE REVENUE PROOF
              </span>
            </div>

            <h3 style={{ margin: "0 0 8px", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 900, color: "white", lineHeight: 1.15 }}>
              TREQO Certification
            </h3>

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.55 }}>
              Awarded on completion of your capstone project — a real campaign, built &amp; launched with real numbers attached.
            </p>
          </div>

          <div style={{
            width: "100%",
            background: "rgba(20, 14, 42, 0.85)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(167, 139, 250, 0.28)",
            borderRadius: 28,
            padding: "32px 28px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.45)",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box"
          }}>
            {/* Top decorative accent line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #A78BFA 0%, #7C3AED 50%, #4285F4 100%)" }} />

            {/* REAL CERTIFICATE DISPLAY / EMBED CONTAINER */}
            <div style={{
              position: "relative",
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid rgba(167, 139, 250, 0.3)",
              background: "rgba(255,255,255,0.02)",
              padding: "10px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.5)"
            }}>
              <img 
                src="/treqo-certificate.jpg" 
                alt="TREQO Official Certificate of Completion" 
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  borderRadius: 14, 
                  display: "block" 
                }} 
              />
            </div>

            {/* Sub-caption below certificate */}
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", textAlign: "center", margin: "14px 0 0", lineHeight: 1.5 }}>
              Shareable on LinkedIn &amp; directly reviewed by placement hiring managers.
            </p>

          </div>

        </div>

        {/* ── RIGHT SIDE (50%): OTHER INDUSTRY CERTIFICATION ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          
          {/* Header Info Right */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)",
              borderRadius: 999, padding: "5px 14px", marginBottom: 12,
            }}>
              <ShieldCheck size={12} color="#A78BFA" />
              <span style={{ fontSize: 10, fontWeight: 800, color: "#A78BFA", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                GLOBAL CREDENTIALS
              </span>
            </div>

            <h3 style={{ margin: "0 0 8px", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 900, color: "white", lineHeight: 1.15 }}>
              Other Industry Certification
            </h3>

            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.55 }}>
              From Google &amp; Meta to HubSpot &amp; SEMrush — graduate with 30+ credentials recruiters look for.
            </p>

            {/* Provider Badges */}
            <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              {[
                { name: "Google", bg: "rgba(66,133,244,0.12)", text: "#4285F4", count: "8 certs" },
                { name: "Meta",   bg: "rgba(0,130,251,0.12)",  text: "#0082FB", count: "6 certs" },
                { name: "HubSpot",bg: "rgba(255,122,89,0.12)", text: "#FF7A59", count: "6 certs" },
                { name: "SEMrush",bg: "rgba(255,100,45,0.12)", text: "#FF642D", count: "4 certs" },
              ].map(p => (
                <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 6, background: p.bg, border: `1px solid ${p.text}22`, borderRadius: 999, padding: "4px 10px" }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: p.text }}>{p.name}</span>
                  <span style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.3)" }}>{p.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── VERTICAL FLOWING MARQUEE (UPSIDE & DOWN) ── */}
          <div style={{
            height: 380,
            overflow: "hidden",
            position: "relative",
            maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16
          }}>
            {/* Column 1: Flows Downward (Top to Bottom) */}
            <VerticalInfiniteCol certs={col1Certs} direction="down" speed={28} />

            {/* Column 2: Flows Upward (Bottom to Top) */}
            <VerticalInfiniteCol certs={col2Certs} direction="up" speed={24} />
          </div>

          {/* Footer note */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 12, padding: "8px 16px", width: "fit-content"
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 6px #4ADE80" }} />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
              Google, HubSpot &amp; SEMrush certifications included in fee.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
