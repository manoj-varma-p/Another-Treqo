'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Sparkles,
  ArrowRight,
  Linkedin,
  Briefcase,
  Star,
} from "lucide-react";
import { DoodleBadge } from "./Doodles";

const tutorData = [
  {
    id: 1,
    name: "Lokesh Dama",
    role: "Product Management",
    experience: "Founder",
    details:
      "Founder of TAC. Teaches product thinking, execution, and scaling digital products.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    company: "TAC",
    linkedin:
      "https://www.linkedin.com/in/lokeshdama2030",
  },
  {
    id: 2,
    name: "Valli Sayyad",
    role: "Digital Marketing",
    experience: "7 Years",
    details:
      "Chief Growth Officer at TAC. Expert in performance marketing and scaling brands.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    company: "TAC",
    linkedin:
      "https://www.linkedin.com/in/vali-sayyad-895402160",
  },
  {
    id: 3,
    name: "Durga Sai Vasagiri",
    role: "AI in Marketing",
    experience: "Co-Founder",
    details:
      "Co-founder of TAC. Focuses on AI-driven marketing strategies and automation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    company: "TAC",
    linkedin:
      "https://www.linkedin.com/in/durgasaiv",
  },
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: i + 4,
    name: "Coming Soon",
    role: "TBA",
    experience: "Industry Leader",
    details: "New expert mentors will be revealed soon.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    company: "TAC",
    linkedin: "#",
  })),
];

export default function TutorExperience() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section
      className="relative w-full py-20 overflow-hidden"
      style={{
        background: "#F3F0E7",
        color: "#0A0A0A",
        padding: "80px 80px",
      }}
    >
      <div style={{ maxWidth: 1540, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: "12px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#ffffff",
                border: "1.5px solid #6D28FF",
                color: "#6D28FF",
                padding: "5px 14px",
                borderRadius: "999px",
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                boxShadow: "2px 2px 0px rgba(109, 40, 255, 0.25)",
              }}
            >
              <Sparkles size={12} color="#6D28FF" />
              <span>Meet the Masters</span>
            </div>
            <DoodleBadge text="THE PRACTITIONERS" rotate={2} />
          </div>

          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: "clamp(2.2rem, 4.2vw, 3.8rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              textTransform: "uppercase",
              margin: "0 0 12px",
              color: "#0A0A0A",
            }}
          >
            The Treqo{" "}
            <span
              style={{
                color: "#ffffff",
                background: "#6D28FF",
                padding: "2px 14px",
                display: "inline-block",
                border: "2.5px solid #0A0A0A",
                boxShadow: "4px 4px 0px #0A0A0A",
                transform: "rotate(-1deg)",
              }}
            >
              Tutors
            </span>
          </h2>
        </div>

        {/* Horizontal Accordion in Treqo Neo-Brutalist Theme */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            height: "500px",
            width: "100%",
          }}
          className="tutor-accordion-wrap"
        >
          {tutorData.map((tutor) => {
            const isActive = activeId === tutor.id;

            return (
              <motion.div
                key={tutor.id}
                layout
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveId(tutor.id)}
                style={{
                  flex: isActive ? 6.5 : 1,
                  minWidth: isActive ? "320px" : "64px",
                  background: isActive ? "#FAF9F8" : "#0A0A0A",
                  border: "2.5px solid #0A0A0A",
                  borderRadius: "18px",
                  boxShadow: isActive ? "6px 6px 0px #6D28FF" : "3px 3px 0px #0A0A0A",
                  position: "relative",
                  cursor: "pointer",
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                {/* Collapsed */}
                {!isActive && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "24px 0",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255, 255, 255, 0.4)",
                        fontFamily: "var(--ff-mono, monospace)",
                        fontWeight: 900,
                        fontSize: "12px",
                      }}
                    >
                      0{tutor.id}
                    </span>
                    <p
                      style={{
                        color: "#ffffff",
                        fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "0.22em",
                        transform: "rotate(180deg)",
                        writingMode: "vertical-lr",
                        fontSize: "11px",
                        opacity: 0.85,
                        margin: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tutor.name}
                    </p>
                    <Plus size={16} color="rgba(255, 255, 255, 0.5)" />
                  </div>
                )}

                {/* Expanded */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        display: "flex",
                        width: "100%",
                        height: "100%",
                        padding: "20px",
                        gap: "24px",
                        alignItems: "center",
                      }}
                      className="tutor-card-inner"
                    >
                      {/* Image */}
                      <div
                        style={{
                          position: "relative",
                          width: "42%",
                          height: "100%",
                          borderRadius: "14px",
                          overflow: "hidden",
                          border: "2px solid #0A0A0A",
                          flexShrink: 0,
                          background: "#0A0A0A",
                        }}
                      >
                        <img
                          src={tutor.image}
                          alt={tutor.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />

                        <div
                          style={{
                            position: "absolute",
                            bottom: "12px",
                            left: "12px",
                            background: "rgba(10, 10, 10, 0.85)",
                            backdropFilter: "blur(8px)",
                            color: "#ffffff",
                            border: "1.5px solid #6D28FF",
                            padding: "4px 12px",
                            borderRadius: "8px",
                            fontSize: "11px",
                            fontWeight: 900,
                            fontFamily: "var(--ff-mono, monospace)",
                          }}
                        >
                          {tutor.company}
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          paddingRight: "12px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                          <Star size={14} color="#6D28FF" />
                          <span
                            style={{
                              fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                              fontSize: "11px",
                              fontWeight: 900,
                              color: "#6D28FF",
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                            }}
                          >
                            {tutor.role}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                            fontSize: "clamp(24px, 2.6vw, 34px)",
                            fontWeight: 900,
                            color: "#0A0A0A",
                            margin: "0 0 10px",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {tutor.name}
                        </h3>

                        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "14px", flexWrap: "wrap" }}>
                          {tutor.experience && (
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                              <Briefcase size={14} color="#6D28FF" />
                              <span style={{ fontSize: "13px", fontWeight: 800, color: "#333333", fontFamily: "var(--ff-mono, monospace)" }}>
                                {tutor.experience}
                              </span>
                            </div>
                          )}

                          {tutor.linkedin !== "#" && (
                            <a
                              href={tutor.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                color: "#6D28FF",
                                fontSize: "13px",
                                fontWeight: 800,
                                textDecoration: "none",
                                background: "#ffffff",
                                border: "1.5px solid #6D28FF",
                                padding: "3px 10px",
                                borderRadius: "6px",
                              }}
                            >
                              <Linkedin size={13} />
                              <span>LinkedIn Profile</span>
                            </a>
                          )}
                        </div>

                        <p
                          style={{
                            fontSize: "14px",
                            color: "#444444",
                            lineHeight: "1.55",
                            margin: "0 0 20px",
                            fontWeight: 500,
                            maxWidth: "460px",
                          }}
                        >
                          {tutor.details}
                        </p>

                        <div>
                          <button
                            type="button"
                            style={{
                              background: "#6D28FF",
                              color: "#ffffff",
                              border: "2px solid #0A0A0A",
                              borderRadius: "10px",
                              padding: "12px 22px",
                              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                              fontSize: "13px",
                              fontWeight: 900,
                              letterSpacing: "0.04em",
                              textTransform: "uppercase",
                              cursor: "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              boxShadow: "3px 3px 0px #0A0A0A",
                            }}
                          >
                            <span>View Case Studies</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
